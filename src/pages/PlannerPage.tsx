import StatPlanner from '../components/StatPlanner';

const PlannerPage = () => {
  return (
    <div className="space-y-6">
      <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800 backdrop-blur-sm">
        <h1 className="text-3xl font-bold text-amber-500 mb-2">Simulateur de Statistiques</h1>
        <p className="text-slate-400">
          Planifiez l'évolution de votre personnage et optimisez vos points de caractéristiques.
        </p>
      </div>
      
      <StatPlanner />
    </div>
  );
};

export default PlannerPage;
