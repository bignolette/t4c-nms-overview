import React, { useEffect, useState, useRef } from 'react';
import type { Stats } from '../data/types';

interface SpiderChartProps {
  stats: Stats;
  maxVal?: number;
}

const SpiderChart: React.FC<SpiderChartProps> = ({ stats, maxVal = 300 }) => {
  const [mounted, setMounted] = useState(false);
  const polygonRef = useRef<SVGPolygonElement>(null);
  const size = 180;
  const center = size / 2;
  const radius = size * 0.35;

  useEffect(() => {
    // Trigger mount animation after a short delay so initial dashoffset is applied first
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const axes = [
    { label: 'FOR', key: 'str', angle: -90, color: '#f87171' },
    { label: 'INT', key: 'int', angle: -18, color: '#60a5fa' },
    { label: 'SAG', key: 'wis', angle: 54, color: '#c084fc' },
    { label: 'DEX', key: 'dex', angle: 126, color: '#34d399' },
    { label: 'END', key: 'end', angle: 198, color: '#fb923c' }
  ];

  const getPoint = (value: number, angle: number, r: number = radius) => {
    const normalized = Math.min(value, maxVal) / maxVal;
    const dist = normalized * r;
    const rad = (angle * Math.PI) / 180;
    return {
      x: center + dist * Math.cos(rad),
      y: center + dist * Math.sin(rad)
    };
  };

  const points = axes.map(axis => {
    const val = stats[axis.key as keyof Stats] || 0;
    return getPoint(val, axis.angle);
  });

  const polyPoints = points.map(p => `${p.x},${p.y}`).join(' ');

  // Estimate the perimeter of the data polygon for stroke-dasharray animation
  const computePerimeter = () => {
    let perimeter = 0;
    for (let i = 0; i < points.length; i++) {
      const next = points[(i + 1) % points.length];
      const dx = next.x - points[i].x;
      const dy = next.y - points[i].y;
      perimeter += Math.sqrt(dx * dx + dy * dy);
    }
    return perimeter;
  };

  const perimeter = computePerimeter();

  const gridLevels = [0.25, 0.5, 0.75, 1];

  // Threshold for "high value" glow effect
  const highValueThreshold = maxVal * 0.6;

  return (
    <div className="relative flex flex-col items-center justify-center p-2">
      {/* Keyframes for label fade-in stagger and glow pulse */}
      <style>{`
        @keyframes spiderLabelFadeIn {
          0% { opacity: 0; transform: translateY(4px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.4; r: 6; }
          50% { opacity: 0.8; r: 10; }
        }
      `}</style>

      <svg width={size} height={size} className="overflow-visible drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">
        <defs>
          <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
        </defs>

        {/* Web/Grid */}
        {gridLevels.map((level, i) => (
          <polygon
            key={i}
            points={axes.map(axis => {
              const p = getPoint(maxVal * level, axis.angle);
              return `${p.x},${p.y}`;
            }).join(' ')}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
          />
        ))}

        {/* Axes Lines */}
        {axes.map((axis, i) => {
          const p = getPoint(maxVal, axis.angle);
          return (
            <line key={i} x1={center} y1={center} x2={p.x} y2={p.y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          );
        })}

        {/* Data Polygon Fill */}
        <polygon
          points={polyPoints}
          fill="rgba(245, 158, 11, 0.15)"
          stroke="none"
          className="transition-all duration-500 ease-out"
        />

        {/* Data Polygon Stroke - with drawing animation */}
        <polygon
          ref={polygonRef}
          points={polyPoints}
          fill="none"
          stroke="url(#gradientStroke)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={perimeter}
          strokeDashoffset={mounted ? 0 : perimeter}
          className="drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]"
          style={{
            transition: 'stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1), d 0.5s ease-out'
          }}
        />

        {/* Points & Labels */}
        {axes.map((axis, i) => {
          const pVal = points[i];
          const pLabel = getPoint(maxVal * 1.25, axis.angle);
          const statValue = stats[axis.key as keyof Stats] || 0;
          const isHighValue = statValue > highValueThreshold;

          return (
            <g key={i}>
              {/* Pulsing glow circle behind dot for high-value stats */}
              {isHighValue && (
                <circle
                  cx={pVal.x}
                  cy={pVal.y}
                  r={6}
                  fill={axis.color}
                  opacity={0.4}
                  className="transition-all duration-500 ease-out"
                >
                  <animate
                    attributeName="r"
                    values="6;10;6"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.4;0.8;0.4"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}

              {/* Value Dot */}
              <circle
                cx={pVal.x}
                cy={pVal.y}
                r={3}
                fill={axis.color}
                className="transition-all duration-500 ease-out"
              />

              {/* Label with staggered fade-in */}
              <text
                x={pLabel.x}
                y={pLabel.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={axis.color}
                className="text-[10px] font-bold font-fantasy uppercase tracking-wider shadow-black drop-shadow-md"
                style={{
                  opacity: 0,
                  animation: 'spiderLabelFadeIn 0.4s ease-out forwards',
                  animationDelay: `${0.3 + i * 0.12}s`
                }}
              >
                {axis.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default SpiderChart;
