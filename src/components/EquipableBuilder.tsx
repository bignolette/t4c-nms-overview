import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import type { RecipeItem } from '../data/types';
import { mapSourceToSlot, fastNormalize, formatStatValue } from '../data/utils';
import { Search, Shield, Sword, Crown, Shirt, Footprints, Hand, Circle, Package, Link2, GripHorizontal, Columns2, Medal, Wind, User, Tag, Zap, Trophy, ChevronDown, Star, Sparkles, type LucideIcon } from 'lucide-react';

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
    <div className="space-y-10 animate-in fade-in duration-700">
      {/* 🚀 PROGRESSION ROADMAP */}
      {upcomingItems.length > 0 && (
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-emerald-500/20 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-slate-900/80 border border-white/5 rounded-[2rem] p-8 backdrop-blur-xl shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-amber-500 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                    <Trophy size={20} className="text-slate-950" />
                  </div>
                  <h2 className="text-2xl font-black text-white tracking-tight uppercase italic">Roadmap de Progression</h2>
                </div>
                <p className="text-slate-400 text-sm font-medium ml-12">Les prochains paliers d'équipement pour votre build {selectedSlot.label}</p>
              </div>
              <div className="flex items-center gap-4 bg-slate-950/50 px-4 py-2 rounded-2xl border border-white/5">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-6 h-6 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center">
                      <Star size={10} className="text-amber-500/50" />
                    </div>
                  ))}
                </div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{upcomingItems.length} OBJECTIFS DÉTECTÉS</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {upcomingItems.map((item, idx) => {
                const reqs = item.prerequisites || {};
                const sReq = parseInt(reqs.str || '0');
                const eReq = parseInt(reqs.end || '0');
                const dReq = parseInt(reqs.dex || '0');
                const iReq = parseInt(reqs.int || '0');
                const wReq = parseInt(reqs.wis || '0');
                
                const totalReq = sReq + eReq + dReq + iReq + wReq;
                const currentRel = Math.min(sReq, stats.str) + Math.min(eReq, stats.end) + Math.min(dReq, stats.dex) + Math.min(iReq, stats.int) + Math.min(wReq, stats.wis);
                const progress = totalReq > 0 ? (currentRel / totalReq) * 100 : 100;
                const diff = Math.max(0, sReq - stats.str) + Math.max(0, eReq - stats.end) + Math.max(0, dReq - stats.dex) + Math.max(0, iReq - stats.int) + Math.max(0, wReq - stats.wis);

                return (
                  <Link 
                    key={idx}
                    to={`/wiki/items?search=${encodeURIComponent(item.name)}`}
                    className="group/item relative flex flex-col bg-slate-950/40 border border-white/5 hover:border-amber-500/30 p-5 rounded-[1.5rem] transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-1">{item.source}</span>
                        <h3 className="text-sm font-bold text-slate-100 group-hover/item:text-white transition-colors line-clamp-1">{item.name}</h3>
                      </div>
                      <div className="p-2 bg-slate-900 rounded-lg text-slate-600 group-hover/item:text-amber-500 transition-colors">
                        <Package size={14} />
                      </div>
                    </div>

                    <div className="mt-auto pt-4 border-t border-white/5">
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-[10px] font-black text-slate-500">PROGRESSION</span>
                        <span className="text-[10px] font-black text-amber-500">-{diff} PTS</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5">
                        <div 
                          className="h-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-1000 shadow-[0_0_10px_rgba(245,158,11,0.3)]" 
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 🛠️ MAIN BUILDER INTERFACE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* LEFT: CHARACTER PROFILE & CONFIG */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-slate-900/50 border border-white/5 rounded-[2rem] p-8 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <User size={120} />
            </div>
            
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div>
                <h2 className="text-xl font-black text-white uppercase italic tracking-tight flex items-center gap-2">
                  <User size={20} className="text-amber-500" /> Profil Personnage
                </h2>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Configurez vos attributs</p>
              </div>
              <button 
                onClick={() => setShowLoadModal(true)}
                className="px-5 py-2.5 bg-white text-slate-950 rounded-xl font-black text-[10px] uppercase tracking-[0.15em] hover:bg-amber-500 transition-all shadow-xl active:scale-95"
              >
                Importer
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              {(['str', 'end', 'dex', 'int', 'wis'] as const).map((key) => {
                const config = {
                  str: { label: 'Force', icon: Sword, color: 'text-rose-500', bg: 'bg-rose-500/10' },
                  end: { label: 'Endurance', icon: Shield, color: 'text-orange-500', bg: 'bg-orange-500/10' },
                  dex: { label: 'Dextérité', icon: Wind, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
                  int: { label: 'Intelligence', icon: Zap, color: 'text-sky-500', bg: 'bg-sky-500/10' },
                  wis: { label: 'Sagesse', icon: Sparkles, color: 'text-purple-500', bg: 'bg-purple-500/10' }
                }[key];
                
                return (
                  <div key={key} className="flex flex-col gap-2 p-4 bg-slate-950/40 border border-white/5 rounded-2xl hover:border-white/10 transition-colors">
                    <div className="flex items-center gap-2">
                      <config.icon size={12} className={config.color} />
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{config.label}</label>
                    </div>
                    <input
                      type="number"
                      value={stats[key]}
                      onChange={(e) => updateStat(key, e.target.value)}
                      className="bg-transparent text-2xl font-black text-white focus:outline-none focus:text-amber-500 transition-colors w-full"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-slate-900/50 border border-white/5 rounded-[2rem] p-8 backdrop-blur-sm">
            <h2 className="text-xl font-black text-white uppercase italic tracking-tight mb-8 flex items-center gap-2">
              <GripHorizontal size={20} className="text-amber-500" /> Emplacement
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {SLOTS.map((slot) => (
                <div 
                  key={slot.id}
                  onClick={() => setSelectedSlot(slot)}
                  className={`aspect-square rounded-2xl border-2 flex flex-col items-center justify-center cursor-pointer transition-all relative group ${selectedSlot.id === slot.id ? 'border-amber-500 bg-amber-500/10 shadow-[0_0_20px_rgba(245,158,11,0.2)]' : 'border-white/5 bg-slate-950/20 hover:border-white/20'}`}
                >
                  <slot.icon size={24} className={selectedSlot.id === slot.id ? 'text-amber-500' : 'text-slate-600 group-hover:text-slate-400'} />
                  <span className={`text-[9px] mt-2 font-black uppercase tracking-tighter ${selectedSlot.id === slot.id ? 'text-amber-500' : 'text-slate-600'}`}>{slot.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: RESULTS LIST */}
        <div className="lg:col-span-7 flex flex-col h-[900px] bg-slate-900/30 border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-sm">
          <div className="p-8 border-b border-white/5 bg-white/[0.02]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight italic flex items-center gap-3">
                  {selectedSlot.label}
                  <span className="not-italic text-sm text-slate-600 font-bold bg-slate-950 px-3 py-1 rounded-full border border-white/5">{availableItems.length}</span>
                </h3>
              </div>
              
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-slate-300 transition-colors">Masquer sans req.</span>
                  <div className="relative">
                    <input type="checkbox" className="sr-only" checked={hideNoReqs} onChange={(e) => setHideNoReqs(e.target.checked)} />
                    <div className={`w-10 h-5 rounded-full transition-colors ${hideNoReqs ? 'bg-amber-500' : 'bg-slate-800'}`}></div>
                    <div className={`absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform ${hideNoReqs ? 'translate-x-5' : ''}`}></div>
                  </div>
                </label>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={20} />
                <input 
                  type="text" 
                  placeholder="Rechercher un équipement..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-950/50 border border-white/5 rounded-2xl pl-12 pr-6 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-amber-500/50 transition-all text-sm font-medium"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl">
                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="relative">
                    <input type="checkbox" className="sr-only" checked={isBiSMode} onChange={(e) => setIsBiSMode(e.target.checked)} />
                    <div className={`w-10 h-5 rounded-full transition-colors ${isBiSMode ? 'bg-emerald-500' : 'bg-slate-800'}`}></div>
                    <div className={`absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform ${isBiSMode ? 'translate-x-5' : ''}`}></div>
                  </div>
                  <span className="text-[11px] font-black text-emerald-500 uppercase tracking-[0.2em] flex items-center gap-2">
                    <Zap size={14} fill="currentColor" /> Optimisation BiS
                  </span>
                </label>

                {isBiSMode && (
                  <div className="flex-1 relative">
                    <select 
                      value={bisFocus}
                      onChange={(e) => setBisFocus(e.target.value)}
                      className="w-full bg-slate-950 border border-white/5 rounded-xl py-2 pl-4 pr-10 text-[10px] font-black uppercase tracking-widest text-emerald-200 focus:outline-none focus:border-emerald-500 appearance-none cursor-pointer"
                    >
                      <option value="">Choisir une statistique...</option>
                      {bisOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500 pointer-events-none" />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar scroll-smooth">
            {availableItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-slate-600 opacity-50">
                <Package size={48} className="mb-4" />
                <p className="text-sm font-bold uppercase tracking-widest">Aucun équipement disponible</p>
              </div>
            ) : (
              availableItems.map((item, idx) => (
                <ItemCard key={idx} item={item} isBiSMode={isBiSMode} idx={idx} stats={stats} />
              ))
            )}
          </div>
        </div>
      </div>

      {/* LOAD MODAL & OTHER COMPS */}
      {showLoadModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl" onClick={() => setShowLoadModal(false)}></div>
          <div className="bg-slate-900 border border-white/10 w-full max-w-md rounded-[2.5rem] shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-8 border-b border-white/5 flex justify-between items-center">
               <h3 className="text-white text-xl font-black uppercase italic tracking-tight flex items-center gap-3">
                 <User size={24} className="text-amber-500" /> Charger Profil
               </h3>
               <button onClick={() => setShowLoadModal(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors">✕</button>
            </div>
            <div className="p-8 space-y-4 max-h-[500px] overflow-y-auto custom-scrollbar">
              {savedChars.length === 0 ? (
                <div className="text-center py-12 text-slate-600 font-bold uppercase tracking-widest text-xs">
                  Aucun profil trouvé
                </div>
              ) : (
                savedChars.map(char => (
                  <button
                    key={char.name}
                    onClick={() => loadSavedChar(char)}
                    className="w-full group bg-slate-950/50 hover:bg-amber-500 border border-white/5 hover:border-amber-400 p-5 rounded-2xl transition-all flex items-center justify-between"
                  >
                    <div className="flex flex-col items-start text-left">
                      <span className="text-slate-100 group-hover:text-slate-900 font-black uppercase text-sm tracking-wider">{char.name}</span>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <span className="text-[9px] text-slate-600 group-hover:text-slate-800 font-black uppercase">FOR {char.finalStats.str}</span>
                        <span className="text-[9px] text-slate-600 group-hover:text-slate-800 font-black uppercase">DEX {char.finalStats.dex}</span>
                        <span className="text-[9px] text-slate-600 group-hover:text-slate-800 font-black uppercase">INT {char.finalStats.int}</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 group-hover:bg-slate-900/20 text-amber-500 group-hover:text-slate-900 transition-colors">
                      <User size={20} />
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ItemCard = ({ item, isBiSMode, idx, isUpcoming, stats }: { item: RecipeItem, isBiSMode: boolean, idx: number, isUpcoming?: boolean, stats: Stats }) => {
  const isTopBiS = isBiSMode && idx < 3;
  
  return (
    <div className={`group/card w-full p-6 rounded-[2rem] border transition-all duration-500 relative ${
      isTopBiS 
        ? 'bg-slate-900/80 border-emerald-500/30 shadow-[0_20px_50px_-20px_rgba(16,185,129,0.2)]' 
        : 'bg-slate-900/40 border-white/5 hover:border-white/10 hover:bg-slate-900/60'
    }`}>
      {isTopBiS && (
        <div className="absolute -top-3 -right-3 bg-gradient-to-br from-emerald-400 to-emerald-600 text-slate-950 p-2 rounded-xl shadow-lg rotate-12 flex items-center gap-2 border-2 border-slate-950">
          <Trophy size={16} fill="currentColor" />
          <span className="text-[10px] font-black uppercase tracking-tighter">Top {idx + 1} BiS</span>
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-black text-amber-500/80 uppercase tracking-[0.2em]">{item.source}</span>
            {item.typeSource && (
              <>
                <span className="w-1 h-1 rounded-full bg-slate-800" />
                <span className="text-[10px] font-black text-emerald-500/80 uppercase tracking-[0.2em]">{item.typeSource}</span>
              </>
            )}
          </div>
          <h4 className={`text-xl font-black italic uppercase tracking-tight ${isTopBiS ? 'text-emerald-400' : 'text-slate-100'}`}>
            {item.name}
          </h4>
        </div>
        <div className="flex gap-2">
          <Link to={`/wiki/items?search=${encodeURIComponent(item.name)}`} className="flex items-center gap-2 px-4 py-2 bg-slate-950 border border-white/5 rounded-xl text-[10px] font-black text-slate-500 hover:text-amber-500 hover:border-amber-500/30 transition-all uppercase tracking-widest">
            Détails <Package size={14} />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] block mb-3">Attributs Requis</span>
          <div className="flex flex-wrap gap-2">
            {Object.entries({ str: 'FOR', end: 'END', dex: 'DEX', int: 'INT', wis: 'SAG' }).map(([key, label]) => {
              const req = parseInt(item.prerequisites?.[key as keyof typeof item.prerequisites] || '0');
              if (req === 0) return null;
              return <StatBadge key={key} label={label} value={req} type={key as any} />;
            })}
          </div>
        </div>

        {(item.bonuses || item.secondary) && (
          <div>
            <span className="text-[10px] font-black text-emerald-500/50 uppercase tracking-[0.2em] block mb-3">Statistiques Bonus</span>
            <div className="flex flex-wrap gap-2">
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

export default EquipableBuilder;