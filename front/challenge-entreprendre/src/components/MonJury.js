import React from 'react';

function MonJury() {
    const juryMembers = [
        { id: 1, name: 'Sophie Leclerc', role: 'Membre du jury', status: 'active', progress: 80 },
        { id: 2, name: 'Robert Durand', role: 'Membre du jury', status: 'active', progress: 65 },
        { id: 3, name: 'Nathalie Moreau', role: 'Membre du jury', status: 'active', progress: 45 },
        { id: 4, name: 'Paul Lefevre', role: 'Membre du jury', status: 'inactive', progress: 0 },
    ];

    return (
        <div className="admin-content">
            <div className="page-title">
                <h1>Mon Jury</h1>
                <p>Gérez les membres de votre jury et suivez leur progression</p>
            </div>

            <div className="dashboard-stats">
                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-users"></i>
                    </div>
                    <div className="stat-info">
                        <h3>Membres Actifs</h3>
                        <p className="stat-number">
                            {juryMembers.filter((member) => member.status === 'active').length}/{juryMembers.length}
                        </p>
                    </div>
                </div>
            </div>

            <div className="dashboard-widgets">
                <div className="widget jury-status">
                    <div className="widget-header">
                        <h3>Membres du Jury</h3>
                        <button className="btn btn-primary">
                            <i className="fas fa-plus"></i> Ajouter Membre
                        </button>
                    </div>
                    <div className="widget-content">
                        <div className="jury-members">
                            {juryMembers.map((member) => (
                                <div key={member.id} className="member">
                                    <div className="member-avatar">
                                        <i className="fas fa-user-circle"></i>
                                        <span className={`status-dot ${member.status}`}></span>
                                    </div>
                                    <div className="member-info">
                                        <h4>{member.name}</h4>
                                        <span className="member-role">{member.role}</span>
                                        <div className="member-progress">
                                            <div className="mini-progress">
                                                <div className="mini-fill" style={{ width: `${member.progress}%` }}></div>
                                                <span>{member.progress}%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="jury-actions">
                                        <button className="btn btn-sm btn-secondary">
                                            <i className="fas fa-envelope"></i> Rappel
                                        </button>
                                        <button className="btn btn-sm btn-primary">
                                            <i className="fas fa-user-check"></i> Marquer Présence
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MonJury;