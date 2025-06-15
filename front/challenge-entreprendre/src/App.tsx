import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar';
import AdminTopbar from './components/AdminTopbar';
import PresidentJury from './components/MembreJury';
import Evaluations from './pages/Evaluations';
import ProjetsAEvaluer from './pages/ProjetsAEvaluer';


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
              
              <Route path="/projets-a-evaluer" element={<ProjetsAEvaluer />} />
              
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