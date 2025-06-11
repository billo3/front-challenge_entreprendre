import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Project {
    id: number;
    name: string;
    juryScore: number;
    adjustedScore: number;
    qualified: boolean;
    description?: string;
    details?: string;
}

const ProjectScoring: React.FC = () => {
    const navigate = useNavigate();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects: Project[] = [
        {
            id: 1,
            name: 'EcoDrive',
            juryScore: 8.5,
            adjustedScore: 8.8,
            qualified: true,
            description: 'Application pour promouvoir la conduite écologique',
            details: 'Réduit la consommation de carburant grâce à l\'IA'
        },
        {
            id: 2,
            name: 'MediConnect',
            juryScore: 8.2,
            adjustedScore: 8.5,
            qualified: true,
            description: 'Plateforme de télémédecine',
            details: 'Connecte patients et médecins en temps réel'
        },
        {
            id: 3,
            name: 'SmartFarming',
            juryScore: 7.9,
            adjustedScore: 8.0,
            qualified: true,
            description: 'Solution IoT pour l\'agriculture',
            details: 'Optimisation des ressources agricoles'
        },
        {
            id: 4,
            name: 'UrbanGreen',
            juryScore: 7.6,
            adjustedScore: 7.6,
            qualified: false,
            description: 'Projet d\'espaces verts urbains',
            details: 'Amélioration de la qualité de l\'air en ville'
        },
    ];

    const handleAjusterClick = () => {
        navigate('/classement');
    };

    const handleViewProject = (project: Project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="widget project-scoring">
            <div className="widget-header">
                <h3>Classement Actuel des Projets</h3>
                <a href="/classement" className="widget-action">
                    Voir tout <i className="fas fa-arrow-right"></i>
                </a>
            </div>
            <div className="widget-content">
                <div className="scoring-legend">
                    <div className="legend-item">
                        <span className="legend-color jury-score"></span>
                        <span>Qualifié</span>
                    </div>
                    <div className="legend-item">
                        <span className="legend-color adjusted-score"></span>
                        <span>Score Jury</span>
                    </div>
                    <div className="legend-item">
                        <span className="legend-color qualify"></span>
                        <span>Score Ajusté</span>
                    </div>
                </div>

                <div className="project-scores">
                    {projects.map((project, index) => (
                        <div key={project.id} className={`project-score-item ${project.qualified ? 'qualify' : ''}`}>
                            <div className="project-rank">{index + 1}</div>
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
                                <button
                                    className="btn btn-sm btn-outline"
                                    onClick={() => handleViewProject(project)}
                                >
                                    <i className="fas fa-eye"></i>
                                </button>
                                <button className="btn btn-sm btn-primary" onClick={handleAjusterClick}>Ajuster</button>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedProject && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <h2>{selectedProject.name}</h2>
                            <p><strong>Score Jury:</strong> {selectedProject.juryScore}</p>
                            <p><strong>Score Ajusté:</strong> {selectedProject.adjustedScore}</p>
                            <p><strong>Statut:</strong> {selectedProject.qualified ? 'Qualifié' : 'Non qualifié'}</p>
                            <p><strong>Description:</strong> {selectedProject.description}</p>
                            <p><strong>Détails:</strong> {selectedProject.details}</p>
                            <button className="btn btn-primary" onClick={closeModal}>
                                Fermer
                            </button>
                        </div>
                    </div>
                )}

                <div className="qualification-actions">
                    <div className="qualification-setting">
                        <label>Projets qualifiés pour la phase suivante:</label>
                        <select>
                            <option value="3" selected>3 projets</option>
                            <option value="4">4 projets</option>
                            <option value="5">5 projets</option>
                        </select>
                    </div>
                    <button className="btn btn-primary" onClick={handleAjusterClick}>Finaliser Sélection</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectScoring;