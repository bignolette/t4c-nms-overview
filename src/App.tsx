import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import WikiPage from './pages/WikiPage';
import EquipablePage from './pages/EquipablePage';
import QuestsPage from './pages/QuestsPage';
import Bestiary from './components/Bestiary';
import RecipeBrowser from './components/RecipeBrowser';
import PlannerPage from './pages/PlannerPage';
import ZoneExplorer from './pages/ZoneExplorer';
import Legal from './pages/Legal';
import { bestiaryData } from './data/bestiary';
import { recipesData } from './data/recipes';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bestiary" element={<Bestiary monsters={bestiaryData} />} />
          <Route path="/equipable" element={<EquipablePage />} />
          <Route path="/recipes" element={<RecipeBrowser recipes={recipesData} />} />
          <Route path="/planner" element={<PlannerPage />} />
          <Route path="/wiki" element={<WikiPage />} />
          <Route path="/wiki/:slug" element={<WikiPage />} />
          <Route path="/quests" element={<QuestsPage />} />
          <Route path="/quests/:zone" element={<QuestsPage />} />
          <Route path="/explorer" element={<ZoneExplorer />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
