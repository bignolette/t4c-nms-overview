import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import WikiPage from './pages/WikiPage';
import EquipablePage from './pages/EquipablePage';
import PlannerPage from './pages/PlannerPage';
import ZoneExplorer from './pages/ZoneExplorer';
import Legal from './pages/Legal';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wiki/:id" element={<WikiPage />} />
          <Route path="/equipable" element={<EquipablePage />} />
          <Route path="/planner" element={<PlannerPage />} />
          <Route path="/explorer" element={<ZoneExplorer />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;