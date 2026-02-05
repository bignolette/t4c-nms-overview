import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import type { RecipeItem, SavedCharacter, Stats } from '../data/types';
import { mapSourceToSlot, fastNormalize, formatStatValue } from '../data/utils';
import { Search, Sword, Package, Zap, Trophy, Sparkles, ChevronUp, ChevronDown } from 'lucide-react';
import RuneIcon from './ui/RuneIcon';

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
  { id: 'Tete', label: 'Tête', rune: 'crown' },
  { id: 'Amulette', label: 'Amulette', rune: 'amulet' },
  { id: 'Bracelet', label: 'Bracelet', rune: 'bracelet' },
  { id: 'Anneau', label: 'Anneau', rune: 'ring' },
  { id: 'Torse', label: 'Torse', rune: 'shirt' },
  { id: 'Cape', label: 'Cape / Orbe', rune: 'cloak' }, 
  { id: 'Arme', label: 'Arme', rune: 'str' },
  { id: 'Bouclier', label: 'Bouclier / Focus', rune: 'shield' },
  { id: 'Gant', label: 'Gants', rune: 'hand' },
  { id: 'Ceinture', label: 'Ceinture', rune: 'belt' },
  { id: 'Jambière', label: 'Jambières', rune: 'leg' }, 
  { id: 'Botte', label: 'Bottes', rune: 'boot' },
  { id: 'Spells', label: 'Sorts', rune: 'wis' },
  { id: 'Skills', label: 'Compétences', rune: 'dex' },
];

