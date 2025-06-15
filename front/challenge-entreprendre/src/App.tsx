import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar';
import AdminTopbar from './components/AdminTopbar';
import PresidentJury from './components/PresidentJury';
import Evaluations from './pages/Evaluations';
import ProjetsAEvaluer from './pages/ProjetsAEvaluer';
import MonJury from './components/MonJury';
import Classement from './pages/Classement';
import ConsolidatedEvaluations from './pages/ConsolidatedEvaluations';

const App: React.FC = () => {
  return (
    <Router>
      <div className="admin-container">
        <AdminSidebar />
        <main className="admin-main">
          <AdminTopbar />
          <div className="admin-content">
            <Routes>
              <Route path="/" element={<PresidentJury />} />
              <Route path="/evaluations" element={<Evaluations />} />
              <Route path="/evaluations-consolidees" element={<ConsolidatedEvaluations />} />
              <Route path="/projets-a-evaluer" element={<ProjetsAEvaluer />} />
              <Route path="/mon-jury" element={<MonJury />} />
              <Route path="/classement" element={<Classement />} />
              <Route path="/mon-profil" element={<div><h1>Mon Profil</h1><p>À venir...</p></div>} />
              <Route path="/index" element={<div><h1>Site Public</h1><p>À venir...</p></div>} />
              <Route path="/login" element={<div><h1>Connexion</h1><p>À venir...</p></div>} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;