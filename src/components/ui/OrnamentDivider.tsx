const OrnamentDivider = () => (
  <div className="flex items-center gap-4 py-6">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-500/20" />
    <svg viewBox="0 0 24 24" className="w-3 h-3 text-amber-500/30" fill="currentColor">
      <path d="M12 2L22 12L12 22L2 12Z" />
    </svg>
    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-500/20" />
  </div>
);

export default OrnamentDivider;
