import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { itemsData } from '../data/items';
import type { RecipeItem } from '../data/types';
import { fastNormalize, mapSourceToSlot, formatStatValue } from '../data/utils';
import { Search, Shield, Sword, Crown, Shirt, Footprints, Hand, Hexagon, Circle, Package, Link2, GripHorizontal, Columns2, Medal, Wind, User, type LucideIcon } from 'lucide-react';

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
  const [stats, setStats] = useState<Stats>({
    str: 50,
    end: 50,
    dex: 50,
    int: 50,
    wis: 50
  });

  const [hideNoReqs, setHideNoReqs] = useState(true);
  const [selectedSlot, setSelectedSlot] = useState(SLOTS[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showImportToast, setShowImportToast] = useState(false);
  const [savedChars, setSavedChars] = useState<SavedCharacter[]>([]);
  const [showLoadModal, setShowLoadModal] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('t4c-characters');
    if (saved) setSavedChars(JSON.parse(saved));
  }, []);

  const loadSavedChar = (char: SavedCharacter) => {
    setStats(char.finalStats);
    setShowLoadModal(false);
    setShowImportToast(true);
    setTimeout(() => setShowImportToast(false), 3000);
  };

  // Index items by slot once to boost performance
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
  }, []);

  const updateStat = (key: keyof Stats, value: string) => {
    let num = parseInt(value, 10);
    if (isNaN(num)) num = 0;
    if (num > 65535) num = 65535;
    setStats(prev => ({ ...prev, [key]: num }));
  };

  const availableItems = useMemo(() => {
    const itemsInSlot = itemsBySlot[selectedSlot.id] || [];
    const normalizedSearch = fastNormalize(searchTerm);

    const filtered = itemsInSlot.filter((item) => {
      // 1. Prerequisites Check
      const reqs = item.prerequisites || {};
      const sReq = parseInt(reqs.str || '0');
      const eReq = parseInt(reqs.end || '0');
      const dReq = parseInt(reqs.dex || '0');
      const iReq = parseInt(reqs.int || '0');
      const wReq = parseInt(reqs.wis || '0');
      
      const reqSum = sReq + eReq + dReq + iReq + wReq;
      if (hideNoReqs && reqSum === 0) return false;

      if (stats.str < sReq) return false;
      if (stats.end < eReq) return false;
      if (stats.dex < dReq) return false;
      if (stats.int < iReq) return false;
      if (stats.wis < wReq) return false;

      // 2. Search Term
      if (normalizedSearch && !fastNormalize(item.name).includes(normalizedSearch)) return false;

      return true;
    });

    return filtered.sort((a, b) => {
      const getSum = (i: RecipeItem) => {
        const r = i.prerequisites || {};
        return parseInt(r.str || '0') + parseInt(r.end || '0') + parseInt(r.dex || '0') + parseInt(r.int || '0') + parseInt(r.wis || '0');
      };
      const sumA = getSum(a);
      const sumB = getSum(b);
      
      if (sumA > 0 && sumB === 0) return -1;
      if (sumA === 0 && sumB > 0) return 1;
      if (sumA !== sumB) return sumB - sumA;
      return a.name.localeCompare(b.name);
    });
  }, [stats, selectedSlot, searchTerm, hideNoReqs, itemsBySlot]);

  return (
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
              title="Charger un personnage"
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
              <div className="p-6 space-y-3">
                {savedChars.length === 0 ? (
                  <div className="text-center py-8 text-slate-500 italic text-sm">
                    Aucun personnage trouvé dans le Stat Planner.
                  </div>
                ) : (
                  savedChars.map(char => (
                    <button
                      key={char.name}
                      onClick={() => loadSavedChar(char)}
                      className="w-full group bg-slate-950/50 hover:bg-amber-500 border border-slate-800 hover:border-amber-400 p-4 rounded-xl transition-all flex items-center justify-between"
                    >
                      <div className="flex flex-col items-start">
                        <span className="text-slate-100 group-hover:text-slate-900 font-black uppercase text-sm tracking-wider">{char.name}</span>
                        <div className="flex gap-2 mt-1">
                          <span className="text-[9px] text-slate-500 group-hover:text-slate-800 font-bold uppercase tracking-tighter">FOR {char.finalStats.str}</span>
                          <span className="text-[9px] text-slate-500 group-hover:text-slate-800 font-bold uppercase tracking-tighter">INT {char.finalStats.int}</span>
                        </div>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-900 group-hover:bg-slate-900/20 text-amber-500 group-hover:text-slate-900 transition-colors">
                        <User size={18} />
                      </div>
                    </button>
                  ))
                )}
              </div>
              <div className="p-4 bg-slate-950/50 text-center">
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Sélectionnez un personnage pour mettre à jour vos prérequis</p>
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

      {/* Middle Column: Slot Selection Visual */}
      <div className="lg:col-span-4 bg-slate-900/50 p-6 rounded-lg border border-slate-800 backdrop-blur-sm flex flex-col items-center h-fit">
        <h2 className="text-xl font-bold text-amber-500 mb-8 flex items-center gap-2 text-center">
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

      {/* Right Column: Filtered Items List */}
      <div className="lg:col-span-5 bg-slate-900/50 rounded-lg border border-slate-800 backdrop-blur-sm flex flex-col overflow-hidden">
        <div className="p-4 border-b border-slate-800 bg-slate-800/30">
          <h3 className="text-lg font-bold text-amber-500 mb-4 flex items-center justify-between">
            <span>{selectedSlot.label} disponibles</span>
            <span className="text-xs text-slate-500 font-normal">{availableItems.length} objets</span>
          </h3>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-slate-500" size={18} />
            <input 
              type="text" 
              placeholder="Filtrer par nom..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded pl-10 pr-4 py-2 text-slate-200 focus:outline-none focus:border-amber-500 text-sm"
            />
          </div>
          <div className="mt-3">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input type="checkbox" className="sr-only" checked={hideNoReqs} onChange={(e) => setHideNoReqs(e.target.checked)} />
                <div className={`w-10 h-5 rounded-full transition-colors ${hideNoReqs ? 'bg-amber-500' : 'bg-slate-700'}`}></div>
                <div className={`absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform ${hideNoReqs ? 'translate-x-5' : ''}`}></div>
              </div>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider group-hover:text-slate-300 transition-colors">Ignorer sans prérequis</span>
            </label>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[700px]">
          {availableItems.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <p>Aucun objet trouvé.</p>
              <p className="text-xs mt-1">Vérifiez vos statistiques.</p>
            </div>
          ) : (
            availableItems.map((item, idx) => (
              <div key={idx} className="w-full p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col gap-4 hover:border-slate-700 transition-all group">
                <div className="flex justify-between items-start">
                   <div className="flex flex-col gap-1">
                     <h4 className="font-bold text-slate-100 group-hover:text-amber-500 transition-colors">{item.name}</h4>
                     {item.typeSource && (
                       <div className="flex items-center gap-1 text-[9px] text-emerald-500 uppercase font-black tracking-tighter">
                         <Tag size={10} />
                         <span>{item.typeSource}</span>
                       </div>
                     )}
                   </div>
                   <Link to={`/wiki/items?search=${encodeURIComponent(item.name)}`} className="p-1.5 bg-slate-800 rounded-lg text-slate-400 hover:text-amber-500 transition-colors">
                     <Package size={14} />
                   </Link>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">prérequis</span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.prerequisites?.str && <StatBadge label="FOR" value={formatStatValue(item.prerequisites.str)} type="str" />}
                    {item.prerequisites?.end && <StatBadge label="END" value={formatStatValue(item.prerequisites.end)} type="end" />}
                    {item.prerequisites?.dex && <StatBadge label="DEX" value={formatStatValue(item.prerequisites.dex)} type="dex" />}
                    {item.prerequisites?.int && <StatBadge label="INT" value={formatStatValue(item.prerequisites.int)} type="int" />}
                    {item.prerequisites?.wis && <StatBadge label="SAG" value={formatStatValue(item.prerequisites.wis)} type="wis" />}
                  </div>
                </div>

                {(item.bonuses || item.secondary) && (
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-bold text-emerald-500/80 uppercase tracking-widest block">Bonus</span>
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
            ))
          )}
        </div>
      </div>
    </div>
  );
};

interface SlotDef { id: string; label: string; icon: LucideIcon; }

const SlotBtn = ({ def, isActive, onClick }: { def: SlotDef, isActive: boolean, onClick: () => void }) => {
  const Icon = def.icon;
  return (
    <div onClick={onClick} className={`aspect-square rounded-lg border-2 flex flex-col items-center justify-center cursor-pointer transition-all relative group ${isActive ? 'border-amber-500 bg-amber-500/10 shadow-[0_0_15px_rgba(245,158,11,0.2)]' : 'border-slate-700 bg-slate-800/30 hover:border-slate-500 hover:bg-slate-800/50'}`}>
      <Icon size={24} className={isActive ? 'text-amber-500' : 'text-slate-600 group-hover:text-slate-500'} />
      <span className={`text-[9px] mt-1 uppercase tracking-wider font-bold ${isActive ? 'text-amber-500' : 'text-slate-600'}`}>{def.label}</span>
    </div>
  );
};

export default EquipableBuilder;
