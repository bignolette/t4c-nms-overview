import type { ReactNode } from 'react';

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  position?: 'top' | 'bottom';
  rich?: boolean;
}

const Tooltip = ({ children, content, position = 'top', rich = false }: TooltipProps) => {
  return (
    <span className="relative group/tooltip inline-block">
      {children}
      <span
        className={`
          pointer-events-none absolute left-1/2 -translate-x-1/2 z-50
          glass-card rounded-xl shadow-2xl
          opacity-0 group-hover/tooltip:opacity-100 transition-all duration-200
          group-hover/tooltip:scale-100 scale-95
          ${rich ? 'p-3 min-w-[200px] max-w-[300px] whitespace-normal' : 'px-3 py-1.5 whitespace-nowrap'}
          ${position === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'}
        `}
      >
        {typeof content === 'string' ? (
          <span className="text-xs text-slate-200 font-medium">{content}</span>
        ) : (
          <div className="text-xs">{content}</div>
        )}
        {/* Arrow */}
        <span
          className={`
            absolute left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 glass-card border-0
            ${position === 'top' ? 'top-full -mt-1 border-b border-r border-white/10' : 'bottom-full -mb-1 border-t border-l border-white/10'}
          `}
        />
      </span>
    </span>
  );
};

export default Tooltip;
