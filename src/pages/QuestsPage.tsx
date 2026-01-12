import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { quests, type Quest } from '../data/quests';
import QuestCard from '../components/QuestCard';
import { Search, MapPin, Info, LayoutGrid, CheckCircle2, Timer, Filter, X } from 'lucide-react';

interface ZoneSectionProps {
  zone: string;
  quests: Quest[];
}

const ZoneSection: React.FC<ZoneSectionProps> = ({ zone, quests }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredQuests = useMemo(() => {
    return quests.filter(q => 
      q.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [quests, searchTerm]);

  if (quests.length === 0) return null;

  return (
    <section className="relative space-y-8 pb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-2">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-500 ring-1 ring-amber-500/20">
              <MapPin size={28} />
            </div>
            <div>
              <h2 className="text-3xl font-black text-slate-100 tracking-tight uppercase italic">{zone}</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                  {quests.length} Objectifs disponibles
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group w-full md:w-80">
          <input
            type="text"
            placeholder={`Filtrer ${zone}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-slate-900/40 border-2 border-slate-800 rounded-2xl focus:outline-none focus:border-amber-500/50 text-sm transition-all focus:bg-slate-900 shadow-2xl backdrop-blur-sm"
          />
          <Search className="absolute left-4 top-4 text-slate-600 group-focus-within:text-amber-500 transition-colors" size={18} />
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} className="absolute right-4 top-4 text-slate-500 hover:text-white"><X size={18} /></button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredQuests.length > 0 ? (
          filteredQuests.map((quest, index) => (
            <QuestCard key={`${quest.slug}-${index}`} quest={quest} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-slate-900/20 rounded-[40px] border-2 border-dashed border-slate-800/50">
            <Search size={40} className="text-slate-700 mb-4" />
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Aucun résultat trouvé</p>
          </div>
        )}
      </div>
    </section>
  );
};

const QuestsPage: React.FC = () => {
  const { zone } = useParams<{ zone?: string }>();
  const decodedZone = zone ? decodeURIComponent(zone) : null;

  const groupedQuests = useMemo(() => {
    if (decodedZone) {
      const filtered = quests.filter(q => q.zone === decodedZone);
      return filtered.length > 0 ? [[decodedZone, filtered] as [string, Quest[]]] : [];
    }

    const groups: Record<string, Quest[]> = {};
    quests.forEach(quest => {
      if (!groups[quest.zone]) {
        groups[quest.zone] = [];
      }
      groups[quest.zone].push(quest);
    });
    
    return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
  }, [decodedZone]);

  const globalStats = useMemo(() => {
    const total = quests.length;
    const zones = new Set(quests.map(q => q.zone)).size;
    return { total, zones };
  }, []);

  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-1000 pb-20">
      
      {/* Hero Header */}
      <div className="relative pt-10 pb-6 border-b border-slate-800/50">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/10 blur-[100px] -ml-32 -mt-32 rounded-full pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.3em]">
              <Timer size={12} /> Mise à jour Quotidienne
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase italic leading-none">
              Journal des <span className="text-amber-500">Quêtes</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed font-medium">
              {decodedZone 
                ? `Exploration des archives pour la région : ${decodedZone}`
                : "Suivez votre progression à travers les terres d'Althéa. Chaque secret découvert est un pas de plus vers la légende."}
            </p>
          </div>

          {/* Quick Stats Banner */}
          <div className="flex gap-4 md:mb-2">
            <div className="px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-3xl backdrop-blur-xl">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Total Quêtes</div>
              <div className="text-3xl font-black text-white leading-none flex items-center gap-3">
                {globalStats.total} <LayoutGrid size={24} className="text-amber-500" />
              </div>
            </div>
            <div className="px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-3xl backdrop-blur-xl">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Régions</div>
              <div className="text-3xl font-black text-white leading-none flex items-center gap-3">
                {globalStats.zones} <MapPin size={24} className="text-amber-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Toolbar */}
      {!decodedZone && (
        <div className="flex flex-wrap items-center gap-4 bg-slate-900/30 p-2 rounded-2xl border border-slate-800/50 backdrop-blur-sm">
          <div className="px-4 py-2 text-[10px] font-black text-slate-500 uppercase tracking-widest border-r border-slate-800 mr-2">
            Raccourcis Zones
          </div>
          {groupedQuests.map(([name]) => (
            <button 
              key={name}
              onClick={() => {
                const element = document.getElementById(`zone-${name}`);
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="px-4 py-2 rounded-xl bg-slate-800/50 border border-slate-700 text-xs font-bold text-slate-300 hover:bg-amber-500 hover:text-slate-950 hover:border-amber-400 transition-all active:scale-95"
            >
              {name}
            </button>
          ))}
        </div>
      )}

      {/* Zone Sections */}
      <div className="space-y-24">
        {groupedQuests.length > 0 ? (
          groupedQuests.map(([zoneName, zoneQuests]) => (
            <div key={zoneName} id={`zone-${zoneName}`}>
              <ZoneSection zone={zoneName} quests={zoneQuests} />
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-32 bg-slate-900/20 rounded-[60px] border-2 border-slate-800/50 border-dashed">
            <div className="p-6 bg-slate-800 rounded-full mb-6">
              <Info size={64} className="text-slate-600" />
            </div>
            <p className="text-slate-400 text-xl font-black uppercase tracking-widest italic">Territoire Inconnu</p>
            <Link to="/quests" className="mt-6 flex items-center gap-2 bg-amber-500 text-slate-900 px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20">
              Retour au Journal <ArrowRight size={20} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestsPage;