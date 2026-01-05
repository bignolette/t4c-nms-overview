import { ShieldCheck, Info } from 'lucide-react';

const Legal = () => {
  return (
    <div className="animate-fade-in space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full bg-slate-800 text-amber-500 text-xs font-bold uppercase tracking-wider">
            Informations
          </span>
        </div>
        <h1 className="text-4xl font-bold text-slate-100 mb-3">Mentions Légales</h1>
        <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
          Conformément aux dispositions de l'article 6 de la Loi n° 2004-575 du 21 juin 2004 (LCEN).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Éditeur */}
        <section className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-2 text-amber-500">
            <Info size={20} />
            <h2 className="text-xl font-bold text-slate-100">Édition du site</h2>
          </div>
          <div className="text-sm text-slate-400 space-y-2">
            <p>Le présent site est édité par :</p>
            <p className="font-bold text-slate-200 uppercase tracking-wide">Bignole</p>
            <p>Contact : [Discord : mourad7130]</p>
            <p className="italic mt-4">Ce site est un projet personnel réalisé bénévolement par un membre de la communauté.</p>
          </div>
        </section>

        {/* Hébergeur */}
        <section className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-2 text-amber-500">
            <ShieldCheck size={20} />
            <h2 className="text-xl font-bold text-slate-100">Hébergement</h2>
          </div>
          <div className="text-sm text-slate-400 space-y-2">
            <p>Le site est hébergé par :</p>
            <p className="font-bold text-slate-200">GitHub Inc.</p>
            <p>88 Colin P Kelly Jr St</p>
            <p>San Francisco, CA 94107, USA</p>
            <p>Téléphone : +1 (415) 448-6673</p>
          </div>
        </section>

        {/* Propriété Intellectuelle */}
        <section className="md:col-span-2 bg-slate-900/50 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-slate-100">Propriété Intellectuelle et Crédits</h2>
          <div className="text-sm text-slate-400 space-y-4 leading-relaxed text-justify">
            <p>
              <strong>The 4th Coming (T4C)</strong> est une marque déposée et une propriété intellectuelle de 
              <strong> Dialsoft Inc</strong>. Tous les visuels, noms d'objets, statistiques de sorts et de monstres 
              issus du jeu original ou de ses extensions sont la propriété exclusive de leurs auteurs respectifs.
            </p>
            <p>
              Ce site est une "Fan-App" non officielle et n'est en aucun cas affilié, approuvé ou soutenu par 
              Dialsoft ou les exploitants officiels des serveurs T4C.
            </p>
            <p>
              Les données proviennent du <strong>Wiki T4C NMS</strong> et du site <strong>NMS Révolution</strong>. 
              Le code source de l'application est mis à disposition à des fins éducatives et communautaires.
            </p>
          </div>
        </section>

        {/* Cookies / Données */}
        <section className="md:col-span-2 bg-slate-900/50 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-slate-100">Données Personnelles</h2>
          <div className="text-sm text-slate-400 leading-relaxed">
            <p>
              Ce site ne collecte aucune donnée personnelle et n'utilise aucun cookie de traçage ou de publicité. 
              Vos préférences (comme vos favoris) sont enregistrées localement dans votre navigateur (localStorage) 
              et ne sont jamais transmises à un serveur tiers.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Legal;
