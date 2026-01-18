import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import type { RecipeItem } from '../data/types';
import { mapSourceToSlot, fastNormalize, formatStatValue } from '../data/utils';
import { Search, Shield, Sword, Crown, Shirt, Footprints, Hand, Hexagon, Circle, Package, Link2, GripHorizontal, Columns2, Medal, Wind, User, Tag, Zap, Trophy, ChevronDown, type LucideIcon } from 'lucide-react';

// Types
interface Stats {
  str: number;
  end: number;
  dex: number;
  int: number;
  wis: number;
}

interface SavedCharacter {
  name: string;
  finalStats: Stats;
}

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

const SLOTS = [
  { id: 'Tete', label: 'Tête', icon: Crown },
  { id: 'Amulette', label: 'Amulette', icon: Medal },
  { id: 'Bracelet', label: 'Bracelet', icon: Link2 },
  { id: 'Anneau', label: 'Anneau', icon: Circle },
  { id: 'Torse', label: 'Torse', icon: Shirt },
  { id: 'Cape', label: 'Cape / Orbe', icon: Wind }, 
  { id: 'Arme', label: 'Arme', icon: Sword },
  { id: 'Bouclier', label: 'Bouclier / Focus', icon: Shield },
  { id: 'Gant', label: 'Gants', icon: Hand },
  { id: 'Ceinture', label: 'Ceinture', icon: GripHorizontal },
  { id: 'Jambière', label: 'Jambières', icon: Columns2 }, 
  { id: 'Botte', label: 'Bottes', icon: Footprints },
];

