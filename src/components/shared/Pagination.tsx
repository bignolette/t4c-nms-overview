import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
  onItemsPerPageChange?: (count: number) => void;
  totalItems: number;
  pageSizeOptions?: number[];
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange,
  totalItems,
  pageSizeOptions = [12, 24, 48, 96]
}: PaginationProps) => {
  if (totalPages <= 1 && totalItems <= pageSizeOptions[0]) return null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageChange = (page: number) => {
    onPageChange(page);
    scrollToTop();
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <motion.button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`relative min-w-[44px] min-h-[44px] md:w-10 md:h-10 rounded-lg md:rounded-xl font-bold text-[11px] md:text-sm transition-all ${
            currentPage === i
              ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-110 z-10'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
          }`}
          whileTap={{ scale: 0.9 }}
          layout
        >
          {i}
          {/* Active page glow */}
          {currentPage === i && (
            <motion.div
              className="absolute inset-0 rounded-lg md:rounded-xl border-2 border-amber-400/50 pointer-events-none"
              layoutId="activePage"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
        </motion.button>
      );
    }
    return pages;
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 border-t border-slate-800 mt-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Items per page selector */}
      <div className="flex items-center gap-3 order-2 md:order-1">
        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Afficher</span>
        <div className="flex bg-slate-900 rounded-lg p-1 border border-slate-800">
          {pageSizeOptions.map(size => (
            <button
              key={size}
              onClick={() => onItemsPerPageChange?.(size)}
              className={`px-3 py-1.5 rounded-md text-[10px] font-black transition-all ${
                itemsPerPage === size
                  ? 'bg-slate-700 text-amber-500 shadow-sm shadow-amber-500/10'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {size}
            </button>
          ))}
          {onItemsPerPageChange && (
            <button
              onClick={() => onItemsPerPageChange(totalItems)}
              className={`px-3 py-1.5 rounded-md text-[10px] font-black transition-all ${
                itemsPerPage >= totalItems
                  ? 'bg-slate-700 text-amber-500 shadow-sm shadow-amber-500/10'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              Tout
            </button>
          )}
        </div>
      </div>

      {/* Page navigation */}
      {totalPages > 1 && (
        <div className="flex items-center gap-1 md:gap-2 order-1 md:order-2 max-w-full overflow-x-auto no-scrollbar md:pb-0">
          <motion.button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg md:rounded-xl bg-slate-900 border border-slate-800 text-slate-500 hover:text-amber-500 disabled:opacity-20 transition-all shrink-0"
            title="Première page"
            whileTap={{ scale: 0.9 }}
          >
            <ChevronsLeft size={16} className="md:w-[18px] md:h-[18px]" />
          </motion.button>

          <motion.button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg md:rounded-xl bg-slate-900 border border-slate-800 text-slate-500 hover:text-amber-500 disabled:opacity-20 transition-all shrink-0"
            title="Page précédente"
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={16} className="md:w-[18px] md:h-[18px]" />
          </motion.button>

          <AnimatePresence mode="popLayout">
            <div className="flex gap-1 md:gap-1.5 px-1 md:px-2">
              {renderPageNumbers()}
            </div>
          </AnimatePresence>

          <motion.button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg md:rounded-xl bg-slate-900 border border-slate-800 text-slate-500 hover:text-amber-500 disabled:opacity-20 transition-all shrink-0"
            title="Page suivante"
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={16} className="md:w-[18px] md:h-[18px]" />
          </motion.button>

          <motion.button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg md:rounded-xl bg-slate-900 border border-slate-800 text-slate-500 hover:text-amber-500 disabled:opacity-20 transition-all shrink-0"
            title="Dernière page"
            whileTap={{ scale: 0.9 }}
          >
            <ChevronsRight size={16} className="md:w-[18px] md:h-[18px]" />
          </motion.button>
        </div>
      )}

      {/* Info */}
      <div className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] order-3 flex items-center gap-2">
        <span className="text-amber-500/60">{Math.min(totalItems, (currentPage - 1) * itemsPerPage + 1)} - {Math.min(totalItems, currentPage * itemsPerPage)}</span>
        <span className="opacity-40">sur</span>
        <span>{totalItems}</span>
      </div>
    </motion.div>
  );
};

export default Pagination;