const EquipableBuilder = () => {
  const { itemsData, spellsData, skillsData, savedCharacters, activeStats: stats, setActiveStats: setStats } = useData();

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
    const normalizedSearch = fastNormalize(searchTerm);
    const canEquip: (RecipeItem | any)[] = [];
    const comingSoon: (RecipeItem | any)[] = [];

    if (selectedSlot.id === 'Spells') {
      spellsData.forEach((spell) => {
        if (normalizedSearch && !fastNormalize(spell.name).includes(normalizedSearch)) return;
        
        const isLearnable = stats.int >= spell.int && stats.wis >= spell.wis;
        
        if (isLearnable) {
          canEquip.push({ ...spell, type: 'spell' });
        } else {
          const diff = Math.max(0, spell.int - stats.int) + Math.max(0, spell.wis - stats.wis);
          if (diff <= 40) comingSoon.push({ ...spell, type: 'spell' });
        }
      });
    } else if (selectedSlot.id === 'Skills') {
      skillsData.forEach((skill) => {
        if (normalizedSearch && !fastNormalize(skill.name).includes(normalizedSearch)) return;
        
        // Extract requirements from string
        const lvlMatch = skill.requirements.match(/Niv\s*(\d+)/i);
        const strMatch = skill.requirements.match(/(\d+)\s*en\s*force/i);
        const endMatch = skill.requirements.match(/(\d+)\s*en\s*endurance/i);
        const dexMatch = skill.requirements.match(/(\d+)\s*en\s*dextérité/i);
        const intMatch = skill.requirements.match(/(\d+)\s*en\s*intelligence/i);
        const wisMatch = skill.requirements.match(/(\d+)\s*en\s*sagesse/i);

        const sReq = strMatch ? parseInt(strMatch[1]) : 0;
        const eReq = endMatch ? parseInt(endMatch[1]) : 0;
        const dReq = dexMatch ? parseInt(dexMatch[1]) : 0;
        const iReq = intMatch ? parseInt(intMatch[1]) : 0;
        const wReq = wisMatch ? parseInt(wisMatch[1]) : 0;
        const lReq = lvlMatch ? parseInt(lvlMatch[1]) : 1;

        const isLearnable = stats.str >= sReq && stats.end >= eReq && stats.dex >= dReq && stats.int >= iReq && stats.wis >= wReq;
        
        const skillObj = { 
          ...skill, 
          type: 'skill', 
          parsedReqs: { str: sReq, end: eReq, dex: dReq, int: iReq, wis: wReq, lvl: lReq } 
        };

        if (isLearnable) {
          canEquip.push(skillObj);
        } else {
          const diff = Math.max(0, sReq - stats.str) + Math.max(0, eReq - stats.end) + Math.max(0, dReq - stats.dex) + Math.max(0, iReq - stats.int) + Math.max(0, wReq - stats.wis);
          if (diff <= 40) comingSoon.push(skillObj);
        }
      });
    } else {
      const itemsInSlot = itemsBySlot[selectedSlot.id] || [];
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
          canEquip.push({ ...item, type: 'item' });
        } else {
          const diff = Math.max(0, sReq - stats.str) + Math.max(0, eReq - stats.end) + Math.max(0, dReq - stats.dex) + Math.max(0, iReq - stats.int) + Math.max(0, wReq - stats.wis);
          if (diff <= 40) comingSoon.push({ ...item, type: 'item' });
        }
      });
    }

    const sortFn = (a: any, b: any) => {
      if (selectedSlot.id === 'Spells') {
        if (a.level !== b.level) return (a.level || 0) - (b.level || 0);
        return a.name.localeCompare(b.name);
      }

      if (selectedSlot.id === 'Skills') {
        if (a.parsedReqs.lvl !== b.parsedReqs.lvl) return a.parsedReqs.lvl - b.parsedReqs.lvl;
        return a.name.localeCompare(b.name);
      }

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
  }, [stats, selectedSlot, searchTerm, hideNoReqs, itemsBySlot, spellsData, isBiSMode, bisFocus]);

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
                    <RuneIcon stat="trophy" size={20} color="#0f172a" />
                  </div>
                  <h2 className="text-2xl font-black text-white tracking-tight uppercase italic font-fantasy">Roadmap de Progression</h2>
                </div>
                <p className="text-slate-400 text-sm font-medium ml-12">Les prochains paliers d'équipement pour votre build {selectedSlot.label}</p>
              </div>
              <div className="flex items-center gap-4 bg-slate-950/50 px-4 py-2 rounded-2xl border border-white/5">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{upcomingItems.length} OBJECTIFS DÉTECTÉS</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {upcomingItems.map((entry: any, idx) => {
                const isSpell = entry.type === 'spell';
                const isSkill = entry.type === 'skill';
                const name = entry.name;
                
                let totalReq = 0;
                let currentRel = 0;
                let diff = 0;
                let reqList: { key: string, label: string, req: number, current: number }[] = [];

                if (isSpell) {
                  reqList = [
                    { key: 'int', label: 'INT', req: entry.int || 0, current: stats.int },
                    { key: 'wis', label: 'SAG', req: entry.wis || 0, current: stats.wis }
                  ].filter(r => r.req > 0);
                } else if (isSkill) {
                  reqList = [
                    { key: 'str', label: 'FOR', req: entry.parsedReqs.str || 0, current: stats.str },
                    { key: 'end', label: 'END', req: entry.parsedReqs.end || 0, current: stats.end },
                    { key: 'dex', label: 'DEX', req: entry.parsedReqs.dex || 0, current: stats.dex },
                    { key: 'int', label: 'INT', req: entry.parsedReqs.int || 0, current: stats.int },
                    { key: 'wis', label: 'SAG', req: entry.parsedReqs.wis || 0, current: stats.wis }
                  ].filter(r => r.req > 0);
                } else {
                  reqList = [
                    { key: 'str', label: 'FOR', req: parseInt(entry.prerequisites?.str || '0'), current: stats.str },
                    { key: 'end', label: 'END', req: parseInt(entry.prerequisites?.end || '0'), current: stats.end },
                    { key: 'dex', label: 'DEX', req: parseInt(entry.prerequisites?.dex || '0'), current: stats.dex },
                    { key: 'int', label: 'INT', req: parseInt(entry.prerequisites?.int || '0'), current: stats.int },
                    { key: 'wis', label: 'SAG', req: parseInt(entry.prerequisites?.wis || '0'), current: stats.wis }
                  ].filter(r => r.req > 0);
                }

                reqList.forEach(r => {
                  totalReq += r.req;
                  currentRel += Math.min(r.req, r.current);
                  diff += Math.max(0, r.req - r.current);
                });

                const progress = totalReq > 0 ? (currentRel / totalReq) * 100 : 100;
                const linkPath = isSpell ? 'spells' : (isSkill ? 'skills' : 'items');

                return (
                  <Link 
                    key={idx} 
                    to={`/wiki/${linkPath}?search=${encodeURIComponent(name)}`} 
                    className={`group/item relative flex flex-col bg-slate-950/40 border border-white/5 hover:border-amber-500/30 p-5 rounded-[1.5rem] transition-all duration-300 text-left ${isSpell ? 'hover:border-blue-500/30' : (isSkill ? 'hover:border-emerald-500/30' : '')}`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex flex-col">
                        <span className={`text-[10px] font-black uppercase tracking-widest mb-1 ${isSpell ? 'text-blue-400' : (isSkill ? 'text-emerald-400' : 'text-amber-500')}`}>
                          {isSpell ? 'SORT' : (isSkill ? 'COMPÉTENCE' : entry.source)}
                        </span>
                        <h3 className="text-sm font-bold text-slate-100 group-hover/item:text-white transition-colors line-clamp-1">{name}</h3>
                      </div>
                      {isSpell ? <Sparkles size={14} className="text-blue-400/50" /> : (isSkill ? <Sword size={14} className="text-emerald-400/50" /> : <Package size={14} className="text-slate-600" />)}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {reqList.map((r) => {
                        const isMet = r.current >= r.req;
                        return (
                          <div 
                            key={r.key} 
                            className={`flex flex-col px-1.5 py-0.5 rounded border ${
                              isMet 
                                ? 'text-emerald-500/60 bg-emerald-500/5 border-emerald-500/10' 
                                : 'text-rose-500 bg-rose-500/5 border-rose-500/20 shadow-[0_0_10px_rgba(244,63,94,0.05)]'
                            }`}
                          >
                            <span className="text-[7px] font-black uppercase tracking-tighter opacity-70">{r.label}</span>
                            <div className="flex items-center gap-1">
                              <span className="text-[10px] font-bold tracking-tighter">{r.req}</span>
                              {!isMet && (
                                <span className="text-[8px] font-black border-l border-rose-500/20 pl-1">+{r.req - r.current}</span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-auto pt-4 border-t border-white/5">
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-[10px] font-black text-slate-500 uppercase">PROGRESSION</span>
                        <span className={`text-[10px] font-black ${isSpell ? 'text-blue-400' : 'text-amber-500'}`}>-{diff} PTS</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5">
                        <div 
                          className={`h-full transition-all duration-1000 ${isSpell ? 'bg-gradient-to-r from-blue-600 to-blue-400' : 'bg-gradient-to-r from-amber-600 to-amber-400'}`} 
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

      {/* INTERFACE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-slate-900/50 border border-white/5 rounded-[2rem] p-8 backdrop-blur-sm relative text-left">
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div>
                <h2 className="text-xl font-black text-white uppercase italic tracking-tight flex items-center gap-2 font-fantasy">
                  <RuneIcon stat="user" size={20} color="#f59e0b" /> Profil Personnage
                </h2>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Configurez vos attributs</p>
              </div>
              <button onClick={() => setShowLoadModal(true)} className="btn-secondary px-5 py-2.5 text-[10px] uppercase tracking-[0.15em]">Importer</button>
            </div>
            <div className="grid grid-cols-1 gap-4 relative z-10">
              {(['str', 'end', 'dex', 'int', 'wis'] as const).map((key) => {
                const config = {
                  str: { label: 'Force', rune: 'str', color: 'text-rose-500', colorHex: '#f43f5e' },
                  end: { label: 'Endurance', rune: 'end', color: 'text-orange-500', colorHex: '#f97316' },
                  dex: { label: 'Dextérité', rune: 'dex', color: 'text-emerald-500', colorHex: '#10b981' },
                  int: { label: 'Intelligence', rune: 'int', color: 'text-sky-500', colorHex: '#0ea5e9' },
                  wis: { label: 'Sagesse', rune: 'wis', color: 'text-purple-500', colorHex: '#a855f7' }
                }[key];
                
                return (
                  <div key={key} className="flex flex-col gap-3 p-4 bg-slate-950/40 border border-white/5 rounded-2xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <RuneIcon stat={config.rune as any} size={14} color={config.colorHex} />
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest font-fantasy">{config.label}</label>
                      </div>
                      <span className={`text-xl font-black ${config.color} tabular-nums font-fantasy`}>{stats[key]}</span>
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
            <h2 className="text-xl font-black text-white uppercase italic tracking-tight mb-8 flex items-center gap-2 font-fantasy">
              <RuneIcon stat="belt" size={20} color="#f59e0b" /> Emplacement
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {SLOTS.map((slot) => (
                <div key={slot.id} onClick={() => setSelectedSlot(slot)} className={`aspect-square rounded-2xl border-2 flex flex-col items-center justify-center cursor-pointer transition-all ${selectedSlot.id === slot.id ? 'border-amber-500 bg-amber-500/10' : 'border-white/5 bg-slate-950/20 hover:border-white/20'}`}>
                  <RuneIcon stat={slot.rune as any} size={24} color={selectedSlot.id === slot.id ? '#f59e0b' : '#475569'} />
                  <span className={`text-[9px] mt-2 font-black uppercase tracking-tighter font-fantasy ${selectedSlot.id === slot.id ? 'text-amber-500' : 'text-slate-600'}`}>{slot.label}</span>
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
            {availableItems.map((entry, idx) => {
              if (entry.type === 'spell') return <SpellCard key={idx} spell={entry} />;
              if (entry.type === 'skill') return <SkillCard key={idx} skill={entry} />;
              return <ItemCard key={idx} item={entry} isBiSMode={isBiSMode} idx={idx} />;
            })}
          </div>
        </div>
      </div>

      {showLoadModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl" onClick={() => setShowLoadModal(false)}></div>
          <div className="bg-slate-900 border border-white/10 w-full max-w-md rounded-[2.5rem] shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-8 border-b border-white/5 flex justify-between items-center">
               <h3 className="text-white text-xl font-black uppercase italic tracking-tight flex items-center gap-3 font-fantasy">
                 <RuneIcon stat="user" size={24} color="#f59e0b" /> Charger Profil
               </h3>
               <button onClick={() => setShowLoadModal(false)} className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:text-white transition-all active:scale-90 font-fantasy">✕</button>
            </div>
            <div className="p-8 space-y-4 max-h-[500px] overflow-y-auto custom-scrollbar">
              {savedCharacters.length === 0 ? (
                <div className="text-center py-12 flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-white/5 flex items-center justify-center text-slate-700">
                    <RuneIcon stat="user" size={32} color="#1e293b" />
                  </div>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-xs font-fantasy">Aucun personnage enregistré dans le Planner</p>
                </div>
              ) : (
                savedCharacters.map(char => (
                  <button
                    key={char.name}
                    onClick={() => loadSavedChar(char)}
                    className="w-full group bg-slate-950/50 hover:bg-amber-500 border border-white/5 hover:border-amber-400 p-5 rounded-2xl transition-all flex items-center justify-between"
                  >
                    <div className="flex flex-col items-start text-left">
                      <span className="text-slate-100 group-hover:text-slate-900 font-black uppercase text-sm tracking-wider font-fantasy">{char.name}</span>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <span className="text-[9px] text-slate-600 group-hover:text-slate-800 font-black uppercase font-fantasy">FOR {char.finalStats?.str || 0}</span>
                        <span className="text-[9px] text-slate-600 group-hover:text-slate-800 font-black uppercase font-fantasy">DEX {char.finalStats?.dex || 0}</span>
                        <span className="text-[9px] text-slate-600 group-hover:text-slate-800 font-black uppercase font-fantasy">INT {char.finalStats?.int || 0}</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 group-hover:bg-slate-900/20 text-amber-500 group-hover:text-slate-900 transition-colors">
                      <RuneIcon stat="user" size={20} color="currentColor" />
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
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="text-[10px] font-black text-amber-500/80 uppercase tracking-[0.2em]">{item.source}</span>
            {item.buyPrice && (
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest bg-slate-950 px-2 py-0.5 rounded-lg border border-white/5">
                {parseInt(item.buyPrice).toLocaleString()} G
              </span>
            )}
          </div>
          <h4 className={`text-xl font-black italic uppercase tracking-tight ${isTopBiS ? 'text-emerald-400' : 'text-slate-100'}`}>{item.name}</h4>
        </div>
        <Link to={`/wiki/items?search=${encodeURIComponent(item.name)}`} className="btn-secondary px-4 py-2 text-[10px] uppercase tracking-widest">Détails</Link>
      </div>

      {item.damage && (
        <div className="mb-6 p-4 bg-rose-500/5 border border-rose-500/10 rounded-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-rose-500/20 rounded-lg text-rose-500">
              <Sword size={16} />
            </div>
            <div>
              <span className="text-[10px] font-black text-rose-500/70 uppercase tracking-widest block">Dégâts Physiques</span>
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-black text-slate-100 italic">{item.damage.min}</span>
                <span className="text-xs font-bold text-slate-500 italic">-</span>
                <span className="text-lg font-black text-slate-100 italic">{item.damage.max}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
             <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest block">Moyenne</span>
             <span className="text-sm font-black text-slate-400">{( (parseInt(item.damage.min) + parseInt(item.damage.max)) / 2).toFixed(1)}</span>
          </div>
        </div>
      )}

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

const SkillCard = ({ skill }: { skill: any }) => {
  return (
    <div className="w-full p-6 rounded-[2rem] border bg-slate-900/40 border-white/5 transition-all duration-500 relative text-left hover:border-emerald-500/30">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded bg-amber-500 text-slate-950 text-[9px] font-black uppercase tracking-tighter">LVL {skill.parsedReqs.lvl}</span>
            <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em]">Compétence</span>
          </div>
          <h4 className="text-xl font-black italic uppercase tracking-tight text-slate-100">{skill.name}</h4>
        </div>
        <Link to={`/wiki/skills?search=${encodeURIComponent(skill.name)}`} className="btn-secondary px-4 py-2 text-[10px] uppercase tracking-widest">Détails</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mb-3 block">Requis</span>
          <div className="flex flex-wrap gap-2">
            {skill.parsedReqs.str > 0 && <StatBadge label="FOR" value={skill.parsedReqs.str} type="str" />}
            {skill.parsedReqs.end > 0 && <StatBadge label="END" value={skill.parsedReqs.end} type="end" />}
            {skill.parsedReqs.dex > 0 && <StatBadge label="DEX" value={skill.parsedReqs.dex} type="dex" />}
            {skill.parsedReqs.int > 0 && <StatBadge label="INT" value={skill.parsedReqs.int} type="int" />}
            {skill.parsedReqs.wis > 0 && <StatBadge label="SAG" value={skill.parsedReqs.wis} type="wis" />}
          </div>
        </div>
        <div>
          <span className="text-[10px] font-black text-emerald-500/50 uppercase tracking-[0.2em] mb-3 block">Description</span>
          <p className="text-xs text-slate-400 italic line-clamp-2">{skill.description}</p>
        </div>
      </div>
    </div>
  );
};

const SpellCard = ({ spell }: { spell: any }) => {
  return (
    <div className="w-full p-6 rounded-[2rem] border bg-slate-900/40 border-white/5 transition-all duration-500 relative text-left hover:border-blue-500/30">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded bg-amber-500 text-slate-950 text-[9px] font-black uppercase tracking-tighter">LVL {spell.level}</span>
            <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em]">{spell.source}</span>
          </div>
          <h4 className="text-xl font-black italic uppercase tracking-tight text-slate-100">{spell.name}</h4>
        </div>
        <Link to={`/wiki/spells?search=${encodeURIComponent(spell.name)}`} className="btn-secondary px-4 py-2 text-[10px] uppercase tracking-widest">Détails</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mb-3 block">Requis</span>
          <div className="flex flex-wrap gap-2">
            {spell.int > 0 && <StatBadge label="INT" value={spell.int} type="int" />}
            {spell.wis > 0 && <StatBadge label="SAG" value={spell.wis} type="wis" />}
          </div>
        </div>
        <div>
          <span className="text-[10px] font-black text-blue-500/50 uppercase tracking-[0.2em] mb-3 block">Effet</span>
          <p className="text-xs text-slate-400 italic line-clamp-2">{spell.description}</p>
        </div>
      </div>
    </div>
  );
};

export default EquipableBuilder;
