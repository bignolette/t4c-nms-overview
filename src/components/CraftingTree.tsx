import { Link } from 'react-router-dom';
import { type RecipeItem } from '../data/types';
import { useData } from '../context/DataContext';
import { fastNormalize } from '../data/utils';
import { 
  Hammer, Package, Calculator, ShoppingBag, MapPin, ChevronDown, User, Skull,
  Shield, Sword, Crown, Shirt, Footprints, Hand, Circle, Link2, GripHorizontal, Columns2, Medal,
  ArrowUpRight, ArrowRight, Wind, ListChecks, Sparkles, X, ExternalLink
} from 'lucide-react';
import { useState, useMemo, memo, useCallback } from 'react';
import { createPortal } from 'react-dom';

const getSourceIcon = (source: string | undefined) => {
  if (!source) return Package;
  switch (source) {
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
    default: return Package;
  }
};

const ResourceSummary = memo(({ totals, onOpenPlanner, hidePlanner }: { totals: Record<string, number>, onOpenPlanner: () => void, hidePlanner?: boolean }) => {
  if (hidePlanner) return null;

  const resources = useMemo(() => 
    Object.entries(totals).sort((a, b) => a[0].localeCompare(b[0], undefined, { sensitivity: 'base' })), 
    [totals]
  );

  return (
    <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-4 md:p-5 sticky top-20 md:top-24 shadow-inner">
      <div className="flex items-center justify-between mb-4 text-amber-500">
        <div className="flex items-center gap-2">
          <Calculator size={20} />
          <h4 className="font-bold text-slate-200">Total Ressources</h4>
        </div>
      </div>
      
      {resources.length > 0 ? (
        <div className="space-y-4">
          <div className="space-y-2">
            {resources.map(([name, count], idx) => (
              <div key={idx} className="flex justify-between items-center text-sm border-b border-slate-800/50 pb-2 last:border-0">
                <span className="text-slate-300 flex items-center gap-2 text-xs truncate mr-2">
                  <ShoppingBag size={14} className="text-slate-600 shrink-0" />
                  {name}
                </span>
                <span className="font-mono font-bold text-amber-400 bg-amber-900/10 px-2 py-0.5 rounded shrink-0">
                  {count}
                </span>
              </div>
            ))}
          </div>

          {!hidePlanner && (
            <button 
              onClick={onOpenPlanner}
              className="w-full mt-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-[10px] uppercase tracking-widest py-3 rounded-xl shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2 transition-all active:scale-95 border border-emerald-400/20 group"
            >
              <Sparkles size={14} className="group-hover:animate-pulse" />
              Planifier mon Farm
            </button>
          )}
        </div>
      ) : (
        <p className="text-sm text-slate-500 italic text-center py-4">Matières premières directes.</p>
      )}
    </div>
  );
});

const FarmingPlannerModal = ({ totals, onClose, itemName }: { totals: Record<string, number>, onClose: () => void, itemName: string }) => {
  const { wikiData, itemMonsterMap } = useData();
  const allRecipes = useMemo(() => wikiData.find(p => p.id === 'metiers')?.recipes || [], [wikiData]);
  const allItems = useMemo(() => wikiData.find(p => p.id === 'items')?.recipes || [], [wikiData]);

  const findRecipe = useCallback((name: string) => {
    const searchNormalized = fastNormalize(name);
    return allRecipes.find(r => fastNormalize(r.name) === searchNormalized);
  }, [allRecipes]);

  const findItemData = useCallback((name: string) => {
    const searchNormalized = fastNormalize(name);
    return allItems.find(i => fastNormalize(i.name) === searchNormalized);
  }, [allItems]);

  const roadmap = useMemo(() => {
    const zones: Record<string, any[]> = {};
    
    Object.entries(totals).forEach(([name, count]) => {
      const normalized = fastNormalize(name);
      const monsters = itemMonsterMap[normalized] || [];
      const recipe = findRecipe(name);
      const itemData = findItemData(name);
      
      const itemInfo = {
        name,
        count,
        monsters: monsters.map(m => ({ name: m.name, location: m.location })),
        harvests: (recipe?.locations || itemData?.locations || []),
        sources: (recipe?.sources || itemData?.sources || [])
      };

      const itemZones = new Set<string>();
      monsters.forEach(m => {
        if (m.location.includes("Arakas")) itemZones.add("Arakas");
        else if (m.location.includes("Raven's Dust") || m.location.includes("Silversky")) itemZones.add("Raven's Dust");
        else if (m.location.includes("Stoneheim") || m.location.includes("Stonecrest")) itemZones.add("Stoneheim");
        else if (m.location.includes("Drake Island") || m.location.includes("Redwall")) itemZones.add("Drake Island");
        else if (m.location.includes("Urtanar")) itemZones.add("Urtanar");
      });

      if (itemInfo.harvests.length > 0 || itemInfo.sources.length > 0) {
          // Guess zone from description or just put in others
          itemZones.add("Récolte / Divers");
      }

      if (itemZones.size === 0) itemZones.add("Inconnu / Autre");

      itemZones.forEach(zone => {
        if (!zones[zone]) zones[zone] = [];
        zones[zone].push(itemInfo);
      });
    });

    return Object.entries(zones).sort();
  }, [totals, itemMonsterMap, findRecipe, findItemData]);

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-[#050507]/95 backdrop-blur-xl">
      <div className="bg-[#0a0a0c] border border-slate-800 w-full max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in duration-300">
        {/* Modal Header */}
        <div className="p-6 md:p-8 border-b border-slate-800 flex items-center justify-between bg-gradient-to-r from-emerald-900/10 to-transparent">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
              <ListChecks className="text-emerald-500" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-100 tracking-tighter uppercase italic">
                Plan de farm : {itemName}
              </h2>
              <p className="text-slate-400 text-sm font-medium">Optimisation par zones géographiques</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-full text-slate-400 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
          {roadmap.map(([zone, items]) => (
            <div key={zone} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-slate-800"></div>
                <h3 className="text-xs font-black text-emerald-500 uppercase tracking-[0.3em] bg-emerald-500/5 px-4 py-1.5 rounded-full border border-emerald-500/10">
                  {zone}
                </h3>
                <div className="h-px flex-1 bg-slate-800"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item, idx) => (
                  <div key={idx} className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-5 hover:border-emerald-500/30 transition-all group">
                    <div className="flex justify-between items-start mb-3">
                      <span className="font-bold text-slate-200 text-sm leading-tight group-hover:text-emerald-400 transition-colors">
                        {item.name}
                      </span>
                      <span className="font-mono font-black text-emerald-400 text-sm bg-emerald-500/10 px-2 py-0.5 rounded">
                        x{item.count}
                      </span>
                    </div>

                    <div className="space-y-2">
                      {item.monsters.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {item.monsters.slice(0, 3).map((m: any, midx: number) => (
                            <div key={midx} className="flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800/50 text-[10px] text-slate-400 font-bold border border-slate-700/50">
                              <Skull size={10} className="text-rose-500/50" />
                              {m.name}
                            </div>
                          ))}
                          {item.monsters.length > 3 && (
                            <span className="text-[10px] text-slate-600 font-bold">+{item.monsters.length - 3}</span>
                          )}
                        </div>
                      )}

                      {(item.harvests.length > 0 || item.sources.length > 0) && (
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-amber-500/80 italic">
                          <MapPin size={10} />
                          Localisation spécifique connue
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-slate-900/30 border-t border-slate-800 text-center">
            <p className="text-xs text-slate-500 font-medium">
                Tip: Concentrez votre farm sur les zones avec le plus grand nombre d'items différents pour gagner du temps.
            </p>
        </div>
      </div>
    </div>,
    document.body
  );
};

const RecipeCard = memo(({ recipe, hidePlanner }: { recipe: RecipeItem, hidePlanner?: boolean }) => {
  const { wikiData } = useData();
  const allRecipes = useMemo(() => wikiData.find(p => p.id === 'metiers')?.recipes || [], [wikiData]);
  const allItems = useMemo(() => wikiData.find(p => p.id === 'items')?.recipes || [], [wikiData]);

  const findRecipe = useCallback((name: string) => {
    const searchNormalized = fastNormalize(name);
    return allRecipes.find(r => fastNormalize(r.name) === searchNormalized);
  }, [allRecipes]);

  const findItemData = useCallback((name: string) => {
    const searchNormalized = fastNormalize(name);
    return allItems.find(i => fastNormalize(i.name) === searchNormalized);
  }, [allItems]);

  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set([recipe.name]));
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);

  const resolveFullTree = useCallback((item: RecipeItem, depth = 0, seen = new Set<string>()): RecipeItem => {
    if (depth > 10 || seen.has(item.name)) return item;
    
    const newSeen = new Set(seen);
    newSeen.add(item.name);

    const r = findRecipe(item.name);
    const itemData = findItemData(item.name);
    
    const enrichedItem = {
      ...item,
      source: item.source || r?.source || itemData?.source,
      typeSource: item.typeSource || r?.typeSource || itemData?.typeSource,
      locations: item.locations || r?.locations || itemData?.locations,
      sources: item.sources || r?.sources || itemData?.sources,
      prerequisites: itemData?.prerequisites,
      bonuses: itemData?.bonuses,
      secondary: itemData?.secondary
    };

    if (r && r.ingredients) {
      return {
        ...enrichedItem,
        ingredients: [...r.ingredients]
          .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }))
          .map(ing => resolveFullTree(ing, depth + 1, newSeen))
      };
    }

    if (enrichedItem.ingredients) {
      return {
        ...enrichedItem,
        ingredients: [...enrichedItem.ingredients]
          .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }))
          .map(ing => resolveFullTree(ing, depth + 1, newSeen))
      };
    }

    return enrichedItem;
  }, [findRecipe, findItemData]);

  const calculateRawMaterials = useCallback((
    item: RecipeItem, 
    multiplier: number, 
    totals: Record<string, number>, 
    expItems: Set<string>,
    depth = 0, 
    seen = new Set<string>()
  ) => {
    if (depth > 15 || seen.has(item.name)) {
      totals[item.name] = (totals[item.name] || 0) + (item.quantity * multiplier);
      return;
    }

    const r = findRecipe(item.name);
    
    if (r && r.ingredients && expItems.has(item.name)) {
      const newSeen = new Set(seen);
      newSeen.add(item.name);

      const batches = Math.ceil((item.quantity * multiplier) / (r.quantity || 1));
      
      r.ingredients.forEach(ing => {
        calculateRawMaterials(ing, batches, totals, expItems, depth + 1, newSeen);
      });
    } else {
      const totalNeeded = item.quantity * multiplier;
      totals[item.name] = (totals[item.name] || 0) + totalNeeded;
    }
  }, [findRecipe]);

  const fullTree = useMemo(() => resolveFullTree(recipe), [recipe, resolveFullTree]);
  
  const totals = useMemo(() => {
    const t: Record<string, number> = {};
    calculateRawMaterials(recipe, 1, t, expandedItems);
    delete t[recipe.name];
    return t;
  }, [recipe, expandedItems, calculateRawMaterials]);

  const toggleExpandItem = useCallback((name: string) => {
    setExpandedItems(prev => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  }, []);

  const TreeNode = memo(({ item, multiplier = 1, depth = 0 }: { item: RecipeItem, multiplier?: number, depth?: number }) => {
    const hasIngredients = item.ingredients && item.ingredients.length > 0;
    const isNodeExpanded = expandedItems.has(item.name);
    const Icon = getSourceIcon(item.source);
    
    return (
      <div className="relative">
        {depth > 0 && (
          <div className="absolute -left-6 top-1/2 w-6 h-px bg-slate-800"></div>
        )}
        
        <div className={`
          group relative p-3 rounded-xl border transition-all duration-200
          ${hasIngredients ? 'cursor-pointer' : ''}
          ${isNodeExpanded ? 'bg-slate-900 border-slate-700 shadow-lg' : 'bg-slate-900/40 border-slate-800/50 hover:border-slate-700'}
        `}
        onClick={(e) => {
          if (hasIngredients) {
            e.stopPropagation();
            toggleExpandItem(item.name);
          }
        }}
        >
          <div className="flex items-center gap-3">
            <div className={`
              p-2 rounded-lg transition-colors
              ${isNodeExpanded ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-800 text-slate-500 group-hover:bg-slate-700 group-hover:text-slate-300'}
            `}>
              <Icon size={16} />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-slate-200 truncate">{item.name}</span>
                <Link
                  to={`/wiki/items?search=${encodeURIComponent(item.name)}`}
                  onClick={(e) => e.stopPropagation()}
                  className="text-slate-600 hover:text-amber-500 transition-colors p-1 rounded-md hover:bg-amber-500/10"
                  title="Voir l'objet"
                >
                  <ExternalLink size={12} />
                </Link>
                <span className="text-[10px] font-black text-amber-500 bg-amber-900/20 px-1.5 rounded">x{item.quantity * multiplier}</span>
              </div>
              
              <div className="flex items-center gap-2 mt-1">
                {item.source && (
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">{item.source}</span>
                )}
                {hasIngredients ? (
                  <div className={`flex items-center gap-1 text-[9px] font-black uppercase tracking-widest ${isNodeExpanded ? 'text-amber-500' : 'text-slate-600'}`}>
                    <Hammer size={10} />
                    <span className="px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-500">CRAFTABLE</span>
                    <span className="text-[8px] opacity-60 ml-1">{isNodeExpanded ? '(Masquer)' : '(Voir)'}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-emerald-600">
                    <Package size={10} />
                    <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">COMPOSANT DE BASE</span>
                  </div>
                )}
              </div>
            </div>

            {hasIngredients && (
              <div className={`transition-transform duration-300 ${isNodeExpanded ? 'rotate-180' : ''}`}>
                <ChevronDown size={14} className="text-slate-600" />
              </div>
            )}
          </div>
        </div>

        {hasIngredients && isNodeExpanded && (
          <div className="ml-10 mt-4 space-y-4 border-l-2 border-slate-800/50 pl-6">
            {item.ingredients?.map((ing, idx) => (
              <TreeNode key={ing.name + idx} item={ing} multiplier={multiplier} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  });

  return (
    <div className="bg-[#0f0f12] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl group hover:border-slate-700 transition-colors">
      <div className="flex flex-col lg:flex-row min-h-[500px]">
        {/* Tree Section */}
        <div className={`flex-1 p-6 md:p-8 lg:p-10 border-b lg:border-b-0 ${!hidePlanner ? 'lg:border-r' : ''} border-slate-800 overflow-x-auto`}>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-900/20">
                <Hammer size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-100 tracking-tighter uppercase italic">{recipe.name}</h3>
                <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest mt-0.5">
                  <User size={12} className="text-amber-500/50" />
                  {recipe.profession || 'Général'} {recipe.level ? `• Niv.${recipe.level}` : ''}
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 hover:bg-slate-800 rounded-xl transition-colors text-slate-400 group/btn"
            >
              {isExpanded ? <ChevronDown className="rotate-180 transition-transform" /> : <ChevronDown className="transition-transform" />}
            </button>
          </div>

          <div className="mt-10 overflow-visible pb-10">
            <TreeNode item={fullTree} />
          </div>
        </div>

        {/* Sidebar Summary */}
        {!hidePlanner && (
          <div className="w-full lg:w-80 p-6 bg-slate-900/20">
            <ResourceSummary 
              totals={totals} 
              onOpenPlanner={() => setIsPlannerOpen(true)}
              hidePlanner={hidePlanner}
            />
          </div>
        )}
      </div>

      {isPlannerOpen && (
        <FarmingPlannerModal 
          totals={totals} 
          onClose={() => setIsPlannerOpen(false)} 
          itemName={recipe.name} 
        />
      )}
    </div>
  );
});

const CraftingTree = ({ recipes, hidePlanner }: { recipes: RecipeItem[], hidePlanner?: boolean }) => {
  return (
    <div className="space-y-8">
      {recipes.map((recipe, idx) => (
        <RecipeCard key={recipe.name + idx} recipe={recipe} hidePlanner={hidePlanner} />
      ))}
    </div>
  );
};

export default CraftingTree;