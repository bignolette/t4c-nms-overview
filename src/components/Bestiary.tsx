import { useState, useMemo, memo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';
import { fastNormalize, formatGold } from '../data/utils';
import type { Monster } from '../data/types';
import { MapPin, Coins, Skull, Filter, AlertCircle, ExternalLink, RotateCcw, Hammer, Copy, Check, Map as MapIcon, Search, X } from 'lucide-react';
import Pagination from './shared/Pagination';
import { useClipboard } from '../hooks/useClipboard';

interface BestiaryProps {
  monsters: Monster[];
}

const DEFAULT_ITEMS_PER_PAGE = 36;

/**
 * Optimized Drop Component to prevent re-renders
 */
const DropBadge = memo(({ drop }: { drop: string }) => {
  const { ingredientProfessionMap } = useData();
  const normalizedDrop = useMemo(() => fastNormalize(drop), [drop]);
  const usages = useMemo(() => Array.from(ingredientProfessionMap[normalizedDrop] || []), [normalizedDrop, ingredientProfessionMap]);
  const isIngredient = usages.length > 0;
  
  if (isIngredient) {
    return (
      <Link
        to={`/wiki/metiers?search=${encodeURIComponent(drop)}`}
        className="relative px-2.5 py-1.5 rounded-lg text-xs font-bold border transition-all bg-purple-500/10 border-purple-500/30 text-purple-200 hover:bg-purple-500/20 hover:border-purple-500 flex items-center gap-2 group/drop"
        title={`Utilisé en artisanat : ${usages.join(', ')}`}
      >
        <Hammer size={10} className="text-[#a335ee]" />
        <span className="relative z-10">{drop}</span>
        <ExternalLink size={10} className="text-[#a335ee]/50 group-hover/drop:text-[#a335ee] relative z-10" />
      </Link>
    );
  }

  return (
    <Link
      to={`/wiki/items?search=${encodeURIComponent(drop)}`}
      className="relative px-2.5 py-1.5 rounded-lg text-xs font-bold border transition-all bg-slate-900/50 border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-500 flex items-center gap-2 group/drop"
      title="Voir les caractéristiques"
    >
      <span className="relative z-10">{drop}</span>
      <ExternalLink size={10} className="text-slate-500 group-hover/drop:text-slate-300 relative z-10" />
    </Link>
  );
});

/**
 * Optimized Monster Card Component with Holographic effect for Uniques
 */
export const MonsterCard = memo(({ monster, showLocation }: { monster: Monster, showLocation: boolean }) => {
  const [showAllCoords, setShowAllCoords] = useState(false);
  const { copied, copy } = useClipboard();

  const coordsArray = useMemo(() => {
    if (!monster.coordinates) return [];
    if (Array.isArray(monster.coordinates)) return monster.coordinates;
    // Fallback for any legacy string data
    return (monster.coordinates as unknown as string).split(',').map((c: string) => c.trim());
  }, [monster.coordinates]);

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`
        group relative bg-slate-800/40 border rounded-2xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-amber-500/10
        ${monster.unique ? 'border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.1)]' : 'border-slate-700/50 hover:border-amber-500/50'}
      `}
    >
      <div className="p-5 bg-slate-900/40 border-b border-slate-700/50 relative overflow-hidden">
        {monster.unique && (
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none"></div>
        )}
        <div className="flex justify-between items-start mb-3 relative z-10">
          <div className="flex-1 min-w-0 pr-2">
            <h3 className={`text-lg font-black group-hover:text-amber-500 transition-colors leading-tight italic tracking-tight flex items-center gap-2 overflow-hidden ${monster.unique ? 'text-purple-300' : 'text-slate-100'}`}>
              <span>{monster.name}</span>
              <button 
                onClick={() => copy(monster.name)}
                className="p-1.5 hover:bg-white/10 rounded-lg transition-all shrink-0 bg-slate-900/50 md:bg-transparent"
                title="Copier le nom"
              >
                {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} className="text-amber-500/70 md:text-slate-500 md:group-hover:text-amber-500" />}
              </button>
            </h3>
            <div className="flex flex-col gap-1.5 mt-2">
              {showLocation && (
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{monster.location}</div>
              )}
              {coordsArray.length > 0 && (
                <div className="space-y-1">
                  <div className="flex flex-wrap gap-1.5">
                    <Link 
                      to={`/maps?type=monster&name=${encodeURIComponent(monster.name)}`}
                      className="flex items-center gap-1.5 px-2 py-1 rounded bg-rose-500/10 border border-rose-500/20 text-[10px] text-rose-300 font-black uppercase tracking-widest shadow-sm hover:bg-rose-500/20 hover:border-rose-500/50 transition-all mb-1"
                    >
                      <MapIcon size={10} className="text-rose-500" />
                      Voir tout sur la carte
                    </Link>
                    <div className="w-full h-px bg-slate-800/50 my-1" />
                    {coordsArray.slice(0, showAllCoords ? coordsArray.length : 3).map((coord: string, i: number) => {
                      const mapUrl = `/maps?type=monster&name=${encodeURIComponent(monster.name)}`;

                      return (
                        <Link 
                          key={i} 
                          to={mapUrl}
                          className="flex items-center gap-1 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[11px] text-blue-300 font-mono shadow-sm hover:bg-blue-500/20 hover:border-blue-500/50 transition-all group/coord"
                        >
                          <MapPin size={10} className="text-blue-500 group-hover/coord:scale-110 transition-transform" />
                          <span>{coord}</span>
                        </Link>
                      );
                    })}
                  </div>
                  {coordsArray.length > 3 && (
                    <button 
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowAllCoords(!showAllCoords); }}
                      className="text-[10px] font-black text-blue-400/70 hover:text-blue-300 transition-colors uppercase tracking-widest flex items-center gap-1 mt-1 ml-1"
                    >
                      {showAllCoords ? 'Réduire' : `+ ${coordsArray.length - 3} localisations`}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
          {monster.unique && (
            <span className="px-2 py-0.5 rounded text-[10px] font-black bg-purple-500 text-slate-950 uppercase tracking-tighter shadow-[0_0_10px_rgba(168,85,247,0.5)] shrink-0">
              Unique
            </span>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-3 text-[11px] relative z-10">
          <div className="flex items-center gap-2 text-slate-400">
            <Skull size={14} className="text-rose-500/70" />
            <span className="font-bold">XP:</span>
            <span className="text-slate-200 font-mono">{monster.exp}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Coins size={14} className="text-amber-600/80" />
            <span className="font-bold">Or:</span>
            <span className="text-slate-200 font-mono">{formatGold(monster.gold)}</span>
          </div>
        </div>
      </div>

      <div className="p-5">
        <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
          Butins & Ressources
        </h4>
        <div className="flex flex-wrap gap-2">
          {monster.drops.map((drop, i) => (
            <DropBadge key={i} drop={drop} />
          ))}
          {monster.drops.length === 0 && (
            <span className="text-xs text-slate-600 italic font-medium">Aucun butin répertorié</span>
          )}
        </div>
      </div>
    </motion.div>
  );
});

const Bestiary = ({ monsters }: BestiaryProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlSearch = searchParams.get('search') || '';

  const [selectedZone, setSelectedZone] = useState<string>('Toutes');
  const [activeSearchTerm, setActiveSearchTerm] = useState<string>(urlSearch);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(DEFAULT_ITEMS_PER_PAGE);

  // Sync with URL search parameters
  useEffect(() => {
    setActiveSearchTerm(urlSearch);
    if (urlSearch) {
      setSelectedZone('Toutes');
      setCurrentPage(1);
    }
  }, [urlSearch]);

  const handleSearchChange = (val: string) => {
    setActiveSearchTerm(val);
    setCurrentPage(1);
    setSearchParams(prev => {
      if (val) prev.set('search', val);
      else prev.delete('search');
      return prev;
    }, { replace: true });
  };

  // Normalize location for filtering
  const getBaseZone = (location: string) => location.split('(')[0].trim();

  const baseZones = useMemo(() => {
    const zones = new Set(monsters.map(m => getBaseZone(m.location)));
    return ['Toutes', ...Array.from(zones).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))];
  }, [monsters]);

  const handleReset = () => {
    setActiveSearchTerm('');
    setSelectedZone('Toutes');
    setCurrentPage(1);
    setItemsPerPage(DEFAULT_ITEMS_PER_PAGE);
    setSearchParams(new URLSearchParams());
  };

  // 1. Filtering & Sorting (O(N))
  const filteredMonsters = useMemo(() => {
    const query = fastNormalize(activeSearchTerm);
    return monsters
      .filter(m => {
        const matchesSearch = !query || 
          fastNormalize(m.name).includes(query) || 
          m.drops.some(d => fastNormalize(d).includes(query));
        const matchesZone = selectedZone === 'Toutes' || getBaseZone(m.location) === selectedZone;
        return matchesSearch && matchesZone;
      })
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
  }, [monsters, selectedZone, activeSearchTerm]);

  // 2. Grouping
  const monstersByZone = useMemo(() => {
    const grouped = filteredMonsters.reduce((acc, monster) => {
      const zone = selectedZone === 'Toutes' ? getBaseZone(monster.location) : monster.location;
      if (!acc[zone]) acc[zone] = [];
      acc[zone].push(monster);
      return acc;
    }, {} as Record<string, Monster[]>);

    // Sort zones alphabetically
    return Object.fromEntries(
      Object.entries(grouped).sort(([a], [b]) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
    );
  }, [filteredMonsters, selectedZone]);

  // 3. Pagination calculation
  const isPaginating = filteredMonsters.length > itemsPerPage || itemsPerPage !== DEFAULT_ITEMS_PER_PAGE;
  const paginatedMonsters = isPaginating 
    ? filteredMonsters.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : filteredMonsters;

  const totalPages = Math.ceil(filteredMonsters.length / itemsPerPage);

  return (
    <div className="space-y-8">
      {/* Controls Header */}
      <div className="flex flex-col gap-6 bg-slate-800/30 p-4 md:p-6 rounded-2xl border border-slate-700/50">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-amber-500 transition-colors" size={18} />
            <input 
              type="text"
              placeholder="Rechercher une créature ou un butin..."
              value={activeSearchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full bg-slate-950/50 border border-slate-800 rounded-xl py-3.5 pl-12 pr-12 text-slate-100 focus:border-amber-500/50 outline-none transition-all font-bold"
            />
            {activeSearchTerm && (
              <button onClick={() => handleSearchChange('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-all"><X size={18} /></button>
            )}
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-2 shrink-0">
            <button onClick={handleReset} className="btn-danger flex-1 md:flex-none justify-center">
              <RotateCcw size={16} /> <span className="md:hidden lg:inline">Réinitialiser</span>
            </button>
            
            <div className="flex items-center gap-4 px-4 py-2 bg-slate-950/50 rounded-xl border border-slate-800 shadow-inner">
              <div className="text-slate-400 whitespace-nowrap flex items-center gap-2">
                <span className="font-black text-amber-500 text-lg">{filteredMonsters.length}</span>
                <span className="text-[9px] font-black uppercase tracking-widest opacity-60">/ {monsters.length}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-slate-500">
            <Filter size={16} className="text-amber-500/50" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Zones Géographiques</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-start">
            {baseZones.map(zone => (
              <button
                key={zone}
                onClick={() => { setSelectedZone(zone); setCurrentPage(1); }}
                className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all border ${selectedZone === zone ? 'bg-amber-500 border-amber-400 text-slate-950 shadow-xl shadow-amber-500/10 scale-105 z-10' : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-200 hover:border-slate-600'}`}
              >
                {zone}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-16">
        {Object.entries(monstersByZone).map(([zone, zoneMonsters]) => {
          // If we are paginating, we only show monsters that are in the paginated set
          const displayMonsters = isPaginating 
            ? zoneMonsters.filter(m => paginatedMonsters.includes(m))
            : zoneMonsters;

          if (displayMonsters.length === 0) return null;

          return (
            <section key={zone} id={zone} className="scroll-mt-8">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-8">
                <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500">
                  <MapPin size={24} />
                </div>
                <h2 className="text-3xl font-black text-slate-100 tracking-tight italic uppercase">{zone}</h2>
                <div className="px-3 py-1 rounded-lg bg-slate-800 text-slate-400 text-xs font-black ml-2 border border-slate-700">
                  {zoneMonsters.length} CRÉATURES
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayMonsters.map((monster, index) => (
                  <MonsterCard 
                    key={`${monster.name}-${index}`} 
                    monster={monster} 
                    showLocation={selectedZone === 'Toutes'} 
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Pagination Controls */}
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={(newSize) => { setItemsPerPage(newSize); setCurrentPage(1); }}
        totalItems={filteredMonsters.length}
        pageSizeOptions={[24, 48, 96]}
      />

      {filteredMonsters.length === 0 && (
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-16 text-center">
          <AlertCircle size={48} className="text-slate-700 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-300">Aucun monstre trouvé</h3>
          <p className="text-slate-500 mt-2">Essayez de modifier vos filtres ou votre recherche.</p>
        </div>
      )}
    </div>
  );
};

export default Bestiary;