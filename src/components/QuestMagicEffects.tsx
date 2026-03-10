import { useEffect, useRef } from 'react';

interface QuestMagicEffectsProps {
  progress: number;
  stepComplete: boolean;
  isBossStep: boolean;
  burstTrigger: number;
}

// ─── GLSL Shaders ───

const VERTEX_SHADER = `
  attribute vec2 a_position;
  attribute float a_size;
  attribute vec4 a_color;
  attribute float a_type;
  varying vec4 v_color;
  varying float v_type;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
    gl_PointSize = a_size;
    v_color = a_color;
    v_type = a_type;
  }
`;

const FRAGMENT_SHADER = `
  precision mediump float;
  varying vec4 v_color;
  varying float v_type;

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float dist = length(uv);
    if (dist > 0.5) discard;

    float alpha;
    vec3 color = v_color.rgb;

    if (v_type < 0.5) {
      // Type 0: Soft orb
      alpha = pow(1.0 - dist * 2.0, 2.0) * v_color.a;
    } else if (v_type < 1.5) {
      // Type 1: Rune ring
      float ring = smoothstep(0.3, 0.38, dist) * (1.0 - smoothstep(0.42, 0.5, dist));
      float core = pow(1.0 - dist * 2.0, 3.0) * 0.4;
      alpha = (ring + core) * v_color.a;
    } else {
      // Type 2: Spark — bright white-hot core
      alpha = pow(1.0 - dist * 2.0, 2.5) * v_color.a;
      color = mix(color, vec3(1.0), pow(1.0 - dist * 2.0, 4.0));
    }

    gl_FragColor = vec4(color, alpha);
  }
`;

// ─── Particle System ───

const AMBIENT_COUNT = 80;
const RUNE_COUNT = 12;
// 8 burst origins × 40 sparks each = 320 burst particles
const BURST_ORIGINS = 8;
const SPARKS_PER_ORIGIN = 40;
const BURST_COUNT = BURST_ORIGINS * SPARKS_PER_ORIGIN;
const TOTAL = AMBIENT_COUNT + RUNE_COUNT + BURST_COUNT;
// Layout: x, y, vx, vy, size, r, g, b, a, type, life, maxLife, originX, originY
const FLOATS_PER = 14;

