
import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { quests, type Quest } from '../data/quests';
import QuestCard from '../components/QuestCard';
import { Search, MapPin, Info } from 'lucide-react';

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
    <section className="space-y-6 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500">
            <MapPin size={24} />
          </div>
          <h2 className="text-2xl font-bold text-slate-100">{zone}</h2>
          <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 text-xs font-medium">
            {quests.length} quêtes
          </span>
        </div>

        <div className="relative group">
          <input
            type="text"
            placeholder={`Rechercher dans ${zone}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50 w-full md:w-64 text-sm transition-all focus:bg-slate-900"
          />
          <Search className="absolute left-3 top-2.5 text-slate-500 group-focus-within:text-amber-500 transition-colors" size={16} />
        </div>
      </div>

      <div className="grid gap-4">
        {filteredQuests.length > 0 ? (
          filteredQuests.map((quest, index) => (
            <QuestCard key={`${quest.slug}-${index}`} quest={quest} />
          ))
        ) : (
          <div className="text-center py-10 bg-slate-900/30 rounded-xl border border-dashed border-slate-800 text-slate-500 italic">
            Aucune quête ne correspond à votre recherche dans cette zone.
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

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Header */}
      <div className="relative">
        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 to-transparent rounded-full" />
        <h1 className="text-4xl font-black tracking-tight bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent uppercase">
          {decodedZone ? `Quêtes : ${decodedZone}` : "Quêtes d'Athéa"}
        </h1>
        <p className="text-slate-400 mt-2 max-w-2xl leading-relaxed">
          {decodedZone 
            ? `Découvrez toutes les aventures disponibles dans la zone ${decodedZone}.`
            : "Le monde regorge de mystères. Parcourez chaque zone pour découvrir les aventures qui vous attendent."}
        </p>
      </div>

      {/* Zone Sections */}
      <div className="space-y-16">
        {groupedQuests.length > 0 ? (
          groupedQuests.map(([zoneName, zoneQuests]) => (
            <ZoneSection key={zoneName} zone={zoneName} quests={zoneQuests} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-slate-900/20 rounded-3xl border border-slate-800/50 border-dashed">
            <Info size={48} className="text-slate-600 mb-4" />
            <p className="text-slate-500 text-lg font-medium">Zone non trouvée ou aucune quête disponible.</p>
            <Link to="/quests" className="mt-4 text-amber-500 hover:text-amber-400 font-bold underline underline-offset-4">
              Voir toutes les quêtes
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestsPage;
