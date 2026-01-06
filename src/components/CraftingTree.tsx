import { type RecipeItem, fastNormalize, itemMonsterMap } from '../data/wiki-data';
import { wikiData } from '../data/wiki-data';
import { Hammer, Package, Calculator, ShoppingBag, MapPin, ChevronDown, ChevronRight, Skull } from 'lucide-react';
import { useState, useMemo, memo, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';


const allRecipes = wikiData.find(p => p.id === 'metiers')?.recipes || [];
const allItems = wikiData.find(p => p.id === 'items')?.recipes || [];

const findItemData = (name: string) => {
  if (!name) return null;
  const searchNormalized = fastNormalize(name);
  return allItems.find(i => fastNormalize(i.name) === searchNormalized);
};

// Use optimized normalization from data file
const findRecipe = (name: string) => {
  if (!name) return null;
  const searchNormalized = fastNormalize(name);
  return allRecipes.find(r => fastNormalize(r.name) === searchNormalized);
};

const StatBadge = ({ label, value, color }: { label: string, value: string, color: string }) => (
  <div className={`flex items-center gap-1.5 px-2 py-1 rounded bg-slate-900 border border-slate-800/50 shadow-sm ${color}`}>
    <span className="text-[10px] font-black opacity-50">{label}</span>
    <span className="text-xs font-bold font-mono tracking-tight">{value}</span>
  </div>
);

const resolveFullTree = (item: RecipeItem, depth = 0, seen = new Set<string>()): RecipeItem => {
  if (depth > 10 || seen.has(item.name)) return item;
  
  const newSeen = new Set(seen);
  newSeen.add(item.name);

  const recipe = findRecipe(item.name);
  const itemData = findItemData(item.name);
  
  // Toujours essayer de récupérer la source de la définition globale si l'item local n'en a pas
  const enrichedItem = {
    ...item,
    source: item.source || recipe?.source || itemData?.source,
    prerequisites: itemData?.prerequisites,
    bonuses: itemData?.bonuses,
    bonusText: itemData?.bonusText
  };

  if (recipe && recipe.ingredients) {
    return {
      ...enrichedItem,
      ingredients: [...recipe.ingredients]
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
};


const calculateRawMaterials = (
  item: RecipeItem, 
  multiplier: number, 
  totals: Record<string, number>, 
  expandedItems: Set<string>,
  depth = 0, 
  seen = new Set<string>()
) => {
  if (depth > 15 || seen.has(item.name)) {
    totals[item.name] = (totals[item.name] || 0) + (item.quantity * multiplier);
    return;
  }

  const recipe = findRecipe(item.name);
  
  if (recipe && recipe.ingredients && expandedItems.has(item.name)) {
    const newSeen = new Set(seen);
    newSeen.add(item.name);

    const batches = Math.ceil((item.quantity * multiplier) / (recipe.quantity || 1));
    
    recipe.ingredients.forEach(ing => {
      calculateRawMaterials(ing, batches, totals, expandedItems, depth + 1, newSeen);
    });
  } else {
    const totalNeeded = item.quantity * multiplier;
    totals[item.name] = (totals[item.name] || 0) + totalNeeded;
  }
};

const ResourceSummary = memo(({ totals }: { totals: Record<string, number> }) => {
  const resources = useMemo(() => 
    Object.entries(totals).sort((a, b) => a[0].localeCompare(b[0], undefined, { sensitivity: 'base' })), 
    [totals]
  );

  return (
    <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-5 sticky top-4 shadow-inner">
      <div className="flex items-center gap-2 mb-4 text-amber-500">
        <Calculator size={20} />
        <h4 className="font-bold text-slate-200">Total Ressources</h4>
      </div>
      
      {resources.length > 0 ? (
        <div className="space-y-2">
          {resources.map(([name, count], idx) => (
            <div key={idx} className="flex justify-between items-center text-sm border-b border-slate-800/50 pb-2 last:border-0">
              <span className="text-slate-300 flex items-center gap-2">
                <ShoppingBag size={14} className="text-slate-600" />
                {name}
              </span>
              <span className="font-mono font-bold text-amber-400 bg-amber-900/10 px-2 py-0.5 rounded">
                {count}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-slate-500 italic text-center py-4">Matières premières directes.</p>
      )}
    </div>
  );
});

const RecipeNode = memo(({ item, isRoot = false, expandedItems, onToggle }: { 

  item: RecipeItem, 

  isRoot?: boolean,

  expandedItems: Set<string>,

  onToggle: (name: string) => void

}) => {

  const [visibleCount, setVisibleCount] = useState(3);

  const [isHovered, setIsHovered] = useState(false);

  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });

  const nodeRef = useRef<HTMLDivElement>(null);

  

  const isExpanded = expandedItems.has(item.name);

  const hasIngredients = item.ingredients && item.ingredients.length > 0;

  

  // An item is craftable only if it has a known recipe WITH ingredients or already has ingredients

  const isReallyCraftable = useMemo(() => {

    if (hasIngredients) return true;

    const recipe = findRecipe(item.name);

    return !!(recipe && recipe.ingredients && recipe.ingredients.length > 0);

  }, [item.name, hasIngredients]);



  const droppingMonsters = useMemo(() => {

    const normalized = fastNormalize(item.name);

    return itemMonsterMap[normalized] || [];

  }, [item.name]);



  const monstersToDisplay = droppingMonsters.slice(0, visibleCount);



  const equippableSources = [

    'Amulette', 'Anneau', 'Arc', 'Arme', 'Botte', 'Bouclier', 'Bracelet', 

    'Cape', 'Ceinture', 'Flèches', 'Focus', 'Gant', 'Heaume', 'Jambière', 

    'Orbe', 'Plastron', 'Robe'

  ];

  const isEquippable = item.source && equippableSources.includes(item.source);

  const hasInfo = isEquippable || !!(item.prerequisites || item.bonuses || item.bonusText);



  const handleMouseEnter = () => {

    if (nodeRef.current) {

      const rect = nodeRef.current.getBoundingClientRect();

      setTooltipPos({

        top: rect.top,

        left: rect.right + 16

      });

    }

    setIsHovered(true);

  };



  return (

    <div className={`relative ${!isRoot ? 'pl-6 ml-2 border-l border-slate-800' : ''}`}>

      {!isRoot && (

        <div className="absolute top-5 -left-[1px] w-4 h-[1px] bg-slate-800"></div>

      )}



      <div className="py-1.5">

        <div 

          ref={nodeRef}

          onMouseEnter={handleMouseEnter}

          onMouseLeave={() => setIsHovered(false)}

          className={`

            group relative inline-flex flex-col items-start gap-1 px-3 py-2 rounded-lg border transition-all duration-300

            ${isRoot 

              ? 'bg-slate-800/60 border-amber-500/50 text-amber-100 shadow-[0_0_20px_rgba(245,158,11,0.1)]' 

              : 'bg-slate-950/40 border-slate-800/80 text-slate-300 hover:border-slate-500/50 hover:bg-slate-900/60'}

          `}

        >

                    {/* Tooltip via Portal */}

                    {hasInfo && isHovered && createPortal(

                      <div 

                        style={{ 

                          position: 'fixed',

                          top: Math.min(tooltipPos.top, window.innerHeight - 300), // Basic screen boundary check

                          left: tooltipPos.left,

                          zIndex: 9999,

                          pointerEvents: 'none'

                        }}

                        className="w-72 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-4 animate-in fade-in zoom-in-95 duration-200"

                      >

                        {item.source && (

                          <div className="flex justify-end mb-3">

                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-400 font-bold uppercase tracking-tighter">

                              {item.source}

                            </span>

                          </div>

                        )}

                        

                        {item.prerequisites && Object.values(item.prerequisites).some(v => v) && (

          

                <div className="mb-4">

                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">Pré-requis</div>

                  <div className="flex flex-wrap gap-2">

                    {item.prerequisites.str && <StatBadge label="FOR" value={item.prerequisites.str} color="text-red-400" />}

                    {item.prerequisites.end && <StatBadge label="END" value={item.prerequisites.end} color="text-orange-400" />}

                    {item.prerequisites.dex && <StatBadge label="DEX" value={item.prerequisites.dex} color="text-emerald-400" />}

                    {item.prerequisites.int && <StatBadge label="INT" value={item.prerequisites.int} color="text-blue-400" />}

                    {item.prerequisites.wis && <StatBadge label="SAG" value={item.prerequisites.wis} color="text-purple-400" />}

                  </div>

                </div>

              )}



              {(item.bonuses || item.bonusText) && (

                <div>

                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">Bonus & Effets</div>

                  <div className="flex flex-wrap gap-2 mb-2">

                    {item.bonuses?.str && <StatBadge label="+FOR" value={item.bonuses.str} color="text-red-400" />}

                    {item.bonuses?.end && <StatBadge label="+END" value={item.bonuses.end} color="text-orange-400" />}

                    {item.bonuses?.dex && <StatBadge label="+DEX" value={item.bonuses.dex} color="text-emerald-400" />}

                    {item.bonuses?.int && <StatBadge label="+INT" value={item.bonuses.int} color="text-blue-400" />}

                    {item.bonuses?.wis && <StatBadge label="+SAG" value={item.bonuses.wis} color="text-purple-400" />}

                    {item.bonuses?.ca && <StatBadge label="CA" value={item.bonuses.ca} color="text-slate-200" />}

                  </div>

                  {item.bonusText && (

                    <p className="text-[11px] text-emerald-400/90 font-medium leading-relaxed italic bg-emerald-500/5 border border-emerald-500/10 rounded-lg p-2 mt-2">

                      {item.bonusText}

                    </p>

                  )}

                </div>

              )}

            </div>,

            document.body

          )}



          <div className="flex items-center gap-2 whitespace-nowrap">


            {isReallyCraftable && (
              <button 
                onClick={() => onToggle(item.name)} 
                className="text-slate-500 hover:text-amber-500 transition-colors p-0.5"
              >
                {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              </button>
            )}
            
            <Package size={isRoot ? 18 : 14} className={isRoot ? 'text-amber-500' : isReallyCraftable ? 'text-amber-500' : 'text-slate-600'} />
            
            <span className={`font-medium ${isRoot ? 'text-base' : 'text-sm'}`}>
              {item.name}
            </span>

            <span className={`
              ml-2 px-1.5 py-0.5 rounded font-bold text-[10px] tracking-tight
              ${isRoot 
                ? 'bg-amber-500 text-slate-900' 
                : 'bg-slate-800 text-amber-500 border border-slate-700'}
            `}>
              x{item.quantity}
            </span>

            <span className={`
              text-[9px] px-1.5 py-0.5 rounded border uppercase font-black
              ${isReallyCraftable 
                ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' 
                : 'bg-slate-500/10 text-slate-400 border-slate-500/20'}
            `}>
              {isReallyCraftable ? 'CRAFTABLE' : 'COMPOSANT DE BASE'}
            </span>
          </div>

          
          <div className="flex flex-col gap-1 pl-6">
            {item.source && (
              <div className="flex items-center gap-1 text-[10px] text-green-500/80 italic">
                <MapPin size={10} />
                <span>{item.source}</span>
              </div>
            )}

            {isReallyCraftable && item.learnedFrom && (
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-1 text-[10px] text-blue-400 font-bold uppercase tracking-tight">
                  <Skull size={10} className="text-blue-500" />
                  <span>APPRIS DE : {item.learnedFrom} ({item.coordinates})</span>
                </div>
                {item.locationPrecision && (
                  <div className="pl-4 text-[11px] text-slate-400 italic leading-tight">
                    {item.locationPrecision}
                  </div>
                )}
              </div>
            )}
            
            {!isReallyCraftable && droppingMonsters.length > 0 && (
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[9px] text-slate-500">
                <div className="flex flex-wrap gap-1 items-center">
                  {monstersToDisplay.map((m, i) => (
                    <Link 
                      key={i} 
                      to={`/wiki/bestiary?search=${encodeURIComponent(m.name)}`}
                      className="hover:text-amber-500 transition-colors underline decoration-slate-700 underline-offset-2 flex items-center gap-1"
                    >
                      <Skull size={10} className="text-amber-600/70" />
                      {m.name}
                    </Link>
                  ))}
                  {droppingMonsters.length > 3 && (
                    <div className="flex gap-1 ml-1">
                      {visibleCount < droppingMonsters.length ? (
                        <>
                          <button 
                            onClick={() => setVisibleCount(prev => Math.min(prev + 10, droppingMonsters.length))}
                            className="text-amber-500/70 hover:text-amber-400 font-bold uppercase tracking-tighter text-[8px] bg-amber-500/5 px-1.5 py-0.5 rounded border border-amber-500/10"
                          >
                            +{droppingMonsters.length - visibleCount} autres
                          </button>
                          <button 
                            onClick={() => setVisibleCount(droppingMonsters.length)}
                            className="text-slate-400 hover:text-slate-200 font-bold uppercase tracking-tighter text-[8px] bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700"
                          >
                            Tout voir
                          </button>
                        </>
                      ) : (
                        <button 
                          onClick={() => setVisibleCount(3)}
                          className="text-slate-500 hover:text-slate-300 font-bold uppercase tracking-tighter text-[8px] bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700"
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
        </div>
      </div>

      {hasIngredients && isExpanded && (
        <div className="animate-in fade-in slide-in-from-left-2 duration-200">
          {item.ingredients!.map((ing, idx) => (
            <RecipeNode 
              key={`${ing.name}-${idx}`} 
              item={ing} 
              expandedItems={expandedItems} 
              onToggle={onToggle} 
            />
          ))}
        </div>
      )}
    </div>
  );
});

const RecipeCard = memo(({ recipe }: { recipe: RecipeItem }) => {
  const fullTree = useMemo(() => resolveFullTree(recipe), [recipe.name]);
  
  const [expandedItems, setExpandedItems] = useState<Set<string>>(() => {
    return new Set([recipe.name]);
  });

  const toggleExpand = useCallback((name: string) => {
    setExpandedItems(prev => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  }, []);

  const totals = useMemo(() => {
    const res: Record<string, number> = {};
    recipe.ingredients?.forEach(ing => 
      calculateRawMaterials(ing, 1, res, expandedItems, 0, new Set([recipe.name]))
    );
    return res;
  }, [recipe.name, expandedItems, recipe.ingredients]);

  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 relative overflow-visible shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-amber-500/20 rounded-lg text-amber-500">
            <Hammer size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-100">{recipe.name}</h3>
        </div>
        <div className="flex items-center gap-2">
           <span className="bg-slate-800 px-3 py-1 rounded-full border border-slate-700 text-xs text-slate-400">
             Produit: x{recipe.quantity}
           </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 overflow-x-auto">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Arbre de dépendances</h4>
            <span className="text-[10px] text-slate-600 italic">Repliez un objet si vous le possédez déjà</span>
          </div>
          <RecipeNode 
            item={fullTree} 
            isRoot={true} 
            expandedItems={expandedItems} 
            onToggle={toggleExpand} 
          />
        </div>

        <div className="lg:col-span-1">
          <ResourceSummary totals={totals} />
        </div>
      </div>
    </div>
  );
});

const CraftingTree = ({ recipes }: { recipes: RecipeItem[] }) => {
  return (
    <div className="space-y-8">
      {recipes.map((recipe, idx) => (
        <RecipeCard key={recipe.name + idx} recipe={recipe} />
      ))}
    </div>
  );
};

export default CraftingTree;