const QuestMagicEffects = ({ progress, stepComplete, isBossStep, burstTrigger }: QuestMagicEffectsProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const propsRef = useRef({ progress, stepComplete, isBossStep, burstTrigger });
  propsRef.current = { progress, stepComplete, isBossStep, burstTrigger };

  const dataRef = useRef({
    particles: new Float32Array(TOTAL * FLOATS_PER),
    lastBurst: 0,
    progressSmooth: 0,
  });

  // Spawn burst across multiple random origins
  useEffect(() => {
    if (burstTrigger === 0) return;
    const d = dataRef.current;
    const startIdx = AMBIENT_COUNT + RUNE_COUNT;

    // Base theme colors
    const baseColors: [number, number, number][] = stepComplete
      ? [[0.15, 0.85, 0.5], [0.2, 1.0, 0.6], [0.1, 0.7, 0.9], [0.4, 1.0, 0.4]]
      : [[0.96, 0.62, 0.04], [1.0, 0.4, 0.1], [1.0, 0.8, 0.2], [0.9, 0.3, 0.6]];

    // Generate random burst origins spread across the screen
    const origins: [number, number][] = [];
    for (let o = 0; o < BURST_ORIGINS; o++) {
      origins.push([
        (Math.random() - 0.5) * 1.8, // x: spread across most of the screen
        (Math.random() - 0.5) * 1.4, // y: spread vertically
      ]);
    }

    for (let o = 0; o < BURST_ORIGINS; o++) {
      const [ox, oy] = origins[o];
      const [cr, cg, cb] = baseColors[o % baseColors.length];

      for (let s = 0; s < SPARKS_PER_ORIGIN; s++) {
        const i = startIdx + o * SPARKS_PER_ORIGIN + s;
        const idx = i * FLOATS_PER;
        const angle = (s / SPARKS_PER_ORIGIN) * Math.PI * 2 + Math.random() * 0.5;
        const speed = 0.012 + Math.random() * 0.035;
        d.particles[idx + 0] = ox;
        d.particles[idx + 1] = oy;
        d.particles[idx + 2] = Math.cos(angle) * speed;
        d.particles[idx + 3] = Math.sin(angle) * speed;
        d.particles[idx + 4] = 5 + Math.random() * 12;
        d.particles[idx + 5] = cr + (Math.random() - 0.3) * 0.15;
        d.particles[idx + 6] = cg + (Math.random() - 0.3) * 0.15;
        d.particles[idx + 7] = cb + (Math.random() - 0.3) * 0.15;
        d.particles[idx + 8] = 1.0;
        d.particles[idx + 9] = 2; // spark type
        d.particles[idx + 10] = 0;
        d.particles[idx + 11] = 50 + Math.random() * 50; // longer life
      }
    }
  }, [burstTrigger, stepComplete]);

  // Single WebGL setup — runs once
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false });
    if (!gl) {
      console.warn('QuestMagicEffects: WebGL not available');
      return;
    }

    const d = dataRef.current;

    // ─── Init Ambient Particles ───
    for (let i = 0; i < AMBIENT_COUNT; i++) {
      const idx = i * FLOATS_PER;
      d.particles[idx + 0] = (Math.random() - 0.5) * 2.2;
      d.particles[idx + 1] = (Math.random() - 0.5) * 2.2;
      d.particles[idx + 2] = (Math.random() - 0.5) * 0.001;
      d.particles[idx + 3] = 0.0008 + Math.random() * 0.0015;
      d.particles[idx + 4] = 3 + Math.random() * 6;
      d.particles[idx + 5] = 0.96;
      d.particles[idx + 6] = 0.62;
      d.particles[idx + 7] = 0.04;
      d.particles[idx + 8] = Math.random() * 0.5;
      d.particles[idx + 9] = 0;
      d.particles[idx + 10] = Math.random() * 200;
      d.particles[idx + 11] = 200 + Math.random() * 300;
    }

    // ─── Init Rune Particles ───
    for (let i = 0; i < RUNE_COUNT; i++) {
      const idx = (AMBIENT_COUNT + i) * FLOATS_PER;
      const angle = (i / RUNE_COUNT) * Math.PI * 2;
      const radius = 0.6 + Math.random() * 0.3;
      d.particles[idx + 0] = Math.cos(angle) * radius;
      d.particles[idx + 1] = Math.sin(angle) * radius;
      d.particles[idx + 2] = 0;
      d.particles[idx + 3] = 0;
      d.particles[idx + 4] = 14 + Math.random() * 18;
      d.particles[idx + 5] = 0.96;
      d.particles[idx + 6] = 0.62;
      d.particles[idx + 7] = 0.04;
      d.particles[idx + 8] = 0.3;
      d.particles[idx + 9] = 1;
      d.particles[idx + 10] = Math.random() * 300;
      d.particles[idx + 11] = 300 + Math.random() * 200;
      d.particles[idx + 12] = d.particles[idx + 0];
      d.particles[idx + 13] = d.particles[idx + 1];
    }

    // ─── Init Burst (dead until triggered) ───
    for (let i = 0; i < BURST_COUNT; i++) {
      const idx = (AMBIENT_COUNT + RUNE_COUNT + i) * FLOATS_PER;
      d.particles[idx + 8] = 0;
      d.particles[idx + 10] = 999;
      d.particles[idx + 11] = 1;
    }

    // ─── Shader Program ───
    const createShader = (type: number, source: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, source);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(s));
        return null;
      }
      return s;
    };

    const vs = createShader(gl.VERTEX_SHADER, VERTEX_SHADER);
    const fs = createShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vs || !fs) return;

    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // ─── Buffer Setup ───
    const gpuData = new Float32Array(TOTAL * 8);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    const stride = 8 * 4;

    const locs = {
      pos: gl.getAttribLocation(program, 'a_position'),
      size: gl.getAttribLocation(program, 'a_size'),
      color: gl.getAttribLocation(program, 'a_color'),
      type: gl.getAttribLocation(program, 'a_type'),
    };

    gl.enableVertexAttribArray(locs.pos);
    gl.vertexAttribPointer(locs.pos, 2, gl.FLOAT, false, stride, 0);
    gl.enableVertexAttribArray(locs.size);
    gl.vertexAttribPointer(locs.size, 1, gl.FLOAT, false, stride, 8);
    gl.enableVertexAttribArray(locs.color);
    gl.vertexAttribPointer(locs.color, 4, gl.FLOAT, false, stride, 12);
    gl.enableVertexAttribArray(locs.type);
    gl.vertexAttribPointer(locs.type, 1, gl.FLOAT, false, stride, 28);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

    // ─── Resize ───
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    window.addEventListener('resize', resize);
    resize();

    // ─── Render Loop ───
    let raf: number;
    let time = 0;

    const render = () => {
      time += 1;
      const props = propsRef.current;

      let cr = 0.96, cg = 0.62, cb = 0.04;
      if (props.isBossStep) { cr = 1.0; cg = 0.2; cb = 0.15; }
      else if (props.stepComplete) { cr = 0.15; cg = 0.85; cb = 0.5; }

      d.progressSmooth += (props.progress - d.progressSmooth) * 0.02;
      const prog = d.progressSmooth / 100;
      const intensity = 0.5 + prog * 0.5;

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      for (let i = 0; i < TOTAL; i++) {
        const idx = i * FLOATS_PER;
        const gIdx = i * 8;
        const life = d.particles[idx + 10];
        const maxLife = d.particles[idx + 11];

        d.particles[idx + 10] += 1;

        if (i < AMBIENT_COUNT) {
          // ─── Ambient ───
          d.particles[idx + 0] += d.particles[idx + 2] + Math.sin(time * 0.01 + i) * 0.0004;
          d.particles[idx + 1] += d.particles[idx + 3];

          const lifeFrac = life / maxLife;
          let alpha = lifeFrac < 0.2 ? lifeFrac * 5 : lifeFrac > 0.8 ? (1 - lifeFrac) * 5 : 1;
          alpha *= intensity * 0.6;

          if (life > maxLife || d.particles[idx + 1] > 1.3) {
            d.particles[idx + 0] = (Math.random() - 0.5) * 2.2;
            d.particles[idx + 1] = -1.2 - Math.random() * 0.3;
            d.particles[idx + 2] = (Math.random() - 0.5) * 0.001;
            d.particles[idx + 3] = 0.0008 + Math.random() * 0.002;
            d.particles[idx + 4] = 3 + Math.random() * 6;
            d.particles[idx + 10] = 0;
            d.particles[idx + 11] = 150 + Math.random() * 350;
          }

          d.particles[idx + 5] += (cr - d.particles[idx + 5]) * 0.02;
          d.particles[idx + 6] += (cg - d.particles[idx + 6]) * 0.02;
          d.particles[idx + 7] += (cb - d.particles[idx + 7]) * 0.02;
          d.particles[idx + 8] = alpha;

        } else if (i < AMBIENT_COUNT + RUNE_COUNT) {
          // ─── Rune rings ───
          const ri = i - AMBIENT_COUNT;
          const baseAngle = (ri / RUNE_COUNT) * Math.PI * 2;
          const orbitSpeed = 0.003 + ri * 0.0005;
          const orbitRadius = 0.55 + Math.sin(time * 0.005 + ri * 2) * 0.15;
          const breathe = Math.sin(time * 0.008 + ri) * 0.1;

          d.particles[idx + 0] = Math.cos(baseAngle + time * orbitSpeed) * (orbitRadius + breathe);
          d.particles[idx + 1] = Math.sin(baseAngle + time * orbitSpeed) * (orbitRadius + breathe) * 0.6;

          const lifeFrac = (life % maxLife) / maxLife;
          let alpha = lifeFrac < 0.15 ? lifeFrac / 0.15 : lifeFrac > 0.85 ? (1 - lifeFrac) / 0.15 : 1;
          alpha *= intensity * 0.5;

          d.particles[idx + 5] += (cr - d.particles[idx + 5]) * 0.03;
          d.particles[idx + 6] += (cg - d.particles[idx + 6]) * 0.03;
          d.particles[idx + 7] += (cb - d.particles[idx + 7]) * 0.03;
          d.particles[idx + 8] = alpha;

          d.particles[idx + 4] = 16 + Math.sin(time * 0.012 + ri * 3) * 6;

        } else {
          // ─── Burst sparks ───
          if (life < maxLife) {
            d.particles[idx + 0] += d.particles[idx + 2];
            d.particles[idx + 1] += d.particles[idx + 3];
            d.particles[idx + 2] *= 0.975; // slight drag
            d.particles[idx + 3] *= 0.975;
            d.particles[idx + 3] -= 0.00015; // gravity

            const lifeFrac = life / maxLife;
            d.particles[idx + 8] = (1 - lifeFrac) * 1.8;
            d.particles[idx + 4] = (1 - lifeFrac * 0.7) * (5 + Math.random() * 8);
          } else {
            d.particles[idx + 8] = 0;
          }
        }

        gpuData[gIdx + 0] = d.particles[idx + 0];
        gpuData[gIdx + 1] = d.particles[idx + 1];
        gpuData[gIdx + 2] = d.particles[idx + 4];
        gpuData[gIdx + 3] = d.particles[idx + 5];
        gpuData[gIdx + 4] = d.particles[idx + 6];
        gpuData[gIdx + 5] = d.particles[idx + 7];
        gpuData[gIdx + 6] = d.particles[idx + 8];
        gpuData[gIdx + 7] = d.particles[idx + 9];
      }

      gl.bufferData(gl.ARRAY_BUFFER, gpuData, gl.DYNAMIC_DRAW);
      gl.drawArrays(gl.POINTS, 0, TOTAL);
      raf = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 9999 }}
    />
  );
};

export default QuestMagicEffects;
