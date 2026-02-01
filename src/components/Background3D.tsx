import { useEffect, useRef } from 'react';

const Background3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { alpha: true });
    if (!gl) return;

    // Magical Blue Fire Configuration
    const particleCount = 700; 
    const particles = new Float32Array(particleCount * 7); // x, y, speed, r, g, b, alpha

    function resetParticle(i: number, randomY: boolean = false) {
      const idx = i * 7;
      particles[idx] = (Math.random() * 2 - 1);     
      particles[idx + 1] = randomY ? (Math.random() * 2 - 1) : -1.1; 
      particles[idx + 2] = Math.random() * 0.5 + 0.3; // Steady speed
      
      const type = Math.random();
      if (type > 0.7) {
        // Cyan Magic
        particles[idx + 3] = 0.3; 
        particles[idx + 4] = 0.8; 
        particles[idx + 5] = 1.0;
      } else if (type > 0.3) {
        // Deep Electric Blue
        particles[idx + 3] = 0.1; 
        particles[idx + 4] = 0.3; 
        particles[idx + 5] = 1.0;
      } else {
        // Mystic Violet/Blue
        particles[idx + 3] = 0.5; 
        particles[idx + 4] = 0.1; 
        particles[idx + 5] = 1.0;
      }
      
      particles[idx + 6] = Math.random() * 0.8; 
    }

    for (let i = 0; i < particleCount; i++) {
      resetParticle(i, true);
    }

    const vsSource = `
      attribute vec2 a_position;
      attribute float a_speed;
      attribute vec3 a_color;
      attribute float a_alpha;
      varying vec3 v_color;
      varying float v_alpha;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
        float sizeMod = max(0.0, (1.2 - a_position.y) * 0.5); 
        // Slightly thicker particles
        gl_PointSize = (4.0 + a_speed * 10.0) * sizeMod;
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
        // Slightly softer glow for "thicker" appearance
        float glow = pow(1.0 - (dist * 2.0), 1.4);
        gl_FragColor = vec4(v_color, v_alpha * glow);
      }
    `;

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

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    
    const stride = 7 * 4;
    const posLoc = gl.getAttribLocation(program, 'a_position');
    const speedLoc = gl.getAttribLocation(program, 'a_speed');
    const colorLoc = gl.getAttribLocation(program, 'a_color');
    const alphaLoc = gl.getAttribLocation(program, 'a_alpha');

    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, stride, 0);
    gl.enableVertexAttribArray(speedLoc);
    gl.vertexAttribPointer(speedLoc, 1, gl.FLOAT, false, stride, 8);
    gl.enableVertexAttribArray(colorLoc);
    gl.vertexAttribPointer(colorLoc, 3, gl.FLOAT, false, stride, 12);
    gl.enableVertexAttribArray(alphaLoc);
    gl.vertexAttribPointer(alphaLoc, 1, gl.FLOAT, false, stride, 24);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE); 

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener('resize', resize);
    resize();

    let animationFrame: number;
    let time = 0;

    const render = () => {
      time += 0.01;
      
      // Deep Space Blue/Black background
      gl.clearColor(0.005, 0.005, 0.02, 1.0); 
      gl.clear(gl.COLOR_BUFFER_BIT);

      for (let i = 0; i < particleCount; i++) {
        const idx = i * 7;
        const speed = particles[idx + 2];
        
        particles[idx + 1] += 0.002 * speed + 0.0015;
        particles[idx] += Math.sin(time * 1.2 + i + particles[idx+1] * 2.5) * 0.0015;

        let alpha = 1.0;
        if (particles[idx + 1] > 0.3) {
            alpha = 1.0 - ((particles[idx + 1] - 0.3) * 1.1);
        }
        
        // Pulsating magical flicker
        particles[idx + 6] = Math.max(0, alpha * (0.5 + Math.sin(time * 2.0 + i) * 0.3));

        if (particles[idx + 1] > 1.0 || particles[idx + 6] <= 0.0) {
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