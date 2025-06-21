import React from 'react';
import { Link } from 'react-router-dom';

const RapporteurSidebar: React.FC = () => {
  return (
    <aside className="admin-sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <i className="fas fa-lightbulb"></i>
          <h2>Challenge Entreprendre</h2>
        </div>
        <button className="sidebar-close">
          <i className="fas fa-times"></i>
        </button>
      </div>

      <div className="admin-profile">
        <div className="profile-avatar">
          <i className="fas fa-file-alt"></i>
        </div>
        <div className="profile-info">
          <h3>Mariam</h3>
          <span className="role">Rapporteur</span>
        </div>
      </div>

      <nav className="admin-nav">
        <ul>
          <li>
            <Link to="/rapports/dashboard">
              <i className="fas fa-tachometer-alt"></i> Tableau de Bord
            </Link>
          </li>
          <li>
            <Link to="/rapports/rapports">
              <i className="fas fa-file-signature"></i> Gérer Rapports
            </Link>
          </li>
          <li>
            <Link to="/rapports/classement">
              <i className="fas fa-trophy"></i> Classement
            </Link>
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <Link to="/index">
          <i className="fas fa-home"></i> Site Public
        </Link>
      </div>
    </aside>
  );
};

export default RapporteurSidebar;