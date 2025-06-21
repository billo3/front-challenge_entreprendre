import React from 'react';
import { Link } from 'react-router-dom';
import StatCard from './StatCard';
import RapportItems from './RapportItems';

const RapporteurDashboard: React.FC = () => {
  return (
    <div className="admin-content full-page">
      <div className="page-title">
        <h1>Tableau de Bord Rapporteur</h1>
        <p>Gérez les rapports et consultez les données consolidées</p>
      </div>

      <div className="dashboard-stats">
        <StatCard icon="fas fa-file-alt" title="Rapports Générés" value="5" />
        <StatCard icon="fas fa-check-circle" title="Évaluations Terminées" value="15" />
        <StatCard icon="fas fa-users" title="Membres Actifs" value="4" />
        <StatCard icon="fas fa-chart-pie" title="Taux de Complétion" value="85%" />
      </div>

      <div className="dashboard-widgets">
        <RapportItems />
      </div>

      <div className="dashboard-actions">
        <Link to="/rapports/rapports" className="btn btn-primary">
          <i className="fas fa-file-signature"></i> Gérer Rapports
        </Link>
        <Link to="/rapports/classement" className="btn btn-primary">
          <i className="fas fa-trophy"></i> Voir classement
        </Link>
      </div>
    </div>
  );
};

export default RapporteurDashboard;