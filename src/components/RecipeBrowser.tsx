import { useState, useMemo, useEffect, memo, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useData } from '../context/DataContext';
import { fastNormalize, formatStatValue, formatGold } from '../data/utils';
import type { RecipeItem } from '../data/types';
import CraftingTree from './CraftingTree';
import { createPortal } from 'react-dom';
import { 
  Search, ArrowUpDown, Star, X, RotateCcw, Package, MapPin,
  Shield, Sword, Crown, Shirt, Footprints, Hand, Circle, Link2, GripHorizontal, Columns2, Medal,
  ArrowUpRight, ArrowRight, Wind, Users, ArrowRightCircle, User, LayoutGrid, List, ChevronDown, ChevronUp, Tag,
  Skull, Info, Sparkles, Filter, Hammer, Plus, Trash2, ClipboardList, Square, CheckSquare, Check, ExternalLink,
  Copy
} from 'lucide-react';
import Pagination from './shared/Pagination';
import StatBadge from './shared/StatBadge';
import { useClipboard } from '../hooks/useClipboard';

interface RecipeBrowserProps {
  recipes: RecipeItem[];
  isItemsPage?: boolean;
}

const STAT_FILTERS = [
  { key: 'str', label: 'Force', color: 'text-rose-400' },
  { key: 'end', label: 'Endurance', color: 'text-orange-400' },
  { key: 'dex', label: 'Dextérité', color: 'text-emerald-400' },
  { key: 'int', label: 'Intelligence', color: 'text-sky-400' },
  { key: 'wis', label: 'Sagesse', color: 'text-purple-400' },
  { key: 'ca', label: 'CA', color: 'text-slate-300' },
  { key: 'luck', label: 'Chance', color: 'text-amber-400' },
];

const PROFESSIONS = ['Tous', 'Apothicaire', 'Bijoutier', 'Couturier', 'Armurier', 'Forgeron', 'Ebéniste'];
const ITEM_TYPES = [
  'Tous', 'Amulette', 'Anneau', 'Arc', 'Arme', 'Botte', 'Bouclier', 'Bracelet', 
  'Cape', 'Ceinture', 'Flèches', 'Focus', 'Gant', 'Heaume', 'Jambière', 
  'Orbe', 'Plastron', 'Robe', 'Matériau', 'Divers'
];
const DEFAULT_LEVEL_RANGE: [number, number] = [0, 250];

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

const PROF_COLORS: Record<string, string> = {
  'Apothicaire': 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  'Bijoutier': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  'Couturier': 'bg-pink-500/10 text-pink-500 border-pink-500/20',
  'Armurier': 'bg-orange-500/10 text-orange-500 border-orange-500/20',
  'Forgeron': 'bg-red-500/10 text-red-500 border-red-500/20',
  'Ebéniste': 'bg-amber-700/10 text-amber-600 border-amber-700/20',
};

const VIBRANT_PROF_COLORS: Record<string, string> = {
  'Apothicaire': 'bg-emerald-600 border-emerald-500 shadow-emerald-500/20',
  'Bijoutier': 'bg-blue-600 border-blue-500 shadow-blue-500/20',
  'Couturier': 'bg-pink-600 border-pink-500 shadow-pink-500/20',
  'Armurier': 'bg-orange-600 border-orange-500 shadow-orange-500/20',
  'Forgeron': 'bg-red-600 border-red-500 shadow-red-500/20',
  'Ebéniste': 'bg-amber-700 border-amber-600 shadow-amber-600/20',
  'Tous': 'bg-slate-100 text-slate-900 border-white shadow-white/10'
};

const useSourceIcon = () => {
    const { wikiData } = useData();
    const allItems = useMemo(() => wikiData.find(p => p.id === 'items')?.recipes || [], [wikiData]);

    const getSourceIcon = useCallback((type: string | undefined, name?: string) => {
        let resolvedType = type;
        if (!resolvedType && name) {
            const normalized = fastNormalize(name);
            const item = allItems.find(i => fastNormalize(i.name) === normalized);
            resolvedType = item?.type;
        }
        
        if (!resolvedType) return Package;
        switch (resolvedType) {
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
    }, [allItems]);

    return getSourceIcon;
};

const LocationList = ({ locations }: { locations: {label: string, coordinates: string}[] }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleLocs = showAll ? locations : locations.slice(0, 5);
  const hasMore = locations.length > 5;

  return (
    <div className="space-y-3">
      {visibleLocs.map((loc, idx) => {
        return (
          <div key={idx} className="flex flex-col gap-1">
            <span className="text-xs font-bold text-slate-200">{loc.label}</span>
            {loc.coordinates && (
              <Link 
                to={`/maps?type=location&name=${encodeURIComponent(loc.label)}`}
                className="flex items-center gap-2 text-xs text-amber-400 font-mono bg-amber-400/5 px-2 py-1 rounded border border-amber-400/10 w-fit hover:bg-amber-400/10 transition-colors group/loc"
              >
                <MapPin size={12} className="text-amber-500 group-hover/loc:scale-110 transition-transform" />
                <span className="font-black tracking-tight">{loc.coordinates}</span>
              </Link>
            )}
          </div>
        );
      })}
      {hasMore && (
        <button 
          onClick={(e) => { e.preventDefault(); setShowAll(!showAll); }}
          className="text-[10px] font-bold text-amber-500/70 hover:text-amber-400 uppercase tracking-widest text-left mt-2 pl-1"
        >
          {showAll ? "Voir moins" : `+ ${locations.length - 5} autres lieux`}
        </button>
      )}
    </div>
  );
};

const MonsterDropSection = ({ itemName }: { itemName: string }) => {
  const { itemMonsterMap } = useData();
  const monsters = itemMonsterMap[fastNormalize(itemName)] || [];
  const [showAllMonsters, setShowAllMonsters] = useState(false);
  
  if (monsters.length === 0) return null;

  const displayedMonsters = showAllMonsters ? monsters : monsters.slice(0, 10);

  return (
    <div className="bg-purple-500/5 border border-purple-500/20 rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest block">Butins de Monstres</span>
        <span className="text-[10px] font-black text-purple-500 bg-purple-500/10 px-2 py-0.5 rounded-full">{monsters.length} sources</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {displayedMonsters.map((m, midx) => (
          <Link 
            key={midx} 
            to={`/wiki/bestiary?search=${encodeURIComponent(m.name)}`}
            className="flex items-center gap-2 bg-slate-900/50 border border-slate-700/50 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 hover:border-purple-500/50 hover:text-purple-300 transition-all group/m"
          >
            <Skull size={12} className="text-purple-500/50 group-hover/m:text-purple-500" />
            <span className="group-hover/m:underline decoration-[#a335ee] underline-offset-4 decoration-2">{m.name}</span>
          </Link>
        ))}
      </div>
      {monsters.length > 10 && (
        <button 
          onClick={() => setShowAllMonsters(!showAllMonsters)}
          className="text-[10px] font-black text-slate-500 hover:text-amber-500 uppercase tracking-widest mt-4 w-full py-2 border-t border-purple-500/10 transition-colors flex items-center justify-center gap-2"
        >
          {showAllMonsters ? (
            <>Voir moins <ChevronUp size={12} /></>
          ) : (
            <>+{monsters.length - 10} autres... <ChevronDown size={12} /></>
          )}
        </button>
      )}
    </div>
  );
};

const ItemDetailModal = ({ recipe, onClose, toggleFavorite, favorites, navigateToRecipe, onAddProject }: any) => {
  const getSourceIcon = useSourceIcon();
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={onClose}></div>
      <div className="bg-slate-900 border border-slate-800 w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl relative overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
        <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/50 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-800 rounded-xl text-amber-500 border border-slate-700/50">
              {(() => {
                const Icon = getSourceIcon(recipe.type, recipe.name);
                return <Icon size={24} />;
              })()}
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-100 uppercase tracking-tighter italic">{recipe.name}</h3>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{recipe.type || recipe.typeSource || 'Objet'}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => toggleFavorite(recipe.name)}
              className={`p-2 rounded-xl border transition-all ${favorites.includes(recipe.name) ? 'bg-yellow-500 border-yellow-400 text-slate-950' : 'bg-slate-800 border-slate-700 text-slate-500 hover:text-yellow-500'}`}
            >
              <Star size={20} fill={favorites.includes(recipe.name) ? 'currentColor' : 'none'} />
            </button>
            <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-full text-slate-500 hover:text-white transition-all"><X size={20} /></button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          <RecipeItemRow 
            recipe={recipe} 
            isItemsPage={true} 
            favorites={favorites} 
            toggleFavorite={toggleFavorite} 
            viewMode="list" 
            hideExternalLink={true}
            onNavigateToRecipe={navigateToRecipe}
            onAddProject={onAddProject}
          />
        </div>
      </div>
    </div>,
    document.body
  );
};

