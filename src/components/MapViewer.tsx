import React, { useState, useRef, memo, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Map as MapIcon, Maximize, ZoomIn, ZoomOut, MousePointer2, Loader2, MapPin } from 'lucide-react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { useData } from '../context/DataContext';
import { fastNormalize } from '../data/utils';

interface MapInfo {
  id: string;
  worldId: number;
  name: string;
  path: string;
}

const MAPS: MapInfo[] = [
  { id: 'arakas', worldId: 0, name: 'Arakas', path: 'assets/maps/map_HD_0_Arakas.png' },
  { id: 'leoworld', worldId: 1, name: 'Leoworld', path: 'assets/maps/map_HD_1_Leoworld.png' },
  { id: 'underworld', worldId: 2, name: 'Underworld', path: 'assets/maps/map_HD_2_Underworld.png' },
  { id: 'ravendust', worldId: 3, name: 'Raven\'s Dust', path: 'assets/maps/map_HD_3_RavenDust.png' },
  { id: 'stoneheim', worldId: 4, name: 'Stoneheim', path: 'assets/maps/map_HD_4_Stoneheim.png' },
  { id: 'ext4', worldId: 5, name: 'Extension 4', path: 'assets/maps/map_HD_5_Extension4.png' },
  { id: 'ext5', worldId: 6, name: 'Extension 5', path: 'assets/maps/map_HD_6_Extension5.png' },
  { id: 'ext6', worldId: 7, name: 'Extension 6', path: 'assets/maps/map_HD_7_Extension6.png' },
];

interface MarkerData {
  gx: number;
  gy: number;
  world: number;
  label: string;
}

/**
 * Pulsing Marker Component
 */
const MapMarker = ({ x, y, label }: { x: number, y: number, label?: string }) => (
  <div 
    className="absolute z-30 pointer-events-none"
    style={{ 
      left: x, 
      top: y,
      transform: 'translate(-50%, -100%)' 
    }}
  >
    <div className="relative flex flex-col items-center">
      {label && (
        <div className="mb-2 px-3 py-1 bg-slate-900/90 border border-amber-500/50 rounded-lg text-[10px] font-bold text-white whitespace-nowrap shadow-2xl">
          {label}
        </div>
      )}
      <div className="relative">
        <MapPin size={32} className="text-rose-500 fill-rose-500/20 drop-shadow-[0_0_100px_rgba(244,63,94,0.8)]" />
        <div className="absolute inset-0 animate-ping">
          <MapPin size={32} className="text-rose-400 opacity-50" />
        </div>
      </div>
    </div>
  </div>
);

