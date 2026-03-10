import { motion, AnimatePresence } from 'framer-motion';
import RuneIcon from './RuneIcon';
import { useData } from '../../context/DataContext';

const NotificationToast = () => {
  const { notification } = useData();

  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9, x: '-50%' }}
          animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
          exit={{ opacity: 0, y: 20, scale: 0.9, x: '-50%' }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 25,
          }}
          className={`fixed bottom-8 left-1/2 z-[9999] flex items-center gap-4 px-8 py-4 rounded-2xl font-black uppercase tracking-widest shadow-2xl border backdrop-blur-xl transition-all font-fantasy ${
              notification.type === 'success'
                  ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50 shadow-emerald-500/20'
                  : 'bg-rose-500/20 text-rose-400 border-rose-500/50 shadow-rose-500/20'
          }`}
        >
          {/* Icon with animation */}
          <motion.div
            className={`p-2 rounded-xl border ${notification.type === 'success' ? 'bg-emerald-500/20 border-emerald-500/30' : 'bg-rose-500/20 border-rose-500/30'}`}
            initial={{ rotate: -10, scale: 0.8 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 300 }}
          >
            <RuneIcon stat={notification.type === 'success' ? 'magic' : 'trash'} size={20} color="currentColor" />
          </motion.div>

          <span className="drop-shadow-lg">{notification.message}</span>

          {/* Animated progress bar */}
          <motion.div
            className={`absolute bottom-0 left-0 h-0.5 rounded-b-2xl ${notification.type === 'success' ? 'bg-emerald-500/50' : 'bg-rose-500/50'}`}
            initial={{ width: '100%' }}
            animate={{ width: '0%' }}
            transition={{ duration: 3, ease: 'linear' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationToast;
