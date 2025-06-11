import React, { useState } from 'react';

function Evaluations() {
    // Données des évaluations avec des détails supplémentaires
    const evaluations = [
        {
            id: 1,
            projectName: 'EcoDrive',
            description: 'Une plateforme de covoiturage écologique visant à réduire les émissions de CO2.',
            team: 'Marie Dubois, Jean Dupont',
            submissionDate: '01 mai 2025',
            status: 'Complétée',
            score: 8.5,
            deadline: '10 juin 2025',
            progress: 100,
        },
        {
            id: 2,
            projectName: 'MediConnect',
            description: 'Une application de télémédecine pour connecter patients et médecins.',
            team: 'Sophie Martin, Paul Leroux',
            submissionDate: '05 mai 2025',
            status: 'En cours',
            score: 6.2,
            deadline: '12 juin 2025',
            progress: 60,
        },
        {
            id: 3,
            projectName: 'SmartFarming',
            description: 'Une solution IoT pour optimiser l’agriculture durable.',
            team: 'Lucas Bernard, Emma Robert',
            submissionDate: '10 mai 2025',
            status: 'À faire',
            score: null,
            deadline: '15 juin 2025',
            progress: 0,
        },
        {
            id: 4,
            projectName: 'UrbanGreen',
            description: 'Un projet pour créer des espaces verts en milieu urbain.',
            team: 'Clara Moreau, Julien Fabre',
            submissionDate: '12 mai 2025',
            status: 'À faire',
            score: null,
            deadline: '15 juin 2025',
            progress: 0,
        },
    ];

    // État pour gérer la grille d'évaluation et les détails
    const [showEvaluationGrid, setShowEvaluationGrid] = useState(false);
    const [showDetailsModal, setShowDetailsModal] = useState(false); // Nouvel état pour la modal "Voir"
    const [selectedProject, setSelectedProject] = useState(null);
    const [scores, setScores] = useState({
        1: { 1: 8, 2: 9, 3: 7, 4: 8, 5: 9, 6: 8, 7: 9, 8: 8, 9: 7, 10: 9 }, // Scores pour EcoDrive
        2: { 1: 6, 2: 7, 3: 5, 4: 6, 5: 7, 6: 6, 7: 6, 8: 5, 9: 6, 10: 7 }, // Scores pour MediConnect
        3: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 }, // SmartFarming
        4: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 }, // UrbanGreen
    });

    // Fonction pour gérer le clic sur "Évaluer"
    const handleEvaluateClick = (project) => {
        setSelectedProject(project);
        setShowEvaluationGrid(true);
    };

    // Fonction pour gérer le clic sur "Voir"
    const handleViewClick = (project) => {
        setSelectedProject(project);
        setShowDetailsModal(true);
    };

    // Fermer la grille d'évaluation
    const handleCloseModal = () => {
        setShowEvaluationGrid(false);
        setSelectedProject(null);
    };

    // Fermer la modal de détails
    const handleCloseDetailsModal = () => {
        setShowDetailsModal(false);
        setSelectedProject(null);
    };

    // Mettre à jour les scores des critères
    const handleScoreUpdate = (criterion, score) => {
        setScores((prev) => ({
            ...prev,
            [selectedProject.id]: {
                ...prev[selectedProject.id],
                [criterion]: score,
            },
        }));
    };

    // Calculer le total des scores
    const calculateTotal = () => {
        const projectScores = scores[selectedProject?.id] || {};
        return Object.values(projectScores).reduce((sum, score) => sum + score, 0);
    };

    // Liste des critères pour affichage
    const criteria = [
        { id: 1, name: 'Problème ou besoin identifié', description: 'La description du problème ou du besoin doit être précise et justifiée.' },
        { id: 2, name: 'Solution, proposition de valeur', description: 'Le caractère utile de l’offre proposée est démontré.' },
        { id: 3, name: 'Marché et clientèle cible', description: 'Une clientèle réelle et un marché cible sont identifiés.' },
        { id: 4, name: 'Originalité et Différenciation', description: 'Le projet est innovant et se différencie de la concurrence.' },
        { id: 5, name: 'Faisabilité de l’idée (Réalisme)', description: 'Les porteurs ont démontré la faisabilité de l’idée.' },
        { id: 6, name: 'Business Model (Retombées du projet)', description: 'Les résultats et retombées du projet sont bien identifiés.' },
        { id: 7, name: 'Équipe du projet', description: 'Les porteurs détiennent les compétences nécessaires.' },
        { id: 8, name: 'Stratégie de mise en œuvre', description: 'Un plan d’action clair est présenté.' },
        { id: 9, name: 'Présentation orale', description: 'Le pitch est de qualité et professionnel.' },
        { id: 10, name: 'Appréciation globale du projet', description: 'Sentiment favorable généré par le projet.' },
    ];

    return (
        <div className="evaluations-page">
            <div className="page-title">
                <h1>Mes Évaluations</h1>
                <p>Consultez et gérez vos évaluations des projets</p>
            </div>

            <div className="evaluation-controls">
                <div className="search-bar">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Rechercher un projet..." />
                </div>
                <div className="filter-options">
                    <select>
                        <option value="all">Tous les statuts</option>
                        <option value="completed">Complétée</option>
                        <option value="in-progress">En cours</option>
                        <option value="todo">À faire</option>
                    </select>
                </div>
            </div>

            <div className="evaluation-list">
                <div className="widget">
                    <div className="widget-header">
                        <h3>Liste des Évaluations</h3>
                        <span>{evaluations.length} projets</span>
                    </div>
                    <div className="widget-content">
                        <div className="evaluation-table">
                            <div className="table-header">
                                <span>Projet</span>
                                <span>Statut</span>
                                <span>Score</span>
                                <span>Date Limite</span>
                                <span>Progression</span>
                                <span>Actions</span>
                            </div>
                            {evaluations.map((evalItem) => (
                                <div className="table-row" key={evalItem.id}>
                                    <span>{evalItem.projectName}</span>
                                    <span className={`status ${evalItem.status.toLowerCase().replace(' ', '-')} `}>
                                        {evalItem.status}
                                    </span>
                                    <span>{evalItem.score ? evalItem.score.toFixed(1) : '-'}</span>
                                    <span>{evalItem.deadline}</span>
                                    <span>
                                        <div className="mini-progress">
                                            <div
                                                className="mini-fill"
                                                style={{ width: `${evalItem.progress}% ` }}
                                            ></div>
                                            <span>{evalItem.progress}%</span>
                                        </div>
                                    </span>
                                    <span className="actions">
                                        <button
                                            className="btn btn-sm btn-outline"
                                            onClick={() => handleViewClick(evalItem)}
                                        >
                                            <i className="fas fa-eye"></i> Voir
                                        </button>
                                        <button
                                            className="btn btn-sm btn-primary"
                                            disabled={evalItem.status === 'Complétée'}
                                            onClick={() => handleEvaluateClick(evalItem)}
                                        >
                                            <i className="fas fa-edit"></i> Évaluer
                                        </button>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal pour "Voir" les détails */}
            {showDetailsModal && selectedProject && (
                <div className="modal-overlay" onClick={handleCloseDetailsModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>Détails du projet - {selectedProject.projectName}</h2>
                            <button className="btn btn-close" onClick={handleCloseDetailsModal}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="project-details">
                                <h3>Informations générales</h3>
                                <p><strong>Description :</strong> {selectedProject.description}</p>
                                <p><strong>Équipe :</strong> {selectedProject.team}</p>
                                <p><strong>Date de soumission :</strong> {selectedProject.submissionDate}</p>
                                <p><strong>Statut :</strong> {selectedProject.status}</p>
                                <p><strong>Score total :</strong> {selectedProject.score ? selectedProject.score.toFixed(1) : '-'}</p>
                            </div>
                            {selectedProject.status !== 'À faire' && (
                                <div className="evaluation-details">
                                    <h3>Résultats de l’évaluation</h3>
                                    <table className="evaluation-grid">
                                        <thead>
                                            <tr>
                                                <th>Critère</th>
                                                <th>Score</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {criteria.map((criterion) => (
                                                <tr key={criterion.id}>
                                                    <td>{criterion.name}</td>
                                                    <td>{scores[selectedProject.id][criterion.id] || 0} / 10</td>
                                                </tr>
                                            ))}
                                            <tr className="total-row">
                                                <td><strong>Total</strong></td>
                                                <td><strong>{calculateTotal()} / 100</strong></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" onClick={handleCloseDetailsModal}>
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Grille de critères d'évaluation */}
            {showEvaluationGrid && selectedProject && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>Critères d’évaluation des idées de business - {selectedProject.projectName}</h2>
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
                                        <th>Énormément<br />10 pts</th>
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
                                        <td><input type="radio" name="criterion1" value="2" onChange={() => handleScoreUpdate(1, 2)} checked={scores[selectedProject.id][1] === 2} /></td>
                                        <td><input type="radio" name="criterion1" value="4" onChange={() => handleScoreUpdate(1, 4)} checked={scores[selectedProject.id][1] === 4} /></td>
                                        <td><input type="radio" name="criterion1" value="6" onChange={() => handleScoreUpdate(1, 6)} checked={scores[selectedProject.id][1] === 6} /></td>
                                        <td><input type="radio" name="criterion1" value="8" onChange={() => handleScoreUpdate(1, 8)} checked={scores[selectedProject.id][1] === 8} /></td>
                                        <td><input type="radio" name="criterion1" value="10" onChange={() => handleScoreUpdate(1, 10)} checked={scores[selectedProject.id][1] === 10} /></td>
                                        <td>10 pts</td>
                                    </tr>
                                    <tr className="criterion-row">
                                        <td>
                                            <div className="watercolor-box watercolor-2">
                                                <span className="criterion-number">2</span>
                                                <div>
                                                    <strong>Solution, proposition de valeur</strong><br />
                                                    (Le caractère utile de l’offre proposée est démontré par rapport au problème soulevé ou le besoin identifié, et sa pertinence pour capter un potentiel commercial.)
                                                </div>
                                            </div>
                                        </td>
                                        <td><input type="radio" name="criterion2" value="2" onChange={() => handleScoreUpdate(2, 2)} checked={scores[selectedProject.id][2] === 2} /></td>
                                        <td><input type="radio" name="criterion2" value="4" onChange={() => handleScoreUpdate(2, 4)} checked={scores[selectedProject.id][2] === 4} /></td>
                                        <td><input type="radio" name="criterion2" value="6" onChange={() => handleScoreUpdate(2, 6)} checked={scores[selectedProject.id][2] === 6} /></td>
                                        <td><input type="radio" name="criterion2" value="8" onChange={() => handleScoreUpdate(2, 8)} checked={scores[selectedProject.id][2] === 8} /></td>
                                        <td><input type="radio" name="criterion2" value="10" onChange={() => handleScoreUpdate(2, 10)} checked={scores[selectedProject.id][2] === 10} /></td>
                                        <td>10 pts</td>
                                    </tr>
                                    <tr className="criterion-row">
                                        <td>
                                            <div className="watercolor-box watercolor-3">
                                                <span className="criterion-number">3</span>
                                                <div>
                                                    <strong>Marché et clientèle cible</strong><br />
                                                    (Une clientèle réelle à laquelle s’adresse l’offre issue de l’idée a bien été identifiée par les porteurs de projet, de même qu’un marché cible.)
                                                </div>
                                            </div>
                                        </td>
                                        <td><input type="radio" name="criterion3" value="2" onChange={() => handleScoreUpdate(3, 2)} checked={scores[selectedProject.id][3] === 2} /></td>
                                        <td><input type="radio" name="criterion3" value="4" onChange={() => handleScoreUpdate(3, 4)} checked={scores[selectedProject.id][3] === 4} /></td>
                                        <td><input type="radio" name="criterion3" value="6" onChange={() => handleScoreUpdate(3, 6)} checked={scores[selectedProject.id][3] === 6} /></td>
                                        <td><input type="radio" name="criterion3" value="8" onChange={() => handleScoreUpdate(3, 8)} checked={scores[selectedProject.id][3] === 8} /></td>
                                        <td><input type="radio" name="criterion3" value="10" onChange={() => handleScoreUpdate(3, 10)} checked={scores[selectedProject.id][3] === 10} /></td>
                                        <td>10 pts</td>
                                    </tr>
                                    <tr className="criterion-row">
                                        <td>
                                            <div className="watercolor-box watercolor-4">
                                                <span className="criterion-number">4</span>
                                                <div>
                                                    <strong>Originalité et Différenciation</strong><br />
                                                    (L’originalité, le caractère innovant et créatif du projet sont démontrés, de même que sa différenciation avec la concurrence (avantage compétitif).)
                                                </div>
                                            </div>
                                        </td>
                                        <td><input type="radio" name="criterion4" value="2" onChange={() => handleScoreUpdate(4, 2)} checked={scores[selectedProject.id][4] === 2} /></td>
                                        <td><input type="radio" name="criterion4" value="4" onChange={() => handleScoreUpdate(4, 4)} checked={scores[selectedProject.id][4] === 4} /></td>
                                        <td><input type="radio" name="criterion4" value="6" onChange={() => handleScoreUpdate(4, 6)} checked={scores[selectedProject.id][4] === 6} /></td>
                                        <td><input type="radio" name="criterion4" value="8" onChange={() => handleScoreUpdate(4, 8)} checked={scores[selectedProject.id][4] === 8} /></td>
                                        <td><input type="radio" name="criterion4" value="10" onChange={() => handleScoreUpdate(4, 10)} checked={scores[selectedProject.id][4] === 10} /></td>
                                        <td>10 pts</td>
                                    </tr>
                                    <tr className="criterion-row">
                                        <td>
                                            <div className="watercolor-box watercolor-5">
                                                <span className="criterion-number">5</span>
                                                <div>
                                                    <strong>Faisabilité de l’idée (Réalisme)</strong><br />
                                                    (Les porteurs ont-ils démontré la faisabilité de l’idée ? Ont-ils les compétences techniques et sociales pour la réalisation du projet.)
                                                </div>
                                            </div>
                                        </td>
                                        <td><input type="radio" name="criterion5" value="2" onChange={() => handleScoreUpdate(5, 2)} checked={scores[selectedProject.id][5] === 2} /></td>
                                        <td><input type="radio" name="criterion5" value="4" onChange={() => handleScoreUpdate(5, 4)} checked={scores[selectedProject.id][5] === 4} /></td>
                                        <td><input type="radio" name="criterion5" value="6" onChange={() => handleScoreUpdate(5, 6)} checked={scores[selectedProject.id][5] === 6} /></td>
                                        <td><input type="radio" name="criterion5" value="8" onChange={() => handleScoreUpdate(5, 8)} checked={scores[selectedProject.id][5] === 8} /></td>
                                        <td><input type="radio" name="criterion5" value="10" onChange={() => handleScoreUpdate(5, 10)} checked={scores[selectedProject.id][5] === 10} /></td>
                                        <td>10 pts</td>
                                    </tr>
                                    <tr className="criterion-row">
                                        <td>
                                            <div className="watercolor-box watercolor-1">
                                                <span className="criterion-number">6</span>
                                                <div>
                                                    <strong>Business Model (Retombées du projet)</strong><br />
                                                    (Les porteurs ont bien évalué les résultats qui peuvent découler de la mise en œuvre réelle du projet.)
                                                </div>
                                            </div>
                                        </td>
                                        <td><input type="radio" name="criterion6" value="2" onChange={() => handleScoreUpdate(6, 2)} checked={scores[selectedProject.id][6] === 2} /></td>
                                        <td><input type="radio" name="criterion6" value="4" onChange={() => handleScoreUpdate(6, 4)} checked={scores[selectedProject.id][6] === 4} /></td>
                                        <td><input type="radio" name="criterion6" value="6" onChange={() => handleScoreUpdate(6, 6)} checked={scores[selectedProject.id][6] === 6} /></td>
                                        <td><input type="radio" name="criterion6" value="8" onChange={() => handleScoreUpdate(6, 8)} checked={scores[selectedProject.id][6] === 8} /></td>
                                        <td><input type="radio" name="criterion6" value="10" onChange={() => handleScoreUpdate(6, 10)} checked={scores[selectedProject.id][6] === 10} /></td>
                                        <td>10 pts</td>
                                    </tr>
                                    <tr className="criterion-row">
                                        <td>
                                            <div className="watercolor-box watercolor-2">
                                                <span className="criterion-number">7</span>
                                                <div>
                                                    <strong>Équipe du projet</strong><br />
                                                    (Les porteurs détiennent-ils les compétences techniques et sociales requises pour la réalisation du projet.)
                                                </div>
                                            </div>
                                        </td>
                                        <td><input type="radio" name="criterion7" value="2" onChange={() => handleScoreUpdate(7, 2)} checked={scores[selectedProject.id][7] === 2} /></td>
                                        <td><input type="radio" name="criterion7" value="4" onChange={() => handleScoreUpdate(7, 4)} checked={scores[selectedProject.id][7] === 4} /></td>
                                        <td><input type="radio" name="criterion7" value="6" onChange={() => handleScoreUpdate(7, 6)} checked={scores[selectedProject.id][7] === 6} /></td>
                                        <td><input type="radio" name="criterion7" value="8" onChange={() => handleScoreUpdate(7, 8)} checked={scores[selectedProject.id][7] === 8} /></td>
                                        <td><input type="radio" name="criterion7" value="10" onChange={() => handleScoreUpdate(7, 10)} checked={scores[selectedProject.id][7] === 10} /></td>
                                        <td>10 pts</td>
                                    </tr>
                                    <tr className="criterion-row">
                                        <td>
                                            <div className="watercolor-box watercolor-3">
                                                <span className="criterion-number">8</span>
                                                <div>
                                                    <strong>Stratégie de mise en œuvre</strong><br />
                                                    (Les promoteurs ont présenté un plan d’action de concrétisation de leur projet.)
                                                </div>
                                            </div>
                                        </td>
                                        <td><input type="radio" name="criterion8" value="2" onChange={() => handleScoreUpdate(8, 2)} checked={scores[selectedProject.id][8] === 2} /></td>
                                        <td><input type="radio" name="criterion8" value="4" onChange={() => handleScoreUpdate(8, 4)} checked={scores[selectedProject.id][8] === 4} /></td>
                                        <td><input type="radio" name="criterion8" value="6" onChange={() => handleScoreUpdate(8, 6)} checked={scores[selectedProject.id][8] === 6} /></td>
                                        <td><input type="radio" name="criterion8" value="8" onChange={() => handleScoreUpdate(8, 8)} checked={scores[selectedProject.id][8] === 8} /></td>
                                        <td><input type="radio" name="criterion8" value="10" onChange={() => handleScoreUpdate(8, 10)} checked={scores[selectedProject.id][8] === 10} /></td>
                                        <td>10 pts</td>
                                    </tr>
                                    <tr className="criterion-row">
                                        <td>
                                            <div className="watercolor-box watercolor-4">
                                                <span className="criterion-number">9</span>
                                                <div>
                                                    <strong>Présentation orale</strong><br />
                                                    (Le pitch du projet est-il de qualité et professionnel ?)
                                                </div>
                                            </div>
                                        </td>
                                        <td><input type="radio" name="criterion9" value="2" onChange={() => handleScoreUpdate(9, 2)} checked={scores[selectedProject.id][9] === 2} /></td>
                                        <td><input type="radio" name="criterion9" value="4" onChange={() => handleScoreUpdate(9, 4)} checked={scores[selectedProject.id][9] === 4} /></td>
                                        <td><input type="radio" name="criterion9" value="6" onChange={() => handleScoreUpdate(9, 6)} checked={scores[selectedProject.id][9] === 6} /></td>
                                        <td><input type="radio" name="criterion9" value="8" onChange={() => handleScoreUpdate(9, 8)} checked={scores[selectedProject.id][9] === 8} /></td>
                                        <td><input type="radio" name="criterion9" value="10" onChange={() => handleScoreUpdate(9, 10)} checked={scores[selectedProject.id][9] === 10} /></td>
                                        <td>10 pts</td>
                                    </tr>
                                    <tr className="criterion-row">
                                        <td>
                                            <div className="watercolor-box watercolor-5">
                                                <span className="criterion-number">10</span>
                                                <div>
                                                    <strong>Appréciation globale du projet</strong><br />
                                                    (L’appréciation personnelle du juré quantifie le sentiment favorable généré par un projet.)
                                                </div>
                                            </div>
                                        </td>
                                        <td><input type="radio" name="criterion10" value="2" onChange={() => handleScoreUpdate(10, 2)} checked={scores[selectedProject.id][10] === 2} /></td>
                                        <td><input type="radio" name="criterion10" value="4" onChange={() => handleScoreUpdate(10, 4)} checked={scores[selectedProject.id][10] === 4} /></td>
                                        <td><input type="radio" name="criterion10" value="6" onChange={() => handleScoreUpdate(10, 6)} checked={scores[selectedProject.id][10] === 6} /></td>
                                        <td><input type="radio" name="criterion10" value="8" onChange={() => handleScoreUpdate(10, 8)} checked={scores[selectedProject.id][10] === 8} /></td>
                                        <td><input type="radio" name="criterion10" value="10" onChange={() => handleScoreUpdate(10, 10)} checked={scores[selectedProject.id][10] === 10} /></td>
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

export default Evaluations;
