import React, { useState, useRef, memo, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Maximize, ZoomIn, ZoomOut, MousePointer2, Loader2, MapPin, Layers, ChevronRight, ChevronDown, Eye, RotateCcw, Search, X, Menu, Fullscreen, Minimize, RotateCw } from 'lucide-react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { useData } from '../context/DataContext';
import { fastNormalize } from '../data/utils';
import type { RecipeItem } from '../data/types';
import ScrollContainer from '../components/shared/ScrollContainer';

interface MapInfo {
  id: string;
  worldId: number;
  name: string;
  path: string;
}

const MAPS: MapInfo[] = [
  { id: 'arakas', worldId: 0, name: 'Arakas - Stoneheim - Raven\'s Dust', path: 'assets/maps/map_HD_0_Arakas.png' },
  { id: 'leoworld', worldId: 1, name: 'Leoworld', path: 'assets/maps/map_HD_1_Leoworld.png' },
  { id: 'underworld', worldId: 2, name: 'Underworld', path: 'assets/maps/map_HD_2_Underworld.png' },
  { id: 'ravendust', worldId: 3, name: 'Drake Island', path: 'assets/maps/map_HD_3_RavenDust.png' },
  { id: 'stoneheim', worldId: 4, name: 'Ile de Lune - Nieve', path: 'assets/maps/map_HD_4_Stoneheim.png' },
  { id: 'ext4', worldId: 5, name: 'Extension 4', path: 'assets/maps/map_HD_5_Extension4.png' },
  { id: 'ext5', worldId: 6, name: 'Extension 5', path: 'assets/maps/map_HD_6_Extension5.png' },
  { id: 'ext6', worldId: 7, name: 'Extension 6', path: 'assets/maps/map_HD_7_Extension6.png' },
];

interface MarkerData {
  gx: number;
  gy: number;
  world: number;
  label: string;
  category: string;
}

const getCategoryColor = (cat: string) => {
  switch (cat) {
    case 'Monstres': return 'text-rose-500';
    case 'PNJs': return 'text-blue-500';
    case 'Plantes': return 'text-emerald-500';
    case 'Arbres': return 'text-amber-800';
    case 'Gisements': return 'text-amber-500';
    default: return 'text-slate-400';
  }
};

