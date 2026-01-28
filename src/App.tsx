import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import WikiPage from './pages/WikiPage';
import EquipablePage from './pages/EquipablePage';
import Bestiary from './components/Bestiary';
import RecipeBrowser from './components/RecipeBrowser';
import SpellList from './components/SpellList';
import SkillList from './components/SkillList';
import PlannerPage from './pages/PlannerPage';
import Legal from './pages/Legal';
import { DataProvider, useData } from './context/DataContext';

const AppContent: React.FC = () => {
  const { bestiaryData, recipesData, spellsData, skillsData, loading } = useData();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0c] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
          <p className="text-slate-400 font-medium animate-pulse">Chargement de la base de données...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bestiary" element={<Bestiary monsters={bestiaryData} />} />
          <Route path="/equipable" element={<EquipablePage />} />
          <Route path="/recipes" element={<RecipeBrowser recipes={recipesData} />} />
          <Route path="/spells" element={<SpellList spells={spellsData} />} />
          <Route path="/skills" element={<SkillList skills={skillsData} />} />
          <Route path="/planner" element={<PlannerPage />} />
          <Route path="/wiki" element={<WikiPage />} />
          <Route path="/wiki/:slug" element={<WikiPage />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </Layout>
    </Router>
  );
};

const App: React.FC = () => {
  return (
    <DataProvider>
      <AppContent />
    </DataProvider>
  );
};

export default App;
