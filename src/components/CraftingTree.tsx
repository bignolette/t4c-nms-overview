import { type RecipeItem, fastNormalize, itemMonsterMap } from '../data/wiki-data';
import { wikiData } from '../data/wiki-data';
import { 
  Hammer, Package, Calculator, ShoppingBag, MapPin, ChevronDown, ChevronRight, User, Skull,
  Shield, Sword, Crown, Shirt, Footprints, Hand, Circle, Link2, GripHorizontal, Columns2, Medal,
  ArrowUpRight, ArrowRight, Wind, Tag, ListChecks, Sparkles, X
} from 'lucide-react';
import { useState, useMemo, memo, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { formatStatValue } from '../data/utils';

const allRecipes = wikiData.find(p => p.id === 'metiers')?.recipes || [];
const allItems = wikiData.find(p => p.id === 'items')?.recipes || [];

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

const findItemData = (name: string) => {
  if (!name) return null;
  const searchNormalized = fastNormalize(name);
  return allItems.find(i => fastNormalize(i.name) === searchNormalized);
};

const findRecipe = (name: string) => {
  if (!name) return null;
  const searchNormalized = fastNormalize(name);
  return allRecipes.find(r => fastNormalize(r.name) === searchNormalized);
};

const StatBadge = ({ label, value, type }: { label: string, value: string | number, type: 'str' | 'end' | 'dex' | 'int' | 'wis' | 'ca' | 'secondary' }) => {
  const configs = {
    str: { color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/20' },
    end: { color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
    dex: { color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
    int: { color: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/20' },
    wis: { color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
    ca: { color: 'text-slate-300', bg: 'bg-slate-100/10', border: 'border-slate-100/20' },
    secondary: { color: 'text-emerald-400', bg: 'bg-emerald-500/5', border: 'border-emerald-500/10' }
  };
  
  const config = configs[type] || configs.secondary;
  
  return (
    <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-md border ${config.bg} ${config.border} backdrop-blur-sm`}>
      <span className={`text-[9px] font-black uppercase tracking-wider ${config.color} opacity-80`}>{label}</span>
      <span className="text-[11px] font-bold text-slate-100 font-mono tracking-tighter">{value}</span>
    </div>
  );
};

const resolveFullTree = (item: RecipeItem, depth = 0, seen = new Set<string>()): RecipeItem => {
  if (depth > 10 || seen.has(item.name)) return item;
  
  const newSeen = new Set(seen);
  newSeen.add(item.name);

  const recipe = findRecipe(item.name);
  const itemData = findItemData(item.name);
  
  const enrichedItem = {
    ...item,
    source: item.source || recipe?.source || itemData?.source,
    typeSource: item.typeSource || recipe?.typeSource || itemData?.typeSource,
    locations: item.locations || recipe?.locations || itemData?.locations,
    prerequisites: itemData?.prerequisites,
    bonuses: itemData?.bonuses,
    secondary: itemData?.secondary
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

const ResourceSummary = memo(({ totals, onOpenPlanner }: { totals: Record<string, number>, onOpenPlanner: () => void }) => {
  const resources = useMemo(() => 
    Object.entries(totals).sort((a, b) => a[0].localeCompare(b[0], undefined, { sensitivity: 'base' })), 
    [totals]
  );

  return (
    <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-5 sticky top-4 shadow-inner">
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

          <button 
            onClick={onOpenPlanner}
            className="w-full mt-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-[10px] uppercase tracking-widest py-3 rounded-xl shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2 transition-all active:scale-95 border border-emerald-400/20 group"
          >
            <Sparkles size={14} className="group-hover:animate-pulse" />
            Planifier mon Farm
          </button>
        </div>
      ) : (
        <p className="text-sm text-slate-500 italic text-center py-4">Matières premières directes.</p>
      )}
    </div>
  );
});

const FarmingPlannerModal = ({ totals, onClose, itemName }: { totals: Record<string, number>, onClose: () => void, itemName: string }) => {
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
        harvests: (recipe?.locations || itemData?.locations || [])
      };

      const itemZones = new Set<string>();
      monsters.forEach(m => {
        if (m.location.includes("Arakas")) itemZones.add("Arakas");
        else if (m.location.includes("Raven's Dust") || m.location.includes("Silversky")) itemZones.add("Raven's Dust");
        else if (m.location.includes("Stoneheim") || m.location.includes("Stonecrest")) itemZones.add("Stoneheim");
        else if (m.location.includes("Drake Island") || m.location.includes("Redwall")) itemZones.add("Drake Island");
        else if (m.location.includes("Urtanar")) itemZones.add("Urtanar");
        else if (m.location.includes("Académie")) itemZones.add("Académie");
        else itemZones.add("Divers / Inconnu");
      });

      itemInfo.harvests.forEach(h => {
        if (h.label.includes("Arakas") || h.label.includes("LH") || h.label.includes("WH")) itemZones.add("Arakas");
        else if (h.label.includes("Raven's Dust") || h.label.includes("RD") || h.label.includes("SS")) itemZones.add("Raven's Dust");
        else if (h.label.includes("Stoneheim") || h.label.includes("SH") || h.label.includes("SC")) itemZones.add("Stoneheim");
        else if (h.label.includes("Drake Island") || h.label.includes("DI")) itemZones.add("Drake Island");
        else if (h.label.includes("Urtanar") || h.label.includes("UR")) itemZones.add("Urtanar");
        else itemZones.add("Divers / Inconnu");
      });

      if (itemZones.size === 0) itemZones.add("Divers / Inconnu");

      itemZones.forEach(z => {
        if (!zones[z]) zones[z] = [];
        zones[z].push(itemInfo);
      });
    });

    return Object.entries(zones).sort();
  }, [totals]);

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={onClose}></div>
      <div className="bg-slate-900 border border-slate-800 w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl relative overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
        <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/50 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/20 rounded-xl text-emerald-500">
              <ListChecks size={24} />
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-100 uppercase tracking-tighter italic">Feuille de Route de Farm</h3>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{itemName}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-full text-slate-500 hover:text-white transition-all"><X size={20} /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
          {roadmap.map(([zone, items]) => (
            <div key={zone} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-800"></div>
                <h4 className="text-sm font-black text-emerald-400 uppercase tracking-[0.3em] flex items-center gap-2">
                  <MapPin size={14} /> {zone}
                </h4>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-800"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((item, idx) => (
                  <div key={idx} className="bg-slate-950/40 border border-slate-800/50 rounded-2xl p-4 hover:border-emerald-500/30 transition-all group">
                    <div className="flex justify-between items-start mb-3">
                      <span className="font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">{item.name}</span>
                      <span className="bg-emerald-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full">x{item.count}</span>
                    </div>

                    <div className="space-y-3">
                      {item.monsters.length > 0 && (
                        <div className="space-y-1.5">
                          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block flex items-center gap-1">
                            <Skull size={10} className="text-rose-500/70" /> Drops de monstres
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {item.monsters.slice(0, 5).map((m: any, i: number) => (
                              <span key={i} className="text-[10px] bg-rose-500/5 border border-rose-500/10 text-rose-400/90 px-2 py-0.5 rounded-md italic">
                                {m.name}
                              </span>
                            ))}
                            {item.monsters.length > 5 && <span className="text-[10px] text-slate-600">+{item.monsters.length - 5} autres</span>}
                          </div>
                        </div>
                      )}

                      {item.harvests.length > 0 && (
                        <div className="space-y-1.5">
                          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block flex items-center gap-1">
                            <Tag size={10} className="text-emerald-500/70" /> Points de récolte
                          </span>
                          <div className="space-y-1">
                            {item.harvests.map((h: any, i: number) => (
                              <div key={i} className="flex items-center justify-between text-[10px] bg-emerald-500/5 border border-emerald-500/10 text-emerald-400/90 px-2 py-1 rounded-md">
                                <span className="font-medium truncate max-w-[150px]">{h.label}</span>
                                {h.coordinates && <span className="font-mono font-bold ml-2 text-amber-400">{h.coordinates}</span>}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {item.monsters.length === 0 && item.harvests.length === 0 && (
                        <div className="text-[10px] text-slate-600 italic py-1 border-t border-slate-800/30">
                          Source à découvrir ou achat PNJ.
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-slate-950/50 text-center border-t border-slate-800">
          <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Utilisez cette liste pour optimiser vos trajets entre les zones</p>
        </div>
      </div>
    </div>,
    document.body
  );
};

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
  const hasInfo = isEquippable || !!(item.prerequisites || item.bonuses || item.secondary);

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
          {hasInfo && isHovered && createPortal(
            <div 
              style={{ 
                position: 'fixed',
                top: Math.min(tooltipPos.top, window.innerHeight - 300),
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
              
              {(isEquippable || (item.prerequisites && Object.values(item.prerequisites).some(v => v))) && (
                <div className="mb-4">
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">Pré-requis</div>
                  {item.prerequisites && Object.values(item.prerequisites).some(v => v) ? (
                    <div className="flex flex-wrap gap-2">
                      {item.prerequisites.str && <StatBadge label="FOR" value={formatStatValue(item.prerequisites.str)} type="str" />}
                      {item.prerequisites.end && <StatBadge label="END" value={formatStatValue(item.prerequisites.end)} type="end" />}
                      {item.prerequisites.dex && <StatBadge label="DEX" value={formatStatValue(item.prerequisites.dex)} type="dex" />}
                      {item.prerequisites.int && <StatBadge label="INT" value={formatStatValue(item.prerequisites.int)} type="int" />}
                      {item.prerequisites.wis && <StatBadge label="SAG" value={formatStatValue(item.prerequisites.wis)} type="wis" />}
                    </div>
                  ) : (
                    <div className="text-xs text-slate-600 italic">Pas de pré-requis</div>
                  )}
                </div>
              )}

              {(item.bonuses || item.secondary) && (
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">Bonus & Effets</div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {item.bonuses?.ca && <StatBadge label="CA" value={formatStatValue(item.bonuses.ca)} type="ca" />}
                    {item.bonuses?.str && <StatBadge label="FOR" value={formatStatValue(item.bonuses.str)} type="str" />}
                    {item.bonuses?.end && <StatBadge label="END" value={formatStatValue(item.bonuses.end)} type="end" />}
                    {item.bonuses?.dex && <StatBadge label="DEX" value={formatStatValue(item.bonuses.dex)} type="dex" />}
                    {item.bonuses?.int && <StatBadge label="INT" value={formatStatValue(item.bonuses.int)} type="int" />}
                    {item.bonuses?.wis && <StatBadge label="SAG" value={formatStatValue(item.bonuses.wis)} type="wis" />}
                    
                    {item.secondary && Object.entries(item.secondary).map(([label, value]) => (
                      <StatBadge key={label} label={label} value={formatStatValue(value as string)} type="secondary" />
                    ))}
                  </div>
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
            
            {(() => {
              const Icon = getSourceIcon(item.source);
              return <Icon size={isRoot ? 18 : 14} className={isRoot ? 'text-amber-500' : isReallyCraftable ? 'text-amber-500' : 'text-slate-600'} />;
            })()}
            
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
            {item.typeSource && (
              <div className="flex items-center gap-1 text-[10px] text-green-500/80 italic font-bold uppercase tracking-wider">
                <Tag size={10} />
                <span>{item.typeSource}</span>
              </div>
            )}

            {item.locations && item.locations.length > 0 && (
              <div className="flex flex-col gap-1.5 mt-1 ml-1 border-l border-slate-800 pl-3">
                {item.locations.map((loc: {label: string, coordinates: string}, idx: number) => (
                  <div key={idx} className="flex flex-col gap-0.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">{loc.label}</span>
                    {loc.coordinates && (
                      <div className="flex items-center gap-1.5 text-xs text-amber-400 font-black font-mono mt-0.5 bg-amber-400/5 px-2 py-0.5 rounded border border-amber-400/10 w-fit">
                        <MapPin size={12} className="text-amber-500" />
                        <span className="tracking-tight">{loc.coordinates}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {item.source && !item.typeSource && (
              <div className="flex items-center gap-1 text-[10px] text-green-500/80 italic">
                <Tag size={10} />
                <span>{item.source}</span>
              </div>
            )}

            {isReallyCraftable && item.learnedFrom && (
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-1 text-[10px] text-blue-400 font-bold uppercase tracking-tight">
                  <User size={10} className="text-blue-500" />
                  <span>ENSEIGNÉ PAR : {item.learnedFrom}</span>
                </div>
                {item.coordinates && (
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-black font-mono ml-3 mt-0.5 bg-amber-400/5 px-2 py-0.5 rounded border border-amber-400/10 w-fit">
                    <MapPin size={12} className="text-amber-500" />
                    <span className="tracking-tight">{item.coordinates}</span>
                  </div>
                )}
                {item.locationPrecision && (
                  <div className="pl-4 text-[11px] text-slate-400 italic leading-tight mt-0.5">
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
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);
  
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
          <ResourceSummary totals={totals} onOpenPlanner={() => setIsPlannerOpen(true)} />
        </div>
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
