import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  actionLabel?: string;
  onAction?: () => void;
  suggestion?: string;
}

const EmptyState = ({ icon: Icon, title, subtitle, actionLabel, onAction, suggestion }: EmptyStateProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="glass-card rounded-[40px] border border-dashed border-slate-800 py-20 text-center relative overflow-hidden"
    >
      {/* Animated glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(245,158,11,0.03) 0%, transparent 60%)',
            'radial-gradient(circle at 50% 50%, rgba(245,158,11,0.06) 0%, transparent 60%)',
            'radial-gradient(circle at 50% 50%, rgba(245,158,11,0.03) 0%, transparent 60%)',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 flex flex-col items-center gap-4">
        {/* Animated icon */}
        <motion.div
          className="w-20 h-20 rounded-2xl bg-slate-800/50 flex items-center justify-center border border-slate-700/50"
          animate={{ y: [0, -6, 0], rotate: [0, 3, -3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon size={36} className="text-slate-500" />
        </motion.div>

        <motion.h3
          className="text-xl font-bold text-slate-400 uppercase italic tracking-tight font-fantasy"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h3>

        {subtitle && (
          <motion.p
            className="text-slate-500 text-sm max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {subtitle}
          </motion.p>
        )}

        {suggestion && (
          <motion.div
            className="mt-2 flex items-center gap-2 px-4 py-2 bg-amber-500/5 border border-amber-500/10 rounded-xl"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-xs text-amber-500/60 font-medium">{suggestion}</span>
          </motion.div>
        )}

        {actionLabel && onAction && (
          <motion.button
            onClick={onAction}
            className="mt-4 px-6 py-2.5 text-amber-500 font-bold uppercase text-xs rounded-xl border border-amber-500/20 hover:bg-amber-500/10 hover:border-amber-500/40 transition-all active:scale-95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {actionLabel}
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default EmptyState;
