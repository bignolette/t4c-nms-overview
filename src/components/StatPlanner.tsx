import { useState, useMemo, useEffect } from 'react';
import { User, Zap, ChevronUp, ChevronDown, RotateCcw, Award, Heart, Sparkles, Star, Shield, Flame, Save, Trash2, HelpCircle, Info, X } from 'lucide-react';
import CharacterNameVisual from './CharacterNameVisual';

interface Stats {
  str: number; end: number; dex: number; int: number; wis: number;
}

interface SavedCharacter {
  name: string;
  renaissance: number;
  seraphStats: Stats;
  seraphPowers: Record<string, number>;
  seraphResists: Record<string, number>;
  levelPoints: Stats;
  finalStats: Stats;
  updatedAt: number;
}

type Element = 'Feu' | 'Eau' | 'Air' | 'Terre' | 'Lumière' | 'Nécromancie';

const ELEMENTS: Element[] = ['Feu', 'Eau', 'Air', 'Terre', 'Lumière', 'Nécromancie'];

const normalizeName = (name: string) => {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, 15);
};

const StatPlanner = () => {
  // 1. ÉTATS
  const [renaissance, setRenaissance] = useState(0);
  const [charName, setCharName] = useState('');
  const [activeCharName, setActiveCharName] = useState<string | null>(null);
  const [savedChars, setSavedChars] = useState<SavedCharacter[]>([]);
  const [seraphStats, setSeraphStats] = useState<Stats>({ str: 0, end: 0, dex: 0, int: 0, wis: 0 });
  const [seraphPowers, setSeraphPowers] = useState<Record<string, number>>({ 
    'Feu': 0, 'Eau': 0, 'Air': 0, 'Terre': 0, 'Lumière': 0, 'Nécromancie': 0 
  });
  const [seraphResists, setSeraphResists] = useState<Record<string, number>>({ 
    'Feu': 0, 'Eau': 0, 'Air': 0, 'Terre': 0, 'Lumière': 0, 'Nécromancie': 0 
  });
  const [levelPoints, setLevelPoints] = useState<Stats>({ str: 0, end: 0, dex: 0, int: 0, wis: 0 });
  const [modal, setModal] = useState<{ show: boolean; title: string; message: string; onConfirm?: () => void; type: 'confirm' | 'info' }>(
    { show: false, title: '', message: '', type: 'info' }
  );

  const POINTS_PER_LEVEL = 5;

  // 2. CALCULS
  const getSeraphBonusPool = (ren: number) => {
    if (ren === 0) return 0;
    const table: Record<number, number> = { 1: 10, 2: 12, 3: 14, 4: 16, 5: 18, 6: 20 };
    return table[ren] || 0;
  };

  const currentBase = useMemo(() => (renaissance === 0 ? 15 : 20 + (renaissance * 5)), [renaissance]);
  const totalSeraphPoints = useMemo(() => getSeraphBonusPool(renaissance), [renaissance]);
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

  const requiredLevel = useMemo(() => {
    return 1 + Math.ceil(totalLevelPointsSpent / POINTS_PER_LEVEL);
  }, [totalLevelPointsSpent, POINTS_PER_LEVEL]);

  const derivedStats = useMemo(() => ({
    hp: Math.floor(30 + (requiredLevel * (finalStats.end * 0.04884 + 7.065))),
    mana: Math.floor(10 + (requiredLevel * ( (finalStats.int * 0.0249) + (finalStats.wis * 0.0155) )))
  }), [finalStats, requiredLevel]);

  // 3. FONCTIONS
  const showConfirm = (title: string, message: string, onConfirm: () => void) => {
    setModal({ show: true, title, message, onConfirm, type: 'confirm' });
  };

  const showInfo = (title: string, message: string) => {
    setModal({ show: true, title, message, type: 'info' });
  };

  const saveCharacter = () => {
    const cleanName = normalizeName(charName);
    if (!cleanName) return;

    const executeSave = () => {
      const newChar: SavedCharacter = {
        name: cleanName,
        renaissance,
        seraphStats,
        seraphPowers,
        seraphResists,
        levelPoints,
        finalStats,
        updatedAt: Date.now()
      };

      let updatedList = [...savedChars];
      const existingIdx = updatedList.findIndex(c => c.name === cleanName);

      if (existingIdx >= 0) {
        updatedList[existingIdx] = newChar;
      } else {
        if (updatedList.length >= 10) {
          showInfo("Limite atteinte", "Vous ne pouvez pas avoir plus de 10 personnages.");
          return;
        }
        updatedList.push(newChar);
      }

      setSavedChars(updatedList);
      localStorage.setItem('t4c-characters', JSON.stringify(updatedList));
      setActiveCharName(cleanName);
      setCharName('');
      setModal({ show: false, title: '', message: '', type: 'info' });
    };

    const exists = savedChars.some(c => c.name === cleanName);
    if (exists) {
      showConfirm("Écraser le profil ?", `Le personnage ${cleanName} existe déjà. Voulez-vous le remplacer ?`, executeSave);
    } else {
      executeSave();
    }
  };

  const updateActiveCharacter = () => {
    if (!activeCharName) return;
    
    const updatedList = savedChars.map(char => {
      if (char.name === activeCharName) {
        return {
          ...char,
          renaissance,
          seraphStats,
          seraphPowers,
          seraphResists,
          levelPoints,
          finalStats,
          updatedAt: Date.now()
        };
      }
      return char;
    });

    setSavedChars(updatedList);
    localStorage.setItem('t4c-characters', JSON.stringify(updatedList));
    showInfo("Succès", `Les statistiques de ${activeCharName} ont été mises à jour.`);
  };

  const loadCharacter = (char: SavedCharacter) => {
    showConfirm(
      "Charger ce personnage ?", 
      `Voulez-vous charger ${char.name} ? Vos statistiques actuelles non sauvegardées seront perdues.`,
      () => {
        setRenaissance(char.renaissance);
        setSeraphStats(char.seraphStats);
        setSeraphPowers(char.seraphPowers);
        setSeraphResists(char.seraphResists);
        setLevelPoints(char.levelPoints);
        setActiveCharName(char.name);
        setModal({ show: false, title: '', message: '', type: 'info' });
      }
    );
  };

  const deleteCharacter = (name: string) => {
    showConfirm(
      "Supprimer le personnage ?",
      `Êtes-vous sûr de vouloir supprimer ${name} ? Cette action est irréversible.`,
      () => {
        const updated = savedChars.filter(c => c.name !== name);
        setSavedChars(updated);
        localStorage.setItem('t4c-characters', JSON.stringify(updated));
        if (activeCharName === name) setActiveCharName(null);
        setModal({ show: false, title: '', message: '', type: 'info' });
      }
    );
  };

  const resetAll = () => {
    setSeraphStats({ str: 0, end: 0, dex: 0, int: 0, wis: 0 });
    setSeraphPowers({ 'Feu': 0, 'Eau': 0, 'Air': 0, 'Terre': 0, 'Lumière': 0, 'Nécromancie': 0 });
    setSeraphResists({ 'Feu': 0, 'Eau': 0, 'Air': 0, 'Terre': 0, 'Lumière': 0, 'Nécromancie': 0 });
    setLevelPoints({ str: 0, end: 0, dex: 0, int: 0, wis: 0 });
    setActiveCharName(null);
  };

  const handleRenaissanceChange = (r: number) => {
    if (r !== renaissance) {
      setRenaissance(r);
      resetAll();
    }
  };

  // 4. EFFETS
  useEffect(() => {
    const saved = localStorage.getItem('t4c-characters');
    if (saved) setSavedChars(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('t4c-planner-stats', JSON.stringify(finalStats));
  }, [finalStats]);

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
    
    if (amount > 0) {
      const nextTotal = totalLevelPointsSpent + amount;
      const nextLevel = 1 + Math.ceil(nextTotal / POINTS_PER_LEVEL);
      if (nextLevel > 260) return;
    }

    setLevelPoints(prev => ({ ...prev, [key]: (prev[key] || 0) + amount }));
  };

  return (
    <div className="space-y-6 pb-20 text-left">
      {/* BLOC PERSONNAGES */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl text-left">
        <h2 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
          <Save size={14}/> Mes Personnages ({savedChars.length}/10)
        </h2>
        
        <div className="flex flex-col gap-4">
          <div className="w-full space-y-1">
            <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1 text-left block">Nouveau Personnage</label>
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="NOM DU PERSONNAGE"
                value={charName}
                onChange={(e) => setCharName(normalizeName(e.target.value))}
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm font-bold text-amber-500 placeholder:text-slate-800 focus:outline-none focus:border-amber-500/50 transition-all"
              />
              <button onClick={saveCharacter} disabled={!charName} className="px-8 bg-amber-500 text-slate-900 rounded-xl disabled:opacity-30 hover:bg-amber-400 transition-colors shadow-lg font-black text-2xl flex items-center justify-center">+</button>
            </div>
          </div>

          <div className="w-full space-y-1 overflow-hidden">
            <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1 text-left block">Mes Profils Enregistrés</label>
            <div className="flex flex-wrap gap-2 max-h-[120px] overflow-y-auto p-3 bg-slate-950/30 border border-slate-800/50 rounded-xl">
              {savedChars.length === 0 ? (
                <div className="text-[10px] text-slate-600 italic px-2 py-1 w-full text-center">Aucun personnage enregistré</div>
              ) : (
                savedChars.map((char) => {
                  const isActive = activeCharName === char.name;
                  return (
                    <div key={char.name} onClick={() => loadCharacter(char)} className={`flex items-center gap-3 px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${isActive ? 'bg-amber-500/20 border-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.2)]' : 'bg-slate-900 border-slate-800 hover:border-amber-500/50'}`}>
                      <div className="flex flex-col">
                        <span className={`text-[11px] font-black uppercase leading-tight ${isActive ? 'text-amber-500' : 'text-slate-200'}`}>{char.name}</span>
                        <span className="text-[10px] font-black italic tracking-tighter text-slate-500">
                          {char.renaissance === 0 ? "Humain" : `RN x${char.renaissance}`}
                        </span>
                      </div>
                      <div onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => deleteCharacter(char.name)} className="p-1 text-slate-500 hover:text-red-500 transition-colors"><Trash2 size={12} /></button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* SIDEBAR */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center shadow-xl overflow-hidden relative group">
            <h2 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 flex items-center justify-center gap-2"><Zap size={14}/> Renaissance</h2>
            <div className="text-3xl font-black text-amber-500 mb-6 drop-shadow-[0_0_10px_rgba(245,158,11,0.3)] group-hover:scale-110 transition-transform uppercase italic">
              {renaissance === 0 ? "Humain" : `RN x${renaissance}`}
            </div>
            <div className="grid grid-cols-7 gap-1 relative z-10">
              {[0, 1, 2, 3, 4, 5, 6].map((r) => (
                <button key={r} onClick={() => handleRenaissanceChange(r)} className={`py-2 rounded-lg border text-[10px] font-black transition-all ${renaissance === r ? 'bg-amber-500 border-amber-500 text-slate-900' : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500'}`}>
                  {r === 0 ? 'H' : `${r}x`}
                </button>
              ))}
            </div>
            <Zap className="absolute -bottom-4 -left-4 text-slate-800/20" size={80} />
          </div>
          <button onClick={resetAll} className="w-full py-4 bg-slate-800 hover:bg-red-500/10 text-slate-400 rounded-2xl border border-slate-700 transition-all font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2"><RotateCcw size={16} /> Reset Build</button>
        </div>

        {/* MAIN */}
        <div className="lg:col-span-9 space-y-6">
          <CharacterNameVisual name={activeCharName} onUpdate={updateActiveCharacter} />
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-slate-800">
              <div className="h-full bg-amber-500 transition-all duration-500" style={{ width: `${((totalLevelPointsSpent % POINTS_PER_LEVEL) / POINTS_PER_LEVEL) * 100}%` }} />
            </div>

            <div className="p-4 border-b border-slate-800 bg-slate-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
               <div className="flex items-center gap-2">
                  <User className="text-amber-500" size={18} /> 
                  <h2 className="text-sm font-black text-slate-100 uppercase tracking-tight">Attributs & Progression</h2>
               </div>
               <div className="text-right">
                 <span className="text-[8px] font-black text-slate-500 uppercase block leading-none tracking-widest">Points Investis</span>
                 <span className="text-xl font-black text-amber-500 leading-none">{totalLevelPointsSpent}</span>
               </div>
            </div>

            <div className="flex flex-col md:flex-row">
              {/* COLONNE STATS VITALES */}
              <div className="w-full md:w-48 bg-slate-950/50 p-6 border-b md:border-b-0 md:border-r border-slate-800 flex flex-col justify-center gap-6">
                <div className="text-center">
                  <span className="text-[8px] font-black text-slate-500 uppercase block leading-none tracking-[0.2em] mb-1">Niveau Requis</span>
                  <div className="flex items-center justify-center gap-2">
                    <Award className="text-amber-500" size={16} />
                    <span className="text-4xl font-black text-white leading-none">{requiredLevel}</span>
                  </div>
                </div>

                <div className="h-px bg-slate-800 w-1/2 mx-auto" />

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center"><Heart className="text-red-500" size={16} /></div>
                    <div>
                      <div className="text-lg font-black text-red-400 leading-none">{derivedStats.hp}</div>
                      <div className="text-[8px] font-bold text-slate-500 uppercase tracking-tighter">PV (Est.)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center"><Sparkles className="text-blue-500" size={16} /></div>
                    <div>
                      <div className="text-lg font-black text-blue-400 leading-none">{derivedStats.mana}</div>
                      <div className="text-[8px] font-bold text-slate-500 uppercase tracking-tighter">Mana (Est.)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* LISTE DES ATTRIBUTS */}
              <div className="flex-1 divide-y divide-slate-800/50">
                {(['str', 'end', 'dex', 'int', 'wis'] as (keyof Stats)[]).map((k) => {
                  const labels: Record<string, string> = { str: 'Force', end: 'Endurance', dex: 'Dextérité', int: 'Intelligence', wis: 'Sagesse' };
                  const colors: Record<string, string> = { str: 'text-red-400', end: 'text-orange-400', dex: 'text-emerald-400', int: 'text-blue-400', wis: 'text-purple-400' };
                  const curS = seraphStats[k] || 0;
                  return (
                      <div key={k} className="px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-6 hover:bg-white/[0.02] transition-colors">
                        <div className="flex items-center gap-4 w-full sm:w-40">
                          <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center font-black text-xs text-slate-400 border border-slate-700 uppercase shadow-inner">{k}</div>
                          <div>
                            <div className="font-black text-slate-400 text-[11px] uppercase tracking-wider leading-none mb-1">{labels[k]}</div>
                            <div className={`text-2xl font-black ${colors[k]} drop-shadow-md`}>{finalStats[k]}</div>
                          </div>
                        </div>
                        <div className="flex flex-1 items-center justify-end gap-6 w-full">
                          <div className="flex flex-col items-center gap-1.5">
                            <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Points Niveau</span>
                            <div className="flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-800 shadow-inner">
                               <button onClick={() => updateLevelStat(k, -100)} className="px-2.5 h-8 text-[10px] font-black rounded-lg bg-slate-900 border border-slate-800 text-slate-500 hover:text-white hover:border-slate-600 transition-all">-100</button>
                               <button onClick={() => updateLevelStat(k, -10)} className="px-2.5 h-8 text-[10px] font-black rounded-lg bg-slate-900 border border-slate-800 text-slate-500 hover:text-white hover:border-slate-600 transition-all">-10</button>
                               <button onClick={() => updateLevelStat(k, -1)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all" disabled={(levelPoints[k] || 0) <= 0}><ChevronDown size={16}/></button>
                               <span className="w-12 text-center text-lg font-black text-white">{levelPoints[k] || 0}</span>
                               <button onClick={() => updateLevelStat(k, 1)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all"><ChevronUp size={16}/></button>
                               <button onClick={() => updateLevelStat(k, 10)} className="px-2.5 h-8 text-[10px] font-black rounded-lg bg-slate-900 border border-slate-800 text-slate-500 hover:text-white hover:border-slate-600 transition-all">+10</button>
                               <button onClick={() => updateLevelStat(k, 100)} className="px-2.5 h-8 text-[10px] font-black rounded-lg bg-slate-900 border border-slate-800 text-slate-500 hover:text-white hover:border-slate-600 transition-all">+100</button>
                            </div>
                          </div>
                          {renaissance > 0 && (
                            <div className="flex flex-col items-center gap-1.5">
                              <span className="text-[9px] font-black text-amber-600 uppercase tracking-widest">Points RN</span>
                              <div className="flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-amber-500/20 shadow-inner">
                                 <button onClick={() => updateSeraphStat('stat', k, -1)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:text-amber-500 transition-all" disabled={curS <= 0}>-</button>
                                 <span className="w-8 text-center text-sm font-black text-amber-500">{curS}</span>
                                 <button onClick={() => updateSeraphStat('stat', k, 1)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:text-amber-500 transition-all" disabled={remainingSeraphPoints < (curS + 1)}>+</button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                  );
                })}
              </div>
            </div>
          </div>

          {renaissance > 0 && (
            <div className="bg-slate-900 border border-amber-500/20 rounded-2xl p-4 shadow-xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                 <div className="flex items-center gap-2 text-amber-500"><Star size={18} fill="currentColor" /><h2 className="text-[10px] font-black uppercase tracking-widest">Points Séraphe</h2></div>
                 <div className="w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-amber-500 transition-all duration-500" style={{ width: `${Math.min(100, (spentSeraphPoints / totalSeraphPoints) * 100)}%` }} /></div>
              </div>
              <div className="text-xl font-black text-amber-500">{remainingSeraphPoints} <span className="text-slate-600 text-xs">/ {totalSeraphPoints}</span></div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="p-4 border-b border-slate-800 bg-emerald-500/5 flex items-center gap-2">
                   <Flame className="text-emerald-500" size={18} />
                   <h2 className="text-xs font-black text-slate-100 uppercase tracking-widest">Puissances (+5)</h2>
                </div>
                <div className="p-4 space-y-3">
                   {ELEMENTS.map(el => {
                     const cur = seraphPowers[el] || 0;
                     return (
                       <div key={el} className="flex items-center justify-between bg-slate-950/50 p-3 rounded-xl border border-slate-800/50 hover:border-emerald-500/30 transition-colors group">
                          <div className="flex items-center gap-4">
                            <div className="w-px h-8 bg-emerald-500/20 group-hover:bg-emerald-500/50 transition-colors" />
                            <div>
                              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-0.5">{el}</span>
                              <span className="text-xl font-black text-emerald-400 leading-none">{finalMagic.powers[el]}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800 shadow-inner">
                             <button onClick={() => updateSeraphStat('power', el, -1)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-800 text-slate-500 hover:text-white hover:bg-slate-700 transition-all" disabled={cur <= 0}>-</button>
                             <div className="w-8 text-center text-xs font-black text-amber-500/50">{cur}</div>
                             <button onClick={() => updateSeraphStat('power', el, 1)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-800 text-slate-500 hover:text-white hover:bg-slate-700 transition-all" disabled={remainingSeraphPoints < (cur + 1)}>+</button>
                          </div>
                       </div>
                     );
                   })}
                </div>
             </div>
             <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="p-4 border-b border-slate-800 bg-blue-500/5 flex items-center gap-2">
                   <Shield className="text-blue-500" size={18} />
                   <h2 className="text-xs font-black text-slate-100 uppercase tracking-widest">Résistances (+10)</h2>
                </div>
                <div className="p-4 space-y-3">
                   {ELEMENTS.map(el => {
                     const cur = seraphResists[el] || 0;
                     const nextCost = (cur + 1) * 2;
                     return (
                       <div key={el} className="flex items-center justify-between bg-slate-950/50 p-3 rounded-xl border border-slate-800/50 hover:border-blue-500/30 transition-colors group">
                          <div className="flex items-center gap-4">
                            <div className="w-px h-8 bg-blue-500/20 group-hover:bg-blue-500/50 transition-colors" />
                            <div>
                              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-0.5">{el}</span>
                              <span className="text-xl font-black text-blue-400 leading-none">{finalMagic.resists[el]}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800 shadow-inner">
                             <button onClick={() => updateSeraphStat('resist', el, -1)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-800 text-slate-500 hover:text-white hover:bg-slate-700 transition-all" disabled={cur <= 0}>-</button>
                             <div className="w-8 text-center text-xs font-black text-amber-500/50">{cur}</div>
                             <button onClick={() => updateSeraphStat('resist', el, 1)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-800 text-slate-500 hover:text-white hover:bg-slate-700 transition-all" disabled={remainingSeraphPoints < nextCost}>+</button>
                          </div>
                       </div>
                     );
                   })}
                </div>
             </div>
          </div>
        </div>
      </div>

      {modal.show && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={() => setModal(prev => ({ ...prev, show: false }))}></div>
          <div className="bg-slate-900 border border-slate-800 w-full max-w-sm rounded-3xl shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-200 text-left">
            <div className={`h-2 w-full ${modal.type === 'confirm' ? 'bg-amber-500' : 'bg-emerald-500'}`} />
            <div className="p-8 text-center">
              <div className={`w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center ${modal.type === 'confirm' ? 'bg-amber-500/10 text-amber-500' : 'bg-emerald-500/10 text-emerald-500'}`}>
                {modal.type === 'confirm' ? <HelpCircle size={32} /> : <Info size={32} />}
              </div>
              <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">{modal.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">{modal.message}</p>
              <div className="flex gap-3">
                {modal.type === 'confirm' ? (
                  <>
                    <button onClick={() => setModal(prev => ({ ...prev, show: false }))} className="flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold transition-all">Annuler</button>
                    <button onClick={() => { if (modal.onConfirm) modal.onConfirm(); }} className="flex-1 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-black uppercase tracking-wider shadow-lg transition-all">Confirmer</button>
                  </>
                ) : (
                  <button onClick={() => setModal(prev => ({ ...prev, show: false }))} className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black uppercase tracking-wider transition-all shadow-lg">J'ai compris</button>
                )}
              </div>
            </div>
            <button onClick={() => setModal(prev => ({ ...prev, show: false }))} className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"><X size={20} /></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatPlanner;
