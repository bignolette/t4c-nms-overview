import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useData } from '../context/DataContext';
import RecipeBrowser from '../components/RecipeBrowser';
import Bestiary from '../components/Bestiary';
import SpellList from '../components/SpellList';
import SkillList from '../components/SkillList';
import { Package, Hammer, Skull, Search, X, Sparkles, Target } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
    <div className="space-y-8 pb-20">
      {/* Search Header */}
      <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-3xl rounded-full -mr-32 -mt-32"></div>
        
        <div className="relative z-10 flex flex-col gap-6 md:gap-8 min-w-0">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 min-w-0">
            <div className="min-w-0">
              <h1 className="text-2xl md:text-4xl font-black text-slate-100 tracking-tighter italic uppercase mb-2 truncate">
                Encyclopédie Althéenne
              </h1>
              <p className="text-slate-400 font-medium max-w-xl text-sm md:text-base">
                Recherchez des équipements, des recettes d'artisanat ou des créatures à travers tout Althéa.
              </p>
            </div>

            <div className="w-full md:w-96 relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-amber-500 transition-colors" size={20} />
              <input
                type="text"
                placeholder="Rechercher partout..."
                value={searchInput}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-2xl py-4 pl-12 pr-12 text-slate-100 focus:border-amber-500 outline-none transition-all focus:ring-4 focus:ring-amber-500/10 shadow-inner text-lg font-medium"
              />
              {searchInput && (
                <button 
                  onClick={() => handleSearch('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 p-1"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="w-full min-w-0">
            <div className="flex overflow-x-auto no-scrollbar bg-slate-950/50 p-1 rounded-xl md:rounded-2xl border border-slate-800 w-full md:w-fit scrollbar-hide">
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
          </div>
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