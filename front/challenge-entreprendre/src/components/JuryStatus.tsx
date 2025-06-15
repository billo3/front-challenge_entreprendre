import React from 'react';
import { useNavigate } from 'react-router-dom';

const JuryStatus: React.FC = () => {
    const navigate = useNavigate();

    const handleMarquerPresences = () => {
        navigate('/mon-jury');
    };

    return (
        <div className="widget jury-status">
            <div className="widget-header">
                <h3>Statut du Jury</h3>
                <a href="mon-jury" className="widget-action">
                    Gérer <i className="fas fa-arrow-right"></i>
                </a>
            </div>
            <div className="widget-content">
                <div className="jury-members">
                    <div className="member">
                        <div className="member-avatar">
                            <i className="fas fa-user-circle"></i>
                            <span className="status-dot active"></span>
                        </div>
                        <div className="member-info">
                            <h4>Baye KA</h4>
                            <span className="member-role">Membre du jury</span>
                        </div>
                    </div>

                    <div className="member">
                        <div className="member-avatar">
                            <i className="fas fa-user-circle"></i>
                            <span className="status-dot active"></span>
                        </div>
                        <div className="member-info">
                            <h4>Sokhna Sall</h4>
                            <span className="member-role">Membre du jury</span>

                        </div>
                    </div>

                    <div className="member">
                        <div className="member-avatar">
                            <i className="fas fa-user-circle"></i>
                            <span className="status-dot active"></span>
                        </div>
                        <div className="member-info">
                            <h4>Cheikh Thiaw</h4>
                            <span className="member-role">Membre du jury</span>

                        </div>
                    </div>

                    <div className="member">
                        <div className="member-avatar">
                            <i className="fas fa-user-circle"></i>
                            <span className="status-dot inactive"></span>
                        </div>
                        <div className="member-info">
                            <h4>Ibrahima Fall</h4>
                            <span className="member-role">Membre du jury</span>

                        </div>
                    </div>
                </div>

                <div className="jury-actions">
                    <button className="btn btn-sm btn-secondary">
                        <i className="fas fa-envelope"></i> Rappel Collectif
                    </button>
                    <button className="btn btn-sm btn-primary" onClick={handleMarquerPresences}>
                        <i className="fas fa-user-check"></i> Marquer Présences
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JuryStatus;
