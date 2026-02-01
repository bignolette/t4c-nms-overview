import { useState, useMemo, useEffect, useRef } from 'react';
import { User, Zap, ChevronUp, ChevronDown, RotateCcw, Award, Heart, Sparkles, Star, Shield, Flame, Save, Trash2, HelpCircle, Info, X, BookOpen, Bell } from 'lucide-react';
import CharacterNameVisual from './CharacterNameVisual';
import SpiderChart from './SpiderChart';
import { motion, AnimatePresence } from 'framer-motion';
import { spellPowerConfig } from '../data/spell_power';
import { useData } from '../context/DataContext';
import type { Stats, SavedCharacter, SeraphElement } from '../data/types';

const SERAPH_ELEMENTS: { key: SeraphElement; label: string }[] = [
  { key: 'fire', label: 'Feu' },
  { key: 'water', label: 'Eau' },
  { key: 'air', label: 'Air' },
  { key: 'earth', label: 'Terre' },
  { key: 'light', label: 'Lumière' },
  { key: 'necromancy', label: 'Nécromancie' }
];

const normalizeName = (name: string) => {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, 15);
};

const StatPlanner = () => {
  const { savedCharacters, setSavedCharacters, setActiveStats } = useData();

  // 1. ÉTATS
  const [renaissance, setRenaissance] = useState(0);
  const [charName, setCharName] = useState('');
  const [activeCharName, setActiveCharName] = useState<string | null>(null);
  // Removed local savedChars state
  const [seraphStats, setSeraphStats] = useState<Stats>({ str: 0, end: 0, dex: 0, int: 0, wis: 0 });
  const [seraphPowers, setSeraphPowers] = useState<Record<SeraphElement, number>>({ 
    'fire': 0, 'water': 0, 'air': 0, 'earth': 0, 'light': 0, 'necromancy': 0 
  });
  const [seraphResists, setSeraphResists] = useState<Record<SeraphElement, number>>({ 
    'fire': 0, 'water': 0, 'air': 0, 'earth': 0, 'light': 0, 'necromancy': 0 
  });
  const [levelPoints, setLevelPoints] = useState<Stats>({ str: 0, end: 0, dex: 0, int: 0, wis: 0 });
  const [modal, setModal] = useState<{ show: boolean; title: string; message: string; onConfirm?: () => void; type: 'confirm' | 'info' }>(
    { show: false, title: '', message: '', type: 'info' }
  );
  const [notification, setNotification] = useState<{ message: string, type: 'success' | 'error' } | null>(null);
  const prevLevelRef = useRef<number>(1);

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
    const statsCost = Object.values(seraphStats).reduce((acc: number, val: number) => acc + getCumulativeCost(val), 0);
    const powersCost = SERAPH_ELEMENTS.reduce((acc, el) => acc + getCumulativeCost(seraphPowers[el.key] || 0), 0);
    const resistsCost = SERAPH_ELEMENTS.reduce((acc, el) => acc + (seraphResists[el.key] || 0) * 2, 0);
    return statsCost + powersCost + resistsCost;
  }, [seraphStats, seraphPowers, seraphResists]);

  const remainingSeraphPoints = totalSeraphPoints - (spentSeraphPoints as number);

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
    SERAPH_ELEMENTS.forEach(el => {
      powers[el.label] = 100 + (seraphPowers[el.key] || 0) * 5;
      resists[el.label] = (el.key === 'light' ? 5000 : 100) + (seraphResists[el.key] || 0) * 10;
    });
    return { powers, resists };
  }, [seraphPowers, seraphResists]);

  const totalLevelPointsSpent = useMemo(() => Object.values(levelPoints).reduce((a: number, b: number) => a + (b || 0), 0), [levelPoints]);

  const requiredLevel = useMemo(() => {
    return 1 + Math.ceil(totalLevelPointsSpent / POINTS_PER_LEVEL);
  }, [totalLevelPointsSpent, POINTS_PER_LEVEL]);

  const derivedStats = useMemo(() => ({
    hp: Math.floor(30 + (requiredLevel * (finalStats.end * 0.04884 + 7.065))),
    mana: Math.floor(10 + (requiredLevel * ( (finalStats.int * 0.0249) + (finalStats.wis * 0.0155) )))
  }), [finalStats, requiredLevel]);

  const magicTiers = useMemo(() => {
    const intRank = spellPowerConfig.simulation.calculateBaseRank(finalStats.int, 0);
    const wisRank = spellPowerConfig.simulation.calculateBaseRank(0, finalStats.wis);
    
    const nextInt = (intRank + 1) * spellPowerConfig.simulation.palierSize;
    const nextWis = (wisRank + 1) * spellPowerConfig.simulation.palierSize;

    return {
      int: { rank: intRank, next: nextInt, needed: nextInt - finalStats.int },
      wis: { rank: wisRank, next: nextWis, needed: nextWis - finalStats.wis }
    };
  }, [finalStats]);

  // 3. FONCTIONS
  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 2000);
  };

  const showConfirm = (title: string, message: string, onConfirm: () => void) => {
    setModal({ show: true, title, message, onConfirm, type: 'confirm' });
  };

  const showInfo = (title: string, message: string) => {
    setModal({ show: true, title, message, type: 'info' });
  };

  const saveCharacter = (nameOverride?: string) => {
    const targetName = nameOverride || charName;
    const cleanName = normalizeName(targetName);
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

      let updatedList = [...savedCharacters];
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

      setSavedCharacters(updatedList);
      setActiveCharName(cleanName);
      if (!nameOverride) setCharName('');
      setModal({ show: false, title: '', message: '', type: 'info' });
      showNotification("Personnage enregistré avec succès !", "success");
    };

    const exists = savedCharacters.some(c => c.name === cleanName);
    if (exists) {
      // If it's an explicit override (button below name) or same as active, maybe just save
      // but to be safe we follow existing logic or just execute if it's an update.
      if (nameOverride || cleanName === activeCharName) {
        executeSave();
      } else {
        showConfirm("Écraser le profil ?", `Le personnage ${cleanName} existe déjà. Voulez-vous le remplacer ?`, executeSave);
      }
    } else {
      executeSave();
    }
  };

  const loadCharacter = (char: SavedCharacter) => {
    setRenaissance(char.renaissance);
    setSeraphStats(char.seraphStats);
    setSeraphPowers(char.seraphPowers);
    setSeraphResists(char.seraphResists);
    setLevelPoints(char.levelPoints);
    setActiveCharName(char.name);
    // Removed setCharName(char.name) to keep creation and update separate
    prevLevelRef.current = 1 + Math.ceil(Object.values(char.levelPoints).reduce((a, b) => a + (b || 0), 0) / POINTS_PER_LEVEL);
  };

  const deleteCharacter = (name: string) => {
    showConfirm(
      "Supprimer le personnage ?",
      `Êtes-vous sûr de vouloir supprimer ${name} ? Cette action est irréversible.`,
      () => {
        const updated = savedCharacters.filter(c => c.name !== name);
        setSavedCharacters(updated);
        if (activeCharName === name) setActiveCharName(null);
        setModal({ show: false, title: '', message: '', type: 'info' });
      }
    );
  };

  const resetAll = () => {
    setSeraphStats({ str: 0, end: 0, dex: 0, int: 0, wis: 0 });
    setSeraphPowers({ 'fire': 0, 'water': 0, 'air': 0, 'earth': 0, 'light': 0, 'necromancy': 0 });
    setSeraphResists({ 'fire': 0, 'water': 0, 'air': 0, 'earth': 0, 'light': 0, 'necromancy': 0 });
    setLevelPoints({ str: 0, end: 0, dex: 0, int: 0, wis: 0 });
    setActiveCharName(null);
    prevLevelRef.current = 1;
  };

  const handleRenaissanceChange = (r: number) => {
    if (r !== renaissance) {
      setRenaissance(r);
      setSeraphStats({ str: 0, end: 0, dex: 0, int: 0, wis: 0 });
      setSeraphPowers({ 'fire': 0, 'water': 0, 'air': 0, 'earth': 0, 'light': 0, 'necromancy': 0 });
      setSeraphResists({ 'fire': 0, 'water': 0, 'air': 0, 'earth': 0, 'light': 0, 'necromancy': 0 });
      setLevelPoints({ str: 0, end: 0, dex: 0, int: 0, wis: 0 });
      prevLevelRef.current = 1;
    }
  };

  // 4. EFFETS
  useEffect(() => {
    setActiveStats(finalStats);
  }, [finalStats, setActiveStats]);

  useEffect(() => {
    if (requiredLevel > prevLevelRef.current) {
        showNotification(`Niveau gagné : ${requiredLevel}`, 'success');
    } else if (requiredLevel < prevLevelRef.current) {
        showNotification(`Niveau perdu : ${requiredLevel}`, 'error');
    }
    prevLevelRef.current = requiredLevel;
  }, [requiredLevel]);

  const updateSeraphStat = (type: 'stat' | 'power' | 'resist', key: string, amount: number) => {
    let currentVal = 0;
    if (type === 'stat') currentVal = seraphStats[key as keyof Stats] || 0;
    else if (type === 'power') currentVal = seraphPowers[key as SeraphElement] || 0;
    else currentVal = seraphResists[key as SeraphElement] || 0;

    if (amount > 0) {
      const nextCost = type === 'resist' ? 2 : (currentVal + 1);
      if (remainingSeraphPoints < nextCost) return;
    }
    if (currentVal + amount < 0) return;

    if (type === 'stat') setSeraphStats(prev => ({ ...prev, [key]: (prev[key as keyof Stats] || 0) + amount }));
    else if (type === 'power') setSeraphPowers(prev => ({ ...prev, [key]: (prev[key as SeraphElement] || 0) + amount }));
    else setSeraphResists(prev => ({ ...prev, [key]: (prev[key as SeraphElement] || 0) + amount }));
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
      <div className="glass-card rounded-2xl p-6 text-left relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent pointer-events-none" />
        <div className="flex items-center justify-between mb-4 relative z-10">
            <h2 className="text-xs font-black text-amber-500 uppercase tracking-widest flex items-center gap-2 font-fantasy">
            <Save size={14}/> Mes Personnages ({savedCharacters.length}/10)
            </h2>
        </div>
        
        <div className="flex flex-col gap-4 relative z-10">
          <div className="w-full space-y-1">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 text-left block">Nom du Personnage (Sauvegarder/Mettre à jour)</label>
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="NOM DU PERSONNAGE"
                value={charName}
                onChange={(e) => setCharName(normalizeName(e.target.value))}
                className="flex-1 bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-2 text-sm font-bold text-amber-500 placeholder:text-slate-600 focus:outline-none focus:border-amber-500/50 transition-all backdrop-blur-sm"
              />
              <button 
                onClick={() => {
                  saveCharacter();
                  setCharName(''); // Clear input after clicking +
                }} 
                disabled={!charName} 
                className="btn-primary px-8 text-2xl shrink-0 font-fantasy"
                title="Ajouter un nouveau personnage"
              >
                +
              </button>
            </div>
          </div>

          <div className="w-full space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 text-left block">Mes Profils Enregistrés</label>
            <div className="flex flex-wrap gap-3 p-4 bg-slate-950/20 border border-white/5 rounded-2xl backdrop-blur-sm">
              {savedCharacters.length === 0 ? (
                <div className="text-xs text-slate-600 italic px-2 py-4 w-full text-center">Aucun personnage enregistré</div>
              ) : (
                savedCharacters.map((char) => {
                  const isActive = activeCharName === char.name;
                  return (
                    <div key={char.name} onClick={() => loadCharacter(char)} className={`flex items-center gap-4 px-4 py-2.5 rounded-xl border transition-all cursor-pointer shadow-sm ${isActive ? 'bg-amber-500/20 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.25)] scale-[1.02]' : 'bg-slate-900 border-slate-800 hover:border-amber-500/50 hover:scale-[1.02]'}`}>
                      <div className="flex flex-col min-w-[80px]">
                        <span className={`text-xs font-black uppercase leading-tight tracking-tight ${isActive ? 'text-amber-500' : 'text-slate-200'}`}>{char.name}</span>
                        <span className="text-[10px] font-bold italic tracking-wider text-slate-500 mt-0.5">
                          {char.renaissance === 0 ? "Humain" : `x${char.renaissance}`}
                        </span>
                      </div>
                      <div onClick={(e) => e.stopPropagation()} className="pl-2 border-l border-slate-800">
                        <button onClick={() => deleteCharacter(char.name)} className="p-1.5 text-slate-600 hover:text-red-500 transition-colors"><Trash2 size={14} /></button>
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
        {/* COLONNE GAUCHE (Plus large pour les attributs) */}
                  <div className="lg:col-span-6 space-y-6">
                  {/* Renaissance */}
                  <div className="glass-card rounded-2xl p-6 text-center overflow-hidden relative group">
                    <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center justify-center gap-2 font-fantasy"><Zap size={14}/> Renaissance</h2>
                    <div className="text-3xl font-black text-amber-500 mb-6 drop-shadow-[0_0_10px_rgba(245,158,11,0.3)] group-hover:scale-110 transition-transform uppercase italic font-fantasy">
                      {renaissance === 0 ? "Humain" : `x${renaissance}`}
                    </div>
                    <div className="grid grid-cols-7 gap-1 relative z-10">
                      {[0, 1, 2, 3, 4, 5, 6].map((r) => (
                        <button key={r} onClick={() => handleRenaissanceChange(r)} className={`py-2 rounded-lg border text-[10px] font-black transition-all ${renaissance === r ? 'bg-amber-500 border-amber-500 text-slate-950 shadow-lg' : 'bg-slate-800/50 border-slate-700/50 text-slate-400 hover:border-slate-500 hover:bg-slate-700/50'}`}>
                          {r === 0 ? 'H' : `${r}x`}
                        </button>
                      ))}
                    </div>
                    <Zap className="absolute -bottom-4 -left-4 text-slate-800/20" size={80} />
                  </div>
        
                  <button onClick={resetAll} className="btn-danger w-full"><RotateCcw size={16} /> Reset Build</button>
          {/* Attributs & Progression */}
          <div className="glass-card rounded-2xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-slate-800/50">
              <div className="h-full bg-amber-500 transition-all duration-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" style={{ width: `${((totalLevelPointsSpent % POINTS_PER_LEVEL) / POINTS_PER_LEVEL) * 100}%` }} />
            </div>

            <div className="p-4 border-b border-white/5 bg-slate-900/30 flex flex-col items-center justify-between gap-4 text-center sm:text-left sm:flex-row backdrop-blur-sm">
               <div className="flex items-center gap-2">
                  <User className="text-amber-500" size={18} /> 
                  <h2 className="text-sm font-black text-slate-200 uppercase tracking-tight font-fantasy">Attributs de base</h2>
               </div>
               <div>
                 <span className="text-[8px] font-black text-slate-500 uppercase block leading-none tracking-widest">Points Investis</span>
                 <span className="text-xl font-black text-amber-500 leading-none font-fantasy">{totalLevelPointsSpent}</span>
               </div>
            </div>

            <div className="flex flex-col">
              {/* Spider Chart & Vital Stats */}
              <div className="bg-slate-950/30 p-6 border-b border-white/5 flex flex-col md:flex-row items-center justify-around gap-6">
                 {/* Spider Chart */}
                 <div className="shrink-0 -my-4 scale-90 md:scale-100">
                    <SpiderChart stats={finalStats} maxVal={200} />
                 </div>

                 <div className="flex flex-col gap-6 w-full max-w-xs">
                    <div className="text-center bg-slate-900/40 p-3 rounded-xl border border-white/5">
                      <span className="text-[9px] font-black text-slate-500 uppercase block leading-none tracking-[0.2em] mb-2">Niveau Requis</span>
                      <div className="flex items-center justify-center gap-2">
                        <Award className="text-amber-500" size={20} />
                        <span className="text-4xl font-black text-white leading-none tracking-tighter font-fantasy drop-shadow-lg">{requiredLevel}</span>
                      </div>
                    </div>

                    <div className="flex justify-between gap-4">
                      <div className="flex-1 flex flex-col items-center bg-red-500/5 border border-red-500/10 p-2 rounded-xl">
                        <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center mb-1"><Heart className="text-red-500" size={14} /></div>
                        <div className="text-lg font-black text-red-400 leading-none font-fantasy">{derivedStats.hp}</div>
                        <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">PV</div>
                      </div>
                      <div className="flex-1 flex flex-col items-center bg-blue-500/5 border border-blue-500/10 p-2 rounded-xl">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mb-1"><Sparkles className="text-blue-500" size={14} /></div>
                        <div className="text-lg font-black text-blue-400 leading-none font-fantasy">{derivedStats.mana}</div>
                        <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">Mana</div>
                      </div>
                    </div>
                 </div>
              </div>

              {/* LISTE DES ATTRIBUTS - Format Compact Vertical */}
              <div className="divide-y divide-white/5">
                {(['str', 'end', 'dex', 'int', 'wis'] as (keyof Stats)[]).map((k) => {
                  const labels: Record<string, string> = { str: 'Force', end: 'Endurance', dex: 'Dextérité', int: 'Intelligence', wis: 'Sagesse' };
                  const shortLabels: Record<string, string> = { str: 'FOR', end: 'END', dex: 'DEX', int: 'INT', wis: 'SAG' };
                  const colors: Record<string, string> = { str: 'text-red-400', end: 'text-orange-400', dex: 'text-emerald-400', int: 'text-blue-400', wis: 'text-purple-400' };
                  const curS = seraphStats[k] || 0;
                  const magicInfo = k === 'int' ? magicTiers.int : k === 'wis' ? magicTiers.wis : null;

                  return (
                      <div key={k} className="px-4 py-4 flex flex-col gap-4 hover:bg-white/[0.02] transition-colors group/stat">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center font-black text-[10px] text-slate-400 border border-slate-700 uppercase shadow-lg group-hover/stat:border-slate-500 transition-colors">
                              {shortLabels[k]}
                            </div>
                            <div>
                              <div className="font-black text-slate-500 text-[10px] uppercase tracking-[0.15em] leading-none mb-1">{labels[k]}</div>
                              <div className="flex items-center gap-2">
                                  <div className={`text-xl font-black ${colors[k]} drop-shadow-lg tracking-tighter`}>{finalStats[k]}</div>
                                  {magicInfo && (
                                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 shadow-sm" title={`Rang ${magicInfo.rank}`}>
                                          <Sparkles size={10} className="text-amber-400" />
                                          <span className="text-[9px] font-black text-amber-200 uppercase whitespace-nowrap">R{magicInfo.rank}</span>
                                      </div>
                                  )}
                              </div>
                            </div>
                          </div>
                          {magicInfo && (
                              <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest text-right">
                                  Next: <span className="text-slate-300 font-bold">{magicInfo.next}</span> 
                                  <div className="text-amber-500/70">-{magicInfo.needed} pts</div>
                              </div>
                          )}
                        </div>
                        
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center justify-between bg-slate-950 p-1.5 rounded-xl border border-slate-800 shadow-xl w-full">
                             <div className="flex gap-1">
                               <button onClick={() => updateLevelStat(k, -100)} className="w-8 h-7 text-[9px] font-black rounded-md bg-slate-900 border border-slate-800 text-slate-500 hover:text-white transition-all">-100</button>
                               <button onClick={() => updateLevelStat(k, -10)} className="w-8 h-7 text-[9px] font-black rounded-md bg-slate-900 border border-slate-800 text-slate-500 hover:text-white transition-all">-10</button>
                             </div>
                             
                             <div className="flex items-center gap-2">
                               <button onClick={() => updateLevelStat(k, -1)} className="w-7 h-7 flex items-center justify-center rounded-md bg-slate-800 text-slate-400 hover:text-white transition-all shadow-sm" disabled={(levelPoints[k] || 0) <= 0}><ChevronDown size={14}/></button>
                               <span className="w-10 text-center text-lg font-black text-white tabular-nums">{levelPoints[k] || 0}</span>
                               <button onClick={() => updateLevelStat(k, 1)} className="w-7 h-7 flex items-center justify-center rounded-md bg-slate-800 text-slate-400 hover:text-white transition-all shadow-sm"><ChevronUp size={14}/></button>
                             </div>

                             <div className="flex gap-1">
                               <button onClick={() => updateLevelStat(k, 10)} className="w-8 h-7 text-[9px] font-black rounded-md bg-slate-900 border border-slate-800 text-slate-500 hover:text-white transition-all">+10</button>
                               <button onClick={() => updateLevelStat(k, 100)} className="w-8 h-7 text-[9px] font-black rounded-md bg-slate-900 border border-slate-800 text-slate-500 hover:text-white transition-all">+100</button>
                             </div>
                          </div>
                          
                          {renaissance > 0 && (
                            <div className="flex items-center justify-between bg-slate-950 p-1.5 rounded-xl border border-amber-500/20 shadow-xl w-full">
                               <span className="text-[8px] font-black text-amber-600 uppercase tracking-widest ml-2">PTS RN</span>
                               <div className="flex items-center gap-2">
                                 <button onClick={() => updateSeraphStat('stat', k, -1)} className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:text-amber-500 transition-all shadow-sm disabled:opacity-20" disabled={curS <= 0}>-</button>
                                 <span className="w-8 text-center text-md font-black text-amber-500 tabular-nums">{getCumulativeCost(curS)}</span>
                                 <button onClick={() => updateSeraphStat('stat', k, 1)} className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:text-amber-500 transition-all shadow-sm disabled:opacity-20" disabled={remainingSeraphPoints < (curS + 1)}>+</button>
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
        </div>

        {/* MAIN (Colonne droite) */}
        <div className="lg:col-span-6 space-y-6">
          <CharacterNameVisual name={activeCharName}>
            {activeCharName && (
              <button 
                onClick={() => saveCharacter(activeCharName)}
                className="w-full btn-primary py-2.5 shadow-2xl shadow-amber-500/10 flex items-center justify-center gap-3 border-amber-500/50 bg-slate-900/50 backdrop-blur-sm hover:bg-amber-500 hover:text-slate-950 transition-all group/btn"
              >
                <Save size={14} className="group-hover/btn:scale-110 transition-transform" />
                <span className="text-[10px] font-black">ENREGISTRER LES MODIFICATIONS</span>
              </button>
            )}
          </CharacterNameVisual>
          
          {renaissance > 0 && (
            <div className="bg-slate-900 border border-amber-500/20 rounded-3xl p-6 shadow-2xl flex items-center justify-between overflow-hidden relative">
              <div className="flex items-center gap-6 relative z-10">
                 <div className="flex items-center gap-3 text-amber-500"><Star size={24} fill="currentColor" className="drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" /><h2 className="text-xs font-black uppercase tracking-[0.3em]">Points Séraphe</h2></div>
                 <div className="w-64 h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700/50"><div className="h-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-700 shadow-[0_0_15px_rgba(245,158,11,0.4)]" style={{ width: `${Math.min(100, (spentSeraphPoints / totalSeraphPoints) * 100)}%` }} /></div>
              </div>
              <div className="text-3xl font-black text-amber-500 relative z-10">{remainingSeraphPoints} <span className="text-slate-600 text-sm font-bold">/ {totalSeraphPoints}</span></div>
              <Star className="absolute -right-4 -bottom-4 text-amber-500/5 rotate-12" size={120} />
            </div>
          )}

          <div className="grid grid-cols-1 gap-6">
             <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
                <div className="p-5 border-b border-slate-800 bg-emerald-500/5 flex items-center gap-3">
                   <Flame className="text-emerald-500" size={22} />
                   <h2 className="text-sm font-black text-slate-100 uppercase tracking-widest">Puissances Magiques</h2>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                   {SERAPH_ELEMENTS.map(el => {
                     const cur = seraphPowers[el.key] || 0;
                     return (
                       <div key={el.key} className="flex items-center justify-between bg-slate-950/40 p-4 rounded-2xl border border-slate-800/50 hover:border-emerald-500/30 transition-all group">
                          <div className="flex items-center gap-4 min-w-0">
                            <div className="w-1.5 h-10 bg-emerald-500/20 rounded-full group-hover:bg-emerald-500/50 transition-colors shrink-0" />
                            <div className="min-w-0">
                              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.15em] block mb-1 truncate">{el.label}</span>
                              <span className="text-2xl font-black text-emerald-400 leading-none drop-shadow-md">{finalMagic.powers[el.label]}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800 shadow-inner shrink-0">
                             <button onClick={() => updateSeraphStat('power', el.key, -1)} className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all shadow-sm disabled:opacity-20" disabled={cur <= 0}>-</button>
                             <div className="w-8 text-center text-xs font-black text-amber-500/70">{getCumulativeCost(cur)}</div>
                             <button onClick={() => updateSeraphStat('power', el.key, 1)} className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all shadow-sm disabled:opacity-20" disabled={remainingSeraphPoints < (cur + 1)}>+</button>
                          </div>
                       </div>
                     );
                   })}
                </div>
             </div>
             <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
                <div className="p-5 border-b border-slate-800 bg-blue-500/5 flex items-center gap-3">
                   <Shield className="text-blue-500" size={22} />
                   <h2 className="text-sm font-black text-slate-100 uppercase tracking-widest">Résistances Magiques</h2>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                   {SERAPH_ELEMENTS.map(el => {
                     const cur = seraphResists[el.key] || 0;
                     const nextCost = 2;
                     return (
                       <div key={el.key} className="flex items-center justify-between bg-slate-950/40 p-4 rounded-2xl border border-slate-800/50 hover:border-blue-500/30 transition-all group">
                          <div className="flex items-center gap-4 min-w-0">
                            <div className="w-1.5 h-10 bg-blue-500/20 rounded-full group-hover:bg-blue-500/50 transition-colors shrink-0" />
                            <div className="min-w-0">
                              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.15em] block mb-1 truncate">{el.label}</span>
                              <span className="text-2xl font-black text-blue-400 leading-none drop-shadow-md">{finalMagic.resists[el.label]}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800 shadow-inner shrink-0">
                             <button onClick={() => updateSeraphStat('resist', el.key, -1)} className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all shadow-sm disabled:opacity-20" disabled={cur <= 0}>-</button>
                             <div className="w-8 text-center text-xs font-black text-amber-500/70">{cur * 2}</div>
                             <button onClick={() => updateSeraphStat('resist', el.key, 1)} className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all shadow-sm disabled:opacity-20" disabled={remainingSeraphPoints < nextCost}>+</button>
                          </div>
                       </div>
                     );
                   })}
                </div>
             </div>
          </div>

          {/* RÉCAPITULATIF PUISSANCE MAGIQUE */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl mt-6">
            <div className="p-4 border-b border-slate-800 bg-amber-500/5 flex items-center gap-2">
                <BookOpen className="text-amber-500" size={18} />
                <h2 className="text-xs font-black text-slate-100 uppercase tracking-widest">Comprendre la Puissance Magique</h2>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-sm font-bold text-slate-300 mb-3 uppercase tracking-tight">Paliers de Puissance Brute</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        {spellPowerConfig.guide.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {spellPowerConfig.paliers.map(p => (
                            <div key={p.rank} className={`px-2.5 py-1.5 rounded-lg border text-[10px] font-black transition-all ${
                                (magicTiers.int.rank >= p.rank || magicTiers.wis.rank >= p.rank)
                                ? 'bg-amber-500/20 border-amber-500 text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.1)]'
                                : 'bg-slate-950 border-slate-800 text-slate-600'
                            }`}>
                                R{p.rank} : {p.threshold}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="space-y-4">
                    <h3 className="text-sm font-bold text-slate-300 uppercase tracking-tight">Conseils & Optimisation</h3>
                    <ul className="space-y-2">
                        {spellPowerConfig.guide.tips.map((tip, i) => (
                            <li key={i} className="flex gap-2 text-xs text-slate-400 leading-relaxed">
                                <span className="text-amber-500 font-bold">•</span>
                                {tip}
                            </li>
                        ))}
                    </ul>
                    <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/10 text-[10px] text-blue-400 leading-relaxed italic">
                        <Info size={12} className="inline mr-1 mb-0.5" />
                        {spellPowerConfig.guide.stagnation}
                    </div>
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
                    <button onClick={() => setModal(prev => ({ ...prev, show: false }))} className="btn-secondary flex-1">Annuler</button>
                    <button onClick={() => { if (modal.onConfirm) modal.onConfirm(); }} className="btn-primary flex-1">Confirmer</button>
                  </>
                ) : (
                  <button onClick={() => setModal(prev => ({ ...prev, show: false }))} className="btn-secondary w-full">OK</button>
                )}
              </div>
            </div>
            <button onClick={() => setModal(prev => ({ ...prev, show: false }))} className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"><X size={20} /></button>
          </div>
        </div>
      )}

      {/* Non-blocking Toast Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-3 px-6 py-3 rounded-2xl font-black uppercase tracking-widest shadow-2xl border transition-colors ${
                notification.type === 'success' 
                    ? 'bg-emerald-500 text-slate-950 border-emerald-400/50 shadow-emerald-500/20' 
                    : 'bg-rose-500 text-white border-rose-400/50 shadow-rose-500/20'
            }`}
          >
            <div className={`p-1 rounded-lg ${notification.type === 'success' ? 'bg-slate-950/20' : 'bg-white/20'}`}>
                <Bell size={18} />
            </div>
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StatPlanner;