const CoordsOverlay = memo(({ gx, gy, worldId, px, py }: { gx: number, gy: number, worldId: number, px: number, py: number }) => (
  <div className="absolute bottom-6 right-6 flex flex-col items-end gap-3 pointer-events-none z-20">
    <div className="bg-slate-900/90 backdrop-blur-md border border-amber-500/20 p-4 rounded-2xl shadow-2xl flex items-center gap-4 border-l-4 border-l-amber-500">
      <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-500 shadow-inner">
        <MousePointer2 size={18} />
      </div>
      <div>
        <div className="text-[10px] text-amber-500/60 font-black uppercase tracking-widest mb-0.5">Position T4C</div>
        <div className="text-2xl font-mono font-black text-white tracking-tighter">
          {gx}<span className="text-amber-500/50">.</span>{gy}<span className="text-amber-500/50">.</span>{worldId}
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
  const { bestiaryData, recipesData, itemsData } = useData();
  const [searchParams] = useSearchParams();
  
  const targetType = searchParams.get('type');
  const targetName = searchParams.get('name');

  // Compute all markers based on name and type
  const allMarkers = useMemo(() => {
    if (!targetName) return [];
    const markers: MarkerData[] = [];
    const normalizedTarget = fastNormalize(targetName);

    if (targetType === 'monster') {
      const monster = bestiaryData.find(m => fastNormalize(m.name) === normalizedTarget);
      if (monster && monster.coordinates) {
        monster.coordinates.forEach(coord => {
          const parts = coord.split('.');
          if (parts.length === 3) {
            markers.push({
              gx: parseInt(parts[0]),
              gy: parseInt(parts[1]),
              world: parseInt(parts[2]),
              label: monster.name
            });
          }
        });
      }
    } else if (targetType === 'npc') {
      // Search in recipes and items for this NPC
      const findNPCInList = (list: any[]) => {
        list.forEach(r => {
          if (r.learnedFrom && fastNormalize(r.learnedFrom) === normalizedTarget && r.coordinates) {
            const parts = r.coordinates.split('.');
            if (parts.length === 3) {
              const alreadyAdded = markers.some(m => m.gx === parseInt(parts[0]) && m.gy === parseInt(parts[1]) && m.world === parseInt(parts[2]));
              if (!alreadyAdded) {
                markers.push({
                  gx: parseInt(parts[0]),
                  gy: parseInt(parts[1]),
                  world: parseInt(parts[2]),
                  label: r.learnedFrom
                });
              }
            }
          }
        });
      };
      findNPCInList(recipesData);
      findNPCInList(itemsData);
    } else if (targetType === 'location') {
        // Special case for generic locations mentioned in recipes
        recipesData.forEach(r => {
            if (r.sources) {
                r.sources.forEach((s: any) => {
                    s.locations.forEach((loc: any) => {
                        if (fastNormalize(loc.label) === normalizedTarget && loc.coordinates) {
                            const parts = loc.coordinates.split('.');
                            if (parts.length === 3) {
                                const alreadyAdded = markers.some(m => m.gx === parseInt(parts[0]) && m.gy === parseInt(parts[1]) && m.world === parseInt(parts[2]));
                                if (!alreadyAdded) {
                                    markers.push({
                                        gx: parseInt(parts[0]),
                                        gy: parseInt(parts[1]),
                                        world: parseInt(parts[2]),
                                        label: loc.label
                                    });
                                }
                            }
                        }
                    });
                });
            }
        });
    }

    return markers;
  }, [targetType, targetName, bestiaryData, recipesData, itemsData]);

  const [selectedMap, setSelectedMap] = useState<MapInfo>(() => {
    if (allMarkers.length > 0) {
      return MAPS.find(m => m.worldId === allMarkers[0].world) || MAPS[0];
    }
    return MAPS[0];
  });

  const [coords, setCoords] = useState({ x: 0, y: 0, gx: 0, gy: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const currentWorldMarkers = useMemo(() => 
    allMarkers.filter(m => m.world === selectedMap.worldId),
  [allMarkers, selectedMap.worldId]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (imgRef.current) {
      const rect = imgRef.current.getBoundingClientRect();
      const scaleX = imgRef.current.naturalWidth / rect.width;
      const scaleY = imgRef.current.naturalHeight / rect.height;
      const localX = (e.clientX - rect.left) * scaleX;
      const localY = (e.clientY - rect.top) * scaleY;
      
      if (localX >= 0 && localY >= 0 && localX <= imgRef.current.naturalWidth && localY <= imgRef.current.naturalHeight) {
        setCoords({
          x: Math.floor(localX),
          y: Math.floor(localY),
          gx: Math.floor(localX / 2),
          gy: Math.floor(localY) 
        });
      }
    }
  };

  const centerOnPoint = (instance: any, gx: number, gy: number) => {
    if (imgRef.current && wrapperRef.current) {
      const px = gx * 2;
      const py = gy;
      const containerWidth = wrapperRef.current.offsetWidth;
      const containerHeight = wrapperRef.current.offsetHeight;
      const scale = 1.5;

      const x = (containerWidth / 2) - (px * scale);
      const y = (containerHeight / 2) - (py * scale);

      instance.setTransform(x, y, scale, 600, "easeOut");
    }
  };

  const fitToView = (instance: any) => {
    if (imgRef.current && wrapperRef.current) {
      const containerWidth = wrapperRef.current.offsetWidth;
      const containerHeight = wrapperRef.current.offsetHeight;
      const imgWidth = imgRef.current.naturalWidth;
      const imgHeight = imgRef.current.naturalHeight;

      if (imgWidth > 0 && imgHeight > 0) {
        const scaleX = (containerWidth - 60) / imgWidth;
        const scaleY = (containerHeight - 60) / imgHeight;
        const scale = Math.min(scaleX, scaleY, 1);
        const x = (containerWidth - imgWidth * scale) / 2;
        const y = (containerHeight - imgHeight * scale) / 2;
        instance.setTransform(x, y, scale, 400, "easeOut");
      }
    }
  };

  // Switch map if a marker from another world is selected (manual map change still works)
  // This effect is only for initial load or URL change
  useEffect(() => {
    if (allMarkers.length > 0) {
        const firstMarker = allMarkers[0];
        const targetMap = MAPS.find(m => m.worldId === firstMarker.world);
        if (targetMap) setSelectedMap(targetMap);
    }
  }, [allMarkers]);

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] space-y-4">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-800/30 p-4 rounded-2xl border border-slate-700/50">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500 border border-amber-500/20">
            <MapIcon size={24} />
          </div>
          <div>
            <h2 className="text-xl font-black text-slate-100 uppercase tracking-tight italic">Cartographie</h2>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">
                {targetName ? `Localisation : ${targetName}` : "Monde de la 4ème Prophétie"}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center flex-1 max-w-2xl px-4">
          {MAPS.map(map => (
            <button
              key={map.id}
              onClick={() => {
                if (selectedMap.id !== map.id) {
                  setIsLoading(true);
                  setSelectedMap(map);
                }
              }}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all border ${selectedMap.id === map.id ? 'bg-amber-500 border-amber-400 text-slate-950 shadow-lg scale-105' : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-200'}`}
            >
              {map.name}
              {allMarkers.some(m => m.world === map.worldId) && (
                  <span className="ml-2 w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse inline-block" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div ref={wrapperRef} className="relative flex-1 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden select-none group">
        {isLoading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-950/80 backdrop-blur-sm">
            <Loader2 size={48} className="text-amber-500 animate-spin mb-4" />
            <p className="text-slate-400 font-black uppercase tracking-widest animate-pulse text-xs">Chargement HD...</p>
          </div>
        )}

        <TransformWrapper
          initialScale={0.1}
          minScale={0.01}
          maxScale={4}
          doubleClick={{ disabled: true }}
          limitToBounds={false}
          centerZoomedOut={true}
        >
          {(instance) => (
            <>
              <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
                <button onClick={() => instance.zoomIn()} className="p-3 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-xl text-slate-300 hover:text-amber-500 hover:border-amber-500/50 transition-all shadow-2xl"><ZoomIn size={20} /></button>
                <button onClick={() => instance.zoomOut()} className="p-3 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-xl text-slate-300 hover:text-amber-500 hover:border-amber-500/50 transition-all shadow-2xl"><ZoomOut size={20} /></button>
                <button onClick={() => fitToView(instance)} className="p-3 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-xl text-slate-300 hover:text-amber-500 hover:border-amber-500/50 transition-all shadow-2xl" title="Recadrer"><Maximize size={20} /></button>
              </div>

              <TransformComponent wrapperStyle={{ width: "100%", height: "100%" }}>
                <div onMouseMove={handleMouseMove} className="relative cursor-crosshair">
                  <img 
                    ref={imgRef}
                    src={selectedMap.path} 
                    alt={selectedMap.name}
                    className="max-w-none"
                    onLoad={() => {
                      setIsLoading(false);
                      setTimeout(() => {
                        if (currentWorldMarkers.length > 0) {
                          centerOnPoint(instance, currentWorldMarkers[0].gx, currentWorldMarkers[0].gy);
                        } else {
                          fitToView(instance);
                        }
                      }, 100);
                    }}
                    draggable={false}
                  />
                  {currentWorldMarkers.map((marker, i) => (
                    <MapMarker key={i} x={marker.gx * 2} y={marker.gy} label={marker.label} />
                  ))}
                </div>
              </TransformComponent>
            </>
          )}
        </TransformWrapper>

        <CoordsOverlay gx={coords.gx} gy={coords.gy} worldId={selectedMap.worldId} px={coords.x} py={coords.y} />
      </div>
    </div>
  );
};

export default MapViewer;