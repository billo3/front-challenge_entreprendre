import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RapporteurSidebar from './components/RapporteurSidebar';
import RapporteurTopbar from './components/RapporteurTopbar';
import RapporteurDashboard from './components/RapporteurDashboard';
import Classement from './pages/Classement';
import Rapports from './components/RapportItems';
import StatCard from './components/StatCard';
import RapportItems from './components/Rapports';
import RapporteurLayout from './components/RapporteurLayout';

// Placeholders pour les composants manquants
const Evaluations: React.FC = () => (
  <div className="admin-content full-page">
    <h1>Évaluations</h1>
    <p>À venir...</p>
  </div>
);

const MonJury: React.FC = () => (
  <div className="admin-content full-page">
    <h1>Mon Jury</h1>
    <p>À venir...</p>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="admin-container">
        <Routes>
          <Route path="/rapports" element={<RapporteurLayout />}>
            <Route index element={<RapporteurDashboard />} />
            <Route path="dashboard" element={<RapporteurDashboard />} />
            <Route path="rapports" element={<RapportItems />} />
            <Route path="classement" element={<Classement />} />
          </Route>
          <Route
            path="/evaluations"
            element={
              <>
                <RapporteurSidebar />
                <main className="admin-main">
                  <RapporteurTopbar />
                  <div className="admin-content">
                    <Evaluations />
                  </div>
                </main>
              </>
            }
          />
          <Route
            path="/projets-a-evaluer"
            element={
              <>
                <RapporteurSidebar />
                <main className="admin-main">
                  <RapporteurTopbar />
                  <div className="admin-content">
                    <RapportItems />
                  </div>
                </main>
              </>
            }
          />
          <Route
            path="/mon-jury"
            element={
              <>
                <RapporteurSidebar />
                <main className="admin-main">
                  <RapporteurTopbar />
                  <div className="admin-content">
                    <MonJury />
                  </div>
                </main>
              </>
            }
          />
          <Route
            path="/classement"
            element={
              <>
                <RapporteurSidebar />
                <main className="admin-main">
                  <RapporteurTopbar />
                  <div className="admin-content">
                    <Classement />
                  </div>
                </main>
              </>
            }
          />
          <Route
            path="/mon-profil"
            element={
              <>
                <RapporteurSidebar />
                <main className="admin-main">
                  <RapporteurTopbar />
                  <div className="admin-content">
                    <div><h1>Mon Profil</h1><p>À venir...</p></div>
                  </div>
                </main>
              </>
            }
          />
          <Route
            path="/index"
            element={
              <>
                <RapporteurSidebar />
                <main className="admin-main">
                  <RapporteurTopbar />
                  <div className="admin-content">
                    <div><h1>Site Public</h1><p>À venir...</p></div>
                  </div>
                </main>
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <div className="admin-main">
                  <div className="admin-content">
                    <div><h1>Connexion</h1><p>À venir...</p></div>
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="*"
            element={
              <div className="admin-content full-page">
                <h1>Page non trouvée</h1>
                <p>Vérifiez l'URL ou retournez à <a href="/rapports/dashboard">Tableau de Bord</a></p>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;