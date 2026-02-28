import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Scroll, Users, Swords, MapPin, AlertTriangle, ChevronDown, ChevronUp,
  Crown, Package, FlaskConical, ShieldAlert, Target, Key, Skull,
  CheckCircle2, Clock, Info, Gift, MessageSquare, ArrowLeft, Shield,
  Search, X, RotateCcw, SlidersHorizontal, Map as MapIcon,
  LayoutGrid, List
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { fastNormalize } from '../data/utils';
import EmptyState from '../components/shared/EmptyState';
import { useData } from '../context/DataContext';
import NpcMapModal from '../components/NpcMapModal';

/* ─── Types ─── */

interface Quest {
  id: string;
  name: string;
  zone: string[];
  level_required: number | null;
  alignment_required?: string;
  group_recommended: boolean;
  group_size_recommended: string | null;
  description: string;
  prerequisites?: string[];
  rewards: {
    experience?: string | null;
    items?: { name: string; quantity: number; note?: string }[];
    boss_drops?: string;
    access?: string;
    bonus?: string;
    note?: string;
  };
  npcs?: {
    name: string;
    role: string;
    location: string;
    interactions?: { keyword: string | null; purpose: string }[];
    sells?: string[];
  }[];
  items_required_overview?: {
    potions_evalcian?: { name: string; usage: string; duration?: string }[];
    items_speciaux?: { name: string; usage: string; obtention: string | string[]; duration?: string }[];
  };
  steps?: QuestStep[];
  boss_fight?: {
    name: string;
    title: string;
    location: string;
    group_recommended: string;
    kill_method: string;
    abilities: string[];
    tips: string[];
    post_kill: { action: string; note: string };
  };
  post_completion?: {
    keys_remaining: string[];
    keys_lost: string;
    return_access: string;
    locked_areas: string[];
    reaccess_tip: string;
    duplication_tip: string;
  };
}

interface QuestStep {
  key_number?: number;
  step_number?: number;
  name: string;
  type: string;
  difficulty?: string;
  group_required?: boolean;
  group_recommended?: boolean;
  group_size_minimum?: number;
  potions_required?: string[];
  items_required?: string[];
  location: string;
  coordinates?: string;
  objective: string;
  instructions?: string[];
  sub_steps?: { name: string; instructions: string[] }[];
  drop_method?: string;
  respawn?: Record<string, string> | null;
  warnings?: string[];
}

/* ─── Constants ─── */

const difficultyColor: Record<string, string> = {
  'facile': 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
  'facile (si vous avez l\'anneau)': 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
  'moyen': 'text-amber-400 bg-amber-500/10 border-amber-500/30',
  'difficile': 'text-orange-400 bg-orange-500/10 border-orange-500/30',
  'très difficile': 'text-red-400 bg-red-500/10 border-red-500/30',
  'extrême': 'text-rose-400 bg-rose-500/10 border-rose-500/30',
};

const typeLabel: Record<string, string> = {
  'combat': 'Combat',
  'puzzle_deplacement': 'Puzzle / Déplacement',
  'puzzle_portails': 'Puzzle / Portails',
  'dialogue_pnj': 'Dialogue PNJ',
  'dialogue': 'Dialogue',
  'puzzle_collaboratif': 'Puzzle Collaboratif',
  'camping_coffres': 'Camping Coffres',
  'exploration_iles_obsidiennes': 'Exploration',
  'puzzle_dalles': 'Puzzle Dalles',
  'exploration_complexe': 'Exploration Complexe',
  'exploration': 'Exploration',
  'multi_etapes': 'Multi-étapes',
  'puzzle_dalles_collaboratif': 'Puzzle Dalles (Coop)',
  'fetch': 'Récupération',
  'craft': 'Craft',
};

const typeIcon: Record<string, React.ReactNode> = {
  'combat': <Swords size={14} />,
  'puzzle_deplacement': <Key size={14} />,
  'puzzle_portails': <Key size={14} />,
  'dialogue_pnj': <MessageSquare size={14} />,
  'dialogue': <MessageSquare size={14} />,
  'puzzle_collaboratif': <Users size={14} />,
  'camping_coffres': <Clock size={14} />,
  'exploration_iles_obsidiennes': <MapPin size={14} />,
  'puzzle_dalles': <Target size={14} />,
  'exploration_complexe': <MapPin size={14} />,
  'exploration': <MapPin size={14} />,
  'multi_etapes': <Target size={14} />,
  'puzzle_dalles_collaboratif': <Users size={14} />,
  'fetch': <Package size={14} />,
  'craft': <FlaskConical size={14} />,
};

/* ─── Helpers ─── */

const getMainIslands = (zone: string[] | null | undefined): string[] => {
  if (!zone || zone.length === 0) return ['Autre'];
  const result = new Set<string>();
  for (const z of zone) {
    const lc = z.toLowerCase();
    if (lc.includes('académie') || lc.includes('academie')) result.add('Académie');
    else if (lc.includes('arakas')) result.add('Arakas');
    else if (lc.includes('stoneheim')) result.add('Stoneheim');
    else if (lc.includes("raven's dust") || lc.includes('raven')) result.add("Raven's Dust");
    else if (lc.includes('drake')) result.add('Drake Island');
    else if (lc.includes('niève') || lc.includes('nieve')) result.add('Niève');
    else if (lc.includes('multi')) result.add('Multi-îles');
    else result.add('Autre');
  }
  if (result.size > 1) return ['Multi-îles'];
  return [...result];
};

const getStepNumber = (step: QuestStep): number => step.key_number ?? step.step_number ?? 0;

const getProgressKey = (questId: string) => `t4c-quest-progress-${questId}`;

/* ─── Quest List View ─── */

