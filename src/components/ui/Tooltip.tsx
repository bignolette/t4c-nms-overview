import type { ReactNode } from 'react';

interface TooltipProps {
  children: ReactNode;
  content: string;
  position?: 'top' | 'bottom';
}

const Tooltip = ({ children, content, position = 'top' }: TooltipProps) => {
  return (
    <span className="relative group/tooltip inline-block">
      {children}
      <span
        className={`
          pointer-events-none absolute left-1/2 -translate-x-1/2 z-50
          glass-card rounded-lg px-3 py-1.5 text-xs text-slate-200 font-medium
          whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200
          ${position === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'}
        `}
      >
        {content}
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