export const RecipeItemRow = memo(({ recipe, activeSearchTerm, isItemsPage, favorites, toggleFavorite, getMatchingIngredients, viewMode, hideExternalLink, onNavigateToRecipe, onAddProject, hideProjectButton }: any) => {
  const { itemMonsterMap, itemUsageMap, wikiData, plantsData, treesData, depositsData, npcsData } = useData();
  const getSourceIcon = useSourceIcon();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const matchingIngs = getMatchingIngredients ? getMatchingIngredients(recipe, activeSearchTerm) : [];
  const { copied, copy } = useClipboard();

  const npcInfo = useMemo(() => {
    if (!recipe.learnedFrom) return null;
    const norm = fastNormalize(recipe.learnedFrom);
    return npcsData.find(n => fastNormalize(n.name) === norm);
  }, [recipe.learnedFrom, npcsData]);

  const handleInstantiate = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddProject) {
        onAddProject(recipe.name);
    }
  };
  
  const allRecipes = useMemo(() => wikiData.find(p => p.id === 'metiers')?.recipes || [], [wikiData]);
  
  const isHarvestResource = useMemo(() => {
    const norm = fastNormalize(recipe.name);
    return plantsData.some((p: RecipeItem) => fastNormalize(p.name) === norm) ||
           treesData.some((t: RecipeItem) => fastNormalize(t.name) === norm) ||
           depositsData.some((d: RecipeItem) => fastNormalize(d.name) === norm);
  }, [recipe.name, plantsData, treesData, depositsData]);

  const craftingRecipe = useMemo(() => {
    if (isHarvestResource) return null;
    return allRecipes.find(r => 
      fastNormalize(r.name) === fastNormalize(recipe.name) && 
      r.ingredients && 
      r.ingredients.length > 0
    );
  }, [allRecipes, recipe.name, isHarvestResource]);

  const isCraftable = !!craftingRecipe;
  const usages = useMemo(() => itemUsageMap[fastNormalize(recipe.name)] || [], [recipe.name, itemUsageMap]);

  if (viewMode === 'grid' && isItemsPage) {
    return (
      <>
        <motion.div 
          layout
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -5, scale: 1.02 }}
          onClick={() => setIsModalOpen(true)}
          className="glass-card rounded-2xl p-4 flex flex-col gap-3 hover:border-amber-500/40 transition-all duration-300 group cursor-pointer relative overflow-hidden h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-slate-900/80 p-1.5 rounded-lg border border-slate-700 backdrop-blur-md">
              <Info size={14} className="text-amber-500" />
            </div>
          </div>

          <div className="flex items-start justify-between relative z-10">
            <div className="p-3 bg-slate-950/80 rounded-2xl text-amber-500 border border-slate-800 shadow-inner group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-500">
              {(() => {
                const Icon = getSourceIcon(recipe.type, recipe.name);
                return <Icon size={20} />;
              })()}
            </div>
            <button 
              onClick={(e) => { e.stopPropagation(); toggleFavorite(recipe.name); }}
              className={`p-2 rounded-xl border backdrop-blur-md transition-all duration-300 shadow-xl ${favorites.includes(recipe.name) ? 'bg-amber-500 border-amber-400 text-slate-950 scale-110' : 'bg-slate-900/80 border-slate-700 text-slate-500 hover:text-amber-500'}`}
            >
              <Star size={14} fill={favorites.includes(recipe.name) ? 'currentColor' : 'none'} />
            </button>
          </div>
          
          <div className="relative z-10">
            <h3 className="font-black text-slate-100 group-hover:text-amber-400 transition-colors text-[15px] leading-tight flex items-center gap-2 overflow-hidden min-h-[40px]">
              <span className="flex-1">{recipe.name}</span>
              <button 
                onClick={(e) => { e.stopPropagation(); copy(recipe.name); }}
                className="p-1.5 hover:bg-white/10 rounded-lg transition-all shrink-0 bg-slate-900/50 md:bg-transparent"
                title="Copier le nom"
              >
                {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} className="text-amber-500/70 md:text-slate-500 md:group-hover:text-amber-500" />}
              </button>
              {isCraftable && (
                <span title="Cet objet peut être fabriqué" className="flex items-center justify-center bg-amber-500/20 text-amber-500 p-1 rounded-full border border-amber-500/30">
                  <Hammer size={10} />
                </span>
              )}
            </h3>
            <div className="flex flex-col gap-2 mt-2">
              {recipe.typeSource ? (
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 uppercase font-black tracking-widest bg-emerald-500/5 px-2 py-1 rounded-lg w-fit border border-emerald-500/10">
                  <Tag size={10} />
                  <span>{recipe.typeSource} {recipe.locations?.[0] ? `• ${recipe.locations[0].label}` : ''}</span>
                </div>
              ) : recipe.type && (
                <div className="flex items-center gap-1.5 text-[10px] text-slate-500 uppercase font-black tracking-widest bg-slate-950 px-2 py-1 rounded-lg w-fit border border-slate-800">
                  <Tag size={10} className="text-slate-600" />
                  <span>{recipe.type} {recipe.mains ? `(${recipe.mains})` : ''}</span>
                </div>
              )}

              {recipe.buyPrice && (
                <div className="flex items-center gap-1.5 text-[10px] text-amber-500 uppercase font-black tracking-widest bg-amber-500/5 px-2 py-1 rounded-lg w-fit border border-amber-500/10">
                  <span>{formatGold(recipe.buyPrice)}</span>
                </div>
              )}

              {recipe.obtention && recipe.obtention.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-1">
                  {recipe.obtention.map((source: string, sidx: number) => (
                    <div key={sidx} className="flex items-center gap-1.5 text-[9px] text-emerald-400 uppercase font-black tracking-widest bg-emerald-500/5 px-1.5 py-0.5 rounded border border-emerald-500/10">
                      <span>{source}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Monster Drops in Grid View */}
              {(() => {
                const monsters = itemMonsterMap[fastNormalize(recipe.name)] || [];
                if (monsters.length === 0) return null;
                return (
                  <div className="flex items-center gap-2 overflow-hidden bg-purple-500/5 px-2 py-1.5 rounded-xl border border-purple-500/10">
                    <Skull size={12} fill="#a335ee" className="fill-purple-500/20 shrink-0" />
                    <div className="flex gap-1.5 truncate">
                      {monsters.slice(0, 1).map((m: any, i: number) => (
                        <span key={i} className="text-[10px] font-bold text-purple-300 uppercase tracking-widest whitespace-nowrap">
                          {m.name}
                        </span>
                      ))}
                      {monsters.length > 1 && <span className="text-[10px] text-slate-500 font-black">+{monsters.length - 1}</span>}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          {(recipe.damage || recipe.degats) && (
            <div className="flex items-center justify-between px-2 py-1 bg-rose-500/10 rounded-lg border border-rose-500/20 relative z-10">
              <div className="flex items-center gap-1.5">
                <Sword size={10} className="text-rose-500" />
                <span className="text-[10px] font-black text-slate-100 italic">
                  {recipe.damage ? `${recipe.damage.min}-${recipe.damage.max}` : recipe.degats}
                </span>
              </div>
              <span className="text-[9px] font-bold text-rose-500/70">
                Avg: {(() => {
                  if (recipe.damage) return ((parseInt(recipe.damage.min) + parseInt(recipe.damage.max)) / 2).toFixed(1);
                  if (recipe.degats && recipe.degats.includes('-')) {
                    const [min, max] = recipe.degats.split('-').map((v: string) => parseInt(v.trim()));
                    if (!isNaN(min) && !isNaN(max)) return ((min + max) / 2).toFixed(1);
                  }
                  return "N/A";
                })()}
              </span>
            </div>
          )}

          <div className="flex flex-wrap gap-1.5 mt-auto relative z-10">
            {recipe.bonuses?.ca && <StatBadge label="CA" value={formatStatValue(recipe.bonuses.ca)} type="ca" />}
            {recipe.bonuses?.str && <StatBadge label="FOR" value={formatStatValue(recipe.bonuses.str)} type="str" />}
            {recipe.bonuses?.end && <StatBadge label="END" value={formatStatValue(recipe.bonuses.end)} type="end" />}
            {recipe.bonuses?.dex && <StatBadge label="DEX" value={formatStatValue(recipe.bonuses.dex)} type="dex" />}
            {recipe.bonuses?.int && <StatBadge label="INT" value={formatStatValue(recipe.bonuses.int)} type="int" />}
            {recipe.bonuses?.wis && <StatBadge label="SAG" value={formatStatValue(recipe.bonuses.wis)} type="wis" />}
            {recipe.bonuses?.luck && <StatBadge label="CHA" value={formatStatValue(recipe.bonuses.luck)} type="luck" />}
          </div>

          {isCraftable && (
            <button 
              onClick={handleInstantiate}
              className="mt-3 w-full py-2.5 bg-amber-500/10 hover:bg-amber-500 text-amber-500 hover:text-slate-950 border border-amber-500/20 hover:border-amber-500 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 group/btn relative z-10 shadow-lg shadow-amber-950/20"
            >
              <Plus size={14} className="group-hover/btn:scale-110 transition-transform" />
              Projet
            </button>
          )}
        </motion.div>
        {isModalOpen && (
          <ItemDetailModal 
            recipe={recipe} 
            onClose={() => setIsModalOpen(false)} 
            toggleFavorite={toggleFavorite} 
            favorites={favorites} 
            navigateToRecipe={onNavigateToRecipe}
            onAddProject={onAddProject}
          />
        )}
      </>
    );
  }

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="group relative"
    >
      {!hideExternalLink && (
        <div className="absolute -top-3 right-6 z-10 flex flex-wrap items-center gap-2 justify-end max-w-[80%]">
          {matchingIngs.length > 0 && (
            <div className="hidden md:flex items-center gap-1 bg-slate-950 border border-amber-500/30 px-3 py-1 rounded-full text-[10px] text-amber-500 font-bold shadow-xl animate-in fade-in zoom-in duration-300">
              <Search size={10} />
              <span>Contient: {matchingIngs.join(', ')}</span>
            </div>
          )}
          {!isItemsPage && (
            <div className="flex items-center gap-3">
              {isCraftable && (
                <button 
                  onClick={handleInstantiate}
                  className="flex items-center gap-2 px-4 py-2 bg-amber-500/10 hover:bg-amber-500 text-amber-500 hover:text-slate-950 border border-amber-500/20 hover:border-amber-500 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
                >
                  <Plus size={14} />
                  Ajouter aux projets
                </button>
              )}
              <button 
                onClick={() => toggleFavorite(recipe.name)}
                className={`p-2 rounded-full border shadow-lg transition-all ${favorites.includes(recipe.name) ? 'bg-yellow-500 border-yellow-400 text-slate-950 scale-110' : 'bg-slate-800 border-slate-700 text-slate-500 hover:text-yellow-500'}`}
              >
                <Star size={16} fill={favorites.includes(recipe.name) ? 'currentColor' : 'none'} />
              </button>
            </div>
          )}
          {recipe.zones && recipe.zones.map((zone: string) => (
            <span key={zone} className="flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter border shadow-lg bg-indigo-500/10 text-indigo-400 border-indigo-500/20">
              <MapPin size={10} /> {zone}
            </span>
          ))}
          {isItemsPage && (recipe.sources ? (
            recipe.sources.slice(0, 1).map((s: any, i: number) => (
              <span key={i} className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter border shadow-lg bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                <Tag size={10} className="opacity-70" /> {s.typeSource}
              </span>
            ))
          ) : (recipe.typeSource || recipe.type) && (
            <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter border shadow-lg ${recipe.typeSource ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : (TYPE_COLORS[recipe.type as string] || 'bg-slate-800 text-slate-400')}`}>
              <Tag size={10} className="opacity-70" /> {recipe.typeSource || recipe.type}
            </span>
          ))}
          {!isItemsPage && recipe.profession && (
            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter border shadow-lg ${PROF_COLORS[recipe.profession]?.replace('text-', 'text-opacity-90 text-') || 'bg-slate-800 text-slate-400'}`}>
              {recipe.profession} • LVL {recipe.level}
            </span>
          )}
        </div>
      )}
      
      {isItemsPage ? (
        <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 shadow-xl hover:border-amber-500/50 hover:shadow-amber-500/10 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="p-2 bg-slate-800 rounded-xl text-amber-500 border border-slate-700/50">
                  {(() => {
                    const Icon = getSourceIcon(recipe.type, recipe.name);
                    return <Icon size={24} />;
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-100 mb-1 flex flex-wrap items-center gap-3">
                    <span>{recipe.name}</span>
                    <button 
                      onClick={() => copy(recipe.name)}
                      className="p-2 hover:bg-slate-800 rounded-xl transition-all bg-slate-900 md:bg-transparent text-amber-500/70 md:text-slate-500 md:hover:text-amber-500"
                      title="Copier le nom"
                    >
                      {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
                    </button>
                    {isItemsPage ? (
                      isCraftable && (
                        <Link 
                          to={`/wiki/metiers?search=${encodeURIComponent(recipe.name)}`}
                          className="flex items-center gap-1 bg-amber-500/20 text-amber-500 px-2 py-0.5 rounded-full border border-amber-500/30 text-[10px] uppercase font-bold tracking-wider hover:bg-amber-500/30 transition-colors group/craft"
                        >
                          <Hammer size={12} /> CRAFTABLE
                          <ArrowUpRight size={10} className="opacity-50 group-hover/craft:opacity-100 transition-opacity" />
                        </Link>
                      )
                    ) : (
                      isCraftable ? (
                        <div className="flex items-center gap-3">
                          <span title="Cet objet peut être fabriqué" className="flex items-center gap-1 bg-amber-500/20 text-amber-500 px-2 py-0.5 rounded-full border border-amber-500/30 text-[10px] uppercase font-bold tracking-wider">
                            <Hammer size={12} /> CRAFTABLE
                          </span>
                          <button 
                            onClick={handleInstantiate}
                            className="flex items-center gap-2 px-6 py-2.5 bg-amber-500 text-slate-950 hover:bg-amber-400 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] text-xs font-black uppercase tracking-widest transition-all active:scale-95"
                          >
                            <Plus size={16} /> Ajouter aux projets
                          </button>
                        </div>
                      ) : (
                        <span title={isHarvestResource ? "Ceci est une ressource récoltable" : "Ceci est un composant de base"} className={`flex items-center gap-1 ${isHarvestResource ? 'bg-emerald-500/20 text-emerald-500' : 'bg-slate-700/20 text-slate-400'} px-2 py-0.5 rounded-full border border-current opacity-70 text-[10px] uppercase font-bold tracking-wider`}>
                          <Package size={12} /> {isHarvestResource ? 'RESSOURCE DE RÉCOLTE' : 'COMPOSANT DE BASE'}
                        </span>
                      )
                    )}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {recipe.sources && recipe.sources.length > 0 ? (
                      recipe.sources.map((s: any, i: number) => (
                        <div key={i} className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 w-fit">
                          <Tag size={10} className="text-emerald-500" />
                          <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-tighter">{s.typeSource}</span>
                        </div>
                      ))
                    ) : recipe.typeSource ? (
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 w-fit">
                        <Tag size={10} className="text-emerald-500" />
                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-tighter">{recipe.typeSource}</span>
                      </div>
                    ) : null}
                    {recipe.type && !recipe.sources && (
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-800 border border-slate-700 w-fit">
                        <Tag size={10} className="text-slate-500" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                          {recipe.type} {recipe.mains ? `(${recipe.mains})` : ''}
                        </span>
                      </div>
                    )}
                    {recipe.buyPrice && (
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 w-fit">
                        <span className="text-[10px] font-bold text-amber-500 uppercase tracking-tighter">{formatGold(recipe.buyPrice)}</span>
                      </div>
                    )}
                    {recipe.obtention && recipe.obtention.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {recipe.obtention.map((source: string, sidx: number) => (
                          <div key={sidx} className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 w-fit">
                            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-tighter">{source}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {(recipe.damage || recipe.degats) && (
                <div className="mb-6 p-4 bg-rose-500/5 border border-rose-500/10 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-rose-500/20 rounded-lg text-rose-500">
                      <Sword size={16} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-rose-500/70 uppercase tracking-widest block">Dégâts Physiques</span>
                      <div className="flex items-baseline gap-1">
                        {recipe.damage ? (
                          <>
                            <span className="text-lg font-black text-slate-100 italic">{recipe.damage.min}</span>
                            <span className="text-xs font-bold text-slate-500 italic">-</span>
                            <span className="text-lg font-black text-slate-100 italic">{recipe.damage.max}</span>
                          </>
                        ) : (
                          <span className="text-lg font-black text-slate-100 italic">{recipe.degats}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest block">Moyenne</span>
                    <span className="text-sm font-black text-slate-400">
                      {(() => {
                        if (recipe.damage) {
                          return ((parseInt(recipe.damage.min) + parseInt(recipe.damage.max)) / 2).toFixed(1);
                        }
                        if (recipe.degats && recipe.degats.includes('-')) {
                          const [min, max] = recipe.degats.split('-').map((v: string) => parseInt(v.trim()));
                          if (!isNaN(min) && !isNaN(max)) return ((min + max) / 2).toFixed(1);
                        }
                        return "N/A";
                      })()}
                    </span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {recipe.description && (
                    <div className="space-y-2">
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block flex items-center gap-2">
                        <Info size={12} /> Description
                      </span>
                      <p className="text-sm text-slate-400 leading-relaxed bg-slate-950/30 p-3 rounded-xl border border-slate-800">
                        {recipe.description}
                      </p>
                    </div>
                  )}
                  
                  <div className="space-y-3">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">Prérequis</span>
                    {recipe.prerequisites && Object.values(recipe.prerequisites).some(v => v) ? (
                      <div className="flex flex-wrap gap-2">
                        {recipe.prerequisites.str && <StatBadge label="FOR" value={recipe.prerequisites.str} type="str" />}
                        {recipe.prerequisites.end && <StatBadge label="END" value={recipe.prerequisites.end} type="end" />}
                        {recipe.prerequisites.dex && <StatBadge label="DEX" value={recipe.prerequisites.dex} type="dex" />}
                        {recipe.prerequisites.int && <StatBadge label="INT" value={recipe.prerequisites.int} type="int" />}
                        {recipe.prerequisites.wis && <StatBadge label="SAG" value={recipe.prerequisites.wis} type="wis" />}
                      </div>
                    ) : (
                      <span className="text-xs text-slate-600 italic">Pas de pré-requis</span>
                    )}
                  </div>

                  {(recipe.bonuses && Object.values(recipe.bonuses).some(v => v)) || recipe.secondary ? (
                    <div className="space-y-3">
                      <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest block flex items-center gap-2">
                        <Sparkles size={12} /> Bonus & Caractéristiques
                      </span>
                      <div className="flex flex-wrap gap-2 bg-emerald-500/5 p-3 rounded-xl border border-emerald-500/10">
                        {recipe.bonuses?.ca && <StatBadge label="CA" value={formatStatValue(recipe.bonuses.ca)} type="ca" />}
                        {recipe.bonuses?.str && <StatBadge label="FOR" value={formatStatValue(recipe.bonuses.str)} type="str" />}
                        {recipe.bonuses?.end && <StatBadge label="END" value={formatStatValue(recipe.bonuses.end)} type="end" />}
                        {recipe.bonuses?.dex && <StatBadge label="DEX" value={formatStatValue(recipe.bonuses.dex)} type="dex" />}
                        {recipe.bonuses?.int && <StatBadge label="INT" value={formatStatValue(recipe.bonuses.int)} type="int" />}
                        {recipe.bonuses?.wis && <StatBadge label="SAG" value={formatStatValue(recipe.bonuses.wis)} type="wis" />}
                        {recipe.bonuses?.luck && <StatBadge label="CHA" value={formatStatValue(recipe.bonuses.luck)} type="luck" />}
                        
                        {recipe.secondary && Object.entries(recipe.secondary).map(([label, value]) => (
                          <StatBadge key={label} label={label} value={formatStatValue(value as string)} type="secondary" />
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className="space-y-6">
                  {/* Inverse lookup: Where is this item used? */}
                  {usages.length > 0 && (
                    <div className="space-y-3">
                      <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest block flex items-center gap-2">
                        <Hammer size={12} /> Utilisé pour fabriquer
                      </span>
                      <div className="grid grid-cols-1 gap-2">
                        {usages.map((u, i) => (
                          <button
                            key={i}
                            onClick={() => onNavigateToRecipe ? onNavigateToRecipe(u.name) : null}
                            className="flex items-center justify-between p-2 rounded-lg bg-amber-500/5 border border-amber-500/10 hover:border-amber-500/30 transition-all group/u text-left"
                          >
                            <span className="text-xs font-bold text-slate-300 group-hover/u:text-amber-400">{u.name}</span>
                            <ArrowRightCircle size={12} className="text-slate-600 group-hover/u:text-amber-500" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {recipe.proc && (
                    <div className="space-y-3">
                      <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest block flex items-center gap-2">
                        <Wind size={12} /> Effet Spécial (Proc)
                      </span>
                      <div className="bg-sky-500/5 border border-sky-500/20 rounded-xl p-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-black text-sky-300 uppercase italic">{recipe.proc.effect}</span>
                          <span className="text-[10px] font-bold text-sky-500 bg-sky-500/10 px-1.5 py-0.5 rounded">{recipe.proc.chance}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 italic">{recipe.proc.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-6 w-full md:w-64 lg:w-80 shrink-0 border-t md:border-t-0 md:border-l border-slate-800/50 pt-6 md:pt-0 md:pl-6">
              {recipe.learnedFrom && (
                <div className="space-y-3">
                  <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-3">
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block mb-2">Enseignement</span>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                      <User size={12} className="text-blue-500" />
                      {npcInfo ? (
                        <Link 
                          to={`/wiki/npcs?search=${encodeURIComponent(npcInfo.name)}`}
                          className="hover:text-amber-500 transition-colors underline decoration-blue-500/30 underline-offset-4"
                        >
                          {npcInfo.name}
                        </Link>
                      ) : (
                        <span>{recipe.learnedFrom}</span>
                      )}
                    </div>
                    {(recipe.coordinates || npcInfo?.coordinates) && (
                      <Link 
                        to={`/maps?type=npc&name=${encodeURIComponent(recipe.learnedFrom)}`}
                        className="flex items-center gap-2 text-xs text-amber-400 mt-2 font-mono bg-amber-400/5 px-2 py-1 rounded border border-amber-400/10 w-fit hover:bg-amber-400/10 transition-colors group/npc"
                      >
                        <MapPin size={14} className="text-amber-500 group-hover/npc:scale-110 transition-transform" />
                        <span className="font-black tracking-tight">{recipe.coordinates || npcInfo?.coordinates}</span>
                      </Link>
                    )}
                  </div>
                </div>
              )}

              {recipe.sources && recipe.sources.length > 0 && (
                <div className="space-y-3">
                  {recipe.sources
                    .filter((source: any) => !itemMonsterMap[fastNormalize(recipe.name)]?.some(m => m.name === source.typeSource))
                    .map((source: any, idx: number) => (
                      <div key={idx} className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-3">
                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block mb-2">{source.typeSource}</span>
                        <LocationList locations={source.locations} />
                      </div>
                    ))
                  }
                </div>
              )}

              {recipe.locations && recipe.locations.length > 0 && !recipe.sources && (
                <div className="space-y-3">
                  <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-3">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block mb-2">Gisements / Récoltes</span>
                    <LocationList locations={recipe.locations} />
                  </div>
                </div>
              )}

              {/* Unified Monster Drops section */}
              <MonsterDropSection itemName={recipe.name} />
            </div>
          </div>
        </div>
      ) : (
        <CraftingTree recipes={[recipe]} hidePlanner={hideProjectButton} />
      )}
    </motion.div>
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
  onToggleFavs,
  selectedZone,
  onSelectZone,
  allZones,
  initialNpcName
}: { 
  recipes: RecipeItem[], 
  toggleFavorite: (name: string) => void, 
  favorites: string[],
  selectedProf: string,
  onSelectProf: (p: string) => void,
  onNavigateToRecipe: (name: string) => void,
  showOnlyFavs: boolean,
  onToggleFavs: () => void,
  selectedZone: string,
  onSelectZone: (z: string) => void,
  allZones: string[],
  initialNpcName?: string | null
}) => {
  const { npcsData } = useData();
  const [npcSearch, setNpcSearch] = useState('');
  const [focusedArtisan, setFocusedArtisan] = useState<string | null>(null);

  // Group recipes by artisan
  const artisans = useMemo(() => {
    const map: Record<string, {
        id: string;
        name: string;
        profession: string;
        zone: string;
        coordinates?: string;
        recipes: RecipeItem[];
        minLvl: number;
        maxLvl: number;
    }> = {};

    recipes.forEach(r => {
        if (!r.profession) return;
        if (showOnlyFavs && !favorites.includes(r.name)) return;
        
        let npcName = r.learnedFrom || 'Apprentissage auto';
        let officialZone = (r.zones && r.zones.length > 0) ? r.zones[0] : 'Inconnu';
        let officialCoords = r.coordinates;

        if (r.learnedFrom) {
            const norm = fastNormalize(r.learnedFrom);
            const found = npcsData.find(n => fastNormalize(n.name) === norm);
            if (found) {
                npcName = found.name;
                officialZone = found.zone;
                officialCoords = found.coordinates || officialCoords;
            }
        }

        const artisanId = `${npcName}-${r.profession}`;
        if (!map[artisanId]) {
            map[artisanId] = {
                id: artisanId,
                name: npcName,
                profession: r.profession,
                zone: officialZone,
                coordinates: officialCoords,
                recipes: [],
                minLvl: Infinity,
                maxLvl: -Infinity
            };
        }
        map[artisanId].recipes.push(r);
        map[artisanId].minLvl = Math.min(map[artisanId].minLvl, r.level || 0);
        map[artisanId].maxLvl = Math.max(map[artisanId].maxLvl, r.level || 0);
    });

    return Object.values(map).filter(a => {
        const matchesProf = selectedProf === 'Tous' || a.profession === selectedProf;
        const matchesZone = selectedZone === 'Toutes' || a.zone === selectedZone;
        const matchesSearch = !npcSearch || fastNormalize(a.name).includes(fastNormalize(npcSearch));
        return matchesProf && matchesZone && matchesSearch;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }, [recipes, selectedProf, selectedZone, npcSearch, showOnlyFavs, favorites, npcsData]);

  // Handle initial NPC selection
  useEffect(() => {
    if (initialNpcName && artisans.length > 0 && !focusedArtisan) {
        const norm = fastNormalize(initialNpcName);
        const artisan = artisans.find(a => fastNormalize(a.name).includes(norm));
        if (artisan) {
            setFocusedArtisan(artisan.id);
            setNpcSearch(artisan.name);
        }
    }
  }, [initialNpcName, artisans, focusedArtisan]);

  const selectedArtisanData = focusedArtisan ? artisans.find(a => a.id === focusedArtisan) : null;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Search & Tabs Toolbar */}
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-4 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-amber-500 transition-colors" size={18} />
            <input
              type="text"
              placeholder="Rechercher un maître artisan..."
              value={npcSearch}
              onChange={(e) => { setNpcSearch(e.target.value); setFocusedArtisan(null); }}
              className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl py-4 pl-12 pr-12 text-slate-100 focus:border-amber-500/50 outline-none transition-all font-bold"
            />
            {npcSearch && (
              <button onClick={() => setNpcSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-all"><X size={18} /></button>
            )}
          </div>

          <div className="lg:col-span-8 flex flex-wrap gap-2 justify-end">
            <div className="flex bg-slate-900/50 p-1.5 rounded-2xl border border-slate-800 backdrop-blur-xl">
              <div className="flex flex-wrap gap-1.5 justify-center md:justify-end">
                {PROFESSIONS.map(p => {
                  const isSelected = selectedProf === p;
                  return (
                    <button
                      key={p}
                      onClick={() => { onSelectProf(p); setFocusedArtisan(null); }}
                      className={`px-4 py-2.5 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 border ${
                        isSelected 
                          ? (p === 'Tous' ? 'bg-amber-500 border-amber-400 text-slate-950 shadow-lg' : `${VIBRANT_PROF_COLORS[p] || 'bg-amber-500 text-slate-950'} text-white shadow-lg`) 
                          : 'bg-slate-950 text-slate-500 border-slate-800 hover:border-slate-600 hover:text-slate-200'
                      }`}
                    >
                      {p}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 bg-slate-900/30 p-4 rounded-2xl border border-slate-800/50">
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest mr-2">
            <Filter size={14} /> Filtres :
          </div>
          
          <select
            value={selectedZone}
            onChange={(e) => { onSelectZone(e.target.value); setFocusedArtisan(null); }}
            className="bg-slate-950 border border-slate-800 text-slate-300 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl focus:border-amber-500 outline-none cursor-pointer"
          >
            {allZones.map(z => <option key={z} value={z}>{z === 'Toutes' ? 'Toutes les Zones' : z}</option>)}
          </select>

          <button 
            onClick={onToggleFavs}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${
              showOnlyFavs 
                ? 'bg-yellow-500 border-yellow-400 text-slate-950 shadow-lg' 
                : 'bg-slate-950 text-slate-500 border border-slate-800 hover:border-yellow-500/50 hover:text-yellow-500'
            }`}
          >
            <Star size={14} fill={showOnlyFavs ? 'currentColor' : 'none'} />
            Favoris
          </button>

          <div className="ml-auto text-[10px] font-black text-slate-600 uppercase tracking-tighter">
            {artisans.length} Maîtres trouvés
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Artisans Grid */}
        <div className={`${focusedArtisan ? 'lg:col-span-4' : 'lg:col-span-12'} grid grid-cols-1 md:grid-cols-2 ${focusedArtisan ? 'xl:grid-cols-1' : 'xl:grid-cols-3'} gap-4 transition-all duration-500`}>
          <AnimatePresence mode="popLayout">
            {artisans.map(a => {
              const isActive = focusedArtisan === a.id;
              return (
                <motion.div
                  layout
                  key={a.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={() => setFocusedArtisan(isActive ? null : a.id)}
                  className={`group glass-card rounded-2xl p-5 border cursor-pointer transition-all duration-300 relative overflow-hidden ${
                    isActive ? 'border-amber-500 ring-4 ring-amber-500/10 bg-slate-800/50' : 'border-slate-800 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-3 flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${VIBRANT_PROF_COLORS[a.profession]?.split(' ')[0] || 'bg-slate-500'}`} />
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{a.profession}</span>
                      </div>
                      <h3 className="text-lg font-black text-slate-100 uppercase italic tracking-tighter truncate group-hover:text-amber-400 transition-colors">
                        {a.name}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[9px] font-black uppercase">
                          <MapPin size={10} /> {a.zone}
                        </span>
                        {a.coordinates && (
                          <span className="px-2 py-0.5 rounded-lg bg-amber-500/10 text-amber-500 border border-amber-500/20 text-[9px] font-mono font-black">
                            {a.coordinates}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="bg-slate-950 p-2 rounded-xl border border-slate-800 text-center min-w-[60px]">
                        <div className="text-lg font-black text-amber-500 leading-none">{a.recipes.length}</div>
                        <div className="text-[7px] font-black text-slate-600 uppercase tracking-tighter mt-1">Recettes</div>
                      </div>
                      <div className="text-[9px] font-bold text-slate-500">
                        Niv. {a.minLvl}-{a.maxLvl}
                      </div>
                    </div>
                  </div>
                  {isActive && (
                    <div className="absolute top-2 right-2">
                      <ArrowRightCircle size={20} className="text-amber-500 animate-pulse" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Right: Focused Recipes */}
        <AnimatePresence>
          {focusedArtisan && selectedArtisanData && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="lg:col-span-8 bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl sticky top-24"
            >
              <div className="p-6 border-b border-slate-800 bg-slate-800/30 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <User size={16} className="text-amber-500" />
                    <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter">{selectedArtisanData.name}</h2>
                  </div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{selectedArtisanData.profession} • {selectedArtisanData.zone}</p>
                </div>
                <div className="flex gap-2">
                    <Link 
                        to={`/wiki/npcs?search=${encodeURIComponent(selectedArtisanData.name)}`}
                        className="p-3 bg-slate-950 text-slate-400 hover:text-amber-500 rounded-xl border border-slate-800 transition-all"
                        title="Voir la fiche PNJ"
                    >
                        <ExternalLink size={20} />
                    </Link>
                    <button 
                        onClick={() => setFocusedArtisan(null)}
                        className="p-3 bg-slate-950 text-slate-400 hover:text-white rounded-xl border border-slate-800 transition-all"
                    >
                        <X size={20} />
                    </button>
                </div>
              </div>

              <div className="p-6 overflow-y-auto max-h-[60vh] custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedArtisanData.recipes.sort((a,b) => (a.level || 0) - (b.level || 0)).map((recipe) => (
                    <div key={recipe.name} className="group flex items-center justify-between bg-slate-900 border border-slate-800 rounded-xl p-3 hover:border-amber-500/50 transition-all shadow-lg">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-xs font-black text-slate-400 group-hover:text-amber-500 transition-colors shrink-0">
                          {recipe.level}
                        </div>
                        <div className="min-w-0">
                          <button 
                            onClick={() => onNavigateToRecipe(recipe.name)}
                            className="text-sm font-bold text-slate-200 group-hover:text-amber-400 text-left block w-full"
                          >
                            {recipe.name}
                          </button>
                          <div className="text-[10px] text-slate-600 font-bold uppercase">{recipe.type || 'Objet'}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 shrink-0 ml-4">
                          <Link
                            to={`/wiki/items?search=${encodeURIComponent(recipe.name)}`}
                            className="p-2 text-slate-600 hover:text-amber-500 transition-colors rounded-lg hover:bg-amber-500/10"
                            title="Voir l'objet"
                          >
                            <ExternalLink size={14} />
                          </Link>
                          <button 
                            onClick={() => toggleFavorite(recipe.name)}
                            className={`p-2 rounded-lg transition-all ${favorites.includes(recipe.name) ? 'text-yellow-500 bg-yellow-500/10' : 'text-slate-700 hover:text-slate-400'}`}
                          >
                            <Star size={14} fill={favorites.includes(recipe.name) ? 'currentColor' : 'none'} />
                          </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-4 bg-slate-950/50 border-t border-slate-800 flex items-center justify-center gap-2">
                <Info size={12} className="text-slate-600" />
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Sélectionnez un autre artisan pour comparer ses recettes</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {artisans.length === 0 && (
          <div className="lg:col-span-12 py-20 text-center glass-card rounded-[40px] border border-dashed border-slate-800">
            <Users size={64} className="mx-auto text-slate-800 mb-6" />
            <h3 className="text-2xl font-black text-slate-500 uppercase italic tracking-tighter">Aucun maître artisan ne correspond à ces critères</h3>
            <button onClick={() => { setNpcSearch(''); onSelectProf('Tous'); onSelectZone('Toutes'); }} className="mt-6 text-amber-500 font-black uppercase text-xs hover:underline underline-offset-8">Réinitialiser tous les filtres</button>
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, recipes, onToggleIngredient, onDelete, onNavigate }: any) => {
    const { recipesData } = useData();
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
    
    const recipe = useMemo(() => 
        recipes.find((r: any) => fastNormalize(r.name) === fastNormalize(project.recipeName)),
        [recipes, project.recipeName]
    );

    const toggleExpand = (e: React.MouseEvent, name: string) => {
        e.stopPropagation();
        setExpandedItems(prev => {
            const next = new Set(prev);
            if (next.has(name)) next.delete(name);
            else next.add(name);
            return next;
        });
    };

    // Recursively get all ingredients with depth and visibility information
    const allIngredients = useMemo(() => {
        if (!recipe) return [];
        
        const list: { name: string; quantity: number; depth: number; isCraftable: boolean; isVisible: boolean }[] = [];

        const walk = (item: any, depth: number, parentExpanded: boolean) => {
            if (!item.ingredients || item.ingredients.length === 0) return;
            
            item.ingredients.forEach((ing: any) => {
                const subRecipe = recipesData.find(r => fastNormalize(r.name) === fastNormalize(ing.name));
                const isCraftable = !!subRecipe;
                const isExpanded = expandedItems.has(ing.name);
                
                list.push({ 
                    name: ing.name, 
                    quantity: ing.quantity, 
                    depth, 
                    isCraftable,
                    isVisible: parentExpanded
                });

                if (isCraftable) {
                    walk(subRecipe, depth + 1, parentExpanded && isExpanded);
                }
            });
        };

        walk(recipe, 0, true);
        return list;
    }, [recipe, recipesData, expandedItems]);

    return (
        <div className={`bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg hover:border-amber-500/30 transition-all group relative overflow-hidden h-fit ${project.completed ? 'border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : ''}`}>
            <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                <button 
                    onClick={() => onNavigate(project.recipeName)}
                    className="p-2 text-slate-500 hover:text-amber-500 hover:bg-amber-500/10 rounded-lg transition-all"
                    title="Voir la recette"
                >
                    <ExternalLink size={16} />
                </button>
                <button 
                    onClick={onDelete}
                    className="p-2 text-slate-500 hover:text-rose-500 hover:bg-rose-500/10 rounded-lg transition-all"
                    title="Supprimer le projet"
                >
                    <Trash2 size={16} />
                </button>
            </div>
            
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-slate-800 rounded-xl text-amber-500 border border-slate-700/50">
                    <Package size={24} />
                </div>
                <div className="min-w-0">
                    <h3 
                        onClick={() => onNavigate(project.recipeName)}
                        className="font-bold text-slate-100 text-lg leading-tight line-clamp-1 cursor-pointer hover:text-amber-500 transition-colors"
                    >
                        {project.recipeName}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                            Ajouté le {new Date(project.createdAt).toLocaleDateString()}
                        </span>
                    </div>
                </div>
            </div>

            <div className={`flex items-center justify-between p-3 rounded-lg border transition-all ${project.completed ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-slate-950/50 border-slate-800'}`}>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Statut</span>
                <div className="flex items-center gap-2">
                    {project.completed && <Check size={12} className="text-emerald-500 animate-in zoom-in duration-300" />}
                    <span className={`text-xs font-black uppercase tracking-widest italic ${project.completed ? 'text-emerald-500' : 'text-amber-500'}`}>
                        {project.completed ? 'Terminé' : 'En cours'}
                    </span>
                </div>
            </div>

            {/* Ingredients Checklist */}
            {allIngredients.length > 0 && (
                <div className="mt-6 space-y-3">
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1 flex items-center gap-2">
                        <Hammer size={12} /> Liste des composants
                    </h4>
                    <div className="grid gap-2">
                        {allIngredients.filter(ing => ing.isVisible).map((ing, idx) => {
                            const isCollected = project.collectedIngredients?.includes(ing.name);
                            const isExpanded = expandedItems.has(ing.name);
                            return (
                                <div key={idx} style={{ marginLeft: `${ing.depth * 1.25}rem` }} className="flex items-center gap-2">
                                    {ing.isCraftable ? (
                                        <button 
                                            onClick={(e) => toggleExpand(e, ing.name)}
                                            className={`p-1 rounded-md transition-colors ${isExpanded ? 'text-amber-500 bg-amber-500/10' : 'text-slate-600 hover:text-slate-400'}`}
                                        >
                                            <ChevronDown size={14} className={`transition-transform duration-200 ${isExpanded ? '' : '-rotate-90'}`} />
                                        </button>
                                    ) : (
                                        <div className="w-6" /> // Spacer for alignment
                                    )}
                                    <button 
                                        onClick={() => onToggleIngredient(project.id, ing.name)}
                                        className={`flex-1 flex items-center justify-between p-2.5 rounded-xl border transition-all text-left group/ing ${
                                            isCollected 
                                                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                                                : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-600'
                                        }`}
                                    >
                                                                                    <div className="flex items-center gap-3 min-w-0">
                                                                                        <div className={`shrink-0 ${isCollected ? 'text-emerald-500' : 'text-slate-700 group-hover/ing:text-slate-500'}`}>
                                                                                            {isCollected ? <CheckSquare size={16} /> : <Square size={16} />}
                                                                                        </div>
                                                                                        <div className="flex flex-col min-w-0">
                                                                                            <span className={`text-xs font-bold ${isCollected ? 'line-through opacity-50' : ''}`}>
                                                                                                {ing.name}
                                                                                            </span>
                                                                                            {ing.isCraftable && !isCollected && (                                                    <span className="text-[8px] font-black text-amber-500/50 uppercase tracking-tighter text-left">CRAFTABLE</span>
                                                )}
                                            </div>
                                        </div>
                                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${isCollected ? 'bg-emerald-500/20 text-emerald-500' : 'bg-slate-900 text-slate-500'}`}>
                                            x{ing.quantity}
                                        </span>
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

const RecipeBrowser = ({ recipes, isItemsPage = false }: RecipeBrowserProps) => {
  const { wikiData, recipesData, favRecipes: favorites, setFavRecipes: setFavorites, craftingProjects, setCraftingProjects, showNotification } = useData();
  const allItems = useMemo(() => wikiData.find(p => p.id === 'items')?.recipes || [], [wikiData]);
  
  const findItemType = useCallback((name: string) => {
    const normalized = fastNormalize(name);
    const item = allItems.find(i => fastNormalize(i.name) === normalized);
    return item?.type;
  }, [allItems]);

  const [searchParams, setSearchParams] = useSearchParams();
  const urlSearch = searchParams.get('search') || '';
  const urlView = searchParams.get('view');
  const urlNpc = searchParams.get('npc');

  const [viewMode, setViewMode] = useState<'search' | 'npc'>(urlView === 'npc' ? 'npc' : 'search');
  const [currentTab, setCurrentTab] = useState<'recipes' | 'projects'>('recipes');
  const [layoutMode, setLayoutMode] = useState<'list' | 'grid'>('list');

  useEffect(() => {
    if (urlView === 'npc') setViewMode('npc');
  }, [urlView]);

  const handleProjectAdd = (recipeName: string) => {
    const newProject = {
        id: crypto.randomUUID(),
        recipeName: recipeName,
        targetQuantity: 1,
        createdAt: Date.now(),
        collectedIngredients: []
    };
    setCraftingProjects(prev => [...prev, newProject]);
    showNotification(`Projet ajouté : ${recipeName}`);
    
    // Scroll the main container to top
    const mainContainer = document.querySelector('main');
    if (mainContainer) {
        mainContainer.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleProjectDelete = (id: string, recipeName: string) => {
    setCraftingProjects(prev => prev.filter(p => p.id !== id));
    showNotification(`Projet supprimé : ${recipeName}`, 'error');
  };

  const toggleIngredient = (projectId: string, ingredientName: string) => {
    setCraftingProjects(prev => prev.map(p => {
        if (p.id !== projectId) return p;
        const current = p.collectedIngredients || [];
        const isChecking = !current.includes(ingredientName);

        // Helper to get all sub-ingredient names recursively (Downward)
        const getChildrenNames = (name: string, names: string[] = []): string[] => {
            const r = recipesData.find((rec: any) => fastNormalize(rec.name) === fastNormalize(name));
            if (r && r.ingredients) {
                r.ingredients.forEach((ing: any) => {
                    if (!names.includes(ing.name)) {
                        names.push(ing.name);
                        getChildrenNames(ing.name, names);
                    }
                });
            }
            return names;
        };

        const children = getChildrenNames(ingredientName);
        const targets = [ingredientName, ...children];

        let next: string[];
        if (isChecking) {
            const toAdd = targets.filter(t => !current.includes(t));
            next = [...current, ...toAdd];
        } else {
            next = current.filter(i => !targets.includes(i));
        }

        // Upward logic: Check parents if all their children are now checked
        const checkParents = (currentList: string[]): string[] => {
            let changed = false;
            const updatedList = [...currentList];

            // We need to check every craftable item in the project's tree
            const walkUp = (recipeName: string) => {
                const r = recipesData.find((rec: any) => fastNormalize(rec.name) === fastNormalize(recipeName));
                if (r && r.ingredients) {
                    // Check children first (DFS)
                    r.ingredients.forEach((ing: any) => walkUp(ing.name));

                    // If all children are in updatedList, parent should be too
                    const allChildrenChecked = r.ingredients.every((ing: any) => updatedList.includes(ing.name));
                    if (allChildrenChecked && !updatedList.includes(recipeName)) {
                        updatedList.push(recipeName);
                        changed = true;
                    } else if (!allChildrenChecked && updatedList.includes(recipeName) && recipeName !== ingredientName && !targets.includes(recipeName)) {
                        // If one child is missing and parent was checked (and not the one we just toggled), uncheck it
                        const idx = updatedList.indexOf(recipeName);
                        updatedList.splice(idx, 1);
                        changed = true;
                    }
                }
            };

            walkUp(p.recipeName);
            return changed ? checkParents(updatedList) : updatedList;
        };

        next = checkParents(next);
        
        // Dynamic completion check (Recursive - Unique names only)
        const getUniqueRequiredNames = (recipeName: string, names = new Set<string>()): Set<string> => {
            const r = recipesData.find((rec: any) => fastNormalize(rec.name) === fastNormalize(recipeName));
            if (!r || !r.ingredients) return names;
            
            r.ingredients.forEach((ing: any) => {
                names.add(ing.name);
                const subR = recipesData.find((sr: any) => fastNormalize(sr.name) === fastNormalize(ing.name));
                if (subR) {
                    getUniqueRequiredNames(ing.name, names);
                }
            });
            return names;
        };

        const uniqueRequired = getUniqueRequiredNames(p.recipeName);
        const isDone = uniqueRequired.size > 0 && Array.from(uniqueRequired).every(name => next.includes(name));

        return { ...p, collectedIngredients: next, completed: isDone };
    }));
  };
  const [isExactSearch, setIsExactSearch] = useState(false);

  const [activeSearchTerm, setActiveSearchTerm] = useState(urlSearch);
  const [selectedProf, setSelectedProf] = useState('Tous');
  const [selectedType, setSelectedType] = useState('Tous');
  const [selectedZone, setSelectedZone] = useState('Toutes');
  const [selectedStats, setSelectedStats] = useState<string[]>([]);
  const [levelRange, setLevelRange] = useState<[number, number]>(DEFAULT_LEVEL_RANGE);
  const [sortBy, setSortBy] = useState<string>(isItemsPage ? 'name' : 'level');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [showOnlyFavs, setShowOnlyFavs] = useState(false);
  const [displayMode, setDisplayMode] = useState<'all' | 'recipes' | 'components'>('recipes');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(isItemsPage ? 24 : 12);

  const itemTypes = useMemo(() => {
    if (isItemsPage) return ITEM_TYPES;
    return ITEM_TYPES.filter(t => t !== 'Matériau');
  }, [isItemsPage]);

  // Extract all unique zones from recipes
  const allZones = useMemo(() => {
    const zones = new Set<string>();
    recipes.forEach(r => {
      if (r.zones) {
        r.zones.forEach(z => zones.add(z));
      }
    });
    return ['Toutes', ...Array.from(zones).sort()];
  }, [recipes]);

  useEffect(() => {
    setActiveSearchTerm(urlSearch);
    setCurrentPage(1);
    if (urlSearch && !isItemsPage) setDisplayMode('all');
  }, [urlSearch, isItemsPage]);

  const handleSearchChange = (val: string) => {
    setActiveSearchTerm(val);
    setCurrentPage(1);
    setSearchParams(prev => {
      if (val) prev.set('search', val);
      else prev.delete('search');
      return prev;
    }, { replace: true });
  };

  const toggleFavorite = (name: string) => {
    const newFavs = favorites.includes(name) 
      ? favorites.filter(f => f !== name) 
      : [...favorites, name];
    setFavorites(newFavs);
  };

  const toggleStatFilter = (statKey: string) => {
    setSelectedStats(prev => 
      prev.includes(statKey) ? prev.filter(s => s !== statKey) : [...prev, statKey]
    );
    setCurrentPage(1);
  };



  const handleReset = () => {
    setActiveSearchTerm('');
    setIsExactSearch(false);
    setSelectedProf('Tous');
    setSelectedType('Tous');
    setSelectedZone('Toutes');
    setSelectedStats([]);
    setLevelRange(DEFAULT_LEVEL_RANGE);
    setSortBy(isItemsPage ? 'name' : 'level');
    setSortOrder('asc');
    setShowOnlyFavs(false);
    setDisplayMode('recipes');
    setCurrentPage(1);
    setSearchParams(new URLSearchParams());
  };

  const filteredRecipes = useMemo(() => {
    if (viewMode === 'npc' && !isItemsPage) return recipes;

    const normalizedSearch = fastNormalize(activeSearchTerm);
    
    const result = recipes.filter(recipe => {
      const resolvedType = recipe.type || findItemType(recipe.name);
      const matchesType = selectedType === 'Tous' || resolvedType === selectedType;

      // Stat Filter
      const matchesStats = selectedStats.length === 0 || selectedStats.every(s => {
        if (s === 'luck') {
            return (recipe.bonuses && recipe.bonuses.luck) || 
                   (recipe.secondary && (recipe.secondary['Chance'] || recipe.secondary['chance']));
        }
        return (recipe.bonuses && recipe.bonuses[s as keyof typeof recipe.bonuses]) || 
               (recipe.secondary && Object.keys(recipe.secondary).some(k => k.toLowerCase().includes(s)));
      });

      if (isItemsPage) {
        const matchesSearch = normalizedSearch === '' || fastNormalize(recipe.name).includes(normalizedSearch);
        return matchesType && matchesSearch && matchesStats;
      }

      const isBaseComponent = !recipe.ingredients || recipe.ingredients.length === 0;
      const matchesProf = selectedProf === 'Tous' || recipe.profession === selectedProf;
      const matchesLevel = (recipe.level || 0) >= levelRange[0] && (recipe.level || 0) <= levelRange[1];
      const matchesFav = !showOnlyFavs || favorites.includes(recipe.name);
      const matchesZone = selectedZone === 'Toutes' || (recipe.zones && recipe.zones.includes(selectedZone));
      
      let matchesDisplayMode = true;
      if (normalizedSearch === '') {
          if (displayMode === 'recipes') matchesDisplayMode = !isBaseComponent;
          else if (displayMode === 'components') matchesDisplayMode = isBaseComponent;
      }
      
      if (!matchesProf || !matchesLevel || !matchesFav || !matchesDisplayMode || !matchesType || !matchesZone || !matchesStats) return false;
      if (normalizedSearch === '') return true;

      if (isExactSearch) return fastNormalize(recipe.name) === normalizedSearch;

      const checkMatch = (r: RecipeItem, search: string, seen = new Set<string>()): boolean => {
        if (seen.has(r.name)) return false;
        seen.add(r.name);
        if (fastNormalize(r.name).includes(search)) return true;
        if (r.ingredients) {
          for (const ing of r.ingredients) {
            if (fastNormalize(ing.name).includes(normalizedSearch)) return true;
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
      } else if (sortBy === 'level') {
        return sortOrder === 'asc' ? (a.level || 0) - (b.level || 0) : (b.level || 0) - (a.level || 0);
      } else {
        // Sort by specific stat value (str, end, dex, int, wis, ca, luck)
        let valA = 0;
        let valB = 0;

        if (sortBy === 'luck') {
            valA = parseInt(a.bonuses?.luck || a.secondary?.['Chance'] || a.secondary?.['chance'] || '0');
            valB = parseInt(b.bonuses?.luck || b.secondary?.['Chance'] || b.secondary?.['chance'] || '0');
        } else {
            valA = parseInt(a.bonuses?.[sortBy as keyof typeof a.bonuses] || '0');
            valB = parseInt(b.bonuses?.[sortBy as keyof typeof b.bonuses] || '0');
        }
        
        return sortOrder === 'asc' ? valA - valB : valB - valA;
      }
    });
    return result;
  }, [recipes, activeSearchTerm, selectedProf, selectedType, selectedZone, selectedStats, levelRange, sortBy, sortOrder, showOnlyFavs, displayMode, favorites, isItemsPage, viewMode, isExactSearch, findItemType]);

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

  const toggleSort = (type: string) => {
    if (sortBy === type) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(type);
      setSortOrder('desc'); // Most stats we want descending by default
    }
  };

  const navigateToRecipe = (name: string) => {
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
      {!isItemsPage && (
        <div className="flex justify-center mb-6">
          <div className="flex bg-slate-900/50 p-1.5 rounded-2xl border border-slate-800 backdrop-blur-xl shadow-lg">
            <button
              onClick={() => setCurrentTab('recipes')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-black uppercase tracking-wider transition-all ${
                currentTab === 'recipes' 
                  ? 'bg-amber-500 text-slate-950 shadow-lg scale-105' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Hammer size={16} />
              Recettes
            </button>
            <motion.button
              key={`tab-projects-${craftingProjects.length}`}
              initial={false}
              animate={currentTab !== 'projects' ? { 
                y: [0, -12, 0],
                transition: { duration: 0.4, ease: "easeOut" }
              } : {}}
              onClick={() => setCurrentTab('projects')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-black uppercase tracking-wider transition-all ${
                currentTab === 'projects' 
                  ? 'bg-amber-500 text-slate-950 shadow-lg scale-105' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <ClipboardList size={16} />
              Mes Projets
              {craftingProjects.length > 0 && (
                <motion.span 
                  key={`badge-${craftingProjects.length}`}
                  initial={{ y: 15, opacity: 0, scale: 0.5 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  className={`ml-1 px-2 py-0.5 rounded-full text-[10px] ${currentTab === 'projects' ? 'bg-slate-950 text-amber-500' : 'bg-slate-800 text-slate-400'}`}
                >
                  {craftingProjects.length}
                </motion.span>
              )}
            </motion.button>
          </div>
        </div>
      )}

      {currentTab === 'projects' ? (
        <div className="grid grid-cols-1 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {craftingProjects.length === 0 ? (
                <div className="py-20 text-center bg-slate-900/30 rounded-2xl border border-dashed border-slate-800">
                    <ClipboardList size={48} className="mx-auto text-slate-700 mb-4" />
                    <p className="text-slate-500 font-bold uppercase tracking-widest">Aucun projet en cours</p>
                    <p className="text-slate-600 text-sm mt-2">Ajoutez des recettes depuis l'onglet "Recettes" pour les suivre ici.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                    {craftingProjects.map(project => (
                        <ProjectCard 
                            key={project.id}
                            project={project}
                            recipes={recipes}
                            onToggleIngredient={toggleIngredient}
                            onDelete={() => handleProjectDelete(project.id, project.recipeName)}
                            onNavigate={navigateToRecipe}
                        />
                    ))}
                </div>
            )}
        </div>
      ) : (
        <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {!isItemsPage && (
          <div className="flex bg-slate-900/50 p-1 rounded-xl border border-slate-800 w-fit backdrop-blur-xl shadow-lg">
            <button
              onClick={() => setViewMode('search')}
              className={`flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                viewMode === 'search' 
                  ? 'bg-amber-500 text-slate-950 shadow-lg scale-105' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Search size={18} />
              <span className="hidden md:inline">Recherche</span>
            </button>
            <button
              onClick={() => setViewMode('npc')}
              className={`flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                viewMode === 'npc' 
                  ? 'bg-amber-500 text-slate-950 shadow-lg scale-105' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Users size={18} />
              <span className="hidden md:inline">Maîtres Artisans</span>
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
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Main Search Bar */}
            <div className="relative group w-full">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-amber-500 transition-all duration-300 group-focus-within:scale-110 pointer-events-none" size={20} />
              <input
                type="text"
                placeholder={isItemsPage ? "Rechercher un objet ou un bonus..." : "Rechercher une recette ou un composant..."}
                value={activeSearchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full bg-slate-900/50 backdrop-blur-xl border-2 border-slate-800 rounded-[20px] py-4 md:py-5 pl-14 pr-12 text-lg text-white focus:border-amber-500 outline-none transition-all shadow-xl placeholder:text-slate-700 font-bold"
              />
              {activeSearchTerm && (
                <button 
                  onClick={() => handleSearchChange('')} 
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white p-2 bg-slate-800/50 rounded-lg transition-all"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            <div className="flex items-center gap-4 px-6 py-4 bg-slate-900/50 rounded-[20px] border border-slate-800 shadow-inner shrink-0 h-[68px]">
              <div className="text-slate-400 whitespace-nowrap flex items-center gap-2">
                <span className="font-black text-amber-500 text-xl">{filteredRecipes.length}</span>
                <span className="text-[10px] font-black uppercase tracking-widest opacity-60">/ {recipes.length}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
            
            <div className="space-y-6 relative z-10">
              <div className="flex flex-col lg:flex-row gap-6 items-stretch lg:items-end">
                {isItemsPage ? (
                  <div className="w-full space-y-6">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1 flex items-center gap-2">
                        <Tag size={12} /> Catégorie d'objet
                      </label>
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

                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1 flex items-center gap-2">
                        <Filter size={12} /> Filtrer par Bonus
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {STAT_FILTERS.map(stat => (
                          <button
                            key={stat.key}
                            onClick={() => toggleStatFilter(stat.key)}
                            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-tighter border transition-all flex items-center gap-2 ${selectedStats.includes(stat.key) ? 'bg-slate-100 text-slate-950 border-white shadow-lg' : 'bg-slate-950 text-slate-500 border-slate-800 hover:border-slate-600'}`}
                          >
                            <div className={`w-2 h-2 rounded-full ${stat.color.replace('text-', 'bg-')}`} />
                            {stat.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                      <div className="space-y-2">
                        <label htmlFor="prof-select" className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Profession</label>
                        <div className="relative">
                          <select
                            id="prof-select"
                            name="profession"
                            value={selectedProf}
                            onChange={(e) => {setSelectedProf(e.target.value); setCurrentPage(1);}}
                            className="w-full bg-slate-950 border border-slate-700 rounded-xl py-3 px-4 text-slate-100 focus:border-amber-500 outline-none appearance-none cursor-pointer"
                          >
                            {PROFESSIONS.map(p => <option key={p} value={p}>{p}</option>)}
                          </select>
                          <ChevronDown className="absolute right-3 top-3.5 text-slate-500 pointer-events-none" size={16} />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="zone-select" className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Zone</label>
                        <div className="relative">
                          <select
                            id="zone-select"
                            name="zone"
                            value={selectedZone}
                            onChange={(e) => {setSelectedZone(e.target.value); setCurrentPage(1);}}
                            className="w-full bg-slate-950 border border-slate-700 rounded-xl py-3 px-4 text-slate-100 focus:border-amber-500 outline-none appearance-none cursor-pointer"
                          >
                            {allZones.map(z => <option key={z} value={z}>{z}</option>)}
                          </select>
                          <ChevronDown className="absolute right-3 top-3.5 text-slate-500 pointer-events-none" size={16} />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="type-select" className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Type</label>
                        <div className="relative">
                          <select
                            id="type-select"
                            name="type"
                            value={selectedType}
                            onChange={(e) => {setSelectedType(e.target.value); setCurrentPage(1);}}
                            className="w-full bg-slate-950 border border-slate-700 rounded-xl py-3 px-4 text-slate-100 focus:border-amber-500 outline-none appearance-none cursor-pointer"
                          >
                            {itemTypes.map(t => <option key={t} value={t}>{t}</option>)}
                          </select>
                          <ChevronDown className="absolute right-3 top-3.5 text-slate-500 pointer-events-none" size={16} />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="lvl-min-input" className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Niveau</label>
                        <div className="flex items-center gap-2 bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5">
                          <input 
                            id="lvl-min-input"
                            name="lvl-min"
                            type="number" 
                            aria-label="Niveau minimum"
                            value={levelRange[0]} 
                            onChange={(e) => {setLevelRange([parseInt(e.target.value) || 0, levelRange[1]]); setCurrentPage(1);}} 
                            className="w-full bg-transparent text-center text-sm font-bold text-amber-500 outline-none" 
                          />
                          <span className="text-slate-700 font-bold">-</span>
                          <input 
                            id="lvl-max-input"
                            name="lvl-max"
                            type="number" 
                            aria-label="Niveau maximum"
                            value={levelRange[1]} 
                            onChange={(e) => {setLevelRange([levelRange[0], parseInt(e.target.value) || 250]); setCurrentPage(1);}} 
                            className="w-full bg-transparent text-center text-sm font-bold text-amber-500 outline-none" 
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-slate-800/50">
              <div className="flex items-center gap-2 mr-2">
                <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Trier par :</span>
              </div>
              
              {!isItemsPage && (
                <button onClick={() => toggleSort('level')} className={`flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold border transition-all ${sortBy === 'level' ? 'bg-amber-500 text-slate-950 border-amber-500' : 'bg-slate-800 text-slate-400 border-slate-700'}`}>
                  <ArrowUpDown size={12} /> Niveau {sortBy === 'level' && (sortOrder === 'asc' ? '↑' : '↓')}
                </button>
              )}
              <button onClick={() => toggleSort('name')} className={`flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold border transition-all ${sortBy === 'name' ? 'bg-amber-500 text-slate-950 border-amber-500' : 'bg-slate-800 text-slate-400 border-slate-700'}`}>
                <ArrowUpDown size={12} /> Nom {sortBy === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
              </button>

              {isItemsPage && STAT_FILTERS.map(stat => (
                <button 
                  key={stat.key}
                  onClick={() => toggleSort(stat.key)} 
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-tighter border transition-all ${sortBy === stat.key ? 'bg-slate-100 text-slate-950 border-white shadow-lg' : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-500'}`}
                >
                  <ArrowUpDown size={12} /> {stat.label} {sortBy === stat.key && (sortOrder === 'asc' ? '↑' : '↓')}
                </button>
              ))}
              
              {!isItemsPage && (
                <>
                  <button onClick={() => {setShowOnlyFavs(!showOnlyFavs); setCurrentPage(1);}} className={`flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold border transition-all ${showOnlyFavs ? 'bg-yellow-500 text-slate-950' : 'bg-slate-800 text-slate-400 border-slate-700'}`}>
                    <Star size={12} fill={showOnlyFavs ? 'currentColor' : 'none'} /> Favoris ({favorites.length})
                  </button>

                  <div className="flex bg-slate-800 rounded-full border border-slate-700 p-0.5">
                    <button 
                        onClick={() => {setDisplayMode('recipes'); setCurrentPage(1);}} 
                        className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all ${displayMode === 'recipes' ? 'bg-slate-100 text-slate-950 shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        Recettes
                    </button>
                    <button 
                        onClick={() => {setDisplayMode('components'); setCurrentPage(1);}} 
                        className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all ${displayMode === 'components' ? 'bg-slate-100 text-slate-950 shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        Composants
                    </button>
                    <button 
                        onClick={() => {setDisplayMode('all'); setCurrentPage(1);}} 
                        className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all ${displayMode === 'all' ? 'bg-slate-100 text-slate-950 shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        Tout
                    </button>
                  </div>
                </>
              )}

              <button onClick={handleReset} className="ml-auto btn-danger"><RotateCcw size={12} /> Réinitialiser</button>
            </div>
          </div>

          <motion.div 
            layout
            className={`${layoutMode === 'grid' && isItemsPage ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4' : 'space-y-6'}`}
          >
            <AnimatePresence mode="popLayout">
              {currentRecipes.map((recipe, idx) => (
                <RecipeItemRow 
                  key={recipe.name + idx}
                  recipe={recipe}
                  activeSearchTerm={activeSearchTerm}
                  isItemsPage={isItemsPage}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                  getMatchingIngredients={getMatchingIngredients}
                  viewMode={layoutMode}
                  onNavigateToRecipe={navigateToRecipe}
                  onAddProject={handleProjectAdd}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredRecipes.length === 0 && (
            <div className="text-center py-20 bg-slate-900/30 rounded-2xl border border-dashed border-slate-800">
              <Search size={48} className="mx-auto text-slate-700 mb-4" />
              <p className="text-slate-500 font-medium">Aucun résultat pour cette sélection.</p>
            </div>
          )}

          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            itemsPerPage={itemsPerPage}
            onItemsPerPageChange={(newSize) => { setItemsPerPage(newSize); setCurrentPage(1); }}
            totalItems={filteredRecipes.length}
            pageSizeOptions={isItemsPage ? [24, 48, 96] : [12, 24, 48]}
          />
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
          selectedZone={selectedZone}
          onSelectZone={setSelectedZone}
          allZones={allZones}
          initialNpcName={urlNpc}
        />
      )}
      </div>
      )}
    </div>
  );
};

export default RecipeBrowser;