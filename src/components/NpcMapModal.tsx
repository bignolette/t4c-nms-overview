import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, MousePointer2, ZoomIn, ZoomOut, Maximize, Copy, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { MAPS } from '../config/maps';

interface NpcMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  entityName: string;
  coordinates: string;
  allCoordinates?: string[];
  category?: string;
  locationPrecision?: string;
}

const getCategoryColor = (cat?: string) => {
  switch (cat) {
    case 'Monstres': return { text: 'text-rose-500', bg: 'bg-rose-500', fill: 'fill-rose-500/20', border: 'border-rose-500/30' };
    case 'PNJs': return { text: 'text-blue-500', bg: 'bg-blue-500', fill: 'fill-blue-500/20', border: 'border-blue-500/30' };
    case 'Plantes': return { text: 'text-emerald-500', bg: 'bg-emerald-500', fill: 'fill-emerald-500/20', border: 'border-emerald-500/30' };
    case 'Arbres': return { text: 'text-amber-800', bg: 'bg-amber-800', fill: 'fill-amber-800/20', border: 'border-amber-800/30' };
    case 'Gisements': return { text: 'text-amber-500', bg: 'bg-amber-500', fill: 'fill-amber-500/20', border: 'border-amber-500/30' };
    default: return { text: 'text-slate-400', bg: 'bg-slate-400', fill: 'fill-slate-400/20', border: 'border-slate-400/30' };
  }
};

interface ParsedCoord {
  gx: number;
  gy: number;
  worldId: number;
  raw: string;
}

const parseCoord = (c: string): ParsedCoord | null => {
  const parts = c.replace(/,/g, '.').split('.').map(Number);
  if (parts.length >= 3 && !isNaN(parts[0]) && !isNaN(parts[1]) && !isNaN(parts[2]) && parts[2] !== -1) {
    return { gx: parts[0], gy: parts[1], worldId: parts[2], raw: c };
  }
  return null;
};

