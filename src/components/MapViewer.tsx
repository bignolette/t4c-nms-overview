import React, { useState, useRef, memo, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Map as MapIcon, Maximize, ZoomIn, ZoomOut, MousePointer2, Loader2, MapPin, Layers, ChevronRight, ChevronDown, Eye, RotateCcw, Search, X } from 'lucide-react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { useData } from '../context/DataContext';
import { fastNormalize } from '../data/utils';
import type { RecipeItem } from '../data/types';

interface MapInfo {
  id: string;
  worldId: number;
  name: string;
  path: string;
}

const MAPS: MapInfo[] = [
  { id: 'arakas', worldId: 0, name: 'Arakas / Stoneheim / Raven\'s Dust', path: 'assets/maps/map_HD_0_Arakas.png' },
  { id: 'leoworld', worldId: 1, name: 'Leoworld', path: 'assets/maps/map_HD_1_Leoworld.png' },
  { id: 'underworld', worldId: 2, name: 'Underworld', path: 'assets/maps/map_HD_2_Underworld.png' },
  { id: 'ravendust', worldId: 3, name: 'Drake Island', path: 'assets/maps/map_HD_3_RavenDust.png' },
  { id: 'stoneheim', worldId: 4, name: 'Ile de Lune / Nieve', path: 'assets/maps/map_HD_4_Stoneheim.png' },
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

/**
 * Pulsing Marker Component
 */
const MapMarker = memo(({ x, y, label, color = "text-rose-500" }: { x: number, y: number, label?: string, color?: string }) => (
  <div 
    className="absolute z-30 pointer-events-auto cursor-help"
    style={{ left: x, top: y, transform: 'translate(-50%, -100%)' }}
  >
    <div className="relative flex flex-col items-center group/marker">
      {label && (
        <div className="absolute bottom-full mb-2 px-3 py-1.5 bg-slate-950/95 border border-white/20 rounded-lg text-[11px] font-black text-white whitespace-nowrap shadow-[0_0_20px_rgba(0,0,0,0.5)] opacity-0 group-hover/marker:opacity-100 transition-all duration-200 translate-y-1 group-hover/marker:translate-y-0 pointer-events-none z-50">
          <div className="flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full ${color.replace('text-', 'bg-')}`} />
            {label}
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-950/95" />
        </div>
      )}
      <div className="relative">
        <MapPin size={28} className={`${color} fill-current/20 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] transition-transform group-hover/marker:scale-110`} />
        <div className="absolute inset-0 animate-ping opacity-40">
          <MapPin size={28} className={color} />
        </div>
      </div>
    </div>
  </div>
));

const CoordsOverlay = memo(({ gx, gy, worldId, px, py }: { gx: number, gy: number, worldId: number, px: number, py: number }) => (
  <div className="absolute bottom-6 right-6 flex flex-col items-end gap-3 pointer-events-none z-20">
    <div className="bg-slate-900/90 backdrop-blur-md border border-amber-500/20 p-4 rounded-2xl shadow-2xl flex items-center gap-4 border-l-4 border-l-amber-500">
      <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-500 shadow-inner">
        <MousePointer2 size={18} />
      </div>
      <div>
        <div className="text-[10px] text-amber-500/60 font-black uppercase tracking-widest mb-0.5">Curseur T4C</div>
        <div className="text-2xl font-mono font-black text-white tracking-tighter">
          {gx}.{gy}.{worldId}
        </div>
      </div>
    </div>
    <div className="flex gap-2">
      <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 px-3 py-1.5 rounded-lg shadow-xl flex items-center gap-2">
         <span className="text-[9px] text-slate-500 font-black uppercase tracking-wider">Pixels:</span>
         <span className="text-[10px] text-slate-300 font-mono">{px}, {py}</span>
      </div>
    </div>
  </div>
));

const MapViewer: React.FC = () => {
  const { bestiaryData, recipesData, itemsData, plantsData, treesData, depositsData } = useData();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const targetName = searchParams.get('name');

  const [selectedMap, setSelectedMap] = useState<MapInfo>(MAPS[0]);
  const [activeLayers, setActiveLayers] = useState<Set<string>>(new Set());
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['Monstres']));
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  const imgRef = useRef<HTMLImageElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const transformWrapperRef = useRef<any>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0, gx: 0, gy: 0 });

  // Index all potential map markers by category
  const dataLayers = useMemo(() => {
    const categories: Record<string, Record<string, MarkerData[]>> = {
      'Monstres': {},
      'PNJs': {},
      'Plantes': {},
      'Arbres': {},
      'Gisements': {},
      'Divers': {}
    };

    // 1. Monstres
    bestiaryData.forEach(m => {
      if (m.coordinates && m.coordinates.length > 0) {
        categories['Monstres'][m.name] = (Array.isArray(m.coordinates) ? m.coordinates : [m.coordinates]).map(coord => {
          const [gx, gy, w] = coord.split('.').map(Number);
          return { gx, gy, world: w, label: m.name, category: 'Monstres' };
        }).filter((marker: MarkerData) => !isNaN(marker.world));
      }
    });

    // 2. PNJs (Teachers)
    const processTeachers = (list: any[]) => {
      list.forEach(r => {
        if (r.learnedFrom && r.coordinates) {
          const [gx, gy, w] = r.coordinates.split('.').map(Number);
          if (!categories['PNJs'][r.learnedFrom]) categories['PNJs'][r.learnedFrom] = [];
          if (!categories['PNJs'][r.learnedFrom].some(m => m.gx === gx && m.gy === gy && m.world === w)) {
            categories['PNJs'][r.learnedFrom].push({ gx, gy, world: w, label: r.learnedFrom, category: 'PNJs' });
          }
        }
      });
    };
    processTeachers(recipesData);
    processTeachers(itemsData);

    // 3. Plants, Trees, Deposits
    const processItems = (list: RecipeItem[], cat: string) => {
        list.forEach(item => {
            if (item.coordinates) {
                const coordsList = Array.isArray(item.coordinates) ? item.coordinates : [item.coordinates];
                categories[cat][item.name] = coordsList.map((c: string) => {
                    const [gx, gy, w] = c.split('.').map(Number);
                    return { gx, gy, world: w, label: item.name, category: cat };
                }).filter((marker: MarkerData) => !isNaN(marker.world));
            }
        });
    };
    processItems(plantsData, 'Plantes');
    processItems(treesData, 'Arbres');
    processItems(depositsData, 'Gisements');

    // 4. Divers (Remaining with coordinates)
    recipesData.forEach(r => {
        if (r.sources) {
            r.sources.forEach((s: any) => {
                s.locations.forEach((loc: any) => {
                    if (loc.coordinates) {
                        const parts = loc.coordinates.split('.');
                        if (parts.length === 3) {
                            const [gx, gy, w] = parts.map(Number);
                            if (!isNaN(w)) {
                                // Only if not already categorized
                                if (!categories['Plantes'][loc.label] && !categories['Arbres'][loc.label] && !categories['Gisements'][loc.label] && !categories['Monstres'][loc.label] && !categories['PNJs'][loc.label]) {
                                    if (!categories['Divers'][loc.label]) categories['Divers'][loc.label] = [];
                                    if (!categories['Divers'][loc.label].some(m => m.gx === gx && m.gy === gy && m.world === w)) {
                                        categories['Divers'][loc.label].push({ gx, gy, world: w, label: loc.label, category: 'Divers' });
                                    }
                                }
                            }
                        }
                    }
                });
            });
        }
    });

    return categories;
  }, [bestiaryData, recipesData, itemsData, plantsData, treesData, depositsData]);

  // Filtered layers based on search
  const filteredDataLayers = useMemo(() => {
    if (!searchQuery) return dataLayers;
    const query = fastNormalize(searchQuery);
    const filtered: Record<string, Record<string, MarkerData[]>> = {};

    Object.entries(dataLayers).forEach(([cat, items]) => {
      const matchingItems: Record<string, MarkerData[]> = {};
      Object.entries(items).forEach(([name, markers]) => {
        if (fastNormalize(name).includes(query)) {
          matchingItems[name] = markers;
        }
      });
      if (Object.keys(matchingItems).length > 0) {
        filtered[cat] = matchingItems;
      }
    });
    return filtered;
  }, [dataLayers, searchQuery]);

  // Combined markers to display
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
      if (dataLayers[cat] && dataLayers[cat][name]) {
        markers.push(...dataLayers[cat][name]);
      }
    });
    return markers.filter(m => m.world === selectedMap.worldId);
  }, [targetName, activeLayers, dataLayers, selectedMap.worldId]);

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

  const centerOnPoint = (instance: any, gx: number, gy: number) => {
    if (imgRef.current && wrapperRef.current) {
      const px = gx * 2;
      const py = gy;
      const scale = 1.2;
      const x = (wrapperRef.current.offsetWidth / 2) - (px * scale);
      const y = (wrapperRef.current.offsetHeight / 2) - (py * scale);
      instance.setTransform(x, y, scale, 600, "easeOut");
    }
  };

  const fitToView = (instance: any) => {
    if (imgRef.current && wrapperRef.current) {
      const scaleX = (wrapperRef.current.offsetWidth - 60) / imgRef.current.naturalWidth;
      const scaleY = (wrapperRef.current.offsetHeight - 60) / imgRef.current.naturalHeight;
      const scale = Math.min(scaleX, scaleY, 1);
      const x = (wrapperRef.current.offsetWidth - imgRef.current.naturalWidth * scale) / 2;
      const y = (wrapperRef.current.offsetHeight - imgRef.current.naturalHeight * scale) / 2;
      instance.setTransform(x, y, scale, 400, "easeOut");
    }
  };

  const toggleLayer = (cat: string, name: string) => {
    const key = `${cat}|${name}`;
    setActiveLayers(prev => {
      const next = new Set(prev);
      const isActivating = !next.has(key);
      if (isActivating) {
        next.add(key);
        const layerMarkers = dataLayers[cat][name];
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

  const toggleCategory = (cat: string) => {
    setExpandedCategories(prev => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  const clearFilters = () => {
    setActiveLayers(new Set());
    setSearchParams({});
    setSearchQuery('');
  };

  useEffect(() => {
    if (searchQuery) {
      setExpandedCategories(new Set(Object.keys(filteredDataLayers)));
    }
  }, [searchQuery, filteredDataLayers]);

  useEffect(() => {
    if (targetName) {
        const normalizedTarget = fastNormalize(targetName);
        let firstWorld = -1;
        for (const cat of Object.keys(dataLayers)) {
            const key = Object.keys(dataLayers[cat]).find(k => fastNormalize(k) === normalizedTarget);
            if (key) { firstWorld = dataLayers[cat][key][0].world; break; }
        }
        if (firstWorld !== -1) {
            const targetMap = MAPS.find(m => m.worldId === firstWorld);
            if (targetMap && targetMap.worldId !== selectedMap.worldId) {
                setSelectedMap(targetMap);
                setIsLoading(true);
            }
        }
    }
  }, [targetName, dataLayers, selectedMap.worldId]);

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

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] space-y-4">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-800/30 p-4 rounded-2xl border border-slate-700/50 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500 border border-amber-500/20"><MapIcon size={24} /></div>
          <div>
            <h2 className="text-xl font-black text-slate-100 uppercase tracking-tight italic">Cartographie</h2>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">{targetName || selectedMap.name}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {MAPS.map(map => (
            <button key={map.id} onClick={() => { setSelectedMap(map); setIsLoading(true); }} className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all border ${selectedMap.id === map.id ? 'bg-amber-500 border-amber-400 text-slate-950 shadow-lg scale-105' : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-200'}`}>
              {map.name}
              {visibleMarkers.some(m => m.world === map.worldId) && <span className="ml-2 w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse inline-block" />}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-1 gap-4 min-h-0">
        <div className="w-72 bg-slate-900/50 border border-slate-800 rounded-2xl flex flex-col overflow-hidden shadow-2xl">
          <div className="p-4 border-b border-slate-800 bg-slate-800/20 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Layers size={18} className="text-amber-500" />
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-200">Filtres</h3>
            </div>
            {(activeLayers.size > 0 || targetName || searchQuery) && (
              <button onClick={clearFilters} className="p-1.5 hover:bg-rose-500/20 text-slate-500 hover:text-rose-500 rounded-lg transition-all" title="Réinitialiser"><RotateCcw size={14} /></button>
            )}
          </div>

          <div className="px-2 pt-3 pb-1">
            <div className="relative group">
              <Search size={14} className="absolute left-3 top-2.5 text-slate-500 group-focus-within:text-amber-500" />
              <input type="text" placeholder="Rechercher..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2 pl-9 pr-8 text-[11px] font-bold text-slate-200 focus:border-amber-500 outline-none transition-all" />
              {searchQuery && <button onClick={() => setSearchQuery('')} className="absolute right-2 top-2.5 text-slate-500 hover:text-white"><X size={14} /></button>}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-2 custom-scrollbar space-y-2">
            {Object.entries(filteredDataLayers).map(([cat, items]) => {
              const isExpanded = expandedCategories.has(cat);
              const itemsList = Object.keys(items).sort();
              return (
                <div key={cat} className="space-y-1">
                  <button onClick={() => toggleCategory(cat)} className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors group">
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
                        const worldCount = items[name].filter(m => m.world === selectedMap.worldId).length;
                        return (
                          <button key={name} onClick={() => toggleLayer(cat, name)} className={`w-full flex items-center justify-between p-1.5 rounded-md text-[10px] font-medium transition-all ${isActive ? 'bg-amber-500/10 text-amber-400' : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'}`}>
                            <div className="flex items-center gap-2 truncate"><Eye size={12} className={isActive ? 'opacity-100' : 'opacity-20'} /><span className="truncate">{name}</span></div>
                            {worldCount > 0 && <span className={`text-[8px] font-black bg-white/5 px-1 rounded-sm ${getCategoryColor(cat)}`}>{worldCount}</span>}
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

        <div ref={wrapperRef} className="relative flex-1 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden select-none group shadow-inner">
          {isLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-950/80 backdrop-blur-sm">
              <Loader2 size={48} className="text-amber-500 animate-spin mb-4" />
              <p className="text-slate-400 font-black uppercase tracking-widest animate-pulse text-xs">Initialisation...</p>
            </div>
          )}
          <TransformWrapper initialScale={0.1} minScale={0.01} maxScale={4} doubleClick={{ disabled: true }} limitToBounds={false} centerZoomedOut={true} ref={transformWrapperRef}> 
            {(instance) => (
              <>
                <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
                  <button onClick={() => instance.zoomIn()} className="p-3 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-xl text-slate-300 hover:text-amber-500 hover:border-amber-500/50 transition-all shadow-2xl"><ZoomIn size={20} /></button>
                  <button onClick={() => instance.zoomOut()} className="p-3 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-xl text-slate-300 hover:text-amber-500 hover:border-amber-500/50 transition-all shadow-2xl"><ZoomOut size={20} /></button>
                  <button onClick={() => fitToView(instance)} className="p-3 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-xl text-slate-300 hover:text-amber-500 hover:border-amber-500/50 transition-all shadow-2xl" title="Recadrer"><Maximize size={20} /></button>
                </div>
                <TransformComponent wrapperStyle={{ width: "100%", height: "100%" }}>
                  <div onMouseMove={handleMouseMove} className="relative cursor-crosshair">
                    <img ref={imgRef} src={selectedMap.path} alt={selectedMap.name} className="max-w-none" onLoad={() => { setIsLoading(false); setTimeout(() => {
                      if (visibleMarkers.length > 0) centerOnPoint(instance, visibleMarkers[0].gx, visibleMarkers[0].gy);
                      else fitToView(instance);
                    }, 100); }} draggable={false} />
                    {visibleMarkers.map((marker, i) => <MapMarker key={`${marker.category}-${marker.label}-${i}`} x={marker.gx * 2} y={marker.gy} label={marker.label} color={getCategoryColor(marker.category)} />)}
                  </div>
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
          <CoordsOverlay gx={coords.gx} gy={coords.gy} worldId={selectedMap.worldId} px={coords.x} py={coords.y} />
        </div>
      </div>
    </div>
  );
};

export default MapViewer;
