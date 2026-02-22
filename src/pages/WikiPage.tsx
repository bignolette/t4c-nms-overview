import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useData } from '../context/DataContext';
import RecipeBrowser from '../components/RecipeBrowser';
import Bestiary from '../components/Bestiary';
import NpcList from '../components/NpcList';
import SpellList from '../components/SpellList';
import SkillList from '../components/SkillList';
import HarvestList from '../components/HarvestList';
import DepositList from '../components/DepositList';
import { Package, Hammer, Skull, Target, Users, Sparkles, Pickaxe, Leaf } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const WikiPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { 
    bestiaryData, recipesData, itemsData, spellsData, skillsData, npcsData,
    plantsData, treesData, depositsData
  } = useData();
  
  const currentTab = slug || 'items';
  const searchTerm = searchParams.get('search') || '';

  const [tabSearches, setTabSearches] = useState<Record<string, string>>({
    items: searchTerm
  });

  const harvestData = useMemo(() => [...treesData, ...plantsData], [treesData, plantsData]);
  const allItemsData = useMemo(() => [...itemsData, ...plantsData, ...treesData, ...depositsData], [itemsData, plantsData, treesData, depositsData]);

  // Sync URL search to local state
  useEffect(() => {
    if (searchTerm) {
      setTabSearches(prev => ({ ...prev, [currentTab]: searchTerm }));
    }
  }, [searchTerm, currentTab]);

  const tabs = [
    { id: 'items', label: 'Objets', icon: Package, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { id: 'metiers', label: 'Artisanat', icon: Hammer, color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { id: 'harvest', label: 'Récolte', icon: Leaf, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { id: 'deposits', label: 'Gisements', icon: Pickaxe, color: 'text-slate-400', bg: 'bg-slate-500/10' },
    { id: 'bestiary', label: 'Bestiaire', icon: Skull, color: 'text-rose-400', bg: 'bg-rose-500/10' },
    { id: 'npcs', label: 'PNJs', icon: Users, color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { id: 'spells', label: 'Sorts', icon: Sparkles, color: 'text-sky-400', bg: 'bg-sky-500/10' },
    { id: 'skills', label: 'Compétences', icon: Target, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  ];

  const handleTabChange = (id: string) => {
    let savedSearch = tabSearches[id] || '';
    navigate(`/wiki/${id}${savedSearch ? `?search=${encodeURIComponent(savedSearch)}` : ''}`);
  };

  return (
    <div className="space-y-10 pb-20 max-w-full overflow-x-hidden">
      <div className="glass-card rounded-3xl p-6 md:p-12 relative overflow-hidden group/hero">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[100px] rounded-full -mr-48 -mt-48 animate-pulse transition-all duration-1000 group-hover/hero:bg-amber-500/20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full -ml-32 -mb-32 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col gap-10 min-w-0">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 min-w-0">
            <div className="min-w-0 space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-3xl md:text-6xl font-black text-slate-100 tracking-[calc(-0.05em)] italic uppercase leading-none">
                  Encyclopédie <br/>
                  <span className="text-amber-500 text-glow-amber">Althéenne</span>
                </h1>
              </motion.div>
              <p className="text-slate-400 font-medium max-w-xl text-base md:text-lg leading-relaxed border-l-2 border-amber-500/30 pl-4">
                Découvrez les secrets d'Althéa. Recherchez des équipements légendaires, maîtrisez l'artisanat ou traquez les créatures les plus rares.
              </p>
            </div>
          </div>

          <div className="bg-slate-950/50 p-1.5 rounded-2xl md:rounded-3xl border border-slate-800 w-full">
            <div className="flex flex-wrap gap-1.5 md:gap-2 justify-center lg:justify-start">
              {tabs.map((tab) => {
                const isActive = currentTab === tab.id;
                return (
                  <button 
                    key={tab.id} 
                    onClick={() => handleTabChange(tab.id)} 
                    className={`flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 rounded-xl md:rounded-2xl text-[10px] md:text-sm font-black uppercase tracking-wider transition-all relative ${isActive ? 'bg-slate-800 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/30'}`}
                  >
                    <tab.icon size={16} className={isActive ? tab.color : 'text-slate-600'} />
                    <span>{tab.label}</span>
                    {isActive && <motion.div layoutId="activeTab" className="absolute inset-0 bg-slate-800 rounded-xl md:rounded-2xl -z-10 border border-slate-700" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        {currentTab === 'items' && <RecipeBrowser key="items" recipes={allItemsData} isItemsPage={true} />}
        {currentTab === 'metiers' && <RecipeBrowser key="metiers" recipes={recipesData} isItemsPage={false} />}
        {currentTab === 'harvest' && <HarvestList key="harvest" resources={harvestData} />}
        {currentTab === 'deposits' && <DepositList key="deposits" deposits={depositsData} />}
        {currentTab === 'bestiary' && <Bestiary key="bestiary" monsters={bestiaryData} />}
        {currentTab === 'npcs' && <NpcList key="npcs" npcs={npcsData} />}
        {currentTab === 'spells' && <SpellList key="spells" spells={spellsData} />}
        {currentTab === 'skills' && <SkillList key="skills" skills={skillsData} />}
      </div>
    </div>
  );
};

export default WikiPage;
