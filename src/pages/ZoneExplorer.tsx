import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { bestiaryData } from '../data/bestiary';
import { recipesData } from '../data/recipes';
import { MapPin, User, Skull, Tag, ChevronRight, Package } from 'lucide-react';

const ZONES = [
  { id: 'Arakas', label: 'Arakas', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { id: 'Raven\'s Dust', label: 'Raven\'s Dust', color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { id: 'Stoneheim', label: 'Stoneheim', color: 'text-orange-400', bg: 'bg-orange-500/10' },
  { id: 'Drake Island', label: 'Drake Island', color: 'text-rose-400', bg: 'bg-rose-500/10' },
  { id: 'Urtanar', label: 'Urtanar', color: 'text-purple-400', bg: 'bg-purple-500/10' },
  { id: 'Académie', label: 'Académie', color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
  { id: 'Cerberus', label: 'Cerberus', color: 'text-red-500', bg: 'bg-red-500/10' },
];

const ZoneExplorer = () => {
  const [selectedZoneId, setSelectedZoneId] = useState(ZONES[0].id);

  const zoneData = useMemo(() => {
    const monsters = bestiaryData.filter(m => m.location.includes(selectedZoneId) || (selectedZoneId === 'Drake Island' && m.location === 'Nieve'));
    
    const resources = recipesData.filter(r => 
      (r.zones && r.zones.includes(selectedZoneId)) || 
      (r.locations && r.locations.some(l => l.label.includes(selectedZoneId)))
    );

    const teachers = recipesData.filter(r => 
      r.learnedFrom && (
        (r.zones && r.zones.includes(selectedZoneId)) ||
        (r.locationPrecision && r.locationPrecision.includes(selectedZoneId))
      )
    );

    // Group teachers by name
    const uniqueTeachers: Record<string, any> = {};
    teachers.forEach(t => {
      if (!uniqueTeachers[t.learnedFrom!]) {
        uniqueTeachers[t.learnedFrom!] = {
          name: t.learnedFrom,
          coords: t.coordinates,
          precision: t.locationPrecision,
          recipesCount: 0
        };
      }
      uniqueTeachers[t.learnedFrom!].recipesCount++;
    });

    return {
      monsters: monsters.sort((a, b) => a.name.localeCompare(b.name)),
      resources: resources.sort((a, b) => a.name.localeCompare(b.name)),
      teachers: Object.values(uniqueTeachers).sort((a, b) => a.name.localeCompare(b.name))
    };
  }, [selectedZoneId]);

  const currentZone = ZONES.find(z => z.id === selectedZoneId)!;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Zone Selector */}
      <div className="flex flex-wrap gap-2 p-2 bg-slate-900/50 border border-slate-800 rounded-2xl backdrop-blur-xl sticky top-4 z-30 shadow-xl">
        {ZONES.map(zone => (
          <button
            key={zone.id}
            onClick={() => setSelectedZoneId(zone.id)}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all border ${
              selectedZoneId === zone.id 
                ? `${zone.bg} ${zone.color} border-current shadow-lg scale-105` 
                : 'bg-slate-950 text-slate-500 border-slate-800 hover:border-slate-600 hover:text-slate-300'
            }`}
          >
            {zone.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Zone Summary & Teachers */}
        <div className="lg:col-span-4 space-y-8">
          <div className={`p-6 rounded-3xl border border-slate-800 ${currentZone.bg} relative overflow-hidden group`}>
            <div className={`absolute -top-12 -right-12 w-48 h-48 ${currentZone.color.replace('text', 'bg')}/5 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700`}></div>
            <h2 className={`text-3xl font-black uppercase tracking-tighter italic mb-2 ${currentZone.color}`}>{currentZone.label}</h2>
            <div className="flex gap-4 mt-6">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-100">{zoneData.monsters.length}</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Monstres</span>
              </div>
              <div className="w-px h-10 bg-slate-800"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-100">{zoneData.resources.length}</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Ressources</span>
              </div>
              <div className="w-px h-10 bg-slate-800"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-100">{zoneData.teachers.length}</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Maîtres</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 flex items-center gap-2 px-2">
              <User size={16} className="text-blue-400" /> Maîtres Artisans
            </h3>
            <div className="space-y-3">
              {zoneData.teachers.map(teacher => (
                <div key={teacher.name} className="bg-slate-900/40 border border-slate-800 p-4 rounded-2xl hover:border-blue-500/30 transition-all group">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-slate-100 group-hover:text-blue-400 transition-colors">{teacher.name}</span>
                    <span className="bg-blue-500/10 text-blue-400 text-[10px] font-black px-2 py-0.5 rounded-full border border-blue-500/20">{teacher.recipesCount} RECETTES</span>
                  </div>
                  {teacher.coords && (
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-amber-400 mb-1">
                      <MapPin size={12} className="text-amber-500" /> {teacher.coords}
                    </div>
                  )}
                  {teacher.precision && <p className="text-[10px] text-slate-500 italic line-clamp-1">{teacher.precision}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Resources & Monsters */}
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 flex items-center gap-2 px-2">
              <Tag size={16} className="text-emerald-400" /> Ressources Récoltables
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {zoneData.resources.slice(0, 8).map(res => (
                <Link to={`/wiki/metiers?search=${encodeURIComponent(res.name)}`} key={res.name} className="bg-slate-900/40 border border-slate-800 p-4 rounded-2xl hover:border-emerald-500/30 transition-all group flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-500 border border-emerald-500/20">
                      <Package size={16} />
                    </div>
                    <span className="font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">{res.name}</span>
                  </div>
                  <ChevronRight size={16} className="text-slate-700 group-hover:text-emerald-500 transition-all" />
                </Link>
              ))}
              {zoneData.resources.length > 8 && (
                <button className="col-span-full text-[10px] font-bold text-slate-600 hover:text-emerald-400 uppercase tracking-widest py-2">
                  + {zoneData.resources.length - 8} autres ressources...
                </button>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 flex items-center gap-2 px-2">
              <Skull size={16} className="text-rose-400" /> Bestiaire Local
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {zoneData.monsters.slice(0, 10).map(monster => (
                <div key={monster.name} className="bg-slate-950/40 border border-slate-800/50 p-4 rounded-2xl hover:border-rose-500/30 transition-all group">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-slate-100 group-hover:text-rose-400 transition-colors">{monster.name}</span>
                    <span className="text-[10px] font-mono font-bold text-slate-500">{monster.exp} XP</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {monster.drops.slice(0, 3).map(drop => (
                      <span key={drop} className="text-[9px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded border border-slate-700 uppercase font-bold tracking-tighter">{drop}</span>
                    ))}
                    {monster.drops.length > 3 && <span className="text-[9px] text-slate-600 self-center">...</span>}
                  </div>
                </div>
              ))}
            </div>
            <Link to="/wiki/bestiary" className="block text-center text-[10px] font-black text-slate-500 hover:text-rose-400 uppercase tracking-[0.2em] pt-4 border-t border-slate-800/50">
              Consulter le bestiaire complet
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoneExplorer;