const EquipableBuilder = () => {
  const { itemsData } = useData();
  const [stats, setStats] = useState<Stats>({
    str: 50,
    end: 50,
    dex: 50,
    int: 50,
    wis: 50
  });

  const [hideNoReqs, setHideNoReqs] = useState(true);
  const [isBiSMode, setIsBiSMode] = useState(false);
  const [bisFocus, setBisFocus] = useState('');
  const [selectedSlot, setSelectedSlot] = useState(SLOTS[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showImportToast, setShowImportToast] = useState(false);
  const [savedChars, setSavedChars] = useState<SavedCharacter[]>([]);
  const [showLoadModal, setShowLoadModal] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('t4c-characters');
    if (saved) setSavedChars(JSON.parse(saved));

    // Initial sync with planner
    const plannerStats = localStorage.getItem('t4c-planner-stats');
    if (plannerStats) {
      setStats(JSON.parse(plannerStats));
    }

    // Listener for cross-tab or cross-component storage changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 't4c-planner-stats' && e.newValue) {
        setStats(JSON.parse(e.newValue));
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Save stats to planner storage when manually changed in this view
  useEffect(() => {
    localStorage.setItem('t4c-planner-stats', JSON.stringify(stats));
  }, [stats]);

  const loadSavedChar = (char: SavedCharacter) => {
    setStats(char.finalStats);
    setShowLoadModal(false);
    setShowImportToast(true);
    setTimeout(() => setShowImportToast(false), 3000);
  };

  const itemsBySlot = useMemo(() => {
    const map: Record<string, RecipeItem[]> = {};
    itemsData.forEach(item => {
      const slot = mapSourceToSlot(item.source);
      if (slot) {
        if (!map[slot]) map[slot] = [];
        map[slot].push(item);
      }
    });
    return map;
  }, [itemsData]);

  const updateStat = (key: keyof Stats, value: string) => {
    let num = parseInt(value, 10);
    if (isNaN(num)) num = 0;
    if (num > 65535) num = 65535;
    setStats(prev => ({ ...prev, [key]: num }));
  };

  const bisOptions = useMemo(() => {
    const options = new Set<string>();
    itemsData.forEach(item => {
      if (item.secondary) {
        Object.keys(item.secondary).forEach(k => {
          if (k.startsWith('Puissance') || k.startsWith('Résistance') || k === 'Chance') {
            options.add(k);
          }
        });
      }
    });
    return Array.from(options).sort();
  }, [itemsData]);

  // Ensure bisFocus is valid and adapts to stats
  useEffect(() => {
    if (!isBiSMode || bisFocus !== '') return;

    const { str, dex, int, wis } = stats;
    const maxStat = Math.max(str, dex, int, wis);

    if (maxStat === int) {
      if (bisOptions.includes('Puissance Feu')) setBisFocus('Puissance Feu');
    } else if (maxStat === wis) {
      if (bisOptions.includes('Puissance Lumière')) setBisFocus('Puissance Lumière');
    } else if (maxStat === dex || maxStat === str) {
      if (bisOptions.includes('Chance')) setBisFocus('Chance');
    }
  }, [bisOptions, stats, isBiSMode]);

  // Ensure current focus exists in options (in case itemsData changed)
  useEffect(() => {
    if (bisFocus !== '' && !bisOptions.includes(bisFocus)) {
      setBisFocus('');
    }
  }, [bisOptions, bisFocus]);

  const { availableItems, upcomingItems } = useMemo(() => {
    const itemsInSlot = itemsBySlot[selectedSlot.id] || [];
    const normalizedSearch = fastNormalize(searchTerm);

    const canEquip: RecipeItem[] = [];
    const comingSoon: RecipeItem[] = [];

    itemsInSlot.forEach((item) => {
      if (normalizedSearch && !fastNormalize(item.name).includes(normalizedSearch)) return;

      const reqs = item.prerequisites || {};
      const sReq = parseInt(reqs.str || '0');
      const eReq = parseInt(reqs.end || '0');
      const dReq = parseInt(reqs.dex || '0');
      const iReq = parseInt(reqs.int || '0');
      const wReq = parseInt(reqs.wis || '0');
      
      const reqSum = sReq + eReq + dReq + iReq + wReq;
      if (hideNoReqs && reqSum === 0) return;

      const isEquipable = stats.str >= sReq && 
                         stats.end >= eReq && 
                         stats.dex >= dReq && 
                         stats.int >= iReq && 
                         stats.wis >= wReq;

      if (isEquipable) {
        canEquip.push(item);
      } else {
        // "Upcoming" logic: check if the gap is reachable (e.g. max 40 points missing total)
        const diff = Math.max(0, sReq - stats.str) + 
                     Math.max(0, eReq - stats.end) + 
                     Math.max(0, dReq - stats.dex) + 
                     Math.max(0, iReq - stats.int) + 
                     Math.max(0, wReq - stats.wis);
        
        if (diff <= 40) {
          comingSoon.push(item);
        }
      }
    });

    const sortFn = (a: RecipeItem, b: RecipeItem) => {
      if (isBiSMode && bisFocus) {
        const getScore = (i: RecipeItem) => {
          const archetypeStats = { str: stats.str, dex: stats.dex, int: stats.int, wis: stats.wis };
          const mainStat = Object.entries(archetypeStats).reduce((a, b) => a[1] > b[1] ? a : b)[0];
          const focusKey = bisFocus.toLowerCase() as keyof typeof i.bonuses;
          const sValue = i.secondary?.[bisFocus] || (i.bonuses ? i.bonuses[focusKey] : "0") || "0";
          
          let baseScore = (parseInt(String(sValue).replace(/[^0-9-]/g, '')) || 0) * 1000000;
          const r = i.prerequisites || {};
          const tierWeight = parseInt(r.str || '0') + parseInt(r.end || '0') + parseInt(r.dex || '0') + parseInt(r.int || '0') + parseInt(r.wis || '0');
          baseScore += tierWeight;
          
          if (selectedSlot.id === 'Arme') {
             if (mainStat === 'dex' && i.source !== 'Arc') baseScore -= 10000000;
             if (mainStat === 'str' && i.source !== 'Arme') baseScore -= 10000000;
             if ((mainStat === 'int' || mainStat === 'wis') && (i.source === 'Arme' || i.source === 'Arc')) baseScore -= 10000000;
          }
          if (selectedSlot.id === 'Torse') {
             if ((mainStat === 'int' || mainStat === 'wis') && i.source === 'Armure') baseScore -= 5000000;
             if ((mainStat === 'str' || mainStat === 'dex') && i.source === 'Robe') baseScore -= 5000000;
          }
          if (selectedSlot.id === 'Bouclier' && mainStat === 'int' && i.source !== 'Focus') baseScore -= 5000000;

          return baseScore;
        };
        return getScore(b) - getScore(a);
      }

      const getSum = (i: RecipeItem) => {
        const r = i.prerequisites || {};
        return parseInt(r.str || '0') + parseInt(r.end || '0') + parseInt(r.dex || '0') + parseInt(r.int || '0') + parseInt(r.wis || '0');
      };
      const sumA = getSum(a);
      const sumB = getSum(b);
      if (sumA !== sumB) return sumB - sumA;
      return a.name.localeCompare(b.name);
    };

    return {
      availableItems: canEquip.sort(sortFn),
      upcomingItems: comingSoon.sort(sortFn).slice(0, 5) // Limit to top 5 upcoming
    };
  }, [stats, selectedSlot, searchTerm, hideNoReqs, itemsBySlot, isBiSMode, bisFocus]);

  return (
    <div className="space-y-8">
      {/* Top Banner: Upcoming Objectives */}
      {upcomingItems.length > 0 && (
        <div className="bg-slate-900/40 border border-amber-500/20 rounded-3xl p-6 backdrop-blur-md relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-amber-500/50" />
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-500/10 rounded-xl border border-amber-500/20 text-amber-500">
                <Trophy size={20} />
              </div>
              <div>
                <h2 className="text-sm font-black text-slate-100 uppercase tracking-tight">Prochains Objectifs</h2>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Équipements accessibles bientôt pour {selectedSlot.label}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">En approche</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {upcomingItems.map((item, idx) => {
              // Calculate total points missing for the "Distance" badge
              const reqs = item.prerequisites || {};
              const diff = Math.max(0, parseInt(reqs.str || '0') - stats.str) +
                           Math.max(0, parseInt(reqs.end || '0') - stats.end) +
                           Math.max(0, parseInt(reqs.dex || '0') - stats.dex) +
                           Math.max(0, parseInt(reqs.int || '0') - stats.int) +
                           Math.max(0, parseInt(reqs.wis || '0') - stats.wis);

              return (
                <Link 
                  key={idx}
                  to={`/wiki/items?search=${encodeURIComponent(item.name)}`}
                  className="group/card bg-slate-950/50 border border-slate-800 hover:border-amber-500/50 p-4 rounded-2xl transition-all hover:translate-y-[-2px] relative overflow-hidden"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[9px] font-black px-2 py-0.5 rounded-md bg-amber-500 text-slate-950">
                      -{diff} PTS
                    </span>
                    <Package size={14} className="text-slate-700 group-hover/card:text-amber-500 transition-colors" />
                  </div>
                  <h3 className="text-xs font-bold text-slate-200 truncate group-hover/card:text-white mb-2">{item.name}</h3>
                  <div className="flex flex-wrap gap-1">
                    {Object.entries({ str: 'FOR', end: 'END', dex: 'DEX', int: 'INT', wis: 'SAG' }).map(([key, label]) => {
                      const req = parseInt(item.prerequisites?.[key as keyof typeof item.prerequisites] || '0');
                      if (req === 0) return null;
                      const current = stats[key as keyof Stats];
                      const isMet = current >= req;
                      
                      return (
                        <span 
                          key={key} 
                          className={`text-[8px] font-bold px-1.5 py-0.5 rounded border flex items-center gap-1 ${
                            isMet 
                              ? 'text-emerald-500 bg-emerald-500/5 border-emerald-500/10 opacity-60' 
                              : 'text-rose-500 bg-rose-500/5 border-rose-500/20 shadow-[0_0_10px_rgba(244,63,94,0.1)]'
                          }`}
                        >
                          {label} {req}
                          {!isMet && (
                            <span className="font-black border-l border-rose-500/20 pl-1 ml-0.5">
                              +{req - current}
                            </span>
                          )}
                        </span>
                      );
                    })}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Stats */}
        <div className="lg:col-span-3 bg-slate-900/50 p-6 rounded-lg border border-slate-800 backdrop-blur-sm h-fit relative">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-amber-500 flex items-center gap-2">
              <Hexagon size={20} /> Vos Stats
            </h2>
            <div className="flex gap-1 relative">
              <button 
                onClick={() => setShowLoadModal(true)}
                className="px-3 py-2 bg-amber-500 hover:bg-amber-400 text-slate-900 rounded-lg border border-amber-600 shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all group flex items-center gap-2 font-bold text-[11px] uppercase tracking-wider"
              >
                <User size={16} />
                CHARGER
              </button>
              {showImportToast && (
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[10px] py-1 px-2 rounded whitespace-nowrap animate-bounce z-50">
                  Stats importées !
                </span>
              )}
            </div>
          </div>

          {/* LOAD MODAL */}
          {showLoadModal && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setShowLoadModal(false)}></div>
              <div className="bg-slate-900 border border-slate-800 w-full max-w-md rounded-2xl shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="p-6 border-b border-slate-800 flex justify-between items-center">
                   <h3 className="text-amber-500 font-black flex items-center gap-2 uppercase tracking-tighter italic">
                     <User size={20} /> Charger un Personnage
                   </h3>
                   <button onClick={() => setShowLoadModal(false)} className="text-slate-500 hover:text-white transition-colors">✕</button>
                </div>
                <div className="p-6 space-y-3 max-h-[400px] overflow-y-auto">
                  {savedChars.length === 0 ? (
                    <div className="text-center py-8 text-slate-500 italic text-sm">
                      Aucun personnage trouvé.
                    </div>
                  ) : (
                    savedChars.map(char => (
                      <button
                        key={char.name}
                        onClick={() => loadSavedChar(char)}
                        className="w-full group bg-slate-950/50 hover:bg-amber-500 border border-slate-800 hover:border-amber-400 p-4 rounded-xl transition-all flex items-center justify-between"
                      >
                        <div className="flex flex-col items-start text-left">
                          <span className="text-slate-100 group-hover:text-slate-900 font-black uppercase text-sm tracking-wider">{char.name}</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            <span className="text-[9px] text-slate-500 group-hover:text-slate-800 font-bold uppercase tracking-tighter">FOR {char.finalStats.str}</span>
                            <span className="text-[9px] text-slate-500 group-hover:text-slate-800 font-bold uppercase tracking-tighter">END {char.finalStats.end}</span>
                            <span className="text-[9px] text-slate-500 group-hover:text-slate-800 font-bold uppercase tracking-tighter">DEX {char.finalStats.dex}</span>
                            <span className="text-[9px] text-slate-500 group-hover:text-slate-800 font-bold uppercase tracking-tighter">INT {char.finalStats.int}</span>
                            <span className="text-[9px] text-slate-500 group-hover:text-slate-800 font-bold uppercase tracking-tighter">SAG {char.finalStats.wis}</span>
                          </div>
                        </div>
                        <div className="p-2 rounded-lg bg-slate-900 group-hover:bg-slate-900/20 text-amber-500 group-hover:text-slate-900 transition-colors">
                          <User size={18} />
                        </div>
                      </button>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}
          
          <div className="space-y-4">
            {(['str', 'end', 'dex', 'int', 'wis'] as const).map((key) => (
              <div key={key} className="flex flex-col gap-1">
                <label className="text-xs font-bold text-slate-500 uppercase">
                  {key === 'str' ? 'Force' : key === 'end' ? 'Endurance' : key === 'dex' ? 'Dextérité' : key === 'int' ? 'Intelligence' : 'Sagesse'}
                </label>
                <input
                  type="number"
                  min="8"
                  max="65535"
                  value={stats[key]}
                  onChange={(e) => updateStat(key, e.target.value)}
                  className="bg-slate-800 border border-slate-700 text-slate-100 rounded px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Middle Column: Slot Selection */}
        <div className="lg:col-span-4 bg-slate-900/50 p-6 rounded-lg border border-slate-800 backdrop-blur-sm flex flex-col items-center h-fit">
          <h2 className="text-xl font-bold text-amber-500 mb-8 flex items-center gap-2">
            <Crown size={20} /> Emplacement
          </h2>

          <div className="flex flex-col gap-4 w-full max-w-[320px] items-center">
            <div className="flex justify-center">
               <div 
                 onClick={() => setSelectedSlot(SLOTS[0])}
                 className={`w-24 h-24 rounded-xl border-2 flex flex-col items-center justify-center cursor-pointer transition-all relative group ${selectedSlot.id === 'Tete' ? 'border-amber-500 bg-amber-500/10 shadow-[0_0_20px_rgba(245,158,11,0.3)]' : 'border-slate-700 bg-slate-800/30 hover:border-slate-500 hover:bg-slate-800/50'}`}
               >
                 <Crown size={40} className={selectedSlot.id === 'Tete' ? 'text-amber-500' : 'text-slate-600 group-hover:text-slate-500'} />
                 <span className={`text-xs mt-1 uppercase tracking-wider font-bold ${selectedSlot.id === 'Tete' ? 'text-amber-500' : 'text-slate-600'}`}>Tête</span>
               </div>
            </div>

            <div className="grid grid-cols-3 gap-3 w-full">
              <SlotBtn def={SLOTS[1]} isActive={selectedSlot.id === 'Amulette'} onClick={() => setSelectedSlot(SLOTS[1])} />
              <SlotBtn def={SLOTS[2]} isActive={selectedSlot.id === 'Bracelet'} onClick={() => setSelectedSlot(SLOTS[2])} />
              <SlotBtn def={SLOTS[3]} isActive={selectedSlot.id === 'Anneau'} onClick={() => setSelectedSlot(SLOTS[3])} />
            </div>

            <div className="grid grid-cols-2 gap-3 w-3/4">
              <SlotBtn def={SLOTS[4]} isActive={selectedSlot.id === 'Torse'} onClick={() => setSelectedSlot(SLOTS[4])} />
              <SlotBtn def={SLOTS[5]} isActive={selectedSlot.id === 'Cape'} onClick={() => setSelectedSlot(SLOTS[5])} />
            </div>

            <div className="grid grid-cols-2 gap-3 w-3/4">
              <SlotBtn def={SLOTS[6]} isActive={selectedSlot.id === 'Arme'} onClick={() => setSelectedSlot(SLOTS[6])} />
              <SlotBtn def={SLOTS[7]} isActive={selectedSlot.id === 'Bouclier'} onClick={() => setSelectedSlot(SLOTS[7])} />
            </div>

            <div className="grid grid-cols-4 gap-2 w-full">
              <SlotBtn def={SLOTS[8]} isActive={selectedSlot.id === 'Gant'} onClick={() => setSelectedSlot(SLOTS[8])} />
              <SlotBtn def={SLOTS[9]} isActive={selectedSlot.id === 'Ceinture'} onClick={() => setSelectedSlot(SLOTS[9])} />
              <SlotBtn def={SLOTS[10]} isActive={selectedSlot.id === 'Jambière'} onClick={() => setSelectedSlot(SLOTS[10])} />
              <SlotBtn def={SLOTS[11]} isActive={selectedSlot.id === 'Botte'} onClick={() => setSelectedSlot(SLOTS[11])} />
            </div>
          </div>
        </div>

        {/* Right Column: Items List */}
        <div className="lg:col-span-5 bg-slate-900/50 rounded-lg border border-slate-800 backdrop-blur-sm flex flex-col overflow-hidden h-[800px]">
          <div className="p-4 border-b border-slate-800 bg-slate-800/30">
            <h3 className="text-lg font-bold text-amber-500 mb-4 flex items-center justify-between">
              <span>{selectedSlot.label}</span>
              <span className="text-xs text-slate-500 font-normal">{availableItems.length} objets</span>
            </h3>
            
            <div className="relative mb-4">
              <Search className="absolute left-3 top-2.5 text-slate-500" size={18} />
              <input 
                type="text" 
                placeholder="Filtrer par nom..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-2 text-slate-200 focus:outline-none focus:border-amber-500 text-sm"
              />
            </div>

            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input type="checkbox" className="sr-only" checked={hideNoReqs} onChange={(e) => setHideNoReqs(e.target.checked)} />
                  <div className={`w-10 h-5 rounded-full transition-colors ${hideNoReqs ? 'bg-amber-500' : 'bg-slate-700'}`}></div>
                  <div className={`absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform ${hideNoReqs ? 'translate-x-5' : ''}`}></div>
                </div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Ignorer sans prérequis</span>
              </label>

              <div className="pt-3 border-t border-slate-800">
                <label className="flex items-center gap-3 cursor-pointer group mb-3">
                  <div className="relative">
                    <input type="checkbox" className="sr-only" checked={isBiSMode} onChange={(e) => setIsBiSMode(e.target.checked)} />
                    <div className={`w-10 h-5 rounded-full transition-colors ${isBiSMode ? 'bg-emerald-500' : 'bg-slate-700'}`}></div>
                    <div className={`absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform ${isBiSMode ? 'translate-x-5' : ''}`}></div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-2">
                    <Zap size={12} /> Optimisation BiS
                  </span>
                </label>

                {isBiSMode && (
                  <div className="relative">
                    <select 
                      value={bisFocus}
                      onChange={(e) => setBisFocus(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl py-2 pl-3 pr-8 text-[10px] font-bold uppercase tracking-wider text-slate-300 focus:outline-none focus:border-emerald-500 appearance-none cursor-pointer"
                    >
                      <option value="">Choisir une statistique...</option>
                      {bisOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    <ChevronDown size={14} className="absolute right-2 top-2 text-slate-500 pointer-events-none" />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            {availableItems.length === 0 ? (
              <div className="text-center py-12 text-slate-500 italic">Aucun objet trouvé.</div>
            ) : (
              availableItems.map((item, idx) => (
                <ItemCard key={idx} item={item} isBiSMode={isBiSMode} idx={idx} stats={stats} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ItemCard = ({ item, isBiSMode, idx, isUpcoming, stats }: { item: RecipeItem, isBiSMode: boolean, idx: number, isUpcoming?: boolean, stats: Stats }) => {
  const isTopBiS = isBiSMode && idx < 3;
  
  return (
    <div className={`w-full p-4 rounded-2xl border transition-all relative ${
      isUpcoming 
        ? 'bg-slate-950/40 border-slate-800/50 grayscale-[0.5] opacity-80' 
        : isTopBiS 
          ? 'bg-slate-900/60 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.1)]' 
          : 'bg-slate-900/60 border-slate-800'
    }`}>
      {isTopBiS && (
        <div className="absolute -top-2 -right-2 bg-emerald-500 text-slate-950 p-1.5 rounded-lg shadow-lg rotate-12">
          <Trophy size={14} />
        </div>
      )}

      {isUpcoming && (
        <div className="absolute -top-2 -right-2 bg-slate-800 text-slate-400 p-1.5 rounded-lg shadow-lg border border-slate-700">
          <Search size={14} />
        </div>
      )}
      
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col gap-1">
          <h4 className={`font-bold ${isUpcoming ? 'text-slate-400' : isTopBiS ? 'text-emerald-400' : 'text-slate-100'}`}>
            {item.name}
          </h4>
          {item.typeSource && (
            <div className={`flex items-center gap-1 text-[9px] uppercase font-black ${isUpcoming ? 'text-slate-600' : 'text-emerald-500'}`}>
              <Tag size={10} /> {item.typeSource}
            </div>
          )}
        </div>
        <Link to={`/wiki/items?search=${encodeURIComponent(item.name)}`} className="p-1.5 bg-slate-800 rounded-lg text-slate-400 hover:text-amber-500">
          <Package size={14} />
        </Link>
      </div>

      <div className="space-y-3">
        <div>
          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mb-1.5">
            {isUpcoming ? 'Prerequis (Points manquants)' : 'Prérequis'}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {Object.entries({ str: 'FOR', end: 'END', dex: 'DEX', int: 'INT', wis: 'SAG' }).map(([key, label]) => {
              const req = parseInt(item.prerequisites?.[key as keyof typeof item.prerequisites] || '0');
              if (req === 0) return null;
              
              const current = stats[key as keyof Stats];
              const diff = req - current;
              
              return (
                <div key={key} className="flex flex-col gap-0.5">
                  <StatBadge label={label} value={formatStatValue(req)} type={key as any} />
                  {isUpcoming && diff > 0 && (
                    <span className="text-[8px] font-black text-rose-500 ml-1">+{diff} pts</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {(item.bonuses || item.secondary) && (
          <div>
            <span className={`text-[9px] font-bold uppercase tracking-widest block mb-1.5 ${isUpcoming ? 'text-slate-600' : 'text-emerald-500/80'}`}>Bonus</span>
            <div className="flex flex-wrap gap-1.5">
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
      </div>
    </div>
  );
};

interface SlotBtnProps { def: { id: string, label: string, icon: LucideIcon }, isActive: boolean, onClick: () => void }
const SlotBtn = ({ def, isActive, onClick }: SlotBtnProps) => {
  const Icon = def.icon;
  return (
    <div onClick={onClick} className={`aspect-square rounded-xl border-2 flex flex-col items-center justify-center cursor-pointer transition-all relative group ${isActive ? 'border-amber-500 bg-amber-500/10 shadow-[0_0_20px_rgba(245,158,11,0.2)]' : 'border-slate-700 bg-slate-800/30 hover:border-slate-500'}`}>
      <Icon size={24} className={isActive ? 'text-amber-500' : 'text-slate-600'} />
      <span className={`text-[9px] mt-1 uppercase tracking-wider font-bold ${isActive ? 'text-amber-500' : 'text-slate-600'}`}>{def.label}</span>
    </div>
  );
};

export default EquipableBuilder;