import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Sword } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="mt-20 pb-12 pt-8 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      {/* Animated gradient separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent animate-shimmer" />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm mt-4">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <Sword size={12} className="text-amber-500/40" />
            <p className="font-medium font-fantasy text-xs tracking-wider">
              © {currentYear} T4C NMS Overview
            </p>
            <span className="px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-[9px] font-black text-amber-500/60 uppercase tracking-widest">
              v1.0.0
            </span>
          </div>
          <p className="text-xs flex items-center gap-1">
            Fait avec <Heart size={10} className="text-rose-500 fill-current animate-pulse" /> par <span className="text-slate-400 font-bold hover:text-amber-500 transition-colors cursor-default">Bignole</span>
          </p>
        </div>

        <div className="flex items-center gap-8">
          <Link
            to="/legal"
            className="hover:text-amber-500 transition-all flex items-center gap-2 group px-3 py-1.5 rounded-xl hover:bg-amber-500/5"
          >
            <ShieldCheck size={16} className="text-slate-600 group-hover:text-amber-500 group-hover:scale-110 transition-all" />
            <span>Mentions Légales</span>
          </Link>

          <div className="hidden md:block w-px h-4 bg-gradient-to-b from-transparent via-slate-700 to-transparent" />

          <p className="text-xs max-w-[300px] text-center md:text-right leading-tight italic opacity-60">
            Projet communautaire non-officiel. <br/>
            T4C est une marque déposée de Dialsoft LLC.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
