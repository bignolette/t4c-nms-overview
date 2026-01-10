import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';

interface ImageModalProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ 
  images, currentIndex, isOpen, onClose, onNext, onPrev 
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 md:p-10"
          onClick={onClose}
        >
          {/* Close Area overlay */}
          <div className="absolute inset-0 cursor-zoom-out" />

          {/* Close button - Top Right */}
          <motion.button 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="absolute top-6 right-6 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-all border border-white/10"
            onClick={onClose}
          >
            <X size={28} />
          </motion.button>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-4 bg-white/5 hover:bg-white/10 rounded-2xl text-white backdrop-blur-sm transition-all"
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
              >
                <ChevronLeft size={40} />
              </button>
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-4 bg-white/5 hover:bg-white/10 rounded-2xl text-white backdrop-blur-sm transition-all"
                onClick={(e) => { e.stopPropagation(); onNext(); }}
              >
                <ChevronRight size={40} />
              </button>
            </>
          )}

          {/* Content Container */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative z-10 max-w-4xl max-h-full flex flex-col items-center gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl border border-white/10 bg-slate-900">
              <img 
                src={images[currentIndex]} 
                alt="Aperçu" 
                className="max-w-full max-h-[75vh] object-contain block mx-auto"
              />
            </div>

            {/* Footer info */}
            <div className="flex items-center gap-8 bg-slate-900/80 px-6 py-3 rounded-2xl border border-white/5 backdrop-blur-xl">
              <span className="text-white font-black tracking-tighter text-lg">
                {currentIndex + 1} <span className="text-slate-500 mx-1">/</span> {images.length}
              </span>
              <a 
                href={images[currentIndex]} 
                download 
                className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors border-l border-white/10 pl-8"
              >
                <Download size={16} /> Enregistrer
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;