import { motion, AnimatePresence } from 'framer-motion';
import { Bell } from 'lucide-react';
import { useData } from '../../context/DataContext';

const NotificationToast = () => {
  const { notification } = useData();

  return (
    <AnimatePresence>
      {notification && (
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.9, x: '-50%' }}
          animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
          exit={{ opacity: 0, scale: 0.9, x: '-50%' }}
          className={`fixed bottom-8 left-1/2 z-[9999] flex items-center gap-3 px-6 py-3 rounded-2xl font-black uppercase tracking-widest shadow-2xl border transition-colors ${
              notification.type === 'success' 
                  ? 'bg-emerald-500 text-slate-950 border-emerald-400/50 shadow-emerald-500/20' 
                  : 'bg-rose-500 text-white border-rose-400/50 shadow-rose-500/20'
          }`}
        >
          <div className={`p-1 rounded-lg ${notification.type === 'success' ? 'bg-slate-950/20' : 'bg-white/20'}`}>
              <Bell size={18} />
          </div>
          {notification.message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationToast;
