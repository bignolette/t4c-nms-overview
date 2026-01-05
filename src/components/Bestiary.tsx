import { useState, useMemo, memo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { type Monster, fastNormalize, ingredientProfessionMap } from '../data/wiki-data';
import { MapPin, Coins, Skull, Filter, Search, AlertCircle, ChevronRight, ExternalLink, X, RotateCcw, ChevronLeft, Hammer } from 'lucide-react';

interface BestiaryProps {
  monsters: Monster[];
}

const ITEMS_PER_PAGE = 12;

/**
 * Optimized Drop Component to prevent re-renders
 */
const DropBadge = memo(({ drop }: { drop: string }) => {
  const normalizedDrop = useMemo(() => fastNormalize(drop), [drop]);
  const usages = useMemo(() => Array.from(ingredientProfessionMap[normalizedDrop] || []), [normalizedDrop]);
  const isIngredient = usages.length > 0;
  
  if (isIngredient) {
    return (
      <Link
        to={`/wiki/metiers?search=${encodeURIComponent(drop)}`}
        className="relative px-2.5 py-1.5 rounded-lg text-xs font-bold border transition-all bg-amber-500/10 border-amber-500/30 text-amber-200 hover:bg-amber-500/20 hover:border-amber-500 flex items-center gap-2 group/drop"
        title={`Utilisé en artisanat : ${usages.join(', ')}`}
      >
        <Hammer size={10} className="text-amber-500" />
        <span className="relative z-10">{drop}</span>
        <ExternalLink size={10} className="text-amber-500/50 group-hover/drop:text-amber-500 relative z-10" />
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
const MonsterCard = memo(({ monster, showLocation }: { monster: Monster, showLocation: boolean }) => {
  const [showAllCoords, setShowAllCoords] = useState(false);

  const coordsArray = useMemo(() => 
    monster.coordinates ? monster.coordinates.split(',').map(c => c.trim()) : [], 
    [monster.coordinates]
  );

  const displayedCoords = showAllCoords ? coordsArray : coordsArray.slice(0, 3);

  return (
    <div 
      className={`
        group relative bg-slate-800/40 border rounded-2xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-amber-500/10
        ${monster.unique ? 'border-purple-500/50' : 'border-slate-700/50 hover:border-amber-500/50'}
      `}
    >
      <div className="p-5 bg-slate-900/40 border-b border-slate-700/50">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className={`text-lg font-bold group-hover:text-amber-500 transition-colors leading-tight ${monster.unique ? 'text-purple-300' : 'text-slate-100'}`}>
              {monster.name}
            </h3>
            <div className="flex flex-col gap-1.5 mt-2">
              {showLocation && (
                <div className="text-[10px] text-slate-500 italic">{monster.location}</div>
              )}
              {coordsArray.length > 0 && (
                <div className="space-y-1">
                  <div className="flex flex-wrap gap-1.5">
                    {displayedCoords.map((coord, i) => (
                      <div key={i} className="flex items-center gap-1 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[11px] text-blue-300 font-mono shadow-sm">
                        <MapPin size={10} className="text-blue-500" />
                        <span>{coord}</span>
                      </div>
                    ))}
                  </div>
                  {coordsArray.length > 3 && (
                    <button 
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowAllCoords(!showAllCoords); }}
                      className="text-[10px] font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-tight flex items-center gap-1 ml-1"
                    >
                      {showAllCoords ? 'Réduire' : `+ ${coordsArray.length - 3} localisations`}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
          {monster.unique && (
            <span className="px-2 py-0.5 rounded text-[10px] font-black bg-purple-500 text-slate-950 uppercase tracking-tighter shadow-[0_0_10px_rgba(168,85,247,0.5)]">
              Unique
            </span>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-3 text-[11px]">
          <div className="flex items-center gap-2 text-slate-400">
            <Skull size={14} className="text-slate-600" />
            <span className="font-medium">XP:</span>
            <span className="text-slate-200">{monster.exp}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Coins size={14} className="text-amber-600/80" />
            <span className="font-medium">Or:</span>
            <span className="text-slate-200">{monster.gold}</span>
          </div>
        </div>
      </div>

      <div className="p-5">
        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
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
    </div>
  );
});

const Bestiary = ({ monsters }: BestiaryProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlSearch = searchParams.get('search') || '';

  const [selectedZone, setSelectedZone] = useState<string>('Toutes');
  const [searchInput, setSearchInput] = useState<string>(urlSearch);
  const [activeSearchTerm, setActiveSearchTerm] = useState<string>(urlSearch);
  const [currentPage, setCurrentPage] = useState(1);

  // Sync with URL search parameters
  useEffect(() => {
    if (urlSearch !== activeSearchTerm) {
      setSearchInput(urlSearch);
      setActiveSearchTerm(urlSearch);
      setCurrentPage(1);
      // When searching from a link, we want to see all zones to find the specific monster
      if (urlSearch) setSelectedZone('Toutes');
    }
  }, [urlSearch, activeSearchTerm]);

  // Normalize location for filtering
  const getBaseZone = (location: string) => location.split('(')[0].trim();

  const baseZones = useMemo(() => {
    const zones = new Set(monsters.map(m => getBaseZone(m.location)));
    return ['Toutes', ...Array.from(zones).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))];
  }, [monsters]);

  const handleSearch = () => {
    setActiveSearchTerm(searchInput);
    setSearchParams(prev => {
      if (searchInput) prev.set('search', searchInput);
      else prev.delete('search');
      return prev;
    });
    setCurrentPage(1);
  };

  const handleClearSearch = () => {
    setSearchInput('');
    setActiveSearchTerm('');
    setSearchParams(prev => {
      prev.delete('search');
      return prev;
    });
    setCurrentPage(1);
  };

  const handleReset = () => {
    setSearchInput('');
    setActiveSearchTerm('');
    setSelectedZone('Toutes');
    setCurrentPage(1);
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
  // Since we group by zone, pagination is a bit tricky. 
  // For better performance, we'll only paginate the "Toutes" view or very large search results.
  // But let's keep it simple: if filtered list > 50, we paginate the entire view.
  const isPaginating = filteredMonsters.length > 50;
  const paginatedMonsters = isPaginating 
    ? filteredMonsters.slice((currentPage - 1) * ITEMS_PER_PAGE * 3, currentPage * ITEMS_PER_PAGE * 3)
    : filteredMonsters;

  const totalPages = Math.ceil(filteredMonsters.length / (ITEMS_PER_PAGE * 3));

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="space-y-8">
      {/* Controls Header */}
      <div className="flex flex-col gap-6 bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 flex gap-2">
            <div className="flex-1 relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
              <input
                type="text"
                placeholder="Rechercher un monstre ou un butin..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full bg-slate-900/50 border border-slate-700 text-slate-100 pl-12 pr-10 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all placeholder:text-slate-600"
              />
              {searchInput && (
                <button onClick={handleClearSearch} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300">
                  <X size={20} />
                </button>
              )}
            </div>
            <button onClick={handleSearch} className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all shadow-lg active:scale-95 whitespace-nowrap">
              Chercher
            </button>
            <button onClick={handleReset} className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border bg-slate-800 text-slate-400 border-slate-700 hover:text-rose-400 transition-all">
              <RotateCcw size={14} /> Réinitialiser
            </button>
          </div>

          <div className="flex items-center gap-4 px-4 py-2 bg-slate-900/50 rounded-xl border border-slate-700/50 text-sm h-12">
            <div className="text-slate-400 whitespace-nowrap">
              <span className="font-bold text-amber-500">{filteredMonsters.length}</span> créatures
            </div>
            <div className="w-px h-4 bg-slate-700" />
            <div className="text-slate-400 whitespace-nowrap">
              <span className="font-bold text-slate-200">{monsters.length}</span> au total
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-slate-500">
            <Filter size={16} />
            <span className="text-xs font-bold uppercase tracking-wider">Zones :</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {baseZones.map(zone => (
              <button
                key={zone}
                onClick={() => { setSelectedZone(zone); setCurrentPage(1); }}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${selectedZone === zone ? 'bg-amber-500 text-slate-900 shadow-lg scale-105' : 'bg-slate-800/50 text-slate-400 border border-slate-700 hover:text-slate-200'}`}
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
            <section key={zone} id={zone} className="animate-fade-in scroll-mt-8">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-8">
                <MapPin className="text-amber-500" size={24} />
                <h2 className="text-3xl font-black text-slate-100 tracking-tight">{zone}</h2>
                <div className="px-3 py-1 rounded-lg bg-slate-800 text-slate-400 text-xs font-bold ml-2">
                  {zoneMonsters.length} au total
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
      {isPaginating && totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 py-12 border-t border-slate-800">
          <button 
            onClick={() => { setCurrentPage(p => Math.max(1, p - 1)); scrollToTop(); }}
            disabled={currentPage === 1}
            className="p-3 rounded-xl bg-slate-800 text-slate-400 disabled:opacity-20 hover:text-amber-500 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Page</span>
            <span className="w-10 h-10 flex items-center justify-center bg-amber-500 text-slate-950 font-black rounded-lg shadow-lg shadow-amber-500/20">
              {currentPage}
            </span>
            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">sur {totalPages}</span>
          </div>
          <button 
            onClick={() => { setCurrentPage(p => Math.min(totalPages, p + 1)); scrollToTop(); }}
            disabled={currentPage === totalPages}
            className="p-3 rounded-xl bg-slate-800 text-slate-400 disabled:opacity-20 hover:text-amber-500 transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

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