import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProjetsAEvaluer() {
    const [projects, setProjects] = useState([
        { id: 1, name: 'EcoDrive', description: 'Covoiturage écologique', deadline: '12 juin 2025', progress: 50, adjustedScore: '', statut: 'Soumis' },
        { id: 2, name: 'MediConnect', description: 'Télémédecine', deadline: '15 juin 2025', progress: 30, adjustedScore: '', statut: 'Incomplet' },
        { id: 3, name: 'SmartFarming', description: 'Agriculture IoT', deadline: '10 juin 2025', progress: 70, adjustedScore: '', statut: 'Qualifié Phase 1' },
    ]);

    const handleScoreChange = (id, value) => {
        setProjects(projects.map((project) =>
            project.id === id ? { ...project, adjustedScore: value } : project
        ));
    };

    const saveScore = (id) => {
        const project = projects.find((p) => p.id === id);
        if (project.adjustedScore && !isNaN(project.adjustedScore) && project.adjustedScore >= 0 && project.adjustedScore <= 10) {
            alert(`Score ajusté de ${project.adjustedScore} sauvegardé pour ${project.name}`);
        } else {
            alert('Veuillez entrer un score valide entre 0 et 10');
        }
    };

    const handleEvaluer = (id) => {
        alert(`Évaluation du projet ID ${id}`);
        // Tu peux ici faire une redirection ou ouvrir un modal d'évaluation
    };

    // Fonction pour retourner la classe CSS selon le statut
    const getStatutClass = (statut) => {
        switch (statut) {
            case 'Soumis':
                return 'statut soumi';
            case 'Incomplet':
                return 'statut incomplet';
            case 'Qualifié Phase 1':
                return 'statut qualifie';
            default:
                return 'statut';
        }
    };

    return (
        <div className="admin-content">
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

            <div className="dashboard-widgets">
                <div className="widget">
                    <div className="widget-header">
                        <h3>Liste des Projets</h3>
                        <Link to="/evaluations-consolidees" className="btn btn-primary">
                            <i className="fas fa-table"></i> Voir Évaluations Consolidées
                        </Link>
                    </div>
                    <div className="widget-content">
                        <table className="evaluation-table">
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
                                            <span className={getStatutClass(project.statut)}>
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
                        {/* ...tu peux garder l'affichage par cartes si tu veux aussi... */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjetsAEvaluer;