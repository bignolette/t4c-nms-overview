import { motion } from 'framer-motion';

interface StatBadgeProps {
  label: string;
  value: string | number;
  type: 'str' | 'end' | 'dex' | 'int' | 'wis' | 'ca' | 'lvl' | 'luck' | 'minimumSkillPoints' | 'secondary';
  animate?: boolean;
}

const StatBadge = ({ label, value, type, animate = false }: StatBadgeProps) => {
  const configs = {
    str: { color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/20', glow: 'rgba(244, 63, 94, 0.15)' },
    end: { color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20', glow: 'rgba(249, 115, 22, 0.15)' },
    dex: { color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', glow: 'rgba(52, 211, 153, 0.15)' },
    int: { color: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/20', glow: 'rgba(56, 189, 248, 0.15)' },
    wis: { color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20', glow: 'rgba(168, 85, 247, 0.15)' },
    ca: { color: 'text-slate-300', bg: 'bg-slate-100/10', border: 'border-slate-100/20', glow: 'rgba(148, 163, 184, 0.1)' },
    lvl: { color: 'text-amber-500', bg: 'bg-amber-500/10', border: 'border-amber-500/20', glow: 'rgba(245, 158, 11, 0.15)' },
    luck: { color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/20', glow: 'rgba(251, 191, 36, 0.15)' },
    minimumSkillPoints: { color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', glow: 'rgba(99, 102, 241, 0.15)' },
    secondary: { color: 'text-emerald-400', bg: 'bg-emerald-500/5', border: 'border-emerald-500/10', glow: 'rgba(52, 211, 153, 0.1)' }
  };

  const config = configs[type] || configs.secondary;

  const badge = (
    <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-md border ${config.bg} ${config.border} backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_0_12px_var(--glow)]`}
      style={{ '--glow': config.glow } as React.CSSProperties}
    >
      <span className={`text-[9px] font-black uppercase tracking-wider ${config.color} opacity-80`}>{label}</span>
      <span className="text-[11px] font-bold text-slate-100 font-mono tracking-tighter">{value}</span>
    </div>
  );

  if (animate) {
    return (
      <motion.div
        animate={{
          boxShadow: [
            `0 0 0px ${config.glow}`,
            `0 0 10px ${config.glow}`,
            `0 0 0px ${config.glow}`,
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="rounded-md"
      >
        {badge}
      </motion.div>
    );
  }

  return badge;
};

export default StatBadge;