const MapMarker = memo(({ x, y, items }: { x: number, y: number, items: { label: string, category: string }[] }) => {
  const firstCategory = items[0]?.category || '';
  const color = getCategoryColor(firstCategory);
  
  return (
    <div className="absolute z-30 pointer-events-auto cursor-help" style={{ left: x, top: y, transform: 'translate(-50%, -100%)' }}>
      <div className="relative flex flex-col items-center group/marker">
        {items.length > 0 && (
          <div className="absolute bottom-full mb-2 px-3 py-1.5 bg-slate-950/95 border border-white/20 rounded-lg text-[11px] font-black text-white whitespace-nowrap shadow-[0_0_20px_rgba(0,0,0,0.5)] opacity-0 group-hover/marker:opacity-100 transition-all duration-200 translate-y-1 group-hover/marker:translate-y-0 pointer-events-none z-50">
            <div className="flex flex-col gap-1.5">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${getCategoryColor(item.category).replace('text-', 'bg-')}`} />
                  {item.label}
                </div>
              ))}
            </div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-950/95" />
          </div>
        )}
        <div className="relative">
          <MapPin size={28} className={`${color} fill-current/20 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] transition-transform group-hover/marker:scale-110`} />
          <div className="absolute inset-0 animate-ping opacity-40"><MapPin size={28} className={color} /></div>
        </div>
      </div>
    </div>
  );
});

const CoordsOverlay = memo(({ gx, gy, worldId, isFullscreen }: { gx: number, gy: number, worldId: number, isFullscreen: boolean }) => (
  <div className={`absolute bottom-4 left-4 md:bottom-6 md:right-6 md:left-auto flex flex-col items-start md:items-end gap-3 pointer-events-none z-20 ${isFullscreen ? 'pl-safe pb-safe' : ''}`}> 
    <div className="bg-slate-900/90 backdrop-blur-md border border-amber-500/20 p-2.5 md:p-4 rounded-xl md:rounded-2xl shadow-2xl flex items-center gap-3 md:gap-4 border-l-4 border-l-amber-500 scale-90 md:scale-100">
      <div className="p-1.5 md:p-2.5 bg-amber-500/10 rounded-lg md:rounded-xl text-amber-500 shadow-inner"><MousePointer2 size={14} className="md:w-[18px] md:h-[18px]" /></div>
      <div>
        <div className="text-[7px] md:text-[10px] text-amber-500/60 font-black uppercase tracking-widest mb-0.5">Position</div>
        <div className="text-sm md:text-2xl font-mono font-black text-white tracking-tighter">{gx}.{gy}.{worldId}</div>
      </div>
    </div>
  </div>
));

const MapViewer: React.FC = () => {
  const { bestiaryData, plantsData, treesData, depositsData, npcsData, showNotification } = useData();
  const [searchParams, setSearchParams] = useSearchParams();
  const targetName = searchParams.get('name');

  const [selectedMap, setSelectedMap] = useState<MapInfo>(MAPS[0]);
  const [activeLayers, setActiveLayers] = useState<Set<string>>(new Set());
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
  
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mapViewportRef = useRef<HTMLDivElement>(null);
  const transformWrapperRef = useRef<any>(null);
  const initialCenteringDone = useRef(false);
  const [coords, setCoords] = useState({ x: 0, y: 0, gx: 0, gy: 0 });

  const fitToView = (instance: any) => {
    if (imgRef.current && mapViewportRef.current) {
      const containerW = mapViewportRef.current.offsetWidth;
      const containerH = mapViewportRef.current.offsetHeight;
      const scaleX = (containerW - 40) / imgRef.current.naturalWidth;
      const scaleY = (containerH - 40) / imgRef.current.naturalHeight;
      const scale = Math.min(scaleX, scaleY, 1);
      const x = (containerW - imgRef.current.naturalWidth * scale) / 2;
      const y = (containerH - imgRef.current.naturalHeight * scale) / 2;
      instance.setTransform(x, y, scale, 400, "easeOut");
    }
  };

  const centerOnPoint = (instance: any, gx: number, gy: number) => {
    if (gx === 0 && gy === 0) return;
    if (imgRef.current && mapViewportRef.current) {
      const px = gx * 2;
      const py = gy;
      const scale = window.innerWidth < 768 ? 2 : 1.2;
      const x = (mapViewportRef.current.offsetWidth / 2) - (px * scale);
      const y = (mapViewportRef.current.offsetHeight / 2) - (py * scale);
      instance.setTransform(x, y, scale, 600, "easeOut");
    }
  };

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('t4c-fullscreen-change', { detail: isFullscreen }));
    if (isFullscreen) {
        document.body.style.overflow = 'hidden';
        window.scrollTo(0, 0);
    } else {
        document.body.style.overflow = '';
    }

    const timer = setTimeout(() => {
      if (transformWrapperRef.current) {
        if (visibleMarkers.length > 0) {
           centerOnPoint(transformWrapperRef.current, visibleMarkers[0].gx, visibleMarkers[0].gy);
        } else {
           fitToView(transformWrapperRef.current);
        }
      }
    }, 500); 
    
    return () => {
      document.body.style.overflow = '';
      clearTimeout(timer);
    };
  }, [isFullscreen]);

  useEffect(() => {
    const checkOrientation = () => {
      const isPortrait = window.matchMedia('(orientation: portrait)').matches;
      setOrientation(isPortrait ? 'portrait' : 'landscape');
    };

    checkOrientation();

    const mql = window.matchMedia('(orientation: portrait)');
    const handleOrientationChange = (e: MediaQueryListEvent) => {
      setOrientation(e.matches ? 'portrait' : 'landscape');
    };

    mql.addEventListener('change', handleOrientationChange);
    window.addEventListener('resize', checkOrientation);
    
    // Fallback for devices where orientationchange fires before dimensions update
    const handleLegacyOrientationChange = () => {
       setTimeout(checkOrientation, 100);
       setTimeout(checkOrientation, 500);
    };
    window.addEventListener('orientationchange', handleLegacyOrientationChange);

    return () => {
        mql.removeEventListener('change', handleOrientationChange);
        window.removeEventListener('resize', checkOrientation);
        window.removeEventListener('orientationchange', handleLegacyOrientationChange);
    };
  }, []);

  const dataLayers = useMemo(() => {
    const categories: Record<string, Record<string, MarkerData[]>> = { 'Monstres': {}, 'PNJs': {}, 'Plantes': {}, 'Arbres': {}, 'Gisements': {} };
    
    bestiaryData.forEach(m => {
      const rawCoords = Array.isArray(m.coordinates) ? m.coordinates : (m.coordinates ? [m.coordinates] : []);
      const validMarkers = rawCoords
        .filter(c => c && typeof c === 'string' && c.trim() !== '')
        .map(coord => {
          const parts = coord.split('.').map(Number);
          return { gx: parts[0], gy: parts[1], world: parts[2], label: m.name, category: 'Monstres' };
        }).filter((marker: MarkerData) => !isNaN(marker.world) && marker.world !== -1);

      categories['Monstres'][m.name] = validMarkers.length > 0 
        ? validMarkers 
        : [{ gx: 0, gy: 0, world: -1, label: m.name, category: 'Monstres' }];
    });
    
    npcsData.forEach(npc => {
      const rawCoords = Array.isArray(npc.coordinates) ? npc.coordinates : (npc.coordinates ? [npc.coordinates] : []);
      const validMarkers = rawCoords
        .filter(c => c && typeof c === 'string' && c.trim() !== '')
        .map(coord => {
          const parts = coord.replace(/,/g, '.').split('.').map(Number);
          return { gx: parts[0], gy: parts[1], world: parts[2], label: npc.name, category: 'PNJs' };
        }).filter((marker: MarkerData) => !isNaN(marker.world) && marker.world !== -1);

      categories['PNJs'][npc.name] = validMarkers.length > 0 
        ? validMarkers 
        : [{ gx: 0, gy: 0, world: -1, label: npc.name, category: 'PNJs' }];
    });

    const processStaticList = (list: RecipeItem[], cat: string) => {
        list.forEach(item => {
            const rawCoords = Array.isArray(item.coordinates) ? item.coordinates : (item.coordinates ? [item.coordinates] : []);
            const validMarkers = rawCoords
                .filter(c => c && typeof c === 'string' && c.trim() !== '')
                .map((c: string) => {
                    const parts = c.split('.').map(Number);
                    return { gx: parts[0], gy: parts[1], world: parts[2], label: item.name, category: cat };
                }).filter((marker: MarkerData) => !isNaN(marker.world) && marker.world !== -1);

            categories[cat][item.name] = validMarkers.length > 0 
                ? validMarkers 
                : [{ gx: 0, gy: 0, world: -1, label: item.name, category: cat }];
        });
    };

    processStaticList(plantsData, 'Plantes');
    processStaticList(treesData, 'Arbres');
    processStaticList(depositsData, 'Gisements');
    return categories;
  }, [bestiaryData, npcsData, plantsData, treesData, depositsData]);

  const visibleMarkers = useMemo(() => {
    const markers: MarkerData[] = [];
    if (targetName) {
        const normalizedTarget = fastNormalize(targetName);
        for (const cat of Object.keys(dataLayers)) {
            const key = Object.keys(dataLayers[cat]).find(k => fastNormalize(k) === normalizedTarget);
            if (key) markers.push(...dataLayers[cat][key]);
        }
    }
    activeLayers.forEach(layerKey => {
      const [cat, name] = layerKey.split('|');
      if (dataLayers[cat] && dataLayers[cat][name]) markers.push(...dataLayers[cat][name]);
    });
    return markers.filter(m => m.world === selectedMap.worldId && !(m.gx === 0 && m.gy === 0));
  }, [targetName, activeLayers, dataLayers, selectedMap.worldId]);

  const groupedMarkers = useMemo(() => {
    const groups: Record<string, { gx: number, gy: number, items: { label: string, category: string }[] }> = {};
    visibleMarkers.forEach(m => {
      const key = `${m.gx},${m.gy}`;
      if (!groups[key]) {
        groups[key] = { gx: m.gx, gy: m.gy, items: [] };
      }
      groups[key].items.push({ label: m.label, category: m.category });
    });
    return Object.values(groups);
  }, [visibleMarkers]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleReset = () => {
    setActiveLayers(new Set());
    setSearchQuery('');
    setSearchParams({});
    
    if (selectedMap.id !== MAPS[0].id) {
      setSelectedMap(MAPS[0]);
      setIsLoading(true);
    }
    
    setExpandedCategories(new Set());
    if (transformWrapperRef.current) {
      setTimeout(() => fitToView(transformWrapperRef.current), 100);
    }
    showNotification('Cartographie réinitialisée', 'success');
  };

  const toggleLayer = (cat: string, name: string) => {
    const layerMarkers = dataLayers[cat][name];
    const isDummy = layerMarkers && layerMarkers.length > 0 && (layerMarkers[0].world === -1 || (layerMarkers[0].gx === 0 && layerMarkers[0].gy === 0));

    if (isDummy) {
        showNotification('Localisation indisponible', 'error');
        return;
    }

    const key = `${cat}|${name}`;
    setActiveLayers(prev => {
      const next = new Set(prev);
      const isActivating = !next.has(key);
      if (isActivating) {
        next.add(key);
        if (layerMarkers && layerMarkers.length > 0) {
          const firstMarker = layerMarkers[0];
          if (firstMarker.world !== selectedMap.worldId) {
            const targetMap = MAPS.find(m => m.worldId === firstMarker.world);
            if (targetMap) { setSelectedMap(targetMap); setIsLoading(true); }
          }
          setTimeout(() => { if (transformWrapperRef.current) centerOnPoint(transformWrapperRef.current, firstMarker.gx, firstMarker.gy); }, 150);
        }
      } else { next.delete(key); }
      return next;
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (imgRef.current) {
      const rect = imgRef.current.getBoundingClientRect();
      const scaleX = imgRef.current.naturalWidth / rect.width;
      const scaleY = imgRef.current.naturalHeight / rect.height;
      const localX = (e.clientX - rect.left) * scaleX;
      const localY = (e.clientY - rect.top) * scaleY;
      if (localX >= 0 && localY >= 0 && localX <= imgRef.current.naturalWidth && localY <= imgRef.current.naturalHeight) {
        setCoords({ x: Math.floor(localX), y: Math.floor(localY), gx: Math.floor(localX / 2), gy: Math.floor(localY) });
      }
    }
  };

  const handleMapClick = () => {
    const coordString = `${coords.gx}.${coords.gy}.${selectedMap.worldId}`;
    navigator.clipboard.writeText(coordString).then(() => {
      showNotification(`Coordonnées copiées : ${coordString}`, 'success');
    });
  };

  const filteredDataLayers = useMemo(() => {
    if (!searchQuery) return dataLayers;
    const query = fastNormalize(searchQuery);
    const filtered: Record<string, Record<string, MarkerData[]>> = {};
    Object.entries(dataLayers).forEach(([cat, items]) => {
      const matchingItems: Record<string, MarkerData[]> = {};
      Object.entries(items).forEach(([name, markers]) => {
        if (fastNormalize(name).includes(query)) matchingItems[name] = markers;
      });
      if (Object.keys(matchingItems).length > 0) filtered[cat] = matchingItems;
    });
    return filtered;
  }, [dataLayers, searchQuery]);

  useEffect(() => {
    if (targetName && dataLayers) {
      const normalizedTarget = fastNormalize(targetName);
      for (const cat of Object.keys(dataLayers)) {
        const key = Object.keys(dataLayers[cat]).find(k => fastNormalize(k) === normalizedTarget);
        if (key) {
          const firstMarker = dataLayers[cat][key][0];
          if (firstMarker && firstMarker.world !== selectedMap.worldId) {
            const targetMap = MAPS.find(m => m.worldId === firstMarker.world);
            if (targetMap) {
              setSelectedMap(targetMap);
              setIsLoading(true);
              initialCenteringDone.current = false;
            }
          }
          break;
        }
      }
    }
  }, [targetName, dataLayers]);

  return (
    <div 
      ref={containerRef}
      className={`relative flex flex-col space-y-2 md:space-y-4 overflow-hidden bg-[#0a0a0c] transition-all duration-500 ${isFullscreen ? 'fixed !inset-0 !z-[9999] !w-screen !h-[100dvh] !max-w-none !m-0 p-safe touch-none' : 'h-[calc(100vh-80px)] md:h-[calc(100vh-140px)]'}`}
      style={isFullscreen ? { touchAction: 'none', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 } : {}}
    >
      {orientation === 'portrait' && (
        <div className="fixed inset-0 z-[10000] bg-slate-950 flex flex-col items-center justify-center p-8 text-center sm:hidden p-safe">
          <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mb-6 animate-pulse"><RotateCw size={40} className="text-amber-500" /></div>
          <h2 className="text-xl font-black text-white uppercase italic mb-2">Mode Paysage Requis</h2>
          <p className="text-slate-500 text-sm leading-relaxed">Faites pivoter votre téléphone pour utiliser la cartographie HD.</p>
        </div>
      )}

      <div className={`flex gap-2 md:gap-6 items-center bg-slate-800/30 p-2 md:p-4 rounded-xl md:rounded-2xl border border-slate-700/50 shadow-xl shrink-0 transition-all ${isFullscreen ? 'py-1 md:py-2 px-safe-top' : ''}`}>
        <div className="flex items-center gap-3 shrink-0">
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 bg-amber-500/10 text-amber-500 rounded-lg border border-amber-500/20 lg:hidden"><Menu size={18} /></button>
          <div className={`${isFullscreen ? 'hidden' : 'hidden lg:flex items-center gap-3'}`}>
            <h2 className="text-lg font-black text-slate-100 uppercase tracking-tight italic leading-none">Cartographie</h2>
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="hidden lg:flex flex-wrap gap-2">
            {MAPS.map(map => (
              <button key={map.id} onClick={() => { setSelectedMap(map); setIsLoading(true); }} className={`px-2 md:px-3 py-1 md:py-1.5 rounded-lg text-[7px] md:text-[10px] font-black uppercase tracking-wider transition-all border ${selectedMap.id === map.id ? 'bg-amber-500 border-amber-400 text-slate-950 shadow-lg scale-105' : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-200'}`}>
                {map.name.split(' / ')[0]}
                {visibleMarkers.some(m => m.world === map.worldId) && <span className="ml-1 w-1 h-1 rounded-full bg-rose-500 animate-pulse inline-block" />}
              </button>
            ))}
          </div>
          <div className="lg:hidden">
            <ScrollContainer className="flex gap-1 px-1">
              {MAPS.map(map => (
                <button key={map.id} onClick={() => { setSelectedMap(map); setIsLoading(true); }} className={`shrink-0 px-2 py-1 rounded-lg text-[8px] font-black uppercase tracking-wider transition-all border ${selectedMap.id === map.id ? 'bg-amber-500 border-amber-400 text-slate-950 shadow-lg scale-105' : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-200'}`}>
                  {map.name.split(' / ')[0]}
                  {visibleMarkers.some(m => m.world === map.worldId) && <span className="ml-1 w-1 h-1 rounded-full bg-rose-500 animate-pulse inline-block" />}
                </button>
              ))}
            </ScrollContainer>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {(orientation === 'landscape' || !window.matchMedia('(max-width: 768px)').matches) && (
            <button onClick={toggleFullscreen} className="p-2 md:p-3 bg-slate-900 border border-slate-800 rounded-lg md:rounded-xl text-slate-400 hover:text-amber-500 transition-all shadow-xl">
              {isFullscreen ? <Minimize size={18} /> : <Fullscreen size={18} />}
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-1 gap-2 md:gap-4 min-h-0 relative">
        <div className={`
          fixed inset-y-0 left-0 z-[10100] w-72 bg-slate-900 border-slate-800 shadow-2xl transform transition-all duration-300 
          lg:relative lg:translate-x-0 lg:z-0 lg:bg-slate-900/50 
          ${isFullscreen ? 'lg:border-r lg:rounded-none' : 'lg:border lg:rounded-2xl'} 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          ${isSidebarCollapsed ? 'lg:w-0 lg:opacity-0 lg:pointer-events-none lg:ml-[-16px]' : 'lg:w-72 lg:opacity-100'}
        `}>
          <div className="flex flex-col h-full overflow-hidden">
            <div className="p-4 border-b border-slate-800 bg-slate-800/20 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3"><Layers size={18} className="text-amber-500" /><h3 className="text-xs font-black uppercase tracking-widest text-slate-200">Filtres</h3></div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={handleReset}
                  className="p-2 hover:bg-rose-500/20 text-slate-500 hover:text-rose-500 rounded-lg transition-all" 
                  title="Réinitialiser tout"
                >
                  <RotateCcw size={18} />
                </button>
                <button 
                  onClick={() => {
                    if (window.innerWidth < 1024) setIsSidebarOpen(false);
                    else setIsSidebarCollapsed(true);
                  }}
                  className="p-2 text-slate-500 hover:text-white transition-all rounded-lg hover:bg-slate-800"
                  title="Réduire les filtres"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="px-3 pt-3 pb-1">
              <div className="relative group">
                <Search size={14} className="absolute left-3 top-2.5 text-slate-500 group-focus-within:text-amber-500" />
                <input type="text" placeholder="Rechercher..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2 pl-9 pr-8 text-[11px] font-bold text-slate-200 focus:border-amber-500 outline-none transition-all" />
                {searchQuery && <button onClick={() => setSearchQuery('')} className="absolute right-2 top-2.5 text-slate-500 hover:text-white"><X size={14} /></button>}
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-2 custom-scrollbar space-y-2">
              {Object.entries(filteredDataLayers).map(([cat, items]) => {
                const isExpanded = expandedCategories.has(cat);
                
                // Sort items: Available first, then Unavailable, both alphabetically
                const itemsList = Object.keys(items).sort((a, b) => {
                  const markersA = items[a];
                  const markersB = items[b];
                  const isDummyA = markersA.length === 0 || markersA[0].world === -1 || (markersA[0].gx === 0 && markersA[0].gy === 0);
                  const isDummyB = markersB.length === 0 || markersB[0].world === -1 || (markersB[0].gx === 0 && markersB[0].gy === 0);

                  if (isDummyA !== isDummyB) {
                    return isDummyA ? 1 : -1;
                  }
                  return a.localeCompare(b);
                });

                return (
                  <div key={cat} className="space-y-1">
                    <button onClick={() => { const next = new Set(expandedCategories); if (next.has(cat)) next.delete(cat); else next.add(cat); setExpandedCategories(next); }} className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors group">
                      <div className="flex items-center gap-2">
                        {isExpanded ? <ChevronDown size={14} className={getCategoryColor(cat).replace('text-', 'text-')} /> : <ChevronRight size={14} className="text-slate-500" />}
                        <span className="text-[11px] font-black uppercase tracking-wider text-slate-300 group-hover:text-amber-400">{cat}</span>
                      </div>
                      <span className="text-[9px] font-bold text-slate-600 bg-slate-950 px-1.5 py-0.5 rounded">{itemsList.length}</span>
                    </button>
                    {isExpanded && (
                      <div className="pl-4 space-y-0.5 animate-in slide-in-from-top-1 duration-200">
                        {itemsList.map(name => {
                          const isActive = activeLayers.has(`${cat}|${name}`);
                          const layerMarkers = items[name];
                          const isDummy = layerMarkers.length > 0 && (layerMarkers[0].world === -1 || (layerMarkers[0].gx === 0 && layerMarkers[0].gy === 0));
                          const worldCount = layerMarkers.filter(m => m.world === selectedMap.worldId && !(m.gx === 0 && m.gy === 0)).length;
                          return (
                            <button 
                              key={name} 
                              onClick={() => toggleLayer(cat, name)} 
                              className={`
                                w-full flex items-center justify-between p-1.5 rounded-md text-[10px] font-medium transition-all 
                                ${isActive 
                                  ? 'bg-amber-500/10 text-amber-400' 
                                  : (isDummy ? 'text-slate-600 grayscale opacity-50 cursor-not-allowed' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5')
                                }
                                ${isDummy ? 'italic' : ''}
                              `}
                            >
                              <div className="flex items-center gap-2 truncate"><Eye size={12} className={isActive ? 'opacity-100' : 'opacity-20'} /><span className="truncate">{name}</span></div>
                              {worldCount > 0 && <span className={`text-[8px] font-black bg-white/5 px-1 rounded-sm ${getCategoryColor(cat)}`}>{worldCount}</span>}
                              {isDummy && !isActive && <span className="text-[7px] font-black text-slate-700 uppercase tracking-tighter">Indisponible</span>}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {(isSidebarOpen && window.innerWidth < 1024) && <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[10050]" onClick={() => setIsSidebarOpen(false)} />}

        <div ref={mapViewportRef} className="relative flex-1 bg-slate-950 rounded-xl md:rounded-2xl border border-slate-800 overflow-hidden select-none group shadow-inner">
          {/* Toggle to show sidebar when collapsed */}
          {(isSidebarCollapsed || (!isSidebarOpen && window.innerWidth < 1024)) && (
            <button 
              onClick={() => {
                setIsSidebarCollapsed(false);
                setIsSidebarOpen(true);
              }}
              className="absolute top-2 left-2 md:top-4 md:left-4 z-20 p-2 md:p-3 bg-amber-500/90 backdrop-blur-md border border-amber-400 rounded-lg md:rounded-xl text-slate-950 hover:bg-amber-400 transition-all shadow-2xl flex items-center gap-2"
            >
              <Menu size={16} className="md:w-5 md:h-5" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-wider">Filtres</span>
            </button>
          )}
          
          {isLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-950/80 backdrop-blur-sm">
              <Loader2 size={24} className="md:w-12 md:h-12 text-amber-500 animate-spin mb-2 md:mb-4" /><p className="text-slate-400 font-black uppercase tracking-widest animate-pulse text-[8px] md:text-xs">Chargement...</p>
            </div>
          )}
          <TransformWrapper 
            key={`${isFullscreen}-${selectedMap.id}`}
            initialScale={0.1} minScale={0.01} maxScale={4} doubleClick={{ disabled: true }} limitToBounds={false} centerZoomedOut={true} ref={transformWrapperRef}>
            {(instance) => (
              <>
                <div className={`absolute top-2 right-2 md:top-4 md:right-4 z-20 flex flex-col gap-1 md:gap-2 ${isFullscreen ? 'pr-safe pt-safe' : ''}`}> 
                  <button onClick={() => instance.zoomIn()} className="p-2 md:p-3 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-lg md:rounded-xl text-slate-300 hover:text-amber-500 transition-all shadow-2xl"><ZoomIn size={16} className="md:w-5 md:h-5" /></button>
                  <button onClick={() => instance.zoomOut()} className="p-2 md:p-3 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-lg md:rounded-xl text-slate-300 hover:text-amber-500 transition-all shadow-2xl"><ZoomOut size={16} className="md:w-5 md:h-5" /></button>
                  <button onClick={() => fitToView(instance)} className="p-2 md:p-3 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-lg md:rounded-xl text-slate-300 hover:text-amber-500 transition-all shadow-2xl" title="Recadrer"><Maximize size={16} className="md:w-5 md:h-5" /></button>
                </div>

                <TransformComponent wrapperStyle={{ width: "100%", height: "100%" }}>
                  <div onMouseMove={handleMouseMove} onDoubleClick={handleMapClick} className="relative cursor-crosshair">
                    <img 
                      ref={imgRef} 
                      src={selectedMap.path} 
                      alt={selectedMap.name} 
                      className="max-w-none" 
                      onLoad={() => { 
                        setIsLoading(false); 
                        setTimeout(() => {
                          if (transformWrapperRef.current) {
                            if (visibleMarkers.length > 0) {
                              centerOnPoint(transformWrapperRef.current, visibleMarkers[0].gx, visibleMarkers[0].gy);
                            } else {
                              fitToView(transformWrapperRef.current);
                            }
                          }
                        }, 100); 
                      }} 
                      draggable={false} 
                    />
                    {groupedMarkers.map((group, i) => (
                      <MapMarker 
                        key={`${group.gx}-${group.gy}-${i}`} 
                        x={group.gx * 2} 
                        y={group.gy} 
                        items={group.items} 
                      />
                    ))}
                  </div>
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
          <div className="absolute bottom-4 left-4 md:bottom-6 md:right-6 md:left-auto flex flex-col items-start md:items-end gap-2 pointer-events-none z-20">
            <CoordsOverlay gx={coords.gx} gy={coords.gy} worldId={selectedMap.worldId} isFullscreen={isFullscreen} />
            <div className="bg-slate-950/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 text-[9px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-amber-500 animate-pulse" />
              Double-clic pour copier les coordonnées
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapViewer;
