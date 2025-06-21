import React from 'react';

const RapportItems: React.FC = () => {
  return (
    <div className="widget action-items">
      <div className="widget-header">
        <h3>Tâches de Rapport</h3>
      </div>
      <div className="widget-content">
        <ul className="action-list">
          <li className="action-item high-priority">
            <div className="action-icon">
              <i className="fas fa-file-pdf"></i>
            </div>
            <div className="action-details">
              <h4>Générer rapport final</h4>
              <p>Résumé des évaluations consolidées</p>
              <span className="action-deadline">Date limite: 25 juin 2025</span>
            </div>
            <div className="action-status">
              <span className="priority high">Haute</span>
            </div>
          </li>
          <li className="action-item medium-priority">
            <div className="action-icon">
              <i className="fas fa-chart-bar"></i>
            </div>
            <div className="action-details">
              <h4>Analyser progression</h4>
              <p>Vérifier les évaluations en cours</p>
              <span className="action-deadline">Dès que possible</span>
            </div>
            <div className="action-status">
              <span className="priority medium">Moyenne</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RapportItems;