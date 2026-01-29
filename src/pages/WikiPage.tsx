import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useData } from '../context/DataContext';
import RecipeBrowser from '../components/RecipeBrowser';
import Bestiary from '../components/Bestiary';
import SpellList from '../components/SpellList';
import SkillList from '../components/SkillList';
import { Package, Hammer, Skull, Search, X, Sparkles, Target } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollContainer from '../components/shared/ScrollContainer';

const WikiPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { bestiaryData, recipesData, itemsData, spellsData, skillsData } = useData();
  
  const currentTab = slug || 'items';
  const searchTerm = searchParams.get('search') || '';

  const [searchInput, setSearchInput] = useState(searchTerm);

  useEffect(() => {
    setSearchInput(searchTerm);
  }, [searchTerm]);

  const tabs = [
    { id: 'items', label: 'Objets', icon: Package, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { id: 'metiers', label: 'Artisanat', icon: Hammer, color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { id: 'bestiary', label: 'Bestiaire', icon: Skull, color: 'text-rose-400', bg: 'bg-rose-500/10' },
    { id: 'spells', label: 'Sorts', icon: Sparkles, color: 'text-sky-400', bg: 'bg-sky-500/10' },
    { id: 'skills', label: 'Compétences', icon: Target, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  ];

  const handleTabChange = (id: string) => {
    navigate(`/wiki/${id}${searchTerm ? `?search=${encodeURIComponent(searchTerm)}` : ''}`);
  };

  const handleSearch = (val: string) => {
    setSearchInput(val);
    setSearchParams(prev => {
      if (val) prev.set('search', val);
      else prev.delete('search');
      return prev;
    });
  };

  return (
    <div className="space-y-10 pb-20">
      {/* Search Header - Hero Section */}
      <div className="glass-card rounded-3xl p-6 md:p-12 relative overflow-hidden group/hero">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[100px] rounded-full -mr-48 -mt-48 animate-pulse transition-all duration-1000 group-hover/hero:bg-amber-500/20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full -ml-32 -mb-32"></div>
        
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

            <div className="w-full md:w-[450px] relative group shrink-0">
              <div className="absolute inset-0 bg-amber-500/5 blur-xl group-focus-within:bg-amber-500/10 transition-colors"></div>
              <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-amber-500 transition-all duration-300 group-focus-within:scale-110" size={22} />
                <input
                  type="text"
                  placeholder="Rechercher un objet, un monstre..."
                  value={searchInput}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full bg-slate-950/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl py-5 pl-14 pr-14 text-slate-100 focus:border-amber-500/50 outline-none transition-all focus:ring-4 focus:ring-amber-500/5 shadow-2xl text-lg font-bold placeholder:text-slate-600"
                />
                {searchInput && (
                  <button 
                    onClick={() => handleSearch('')}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-amber-500 p-1 bg-slate-900/50 rounded-lg transition-all"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <ScrollContainer 
            containerClassName="w-full md:w-fit"
            className="bg-slate-950/50 p-1 rounded-xl md:rounded-2xl border border-slate-800"
          >
            <div className="flex min-w-max">
              {tabs.map((tab) => {
                const isActive = currentTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`
                      flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 rounded-lg md:rounded-xl text-[11px] md:text-sm font-black uppercase tracking-wider transition-all relative
                      ${isActive ? 'bg-slate-800 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/30'}
                    `}
                  >
                    <tab.icon size={16} className={isActive ? tab.color : 'text-slate-600'} />
                    {tab.label}
                    {isActive && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute inset-0 bg-slate-800 rounded-lg md:rounded-xl -z-10 border border-slate-700"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </ScrollContainer>
      </div>
    </div>

      {/* Main Content Area */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        {currentTab === 'items' && (
          <RecipeBrowser key="items" recipes={itemsData} isItemsPage={true} />
        )}
        {currentTab === 'metiers' && (
          <RecipeBrowser key="metiers" recipes={recipesData} isItemsPage={false} />
        )}
        {currentTab === 'bestiary' && (
          <Bestiary key="bestiary" monsters={bestiaryData} />
        )}
        {currentTab === 'spells' && (
          <SpellList key="spells" spells={spellsData} />
        )}
        {currentTab === 'skills' && (
          <SkillList key="skills" skills={skillsData} />
        )}
      </div>
    </div>
  );
};

export default WikiPage;