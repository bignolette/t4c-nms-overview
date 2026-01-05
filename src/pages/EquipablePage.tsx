import EquipableBuilder from '../components/EquipableBuilder';

const EquipablePage = () => {
  return (
    <div className="space-y-6">
      <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800 backdrop-blur-sm">
        <h1 className="text-3xl font-bold text-amber-500 mb-2">Objets Équipables</h1>
        <p className="text-slate-400">
          Consultez les objets que vous pouvez porter en fonction de vos statistiques.
        </p>
      </div>
      
      <EquipableBuilder />
    </div>
  );
};

export default EquipablePage;