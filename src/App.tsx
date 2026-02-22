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
import MapViewer from './components/MapViewer';
import Legal from './pages/Legal';
import QuestsPage from './pages/QuestsPage';
import { DataProvider, useData } from './context/DataContext';

const AppContent: React.FC = () => {
  const { bestiaryData, recipesData, spellsData, skillsData, loading } = useData();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0c] flex">
        {/* Sidebar skeleton (hidden on mobile) */}
        <div className="hidden md:flex flex-col w-64 border-r border-slate-800/50 p-6 gap-6">
          <div className="w-10 h-10 rounded-xl bg-slate-800 animate-pulse" />
          <div className="flex flex-col gap-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-8 rounded-lg bg-slate-800 animate-pulse" style={{ width: `${70 + (i % 3) * 10}%` }} />
            ))}
          </div>
        </div>

        {/* Main content skeleton */}
        <div className="flex-1 flex flex-col p-6 md:p-10 gap-8 overflow-hidden">
          {/* Header bar */}
          <div className="flex justify-end">
            <div className="h-8 w-48 rounded-full bg-slate-800 animate-pulse" />
          </div>

          {/* Hero */}
          <div className="h-48 rounded-[40px] bg-slate-800 animate-pulse" />

          {/* Cards grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 rounded-2xl bg-slate-800 animate-pulse" />
            ))}
          </div>

          {/* Loading indicator */}
          <div className="flex flex-col items-center gap-3 mt-auto pb-10">
            <div className="w-8 h-8 border-3 border-amber-500/20 border-t-amber-500 rounded-full animate-spin" />
            <p className="text-slate-500 text-sm font-fantasy animate-pulse">Chargement...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bestiary" element={<Bestiary monsters={bestiaryData} />} />
        <Route path="/equipable" element={<EquipablePage />} />
        <Route path="/recipes" element={<RecipeBrowser recipes={recipesData} />} />
        <Route path="/spells" element={<SpellList spells={spellsData} />} />
        <Route path="/skills" element={<SkillList skills={skillsData} />} />
        <Route path="/planner" element={<PlannerPage />} />
        <Route path="/maps" element={<MapViewer />} />
        <Route path="/wiki" element={<WikiPage />} />
        <Route path="/wiki/:slug" element={<WikiPage />} />
        <Route path="/quests" element={<QuestsPage />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <DataProvider>
      <Router>
        <AppContent />
      </Router>
    </DataProvider>
  );
};

export default App;
