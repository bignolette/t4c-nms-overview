import { useState, useMemo, useEffect, memo, useCallback } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { wikiData, itemMonsterMap, ingredientProfessionMap } from '../data/wiki-data';
import { fastNormalize } from '../data/utils';
import type { RecipeItem } from '../data/wiki-data';
import CraftingTree from './CraftingTree';
import { 
  Search, Filter, ChevronLeft, ChevronRight, ArrowUpDown, Star, X, RotateCcw, Package, Zap, Skull, MapPin,
  Shield, Sword, Crown, Shirt, Footprints, Hand, Circle, Link2, GripHorizontal, Columns2, Medal,
  ArrowUpRight, ArrowRight, Wind
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
  'Apothicaire': 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  'Bijoutier': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  'Couturier': 'bg-pink-500/10 text-pink-500 border-pink-500/20',
  'Armurier': 'bg-orange-500/10 text-orange-500 border-orange-500/20',
  'Forgeron': 'bg-red-500/10 text-red-500 border-red-500/20',
  'Ebéniste': 'bg-amber-700/10 text-amber-600 border-amber-700/20',
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

/**
 * Ensures bonus values have exactly one '+' or '-' sign
 */
const formatBonus = (value: string | undefined) => {
  if (!value) return "";
  if (value.startsWith('+') || value.startsWith('-')) return value;
  return `+${value}`;
};

const StatBadge = ({ label, value, color }: { label: string, value: string, color: string }) => (
  <div className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 px-2.5 py-1 rounded-lg">
    <span className={`text-[10px] font-black uppercase tracking-tighter ${color}`}>{label}</span>
    <span className="text-xs font-bold text-slate-200">{value}</span>
  </div>
);

const RecipeItemRow = memo(({ recipe, activeSearchTerm, isItemsPage, favorites, toggleFavorite, getMatchingIngredients }: any) => {
  const [visibleCount, setVisibleCount] = useState(6);
  const matchingIngs = getMatchingIngredients(recipe, activeSearchTerm);
  const normalizedName = fastNormalize(recipe.name);
  const droppedBy = itemMonsterMap[normalizedName] || [];
  const usedBy = Array.from(ingredientProfessionMap[normalizedName] || []);
  
  const monsterLimit = 6;
  const monstersToDisplay = droppedBy.slice(0, visibleCount);

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
          <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter border shadow-lg ${PROF_COLORS[recipe.profession]}`}>
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
                
                {/* Prerequisites Section */}
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

                {/* Bonuses Section */}
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

                {/* Proc Effects Section */}
                {recipe.proc && (
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block flex items-center gap-2">
                      <Zap size={10} className="fill-current" />
                      Effet d'activation
                    </span>
                    <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-3 relative overflow-hidden group/proc">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 translate-x-[-100%] group-hover/proc:translate-x-[100%] transition-transform duration-1000" />
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-xs font-black text-blue-300 uppercase tracking-tight">{recipe.proc.effect}</span>
                        <span className="text-[10px] font-bold bg-blue-500/20 text-blue-200 px-1.5 py-0.5 rounded">{recipe.proc.chance}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-snug">{recipe.proc.description}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex flex-col gap-6 w-full md:w-64 lg:w-80 shrink-0">
              {(droppedBy.length > 0 || recipe.learnedFrom) && (
                <div className="space-y-3">
                  {recipe.learnedFrom && (
                    <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-3">
                      <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block mb-1">Apprentissage</span>
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                        <MapPin size={12} className="text-blue-500" />
                        <span>{recipe.learnedFrom}</span>
                      </div>
                      <div className="text-[10px] text-slate-500 ml-5 font-mono">{recipe.coordinates}</div>
                      {recipe.locationPrecision && (
                        <div className="text-[12px] text-slate-300 ml-5 mt-1.5 italic leading-snug border-l border-blue-500/30 pl-2">
                          {recipe.locationPrecision}
                        </div>
                      )}
                    </div>
                  )}

                  {droppedBy.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Droppé par</span>
                      <div className="flex flex-wrap gap-1.5">
                        {monstersToDisplay.map((m: any, i: number) => (
                          <Link 
                            key={i} 
                            to={`/wiki/bestiary?search=${encodeURIComponent(m.name)}`}
                            className="px-2 py-1 rounded bg-slate-800 text-slate-300 text-[10px] hover:bg-amber-500 hover:text-slate-900 transition-all font-medium border border-slate-700 whitespace-nowrap flex items-center gap-1"
                          >
                            <Skull size={10} className="text-amber-600/70" />
                            {m.name}
                          </Link>
                        ))}
                        {droppedBy.length > monsterLimit && (
                          <div className="flex gap-2 mt-1">
                            {visibleCount < droppedBy.length ? (
                              <>
                                <button 
                                  onClick={() => setVisibleCount(prev => Math.min(prev + 10, droppedBy.length))}
                                  className="text-amber-500 hover:text-amber-400 text-[10px] font-bold px-2 py-1 rounded bg-amber-500/5 border border-amber-500/20 transition-all"
                                >
                                  Afficher plus (+{droppedBy.length - visibleCount})
                                </button>
                                <button 
                                  onClick={() => setVisibleCount(droppedBy.length)}
                                  className="text-slate-400 hover:text-slate-200 text-[10px] font-bold px-2 py-1 rounded bg-slate-800 border border-slate-700 transition-all"
                                >
                                  Tout voir
                                </button>
                              </>
                            ) : (
                              <button 
                                onClick={() => setVisibleCount(monsterLimit)}
                                className="text-slate-500 hover:text-slate-300 text-[10px] font-bold px-2 py-1 rounded bg-slate-800 border border-slate-700 transition-all"
                              >
                                Réduire
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              {usedBy.length > 0 && (
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Utilisé par</span>
                  <div className="flex flex-wrap gap-1.5">
                    {usedBy.map((p: any, i: number) => (
                      <Link 
                        key={i} 
                        to={`/wiki/metiers?search=${encodeURIComponent(recipe.name)}`}
                        className={`px-2 py-1 rounded text-[10px] font-bold border transition-all ${PROF_COLORS[p] || 'bg-slate-800 text-slate-400 border-slate-700'} whitespace-nowrap`}
                      >
                        {p}
                      </Link>
                    ))}
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

const RecipeBrowser = ({ recipes, isItemsPage = false }: RecipeBrowserProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlSearch = searchParams.get('search') || '';

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
  const itemsPerPage = 8;

  // Get unique types for filtering
  const itemTypes = useMemo(() => {
    if (isItemsPage) return ITEM_TYPES;
    return ITEM_TYPES.filter(t => t !== 'Matériau');
  }, [isItemsPage]);

  // Handle URL parameter changes
  useEffect(() => {
    if (urlSearch !== activeSearchTerm) {
      setSearchInput(urlSearch);
      setActiveSearchTerm(urlSearch);
      setCurrentPage(1);
      if (urlSearch && !isItemsPage) setShowBaseComponents(true);
    }
  }, [urlSearch, isItemsPage]);

  // Load favorites from localStorage
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
    setSearchParams(prev => {
      prev.delete('search');
      return prev;
    });
    setCurrentPage(1);
  };

  const filteredRecipes = useMemo(() => {
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
  }, [recipes, activeSearchTerm, selectedProf, selectedType, levelRange, sortBy, sortOrder, showOnlyFavs, showBaseComponents, favorites, isItemsPage]);

  const getMatchingIngredients = (recipe: RecipeItem, search: string) => {
    if (!search || isItemsPage) return [];
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

  return (
    <div className="space-y-6">
      {/* Search & Filters */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
        
        <div className="space-y-6 relative z-10">
          {/* Top Row: Search */}
          <div className="w-full space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Recherche</label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 text-slate-500" size={20} />
                <input
                  type="text"
                  placeholder={isItemsPage ? "Rechercher un objet..." : "Ex: Potion, Lingot, Épée..."}
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl py-3 pl-11 pr-10 text-slate-100 focus:border-amber-500 outline-none transition-all focus:ring-4 focus:ring-amber-500/10"
                />
                {searchInput && (
                  <button 
                    onClick={handleClearSearch}
                    className="absolute right-3 top-3 text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
              <button 
                onClick={handleSearch}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-amber-500/20 active:scale-95"
              >
                Chercher
              </button>
            </div>
          </div>

          {/* Bottom Row: Filters */}
          <div className="flex flex-col lg:flex-row gap-6 items-end">
            {isItemsPage ? (
              <div className="w-full space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Filtrer par Type</label>
                <div className="flex flex-wrap gap-2">
                  {itemTypes.map(t => (
                    <button
                      key={t}
                      onClick={() => {setSelectedType(t); setCurrentPage(1);}}
                      className={`
                        px-4 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-2
                        ${selectedType === t 
                          ? (TYPE_COLORS[t] || 'bg-amber-500 text-slate-950 border-amber-500') 
                          : 'bg-slate-950 text-slate-500 border-slate-800 hover:border-slate-600 hover:text-slate-300'}
                      `}
                    >
                      <span className={`w-2 h-2 rounded-full ${TYPE_COLORS[t]?.split(' ')[0] || 'bg-slate-500'}`} />
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <div className="w-full lg:w-1/3 space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Artisanat</label>
                  <div className="relative">
                    <Filter className="absolute left-3 top-3 text-slate-500" size={20} />
                    <select
                      value={selectedProf}
                      onChange={(e) => {setSelectedProf(e.target.value); setCurrentPage(1);}}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl py-3 pl-11 pr-4 text-slate-100 focus:border-amber-500 outline-none appearance-none cursor-pointer"
                    >
                      {PROFESSIONS.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                </div>

                <div className="w-full lg:w-1/3 space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Type d'objet</label>
                  <div className="relative">
                    <Package className="absolute left-3 top-3 text-slate-500" size={20} />
                    <select
                      value={selectedType}
                      onChange={(e) => {setSelectedType(e.target.value); setCurrentPage(1);}}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl py-3 pl-11 pr-4 text-slate-100 focus:border-amber-500 outline-none appearance-none cursor-pointer"
                    >
                      {itemTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div className="w-full lg:w-1/3 space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Niveau</label>
                  <div className="flex items-center gap-2 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3">
                    <input 
                      type="number" value={levelRange[0]} 
                      onChange={(e) => {setLevelRange([parseInt(e.target.value) || 0, levelRange[1]]); setCurrentPage(1);}}
                      className="w-full bg-transparent text-center text-sm font-bold text-amber-500 outline-none"
                    />
                    <span className="text-slate-600">-</span>
                    <input 
                      type="number" value={levelRange[1]} 
                      onChange={(e) => {setLevelRange([levelRange[0], parseInt(e.target.value) || 250]); setCurrentPage(1);}}
                      className="w-full bg-transparent text-center text-sm font-bold text-amber-500 outline-none"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Sorting & Toggles */}
        <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-slate-800/50">
          {!isItemsPage && (
            <button 
              onClick={() => toggleSort('level')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border transition-all ${sortBy === 'level' ? 'bg-amber-500 text-slate-950 border-amber-500' : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'}`}
            >
              <ArrowUpDown size={14} /> Niveau {sortBy === 'level' && (sortOrder === 'asc' ? '↑' : '↓')}
            </button>
          )}
          <button 
            onClick={() => toggleSort('name')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border transition-all ${sortBy === 'name' ? 'bg-amber-500 text-slate-950 border-amber-500' : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'}`}
          >
            <ArrowUpDown size={14} /> Nom {sortBy === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
          </button>
          
          {!isItemsPage && (
            <>
              <button 
                onClick={() => {setShowOnlyFavs(!showOnlyFavs); setCurrentPage(1);}}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border transition-all ${showOnlyFavs ? 'bg-yellow-500 text-slate-950 border-yellow-500' : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'}`}
              >
                <Star size={14} fill={showOnlyFavs ? 'currentColor' : 'none'} /> Favoris ({favorites.length})
              </button>

              <button 
                onClick={() => {setShowBaseComponents(!showBaseComponents); setCurrentPage(1);}}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border transition-all ${showBaseComponents ? 'bg-blue-500 text-slate-950 border-blue-500' : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'}`}
              >
                <Package size={14} /> Composants de base
              </button>
            </>
          )}

          <button 
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border bg-slate-800 text-slate-400 border-slate-700 hover:text-rose-400 hover:border-rose-500/30 transition-all"
          >
            <RotateCcw size={14} /> Réinitialiser
          </button>

          <div className="flex-1"></div>
          <span className="text-xs text-slate-500 self-center">{filteredRecipes.length} objets</span>
        </div>
      </div>

      {/* Grid of Results */}
      <div className="space-y-6">
        {currentRecipes.map((recipe, idx) => (
          <RecipeItemRow 
            key={idx}
            recipe={recipe}
            activeSearchTerm={activeSearchTerm}
            isItemsPage={isItemsPage}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            getMatchingIngredients={getMatchingIngredients}
          />
        ))}

        {filteredRecipes.length === 0 && (
          <div className="text-center py-20 bg-slate-900/30 rounded-2xl border border-dashed border-slate-800">
            <Search size={48} className="mx-auto text-slate-700 mb-4" />
            <p className="text-slate-500 font-medium">Aucun résultat pour cette sélection.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 pt-10">
          <PaginationButton onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            <ChevronLeft size={20} />
          </PaginationButton>
          
          <div className="flex gap-1">
            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1;
              if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-xl font-bold text-sm transition-all ${currentPage === page ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-110' : 'bg-slate-900 text-slate-500 hover:bg-slate-800 hover:text-slate-200'}`}
                  >
                    {page}
                  </button>
                );
              } else if (page === currentPage - 2 || page === currentPage + 2) {
                return <span key={page} className="text-slate-700 self-center px-1">...</span>;
              }
              return null;
            })}
          </div>

          <PaginationButton onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            <ChevronRight size={20} />
          </PaginationButton>
        </div>
      )}
    </div>
  );
};

const PaginationButton = ({ children, onClick, disabled }: any) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 hover:bg-slate-800 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
  >
    {children}
  </button>
);

export default RecipeBrowser;
