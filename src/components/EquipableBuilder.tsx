import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import type { RecipeItem, SavedCharacter, Stats } from '../data/types';
import { mapSourceToSlot, fastNormalize, formatStatValue } from '../data/utils';
import { Search, Shield, Sword, Crown, Shirt, Footprints, Hand, Circle, Package, Link2, GripHorizontal, Columns2, Medal, Wind, User, Zap, Trophy, Sparkles, ChevronUp, ChevronDown } from 'lucide-react';

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
  const { itemsData, savedCharacters, activeStats: stats, setActiveStats: setStats } = useData();

  const [hideNoReqs, setHideNoReqs] = useState(true);
  const [isBiSMode, setIsBiSMode] = useState(false);
  const [bisFocus, setBisFocus] = useState('');
  const [selectedSlot, setSelectedSlot] = useState(SLOTS[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showLoadModal, setShowLoadModal] = useState(false);

  const loadSavedChar = (char: SavedCharacter) => {
    if (char && char.finalStats) {
      setStats({
        str: char.finalStats.str,
        end: char.finalStats.end,
        dex: char.finalStats.dex,
        int: char.finalStats.int,
        wis: char.finalStats.wis
      });
    }
    setShowLoadModal(false);
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

  const adjustStat = (key: keyof Stats, amount: number) => {
    setStats(prev => {
      let num = (prev[key] || 0) + amount;
      if (num < 8) num = 8;
      if (num > 65535) num = 65535;
      return { ...prev, [key]: num };
    });
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

      const isEquipable = stats.str >= sReq && stats.end >= eReq && stats.dex >= dReq && stats.int >= iReq && stats.wis >= wReq;
      if (isEquipable) {
        canEquip.push(item);
      } else {
        const diff = Math.max(0, sReq - stats.str) + Math.max(0, eReq - stats.end) + Math.max(0, dReq - stats.dex) + Math.max(0, iReq - stats.int) + Math.max(0, wReq - stats.wis);
        if (diff <= 40) comingSoon.push(item);
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
          baseScore += parseInt(r.str || '0') + parseInt(r.end || '0') + parseInt(r.dex || '0') + parseInt(r.int || '0') + parseInt(r.wis || '0');
          if (selectedSlot.id === 'Arme') {
             if (mainStat === 'dex' && i.source !== 'Arc') baseScore -= 10000000;
             if (mainStat === 'str' && i.source !== 'Arme') baseScore -= 10000000;
          }
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

    return { availableItems: canEquip.sort(sortFn), upcomingItems: comingSoon.sort(sortFn).slice(0, 5) };
  }, [stats, selectedSlot, searchTerm, hideNoReqs, itemsBySlot, isBiSMode, bisFocus]);

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      {/* ROADMAP */}
      {upcomingItems.length > 0 && (
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-emerald-500/20 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-slate-900/80 border border-white/5 rounded-[2rem] p-8 backdrop-blur-xl shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 text-left">
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
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{upcomingItems.length} OBJECTIFS DÉTECTÉS</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {upcomingItems.map((item, idx) => {
                const reqs = item.prerequisites || {};
                const sReq = parseInt(reqs.str || '0'), eReq = parseInt(reqs.end || '0'), dReq = parseInt(reqs.dex || '0'), iReq = parseInt(reqs.int || '0'), wReq = parseInt(reqs.wis || '0');
                const totalReq = sReq + eReq + dReq + iReq + wReq;
                const currentRel = Math.min(sReq, stats.str) + Math.min(eReq, stats.end) + Math.min(dReq, stats.dex) + Math.min(iReq, stats.int) + Math.min(wReq, stats.wis);
                const progress = totalReq > 0 ? (currentRel / totalReq) * 100 : 100;
                const diff = Math.max(0, sReq - stats.str) + Math.max(0, eReq - stats.end) + Math.max(0, dReq - stats.dex) + Math.max(0, iReq - stats.int) + Math.max(0, wReq - stats.wis);

                return (
                  <Link key={idx} to={`/wiki/items?search=${encodeURIComponent(item.name)}`} className="group/item relative flex flex-col bg-slate-950/40 border border-white/5 hover:border-amber-500/30 p-5 rounded-[1.5rem] transition-all duration-300 text-left">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-1">{item.source}</span>
                        <h3 className="text-sm font-bold text-slate-100 group-hover/item:text-white transition-colors line-clamp-1">{item.name}</h3>
                      </div>
                      <Package size={14} className="text-slate-600" />
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {Object.entries({ str: 'FOR', end: 'END', dex: 'DEX', int: 'INT', wis: 'SAG' }).map(([key, label]) => {
                        const req = parseInt(item.prerequisites?.[key as keyof typeof item.prerequisites] || '0');
                        if (req === 0) return null;
                        const current = stats[key as keyof Stats];
                        const isMet = current >= req;
                        
                        return (
                          <div 
                            key={key} 
                            className={`flex flex-col px-1.5 py-0.5 rounded border ${
                              isMet 
                                ? 'text-emerald-500/60 bg-emerald-500/5 border-emerald-500/10' 
                                : 'text-rose-500 bg-rose-500/5 border-rose-500/20 shadow-[0_0_10px_rgba(244,63,94,0.05)]'
                            }`}
                          >
                            <span className="text-[7px] font-black uppercase tracking-tighter opacity-70">{label}</span>
                            <div className="flex items-center gap-1">
                              <span className="text-[10px] font-bold tracking-tighter">{req}</span>
                              {!isMet && (
                                <span className="text-[8px] font-black border-l border-rose-500/20 pl-1">+{req - current}</span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-auto pt-4 border-t border-white/5">
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-[10px] font-black text-slate-500">PROGRESSION</span>
                        <span className="text-[10px] font-black text-amber-500">-{diff} PTS</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5">
                        <div className="h-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-1000" style={{ width: `${progress}%` }} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* INTERFACE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-slate-900/50 border border-white/5 rounded-[2rem] p-8 backdrop-blur-sm relative text-left">
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div>
                <h2 className="text-xl font-black text-white uppercase italic tracking-tight flex items-center gap-2">
                  <User size={20} className="text-amber-500" /> Profil Personnage
                </h2>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Configurez vos attributs</p>
              </div>
              <button onClick={() => setShowLoadModal(true)} className="btn-secondary px-5 py-2.5 text-[10px] uppercase tracking-[0.15em]">Importer</button>
            </div>
            <div className="grid grid-cols-1 gap-4 relative z-10">
              {(['str', 'end', 'dex', 'int', 'wis'] as const).map((key) => {
                const config = {
                  str: { label: 'Force', icon: Sword, color: 'text-rose-500', short: 'FOR' },
                  end: { label: 'Endurance', icon: Shield, color: 'text-orange-500', short: 'END' },
                  dex: { label: 'Dextérité', icon: Wind, color: 'text-emerald-500', short: 'DEX' },
                  int: { label: 'Intelligence', icon: Zap, color: 'text-sky-500', short: 'INT' },
                  wis: { label: 'Sagesse', icon: Sparkles, color: 'text-purple-500', short: 'SAG' }
                }[key];
                
                return (
                  <div key={key} className="flex flex-col gap-3 p-4 bg-slate-950/40 border border-white/5 rounded-2xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <config.icon size={14} className={config.color} />
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{config.label}</label>
                      </div>
                      <span className={`text-xl font-black ${config.color} tabular-nums`}>{stats[key]}</span>
                    </div>

                    <div className="flex items-center justify-between bg-slate-900/50 p-1.5 rounded-xl border border-white/5 shadow-inner">
                      <div className="flex gap-1">
                        <button onClick={() => adjustStat(key, -100)} className="w-8 h-7 text-[9px] font-black rounded-md bg-slate-950 border border-white/5 text-slate-500 hover:text-white transition-all">-100</button>
                        <button onClick={() => adjustStat(key, -10)} className="w-8 h-7 text-[9px] font-black rounded-md bg-slate-950 border border-white/5 text-slate-500 hover:text-white transition-all">-10</button>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <button onClick={() => adjustStat(key, -1)} className="w-7 h-7 flex items-center justify-center rounded-md bg-slate-800 text-slate-400 hover:text-white transition-all shadow-sm" disabled={stats[key] <= 8}><ChevronDown size={14}/></button>
                        <div className="w-10 text-center text-sm font-black text-white">{stats[key]}</div>
                        <button onClick={() => adjustStat(key, 1)} className="w-7 h-7 flex items-center justify-center rounded-md bg-slate-800 text-slate-400 hover:text-white transition-all shadow-sm"><ChevronUp size={14}/></button>
                      </div>

                      <div className="flex gap-1">
                        <button onClick={() => adjustStat(key, 10)} className="w-8 h-7 text-[9px] font-black rounded-md bg-slate-950 border border-white/5 text-slate-500 hover:text-white transition-all">+10</button>
                        <button onClick={() => adjustStat(key, 100)} className="w-8 h-7 text-[9px] font-black rounded-md bg-slate-950 border border-white/5 text-slate-500 hover:text-white transition-all">+100</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-slate-900/50 border border-white/5 rounded-[2rem] p-8 backdrop-blur-sm text-left">
            <h2 className="text-xl font-black text-white uppercase italic tracking-tight mb-8 flex items-center gap-2">
              <GripHorizontal size={20} className="text-amber-500" /> Emplacement
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {SLOTS.map((slot) => (
                <div key={slot.id} onClick={() => setSelectedSlot(slot)} className={`aspect-square rounded-2xl border-2 flex flex-col items-center justify-center cursor-pointer transition-all ${selectedSlot.id === slot.id ? 'border-amber-500 bg-amber-500/10' : 'border-white/5 bg-slate-950/20 hover:border-white/20'}`}>
                  <slot.icon size={24} className={selectedSlot.id === slot.id ? 'text-amber-500' : 'text-slate-600'} />
                  <span className={`text-[9px] mt-2 font-black uppercase tracking-tighter ${selectedSlot.id === slot.id ? 'text-amber-500' : 'text-slate-600'}`}>{slot.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col h-[900px] bg-slate-900/30 border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-sm text-left">
          <div className="p-8 border-b border-white/5 bg-white/[0.02]">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-black text-white uppercase tracking-tight italic">{selectedSlot.label}</h3>
              <label className="flex items-center gap-3 cursor-pointer">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Masquer sans req.</span>
                <input type="checkbox" className="sr-only" checked={hideNoReqs} onChange={(e) => setHideNoReqs(e.target.checked)} />
                <div className={`w-10 h-5 rounded-full transition-colors ${hideNoReqs ? 'bg-amber-500' : 'bg-slate-800'}`}></div>
              </label>
            </div>
            <div className="space-y-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={20} />
                <input type="text" placeholder="Rechercher..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full bg-slate-950/50 border border-white/5 rounded-2xl pl-12 pr-6 py-4 text-white text-sm" />
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="sr-only" checked={isBiSMode} onChange={(e) => setIsBiSMode(e.target.checked)} />
                  <div className={`w-10 h-5 rounded-full transition-colors ${isBiSMode ? 'bg-emerald-500' : 'bg-slate-800'}`}></div>
                  <span className="text-[11px] font-black text-emerald-500 uppercase tracking-[0.2em] flex items-center gap-2"><Zap size={14} fill="currentColor" /> BiS Mode</span>
                </label>
                {isBiSMode && (
                  <select value={bisFocus} onChange={(e) => setBisFocus(e.target.value)} className="flex-1 bg-slate-950 border border-white/5 rounded-xl py-2 px-4 text-[10px] font-black uppercase text-emerald-200 focus:outline-none appearance-none cursor-pointer">
                    <option value="">Choisir stat...</option>
                    {bisOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                )}
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar">
            {availableItems.map((item, idx) => (
              <ItemCard key={idx} item={item} isBiSMode={isBiSMode} idx={idx} />
            ))}
          </div>
        </div>
      </div>

      {showLoadModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl" onClick={() => setShowLoadModal(false)}></div>
          <div className="bg-slate-900 border border-white/10 w-full max-w-md rounded-[2.5rem] shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-8 border-b border-white/5 flex justify-between items-center">
               <h3 className="text-white text-xl font-black uppercase italic tracking-tight flex items-center gap-3">
                 <User size={24} className="text-amber-500" /> Charger Profil
               </h3>
               <button onClick={() => setShowLoadModal(false)} className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:text-white transition-all active:scale-90">✕</button>
            </div>
            <div className="p-8 space-y-4 max-h-[500px] overflow-y-auto custom-scrollbar">
              {savedCharacters.length === 0 ? (
                <div className="text-center py-12 flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-white/5 flex items-center justify-center text-slate-700">
                    <User size={32} />
                  </div>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Aucun personnage enregistré dans le Planner</p>
                </div>
              ) : (
                savedCharacters.map(char => (
                  <button
                    key={char.name}
                    onClick={() => loadSavedChar(char)}
                    className="w-full group bg-slate-950/50 hover:bg-amber-500 border border-white/5 hover:border-amber-400 p-5 rounded-2xl transition-all flex items-center justify-between"
                  >
                    <div className="flex flex-col items-start text-left">
                      <span className="text-slate-100 group-hover:text-slate-900 font-black uppercase text-sm tracking-wider">{char.name}</span>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <span className="text-[9px] text-slate-600 group-hover:text-slate-800 font-black uppercase">FOR {char.finalStats?.str || 0}</span>
                        <span className="text-[9px] text-slate-600 group-hover:text-slate-800 font-black uppercase">DEX {char.finalStats?.dex || 0}</span>
                        <span className="text-[9px] text-slate-600 group-hover:text-slate-800 font-black uppercase">INT {char.finalStats?.int || 0}</span>
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

const ItemCard = ({ item, isBiSMode, idx }: { item: RecipeItem, isBiSMode: boolean, idx: number }) => {
  const isTopBiS = isBiSMode && idx < 3;
  return (
    <div className={`w-full p-6 rounded-[2rem] border transition-all duration-500 relative text-left ${isTopBiS ? 'bg-slate-900/80 border-emerald-500/30 shadow-xl' : 'bg-slate-900/40 border-white/5'}`}>
      {isTopBiS && (
        <div className="absolute -top-3 -right-3 bg-emerald-500 text-slate-950 p-2 rounded-xl shadow-lg rotate-12 flex items-center gap-2 border-2 border-slate-950">
          <Trophy size={16} fill="currentColor" />
          <span className="text-[10px] font-black uppercase tracking-tighter">Top {idx + 1} BiS</span>
        </div>
      )}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
        <div>
          <span className="text-[10px] font-black text-amber-500/80 uppercase tracking-[0.2em] mb-1 block">{item.source}</span>
          <h4 className={`text-xl font-black italic uppercase tracking-tight ${isTopBiS ? 'text-emerald-400' : 'text-slate-100'}`}>{item.name}</h4>
        </div>
        <Link to={`/wiki/items?search=${encodeURIComponent(item.name)}`} className="btn-secondary px-4 py-2 text-[10px] uppercase tracking-widest">Détails</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mb-3 block">Requis</span>
          <div className="flex flex-wrap gap-2">
            {Object.entries({ str: 'FOR', end: 'END', dex: 'DEX', int: 'INT', wis: 'SAG' }).map(([key, label]) => {
              const val = parseInt(item.prerequisites?.[key as keyof typeof item.prerequisites] || '0');
              if (val === 0) return null;
              return <StatBadge key={key} label={label} value={val} type={key as any} />;
            })}
          </div>
        </div>
        {(item.bonuses || item.secondary) && (
          <div>
            <span className="text-[10px] font-black text-emerald-500/50 uppercase tracking-[0.2em] mb-3 block">Bonus</span>
            <div className="flex flex-wrap gap-2">
              {item.bonuses && Object.entries(item.bonuses).map(([k, v]) => <StatBadge key={k} label={k.toUpperCase()} value={formatStatValue(v)} type={k as any} />)}
              {item.secondary && Object.entries(item.secondary).map(([k, v]) => <StatBadge key={k} label={k} value={formatStatValue(v)} type="secondary" />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EquipableBuilder;
