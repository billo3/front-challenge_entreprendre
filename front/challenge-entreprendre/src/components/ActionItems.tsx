import React from 'react';

const ActionItems: React.FC = () => {
    return (
        <div className="widget action-items">
            <div className="widget-header">
                <h3>Actions Requises</h3>
            </div>
            <div className="widget-content">
                <ul className="action-list">
                    <li className="action-item high-priority">
                        <div className="action-icon">
                            <i className="fas fa-exclamation-triangle"></i>
                        </div>
                        <div className="action-details">
                            <h4>Finaliser vos évaluations</h4>
                            <p>4 projets restants à évaluer</p>
                            <span className="action-deadline">Date limite: 12 juin 2025</span>
                        </div>
                        <div className="action-status">
                            <span className="priority high">Haute</span>
                        </div>
                    </li>

                    <li className="action-item medium-priority">
                        <div className="action-icon">
                            <i className="fas fa-user-check"></i>
                        </div>
                        <div className="action-details">
                            <h4>Valider présence de Paul Lefevre</h4>
                            <p>Membre inactif depuis 5 jours</p>
                            <span className="action-deadline">Dès que possible</span>
                        </div>
                        <div className="action-status">
                            <span className="priority medium">Moyenne</span>
                        </div>
                    </li>

                    <li className="action-item low-priority">
                        <div className="action-icon">
                            <i className="fas fa-clipboard-list"></i>
                        </div>
                        <div className="action-details">
                            <h4>Préparer synthèse d'évaluation</h4>
                            <p>Pour présentation au coordinateur</p>
                            <span className="action-deadline">Date limite: 20 juin 2025</span>
                        </div>
                        <div className="action-status">
                            <span className="priority low">Basse</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ActionItems;