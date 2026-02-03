import { Link } from 'react-router-dom';
import { ExternalLink, Calculator, BookOpen, User, Map } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-12 pb-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-[40px] bg-slate-900/40 border border-slate-800/50 p-12 md:p-24 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-blue-500/5 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
        
        <div className="relative z-20 text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter italic uppercase">
            T4C <span className="text-amber-500">NMS</span>
          </h1>
          <p className="text-slate-300 text-xl md:text-2xl font-medium leading-relaxed opacity-80">
              Votre compagnon stratégique ultime pour Althéa.
          </p>
        </div>
      </div>

      {/* Main Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        <QuickCard 
          title="Encyclopédie" 
          description="Explorez la base de données complète des objets, monstres et métiers d'Althéa."
          icon={BookOpen}
          to="/wiki"
          color="bg-blue-500/10 text-blue-400 border-blue-500/20"
          accent="group-hover:border-blue-500/50"
        />
        <QuickCard 
          title="Cartographie" 
          description="Localisez précisément chaque ressource, PNJ et créature sur nos cartes HD."
          icon={Map}
          to="/maps"
          color="bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
          accent="group-hover:border-indigo-500/50"
        />
        <QuickCard 
          title="Simulateur" 
          description="Planifiez l'évolution de votre personnage et optimisez vos points de caractéristiques."
          icon={Calculator}
          to="/planner"
          color="bg-amber-500/10 text-amber-400 border-amber-500/20"
          accent="group-hover:border-amber-500/50"
        />
        <QuickCard 
          title="Personnage" 
          description="Simulateur d'équipement avec optimisation BiS (Best-in-Slot) intelligente."
          icon={User}
          to="/equipable"
          color="bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
          accent="group-hover:border-emerald-500/50"
        />
      </div>
    </div>
  );
};

const QuickCard = ({ title, description, icon: Icon, to, color, accent }: any) => (
  <Link to={to} className={`group relative p-10 rounded-[40px] bg-slate-900/40 border border-slate-800 transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-xl ${accent}`}>
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border transition-transform duration-500 group-hover:scale-110 ${color}`}>
      <Icon size={32} />
    </div>
    <h3 className="text-3xl font-black text-slate-100 mb-4 tracking-tight uppercase italic group-hover:text-amber-500 transition-colors">{title}</h3>
    <p className="text-slate-400 leading-relaxed font-medium mb-8 group-hover:text-slate-300 transition-colors">{description}</p>
    <div className="flex items-center text-xs font-black text-slate-600 group-hover:text-amber-500 uppercase tracking-[0.2em] transition-colors">
      Explorer l'outil <ExternalLink size={14} className="ml-2" />
    </div>
    <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-white/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
  </Link>
);

export default Home;