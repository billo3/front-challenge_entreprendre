import React from 'react';

function Classement() {
    const projects = [
        { rank: 1, name: 'EcoDrive', juryScore: 8.5, adjustedScore: 8.8, qualified: true },
        { rank: 2, name: 'MediConnect', juryScore: 8.2, adjustedScore: 8.5, qualified: true },
        { rank: 3, name: 'SmartFarming', juryScore: 7.9, adjustedScore: 8.0, qualified: true },
        { rank: 4, name: 'UrbanGreen', juryScore: 7.6, adjustedScore: 7.6, qualified: false },
    ];

    return (
        <div className="admin-content">
            <div className="page-title">
                <h1>Classement</h1>
                <p>Consultez le classement final des projets</p>
            </div>

            <div className="dashboard-stats">
                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-trophy"></i>
                    </div>
                    <div className="stat-info">
                        <h3>Projets Qualifiés</h3>
                        <p className="stat-number">{projects.filter((p) => p.qualified).length}</p>
                    </div>
                </div>
            </div>

            <div className="dashboard-widgets">
                <div className="widget project-scoring">
                    <div className="widget-header">
                        <h3>Classement des Projets</h3>
                        <div className="qualification-setting">
                            <label>Filtrer: </label>
                            <select>
                                <option value="all">Tous les projets</option>
                                <option value="qualified">Projets qualifiés</option>
                            </select>
                        </div>
                    </div>
                    <div className="widget-content">
                        <div className="scoring-legend">
                            <div className="legend-item">
                                <span className="legend-color jury-score"></span>
                                <span>Score Jury</span>
                            </div>
                            <div className="legend-item">
                                <span className="legend-color adjusted-score"></span>
                                <span>Score Ajusté</span>
                            </div>
                            <div className="legend-item">
                                <span className="legend-color qualify"></span>
                                <span>Qualifié</span>
                            </div>
                        </div>

                        <div className="project-scores">
                            {projects.map((project) => (
                                <div key={project.rank} className={`project-score-item ${project.qualified ? 'qualify' : ''}`}>
                                    <div className="project-rank">{project.rank}</div>
                                    <div className="project-info">
                                        <h4>{project.name}</h4>
                                        <div className="project-score-bars">
                                            <div className="score-bar">
                                                <div className="score-fill jury-score" style={{ width: `${project.juryScore * 10}%` }}></div>
                                                <span>{project.juryScore}</span>
                                            </div>
                                            <div className="score-bar">
                                                <div className="score-fill adjusted-score" style={{ width: `${project.adjustedScore * 10}%` }}></div>
                                                <span>{project.adjustedScore}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-actions">
                                        <button className="btn btn-sm btn-outline">
                                            <i className="fas fa-eye"></i> Voir
                                        </button>
                                        <button className="btn btn-sm btn-primary">
                                            <i className="fas fa-edit"></i> Ajuster
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="qualification-actions">
                            <button className="btn btn-primary">Exporter Classement</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Classement;