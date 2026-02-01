import { useEffect, useRef } from 'react';

const Background3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { alpha: true });
    if (!gl) return;

    // --- CONFIGURATION ---
    const particleCount = 600; 
    // Data layout: x, y, speed, r, g, b, alpha
    const particles = new Float32Array(particleCount * 7); 

    // --- PARTICLE INITIALIZATION ---
    function resetParticle(i: number, randomY: boolean = false) {
      const idx = i * 7;
      particles[idx] = (Math.random() * 2 - 1);     
      particles[idx + 1] = randomY ? (Math.random() * 2 - 1) : -1.2; 
      particles[idx + 2] = Math.random() * 0.5 + 0.3; // Speed
      
      // Magic Blue Palette
      const type = Math.random();
      if (type > 0.7) { // Cyan
        particles[idx + 3] = 0.2; particles[idx + 4] = 0.9; particles[idx + 5] = 1.0;
      } else if (type > 0.3) { // Electric Blue
        particles[idx + 3] = 0.1; particles[idx + 4] = 0.4; particles[idx + 5] = 1.0;
      } else { // Deep Violet
        particles[idx + 3] = 0.6; particles[idx + 4] = 0.1; particles[idx + 5] = 1.0;
      }
      
      particles[idx + 6] = Math.random() * 0.8; // Alpha
    }

    for (let i = 0; i < particleCount; i++) resetParticle(i, true);

    // --- SHADERS ---
    const vsSource = `
      attribute vec2 a_position;
      attribute float a_speed;
      attribute vec3 a_color;
      attribute float a_alpha;
      varying vec3 v_color;
      varying float v_alpha;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
        float sizeMod = max(0.2, (1.2 - a_position.y) * 0.5); 
        // Balanced thickness for pure magic fire
        gl_PointSize = (3.5 + a_speed * 9.0) * sizeMod; 
        v_color = a_color;
        v_alpha = a_alpha;
      }
    `;

    const fsSource = `
      precision mediump float;
      varying vec3 v_color;
      varying float v_alpha;
      void main() {
        float dist = distance(gl_PointCoord, vec2(0.5, 0.5));
        if (dist > 0.5) discard;
        // Sharper glow
        float glow = pow(1.0 - (dist * 2.0), 2.5);
        gl_FragColor = vec4(v_color, v_alpha * glow);
      }
    `;

    // Boilerplate Shader Compilation
    const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };
    const program = gl.createProgram()!;
    gl.attachShader(program, createShader(gl, gl.VERTEX_SHADER, vsSource));
    gl.attachShader(program, createShader(gl, gl.FRAGMENT_SHADER, fsSource));
    gl.linkProgram(program);
    gl.useProgram(program);

    // --- BUFFERS ---
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    const stride = 7 * 4; 
    
    const locs = {
      pos: gl.getAttribLocation(program, 'a_position'),
      speed: gl.getAttribLocation(program, 'a_speed'), 
      color: gl.getAttribLocation(program, 'a_color'),
      alpha: gl.getAttribLocation(program, 'a_alpha')
    };

    gl.enableVertexAttribArray(locs.pos);
    gl.vertexAttribPointer(locs.pos, 2, gl.FLOAT, false, stride, 0);
    gl.enableVertexAttribArray(locs.speed);
    gl.vertexAttribPointer(locs.speed, 1, gl.FLOAT, false, stride, 8);
    gl.enableVertexAttribArray(locs.color);
    gl.vertexAttribPointer(locs.color, 3, gl.FLOAT, false, stride, 12);
    gl.enableVertexAttribArray(locs.alpha);
    gl.vertexAttribPointer(locs.alpha, 1, gl.FLOAT, false, stride, 24);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    window.addEventListener('resize', resize);
    resize();

    // --- ANIMATION LOOP ---
    let animationFrame: number;
    let time = 0;
    
    const render = () => {
      time += 0.008;
      const globalShift = (Math.sin(time * 0.4) + 1) / 2; // Global transition factor

      // Background color also shifts slightly (Blueish-Black to Reddish-Black)
      gl.clearColor(0.005 + 0.01 * globalShift, 0.002, 0.015 - 0.01 * globalShift, 1.0); 
      gl.clear(gl.COLOR_BUFFER_BIT);

      for (let i = 0; i < particleCount; i++) {
        const idx = i * 7;
        
        // Physics
        const speed = particles[idx + 2];
        const py = particles[idx + 1];
        
        // Upward flow
        particles[idx + 1] += 0.002 * speed + 0.001; 
        // Horizontal drift with entropy
        particles[idx] += Math.sin(time * 1.5 + i + py * 2.0) * 0.0015;

        // Individual color shift based on global shift + vertical position + index
        const localShift = Math.max(0, Math.min(1, globalShift + Math.sin(time + i * 0.1 + py * 2.0) * 0.2));

        // Magic targets (Blues/Purples)
        const mr = i % 3 === 0 ? 0.1 : 0.4;
        const mg = i % 3 === 0 ? 0.4 : 0.1;
        const mb = 1.0;
        
        // Fire targets (Oranges/Reds)
        const fr = 1.0;
        const fg = i % 3 === 0 ? 0.6 : 0.2;
        const fb = 0.0;

        particles[idx + 3] = mr + (fr - mr) * localShift;
        particles[idx + 4] = mg + (fg - mg) * localShift;
        particles[idx + 5] = mb + (fb - mb) * localShift;

        // Fade logic
        let alpha = 1.0;
        if (py > 0.3) alpha = 1.0 - ((py - 0.3) * 1.1);
        particles[idx + 6] = Math.max(0, alpha * (0.6 + Math.sin(time * 3.0 + i) * 0.2)); 

        if (py > 1.0 || particles[idx + 6] <= 0.0) {
            resetParticle(i);
        }
      }

      gl.bufferData(gl.ARRAY_BUFFER, particles, gl.DYNAMIC_DRAW);
      gl.drawArrays(gl.POINTS, 0, particleCount);
      animationFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
};

export default Background3D;