import { Link } from 'react-router-dom';
import { Hammer, ExternalLink, Skull, Shield, Calculator, Compass } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900/40 border border-slate-700/50 p-8 md:p-16 shadow-2xl">
        <div className="relative z-20 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-600 mb-6 tracking-tighter">
            T4C NMS Overview
          </h1>
          <p className="text-slate-300 text-xl font-medium leading-relaxed max-w-2xl">
              Votre compagnon stratégique pour Althéa : Artisanat, Bestiaire et Optimisation de Build.
          </p>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <QuickCard 
          title="Explorateur" 
          description="Découvrez tout ce qu'une zone a à offrir : PNJs, Ressources et Bestiaire local."
          icon={Compass}
          to="/explorer"
          color="text-blue-400"
        />
        <QuickCard 
          title="Equipable" 
          description="Simulateur d'équipement avec optimisation Best-in-Slot (BiS) par statistique."
          icon={Shield}
          to="/equipable"
          color="text-emerald-500"
        />
        <QuickCard 
          title="Simulateur" 
          description="Planifiez l'évolution de votre personnage et optimisez vos points de caractéristiques."
          icon={Calculator}
          to="/planner"
          color="text-amber-500"
        />
        <QuickCard 
          title="Artisanat" 
          description="Encyclopédie des recettes avec Arbre de dépendance et Feuille de route de Farm."
          icon={Hammer}
          to="/wiki/metiers"
          color="text-amber-500"
        />
        <QuickCard 
          title="Bestiaire" 
          description="Liste exhaustive des créatures par zone avec leurs butins."
          icon={Skull}
          to="/wiki/bestiary"
          color="text-red-500"
        />
        <QuickCard 
          title="Objets" 
          description="Catalogue complet des équipements, armes et matériaux."
          icon={ExternalLink}
          to="/wiki/items"
          color="text-blue-500"
        />
      </div>
    </div>
  );
};

const QuickCard = ({ title, description, icon: Icon, to, color }: any) => (
  <Link to={to} className="group bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-amber-500/30 transition-all duration-300 hover:bg-slate-800/50">
    <div className={`mb-4 ${color}`}>
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-amber-500 transition-colors">{title}</h3>
    <p className="text-slate-400 text-sm">{description}</p>
    <div className="mt-4 flex items-center text-xs font-medium text-slate-500 group-hover:text-amber-500/80 uppercase tracking-wider">
      Accéder <ExternalLink size={12} className="ml-1" />
    </div>
  </Link>
);

export default Home;