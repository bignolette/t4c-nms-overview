import { useState, useMemo, memo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';
import { fastNormalize } from '../data/utils';
import type { Skill } from '../data/types';
import { Sword, BookOpen, User, Coins, Filter, AlertCircle, RotateCcw, Target, Shield, Info, MapPin, ArrowUpDown } from 'lucide-react';
import Pagination from './shared/Pagination';

interface SkillListProps {
  skills: Skill[];
}

const DEFAULT_ITEMS_PER_PAGE = 24;

const SkillCard = memo(({ skill }: { skill: Skill }) => {
  const extractedLevel = useMemo(() => {
    const match = skill.requirements.match(/Niv\s*(\d+)/i);
    return match ? match[1] : null;
  }, [skill.requirements]);

  const cleanRequirements = useMemo(() => {
    return skill.requirements.replace(/Niv\s*\d+,?\s*/i, '').trim();
  }, [skill.requirements]);

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
              <span className="px-2 py-0.5 rounded bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-tighter shadow-lg shadow-amber-500/20">
                Niveau {extractedLevel || '1'}
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-black uppercase tracking-tighter shrink-0">
                {skill.maxTraining}
              </span>
            </div>
            <h3 className="text-xl font-black group-hover:text-emerald-400 transition-colors leading-tight italic tracking-tight truncate text-slate-100">
              {skill.name}
            </h3>
          </div>
          <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
            <Target size={18} />
          </div>
        </div>
        
        <div className="space-y-2 mt-4 bg-slate-950/50 p-3 rounded-xl border border-slate-800/50 shadow-inner">
          <div className="flex items-start gap-2">
            <Shield size={14} className="text-amber-500 shrink-0 mt-0.5" />
            <div className="text-[11px] leading-tight">
              <span className="text-slate-500 font-black uppercase block text-[9px] tracking-widest mb-1">Prérequis Statistiques</span>
              <span className="font-bold text-slate-200">{cleanRequirements || "Aucun prérequis spécifique"}</span>
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
            <div className="text-[10px] font-mono text-emerald-400">{skill.trainingCost}</div>
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
  const [sortBy, setSortBy] = useState<'name' | 'zone'>('name');
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
    skills.forEach(s => Object.keys(s.trainingTeachers).forEach(z => zones.add(z)));
    return ['Toutes', ...Array.from(zones).sort()];
  }, [skills]);

  const handleReset = () => {
    setActiveSearchTerm('');
    setSelectedZone('Toutes');
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
    let result = skills.filter(s => {
      const matchesSearch = !query || 
        fastNormalize(s.name).includes(query) || 
        fastNormalize(s.description).includes(query);
      const matchesZone = selectedZone === 'Toutes' || Object.keys(s.trainingTeachers).includes(selectedZone);
      return matchesSearch && matchesZone;
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
  }, [skills, selectedZone, sortBy, sortOrder, activeSearchTerm]);

  const paginatedSkills = useMemo(() => {
    return filteredSkills.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  }, [filteredSkills, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredSkills.length / itemsPerPage);

  return (
    <div className="space-y-8">
      {/* Controls Header */}
      <div className="flex flex-col gap-6 bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 w-full flex gap-2">
            <button onClick={handleReset} className="btn-danger w-full md:w-auto">
              <RotateCcw size={16} /> Réinitialiser
            </button>
          </div>

          <div className="flex items-center gap-4 px-6 py-3 bg-slate-950/50 rounded-xl border border-slate-800 text-sm h-14 shadow-inner">
            <div className="text-slate-400 whitespace-nowrap flex items-center gap-2">
              <span className="font-black text-emerald-500 text-xl">{filteredSkills.length}</span>
              <span className="text-[10px] font-black uppercase tracking-widest opacity-60">compétences</span>
            </div>
            <div className="w-px h-6 bg-slate-800" />
            <div className="text-slate-400 whitespace-nowrap flex items-center gap-2">
              <span className="font-black text-slate-200 text-lg">{skills.length}</span>
              <span className="text-[10px] font-black uppercase tracking-widest opacity-40">total</span>
            </div>
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
                className={`px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all border ${selectedZone === zone ? 'bg-amber-500 border-amber-400 text-slate-950 shadow-xl shadow-amber-500/10 scale-105 z-10' : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-200 hover:border-slate-600'}`}
              >
                {zone}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-800/50">
          <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest self-center mr-2">Trier par :</span>
          <button 
            onClick={() => toggleSort('name')} 
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold border transition-all ${sortBy === 'name' ? 'bg-emerald-600 text-white border-emerald-500 shadow-lg' : 'bg-slate-800 text-slate-400 border-slate-700'}`}
          >
            <ArrowUpDown size={12} /> Nom {sortBy === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
          </button>
          <button 
            onClick={() => toggleSort('zone')} 
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold border transition-all ${sortBy === 'zone' ? 'bg-emerald-600 text-white border-emerald-500 shadow-lg' : 'bg-slate-800 text-slate-400 border-slate-700'}`}
          >
            <ArrowUpDown size={12} /> Zone {sortBy === 'zone' && (sortOrder === 'asc' ? '↑' : '↓')}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedSkills.map((skill, index) => (
          <SkillCard key={`${skill.name}-${index}`} skill={skill} />
        ))}
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
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-16 text-center">
          <AlertCircle size={48} className="text-slate-700 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-300">Aucune compétence trouvée</h3>
          <p className="text-slate-500 mt-2">Essayez de modifier votre recherche.</p>
        </div>
      )}
    </div>
  );
};

export default SkillList;
