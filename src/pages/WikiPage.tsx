import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useData } from '../context/DataContext';
import RecipeBrowser, { RecipeItemRow } from '../components/RecipeBrowser';
import Bestiary, { MonsterCard } from '../components/Bestiary';
import SpellList, { SpellCard } from '../components/SpellList';
import SkillList, { SkillCard } from '../components/SkillList';
import { Package, Hammer, Skull, Search, X, Sparkles, Target, LayoutGrid, ChevronRight, ArrowRight } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import ScrollContainer from '../components/shared/ScrollContainer';
import { fastNormalize, generateUUID } from '../data/utils';
import type { Monster, RecipeItem, Spell, Skill } from '../data/types';

const WikiPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { 
    bestiaryData, recipesData, itemsData, plantsData, treesData, depositsData, spellsData, skillsData, 
    favRecipes, setFavRecipes, setCraftingProjects 
  } = useData();
  
  const currentTab = slug || 'all';
  const searchTerm = searchParams.get('search') || '';

  const [searchInput, setSearchInput] = useState(searchTerm);
  const [tabSearches, setTabSearches] = useState<Record<string, string>>({
    all: searchTerm
  });

  const combinedItems = useMemo(() => {
    return [...itemsData, ...plantsData, ...treesData, ...depositsData];
  }, [itemsData, plantsData, treesData, depositsData]);

  const handleProjectAdd = (recipeName: string) => {
    const newProject = {
        id: generateUUID(),
        recipeName: recipeName,
        targetQuantity: 1,
        createdAt: Date.now(),
        collectedIngredients: []
    };
    setCraftingProjects(prev => [...prev, newProject]);
  };

  const toggleFavorite = (name: string) => {
    const newFavs = favRecipes.includes(name) 
      ? favRecipes.filter(f => f !== name) 
      : [...favRecipes, name];
    setFavRecipes(newFavs);
  };

  const handleNavigate = (name: string) => {
    handleSearch(name);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync URL search to local state
  useEffect(() => {
    setSearchInput(searchTerm);
    if (searchTerm || currentTab === 'all') {
      setTabSearches(prev => ({ ...prev, [currentTab]: searchTerm }));
    }
  }, [searchTerm, currentTab]);

  const tabs = [
    { id: 'all', label: 'Tous', icon: LayoutGrid, color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { id: 'items', label: 'Objets', icon: Package, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { id: 'metiers', label: 'Artisanat', icon: Hammer, color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { id: 'bestiary', label: 'Bestiaire', icon: Skull, color: 'text-rose-400', bg: 'bg-rose-500/10' },
    { id: 'spells', label: 'Sorts', icon: Sparkles, color: 'text-sky-400', bg: 'bg-sky-500/10' },
    { id: 'skills', label: 'Compétences', icon: Target, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  ];

  const handleTabChange = (id: string) => {
    let savedSearch = tabSearches[id] || '';
    if (!savedSearch && currentTab === 'all' && searchTerm) {
        savedSearch = searchTerm;
    }
    navigate(`/wiki/${id}${savedSearch ? `?search=${encodeURIComponent(savedSearch)}` : ''}`);
  };

  const handleSearch = (val: string) => {
    setSearchInput(val);
    setTabSearches(prev => ({ ...prev, [currentTab]: val }));
    setSearchParams(prev => {
      if (val) prev.set('search', val);
      else prev.delete('search');
      return prev;
    });
  };

  const globalResults = useMemo(() => {
    if (currentTab !== 'all' || !searchTerm) return null;
    const query = fastNormalize(searchTerm);

    const filterFn = (item: any) => {
        const nameMatch = fastNormalize(item.name).includes(query);
        const descMatch = item.description && fastNormalize(item.description).includes(query);
        const dropsMatch = item.drops && item.drops.some((d: string) => fastNormalize(d).includes(query));
        return nameMatch || descMatch || dropsMatch;
    };

    return [
      { id: 'items', label: 'Objets', icon: Package, color: 'text-blue-400', results: combinedItems.filter(filterFn) },
      { id: 'metiers', label: 'Artisanat', icon: Hammer, color: 'text-amber-400', results: recipesData.filter(filterFn) },
      { id: 'bestiary', label: 'Bestiaire', icon: Skull, color: 'text-rose-400', results: bestiaryData.filter(filterFn) },
      { id: 'spells', label: 'Sorts', icon: Sparkles, color: 'text-sky-400', results: spellsData.filter(filterFn) },
      { id: 'skills', label: 'Compétences', icon: Target, color: 'text-emerald-400', results: skillsData.filter(filterFn) },
    ].filter(cat => cat.results.length > 0);
  }, [currentTab, searchTerm, combinedItems, recipesData, bestiaryData, spellsData, skillsData]);

  return (
    <div className="space-y-10 pb-20">
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

            <div className="w-full md:w-[450px] relative group shrink-0">
              <div className="absolute inset-0 bg-amber-500/5 blur-xl group-focus-within:bg-amber-500/10 transition-colors pointer-events-none"></div>
              <div className="relative">
                <Search className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-amber-500 transition-all duration-300 group-focus-within:scale-110 pointer-events-none" size={18} />
                <input
                  id="wiki-search-input"
                  name="wiki-search"
                  type="text"
                  aria-label="Rechercher dans l'encyclopédie"
                  placeholder="Rechercher..."
                  value={searchInput}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full bg-slate-950/80 backdrop-blur-xl border border-slate-700/50 rounded-xl md:rounded-2xl py-3.5 md:py-5 pl-12 md:pl-14 pr-12 md:pr-32 text-slate-100 focus:border-amber-500/50 outline-none transition-all focus:ring-4 focus:ring-amber-500/5 shadow-2xl text-base md:text-lg font-bold placeholder:text-slate-600"
                />
                {searchInput && (
                  <div className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <button onClick={() => { handleSearch(''); setTabSearches({}); }} className="text-[10px] font-black uppercase tracking-tighter text-slate-500 hover:text-amber-500 transition-colors mr-2 hidden md:block" title="Réinitialiser tous les onglets">Tout effacer</button>
                    <button onClick={() => handleSearch('')} className="text-slate-500 hover:text-amber-500 p-1.5 bg-slate-900/50 rounded-lg transition-all"><X size={16} /></button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <ScrollContainer containerClassName="w-full md:w-fit" className="bg-slate-950/50 p-1 rounded-xl md:rounded-2xl border border-slate-800">
            <div className="flex min-w-max">
              {tabs.map((tab) => {
                const isActive = currentTab === tab.id;
                return (
                  <button key={tab.id} onClick={() => handleTabChange(tab.id)} className={`flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 rounded-lg md:rounded-xl text-[11px] md:text-sm font-black uppercase tracking-wider transition-all relative ${isActive ? 'bg-slate-800 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/30'}`}>
                    <tab.icon size={16} className={isActive ? tab.color : 'text-slate-600'} />
                    {tab.label}
                    {isActive && <motion.div layoutId="activeTab" className="absolute inset-0 bg-slate-800 rounded-lg md:rounded-xl -z-10 border border-slate-700" />}
                  </button>
                );
              })}
            </div>
          </ScrollContainer>
        </div>
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        {currentTab === 'all' && (
          <div className="space-y-12">
            {!searchTerm ? (
              <div className="text-center py-20 bg-slate-900/20 rounded-[40px] border border-slate-800/50 glass-card">
                <div className="w-20 h-20 bg-amber-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-amber-500/20"><Search size={40} className="text-amber-500" /></div>
                <h2 className="text-3xl font-black text-slate-100 uppercase italic tracking-tighter mb-4">Que recherchez-vous ?</h2>
                <p className="text-slate-400 max-w-md mx-auto text-lg leading-relaxed">Découvrez les secrets d'Althéa. Recherchez des équipements légendaires, maîtrisez l'artisanat ou traquez les créatures les plus rares.</p>
                <div className="flex flex-wrap justify-center gap-3 mt-10">
                  {['Cimeterre', 'Ondine', 'Sort de Feu', 'Anneau de Vie'].map(suggest => (
                    <button key={suggest} onClick={() => handleSearch(suggest)} className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 text-sm font-bold hover:border-amber-500/50 hover:text-amber-500 transition-all">{suggest}</button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-16">
                {globalResults?.length === 0 ? (
                  <div className="text-center py-20 glass-card rounded-[40px] border border-dashed border-slate-800">
                    <Search size={64} className="mx-auto text-slate-800 mb-6" />
                    <h3 className="text-2xl font-bold text-slate-400">Aucun résultat trouvé</h3>
                  </div>
                ) : (
                  globalResults?.map(category => (
                    <section key={category.id} className="space-y-8">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-2xl ${category.color.replace('text-', 'bg-')}/10 ${category.color} border ${category.color.replace('text-', 'border-')}/20 shadow-lg`}><category.icon size={24} /></div>
                          <div><h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">{category.label}</h2><p className="text-slate-500 text-xs font-black uppercase tracking-[0.2em]">{category.results.length} correspondances</p></div>
                        </div>
                        <button onClick={() => handleTabChange(category.id)} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 hover:text-white transition-all group">Voir tout <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></button>
                      </div>
                      <div className={category.id === 'metiers' ? "space-y-6" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"}>
                        {category.id === 'items' && category.results.slice(0, 6).map((item, idx) => <RecipeItemRow key={item.name + idx} recipe={item as RecipeItem} isItemsPage={true} favorites={favRecipes} toggleFavorite={toggleFavorite} viewMode="grid" onAddProject={handleProjectAdd} />)}
                        {category.id === 'metiers' && category.results.slice(0, 6).map((recipe, idx) => <RecipeItemRow key={recipe.name + idx} recipe={recipe as RecipeItem} isItemsPage={false} favorites={favRecipes} toggleFavorite={toggleFavorite} viewMode="list" onAddProject={handleProjectAdd} hideProjectButton={true} />)}
                        {category.id === 'bestiary' && category.results.slice(0, 6).map((monster, idx) => <MonsterCard key={monster.name + idx} monster={monster as Monster} showLocation={true} />)}
                        {category.id === 'spells' && category.results.slice(0, 6).map((spell, idx) => <SpellCard key={spell.name + idx} spell={spell as Spell} onNavigate={handleNavigate} />)}
                        {category.id === 'skills' && category.results.slice(0, 6).map((skill, idx) => <SkillCard key={skill.name + idx} skill={skill as Skill} />)}
                      </div>
                    </section>
                  ))
                )}
              </div>
            )}
          </div>
        )}
        {currentTab === 'items' && <RecipeBrowser key="items" recipes={combinedItems} isItemsPage={true} />}
        {currentTab === 'metiers' && <RecipeBrowser key="metiers" recipes={recipesData} isItemsPage={false} />}
        {currentTab === 'bestiary' && <Bestiary key="bestiary" monsters={bestiaryData} />}
        {currentTab === 'spells' && <SpellList key="spells" spells={spellsData} />}
        {currentTab === 'skills' && <SkillList key="skills" skills={skillsData} />}
      </div>
    </div>
  );
};

export default WikiPage;
