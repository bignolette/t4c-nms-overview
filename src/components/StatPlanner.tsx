import { useState, useMemo, useEffect } from 'react';
import { User, Zap, ChevronUp, ChevronDown, RotateCcw, Award, Heart, Sparkles, Star, Shield, Flame } from 'lucide-react';

interface Stats {
  str: number; end: number; dex: number; int: number; wis: number;
}

type Element = 'Feu' | 'Eau' | 'Air' | 'Terre' | 'Lumière' | 'Nécromancie';

const ELEMENTS: Element[] = ['Feu', 'Eau', 'Air', 'Terre', 'Lumière', 'Nécromancie'];

const StatPlanner = () => {
  const [renaissance, setRenaissance] = useState(0);
  const POINTS_PER_LEVEL = 5;

  const getSeraphBonusPool = (ren: number) => {
    if (ren === 0) return 0;
    const table: Record<number, number> = { 1: 10, 2: 12, 3: 14, 4: 16, 5: 18, 6: 20 };
    return table[ren] || 0;
  };

  const currentBase = useMemo(() => (renaissance === 0 ? 15 : 20 + (renaissance * 5)), [renaissance]);
  const totalSeraphPoints = useMemo(() => getSeraphBonusPool(renaissance), [renaissance]);

  const [seraphStats, setSeraphStats] = useState<Stats>({ str: 0, end: 0, dex: 0, int: 0, wis: 0 });
  const [seraphPowers, setSeraphPowers] = useState<Record<string, number>>({ 
    'Feu': 0, 'Eau': 0, 'Air': 0, 'Terre': 0, 'Lumière': 0, 'Nécromancie': 0 
  });
  const [seraphResists, setSeraphResists] = useState<Record<string, number>>({ 
    'Feu': 0, 'Eau': 0, 'Air': 0, 'Terre': 0, 'Lumière': 0, 'Nécromancie': 0 
  });
  const [levelPoints, setLevelPoints] = useState<Stats>({ str: 0, end: 0, dex: 0, int: 0, wis: 0 });

  const getCumulativeCost = (n: number) => (n * (n + 1)) / 2;

  const spentSeraphPoints = useMemo(() => {
    const statsCost = Object.values(seraphStats).reduce((acc, val) => acc + getCumulativeCost(val), 0);
    const powersCost = ELEMENTS.reduce((acc, el) => acc + getCumulativeCost(seraphPowers[el] || 0), 0);
    const resistsCost = ELEMENTS.reduce((acc, el) => acc + getCumulativeCost(seraphResists[el] || 0) * 2, 0);
    return statsCost + powersCost + resistsCost;
  }, [seraphStats, seraphPowers, seraphResists]);

  const remainingSeraphPoints = totalSeraphPoints - spentSeraphPoints;

  const finalStats = useMemo(() => ({
    str: currentBase + (seraphStats.str || 0) + (levelPoints.str || 0),
    end: currentBase + (seraphStats.end || 0) + (levelPoints.end || 0),
    dex: currentBase + (seraphStats.dex || 0) + (levelPoints.dex || 0),
    int: currentBase + (seraphStats.int || 0) + (levelPoints.int || 0),
    wis: currentBase + (seraphStats.wis || 0) + (levelPoints.wis || 0),
  }), [currentBase, seraphStats, levelPoints]);

  const finalMagic = useMemo(() => {
    const powers: Record<string, number> = {};
    const resists: Record<string, number> = {};
    ELEMENTS.forEach(el => {
      powers[el] = 100 + (seraphPowers[el] || 0) * 5;
      resists[el] = (el === 'Lumière' ? 5000 : 100) + (seraphResists[el] || 0) * 10;
    });
    return { powers, resists };
  }, [seraphPowers, seraphResists]);

  const totalLevelPointsSpent = useMemo(() => Object.values(levelPoints).reduce((a, b) => a + (b || 0), 0), [levelPoints]);
  const requiredLevel = useMemo(() => 1 + Math.ceil(totalLevelPointsSpent / POINTS_PER_LEVEL), [totalLevelPointsSpent]);

  const derivedStats = useMemo(() => ({
    // Formule PV calibrée sur vos données réelles :
    // 100 END lvl 198 -> 2396 PV | 180 END lvl 216 -> 3455 PV
    hp: Math.floor(30 + (requiredLevel * (finalStats.end * 0.04884 + 7.065))),
    // Formule Mana pondérée (INT > SAG) - Précision 99% sur vos données
    mana: Math.floor(10 + (requiredLevel * ( (finalStats.int * 0.0249) + (finalStats.wis * 0.0155) )))
  }), [finalStats, requiredLevel]);

  const resetAll = () => {
    setSeraphStats({ str: 0, end: 0, dex: 0, int: 0, wis: 0 });
    setSeraphPowers({ 'Feu': 0, 'Eau': 0, 'Air': 0, 'Terre': 0, 'Lumière': 0, 'Nécromancie': 0 });
    setSeraphResists({ 'Feu': 0, 'Eau': 0, 'Air': 0, 'Terre': 0, 'Lumière': 0, 'Nécromancie': 0 });
    setLevelPoints({ str: 0, end: 0, dex: 0, int: 0, wis: 0 });
  };

  // Déclencher le reset complet à chaque changement de renaissance
  useEffect(() => { 
    resetAll(); 
  }, [renaissance]);

  const updateSeraphStat = (type: 'stat' | 'power' | 'resist', key: string, amount: number) => {
    let currentVal = 0;
    if (type === 'stat') currentVal = seraphStats[key as keyof Stats] || 0;
    else if (type === 'power') currentVal = seraphPowers[key] || 0;
    else currentVal = seraphResists[key] || 0;

    if (amount > 0) {
      const multiplier = type === 'resist' ? 2 : 1;
      const nextCost = (currentVal + 1) * multiplier;
      if (remainingSeraphPoints < nextCost) return;
    }
    if (currentVal + amount < 0) return;

    if (type === 'stat') setSeraphStats(prev => ({ ...prev, [key]: (prev[key as keyof Stats] || 0) + amount }));
    else if (type === 'power') setSeraphPowers(prev => ({ ...prev, [key]: (prev[key] || 0) + amount }));
    else setSeraphResists(prev => ({ ...prev, [key]: (prev[key] || 0) + amount }));
  };

  const updateLevelStat = (key: keyof Stats, amount: number) => {
    if ((levelPoints[key] || 0) + amount < 0) return;
    setLevelPoints(prev => ({ ...prev, [key]: (prev[key] || 0) + amount }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-20">
      {/* SIDEBAR */}
      <div className="lg:col-span-4 space-y-6">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden border-t-amber-500/50 text-center">
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Niveau Requis</span>
          <div className="text-7xl font-black text-white my-2">{requiredLevel}</div>
          
          <div className="bg-slate-950/50 rounded-xl py-3 px-4 mb-4 border border-slate-800/50">
            <span className="text-[9px] font-black text-slate-500 uppercase block mb-1 tracking-wider">Points de niveau investis</span>
            <span className="text-3xl font-black text-amber-500">{totalLevelPointsSpent}</span>
          </div>

          <div className="w-full h-1.5 bg-slate-800 rounded-full mt-4 overflow-hidden">
            <div className="h-full bg-amber-500 transition-all" style={{ width: `${((totalLevelPointsSpent % 5) / 5) * 100}%` }} />
          </div>
          <Award className="absolute -bottom-6 -right-6 text-slate-800/20" size={160} />
        </div>

        {renaissance > 0 && (
          <div className="bg-slate-900 border border-amber-500/20 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-2">
               <div className="flex items-center gap-2 text-amber-500">
                 <Star size={18} fill="currentColor" />
                 <h2 className="text-xs font-black uppercase tracking-widest">Points Séraphe</h2>
               </div>
               <div className="text-xl font-black text-amber-500">{remainingSeraphPoints} <span className="text-slate-600 text-xs">/ {totalSeraphPoints}</span></div>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
               <div className="h-full bg-amber-500 transition-all" style={{ width: `${Math.min(100, (spentSeraphPoints / totalSeraphPoints) * 100)}%` }} />
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg text-center">
             <Heart className="text-red-500 mx-auto mb-2" size={24} />
             <div className="text-2xl font-black text-red-400">{derivedStats.hp}</div>
             <div className="text-[9px] font-bold text-slate-500 uppercase mt-1">PV (Estimation)</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg text-center">
             <Sparkles className="text-blue-500 mx-auto mb-2" size={24} />
             <div className="text-2xl font-black text-blue-400">{derivedStats.mana}</div>
             <div className="text-[9px] font-bold text-slate-500 uppercase mt-1">Mana (Estimation)</div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
          <h2 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4 flex items-center justify-center gap-2"><Zap size={14}/> Renaissance</h2>
          <div className="grid grid-cols-7 gap-1">
            {[0, 1, 2, 3, 4, 5, 6].map((r) => (
              <button key={r} onClick={() => setRenaissance(r)} className={`py-3 rounded-xl border text-sm font-black transition-all ${renaissance === r ? 'bg-amber-500 border-amber-500 text-slate-900 shadow-[0_0_10px_rgba(245,158,11,0.2)]' : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500'}`}>
                {r === 0 ? 'H' : `${r}x`}
              </button>
            ))}
          </div>
        </div>
        
        <button onClick={resetAll} className="w-full py-4 bg-slate-800 hover:bg-red-500/10 text-slate-400 rounded-2xl border border-slate-700 transition-all font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2">
          <RotateCcw size={16} /> Reset Build
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="lg:col-span-8 space-y-6">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-slate-800 bg-slate-900/50">
             <h2 className="text-lg font-black text-slate-100 uppercase tracking-tight flex items-center gap-2"><User className="text-amber-500" size={20} /> Attributs & Progression</h2>
          </div>
          <div className="divide-y divide-slate-800/50">
            {(['str', 'end', 'dex', 'int', 'wis'] as (keyof Stats)[]).map((k) => {
              const labels: Record<string, string> = { str: 'Force', end: 'Endurance', dex: 'Dextérité', int: 'Intelligence', wis: 'Sagesse' };
              const colors: Record<string, string> = { str: 'text-red-400', end: 'text-orange-400', dex: 'text-emerald-400', int: 'text-blue-400', wis: 'text-purple-400' };
              const curS = seraphStats[k] || 0;
              return (
                <div key={k} className="p-4 md:p-6 flex flex-col xl:flex-row items-center justify-between gap-6 hover:bg-white/[0.01]">
                  <div className="flex items-center gap-4 w-full xl:w-48">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center font-black text-slate-400 border border-slate-700 uppercase">{k}</div>
                    <div>
                      <div className="font-black text-slate-100 leading-none">{labels[k]}</div>
                      <div className={`text-xl font-black mt-1 ${colors[k]} drop-shadow-sm`}>{finalStats[k]}</div>
                    </div>
                  </div>

                  <div className="flex flex-1 items-center justify-end gap-6 w-full">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-[8px] font-black text-slate-500 uppercase">Points Level (+5/lvl)</span>
                      <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
                         <button onClick={() => updateLevelStat(k, -100)} className="px-2 h-7 text-[9px] font-black rounded bg-slate-900 border border-slate-800 text-slate-500 hover:text-white">-100</button>
                         <button onClick={() => updateLevelStat(k, -10)} className="px-2 h-7 text-[9px] font-black rounded bg-slate-900 border border-slate-800 text-slate-500 hover:text-white">-10</button>
                         <button onClick={() => updateLevelStat(k, -1)} className="w-7 h-7 flex items-center justify-center rounded bg-slate-800 text-slate-400 hover:text-white" disabled={(levelPoints[k] || 0) <= 0}><ChevronDown size={14}/></button>
                         <span className="w-10 text-center text-sm font-black text-white">{levelPoints[k] || 0}</span>
                         <button onClick={() => updateLevelStat(k, 1)} className="w-7 h-7 flex items-center justify-center rounded bg-slate-800 text-slate-400 hover:text-white"><ChevronUp size={14}/></button>
                         <button onClick={() => updateLevelStat(k, 10)} className="px-2 h-7 text-[9px] font-black rounded bg-slate-900 border border-slate-800 text-slate-500 hover:text-white">+10</button>
                         <button onClick={() => updateLevelStat(k, 100)} className="px-2 h-7 text-[9px] font-black rounded bg-slate-900 border border-slate-800 text-slate-500 hover:text-white">+100</button>
                      </div>
                    </div>

                    {renaissance > 0 && (
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-[8px] font-black text-amber-500 uppercase">Points Séraphe (Coût: {curS + 1})</span>
                        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-amber-500/20">
                           <button onClick={() => updateSeraphStat('stat', k, -1)} className="w-7 h-7 flex items-center justify-center rounded bg-slate-800 text-slate-400" disabled={curS <= 0}>-</button>
                           <span className="w-7 text-center text-xs font-black text-amber-500">{curS}</span>
                           <button onClick={() => updateSeraphStat('stat', k, 1)} className="w-7 h-7 flex items-center justify-center rounded bg-slate-800 text-slate-400" disabled={remainingSeraphPoints < (curS + 1)}>+</button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {renaissance > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {/* POWERS */}
             <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="p-4 border-b border-slate-800 bg-emerald-500/5 flex items-center gap-2">
                   <Flame className="text-emerald-500" size={16} />
                   <h2 className="text-xs font-black text-slate-100 uppercase tracking-widest">Puissances (+5)</h2>
                </div>
                <div className="p-4 space-y-3">
                   {ELEMENTS.map(el => {
                     const cur = seraphPowers[el] || 0;
                     return (
                       <div key={el} className="flex items-center justify-between bg-slate-950/50 p-2 rounded-xl border border-slate-800/50">
                          <div>
                            <span className="text-xs font-bold text-slate-400 block">{el}</span>
                            <span className="text-lg font-black text-emerald-400 leading-none">{finalMagic.powers[el]}</span>
                          </div>
                          <div className="flex items-center gap-3">
                             <div className="text-right">
                                <div className="text-[8px] font-black text-amber-500 uppercase">Coût: {cur + 1}</div>
                                <div className="text-[10px] font-bold text-slate-500">Pts: +{cur * 5}</div>
                             </div>
                             <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
                               <button onClick={() => updateSeraphStat('power', el, -1)} className="w-6 h-6 flex items-center justify-center rounded bg-slate-800 text-slate-500" disabled={cur <= 0}>-</button>
                               <button onClick={() => updateSeraphStat('power', el, 1)} className="w-6 h-6 flex items-center justify-center rounded bg-slate-800 text-slate-500" disabled={remainingSeraphPoints < (cur + 1)}>+</button>
                             </div>
                          </div>
                       </div>
                     );
                   })}
                </div>
             </div>
             {/* RESISTANCES */}
             <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="p-4 border-b border-slate-800 bg-blue-500/5 flex items-center gap-2">
                   <Shield className="text-blue-500" size={16} />
                   <h2 className="text-xs font-black text-slate-100 uppercase tracking-widest">Résistances (+10)</h2>
                </div>
                <div className="p-4 space-y-3">
                   {ELEMENTS.map(el => {
                     const cur = seraphResists[el] || 0;
                     const nextCost = (cur + 1) * 2;
                     return (
                       <div key={el} className="flex items-center justify-between bg-slate-950/50 p-2 rounded-xl border border-slate-800/50">
                          <div>
                            <span className="text-xs font-bold text-slate-400 block">{el}</span>
                            <span className="text-lg font-black text-blue-400 leading-none">{finalMagic.resists[el]}</span>
                          </div>
                          <div className="flex items-center gap-3">
                             <div className="text-right">
                                <div className="text-[8px] font-black text-amber-500 uppercase text-blue-400">Coût: {nextCost}</div>
                                <div className="text-[10px] font-bold text-slate-500">Pts: +{cur * 10}</div>
                             </div>
                             <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
                               <button onClick={() => updateSeraphStat('resist', el, -1)} className="w-6 h-6 flex items-center justify-center rounded bg-slate-800 text-slate-500" disabled={cur <= 0}>-</button>
                               <button onClick={() => updateSeraphStat('resist', el, 1)} className="w-6 h-6 flex items-center justify-center rounded bg-slate-800 text-slate-500" disabled={remainingSeraphPoints < nextCost}>+</button>
                             </div>
                          </div>
                       </div>
                     );
                   })}
                </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatPlanner;