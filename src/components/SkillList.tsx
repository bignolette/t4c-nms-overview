import { useState, useMemo, memo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { fastNormalize, formatGold } from '../data/utils';
import type { Skill } from '../data/types';
import {
  Filter, AlertCircle, RotateCcw,
  Shield, Info, MapPin, ArrowUpDown, Zap, Copy, Check, Search, X
} from 'lucide-react';
import Pagination from './shared/Pagination';
import EmptyState from './shared/EmptyState';
import StatBadge from './shared/StatBadge';
import { useClipboard } from '../hooks/useClipboard';
interface SkillListProps {
  skills: Skill[];
}

const DEFAULT_ITEMS_PER_PAGE = 24;

export const SkillCard = memo(({ skill }: { skill: Skill }) => {
  const { copied, copy } = useClipboard();
  const cleanRequirements = useMemo(() => {
    return skill.requirements.replace(/Niv\s*\d+,?\s*/i, '').trim();
  }, [skill.requirements]);

  const isPassive = useMemo(() => {
    return skill.description.toLowerCase().includes('passive');
  }, [skill.description]);

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="group relative bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-500/50 flex flex-col"
    >
      <div className="p-5 bg-slate-900/40 border-b border-slate-700/50 relative overflow-hidden">
        <div className="flex justify-between items-start mb-4 relative z-10">
          <div className="flex-1 min-w-0 pr-2">
            <div className="flex items-center gap-2 mb-1">
              <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-tighter shrink-0 border ${isPassive ? 'bg-blue-500/10 text-blue-400 border-blue-500/30' : 'bg-rose-500/10 text-rose-400 border-rose-500/30'}`}>
                {isPassive ? 'Passive' : 'Active'}
              </span>
            </div>
            <h3 className="text-xl font-black group-hover:text-emerald-400 transition-colors leading-tight italic tracking-tight text-slate-100 flex items-center gap-2 overflow-hidden">
              <span>{skill.name}</span>
              <button 
                onClick={() => copy(skill.name)}
                className="p-1.5 hover:bg-white/10 rounded-lg transition-all shrink-0 bg-slate-900/50 md:bg-transparent"
                title="Copier le nom"
              >
                {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} className="text-amber-500/70 md:text-slate-500 md:group-hover:text-amber-500" />}
              </button>
            </h3>
          </div>
          <div className={`p-2 rounded-lg ${isPassive ? 'bg-blue-500/10 text-blue-500' : 'bg-rose-500/10 text-rose-500'}`}>
            {isPassive ? <Shield size={18} /> : <Zap size={18} />}
          </div>
        </div>
        
        <div className="space-y-2 mt-4 bg-slate-950/50 p-3 rounded-xl border border-slate-800/50 shadow-inner">
          <div className="flex items-start gap-2">
            <Shield size={14} className="text-amber-500 shrink-0 mt-0.5" />
            <div className="text-[11px] leading-tight w-full">
              <span className="text-slate-500 font-black uppercase block text-[9px] tracking-widest mb-1.5">Prérequis Statistiques</span>
              {skill.prerequisitesStats && Object.values(skill.prerequisitesStats).some(v => v) ? (
                <div className="flex flex-wrap gap-2">
                    {skill.prerequisitesStats.lvl && <StatBadge label="NIVEAU" value={skill.prerequisitesStats.lvl} type="lvl" />}
                    {skill.prerequisitesStats.str && <StatBadge label="FOR" value={skill.prerequisitesStats.str} type="str" />}
                    {skill.prerequisitesStats.end && <StatBadge label="END" value={skill.prerequisitesStats.end} type="end" />}
                    {skill.prerequisitesStats.dex && <StatBadge label="DEX" value={skill.prerequisitesStats.dex} type="dex" />}
                    {skill.prerequisitesStats.int && <StatBadge label="INT" value={skill.prerequisitesStats.int} type="int" />}
                    {skill.prerequisitesStats.wis && <StatBadge label="SAG" value={skill.prerequisitesStats.wis} type="wis" />}
                    {skill.prerequisitesStats.minimumSkillPoints && <StatBadge label="PTS COMP" value={skill.prerequisitesStats.minimumSkillPoints} type="minimumSkillPoints" />}
                </div>
              ) : (
                <span className="font-bold text-slate-200">{cleanRequirements || "Aucun prérequis spécifique"}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
          <Info size={12} /> Description
        </h4>
        <p className="text-xs text-slate-300 leading-relaxed italic mb-6">
          {skill.description}
        </p>
        
        <div className="mt-auto space-y-4 pt-4 border-t border-slate-700/30">
          <div className="flex items-center justify-between">
            <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Coût d'entraînement</div>
            <div className="text-[10px] font-mono text-emerald-400">{formatGold(skill.trainingCost)}</div>
          </div>
          
          <div className="bg-slate-950/40 p-3 rounded-xl border border-slate-800/50">
            <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1.5">Maîtres Entraîneurs</div>
            <div className="space-y-2">
              {Object.entries(skill.trainingTeachers).map(([city, names]) => (
                <div key={city} className="flex items-start gap-2 border-b border-slate-800/30 last:border-0 pb-1.5 last:pb-0">
                  <span className="text-[9px] font-black text-slate-500 uppercase w-20 shrink-0">{city}</span>
                  <p className="text-[10px] font-bold text-slate-300 leading-relaxed">
                    {names.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

const SkillList = ({ skills }: SkillListProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlSearch = searchParams.get('search') || '';

  const [selectedZone, setSelectedZone] = useState<string>('Toutes');
  const [selectedType, setSelectedType] = useState<'Tous' | 'Active' | 'Passive'>('Tous');
  const [sortBy, setSortBy] = useState<'name' | 'zone'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [activeSearchTerm, setActiveSearchTerm] = useState<string>(urlSearch);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(DEFAULT_ITEMS_PER_PAGE);

  useEffect(() => {
    setActiveSearchTerm(urlSearch);
    setCurrentPage(1);
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

  const allZones = useMemo(() => {
    const zones = new Set<string>();
    skills.forEach(s => Object.keys(s.trainingTeachers).forEach(z => zones.add(z)));
    return ['Toutes', ...Array.from(zones).sort()];
  }, [skills]);

  const handleReset = () => {
    setActiveSearchTerm('');
    setSelectedZone('Toutes');
    setSelectedType('Tous');
    setSortBy('name');
    setSortOrder('asc');
    setCurrentPage(1);
    setItemsPerPage(DEFAULT_ITEMS_PER_PAGE);
    setSearchParams(new URLSearchParams());
  };

  const toggleSort = (type: 'name' | 'zone') => {
    if (sortBy === type) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(type);
      setSortOrder('asc');
    }
    setCurrentPage(1);
  };

  const filteredSkills = useMemo(() => {
    const query = fastNormalize(activeSearchTerm);
    const result = skills.filter(s => {
      const matchesSearch = !query || 
        fastNormalize(s.name).includes(query) || 
        fastNormalize(s.description).includes(query);
      const matchesZone = selectedZone === 'Toutes' || Object.keys(s.trainingTeachers).includes(selectedZone);
      
      const isP = s.description.toLowerCase().includes('passive');
      const matchesType = selectedType === 'Tous' || (selectedType === 'Passive' && isP) || (selectedType === 'Active' && !isP);
      
      return matchesSearch && matchesZone && matchesType;
    });

    result.sort((a, b) => {
      let comparison = 0;
      if (sortBy === 'name') {
        comparison = a.name.localeCompare(b.name);
      } else if (sortBy === 'zone') {
        const zoneA = Object.keys(a.trainingTeachers)[0] || '';
        const zoneB = Object.keys(b.trainingTeachers)[0] || '';
        comparison = zoneA.localeCompare(zoneB);
      }
      
      if (comparison === 0) comparison = a.name.localeCompare(b.name);
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return result;
  }, [skills, selectedZone, selectedType, sortBy, sortOrder, activeSearchTerm]);

  const paginatedSkills = useMemo(() => {
    return filteredSkills.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  }, [filteredSkills, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredSkills.length / itemsPerPage);

  return (
    <div className="space-y-8">
      {/* Controls Header */}
      <div className="flex flex-col gap-6 bg-slate-800/30 p-4 md:p-6 rounded-2xl border border-slate-700/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-3xl rounded-full -mr-32 -mt-32 pointer-events-none"></div>
        
        <div className="flex flex-col md:flex-row gap-4 relative z-10">
          <div className="flex-1 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-amber-500 transition-colors" size={18} />
            <input 
              type="text"
              placeholder="Rechercher une compétence..."
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
                <span className="font-black text-emerald-500 text-lg">{filteredSkills.length}</span>
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest opacity-60">/ {skills.length}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-slate-500">
              <Filter size={16} className="text-emerald-500/50" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Type</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Tous', 'Active', 'Passive'].map(type => (
                <button
                  key={type}
                  onClick={() => { setSelectedType(type as any); setCurrentPage(1); }}
                  className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all border 
                    ${selectedType === type 
                      ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg scale-105 z-10' 
                      : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-200 hover:border-slate-600'}`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-slate-500">
              <MapPin size={16} className="text-amber-500/50" />
              <label htmlFor="skill-zone-select" className="text-[10px] font-black uppercase tracking-[0.2em]">Zones</label>
            </div>
            <div className="relative flex-1 md:max-w-[200px] w-full">
              <select 
                id="skill-zone-select"
                name="skill-zone"
                value={selectedZone}
                onChange={(e) => { setSelectedZone(e.target.value); setCurrentPage(1); }}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs font-bold text-slate-300 focus:border-amber-500 outline-none appearance-none truncate"
              >
                {allZones.map(z => <option key={z} value={z}>{z}</option>)}
              </select>
              <MapPin size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-800/50 relative z-10">
          <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest self-center mr-2">Trier par :</span>
          <button 
            onClick={() => toggleSort('name')} 
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold border transition-all ${sortBy === 'name' ? 'bg-emerald-600 text-white border-emerald-500 shadow-lg' : 'bg-slate-800 text-slate-400 border-slate-700'}`}
          >
            <ArrowUpDown size={12} /> <span className="hidden md:inline">Nom</span> {sortBy === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
          </button>
          <button 
            onClick={() => toggleSort('zone')} 
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold border transition-all ${sortBy === 'zone' ? 'bg-emerald-600 text-white border-emerald-500 shadow-lg' : 'bg-slate-800 text-slate-400 border-slate-700'}`}
          >
            <ArrowUpDown size={12} /> <span className="hidden md:inline">Zone</span> {sortBy === 'zone' && (sortOrder === 'asc' ? '↑' : '↓')}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {paginatedSkills.map((skill, index) => (
            <SkillCard key={`${skill.name}-${index}`} skill={skill} />
          ))}
        </AnimatePresence>
      </div>

      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={(newSize) => { setItemsPerPage(newSize); setCurrentPage(1); }}
        totalItems={filteredSkills.length}
        pageSizeOptions={[12, 24, 48]}
      />

      {filteredSkills.length === 0 && (
        <EmptyState
          icon={AlertCircle}
          title="Aucune compétence trouvée"
          subtitle="Essayez de modifier le type ou la zone de recherche."
        />
      )}
    </div>
  );
};

export default SkillList;