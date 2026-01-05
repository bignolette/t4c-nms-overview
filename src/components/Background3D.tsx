import { useEffect, useRef } from 'react';

const Background3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    const particleCount = 200;
    const particles = new Float32Array(particleCount * 6); // x, y, size, r, g, b

    for (let i = 0; i < particleCount; i++) {
      particles[i * 6] = (Math.random() * 2 - 1);     // x
      particles[i * 6 + 1] = (Math.random() * 2 - 1); // y
      particles[i * 6 + 2] = Math.random();           // speed/life
      
      // Default amber
      particles[i * 6 + 3] = 0.96; // r
      particles[i * 6 + 4] = 0.65; // g
      particles[i * 6 + 5] = 0.1;  // b
    }

    const vsSource = `
      attribute vec2 a_position;
      attribute float a_life;
      attribute vec3 a_color;
      varying float v_life;
      varying vec3 v_color;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
        gl_PointSize = 2.0 + (a_life * 8.0);
        v_life = a_life;
        v_color = a_color;
      }
    `;

    const fsSource = `
      precision mediump float;
      varying float v_life;
      varying vec3 v_color;
      void main() {
        float dist = distance(gl_PointCoord, vec2(0.5, 0.5));
        if (dist > 0.5) discard;
        gl_FragColor = vec4(v_color, (1.0 - dist * 2.0) * v_life * 0.5);
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
    
    const posLoc = gl.getAttribLocation(program, 'a_position');
    const lifeLoc = gl.getAttribLocation(program, 'a_life');
    const colorLoc = gl.getAttribLocation(program, 'a_color');

    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 24, 0);
    gl.enableVertexAttribArray(lifeLoc);
    gl.vertexAttribPointer(lifeLoc, 1, gl.FLOAT, false, 24, 8);
    gl.enableVertexAttribArray(colorLoc);
    gl.vertexAttribPointer(colorLoc, 3, gl.FLOAT, false, 24, 12);

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
    const render = () => {
      gl.clearColor(0.01, 0.03, 0.08, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      for (let i = 0; i < particleCount; i++) {
        // Horizontal movement
        particles[i * 6] += (Math.random() - 0.5) * 0.001;
        // Upward movement
        particles[i * 6 + 1] += 0.001 * particles[i * 6 + 2];

        // Reset if out of bounds or randomly
        if (particles[i * 6 + 1] > 1 || Math.random() > 0.995) {
          particles[i * 6] = (Math.random() * 2 - 1);
          particles[i * 6 + 1] = -1.1;
          
          // Randomly change color to simulate spells
          const type = Math.random();
          if (type > 0.9) { // Blue magic
            particles[i * 6 + 3] = 0.2; 
            particles[i * 6 + 4] = 0.4; 
            particles[i * 6 + 5] = 1.0;
          } else if (type > 0.8) { // Fire magic
            particles[i * 6 + 3] = 1.0; 
            particles[i * 6 + 4] = 0.2; 
            particles[i * 6 + 5] = 0.1;
          } else { // Classic amber
            particles[i * 6 + 3] = 0.96; 
            particles[i * 6 + 4] = 0.65; 
            particles[i * 6 + 5] = 0.1;
          }
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