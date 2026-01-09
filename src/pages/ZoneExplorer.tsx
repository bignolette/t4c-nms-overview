import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { bestiaryData } from '../data/bestiary';
import { recipesData } from '../data/recipes';
import { 
  MapPin, User, Skull, Tag, ChevronRight, Package, 
  Search, X, Copy, Check, BookOpen, Scroll, Coins,
  Zap, ShieldAlert, ArrowUp
} from 'lucide-react';

const ZONES = [
  { id: 'Arakas', label: 'Arakas', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { id: 'Raven\'s Dust', label: 'Raven\'s Dust', color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { id: 'Stoneheim', label: 'Stoneheim', color: 'text-orange-400', bg: 'bg-orange-500/10' },
  { id: 'Drake Island', label: 'Drake Island', color: 'text-rose-400', bg: 'bg-rose-500/10' },
  { id: 'Urtanar', label: 'Urtanar', color: 'text-purple-400', bg: 'bg-purple-500/10' },
  { id: 'Académie', label: 'Académie', color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
  { id: 'Cerberus', label: 'Cerberus', color: 'text-red-500', bg: 'bg-red-500/10' },
];

const ITEMS_PER_PAGE = 10;

const CopyButton = ({ text, className = "" }: { text: string, className?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button 
      onClick={handleCopy}
      className={`p-1 hover:bg-slate-800 rounded transition-colors group/copy ${className}`}
      title="Copier les coordonnées"
    >
      {copied ? <Check size={10} className="text-emerald-400" /> : <Copy size={10} className="text-slate-500 group-hover/copy:text-slate-300" />}
    </button>
  );
};

const MonsterCard = ({ monster }: { monster: any }) => {
  const [showAllCoords, setShowAllCoords] = useState(false);

  const coords = useMemo(() => {
    if (!monster.coordinates) return [];
    return monster.coordinates.split(',').map((c: string) => c.trim()).filter((c: string) => c.length > 0);
  }, [monster.coordinates]);

  const visibleCoords = showAllCoords ? coords : coords.slice(0, 5);
  const hasMoreCoords = coords.length > 5;

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-950/40 border border-slate-800/50 p-4 rounded-2xl hover:border-rose-500/30 transition-all group h-full flex flex-col"
    >
      <div className="flex justify-between items-start mb-2">
        <div className="flex-1 min-w-0 pr-2">
          <span className="font-bold text-slate-100 group-hover:text-rose-400 transition-colors truncate block" title={monster.name}>
            {monster.name}
          </span>
          
          <div className="flex flex-wrap gap-2 mt-1">
            <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-900/80 px-1.5 py-0.5 rounded border border-slate-800 flex items-center gap-1">
              {monster.exp} XP
            </span>
            {monster.gold && monster.gold !== "N/A" && (
              <span className="text-[10px] font-mono font-bold text-amber-500/80 bg-amber-500/5 px-1.5 py-0.5 rounded border border-amber-500/10 flex items-center gap-1">
                <Coins size={10} /> {monster.gold} PO
              </span>
            )}
          </div>

          {coords.length > 0 && (
            <div className="mt-2 text-[10px] font-mono text-amber-500/80">
              <div className="flex items-start gap-1.5">
                <MapPin size={10} className="mt-0.5 shrink-0" />
                <div className="flex flex-wrap gap-x-1 gap-y-0.5 leading-relaxed">
                  {visibleCoords.map((coord: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-1 bg-slate-900/50 px-1 rounded border border-slate-800/50">
                      <span className="whitespace-nowrap">
                        {coord}
                      </span>
                      <CopyButton text={coord} />
                    </div>
                  ))}
                  {!showAllCoords && hasMoreCoords && (
                    <span className="text-amber-500/50">...</span>
                  )}
                </div>
              </div>
              
              {hasMoreCoords && (
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    setShowAllCoords(!showAllCoords);
                  }}
                  className="ml-4 mt-1 text-[9px] font-bold text-amber-500 hover:text-amber-300 transition-colors border-b border-dashed border-amber-500/30 hover:border-amber-300 pb-px"
                >
                  {showAllCoords ? "Voir moins" : `+ ${coords.length - 5} autres positions`}
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {(monster.weakness || monster.resistance) && (
        <div className="flex gap-2 mb-3 mt-1">
          {monster.weakness && (
            <div className="flex items-center gap-1 text-[9px] font-bold text-emerald-500 bg-emerald-500/5 px-1 rounded border border-emerald-500/10" title={`Faible contre : ${monster.weakness}`}>
              <Zap size={8} /> {monster.weakness}
            </div>
          )}
          {monster.resistance && (
            <div className="flex items-center gap-1 text-[9px] font-bold text-rose-500 bg-rose-500/5 px-1 rounded border border-rose-500/10" title={`Résistant contre : ${monster.resistance}`}>
              <ShieldAlert size={8} /> {monster.resistance}
            </div>
          )}
        </div>
      )}
      
      <div className="mt-auto pt-3">
        <div className="flex flex-wrap gap-1">
          {monster.drops.slice(0, 4).map((drop: string) => (
            <span key={drop} className="text-[9px] bg-slate-800/50 text-slate-400 px-1.5 py-0.5 rounded border border-slate-700/50 uppercase font-bold tracking-tighter hover:text-slate-200 hover:border-slate-600 transition-colors cursor-default">
              {drop}
            </span>
          ))}
          {monster.drops.length > 4 && (
            <span className="text-[9px] text-slate-600 self-center px-1 font-medium cursor-help" title={monster.drops.slice(4).join(', ')}>
              +{monster.drops.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ResourceCard = ({ resource }: { resource: any }) => {
  const [showAllLocs, setShowAllLocs] = useState(false);
  const locations = resource.locations || [];
  const visibleLocs = showAllLocs ? locations : locations.slice(0, 2);
  const hasMoreLocs = locations.length > 2;

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-900/40 border border-slate-800 p-4 rounded-2xl hover:border-emerald-500/30 transition-all group flex flex-col"
    >
      <div className="flex items-start justify-between">
        <Link to={`/wiki/metiers?search=${encodeURIComponent(resource.name)}`} className="flex items-center gap-3 flex-1 min-w-0 pr-2">
          <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-500 border border-emerald-500/20 shrink-0">
            <Package size={16} />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-bold text-slate-200 group-hover:text-emerald-400 transition-colors truncate">{resource.name}</span>
            {resource.source && (
              <span className="text-[9px] text-slate-500 uppercase font-black tracking-widest">{resource.source}</span>
            )}
          </div>
        </Link>
        <Link to={`/wiki/metiers?search=${encodeURIComponent(resource.name)}`}>
          <ChevronRight size={16} className="text-slate-700 group-hover:text-emerald-500 transition-all" />
        </Link>
      </div>

      {locations.length > 0 && (
        <div className="mt-3 space-y-1.5">
          {visibleLocs.map((loc: any, idx: number) => (
            <div key={idx} className="flex items-center justify-between bg-slate-950/30 px-2 py-1 rounded-lg border border-slate-800/50">
              <div className="flex items-center gap-2 min-w-0">
                <MapPin size={10} className="text-slate-600 shrink-0" />
                <span className="text-[10px] text-slate-400 truncate">{loc.label}</span>
              </div>
              {loc.coordinates && (
                <div className="flex items-center gap-1 shrink-0 ml-2">
                  <span className="text-[10px] font-mono text-amber-500/60">{loc.coordinates}</span>
                  <CopyButton text={loc.coordinates} />
                </div>
              )}
            </div>
          ))}
          
          {hasMoreLocs && (
            <button 
              onClick={() => setShowAllLocs(!showAllLocs)}
              className="text-[9px] font-bold text-slate-500 hover:text-emerald-400 transition-colors pl-2"
            >
              {showAllLocs ? "Voir moins" : `+ ${locations.length - 2} autres lieux`}
            </button>
          )}
        </div>
      )}
    </motion.div>
  );
};

const TeacherCard = ({ teacher }: { teacher: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      layout
      className="bg-slate-900/40 border border-slate-800 p-4 rounded-2xl hover:border-blue-500/30 transition-all group overflow-hidden"
    >
      <div className="flex justify-between items-start mb-2 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex flex-col">
          <span className="font-bold text-slate-100 group-hover:text-blue-400 transition-colors">{teacher.name}</span>
          {teacher.coords && (
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-amber-400 mb-1">
              <MapPin size={12} className="text-amber-500" /> {teacher.coords} <CopyButton text={teacher.coords} />
            </div>
          )}
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="bg-blue-500/10 text-blue-400 text-[10px] font-black px-2 py-0.5 rounded-full border border-blue-500/20 whitespace-nowrap">
            {teacher.recipes.length} RECETTES
          </span>
          <button className="text-slate-600 hover:text-slate-400 transition-colors">
            <ChevronRight size={16} className={`${isExpanded ? 'rotate-90' : ''} transition-transform`} />
          </button>
        </div>
      </div>
      
      {teacher.precision && <p className="text-[10px] text-slate-500 italic line-clamp-1 mb-2">{teacher.precision}</p>}

      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-slate-800/50 mt-3 pt-3 space-y-1"
          >
            {teacher.recipes.map((recipe: string) => (
              <Link 
                to={`/wiki/metiers?search=${encodeURIComponent(recipe)}`}
                key={recipe} 
                className="flex items-center justify-between text-[11px] text-slate-400 hover:text-blue-400 transition-colors py-1 group/item"
              >
                <span className="flex items-center gap-2">
                  <BookOpen size={12} className="text-slate-600 group-hover/item:text-blue-500" />
                  {recipe}
                </span>
                <ChevronRight size={10} className="opacity-0 group-hover/item:opacity-100" />
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ZoneExplorer = () => {
  const [selectedZoneId, setSelectedZoneId] = useState(ZONES[0].id);
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleMonsters, setVisibleMonsters] = useState(ITEMS_PER_PAGE);
  const [visibleResources, setVisibleResources] = useState(ITEMS_PER_PAGE);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset pagination when zone or search changes
  useEffect(() => {
    setVisibleMonsters(ITEMS_PER_PAGE);
    setVisibleResources(ITEMS_PER_PAGE);
  }, [selectedZoneId, searchTerm]);

  const zoneData = useMemo(() => {
    const searchLower = searchTerm.toLowerCase();

    // Filter Monsters
    const monsters = bestiaryData.filter(m => {
      const matchesZone = m.location.includes(selectedZoneId) || 
        (selectedZoneId === 'Drake Island' && m.location.includes('Drake')) ||
        (selectedZoneId === 'Stoneheim' && m.location.includes('Stoneheim'));
      
      if (!matchesZone) return false;

      if (!searchTerm) return true;
      return (
        m.name.toLowerCase().includes(searchLower) ||
        m.drops.some(d => d.toLowerCase().includes(searchLower))
      );
    });
    
    // Filter Resources
    const allResources = recipesData.filter(r => {
      const matchesZone = (r.zones && r.zones.includes(selectedZoneId)) || 
        (r.locations && r.locations.some(l => l.label.includes(selectedZoneId)));
      
      if (!matchesZone) return false;

      if (!searchTerm) return true;
      return r.name.toLowerCase().includes(searchLower);
    });

    // Split into harvestables and quest items
    const resources = allResources.filter(r => !r.description?.toLowerCase().includes('quête'));
    const questItems = allResources.filter(r => r.description?.toLowerCase().includes('quête'));

    // Filter Teachers
    const teachersRaw = recipesData.filter(r => {
      const matchesZone = r.learnedFrom && (
        (r.zones && r.zones.includes(selectedZoneId)) ||
        (r.locationPrecision && r.locationPrecision.includes(selectedZoneId))
      );
      
      if (!matchesZone) return false;
      if (!searchTerm) return true;
      return r.learnedFrom!.toLowerCase().includes(searchLower) || r.name.toLowerCase().includes(searchLower);
    });

    // Group teachers by name
    const uniqueTeachers: Record<string, any> = {};
    teachersRaw.forEach(t => {
      if (!uniqueTeachers[t.learnedFrom!]) {
        uniqueTeachers[t.learnedFrom!] = {
          name: t.learnedFrom,
          coords: t.coordinates,
          precision: t.locationPrecision,
          recipes: []
        };
      }
      if (!uniqueTeachers[t.learnedFrom!].recipes.includes(t.name)) {
        uniqueTeachers[t.learnedFrom!].recipes.push(t.name);
      }
    });

    return {
      monsters: monsters.sort((a, b) => a.name.localeCompare(b.name)),
      resources: resources.sort((a, b) => a.name.localeCompare(b.name)),
      questItems: questItems.sort((a, b) => a.name.localeCompare(b.name)),
      teachers: Object.values(uniqueTeachers).sort((a, b) => a.name.localeCompare(b.name))
    };
  }, [selectedZoneId, searchTerm]);

  const currentZone = ZONES.find(z => z.id === selectedZoneId)!;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      {/* Zone Selector */}
      <div className="flex flex-col gap-4 sticky top-4 z-30">
        <div className="flex flex-wrap gap-2 p-2 bg-slate-900/80 border border-slate-800 rounded-2xl backdrop-blur-xl shadow-xl">
          {ZONES.map(zone => (
            <button
              key={zone.id}
              onClick={() => setSelectedZoneId(zone.id)}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all border ${selectedZoneId === zone.id 
                  ? `${zone.bg} ${zone.color} border-current shadow-lg scale-105` 
                  : 'bg-slate-950 text-slate-500 border-slate-800 hover:border-slate-600 hover:text-slate-300'}`}
            >
              {zone.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-500" />
          </div>
          <input
            type="text"
            placeholder="Rechercher un monstre, un drop ou une ressource..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-900/50 border border-slate-800 text-slate-200 text-sm rounded-xl pl-10 pr-10 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent placeholder:text-slate-600 transition-all"
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="absolute inset-y-0 right-3 flex items-center text-slate-500 hover:text-slate-300"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Zone Summary & Teachers & Quest Items */}
        <div className="lg:col-span-4 space-y-8">
          <motion.div 
            layout
            className={`p-6 rounded-3xl border border-slate-800 ${currentZone.bg} relative overflow-hidden group transition-all duration-500`}
          >
            <div className={`absolute -top-12 -right-12 w-48 h-48 ${currentZone.color.replace('text', 'bg')}/5 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700`}></div>
            <h2 className={`text-3xl font-black uppercase tracking-tighter italic mb-2 ${currentZone.color}`}>{currentZone.label}</h2>
            <div className="flex gap-4 mt-6">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-100">{zoneData.monsters.length}</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Monstres</span>
              </div>
              <div className="w-px h-10 bg-slate-800"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-100">{zoneData.resources.length + zoneData.questItems.length}</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Objets</span>
              </div>
              <div className="w-px h-10 bg-slate-800"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-100">{zoneData.teachers.length}</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Maîtres</span>
              </div>
            </div>
          </motion.div>

          {/* Teacher Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 flex items-center gap-2 px-2">
              <User size={16} className="text-blue-400" /> Maîtres Artisans
            </h3>
            {zoneData.teachers.length > 0 ? (
              <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                {zoneData.teachers.map(teacher => (
                  <TeacherCard key={teacher.name} teacher={teacher} />
                ))}
              </div>
            ) : (
              <div className="p-8 text-center border border-dashed border-slate-800 rounded-2xl text-slate-600 text-xs font-medium uppercase tracking-wider">
                Aucun maître trouvé
              </div>
            )}
          </div>

          {/* Quest Items Section */}
          {zoneData.questItems.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 flex items-center gap-2 px-2">
                <Scroll size={16} className="text-amber-400" /> Objets de Quête
              </h3>
              <div className="space-y-2">
                {zoneData.questItems.map(item => (
                  <Link 
                    to={`/wiki/items?search=${encodeURIComponent(item.name)}`}
                    key={item.name} 
                    className="flex flex-col p-3 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-amber-500/30 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-200 group-hover:text-amber-400 transition-colors">{item.name}</span>
                      <ChevronRight size={12} className="text-slate-700 group-hover:text-amber-500" />
                    </div>
                    {item.description && (
                      <p className="text-[10px] text-slate-500 mt-1 italic leading-tight">{item.description}</p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: Resources & Monsters */}
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 flex items-center gap-2 px-2">
              <Tag size={16} className="text-emerald-400" /> Ressources Récoltables
            </h3>
            {zoneData.resources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {zoneData.resources.slice(0, visibleResources).map(res => (
                  <ResourceCard key={`${res.name}-${res.quantity}`} resource={res} />
                ))}
                {zoneData.resources.length > visibleResources && (
                  <button 
                    onClick={() => setVisibleResources(prev => prev + 20)}
                    className="col-span-full text-[10px] font-bold text-slate-500 hover:text-emerald-400 uppercase tracking-widest py-3 border border-dashed border-slate-800 hover:border-emerald-500/30 rounded-xl transition-all"
                  >
                    + {zoneData.resources.length - visibleResources} autres ressources...
                  </button>
                )}
              </div>
            ) : (
              <div className="p-8 text-center border border-dashed border-slate-800 rounded-2xl text-slate-600 text-xs font-medium uppercase tracking-wider">
                Aucune ressource trouvée
              </div>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 flex items-center gap-2 px-2">
              <Skull size={16} className="text-rose-400" /> Bestiaire Local
            </h3>
            {zoneData.monsters.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                {zoneData.monsters.slice(0, visibleMonsters).map(monster => (
                  <MonsterCard key={monster.name} monster={monster} />
                ))}
                {zoneData.monsters.length > visibleMonsters && (
                  <button 
                    onClick={() => setVisibleMonsters(prev => prev + 20)}
                    className="col-span-full text-[10px] font-bold text-slate-500 hover:text-rose-400 uppercase tracking-widest py-3 border border-dashed border-slate-800 hover:border-rose-500/30 rounded-xl transition-all"
                  >
                    + {zoneData.monsters.length - visibleMonsters} autres monstres...
                  </button>
                )}
              </div>
            ) : (
              <div className="p-8 text-center border border-dashed border-slate-800 rounded-2xl text-slate-600 text-xs font-medium uppercase tracking-wider">
                Aucun monstre trouvé
              </div>
            )}
            <Link to="/wiki/bestiary" className="block text-center text-[10px] font-black text-slate-500 hover:text-rose-400 uppercase tracking-[0.2em] pt-4 border-t border-slate-800/50">
              Consulter le bestiaire complet
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-slate-900 border border-slate-800 text-amber-500 rounded-full shadow-2xl z-50 hover:bg-slate-800 transition-colors"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ZoneExplorer;
