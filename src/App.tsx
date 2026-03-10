import { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { DataProvider, useData } from './context/DataContext';
import { ThemeProvider } from './context/ThemeContext';

const Home = lazy(() => import('./pages/Home'));
const WikiPage = lazy(() => import('./pages/WikiPage'));
const EquipablePage = lazy(() => import('./pages/EquipablePage'));
const Bestiary = lazy(() => import('./components/Bestiary'));
const RecipeBrowser = lazy(() => import('./components/RecipeBrowser'));
const SpellList = lazy(() => import('./components/SpellList'));
const SkillList = lazy(() => import('./components/SkillList'));
const PlannerPage = lazy(() => import('./pages/PlannerPage'));
const MapViewer = lazy(() => import('./components/MapViewer'));
const Legal = lazy(() => import('./pages/Legal'));
const QuestsPage = lazy(() => import('./pages/QuestsPage'));

const LoadingSkeleton = () => (
  <div className="min-h-screen flex" style={{ background: 'var(--bg-primary)' }}>
    {/* Sidebar skeleton (hidden on mobile) */}
    <div className="hidden md:flex flex-col w-64 border-r border-slate-800/50 p-6 gap-6">
      <div className="w-10 h-10 rounded-xl skeleton-shimmer" />
      <div className="flex flex-col gap-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-8 rounded-lg skeleton-shimmer" style={{ width: `${70 + (i % 3) * 10}%`, animationDelay: `${i * 150}ms` }} />
        ))}
      </div>
    </div>

    {/* Main content skeleton */}
    <div className="flex-1 flex flex-col p-6 md:p-10 gap-8 overflow-hidden">
      {/* Header bar */}
      <div className="flex justify-end">
        <div className="h-8 w-48 rounded-full skeleton-shimmer" />
      </div>

      {/* Hero */}
      <div className="h-48 rounded-[40px] skeleton-shimmer" />

      {/* Cards grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-32 rounded-2xl skeleton-shimmer" style={{ animationDelay: `${i * 200}ms` }} />
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

const AppContent: React.FC = () => {
  const { bestiaryData, recipesData, spellsData, skillsData, loading } = useData();

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <Layout>
      <Suspense fallback={<LoadingSkeleton />}>
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
      </Suspense>
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <DataProvider>
        <Router>
          <AppContent />
        </Router>
      </DataProvider>
    </ThemeProvider>
  );
};

export default App;
