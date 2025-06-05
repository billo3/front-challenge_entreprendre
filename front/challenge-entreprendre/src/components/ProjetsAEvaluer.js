import React from 'react';

function ProjetsAEvaluer() {
    const projects = [
        {
            id: 1,
            name: 'EcoDrive',
            description: 'Une solution de covoiturage écologique pour réduire les émissions.',
            deadline: '12 juin 2025',
            progress: 50,
        },
        {
            id: 2,
            name: 'MediConnect',
            description: 'Plateforme de télémédecine pour connecter patients et médecins.',
            deadline: '15 juin 2025',
            progress: 30,
        },
        {
            id: 3,
            name: 'SmartFarming',
            description: 'Système IoT pour optimiser l’agriculture durable.',
            deadline: '10 juin 2025',
            progress: 70,
        },
    ];

    return (
        <div className="admin-content">
            <div className="page-title">
                <h1>Projets à Évaluer</h1>
                <p>Consultez et évaluez les projets en attente</p>
            </div>

            <div className="dashboard-stats">
                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-tasks"></i>
                    </div>
                    <div className="stat-info">
                        <h3>Projets en Attente</h3>
                        <p className="stat-number">{projects.length}</p>
                    </div>
                </div>
            </div>

            <div className="dashboard-widgets">
                <div className="widget">
                    <div className="widget-header">
                        <h3>Liste des Projets</h3>
                    </div>
                    <div className="widget-content">
                        <div className="project-list">
                            {projects.map((project) => (
                                <div key={project.id} className="project-card">
                                    <div className="project-info">
                                        <h4>{project.name}</h4>
                                        <p>{project.description}</p>
                                        <div className="project-meta">
                                            <span>
                                                <i className="fas fa-calendar-alt"></i> Date limite: {project.deadline}
                                            </span>
                                            <div className="mini-progress">
                                                <span className="chart-label">Progression</span>
                                                <div className="mini-fill" style={{ width: `${project.progress}%` }}></div>
                                                <span>{project.progress}%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-actions">
                                        <button className="btn btn-primary">
                                            <i className="fas fa-clipboard-check"></i> Évaluer
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

export default ProjetsAEvaluer;