interface StatBadgeProps {
  label: string;
  value: string | number;
  type: 'str' | 'end' | 'dex' | 'int' | 'wis' | 'ca' | 'lvl' | 'luck' | 'minimumSkillPoints' | 'secondary';
}

const StatBadge = ({ label, value, type }: StatBadgeProps) => {
  const configs = {
    str: { color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/20' },
    end: { color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
    dex: { color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
    int: { color: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/20' },
    wis: { color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
    ca: { color: 'text-slate-300', bg: 'bg-slate-100/10', border: 'border-slate-100/20' },
    lvl: { color: 'text-amber-500', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
    luck: { color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/20' },
    minimumSkillPoints: { color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20' },
    secondary: { color: 'text-emerald-400', bg: 'bg-emerald-500/5', border: 'border-emerald-500/10' }
  };
  
  const config = configs[type] || configs.secondary;
  
  return (
    <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-md border ${config.bg} ${config.border} backdrop-blur-sm`}>
      <span className={`text-[9px] font-black uppercase tracking-wider ${config.color} opacity-80`}>{label}</span>
      <span className="text-[11px] font-bold text-slate-100 font-mono tracking-tighter">{value}</span>
    </div>
  );
};

export default StatBadge;
