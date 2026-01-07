import { useState, useMemo, useEffect, memo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { wikiData } from '../data/wiki-data';
import { fastNormalize } from '../data/utils';
import type { RecipeItem } from '../data/wiki-data';
import CraftingTree from './CraftingTree';
import { 
  Search, ChevronLeft, ChevronRight, ArrowUpDown, Star, X, RotateCcw, Package, MapPin,
  Shield, Sword, Crown, Shirt, Footprints, Hand, Circle, Link2, GripHorizontal, Columns2, Medal,
  ArrowUpRight, ArrowRight, Wind, Users, ArrowRightCircle, User, LayoutGrid, List, ChevronDown, ChevronUp
} from 'lucide-react';

interface RecipeBrowserProps {
  recipes: RecipeItem[];
  isItemsPage?: boolean;
}

const PROFESSIONS = ['Tous', 'Apothicaire', 'Bijoutier', 'Couturier', 'Armurier', 'Forgeron', 'Ebéniste'];
const ITEM_TYPES = [
  'Tous', 'Amulette', 'Anneau', 'Arc', 'Arme', 'Botte', 'Bouclier', 'Bracelet', 
  'Cape', 'Ceinture', 'Flèches', 'Focus', 'Gant', 'Heaume', 'Jambière', 
  'Orbe', 'Plastron', 'Robe', 'Matériau', 'Divers'
];
const DEFAULT_LEVEL_RANGE: [number, number] = [0, 250];

const allItems = wikiData.find(p => p.id === 'items')?.recipes || [];

const findItemSource = (name: string) => {
  const normalized = fastNormalize(name);
  const item = allItems.find(i => fastNormalize(i.name) === normalized);
  return item?.source;
};

const getSourceIcon = (source: string | undefined, name?: string) => {
  let resolvedSource = source;
  if (!resolvedSource && name) {
    resolvedSource = findItemSource(name);
  }
  
  if (!resolvedSource) return Package;
  switch (resolvedSource) {
    case 'Heaume': return Crown;
    case 'Amulette': return Medal;
    case 'Bracelet': return Link2;
    case 'Anneau':
    case 'Bijou': return Circle;
    case 'Robe': return Shirt;
    case 'Armure':
    case 'Plastron':
    case 'Torse': return Shirt;
    case 'Cape': return Wind;
    case 'Orbe': return Wind; 
    case 'Arme': return Sword;
    case 'Arc': return ArrowUpRight;
    case 'Bouclier':
    case 'Focus': return Shield;
    case 'Flèches': return ArrowRight;
    case 'Gant': return Hand;
    case 'Ceinture': return GripHorizontal;
    case 'Jambière': return Columns2; 
    case 'Botte': return Footprints;
    case 'Matériau':
    case 'Divers': return Package;
    default: return Package;
  }
};

const PROF_COLORS: Record<string, string> = {
  'Apothicaire': 'bg-emerald-500 text-emerald-500 border-emerald-500/20',
  'Bijoutier': 'bg-blue-500 text-blue-500 border-blue-500/20',
  'Couturier': 'bg-pink-500 text-pink-500 border-pink-500/20',
  'Armurier': 'bg-orange-500 text-orange-500 border-orange-500/20',
  'Forgeron': 'bg-red-500 text-red-500 border-red-500/20',
  'Ebéniste': 'bg-amber-700 text-amber-600 border-amber-700/20',
};

const TYPE_COLORS: Record<string, string> = {
  'Arme': 'bg-red-500/10 text-red-400 border-red-500/20',
  'Arc': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'Robe': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Cape': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Armure': 'bg-slate-500/10 text-slate-400 border-slate-500/20',
  'Bouclier': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'Anneau': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  'Matériau': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Récolte': 'bg-green-500/10 text-green-400 border-green-500/20',
};

const formatBonus = (value: string | undefined) => {
  if (!value) return "";
  if (value.startsWith('+') || value.startsWith('-')) return value;
  return `+${value}`;
};

const StatBadge = ({ label, value, color }: { label: string, value: string, color: string }) => (
  <div className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 px-2 py-0.5 rounded-lg">
    <span className={`text-[9px] font-black uppercase tracking-tighter ${color}`}>{label}</span>
    <span className="text-[11px] font-bold text-slate-200">{value}</span>
  </div>
);

const RecipeItemRow = memo(({ recipe, activeSearchTerm, isItemsPage, favorites, toggleFavorite, getMatchingIngredients, viewMode }: any) => {
  const matchingIngs = getMatchingIngredients ? getMatchingIngredients(recipe, activeSearchTerm) : [];
  
  if (viewMode === 'grid' && isItemsPage) {
    return (
      <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-4 flex flex-col gap-3 hover:border-slate-600 transition-all group">
        <div className="flex items-start justify-between">
          <div className="p-2 bg-slate-800 rounded-xl text-amber-500 border border-slate-700/50 group-hover:bg-amber-500 group-hover:text-slate-900 transition-all">
            {(() => {
              const Icon = getSourceIcon(recipe.source, recipe.name);
              return <Icon size={18} />;
            })()}
          </div>
          <button 
            onClick={() => toggleFavorite(recipe.name)}
            className={`p-1.5 rounded-full border transition-all ${favorites.includes(recipe.name) ? 'bg-yellow-500 border-yellow-400 text-slate-950 scale-110' : 'bg-slate-800 border-slate-700 text-slate-500 hover:text-yellow-500'}`}
          >
            <Star size={12} fill={favorites.includes(recipe.name) ? 'currentColor' : 'none'} />
          </button>
        </div>
        
        <div>
          <h3 className="font-bold text-slate-100 group-hover:text-amber-500 transition-colors text-sm line-clamp-2 min-h-[40px]">{recipe.name}</h3>
          <span className="text-[10px] text-slate-500 uppercase font-black tracking-tighter">{recipe.source}</span>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {recipe.bonuses?.ca && <StatBadge label="CA" value={formatBonus(recipe.bonuses.ca)} color="text-slate-400" />}
          {recipe.bonuses?.str && <StatBadge label="FOR" value={formatBonus(recipe.bonuses.str)} color="text-red-400" />}
          {recipe.bonuses?.int && <StatBadge label="INT" value={formatBonus(recipe.bonuses.int)} color="text-blue-400" />}
        </div>
      </div>
    );
  }

  return (
    <div className="group relative">
      <div className="absolute -top-3 right-6 z-10 flex items-center gap-2">
        {matchingIngs.length > 0 && (
          <div className="hidden md:flex items-center gap-1 bg-slate-950 border border-amber-500/30 px-3 py-1 rounded-full text-[10px] text-amber-500 font-bold shadow-xl animate-in fade-in zoom-in duration-300">
            <Search size={10} />
            <span>Contient: {matchingIngs.join(', ')}</span>
          </div>
        )}
        {!isItemsPage && (
          <button 
            onClick={() => toggleFavorite(recipe.name)}
            className={`p-1.5 rounded-full border shadow-lg transition-all ${favorites.includes(recipe.name) ? 'bg-yellow-500 border-yellow-400 text-slate-950 scale-110' : 'bg-slate-800 border-slate-700 text-slate-500 hover:text-yellow-500'}`}
          >
            <Star size={14} fill={favorites.includes(recipe.name) ? 'currentColor' : 'none'} />
          </button>
        )}
        {isItemsPage && recipe.source && (
          <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter border shadow-lg ${TYPE_COLORS[recipe.source] || 'bg-slate-800 text-slate-400'}`}>
            {recipe.source}
          </span>
        )}
        {!isItemsPage && recipe.profession && (
          <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter border shadow-lg ${PROF_COLORS[recipe.profession]?.replace('text-', 'text-opacity-90 text-') || 'bg-slate-800 text-slate-400'}`}>
            {recipe.profession} • LVL {recipe.level}
          </span>
        )}
      </div>
      
      {isItemsPage ? (
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 shadow-xl hover:border-slate-700 transition-all">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-800 rounded-xl text-amber-500 border border-slate-700/50">
                  {(() => {
                    const Icon = getSourceIcon(recipe.source, recipe.name);
                    return <Icon size={20} />;
                  })()}
                </div>
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-amber-500 transition-colors mb-1">{recipe.name}</h3>
              </div>

              <div className="space-y-4">
                {recipe.description && (
                  <p className="text-sm text-slate-400 leading-relaxed border-l-2 border-amber-500/30 pl-3 py-1">
                    {recipe.description}
                  </p>
                )}
                
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Prérequis</span>
                  {recipe.prerequisites && Object.values(recipe.prerequisites).some(v => v) ? (
                    <div className="flex flex-wrap gap-2">
                      {recipe.prerequisites.str && <StatBadge label="FOR" value={recipe.prerequisites.str} color="text-red-400" />}
                      {recipe.prerequisites.end && <StatBadge label="END" value={recipe.prerequisites.end} color="text-orange-400" />}
                      {recipe.prerequisites.dex && <StatBadge label="DEX" value={recipe.prerequisites.dex} color="text-emerald-400" />}
                      {recipe.prerequisites.int && <StatBadge label="INT" value={recipe.prerequisites.int} color="text-blue-400" />}
                      {recipe.prerequisites.wis && <StatBadge label="SAG" value={recipe.prerequisites.wis} color="text-purple-400" />}
                    </div>
                  ) : (
                    <span className="text-xs text-slate-600 italic">Pas de pré-requis</span>
                  )}
                </div>

                {(recipe.bonuses && Object.values(recipe.bonuses).some(v => v)) || recipe.bonusText ? (
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block text-emerald-500/80">Bonus</span>
                    <div className="flex flex-wrap gap-2">
                      {recipe.bonuses?.ca && <StatBadge label="CA" value={formatBonus(recipe.bonuses.ca)} color="text-slate-400" />}
                      {recipe.bonuses?.str && <StatBadge label="FOR" value={formatBonus(recipe.bonuses.str)} color="text-red-400" />}
                      {recipe.bonuses?.end && <StatBadge label="END" value={formatBonus(recipe.bonuses.end)} color="text-orange-400" />}
                      {recipe.bonuses?.dex && <StatBadge label="DEX" value={formatBonus(recipe.bonuses.dex)} color="text-emerald-400" />}
                      {recipe.bonuses?.int && <StatBadge label="INT" value={formatBonus(recipe.bonuses.int)} color="text-blue-400" />}
                      {recipe.bonuses?.wis && <StatBadge label="SAG" value={formatBonus(recipe.bonuses.wis)} color="text-purple-400" />}
                    </div>
                    {recipe.bonusText && (
                      <p className="text-xs text-emerald-400/90 font-medium leading-relaxed italic bg-emerald-500/5 border border-emerald-500/10 rounded-lg p-2 mt-1">
                        {recipe.bonusText}
                      </p>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
            
            <div className="flex flex-col gap-6 w-full md:w-64 lg:w-80 shrink-0">
              {recipe.learnedFrom && (
                <div className="space-y-3">
                  <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-3">
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block mb-1">Apprentissage</span>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                      <MapPin size={12} className="text-blue-500" />
                      <span>{recipe.learnedFrom}</span>
                    </div>
                    <div className="text-[10px] text-slate-500 ml-5 font-mono">{recipe.coordinates}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <CraftingTree recipes={[recipe]} />
      )}
    </div>
  );
});

const NPCGroupedView = ({ 
  recipes, 
  toggleFavorite, 
  favorites,
  selectedProf,
  onSelectProf,
  onNavigateToRecipe,
  showOnlyFavs,
  onToggleFavs
}: { 
  recipes: RecipeItem[], 
  toggleFavorite: (name: string) => void, 
  favorites: string[],
  selectedProf: string,
  onSelectProf: (p: string) => void,
  onNavigateToRecipe: (name: string) => void,
  showOnlyFavs: boolean,
  onToggleFavs: () => void
}) => {
  const [expandedNPCs, setExpandedNPCs] = useState<string[]>([]);

  const grouped = useMemo(() => {
    const g: Record<string, Record<string, RecipeItem[]>> = {};
    
    recipes.forEach(r => {
      if (!r.profession) return;
      if (showOnlyFavs && !favorites.includes(r.name)) return;
      
      if (!g[r.profession]) g[r.profession] = {};
      const npc = r.learnedFrom || 'Appris automatiquement / Inconnu';
      if (!g[r.profession][npc]) g[r.profession][npc] = [];
      g[r.profession][npc].push(r);
    });
    
    Object.keys(g).forEach(prof => {
      Object.keys(g[prof]).forEach(npc => {
        g[prof][npc].sort((a, b) => (a.level || 0) - (b.level || 0));
      });
    });
    
    return g;
  }, [recipes, showOnlyFavs, favorites]);

  const sortedProfessions = Object.keys(grouped).sort((a, b) => {
    const idxA = PROFESSIONS.indexOf(a);
    const idxB = PROFESSIONS.indexOf(b);
    if (idxA === -1 && idxB === -1) return a.localeCompare(b);
    if (idxA === -1) return 1;
    if (idxB === -1) return -1;
    return idxA - idxB;
  }).filter(p => selectedProf === 'Tous' || p === selectedProf);

  const toggleNPC = (npc: string) => {
    setExpandedNPCs(prev => prev.includes(npc) ? prev.filter(n => n !== npc) : [...prev, npc]);
  };

  const expandAll = (npcs: string[]) => setExpandedNPCs(prev => Array.from(new Set([...prev, ...npcs])));
  const collapseAll = (npcs: string[]) => setExpandedNPCs(prev => prev.filter(n => !npcs.includes(n)));

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Navigation Tabs */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-2 shadow-xl flex flex-wrap gap-1 sticky top-4 z-30 backdrop-blur-xl">
        {PROFESSIONS.map(p => (
          <button
            key={p}
            onClick={() => onSelectProf(p)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              selectedProf === p 
                ? 'bg-amber-500 text-slate-950 shadow-lg' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            {p === 'Tous' ? <Users size={14} /> : <div className={`w-2 h-2 rounded-full ${PROF_COLORS[p]?.split(' ')[0]}`} />}
            {p}
          </button>
        ))}
        <div className="flex-1 min-w-[20px]" />
        <button 
          onClick={onToggleFavs}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            showOnlyFavs ? 'bg-yellow-500 text-slate-950' : 'text-slate-500 hover:text-yellow-500'
          }`}
        >
          <Star size={14} fill={showOnlyFavs ? 'currentColor' : 'none'} />
          Favoris
        </button>
      </div>

      {sortedProfessions.map((prof) => {
        const npcs = grouped[prof];
        const npcNames = Object.keys(npcs).sort();

        return (
          <div key={prof} className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <h2 className="text-xl font-black uppercase tracking-wider text-slate-100 flex items-center gap-3">
                <div className={`w-1 h-6 rounded-full ${PROF_COLORS[prof]?.split(' ')[0]}`} />
                {prof}
              </h2>
              <div className="flex gap-2">
                <button onClick={() => expandAll(npcNames)} className="text-[10px] font-bold text-slate-500 hover:text-amber-500 uppercase tracking-widest">Tout déplier</button>
                <span className="text-slate-800">|</span>
                <button onClick={() => collapseAll(npcNames)} className="text-[10px] font-bold text-slate-500 hover:text-amber-500 uppercase tracking-widest">Tout replier</button>
              </div>
            </div>

            <div className="grid gap-4">
              {npcNames.map((npc) => {
                const npcRecipes = npcs[npc];
                const isExpanded = expandedNPCs.includes(npc);
                return (
                  <div key={npc} className={`bg-slate-900/50 border rounded-2xl overflow-hidden transition-all duration-300 ${isExpanded ? 'border-amber-500/30 ring-1 ring-amber-500/10' : 'border-slate-800'}`}>
                    {/* NPC Header */}
                    <button 
                      onClick={() => toggleNPC(npc)}
                      className="w-full flex flex-col md:flex-row md:items-center justify-between p-4 gap-4 text-left hover:bg-slate-800/50 transition-colors"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-amber-500 border border-slate-700">
                          <User size={20} />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-100">{npc}</h3>
                          <div className="flex items-center gap-3 mt-0.5">
                            {npcRecipes[0]?.coordinates && (
                              <span className="flex items-center gap-1 text-[11px] font-mono text-blue-400">
                                <MapPin size={10} /> {npcRecipes[0].coordinates}
                              </span>
                            )}
                            {npcRecipes[0]?.locationPrecision && (
                              <span className="text-[11px] text-slate-500 italic">{npcRecipes[0].locationPrecision}</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 shrink-0">
                        <span className="bg-slate-950 border border-slate-800 text-[10px] font-bold text-slate-400 px-3 py-1 rounded-full uppercase tracking-tighter">
                          {npcRecipes.length} recettes
                        </span>
                        {isExpanded ? <ChevronUp size={20} className="text-slate-600" /> : <ChevronDown size={20} className="text-slate-600" />}
                      </div>
                    </button>

                    {/* NPC Content */}
                    {isExpanded && (
                      <div className="p-4 pt-0 border-t border-slate-800/50 bg-slate-950/20">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 mt-4 animate-in slide-in-from-top-2 duration-300">
                          {npcRecipes.map((recipe) => (
                            <div key={recipe.name} className="group flex items-center justify-between bg-slate-950 border border-slate-800 rounded-xl p-2.5 hover:border-slate-600 transition-all">
                              <div className="flex items-center gap-3 min-w-0">
                                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-xs font-bold text-slate-400 group-hover:text-amber-500 transition-colors">
                                  {recipe.level}
                                </div>
                                <button 
                                  onClick={() => onNavigateToRecipe(recipe.name)}
                                  className="text-xs font-bold text-slate-200 group-hover:text-amber-500 truncate text-left flex items-center gap-1.5"
                                >
                                  {recipe.name}
                                  <ArrowRightCircle size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </button>
                              </div>
                              <button 
                                onClick={() => toggleFavorite(recipe.name)}
                                className={`p-1 rounded-md transition-all ${favorites.includes(recipe.name) ? 'text-yellow-500' : 'text-slate-700 hover:text-slate-400'}`}
                              >
                                <Star size={14} fill={favorites.includes(recipe.name) ? 'currentColor' : 'none'} />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};


const RecipeBrowser = ({ recipes, isItemsPage = false }: RecipeBrowserProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlSearch = searchParams.get('search') || '';

  const [viewMode, setViewMode] = useState<'search' | 'npc'>(isItemsPage ? 'search' : 'search');
  const [layoutMode, setLayoutMode] = useState<'list' | 'grid'>('list');
  const [isExactSearch, setIsExactSearch] = useState(false);

  const [searchInput, setSearchInput] = useState(urlSearch);
  const [activeSearchTerm, setActiveSearchTerm] = useState(urlSearch);
  const [selectedProf, setSelectedProf] = useState('Tous');
  const [selectedType, setSelectedType] = useState('Tous');
  const [levelRange, setLevelRange] = useState<[number, number]>(DEFAULT_LEVEL_RANGE);
  const [sortBy, setSortBy] = useState<'name' | 'level'>(isItemsPage ? 'name' : 'level');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [showOnlyFavs, setShowOnlyFavs] = useState(false);
  const [showBaseComponents, setShowBaseComponents] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = layoutMode === 'grid' ? 12 : 8;

  const itemTypes = useMemo(() => {
    if (isItemsPage) return ITEM_TYPES;
    return ITEM_TYPES.filter(t => t !== 'Matériau');
  }, [isItemsPage]);

  useEffect(() => {
    if (urlSearch !== activeSearchTerm) {
      setSearchInput(urlSearch);
      setActiveSearchTerm(urlSearch);
      setCurrentPage(1);
      if (urlSearch && !isItemsPage) setShowBaseComponents(true);
    }
  }, [urlSearch, isItemsPage]);

  useEffect(() => {
    const saved = localStorage.getItem('t4c-fav-recipes');
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  const toggleFavorite = (name: string) => {
    const newFavs = favorites.includes(name) 
      ? favorites.filter(f => f !== name) 
      : [...favorites, name];
    setFavorites(newFavs);
    localStorage.setItem('t4c-fav-recipes', JSON.stringify(newFavs));
  };

  const handleSearch = () => {
    setActiveSearchTerm(searchInput);
    setIsExactSearch(false);
    setSearchParams(prev => {
      if (searchInput) prev.set('search', searchInput);
      else prev.delete('search');
      return prev;
    });
    setCurrentPage(1);
  };

  const handleReset = () => {
    setSearchInput('');
    setActiveSearchTerm('');
    setIsExactSearch(false);
    setSelectedProf('Tous');
    setSelectedType('Tous');
    setLevelRange(DEFAULT_LEVEL_RANGE);
    setSortBy(isItemsPage ? 'name' : 'level');
    setSortOrder('asc');
    setShowOnlyFavs(false);
    setShowBaseComponents(false);
    setCurrentPage(1);
    setSearchParams(new URLSearchParams());
  };

  const handleClearSearch = () => {
    setSearchInput('');
    setActiveSearchTerm('');
    setIsExactSearch(false);
    setSearchParams(prev => {
      prev.delete('search');
      return prev;
    });
    setCurrentPage(1);
  };

  const filteredRecipes = useMemo(() => {
    if (viewMode === 'npc' && !isItemsPage) return recipes;

    const normalizedSearch = fastNormalize(activeSearchTerm);
    
    let result = recipes.filter(recipe => {
      const resolvedType = recipe.source || findItemSource(recipe.name);
      const matchesType = selectedType === 'Tous' || resolvedType === selectedType;

      if (isItemsPage) {
        const matchesSearch = normalizedSearch === '' || fastNormalize(recipe.name).includes(normalizedSearch);
        return matchesType && matchesSearch;
      }

      const isBaseComponent = !recipe.ingredients || recipe.ingredients.length === 0;
      const matchesProf = selectedProf === 'Tous' || recipe.profession === selectedProf;
      const matchesLevel = (recipe.level || 0) >= levelRange[0] && (recipe.level || 0) <= levelRange[1];
      const matchesFav = !showOnlyFavs || favorites.includes(recipe.name);
      const matchesBaseToggle = showBaseComponents || !isBaseComponent || normalizedSearch !== '';
      
      if (!matchesProf || !matchesLevel || !matchesFav || !matchesBaseToggle || !matchesType) return false;
      if (normalizedSearch === '') return true;

      if (isExactSearch) return fastNormalize(recipe.name) === normalizedSearch;

      const checkMatch = (r: RecipeItem, search: string, seen = new Set<string>()): boolean => {
        if (seen.has(r.name)) return false;
        seen.add(r.name);
        if (fastNormalize(r.name).includes(search)) return true;
        if (r.ingredients) {
          for (const ing of r.ingredients) {
            if (fastNormalize(ing.name).includes(search)) return true;
            const ingRecipe = recipes.find(subR => fastNormalize(subR.name) === fastNormalize(ing.name));
            if (ingRecipe && checkMatch(ingRecipe, search, seen)) return true;
          }
        }
        return false;
      };
      return checkMatch(recipe, normalizedSearch);
    });

    result.sort((a, b) => {
      if (sortBy === 'name') {
        return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      } else {
        return sortOrder === 'asc' ? (a.level || 0) - (b.level || 0) : (b.level || 0) - (a.level || 0);
      }
    });
    return result;
  }, [recipes, activeSearchTerm, selectedProf, selectedType, levelRange, sortBy, sortOrder, showOnlyFavs, showBaseComponents, favorites, isItemsPage, viewMode, isExactSearch]);

  const getMatchingIngredients = (recipe: RecipeItem, search: string) => {
    if (!search || isItemsPage || isExactSearch) return [];
    const matches: string[] = [];
    const normalizedSearch = fastNormalize(search);
    const walk = (r: RecipeItem, seen = new Set<string>()) => {
      if (seen.has(r.name)) return;
      seen.add(r.name);
      if (r.ingredients) {
        for (const ing of r.ingredients) {
          if (fastNormalize(ing.name).includes(normalizedSearch)) {
            if (!matches.includes(ing.name)) matches.push(ing.name);
          }
          const ingRecipe = recipes.find(subR => fastNormalize(subR.name) === fastNormalize(ing.name));
          if (ingRecipe) walk(ingRecipe, seen);
        }
      }
    };
    walk(recipe);
    return matches.filter(m => m !== recipe.name);
  };

  const totalPages = Math.ceil(filteredRecipes.length / itemsPerPage);
  const currentRecipes = filteredRecipes.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleSort = (type: 'name' | 'level') => {
    if (sortBy === type) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(type);
      setSortOrder('asc');
    }
  };

  const navigateToRecipe = (name: string) => {
    setSearchInput(name);
    setActiveSearchTerm(name);
    setIsExactSearch(true);
    setSearchParams(prev => {
      prev.set('search', name);
      return prev;
    });
    setViewMode('search');
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {!isItemsPage && (
          <div className="flex bg-slate-900/50 p-1 rounded-xl border border-slate-800 w-fit backdrop-blur-xl shadow-lg">
            <button
              onClick={() => setViewMode('search')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                viewMode === 'search' 
                  ? 'bg-amber-500 text-slate-950 shadow-lg scale-105' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Search size={16} />
              Recherche
            </button>
            <button
              onClick={() => setViewMode('npc')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                viewMode === 'npc' 
                  ? 'bg-amber-500 text-slate-950 shadow-lg scale-105' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Users size={16} />
              Maîtres Artisans
            </button>
          </div>
        )}

        {viewMode === 'search' && isItemsPage && (
          <div className="flex bg-slate-900/50 p-1 rounded-xl border border-slate-800 w-fit ml-auto">
            <button
              onClick={() => setLayoutMode('list')}
              className={`p-2 rounded-lg transition-all ${layoutMode === 'list' ? 'bg-slate-800 text-amber-500' : 'text-slate-500 hover:text-slate-300'}`}
            >
              <List size={20} />
            </button>
            <button
              onClick={() => setLayoutMode('grid')}
              className={`p-2 rounded-lg transition-all ${layoutMode === 'grid' ? 'bg-slate-800 text-amber-500' : 'text-slate-500 hover:text-slate-300'}`}
            >
              <LayoutGrid size={20} />
            </button>
          </div>
        )}
      </div>

      {viewMode === 'search' ? (
        <>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
            
            <div className="space-y-6 relative z-10">
              <div className="w-full space-y-2">
                <div className="flex gap-2">
                  <div className="relative flex-1 group">
                    <Search className="absolute left-4 top-3.5 text-slate-500 group-focus-within:text-amber-500 transition-colors" size={20} />
                    <input
                      type="text"
                      placeholder={isItemsPage ? "Rechercher un objet..." : "Ex: Potion, Lingot, Épée..."}
                      value={searchInput}
                      onChange={(e) => {
                        setSearchInput(e.target.value);
                        if (isExactSearch) setIsExactSearch(false);
                      }}
                      onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                      className="w-full bg-slate-950 border border-slate-700 rounded-2xl py-3.5 pl-12 pr-10 text-slate-100 focus:border-amber-500 outline-none transition-all focus:ring-4 focus:ring-amber-500/10 shadow-inner"
                    />
                    {searchInput && (
                      <button onClick={handleClearSearch} className="absolute right-4 top-3.5 text-slate-500 hover:text-slate-300"><X size={20} /></button>
                    )}
                  </div>
                  <button onClick={handleSearch} className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-3.5 rounded-2xl transition-all shadow-lg shadow-amber-500/20 active:scale-95">Chercher</button>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-6 items-end border-t border-slate-800/50 pt-6">
                {isItemsPage ? (
                  <div className="w-full space-y-3">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-1">Catégorie d'objet</label>
                    <div className="flex flex-wrap gap-2">
                      {itemTypes.map(t => (
                        <button
                          key={t}
                          onClick={() => {setSelectedType(t); setCurrentPage(1);}}
                          className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 ${selectedType === t ? (TYPE_COLORS[t] || 'bg-amber-500 text-slate-950 border-amber-500 shadow-md') : 'bg-slate-950 text-slate-500 border-slate-800 hover:border-slate-600'}`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${TYPE_COLORS[t]?.split(' ')[0] || 'bg-slate-500'}`} />
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="w-full lg:w-1/3 space-y-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Profession</label>
                      <div className="relative">
                        <select
                          value={selectedProf}
                          onChange={(e) => {setSelectedProf(e.target.value); setCurrentPage(1);}}
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl py-3 px-4 text-slate-100 focus:border-amber-500 outline-none appearance-none cursor-pointer"
                        >
                          {PROFESSIONS.map(p => <option key={p} value={p}>{p}</option>)}
                        </select>
                        <ChevronDown className="absolute right-3 top-3.5 text-slate-500 pointer-events-none" size={16} />
                      </div>
                    </div>

                    <div className="w-full lg:w-1/3 space-y-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Type</label>
                      <div className="relative">
                        <select
                          value={selectedType}
                          onChange={(e) => {setSelectedType(e.target.value); setCurrentPage(1);}}
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl py-3 px-4 text-slate-100 focus:border-amber-500 outline-none appearance-none cursor-pointer"
                        >
                          {itemTypes.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                        <ChevronDown className="absolute right-3 top-3.5 text-slate-500 pointer-events-none" size={16} />
                      </div>
                    </div>

                    <div className="w-full lg:w-1/3 space-y-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Niveau</label>
                      <div className="flex items-center gap-2 bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5">
                        <input type="number" value={levelRange[0]} onChange={(e) => {setLevelRange([parseInt(e.target.value) || 0, levelRange[1]]); setCurrentPage(1);}} className="w-full bg-transparent text-center text-sm font-bold text-amber-500 outline-none" />
                        <span className="text-slate-700 font-bold">-</span>
                        <input type="number" value={levelRange[1]} onChange={(e) => {setLevelRange([levelRange[0], parseInt(e.target.value) || 250]); setCurrentPage(1);}} className="w-full bg-transparent text-center text-sm font-bold text-amber-500 outline-none" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-slate-800/50">
              {!isItemsPage && (
                <button onClick={() => toggleSort('level')} className={`flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold border transition-all ${sortBy === 'level' ? 'bg-amber-500 text-slate-950 border-amber-500' : 'bg-slate-800 text-slate-400 border-slate-700'}`}>
                  <ArrowUpDown size={12} /> Niveau {sortBy === 'level' && (sortOrder === 'asc' ? '↑' : '↓')}
                </button>
              )}
              <button onClick={() => toggleSort('name')} className={`flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold border transition-all ${sortBy === 'name' ? 'bg-amber-500 text-slate-950 border-amber-500' : 'bg-slate-800 text-slate-400 border-slate-700'}`}>
                <ArrowUpDown size={12} /> Nom {sortBy === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
              </button>
              
              {!isItemsPage && (
                <>
                  <button onClick={() => {setShowOnlyFavs(!showOnlyFavs); setCurrentPage(1);}} className={`flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold border transition-all ${showOnlyFavs ? 'bg-yellow-500 text-slate-950' : 'bg-slate-800 text-slate-400 border-slate-700'}`}>
                    <Star size={12} fill={showOnlyFavs ? 'currentColor' : 'none'} /> Favoris ({favorites.length})
                  </button>
                  <button onClick={() => {setShowBaseComponents(!showBaseComponents); setCurrentPage(1);}} className={`flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold border transition-all ${showBaseComponents ? 'bg-blue-500 text-slate-950' : 'bg-slate-800 text-slate-400 border-slate-700'}`}>
                    <Package size={12} /> Composants
                  </button>
                </>
              )}

              <button onClick={handleReset} className="ml-auto flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold text-slate-500 hover:text-rose-400 transition-colors"><RotateCcw size={12} /> Réinitialiser</button>
            </div>
          </div>

          <div className={`${layoutMode === 'grid' && isItemsPage ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4' : 'space-y-6'}`}>
            {currentRecipes.map((recipe, idx) => (
              <RecipeItemRow 
                key={idx}
                recipe={recipe}
                activeSearchTerm={activeSearchTerm}
                isItemsPage={isItemsPage}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                getMatchingIngredients={getMatchingIngredients}
                viewMode={layoutMode}
              />
            ))}
          </div>

          {filteredRecipes.length === 0 && (
            <div className="text-center py-20 bg-slate-900/30 rounded-2xl border border-dashed border-slate-800">
              <Search size={48} className="mx-auto text-slate-700 mb-4" />
              <p className="text-slate-500 font-medium">Aucun résultat pour cette sélection.</p>
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 pt-10">
              <PaginationButton onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}><ChevronLeft size={20} /></PaginationButton>
              <div className="flex gap-1">
                {[...Array(totalPages)].map((_, i) => {
                  const page = i + 1;
                  if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
                    return (
                      <button key={page} onClick={() => handlePageChange(page)} className={`w-10 h-10 rounded-xl font-bold text-sm transition-all ${currentPage === page ? 'bg-amber-500 text-slate-950 shadow-lg' : 'bg-slate-900 text-slate-500 hover:bg-slate-800'}`}>{page}</button>
                    );
                  } else if (page === currentPage - 2 || page === currentPage + 2) {
                    return <span key={page} className="text-slate-700 self-center px-1">...</span>;
                  }
                  return null;
                })}
              </div>
              <PaginationButton onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}><ChevronRight size={20} /></PaginationButton>
            </div>
          )}
        </>
      ) : (
        <NPCGroupedView 
          recipes={recipes} 
          toggleFavorite={toggleFavorite} 
          favorites={favorites}
          selectedProf={selectedProf}
          onSelectProf={setSelectedProf}
          onNavigateToRecipe={navigateToRecipe}
          showOnlyFavs={showOnlyFavs}
          onToggleFavs={() => setShowOnlyFavs(!showOnlyFavs)}
        />
      )}
    </div>
  );
};

const PaginationButton = ({ children, onClick, disabled }: any) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 hover:bg-slate-800 disabled:opacity-20 transition-all"
  >
    {children}
  </button>
);

export default RecipeBrowser;