import { motion } from 'framer-motion';
import { Calculator, TrendingUp } from 'lucide-react';
import StatPlanner from '../components/StatPlanner';

const PlannerPage = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="glass-card rounded-3xl p-6 md:p-12 relative overflow-hidden group/hero"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full -mr-48 -mt-48 animate-pulse transition-all duration-1000 group-hover/hero:bg-cyan-500/20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 blur-[80px] rounded-full -ml-32 -mb-32 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="flex items-center gap-4"
            >
              <div className="p-3 bg-cyan-500/10 rounded-2xl border border-cyan-500/20">
                <Calculator size={28} className="text-cyan-400" />
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tighter italic uppercase leading-none">
                Simulateur <span className="text-cyan-400 text-glow-amber" style={{ textShadow: '0 0 15px rgba(34, 211, 238, 0.5)' }}>Stats</span>
              </h1>
            </motion.div>
            <p className="text-slate-400 font-medium max-w-xl text-base leading-relaxed border-l-2 border-cyan-500/30 pl-4 drop-cap">
              Planifiez l'évolution de votre personnage et optimisez vos points de caractéristiques pour chaque palier de niveau.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 px-4 py-2 bg-cyan-500/5 border border-cyan-500/20 rounded-xl"
          >
            <TrendingUp size={16} className="text-cyan-400" />
            <span className="text-xs font-black text-cyan-400/70 uppercase tracking-widest">Optimisation</span>
          </motion.div>
        </div>
      </motion.div>

      <StatPlanner />
    </div>
  );
};

export default PlannerPage;
