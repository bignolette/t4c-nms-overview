import React from 'react';

interface LiquidBarProps {
  percentage: number;
  colorHex?: string; // e.g., "#f59e0b"
  className?: string;
}

const LiquidBar: React.FC<LiquidBarProps> = ({ percentage, colorHex = '#f59e0b', className = "h-3" }) => {
  const safePercent = Math.min(100, Math.max(0, percentage));
  
  return (
    <div className={`relative w-full ${className} bg-slate-900/60 rounded-full overflow-hidden border border-white/5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]`}>
      {/* Background Pulse */}
      <div 
        className="absolute inset-0 opacity-20 transition-all duration-1000"
        style={{ backgroundColor: colorHex, width: `${safePercent}%`, filter: 'blur(8px)' }}
      />
      
      {/* Main Liquid Body */}
      <div 
        className="absolute top-0 bottom-0 left-0 transition-all duration-500 ease-out flex items-center overflow-hidden"
        style={{ width: `${safePercent}%`, backgroundColor: colorHex }}
      >
        {/* Shimmer/Flow Effect */}
        <div 
            className="absolute inset-0 w-[200%] animate-shimmer"
            style={{ 
                background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)` 
            }} 
        />
        
        {/* Bubbles / Particles (Static CSS for now, could be animated SVGs) */}
        <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/30 blur-[1px]" />
      </div>

      {/* Glow Line at the tip */}
      <div 
        className="absolute top-0 bottom-0 w-[1px] bg-white/80 shadow-[0_0_10px_white] transition-all duration-500 ease-out"
        style={{ left: `${safePercent}%`, opacity: safePercent > 0 ? 1 : 0 }}
      />
    </div>
  );
};

export default LiquidBar;