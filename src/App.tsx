import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import WikiPage from './pages/WikiPage';
import EquipablePage from './pages/EquipablePage';
import Legal from './pages/Legal';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wiki/:id" element={<WikiPage />} />
          <Route path="/equipable" element={<EquipablePage />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;