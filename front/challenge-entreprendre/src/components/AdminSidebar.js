import React from 'react';
import { Link } from 'react-router-dom';

function AdminSidebar() {
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
          <i className="fas fa-gavel"></i>
        </div>
        <div className="profile-info">
          <h3>Pierre Martin</h3>
          <span className="role">Président du Jury</span>
        </div>
      </div>

      <nav className="admin-nav">
        <ul>
          <li>
            <Link to="/">
              <i className="fas fa-tachometer-alt"></i> Tableau de Bord
            </Link>
          </li>
          <li>
            <Link to="/evaluations">
              <i className="fas fa-clipboard-check"></i> Mes Évaluations
            </Link>
          </li>
          <li>
            <Link to="/evaluations-consolidees">
              <i className="fas fa-table"></i> Évaluations Consolidées
            </Link>
          </li>
          <li>
            <Link to="/projets-a-evaluer">
              <i className="fas fa-project-diagram"></i> Projets à Évaluer
            </Link>
          </li>
          <li>
            <Link to="/mon-jury">
              <i className="fas fa-users"></i> Mon Jury
            </Link>
          </li>
          <li>
            <Link to="/classement">
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
}

export default AdminSidebar;