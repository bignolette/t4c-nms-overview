import { useParams } from 'react-router-dom';
import { wikiData } from '../data/wiki-data';
import RecipeBrowser from '../components/RecipeBrowser';
import Bestiary from '../components/Bestiary';
import { AlertCircle } from 'lucide-react';

const WikiPage = () => {
  const { slug } = useParams();
  const data = wikiData.find(p => p.id === slug);

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <AlertCircle size={48} className="text-amber-500 mb-4" />
        <h2 className="text-2xl font-bold text-slate-100">Page introuvable</h2>
        <p className="text-slate-400 mt-2">Le contenu que vous cherchez n'existe pas ou n'a pas encore été migré.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-20">
      {/* Page Header */}
      <div className="border-b border-slate-800 pb-8 relative">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.2em]">
            {data.category}
          </span>
        </div>
        <h1 className="text-5xl font-black text-slate-100 mb-4 tracking-tighter italic uppercase drop-shadow-2xl">
          {data.title}
        </h1>
        <p className="text-lg text-slate-400 max-w-3xl leading-relaxed font-medium">
          {data.description}
        </p>
        <div className="absolute bottom-0 left-0 w-32 h-1 bg-amber-500 rounded-full"></div>
      </div>

      {/* Professions & Items Browser */}
      {(slug === 'metiers' || slug === 'items') && data.recipes && (
        <RecipeBrowser key={slug} recipes={data.recipes} isItemsPage={slug === 'items'} />
      )}

      {/* Bestiary Browser */}
      {data.category === 'bestiary' && data.monsters && (
        <Bestiary monsters={data.monsters} />
      )}

      {/* Empty State Placeholder */}
      {(!data.recipes || data.recipes.length === 0) && (!data.monsters || data.monsters.length === 0) && (
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 text-center">
          <p className="text-slate-500 italic">Contenu en cours de rédaction pour cette section...</p>
        </div>
      )}
    </div>
  );
};

export default WikiPage;