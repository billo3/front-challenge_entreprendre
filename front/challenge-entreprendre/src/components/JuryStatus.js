import React from 'react';
import { useNavigate } from 'react-router-dom';

function JuryStatus() {
    const navigate = useNavigate();

    const handleMarquerPresences = () => {
        navigate('/mon-jury'); // Redirection vers la page mon jury
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
                            <h4>Sophie Leclerc</h4>
                            <span className="member-role">Membre du jury</span>
                            <div className="member-progress">
                                <div className="mini-progress">
                                    <div className="mini-fill" style={{ width: '80%' }}></div>
                                    <span>80%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="member">
                        <div className="member-avatar">
                            <i className="fas fa-user-circle"></i>
                            <span className="status-dot active"></span>
                        </div>
                        <div className="member-info">
                            <h4>Robert Durand</h4>
                            <span className="member-role">Membre du jury</span>
                            <div className="member-progress">
                                <div className="mini-progress">
                                    <div className="mini-fill" style={{ width: '65%' }}></div>
                                    <span>65%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="member">
                        <div className="member-avatar">
                            <i className="fas fa-user-circle"></i>
                            <span className="status-dot active"></span>
                        </div>
                        <div className="member-info">
                            <h4>Nathalie Moreau</h4>
                            <span className="member-role">Membre du jury</span>
                            <div className="member-progress">
                                <div className="mini-progress">
                                    <div className="mini-fill" style={{ width: '45%' }}></div>
                                    <span>45%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="member">
                        <div className="member-avatar">
                            <i className="fas fa-user-circle"></i>
                            <span className="status-dot inactive"></span>
                        </div>
                        <div className="member-info">
                            <h4>Paul Lefevre</h4>
                            <span className="member-role">Membre du jury</span>
                            <div className="member-progress">
                                <div className="mini-progress">
                                    <div className="mini-fill" style={{ width: '0%' }}></div>
                                    <span>0%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="jury-actions">
                    <button className="btn btn-sm btn-secondary">
                        <i className="fas fa-envelope"></i> Rappel Collectif
                    </button>
                    <button className="btn btn-sm btn-primary" onClick={handleMarquerPresences}>
                        <i className="fas fa-user-check"> </i> Marquer Présences
                    </button>
                </div>
            </div>
        </div>
    );
}

export default JuryStatus;