const NpcMapModal: React.FC<NpcMapModalProps> = ({
  isOpen, onClose, entityName, coordinates, allCoordinates, category,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const transformRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [activeCoordIndex, setActiveCoordIndex] = useState(0);

  const parsedCoords = useMemo(() => {
    const raw = allCoordinates && allCoordinates.length > 0 ? allCoordinates : [coordinates];
    return raw.map(parseCoord).filter((c): c is ParsedCoord => c !== null);
  }, [coordinates, allCoordinates]);

  const activeCoord = parsedCoords[activeCoordIndex] ?? parsedCoords[0];

  const worldGroups = useMemo(() => {
    const groups = new Map<number, ParsedCoord[]>();
    parsedCoords.forEach(c => {
      const arr = groups.get(c.worldId) || [];
      arr.push(c);
      groups.set(c.worldId, arr);
    });
    return groups;
  }, [parsedCoords]);

  const currentMap = useMemo(() => {
    if (!activeCoord) return MAPS[0];
    return MAPS.find(m => m.worldId === activeCoord.worldId) ?? MAPS[0];
  }, [activeCoord]);

  const markersOnCurrentMap = useMemo(() => {
    return parsedCoords.filter(c => c.worldId === currentMap.worldId);
  }, [parsedCoords, currentMap]);

  const colors = getCategoryColor(category);

  const centerOnMarker = useCallback((coord: ParsedCoord) => {
    if (!transformRef.current || !viewportRef.current) return;
    const px = coord.gx * 2;
    const py = coord.gy;
    const scale = 1.5;
    const x = (viewportRef.current.offsetWidth / 2) - (px * scale);
    const y = (viewportRef.current.offsetHeight / 2) - (py * scale);
    transformRef.current.setTransform(x, y, scale, 600, 'easeOut');
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setIsLoading(true);
      setActiveCoordIndex(0);
      setCopied(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const handleCopy = () => {
    if (!activeCoord) return;
    navigator.clipboard.writeText(activeCoord.raw).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handlePrevCoord = () => {
    setActiveCoordIndex(i => (i - 1 + parsedCoords.length) % parsedCoords.length);
  };

  const handleNextCoord = () => {
    setActiveCoordIndex(i => (i + 1) % parsedCoords.length);
  };

  useEffect(() => {
    if (activeCoord && !isLoading && transformRef.current) {
      setTimeout(() => centerOnMarker(activeCoord), 150);
    }
  }, [activeCoordIndex, isLoading, activeCoord, centerOnMarker]);

  if (!activeCoord) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl h-[80vh] max-h-[700px] flex flex-col bg-slate-900 rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <MapPin size={18} className={colors.text} />
                <div className="min-w-0">
                  <h3 className="text-sm font-black text-white truncate">{entityName}</h3>
                  <p className="text-[10px] text-slate-500">
                    {currentMap.name}
                    {worldGroups.size > 1 && (
                      <span className="ml-2 text-amber-500">{worldGroups.size} cartes</span>
                    )}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Map viewport */}
            <div ref={viewportRef} className="relative flex-1 bg-slate-950 overflow-hidden select-none">
              {isLoading && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-950/80">
                  <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
                </div>
              )}
              <TransformWrapper
                key={currentMap.id}
                initialScale={0.1}
                minScale={0.05}
                maxScale={4}
                doubleClick={{ disabled: true }}
                limitToBounds={true}
                centerZoomedOut={true}
                wheel={{ step: 0.08 }}
                ref={transformRef}
              >
                {(instance) => (
                  <>
                    <div className="absolute top-3 right-3 z-20 flex flex-col gap-1.5">
                      <button onClick={() => instance.zoomIn()} className="p-2 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-lg text-slate-300 hover:text-amber-500 transition-all shadow-xl">
                        <ZoomIn size={16} />
                      </button>
                      <button onClick={() => instance.zoomOut()} className="p-2 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-lg text-slate-300 hover:text-amber-500 transition-all shadow-xl">
                        <ZoomOut size={16} />
                      </button>
                      <button
                        onClick={() => {
                          if (imgRef.current && viewportRef.current) {
                            const scaleX = (viewportRef.current.offsetWidth - 40) / imgRef.current.naturalWidth;
                            const scaleY = (viewportRef.current.offsetHeight - 40) / imgRef.current.naturalHeight;
                            const s = Math.min(scaleX, scaleY, 1);
                            const x = (viewportRef.current.offsetWidth - imgRef.current.naturalWidth * s) / 2;
                            const y = (viewportRef.current.offsetHeight - imgRef.current.naturalHeight * s) / 2;
                            instance.setTransform(x, y, s, 400, 'easeOut');
                          }
                        }}
                        className="p-2 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-lg text-slate-300 hover:text-amber-500 transition-all shadow-xl"
                      >
                        <Maximize size={16} />
                      </button>
                    </div>

                    <TransformComponent wrapperStyle={{ width: '100%', height: '100%' }}>
                      <div className="relative">
                        <img
                          ref={imgRef}
                          src={currentMap.path}
                          alt={currentMap.name}
                          className="max-w-none"
                          draggable={false}
                          onLoad={() => {
                            setIsLoading(false);
                            setTimeout(() => {
                              if (activeCoord) centerOnMarker(activeCoord);
                            }, 100);
                          }}
                        />
                        {markersOnCurrentMap.map((coord, i) => {
                          const isActive = coord.gx === activeCoord.gx && coord.gy === activeCoord.gy && coord.worldId === activeCoord.worldId;
                          return (
                            <div
                              key={`${coord.gx}-${coord.gy}-${i}`}
                              className="absolute z-30 pointer-events-auto cursor-pointer"
                              style={{ left: coord.gx * 2, top: coord.gy, transform: 'translate(-50%, -100%)' }}
                              onClick={(e) => {
                                e.stopPropagation();
                                const idx = parsedCoords.findIndex(c => c.gx === coord.gx && c.gy === coord.gy && c.worldId === coord.worldId);
                                if (idx >= 0) setActiveCoordIndex(idx);
                              }}
                            >
                              <div className="relative flex flex-col items-center group/marker">
                                <div className="absolute bottom-full mb-2 px-2.5 py-1 bg-slate-950/95 border border-white/20 rounded-lg text-[10px] font-black text-white whitespace-nowrap shadow-lg opacity-0 group-hover/marker:opacity-100 transition-all pointer-events-none z-50">
                                  {coord.gx}.{coord.gy}.{coord.worldId}
                                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-6 border-transparent border-t-slate-950/95" />
                                </div>
                                <div className="relative">
                                  <MapPin
                                    size={isActive ? 32 : 24}
                                    className={`${colors.text} fill-current/20 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] transition-all ${isActive ? 'scale-110' : 'opacity-70'}`}
                                  />
                                  {isActive && (
                                    <div className="absolute inset-0 animate-ping opacity-40">
                                      <MapPin size={32} className={colors.text} />
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </TransformComponent>
                  </>
                )}
              </TransformWrapper>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-slate-800 bg-slate-900/80 backdrop-blur-md shrink-0">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${colors.bg}`} />
                <span className="text-xs font-bold text-slate-300">{category ?? 'Entité'}</span>
                <span className="text-slate-600">·</span>
                <span className="text-xs font-mono text-amber-400 font-bold flex items-center gap-1.5">
                  <MousePointer2 size={12} />
                  {activeCoord.gx}.{activeCoord.gy}.{activeCoord.worldId}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {parsedCoords.length > 1 && (
                  <div className="flex items-center gap-1 mr-2">
                    <button onClick={handlePrevCoord} className="p-1.5 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-all">
                      <ChevronLeft size={14} />
                    </button>
                    <span className="text-[10px] font-bold text-slate-500 min-w-[40px] text-center">
                      {activeCoordIndex + 1}/{parsedCoords.length}
                    </span>
                    <button onClick={handleNextCoord} className="p-1.5 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-all">
                      <ChevronRight size={14} />
                    </button>
                  </div>
                )}
                <button
                  onClick={handleCopy}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                    copied
                      ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {copied ? <Check size={12} /> : <Copy size={12} />}
                  {copied ? 'Copié' : 'Copier'}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NpcMapModal;
