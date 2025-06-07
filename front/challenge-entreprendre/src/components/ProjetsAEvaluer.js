import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProjetsAEvaluer() {
    const [projects, setProjects] = useState([
        { id: 1, name: 'EcoDrive', description: 'Covoiturage écologique', deadline: '12 juin 2025', progress: 50, adjustedScore: '', statut: 'Soumis' },
        { id: 2, name: 'MediConnect', description: 'Télémédecine', deadline: '15 juin 2025', progress: 30, adjustedScore: '', statut: 'Incomplet' },
        { id: 3, name: 'SmartFarming', description: 'Agriculture IoT', deadline: '10 juin 2025', progress: 70, adjustedScore: '', statut: 'Qualifié Phase 1' },
    ]);

    const [selectedProject, setSelectedProject] = useState(null);
    const [scores, setScores] = useState({
        1: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 },
        2: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 },
        3: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 },
    });

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
        setSelectedProject(id);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    const handleScoreUpdate = (criterion, score) => {
        setScores((prev) => ({
            ...prev,
            [selectedProject]: {
                ...prev[selectedProject],
                [criterion]: score,
            },
        }));
    };

    const calculateTotal = () => {
        const projectScores = scores[selectedProject] || {};
        return Object.values(projectScores).reduce((sum, score) => sum + score, 0);
    };

    const getStatutClass = (statut) => {
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
                                    <tr className="criterion-row">
                                        <td>
                                            <div className="watercolor-box watercolor-1">
                                                <span className="criterion-number">1</span>
                                                <div>
                                                    <strong>Problème ou besoin identifié</strong><br />
                                                    (La description du problème ou du besoin doit être précise et justifiée (par des données), en montrant un dysfonctionnement ou un manquement réel.)
                                                </div>
                                            </div>
                                        </td>
                                        <td><input type="radio" name="criterion1" value="2" onChange={() => handleScoreUpdate(1, 2)} /></td>
                                        <td><input type="radio" name="criterion1" value="4" onChange={() => handleScoreUpdate(1, 4)} /></td>
                                        <td><input type="radio" name="criterion1" value="6" onChange={() => handleScoreUpdate(1, 6)} /></td>
                                        <td><input type="radio" name="criterion1" value="8" onChange={() => handleScoreUpdate(1, 8)} /></td>
                                        <td><input type="radio" name="criterion1" value="10" onChange={() => handleScoreUpdate(1, 10)} /></td>
                                        <td>10 pts</td>
                                    </tr>
                                    <tr className="criterion-row">
                                        <td>
                                            <div className="watercolor-box watercolor-2">
                                                <span className="criterion-number">2</span>
                                                <div>
                                                    <strong>Solution, proposition de valeur</strong><br />
                                                    ( Le caractère utile de l'offre proposée est démontré par rapport au problème soulevé ou le besoin identifié, et sa pertinence pour capter un potentiel 
                                                    commercial.)
                                                </div>
                                            </div>
                                        </td>
                                        <td><input type="radio" name="criterion2" value="2" onChange={() => handleScoreUpdate(2, 2)} /></td>
                                        <td><input type="radio" name="criterion2" value="4" onChange={() => handleScoreUpdate(2, 4)} /></td>
                                        <td><input type="radio" name="criterion2" value="6" onChange={() => handleScoreUpdate(2, 6)} /></td>
                                        <td><input type="radio" name="criterion2" value="8" onChange={() => handleScoreUpdate(2, 8)} /></td>
                                        <td><input type="radio" name="criterion2" value="10" onChange={() => handleScoreUpdate(2, 10)} /></td>
                                        <td>10 pts</td>
                                    </tr>
                                    <tr className="criterion-row">
                                        <td>
                                            <div className="watercolor-box watercolor-3">
                                                <span className="criterion-number">3</span>
                                                <div>
                                                    <strong>Marché et clientèle cible</strong><br />
                                                    (Une clientèle réelle à laquelle s'adresse l'offre issue de l'idée a bien été identifiée par les porteurs de projet, de même qu'un marché cible.)
                                                </div>
                                            </div>
                                        </td>
                                        <td><input type="radio" name="criterion3" value="2" onChange={() => handleScoreUpdate(3, 2)} /></td>
                                        <td><input type="radio" name="criterion3" value="4" onChange={() => handleScoreUpdate(3, 4)} /></td>
                                        <td><input type="radio" name="criterion3" value="6" onChange={() => handleScoreUpdate(3, 6)} /></td>
                                        <td><input type="radio" name="criterion3" value="8" onChange={() => handleScoreUpdate(3, 8)} /></td>
                                        <td><input type="radio" name="criterion3" value="10" onChange={() => handleScoreUpdate(3, 10)} /></td>
                                        <td>10 pts</td>
                                    </tr>
                                    <tr className="criterion-row">
                                        <td>
                                            <div className="watercolor-box watercolor-4">
                                                <span className="criterion-number">4</span>
                                                <div>
                                                    <strong>Originalité et Différenciation</strong><br />
                                                    ( L’originalité, le caractère innovant et créatif du projet sont démontrés, de même que sa différenciation avec la concurrence (avantage compétitif). L’idée 
                                                    présente-t-elle un nouveau produit ou service? Suggère-t-elle de nouvelles façons de faire?)
                                                </div>
                                            </div>
                                        </td>
                                        <td><input type="radio" name="criterion4" value="2" onChange={() => handleScoreUpdate(4, 2)} /></td>
                                        <td><input type="radio" name="criterion4" value="4" onChange={() => handleScoreUpdate(4, 4)} /></td>
                                        <td><input type="radio" name="criterion4" value="6" onChange={() => handleScoreUpdate(4, 6)} /></td>
                                        <td><input type="radio" name="criterion4" value="8" onChange={() => handleScoreUpdate(4, 8)} /></td>
                                        <td><input type="radio" name="criterion4" value="10" onChange={() => handleScoreUpdate(4, 10)} /></td>
                                        <td>10 pts</td>
                                    </tr>
                                    <tr className="criterion-row">
                                        <td>
                                            <div className="watercolor-box watercolor-5">
                                                <span className="criterion-number">5</span>
                                                <div>
                                                    <strong>Faisabilité de l’idée (Réalisme)</strong><br />
                                                    ( Les porteurs ont-il démontré la faisabilité de l’idée ? Ont-ils bien les compétences techniques et sociales (soft-skills) pour la réalisation du projet.)
                                                </div>
                                            </div>
                                        </td>
                                        <td><input type="radio" name="criterion5" value="2" onChange={() => handleScoreUpdate(5, 2)} /></td>
                                        <td><input type="radio" name="criterion5" value="4" onChange={() => handleScoreUpdate(5, 4)} /></td>
                                        <td><input type="radio" name="criterion5" value="6" onChange={() => handleScoreUpdate(5, 6)} /></td>
                                        <td><input type="radio" name="criterion5" value="8" onChange={() => handleScoreUpdate(5, 8)} /></td>
                                        <td><input type="radio" name="criterion5" value="10" onChange={() => handleScoreUpdate(5, 10)} /></td>
                                        <td>10 pts</td>
                                    </tr>
                                    <tr className="criterion-row">
                                        <td>
                                            <div className="watercolor-box watercolor-1">
                                                <span className="criterion-number">6</span>
                                                <div>
                                                    <strong>Business Model (Retombés du projet)</strong><br />
                                                    (Les porteurs de projet ont bien évalué les résultats qui peuvent découler de la mise en œuvre réelle du projet. Ainsi, les retombées du projet sont bien 
                                                    identifiées, de même que les sources de revenus.)
                                                </div>
                                            </div>
                                        </td>
                                        <td><input type="radio" name="criterion6" value="2" onChange={() => handleScoreUpdate(6, 2)} /></td>
                                        <td><input type="radio" name="criterion6" value="4" onChange={() => handleScoreUpdate(6, 4)} /></td>
                                        <td><input type="radio" name="criterion6" value="6" onChange={() => handleScoreUpdate(6, 6)} /></td>
                                        <td><input type="radio" name="criterion6" value="8" onChange={() => handleScoreUpdate(6, 8)} /></td>
                                        <td><input type="radio" name="criterion6" value="10" onChange={() => handleScoreUpdate(6, 10)} /></td>
                                        <td>10 pts</td>
                                    </tr>
                                    <tr className="criterion-row">
                                        <td>
                                            <div className="watercolor-box watercolor-2">
                                                <span className="criterion-number">7</span>
                                                <div>
                                                    <strong>Équipe du projet</strong><br />
                                                    (Les porteurs de projet détienent-ils bien les compétences techniques et sociales requises (soft-skills) pour la réalisation du projet (Compétences, 
                                                    complémentarité, engagement).)
                                                </div>
                                            </div>
                                        </td>
                                        <td><input type="radio" name="criterion7" value="2" onChange={() => handleScoreUpdate(7, 2)} /></td>
                                        <td><input type="radio" name="criterion7" value="4" onChange={() => handleScoreUpdate(7, 4)} /></td>
                                        <td><input type="radio" name="criterion7" value="6" onChange={() => handleScoreUpdate(7, 6)} /></td>
                                        <td><input type="radio" name="criterion7" value="8" onChange={() => handleScoreUpdate(7, 8)} /></td>
                                        <td><input type="radio" name="criterion7" value="10" onChange={() => handleScoreUpdate(7, 10)} /></td>
                                        <td>10 pts</td>
                                    </tr>
                                    <tr className="criterion-row">
                                        <td>
                                            <div className="watercolor-box watercolor-3">
                                                <span className="criterion-number">8</span>
                                                <div>
                                                    <strong>Stratégie de mise en œuvre</strong><br />
                                                    (Les promoteurs ont bien présenté un plan d'action de concrétisation de leur prpjet (organisation et mobilisation de ressources financières, techniques et 
matérielles))
                                                </div>
                                            </div>
                                        </td>
                                        <td><input type="radio" name="criterion8" value="2" onChange={() => handleScoreUpdate(8, 2)} /></td>
                                        <td><input type="radio" name="criterion8" value="4" onChange={() => handleScoreUpdate(8, 4)} /></td>
                                        <td><input type="radio" name="criterion8" value="6" onChange={() => handleScoreUpdate(8, 6)} /></td>
                                        <td><input type="radio" name="criterion8" value="8" onChange={() => handleScoreUpdate(8, 8)} /></td>
                                        <td><input type="radio" name="criterion8" value="10" onChange={() => handleScoreUpdate(8, 10)} /></td>
                                        <td>10 pts</td>
                                    </tr>
                                    <tr className="criterion-row">
                                        <td>
                                            <div className="watercolor-box watercolor-4">
                                                <span className="criterion-number">9</span>
                                                <div>
                                                    <strong>Présentation orale</strong><br />
                                                    (Le pitch du projet (présentation) est-il de qualité (clarté des idées exprimées), et professionnel ?)
                                                </div>
                                            </div>
                                        </td>
                                        <td><input type="radio" name="criterion9" value="2" onChange={() => handleScoreUpdate(9, 2)} /></td>
                                        <td><input type="radio" name="criterion9" value="4" onChange={() => handleScoreUpdate(9, 4)} /></td>
                                        <td><input type="radio" name="criterion9" value="6" onChange={() => handleScoreUpdate(9, 6)} /></td>
                                        <td><input type="radio" name="criterion9" value="8" onChange={() => handleScoreUpdate(9, 8)} /></td>
                                        <td><input type="radio" name="criterion9" value="10" onChange={() => handleScoreUpdate(9, 10)} /></td>
                                        <td>10 pts</td>
                                    </tr>
                                    <tr className="criterion-row">
                                        <td>
                                            <div className="watercolor-box watercolor-5">
                                                <span className="criterion-number">10</span>
                                                <div>
                                                    <strong>Appréciation globale du projet</strong><br />
                                                    ( L’appréciation personnelle du juré permet de quantifier le sentiment favorable généré par un projet. Ce sentiment pourrait découler, par exemple, de 
                                                    l’aspect innovateur, d’une niche de marché exceptionnelle ou d’une grande rigueur dans la présentation du projet.)
                                                </div>
                                            </div>
                                        </td>
                                        <td><input type="radio" name="criterion10" value="2" onChange={() => handleScoreUpdate(10, 2)} /></td>
                                        <td><input type="radio" name="criterion10" value="4" onChange={() => handleScoreUpdate(10, 4)} /></td>
                                        <td><input type="radio" name="criterion10" value="6" onChange={() => handleScoreUpdate(10, 6)} /></td>
                                        <td><input type="radio" name="criterion10" value="8" onChange={() => handleScoreUpdate(10, 8)} /></td>
                                        <td><input type="radio" name="criterion10" value="10" onChange={() => handleScoreUpdate(10, 10)} /></td>
                                        <td>10 pts</td>
                                    </tr>
                                    <tr className="total-row">
                                        <td>TOTAL</td>
                                        <td colSpan="5"></td>
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
}

export default ProjetsAEvaluer;