const QuestListView = ({ quests, onSelect }: { quests: Quest[]; onSelect: (q: Quest) => void }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIsland, setSelectedIsland] = useState('Tous');
  const [selectedLevelRange, setSelectedLevelRange] = useState('Tous');
  const [groupFilter, setGroupFilter] = useState('Tous');
  const [showBossOnly, setShowBossOnly] = useState(false);
  const [viewMode, setViewMode] = useState<'cards' | 'list'>(() => {
    return (localStorage.getItem('t4c-quest-view-mode') as 'cards' | 'list') || 'list';
  });

  const [sortBy, setSortBy] = useState<'name' | 'level' | 'steps' | 'zone'>('name');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const toggleSort = (col: 'name' | 'level' | 'steps' | 'zone') => {
    if (sortBy === col) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortBy(col); setSortDir(col === 'level' || col === 'steps' ? 'desc' : 'asc'); }
  };

  const islands = ['Tous', 'Arakas', "Raven's Dust", 'Stoneheim', 'Drake Island', 'Niève', 'Académie', 'Multi-îles', 'Autre'];
  const levelRanges = ['Tous', '1-25', '26-80', '81-200', '200+'];

  const filteredQuests = useMemo(() => {
    let result = quests.filter(q => {
      // Text Search
      if (searchTerm) {
        const normalizedSearch = fastNormalize(searchTerm);
        const searchPool = [
          q.name,
          ...(q.zone || []),
          q.description,
          q.boss_fight?.name || '',
          ...(q.npcs?.map(n => n.name) || [])
        ].map(s => fastNormalize(s)).join(' ');
        
        if (!searchPool.includes(normalizedSearch)) return false;
      }

      // Island Filter
      if (selectedIsland !== 'Tous' && !getMainIslands(q.zone || []).includes(selectedIsland)) return false;

      // Level Filter
      if (selectedLevelRange !== 'Tous') {
        const level = q.level_required || 0;
        if (selectedLevelRange === '1-25' && (level < 1 || level > 25)) return false;
        if (selectedLevelRange === '26-80' && (level < 26 || level > 80)) return false;
        if (selectedLevelRange === '81-200' && (level < 81 || level > 200)) return false;
        if (selectedLevelRange === '200+' && level <= 200) return false;
      }

      // Group Filter
      if (groupFilter === 'Solo' && q.group_recommended) return false;
      if (groupFilter === 'Groupe' && !q.group_recommended) return false;

      // Boss Filter
      if (showBossOnly && !q.boss_fight) return false;


      return true;
    });

    // Sorting
    const dir = sortDir === 'asc' ? 1 : -1;
    result.sort((a, b) => {
      if (sortBy === 'name') return dir * a.name.localeCompare(b.name);
      if (sortBy === 'level') return dir * ((a.level_required || 0) - (b.level_required || 0));
      if (sortBy === 'steps') return dir * ((a.steps?.length || 0) - (b.steps?.length || 0));
      if (sortBy === 'zone') return dir * ((a.zone?.[0] || '').localeCompare(b.zone?.[0] || ''));
      return 0;
    });

    return result;
  }, [quests, searchTerm, selectedIsland, selectedLevelRange, groupFilter, showBossOnly, sortBy, sortDir]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedIsland('Tous');
    setSelectedLevelRange('Tous');
    setGroupFilter('Tous');
    setShowBossOnly(false);
    setSortBy('name');
    setSortDir('asc');
  };

  return (
    <div className="space-y-6">
      {/* Hero Header + Search */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-amber-950/20 backdrop-blur-md p-8 md:p-12"
      >
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-500/20">
                <Scroll size={32} className="text-amber-500" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-amber-400 font-fantasy tracking-tight uppercase italic">Quêtes</h1>
                <p className="text-slate-400 font-medium">{quests.length} aventures légendaires vous attendent</p>
              </div>
            </div>

            {/* Instant Search Bar */}
            <div className="relative max-w-xl group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-amber-500 transition-colors" size={20} />
              <input
                type="text"
                placeholder="Rechercher une quête, zone, boss..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-slate-950/50 border border-slate-800 rounded-2xl text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500/40 transition-all shadow-inner"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-amber-500/5 border border-amber-500/10 rounded-xl">
              <SlidersHorizontal size={14} className="text-amber-500/60" />
              <span className="text-xs font-bold text-amber-500/80 uppercase tracking-wider">Trier par</span>
              <select
                value={`${sortBy}_${sortDir}`}
                onChange={(e) => {
                  const [col, dir] = e.target.value.split('_') as ['name' | 'level' | 'steps' | 'zone', 'asc' | 'desc'];
                  setSortBy(col);
                  setSortDir(dir);
                }}
                className="bg-transparent text-xs font-bold text-slate-200 focus:outline-none cursor-pointer"
              >
                <option value="name_asc" className="bg-slate-900">Nom (A-Z)</option>
                <option value="name_desc" className="bg-slate-900">Nom (Z-A)</option>
                <option value="level_asc" className="bg-slate-900">Niveau (Croissant)</option>
                <option value="level_desc" className="bg-slate-900">Niveau (Décroissant)</option>
                <option value="steps_desc" className="bg-slate-900">Étapes (Décroissant)</option>
                <option value="steps_asc" className="bg-slate-900">Étapes (Croissant)</option>
              </select>
            </div>
            <div className="flex items-center bg-slate-900/40 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => { setViewMode('cards'); localStorage.setItem('t4c-quest-view-mode', 'cards'); }}
                className={`p-2 rounded-lg transition-all ${viewMode === 'cards' ? 'bg-slate-800 text-amber-500' : 'text-slate-500 hover:text-slate-300'}`}
                title="Vue cartes"
              >
                <LayoutGrid size={14} />
              </button>
              <button
                onClick={() => { setViewMode('list'); localStorage.setItem('t4c-quest-view-mode', 'list'); }}
                className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-slate-800 text-amber-500' : 'text-slate-500 hover:text-slate-300'}`}
                title="Vue liste"
              >
                <List size={14} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Filters Bar */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3">
          {/* Island Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide no-scrollbar">
            {islands.map(island => (
              <button
                key={island}
                onClick={() => setSelectedIsland(island)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                  selectedIsland === island
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                    : 'bg-slate-900/40 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                {island}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {/* Level Filter */}
            <div className="flex items-center gap-2 bg-slate-900/40 p-1 rounded-xl border border-slate-800">
              {levelRanges.map(range => (
                <button
                  key={range}
                  onClick={() => setSelectedLevelRange(range)}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all ${
                    selectedLevelRange === range
                      ? 'bg-slate-800 text-amber-500'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>

            {/* Special Toggles */}
            <div className="flex items-center gap-2">
              <FilterChip
                active={groupFilter === 'Groupe'}
                onClick={() => setGroupFilter(groupFilter === 'Groupe' ? 'Tous' : 'Groupe')}
                icon={Users}
                label="Groupe"
              />
              <FilterChip
                active={showBossOnly}
                onClick={() => setShowBossOnly(!showBossOnly)}
                icon={Skull}
                label="Boss"
              />

            </div>

            <button
              onClick={resetFilters}
              className="flex items-center gap-2 px-3 py-2 text-xs font-bold text-slate-500 hover:text-amber-500 transition-colors"
            >
              <RotateCcw size={14} /> Réinitialiser
            </button>
          </div>

          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            {filteredQuests.length} quête{filteredQuests.length > 1 ? 's' : ''} trouvée{filteredQuests.length > 1 ? 's' : ''}
          </div>
        </div>
      </div>

      {/* Quest Display */}
      {filteredQuests.length > 0 ? (
        viewMode === 'cards' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredQuests.map((quest, i) => (
                <QuestCard key={quest.id} quest={quest} onClick={() => onSelect(quest)} index={i} />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="glass-card rounded-2xl border border-slate-800/50 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/60">
                  <th className="text-left px-4 py-3 text-[10px] font-black uppercase tracking-widest cursor-pointer select-none hover:text-amber-400 transition-colors" onClick={() => toggleSort('name')}>
                    <span className={`flex items-center gap-1 ${sortBy === 'name' ? 'text-amber-500' : 'text-slate-500'}`}>
                      Quête {sortBy === 'name' && (sortDir === 'asc' ? <ChevronUp size={10} /> : <ChevronDown size={10} />)}
                    </span>
                  </th>
                  <th className="text-left px-4 py-3 text-[10px] font-black uppercase tracking-widest hidden md:table-cell cursor-pointer select-none hover:text-amber-400 transition-colors" onClick={() => toggleSort('zone')}>
                    <span className={`flex items-center gap-1 ${sortBy === 'zone' ? 'text-amber-500' : 'text-slate-500'}`}>
                      Zone {sortBy === 'zone' && (sortDir === 'asc' ? <ChevronUp size={10} /> : <ChevronDown size={10} />)}
                    </span>
                  </th>
                  <th className="text-center px-4 py-3 text-[10px] font-black uppercase tracking-widest w-20 cursor-pointer select-none hover:text-amber-400 transition-colors" onClick={() => toggleSort('level')}>
                    <span className={`flex items-center justify-center gap-1 ${sortBy === 'level' ? 'text-amber-500' : 'text-slate-500'}`}>
                      Niveau {sortBy === 'level' && (sortDir === 'asc' ? <ChevronUp size={10} /> : <ChevronDown size={10} />)}
                    </span>
                  </th>
                  <th className="text-center px-4 py-3 text-[10px] font-black uppercase tracking-widest w-20 hidden sm:table-cell cursor-pointer select-none hover:text-amber-400 transition-colors" onClick={() => toggleSort('steps')}>
                    <span className={`flex items-center justify-center gap-1 ${sortBy === 'steps' ? 'text-amber-500' : 'text-slate-500'}`}>
                      Étapes {sortBy === 'steps' && (sortDir === 'asc' ? <ChevronUp size={10} /> : <ChevronDown size={10} />)}
                    </span>
                  </th>
                  <th className="text-center px-4 py-3 text-[10px] font-black text-slate-500 uppercase tracking-widest w-24 hidden lg:table-cell">Tags</th>
                  <th className="text-center px-4 py-3 text-[10px] font-black text-slate-500 uppercase tracking-widest w-20 hidden sm:table-cell">Progrès</th>
                </tr>
              </thead>
              <tbody>
                {filteredQuests.map((quest) => {
                  const saved = localStorage.getItem(getProgressKey(quest.id));
                  let progress = 0;
                  let isCompleted = false;
                  if (saved) {
                    try {
                      const cs = JSON.parse(saved);
                      if (Array.isArray(cs) && quest.steps?.length) {
                        progress = (cs.length / quest.steps.length) * 100;
                        isCompleted = cs.length === quest.steps.length;
                      }
                    } catch {}
                  }
                  return (
                    <tr
                      key={quest.id}
                      onClick={() => onSelect(quest)}
                      className="border-b border-slate-800/30 hover:bg-amber-500/5 cursor-pointer transition-colors group"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className={`p-1.5 rounded-lg border shrink-0 ${isCompleted ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-amber-500/10 border-amber-500/20'}`}>
                            {isCompleted ? <CheckCircle2 size={14} className="text-emerald-400" /> : <Scroll size={14} className="text-amber-500" />}
                          </div>
                          <span className={`text-sm font-bold transition-colors ${isCompleted ? 'text-emerald-400' : 'text-slate-200 group-hover:text-amber-400'}`}>
                            {quest.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 hidden md:table-cell">
                        <span className="text-xs text-slate-500">{quest.zone?.join(' / ') || '—'}</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        {quest.level_required ? (
                          <span className="text-xs font-bold text-amber-400">{quest.level_required}+</span>
                        ) : (
                          <span className="text-xs text-slate-600">—</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-center hidden sm:table-cell">
                        <span className="text-xs font-bold text-slate-400">{quest.steps?.length ?? 0}</span>
                      </td>
                      <td className="px-4 py-3 hidden lg:table-cell">
                        <div className="flex items-center justify-center gap-1.5">
                          {quest.group_recommended && <span title="Groupe"><Users size={12} className="text-sky-400" /></span>}
                          {quest.boss_fight && <span title="Boss"><Skull size={12} className="text-red-400" /></span>}
                        </div>
                      </td>
                      <td className="px-4 py-3 hidden sm:table-cell">
                        {progress > 0 ? (
                          <div className="flex items-center gap-2 justify-center">
                            <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                              <div className={`h-full rounded-full ${isCompleted ? 'bg-emerald-500' : 'bg-amber-500'}`} style={{ width: `${progress}%` }} />
                            </div>
                            <span className={`text-[10px] font-bold ${isCompleted ? 'text-emerald-400' : 'text-slate-500'}`}>{Math.round(progress)}%</span>
                          </div>
                        ) : (
                          <span className="text-[10px] text-slate-700">—</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )
      ) : (
        <EmptyState
          icon={Search}
          title="Aucune quête trouvée"
          subtitle="Essayez de modifier vos filtres ou votre recherche pour trouver ce que vous cherchez."
          actionLabel="Réinitialiser tous les filtres"
          onAction={resetFilters}
        />
      )}
    </div>
  );
};

const FilterChip = ({ active, onClick, icon: Icon, label }: any) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-[11px] font-bold transition-all border ${
      active
        ? 'bg-amber-500/10 text-amber-500 border-amber-500/30'
        : 'bg-slate-900/40 text-slate-500 border-slate-800 hover:border-slate-700 hover:text-slate-300'
    }`}
  >
    <Icon size={14} />
    {label}
  </button>
);

const QuestCard = ({ quest, onClick, index }: { quest: Quest; onClick: () => void; index: number }) => {
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(getProgressKey(quest.id));
    if (saved) {
      try {
        const completedSteps = JSON.parse(saved);
        if (Array.isArray(completedSteps) && quest.steps && quest.steps.length > 0) {
          const p = (completedSteps.length / quest.steps.length) * 100;
          setProgress(p);
          setIsCompleted(completedSteps.length === quest.steps.length);
        }
      } catch (e) {
        console.error("Failed to parse quest progress", e);
      }
    }
  }, [quest.id, quest.steps]);

  return (
    <motion.button
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: Math.min(index * 0.02, 0.2) }}
      onClick={onClick}
      className={`text-left glass-card rounded-2xl p-5 border transition-all duration-300 hover:scale-[1.02] group relative overflow-hidden ${
        isCompleted ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-slate-800/50 hover:border-amber-500/30'
      }`}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className={`p-2.5 rounded-xl border shrink-0 transition-colors ${
          isCompleted ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-amber-500/10 border-amber-500/20 group-hover:bg-amber-500/20'
        }`}>
          {isCompleted ? <CheckCircle2 size={18} className="text-emerald-400" /> : <Scroll size={18} className="text-amber-500" />}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className={`font-bold text-sm transition-colors leading-tight ${
              isCompleted ? 'text-emerald-400' : 'text-slate-200 group-hover:text-amber-400'
            }`}>
              {quest.name}
            </h3>
            {isCompleted && (
              <span className="shrink-0 text-[10px] font-black text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">Terminée</span>
            )}
          </div>
          <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-1.5">
            <MapPin size={11} className="shrink-0" /> {quest.zone?.join(' / ') || 'Inconnue'}
          </p>
        </div>
      </div>

      <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4 h-8">{quest.description}</p>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        {quest.level_required && (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20">
            Niv. {quest.level_required}+
          </span>
        )}
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-bold text-slate-400 bg-slate-800/60 border border-slate-700/40">
          {quest.steps?.length ?? 0} étapes
        </span>
        {quest.group_recommended && (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-bold text-sky-400 bg-sky-500/10 border border-sky-500/30">
            <Users size={10} /> Groupe
          </span>
        )}
        {quest.boss_fight && (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-bold text-red-400 bg-red-500/10 border border-red-500/20">
            <Skull size={10} /> Boss
          </span>
        )}
      </div>

      {/* Progress Bar Mini */}
      {progress > 0 && (
        <div className="h-1 bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
          <div
            className={`h-full transition-all duration-500 ${isCompleted ? 'bg-emerald-500' : 'bg-amber-500'}`}
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </motion.button>
  );
};

/* ─── Quest Detail View ─── */

const QuestDetailView = ({ quest, onBack }: { quest: Quest; onBack: () => void }) => {
  const { npcsData, bestiaryData, plantsData, treesData, depositsData } = useData();
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(() => {
    const saved = localStorage.getItem(getProgressKey(quest.id));
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });
  const [mapModal, setMapModal] = useState<{ name: string; coordinates: string[]; category: string } | null>(null);

  const entityLocationMap = useMemo(() => {
    const map = new Map<string, { coordinates: string[]; category: string }>();

    npcsData.forEach(npc => {
      const rawCoords = Array.isArray(npc.coordinates) ? npc.coordinates : (npc.coordinates ? [npc.coordinates] : []);
      const valid = rawCoords.filter(c => {
        if (!c || typeof c !== 'string' || !c.trim()) return false;
        const p = c.replace(/,/g, '.').split('.').map(Number);
        return p.length >= 3 && !isNaN(p[2]) && p[2] !== -1;
      });
      if (valid.length > 0) map.set(fastNormalize(npc.name), { coordinates: valid, category: 'PNJs' });
    });

    bestiaryData.forEach(m => {
      const rawCoords = (Array.isArray(m.coordinates) ? m.coordinates : (m.coordinates ? [m.coordinates] : [])).filter(Boolean);
      const valid = rawCoords.filter(c => { const p = c.split('.').map(Number); return p.length >= 3 && !isNaN(p[2]) && p[2] !== -1; });
      if (valid.length > 0) map.set(fastNormalize(m.name), { coordinates: valid, category: 'Monstres' });
    });

    [plantsData, treesData, depositsData].forEach((list, i) => {
      const cat = ['Plantes', 'Arbres', 'Gisements'][i];
      list.forEach(item => {
        const rawCoords = (Array.isArray(item.coordinates) ? item.coordinates : (item.coordinates ? [item.coordinates] : [])).filter(Boolean);
        const valid = rawCoords.filter(c => { const p = c.split('.').map(Number); return p.length >= 3 && !isNaN(p[2]) && p[2] !== -1; });
        if (valid.length > 0) map.set(fastNormalize(item.name), { coordinates: valid, category: cat });
      });
    });

    return map;
  }, [npcsData, bestiaryData, plantsData, treesData, depositsData]);

  const openMapForEntity = (name: string) => {
    const entry = entityLocationMap.get(fastNormalize(name));
    if (entry) setMapModal({ name, ...entry });
  };

  useEffect(() => {
    localStorage.setItem(getProgressKey(quest.id), JSON.stringify([...completedSteps]));
  }, [completedSteps, quest.id]);

  const toggleComplete = (num: number) => {
    setCompletedSteps(prev => {
      const next = new Set(prev);
      if (next.has(num)) next.delete(num); else next.add(num);
      return next;
    });
  };

  const progress = quest.steps?.length ? (completedSteps.size / quest.steps.length) * 100 : 0;

  const hasDetailedItems = quest.items_required_overview &&
    ((quest.items_required_overview.potions_evalcian?.length ?? 0) > 0 ||
     (quest.items_required_overview.items_speciaux?.length ?? 0) > 0);

  const recapCount = 1 + (quest.npcs && quest.npcs.length > 0 ? 1 : 0) + (hasDetailedItems ? 1 : 0);
  const recapCols = recapCount >= 3 ? 'lg:grid-cols-3' : recapCount === 2 ? 'lg:grid-cols-2' : '';

  return (
    <div className="space-y-8 pb-12">
      {/* Back + Hero Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-amber-950/20 backdrop-blur-md p-8 md:p-10"
      >
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="relative">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors mb-4 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Toutes les quêtes
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20">
              <Scroll size={28} className="text-amber-500" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-amber-400 font-fantasy tracking-tight">
                {quest.name}
              </h1>
              <p className="text-slate-400 text-sm mt-1 flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-1.5"><MapPin size={14} /> {quest.zone?.join(' / ') || 'Inconnue'}</span>
                {quest.level_required && <span className="flex items-center gap-1.5"><ShieldAlert size={14} /> Niveau {quest.level_required}+</span>}
                {quest.alignment_required && <span className="flex items-center gap-1.5"><Shield size={14} /> {quest.alignment_required}</span>}
                {quest.group_size_recommended && <span className="flex items-center gap-1.5"><Users size={14} /> {quest.group_size_recommended}</span>}
              </p>
            </div>
          </div>
          <p className="text-slate-300 leading-relaxed max-w-3xl">{quest.description}</p>

          {/* Prerequisites */}
          {quest.prerequisites && quest.prerequisites.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold self-center mr-1">Prérequis :</span>
              {quest.prerequisites.map((p, i) => (
                <span key={i} className="px-2 py-1 rounded-lg text-[11px] bg-slate-800/60 text-slate-400 border border-slate-700/40">
                  {p}
                </span>
              ))}
            </div>
          )}

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Progression</span>
              <span className="text-xs font-bold text-amber-400">{completedSteps.size}/{quest.steps?.length ?? 0} étapes</span>
            </div>
            <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.4)]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Recap Cards */}
      <div className={`grid grid-cols-1 ${recapCols} gap-6`}>
        {/* Rewards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-2xl p-6 border border-emerald-500/20 card-hover-glow"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2.5 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
              <Gift size={22} className="text-emerald-400" />
            </div>
            <h2 className="text-lg font-black text-emerald-400 font-fantasy uppercase tracking-wider">Récompenses</h2>
          </div>
          <ul className="space-y-3">
            {quest.rewards.experience && (
              <li className="flex items-start gap-3">
                <Crown size={16} className="text-amber-400 mt-0.5 shrink-0" />
                <span className="text-slate-300 text-sm"><span className="text-amber-400 font-bold">{quest.rewards.experience}</span> d'expérience</span>
              </li>
            )}
            {quest.rewards.access && (
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-sky-400 mt-0.5 shrink-0" />
                <span className="text-slate-300 text-sm">{quest.rewards.access}</span>
              </li>
            )}
            {quest.rewards.items?.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Package size={16} className="text-blue-400 mt-0.5 shrink-0" />
                <span className="text-slate-300 text-sm">
                  {item.name} <span className="text-amber-400 font-bold">x{item.quantity}</span>
                  {item.note && <span className="text-slate-500 text-xs block">{item.note}</span>}
                </span>
              </li>
            ))}
            {quest.rewards.boss_drops && (
              <li className="flex items-start gap-3">
                <Skull size={16} className="text-red-400 mt-0.5 shrink-0" />
                <span className="text-slate-300 text-sm">{quest.rewards.boss_drops}</span>
              </li>
            )}
            {quest.rewards.bonus && (
              <li className="flex items-start gap-3">
                <Gift size={16} className="text-purple-400 mt-0.5 shrink-0" />
                <span className="text-slate-300 text-sm">{quest.rewards.bonus}</span>
              </li>
            )}
          </ul>
          {quest.rewards.note && (
            <div className="mt-4 p-3 bg-amber-500/5 rounded-xl border border-amber-500/10">
              <p className="text-xs text-amber-400/80 flex items-start gap-2">
                <Info size={14} className="shrink-0 mt-0.5" />
                {quest.rewards.note}
              </p>
            </div>
          )}
        </motion.div>

        {/* NPCs */}
        {quest.npcs && quest.npcs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl p-6 border border-blue-500/20 card-hover-glow"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-blue-500/10 rounded-xl border border-blue-500/20">
                <Users size={22} className="text-blue-400" />
              </div>
              <h2 className="text-lg font-black text-blue-400 font-fantasy uppercase tracking-wider">PNJ</h2>
            </div>
            <div className="space-y-4">
              {quest.npcs.map((npc, i) => (
                <div key={i} className="p-3 bg-slate-800/40 rounded-xl border border-slate-700/30">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-slate-200 text-sm">{npc.name}</h3>
                    {entityLocationMap.has(fastNormalize(npc.name)) && (
                      <button
                        onClick={() => openMapForEntity(npc.name)}
                        className="p-1 hover:bg-blue-500/20 rounded-md text-blue-400/60 hover:text-blue-400 transition-all"
                        title="Voir sur la carte"
                      >
                        <MapIcon size={14} />
                      </button>
                    )}
                  </div>
                  <p className="text-xs text-blue-400 mb-2">{npc.role}{npc.location ? ` — ${npc.location}` : ''}</p>
                  {npc.interactions?.map((inter, j) => (
                    <p key={j} className="text-xs text-slate-400 flex items-start gap-2">
                      <MessageSquare size={12} className="shrink-0 mt-0.5 text-slate-500" />
                      <span>
                        {inter.keyword && <span className="text-amber-400 font-mono">« {inter.keyword} »</span>}{inter.keyword && ' — '}{inter.purpose}
                      </span>
                    </p>
                  ))}
                  {npc.sells && (
                    <div className="mt-2 pt-2 border-t border-slate-700/30">
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-1">Vend :</p>
                      <ul className="space-y-1">
                        {npc.sells.map((item, k) => (
                          <li key={k} className="text-xs text-slate-400 flex items-center gap-1.5">
                            <FlaskConical size={10} className="text-purple-400 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Required Items */}
        {hasDetailedItems && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-2xl p-6 border border-purple-500/20 card-hover-glow"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <Package size={22} className="text-purple-400" />
              </div>
              <h2 className="text-lg font-black text-purple-400 font-fantasy uppercase tracking-wider">Objets Requis</h2>
            </div>

            {(quest.items_required_overview?.potions_evalcian?.length ?? 0) > 0 && (
              <div className="mb-4">
                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-2 flex items-center gap-1.5">
                  <FlaskConical size={10} /> Potions (Evalcian)
                </p>
                <ul className="space-y-2">
                  {quest.items_required_overview?.potions_evalcian?.map((pot, i) => (
                    <li key={i} className="p-2.5 bg-slate-800/40 rounded-lg border border-slate-700/30">
                      <p className="text-xs font-bold text-purple-300">{pot.name}</p>
                      <p className="text-[11px] text-slate-400">{pot.usage}</p>
                      {pot.duration && <p className="text-[10px] text-slate-500 mt-0.5"><Clock size={10} className="inline mr-1" />{pot.duration}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(quest.items_required_overview?.items_speciaux?.length ?? 0) > 0 && (
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-2 flex items-center gap-1.5">
                  <Key size={10} /> Objets spéciaux
                </p>
                <ul className="space-y-2">
                  {quest.items_required_overview?.items_speciaux?.map((item, i) => (
                    <li key={i} className="p-2.5 bg-slate-800/40 rounded-lg border border-slate-700/30">
                      <p className="text-xs font-bold text-amber-300">{item.name}</p>
                      <p className="text-[11px] text-slate-400">Usage : {item.usage}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">
                        {Array.isArray(item.obtention) ? item.obtention.join(' / ') : item.obtention}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </div>

      {/* Stepper */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-amber-500/10 rounded-xl border border-amber-500/20">
            <Target size={22} className="text-amber-500" />
          </div>
          <h2 className="text-2xl font-black text-amber-400 font-fantasy uppercase tracking-wider">
            Étapes ({quest.steps?.length ?? 0})
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[23px] md:left-[27px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500/40 via-amber-500/20 to-transparent" />

          <div className="space-y-3">
            {(quest.steps ?? []).map((step, index) => {
              const num = getStepNumber(step);
              const isExpanded = expandedStep === num;
              const isCompleted = completedSteps.has(num);
              const diffClass = step.difficulty ? (difficultyColor[step.difficulty] || 'text-slate-400 bg-slate-500/10 border-slate-500/30') : '';

              return (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                >
                  {/* Step Header */}
                  <div
                    className="flex items-start gap-4 md:gap-5 cursor-pointer group"
                    onClick={() => setExpandedStep(isExpanded ? null : num)}
                  >
                    {/* Step Circle */}
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleComplete(num); }}
                      className={`
                        relative z-10 shrink-0 w-[48px] h-[48px] md:w-[56px] md:h-[56px] rounded-2xl flex items-center justify-center
                        font-black font-fantasy text-sm md:text-base transition-all duration-300 border-2
                        ${isCompleted
                          ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                          : 'bg-slate-900/80 border-slate-700/50 text-slate-400 hover:border-amber-500/40 hover:text-amber-400'}
                      `}
                      title={isCompleted ? 'Marquer comme non terminé' : 'Marquer comme terminé'}
                    >
                      {isCompleted ? <CheckCircle2 size={22} /> : num}
                    </button>

                    {/* Step Summary */}
                    <div className={`
                      flex-1 p-4 md:p-5 rounded-xl border transition-all duration-300
                      ${isExpanded
                        ? 'bg-slate-900/60 border-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.05)]'
                        : 'bg-slate-900/30 border-slate-800/50 hover:border-slate-700 hover:bg-slate-900/40'}
                      ${isCompleted ? 'border-emerald-500/20' : ''}
                    `}>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-1">
                        <h3 className={`font-bold text-sm md:text-base ${isCompleted ? 'text-emerald-400/70 line-through' : 'text-slate-200'}`}>
                          {step.name}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2">
                          {step.difficulty && (
                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold border ${diffClass}`}>
                              {step.difficulty}
                            </span>
                          )}
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold text-slate-400 bg-slate-800/60 border border-slate-700/40">
                            {typeIcon[step.type] || <Target size={14} />} {typeLabel[step.type] || step.type}
                          </span>
                          {step.group_required && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold text-sky-400 bg-sky-500/10 border border-sky-500/30">
                              <Users size={10} /> Groupe{step.group_size_minimum ? ` (${step.group_size_minimum}+)` : ''}
                            </span>
                          )}
                          {(step.potions_required?.length ?? 0) > 0 && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold text-purple-400 bg-purple-500/10 border border-purple-500/30">
                              <FlaskConical size={10} /> Potions
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                        <p className="text-xs text-slate-400 flex items-center gap-1.5">
                          <MapPin size={12} className="shrink-0" /> {step.location}
                        </p>
                        {step.coordinates && (
                          <Link
                            to={`/maps?coordinates=${encodeURIComponent(step.coordinates)}`}
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold text-rose-300 bg-rose-500/10 border border-rose-500/20 hover:bg-rose-500/20 hover:border-rose-500/50 transition-all"
                          >
                            <MapIcon size={10} className="text-rose-500" />
                            {step.coordinates}
                          </Link>
                        )}
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-xs text-slate-500">{step.objective}</p>
                        <div className="shrink-0 ml-2 text-slate-500 group-hover:text-amber-400 transition-colors">
                          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-[62px] md:ml-[76px] mt-2 space-y-4">
                          {/* Instructions */}
                          {step.instructions && step.instructions.length > 0 && (
                            <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-800/50">
                              <p className="text-[10px] text-amber-500 uppercase tracking-wider font-bold mb-3 flex items-center gap-1.5">
                                <Scroll size={12} /> Instructions
                              </p>
                              <ol className="space-y-2">
                                {step.instructions.map((inst, i) => (
                                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                                    <span className="shrink-0 w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-bold flex items-center justify-center mt-0.5">
                                      {i + 1}
                                    </span>
                                    <span className="leading-relaxed">{inst}</span>
                                  </li>
                                ))}
                              </ol>
                            </div>
                          )}

                          {/* Sub-steps */}
                          {step.sub_steps && (
                            <div className="space-y-3">
                              {step.sub_steps.map((sub, i) => (
                                <div key={i} className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/30">
                                  <h4 className="text-xs font-bold text-amber-400 mb-2 flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] flex items-center justify-center">
                                      {i + 1}
                                    </span>
                                    {sub.name}
                                  </h4>
                                  <ul className="space-y-1.5 ml-7">
                                    {sub.instructions.map((inst, j) => (
                                      <li key={j} className="text-xs text-slate-400 flex items-start gap-2">
                                        <span className="text-slate-600 mt-0.5">•</span>
                                        <span>{inst}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Requirements Row */}
                          <div className="flex flex-wrap gap-3">
                            {(step.potions_required?.length ?? 0) > 0 && (
                              <div className="flex-1 min-w-[200px] p-3 bg-purple-500/5 rounded-xl border border-purple-500/20">
                                <p className="text-[10px] text-purple-400 uppercase tracking-wider font-bold mb-2 flex items-center gap-1.5">
                                  <FlaskConical size={10} /> Potions requises
                                </p>
                                <ul className="space-y-1">
                                  {step.potions_required?.map((pot, i) => (
                                    <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                                      {pot}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {(step.items_required?.length ?? 0) > 0 && (
                              <div className="flex-1 min-w-[200px] p-3 bg-blue-500/5 rounded-xl border border-blue-500/20">
                                <p className="text-[10px] text-blue-400 uppercase tracking-wider font-bold mb-2 flex items-center gap-1.5">
                                  <Package size={10} /> Objets requis
                                </p>
                                <ul className="space-y-1">
                                  {step.items_required?.map((item, i) => (
                                    <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {step.respawn && (
                              <div className="flex-1 min-w-[200px] p-3 bg-slate-800/30 rounded-xl border border-slate-700/30">
                                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-2 flex items-center gap-1.5">
                                  <Clock size={10} /> Respawn
                                </p>
                                <ul className="space-y-1">
                                  {Object.entries(step.respawn).map(([key, val]) => (
                                    <li key={key} className="text-xs text-slate-400 flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                                      <span className="text-slate-500 capitalize">{key.replace(/_/g, ' ')} :</span> {val}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>

                          {/* Warnings */}
                          {(step.warnings?.length ?? 0) > 0 && (
                            <div className="p-3 bg-red-500/5 rounded-xl border border-red-500/20">
                              <p className="text-[10px] text-red-400 uppercase tracking-wider font-bold mb-2 flex items-center gap-1.5">
                                <AlertTriangle size={10} /> Avertissements
                              </p>
                              <ul className="space-y-1.5">
                                {step.warnings?.map((warn, i) => (
                                  <li key={i} className="text-xs text-red-300/80 flex items-start gap-2">
                                    <AlertTriangle size={12} className="shrink-0 mt-0.5 text-red-400/60" />
                                    {warn}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Drop Method */}
                          {step.drop_method && (
                            <p className="text-[10px] text-slate-500 flex items-center gap-1.5">
                              <Package size={10} /> Récupération : <span className="text-slate-400 font-medium">{step.drop_method}</span>
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Boss Fight */}
      {quest.boss_fight && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-red-500/30 bg-gradient-to-br from-slate-900/80 via-red-950/10 to-slate-900/80 backdrop-blur-md p-8"
        >
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
          <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/5 rounded-full blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-500/10 rounded-xl border border-red-500/20">
                <Skull size={28} className="text-red-400" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-red-400 font-fantasy uppercase tracking-wider">{quest.boss_fight.name}</h2>
                <p className="text-sm text-red-400/60">{quest.boss_fight.title}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-800/50">
                  <p className="text-[10px] text-red-400 uppercase tracking-wider font-bold mb-2">Informations</p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2"><MapPin size={14} className="shrink-0 mt-0.5 text-slate-500" /> {quest.boss_fight.location}</li>
                    <li className="flex items-start gap-2"><Users size={14} className="shrink-0 mt-0.5 text-slate-500" /> {quest.boss_fight.group_recommended}</li>
                    <li className="flex items-start gap-2"><Swords size={14} className="shrink-0 mt-0.5 text-slate-500" /> {quest.boss_fight.kill_method}</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-500/5 rounded-xl border border-red-500/20">
                  <p className="text-[10px] text-red-400 uppercase tracking-wider font-bold mb-2 flex items-center gap-1.5"><AlertTriangle size={10} /> Capacités</p>
                  <ul className="space-y-1.5">
                    {quest.boss_fight.abilities?.map((ab, i) => (
                      <li key={i} className="text-xs text-red-300/80 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />{ab}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-emerald-500/5 rounded-xl border border-emerald-500/20">
                  <p className="text-[10px] text-emerald-400 uppercase tracking-wider font-bold mb-2 flex items-center gap-1.5"><Info size={10} /> Conseils</p>
                  <ul className="space-y-1.5">
                    {quest.boss_fight.tips?.map((tip, i) => (
                      <li key={i} className="text-xs text-emerald-300/80 flex items-start gap-2">
                        <CheckCircle2 size={12} className="shrink-0 mt-0.5 text-emerald-400/60" />{tip}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-amber-500/5 rounded-xl border border-amber-500/20">
                  <p className="text-[10px] text-amber-400 uppercase tracking-wider font-bold mb-2 flex items-center gap-1.5"><Gift size={10} /> Après le combat</p>
                  <p className="text-xs text-slate-300">{quest.boss_fight.post_kill.action}</p>
                  <p className="text-[11px] text-amber-400/70 mt-1">{quest.boss_fight.post_kill.note}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Post-Completion */}
      {quest.post_completion && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="glass-card rounded-2xl p-6 border border-slate-700/30"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2.5 bg-slate-700/30 rounded-xl border border-slate-600/20">
              <Info size={22} className="text-slate-400" />
            </div>
            <h2 className="text-lg font-black text-slate-300 font-fantasy uppercase tracking-wider">Après la quête</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/30">
              <p className="text-xs font-bold text-amber-400 mb-2">Clefs conservées</p>
              <div className="flex flex-wrap gap-1.5">
                {quest.post_completion.keys_remaining?.map((key, i) => (
                  <span key={i} className="px-2 py-1 rounded-lg text-[11px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">{key}</span>
                ))}
              </div>
              <p className="text-xs text-slate-400 mt-2">{quest.post_completion.keys_lost}</p>
            </div>
            <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/30">
              <p className="text-xs font-bold text-blue-400 mb-2">Retour au boss</p>
              <p className="text-xs text-slate-400">{quest.post_completion.return_access}</p>
            </div>
            <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/30">
              <p className="text-xs font-bold text-purple-400 mb-2">Zones verrouillées</p>
              <div className="flex flex-wrap gap-1.5">
                {quest.post_completion.locked_areas?.map((area, i) => (
                  <span key={i} className="px-2 py-1 rounded-lg text-[11px] bg-purple-500/10 text-purple-300 border border-purple-500/20">{area}</span>
                ))}
              </div>
              <p className="text-xs text-slate-400 mt-2">{quest.post_completion.reaccess_tip}</p>
            </div>
            <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/30">
              <p className="text-xs font-bold text-emerald-400 mb-2">Astuce duplication</p>
              <p className="text-xs text-slate-400">{quest.post_completion.duplication_tip}</p>
            </div>
          </div>
        </motion.div>
      )}

      <NpcMapModal
        isOpen={!!mapModal}
        onClose={() => setMapModal(null)}
        entityName={mapModal?.name ?? ''}
        coordinates={mapModal?.coordinates[0] ?? ''}
        allCoordinates={mapModal?.coordinates}
        category={mapModal?.category}
      />
    </div>
  );
};

/* ─── Main Page ─── */

const QuestsPage = () => {
  const { questsData, loading, error } = useData();
  const [selectedQuest, setSelectedQuest] = useState<Quest | null>(null);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-3 border-amber-500/20 border-t-amber-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-red-400 font-bold bg-red-500/10 px-6 py-4 rounded-2xl border border-red-500/20 max-w-md text-center">
          <AlertTriangle className="mx-auto mb-3" size={32} />
          {error}
        </div>
      </div>
    );
  }

  if (selectedQuest) {
    return <QuestDetailView quest={selectedQuest} onBack={() => setSelectedQuest(null)} />;
  }

  return <QuestListView quests={questsData} onSelect={setSelectedQuest} />;
};

export default QuestsPage;
