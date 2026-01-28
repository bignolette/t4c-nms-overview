import { useState, useMemo, memo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';
import { fastNormalize } from '../data/utils';
import type { Spell } from '../data/types';
import { Sparkles, Zap, Brain, ScrollText, Filter, AlertCircle, RotateCcw, BookOpen, Star, Coins, MapPin, ArrowUpDown } from 'lucide-react';
import Pagination from './shared/Pagination';

interface SpellListProps {
  spells: Spell[];
}

const DEFAULT_ITEMS_PER_PAGE = 24;

const SpellCard = memo(({ spell, onNavigate }: { spell: Spell, onNavigate: (name: string) => void }) => {
  const { spellMap = {}, spellPrerequisiteMap = {} } = useData();
  
  const linkedPrerequisites = useMemo(() => {
    if (!spell.prerequisites) return [];
    const norm = fastNormalize(spell.prerequisites);
    return Object.values(spellMap).filter(s => norm.includes(fastNormalize(s.name)));
  }, [spell.prerequisites, spellMap]);

  const usedAsPrerequisiteFor = useMemo(() => {
    return (spellPrerequisiteMap[fastNormalize(spell.name)]) || [];
  }, [spell.name, spellPrerequisiteMap]);

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`
        group relative bg-slate-800/40 border rounded-2xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-blue-500/10 border-slate-700/50 hover:border-blue-500/50
      `}
    >
      <div className="p-5 bg-slate-900/40 border-b border-slate-700/50 relative overflow-hidden">
        <div className="flex justify-between items-start mb-4 relative z-10">
          <div className="flex-1 min-w-0 pr-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-tighter shadow-lg shadow-amber-500/20">
                Niveau {spell.level}
              </span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-tighter shrink-0 ${spell.source === 'NMS' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'bg-blue-600/20 text-blue-300 border border-blue-500/30'}`}>
                {spell.source}
              </span>
            </div>
            <h3 className="text-xl font-black group-hover:text-blue-400 transition-colors leading-tight italic tracking-tight truncate text-slate-100">
              {spell.name}
            </h3>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2 text-[11px] relative z-10 bg-slate-950/50 p-3 rounded-xl border border-slate-800/50 shadow-inner">
          <div className="flex flex-col items-center gap-1 border-r border-slate-800">
            <div className="flex items-center gap-1.5 text-sky-400 font-black uppercase text-[9px] tracking-widest">
              <Brain size={12} /> INT
            </div>
            <span className="text-slate-100 font-mono text-lg leading-none">{spell.int}</span>
          </div>
          <div className="flex flex-col items-center gap-1 border-r border-slate-800">
            <div className="flex items-center gap-1.5 text-purple-400 font-black uppercase text-[9px] tracking-widest">
              <Star size={12} /> SAG
            </div>
            <span className="text-slate-100 font-mono text-lg leading-none">{spell.wis}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1.5 text-amber-400 font-black uppercase text-[9px] tracking-widest">
              <Zap size={12} /> Mana
            </div>
            <span className="text-slate-100 font-mono text-lg leading-none">{spell.mana}</span>
          </div>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
          <ScrollText size={12} /> Effect
        </h4>
        <p className="text-xs text-slate-300 leading-relaxed italic mb-4">
          {spell.description}
        </p>
        
        {(Object.keys(spell.npc).length > 0 || spell.prerequisites || usedAsPrerequisiteFor.length > 0) && (
          <div className="mt-auto space-y-4 pt-4 border-t border-slate-700/30">
            {Object.keys(spell.npc).length > 0 && (
              <div className="space-y-2">
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block">Localisation PNJ</span>
                {Object.entries(spell.npc).map(([city, names]) => (
                  <div key={city} className="flex items-start gap-2 text-[10px]">
                    <span className="font-black uppercase text-slate-500 w-20 shrink-0">{city}:</span>
                    <span className="font-bold text-blue-400/80">{names.join(', ')}</span>
                  </div>
                ))}
              </div>
            )}

            {spell.prerequisites && (
              <div className="space-y-2">
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block">Sorts Prérequis</span>
                <div className="flex flex-wrap gap-1.5">
                  {linkedPrerequisites.length > 0 ? (
                    linkedPrerequisites.map(ps => (
                      <button 
                        key={ps.name}
                        onClick={() => onNavigate(ps.name)}
                        className="flex items-center gap-1.5 px-2 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-[10px] font-bold text-amber-400 hover:bg-amber-500/20 transition-all"
                      >
                        <Sparkles size={10} />
                        {ps.name}
                      </button>
                    ))
                  ) : (
                    <span className="text-[10px] font-bold text-slate-400 italic bg-slate-950/50 px-2 py-1 rounded border border-slate-800 w-full">{spell.prerequisites}</span>
                  )}
                </div>
              </div>
            )}

            {usedAsPrerequisiteFor.length > 0 && (
              <div className="space-y-2">
                <span className="text-[9px] font-black text-blue-500/70 uppercase tracking-widest block">Prérequis pour</span>
                <div className="flex flex-wrap gap-1.5">
                  {usedAsPrerequisiteFor.map(s => (
                    <button 
                      key={s.name}
                      onClick={() => onNavigate(s.name)}
                      className="flex items-center gap-1.5 px-2 py-1 rounded bg-blue-500/10 border border-blue-500/30 text-[10px] font-bold text-blue-300 hover:bg-blue-500/20 transition-all"
                    >
                      <BookOpen size={10} />
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
});

const SpellList = ({ spells }: SpellListProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlSearch = searchParams.get('search') || '';

  const [selectedSource, setSelectedSource] = useState<string>('Tous');
  const [selectedZone, setSelectedZone] = useState<string>('Toutes');
  const [sortBy, setSortBy] = useState<'level' | 'name' | 'zone'>('level');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [activeSearchTerm, setActiveSearchTerm] = useState<string>(urlSearch);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(DEFAULT_ITEMS_PER_PAGE);

  useEffect(() => {
    if (urlSearch !== activeSearchTerm) {
      setActiveSearchTerm(urlSearch);
      setCurrentPage(1);
    }
  }, [urlSearch, activeSearchTerm]);

  const allZones = useMemo(() => {
    const zones = new Set<string>();
    spells.forEach(s => Object.keys(s.npc).forEach(z => zones.add(z)));
    return ['Toutes', ...Array.from(zones).sort()];
  }, [spells]);

  const handleReset = () => {
    setActiveSearchTerm('');
    setSelectedSource('Tous');
    setSelectedZone('Toutes');
    setSortBy('level');
    setSortOrder('asc');
    setCurrentPage(1);
    setItemsPerPage(DEFAULT_ITEMS_PER_PAGE);
    setSearchParams(new URLSearchParams());
  };

  const toggleSort = (type: 'level' | 'name' | 'zone') => {
    if (sortBy === type) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(type);
      setSortOrder(type === 'level' ? 'asc' : 'asc');
    }
    setCurrentPage(1);
  };

  const handleNavigate = (name: string) => {
    setActiveSearchTerm(name);
    setSearchParams(prev => {
      prev.set('search', name);
      return prev;
    });
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredSpells = useMemo(() => {
    const query = fastNormalize(activeSearchTerm);
    let result = spells.filter(s => {
      const matchesSearch = !query || 
        fastNormalize(s.name).includes(query) || 
        fastNormalize(s.description).includes(query);
      const matchesSource = selectedSource === 'Tous' || s.source === selectedSource;
      const matchesZone = selectedZone === 'Toutes' || Object.keys(s.npc).includes(selectedZone);
      return matchesSearch && matchesSource && matchesZone;
    });

    result.sort((a, b) => {
      let comparison = 0;
      if (sortBy === 'level') {
        comparison = a.level - b.level;
      } else if (sortBy === 'name') {
        comparison = a.name.localeCompare(b.name);
      } else if (sortBy === 'zone') {
        const zoneA = Object.keys(a.npc)[0] || '';
        const zoneB = Object.keys(b.npc)[0] || '';
        comparison = zoneA.localeCompare(zoneB);
      }
      
      if (comparison === 0) comparison = a.name.localeCompare(b.name);
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return result;
  }, [spells, selectedSource, selectedZone, sortBy, sortOrder, activeSearchTerm]);

  const paginatedSpells = useMemo(() => {
    return filteredSpells.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  }, [filteredSpells, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredSpells.length / itemsPerPage);

  return (
    <div className="space-y-8">
      {/* Controls Header */}
      <div className="flex flex-col gap-6 bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 flex gap-2">
            <button onClick={handleReset} className="btn-danger w-full md:w-auto">
              <RotateCcw size={16} /> Réinitialiser
            </button>
          </div>

          <div className="flex items-center gap-4 px-6 py-3 bg-slate-950/50 rounded-xl border border-slate-800 text-sm h-14 shadow-inner">
            <div className="text-slate-400 whitespace-nowrap flex items-center gap-2">
              <span className="font-black text-blue-500 text-xl">{filteredSpells.length}</span>
              <span className="text-[10px] font-black uppercase tracking-widest opacity-60">sorts</span>
            </div>
            <div className="w-px h-6 bg-slate-800" />
            <div className="text-slate-400 whitespace-nowrap flex items-center gap-2">
              <span className="font-black text-slate-200 text-lg">{spells.length}</span>
              <span className="text-[10px] font-black uppercase tracking-widest opacity-40">total</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-slate-500">
              <Filter size={16} className="text-blue-500/50" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Source des sorts</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Tous', 'Standard', 'NMS'].map(source => (
                <button
                  key={source}
                  onClick={() => { setSelectedSource(source); setCurrentPage(1); }}
                  className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all border ${selectedSource === source ? 'bg-blue-600 border-blue-500 text-white shadow-xl shadow-blue-500/10 scale-105 z-10' : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-200 hover:border-slate-600'}`}
                >
                  {source}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-slate-500">
              <MapPin size={16} className="text-amber-500/50" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Zones Géographiques</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {allZones.map(zone => (
                <button
                  key={zone}
                  onClick={() => { setSelectedZone(zone); setCurrentPage(1); }}
                  className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all border ${selectedZone === zone ? 'bg-amber-500 border-amber-400 text-slate-950 shadow-xl shadow-amber-500/10 scale-105 z-10' : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-200 hover:border-slate-600'}`}
                >
                  {zone}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-800/50">
          <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest self-center mr-2">Trier par :</span>
          <button 
            onClick={() => toggleSort('level')} 
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold border transition-all ${sortBy === 'level' ? 'bg-blue-600 text-white border-blue-500 shadow-lg' : 'bg-slate-800 text-slate-400 border-slate-700'}`}
          >
            <ArrowUpDown size={12} /> Niveau {sortBy === 'level' && (sortOrder === 'asc' ? '↑' : '↓')}
          </button>
          <button 
            onClick={() => toggleSort('name')} 
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold border transition-all ${sortBy === 'name' ? 'bg-blue-600 text-white border-blue-500 shadow-lg' : 'bg-slate-800 text-slate-400 border-slate-700'}`}
          >
            <ArrowUpDown size={12} /> Nom {sortBy === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
          </button>
          <button 
            onClick={() => toggleSort('zone')} 
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold border transition-all ${sortBy === 'zone' ? 'bg-blue-600 text-white border-blue-500 shadow-lg' : 'bg-slate-800 text-slate-400 border-slate-700'}`}
          >
            <ArrowUpDown size={12} /> Zone {sortBy === 'zone' && (sortOrder === 'asc' ? '↑' : '↓')}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedSpells.map((spell, index) => (
          <SpellCard key={`${spell.name}-${index}`} spell={spell} onNavigate={handleNavigate} />
        ))}
      </div>

      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={(newSize) => { setItemsPerPage(newSize); setCurrentPage(1); }}
        totalItems={filteredSpells.length}
        pageSizeOptions={[24, 48, 96]}
      />

      {filteredSpells.length === 0 && (
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-16 text-center">
          <AlertCircle size={48} className="text-slate-700 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-300">Aucun sort trouvé</h3>
          <p className="text-slate-500 mt-2">Essayez de modifier vos filtres ou votre recherche.</p>
        </div>
      )}
    </div>
  );
};

export default SpellList;
