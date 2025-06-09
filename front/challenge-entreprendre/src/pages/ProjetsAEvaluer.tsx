import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Project {
    id: number;
    name: string;
    description: string;
    deadline: string;
    progress: number;
    adjustedScore: string | number;
    statut?: 'Soumis' | 'Incomplet' | 'Qualifié Phase 1';
}

const ProjetsAEvaluer: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([
        { id: 1, name: 'EcoDrive', description: 'Covoiturage écologique', deadline: '12 juin 2025', progress: 50, adjustedScore: '', statut: 'Soumis' },
        { id: 2, name: 'MediConnect', description: 'Télémédecine', deadline: '15 juin 2025', progress: 30, adjustedScore: '', statut: 'Incomplet' },
        { id: 3, name: 'SmartFarming', description: 'Agriculture IoT', deadline: '10 juin 2025', progress: 70, adjustedScore: '', statut: 'Qualifié Phase 1' },
    ]);

    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const [scores, setScores] = useState<{
        [key: number]: { [key: number]: number };
    }>({
        1: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 },
        2: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 },
        3: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 },
    });

    const handleScoreChange = (id: number, value: string) => {
        setProjects(projects.map((project) =>
            project.id === id ? { ...project, adjustedScore: value } : project
        ));
    };

    const saveScore = (id: number) => {
        const project = projects.find((p) => p.id === id);
        if (project && project.adjustedScore && !isNaN(Number(project.adjustedScore)) && Number(project.adjustedScore) >= 0 && Number(project.adjustedScore) <= 10) {
            alert(`Score ajusté de ${project.adjustedScore} sauvegardé pour ${project.name}`);
        } else {
            alert('Veuillez entrer un score valide entre 0 et 10');
        }
    };

    const handleEvaluer = (id: number) => {
        setSelectedProject(id);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    const handleScoreUpdate = (criterion: number, score: number) => {
        if (selectedProject) {
            setScores((prev) => ({
                ...prev,
                [selectedProject]: {
                    ...prev[selectedProject],
                    [criterion]: score,
                },
            }));
        }
    };

    const calculateTotal = (): number => {
        const projectScores = scores[selectedProject || 0] || {};
        return Object.values(projectScores).reduce((sum, score) => sum + score, 0);
    };

    const getStatutClass = (statut: string): string => {
        switch (statut) {
            case 'Soumis':
                return 'statut soumis';
            case 'Incomplet':
                return 'statut incomplet';
            case 'Qualifié Phase 1':
                return 'statut qualifie';
            default:
                return 'statut';
        }
    };

    return (
        <div className="admin-content full-page">
            <div className="page-title">
                <h1>Projets à Évaluer</h1>
                <p>Évaluez les projets et ajustez les scores finaux</p>
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

            <div className="dashboard-content">
                <div className="widget full-width">
                    <div className="widget-header">
                        <h3>Liste des Projets</h3>
                        <Link to="/evaluations-consolidees" className="btn btn-primary">
                            <i className="fas fa-table"></i> Voir Évaluations Consolidées
                        </Link>
                    </div>
                    <div className="widget-content">
                        <table className="evaluation-table full-table">
                            <thead>
                                <tr>
                                    <th>Projet</th>
                                    <th>Description</th>
                                    <th>Date limite</th>
                                    <th>Progression</th>
                                    <th>Statut</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.map((project) => (
                                    <tr key={project.id}>
                                        <td>{project.name}</td>
                                        <td>{project.description}</td>
                                        <td>{project.deadline}</td>
                                        <td>
                                            <div className="mini-progress">
                                                <div className="mini-fill" style={{ width: `${project.progress}%` }}></div>
                                                <span>{project.progress}%</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={getStatutClass(project.statut || '')}>
                                                {project.statut}
                                            </span>
                                        </td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => handleEvaluer(project.id)}>
                                                Évaluer
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {selectedProject && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>Critères d’évaluation des idées de business</h2>
                            <button className="btn btn-close" onClick={handleCloseModal}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="evaluation-grid">
                                <thead>
                                    <tr>
                                        <th>Critères d’évaluation des idées de business</th>
                                        <th>Très peu<br />2 pt</th>
                                        <th>Peu<br />4 pts</th>
                                        <th>Moyen<br />6 pts</th>
                                        <th>Beaucoup<br />8 pts</th>
                                        <th>Enormément<br />10 pts</th>
                                        <th>Barème</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.from({ length: 10 }, (_, i) => i + 1).map((criterion) => (
                                        <tr key={criterion} className="criterion-row">
                                            <td>
                                                <div className={`watercolor-box watercolor-${criterion % 5 || 5}`}>
                                                    <span className="criterion-number">{criterion}</span>
                                                    <div>
                                                        <strong>{`Critère ${criterion}`}</strong><br />
                                                        {/* Add dynamic descriptions if needed */}
                                                    </div>
                                                </div>
                                            </td>
                                            <td><input type="radio" name={`criterion${criterion}`} value="2" onChange={() => handleScoreUpdate(criterion, 2)} /></td>
                                            <td><input type="radio" name={`criterion${criterion}`} value="4" onChange={() => handleScoreUpdate(criterion, 4)} /></td>
                                            <td><input type="radio" name={`criterion${criterion}`} value="6" onChange={() => handleScoreUpdate(criterion, 6)} /></td>
                                            <td><input type="radio" name={`criterion${criterion}`} value="8" onChange={() => handleScoreUpdate(criterion, 8)} /></td>
                                            <td><input type="radio" name={`criterion${criterion}`} value="10" onChange={() => handleScoreUpdate(criterion, 10)} /></td>
                                            <td>10 pts</td>
                                        </tr>
                                    ))}
                                    <tr className="total-row">
                                        <td>TOTAL</td>
                                        <td colSpan={5}></td> {/* Changed "5" to 5 */}
                                        <td>{calculateTotal()} / 100</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" onClick={handleCloseModal}>
                                Sauvegarder et Fermer
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjetsAEvaluer;