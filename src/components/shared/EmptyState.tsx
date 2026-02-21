import type { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  actionLabel?: string;
  onAction?: () => void;
}

const EmptyState = ({ icon: Icon, title, subtitle, actionLabel, onAction }: EmptyStateProps) => {
  return (
    <div className="glass-card rounded-[40px] border border-dashed border-slate-800 py-20 text-center relative overflow-hidden">
      {/* Subtle amber glow */}
      <div className="absolute inset-0 bg-gradient-radial from-amber-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-slate-800/50 flex items-center justify-center">
          <Icon size={32} className="text-slate-600" />
        </div>

        <h3 className="text-xl font-bold text-slate-400 uppercase italic tracking-tight font-fantasy">
          {title}
        </h3>

        {subtitle && (
          <p className="text-slate-500 text-sm max-w-md mx-auto">{subtitle}</p>
        )}

        {actionLabel && onAction && (
          <button
            onClick={onAction}
            className="mt-2 text-amber-500 font-bold uppercase text-xs hover:underline underline-offset-8 transition-colors hover:text-amber-400"
          >
            {actionLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
