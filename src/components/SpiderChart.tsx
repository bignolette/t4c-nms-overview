import React from 'react';
import type { Stats } from '../data/types';

interface SpiderChartProps {
  stats: Stats;
  maxVal?: number; // The visual max for the chart (stats can go higher but chart clips)
}

const SpiderChart: React.FC<SpiderChartProps> = ({ stats, maxVal = 300 }) => {
  const size = 180;
  const center = size / 2;
  const radius = size * 0.35;
  
  // 5 axes for standard RPG stats
  const axes = [
    { label: 'FOR', key: 'str', angle: -90, color: '#f87171' }, // Red
    { label: 'INT', key: 'int', angle: -18, color: '#60a5fa' }, // Blue
    { label: 'SAG', key: 'wis', angle: 54, color: '#c084fc' },  // Purple
    { label: 'DEX', key: 'dex', angle: 126, color: '#34d399' }, // Green
    { label: 'END', key: 'end', angle: 198, color: '#fb923c' }  // Orange
  ];

  const getPoint = (value: number, angle: number, r: number = radius) => {
    // Logarithmic scale or linear? Linear is standard but stats vary wildy.
    // Let's stick to linear for clarity.
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

  // Background grid
  const gridLevels = [0.25, 0.5, 0.75, 1];

  return (
    <div className="relative flex flex-col items-center justify-center p-2">
       <svg width={size} height={size} className="overflow-visible drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">
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
         
         {/* Data Polygon Stroke */}
         <polygon
            points={polyPoints}
            fill="none"
            stroke="url(#gradientStroke)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-500 ease-out drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]"
         />
         
         <defs>
            <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
         </defs>

         {/* Points & Labels */}
         {axes.map((axis, i) => {
             const pVal = points[i];
             const pLabel = getPoint(maxVal * 1.25, axis.angle);
             
             return (
                 <g key={i}>
                    {/* Value Dot */}
                    <circle 
                        cx={pVal.x} 
                        cy={pVal.y} 
                        r={3} 
                        fill={axis.color}
                        className="transition-all duration-500 ease-out" 
                    />
                    
                    {/* Label */}
                    <text 
                        x={pLabel.x} 
                        y={pLabel.y} 
                        textAnchor="middle" 
                        dominantBaseline="middle" 
                        fill={axis.color} 
                        className="text-[10px] font-bold font-fantasy uppercase tracking-wider shadow-black drop-shadow-md"
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