import React, { useState } from 'react';

interface Evaluation {
    id: number;
    projectName: string;
    description: string;
    team: string;
    submissionDate: string;
    status: 'Complétée' | 'En cours' | 'À faire';
    score: number | null;
    deadline: string;
    progress: number;
}

interface Criterion {
    id: number;
    name: string;
    description: string;
}

const Evaluations: React.FC = () => {
    const evaluations: Evaluation[] = [
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

    const [showEvaluationGrid, setShowEvaluationGrid] = useState<boolean>(false);
    const [showDetailsModal, setShowDetailsModal] = useState<boolean>(false);
    const [selectedProject, setSelectedProject] = useState<Evaluation | null>(null);
    const [scores, setScores] = useState<{
        [key: number]: { [key: number]: number };
    }>({
        1: { 1: 8, 2: 9, 3: 7, 4: 8, 5: 9, 6: 8, 7: 9, 8: 8, 9: 7, 10: 9 },
        2: { 1: 6, 2: 7, 3: 5, 4: 6, 5: 7, 6: 6, 7: 6, 8: 5, 9: 6, 10: 7 },
        3: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 },
        4: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 },
    });

    const handleEvaluateClick = (project: Evaluation) => {
        setSelectedProject(project);
        setShowEvaluationGrid(true);
    };

    const handleViewClick = (project: Evaluation) => {
        setSelectedProject(project);
        setShowDetailsModal(true);
    };

    const handleCloseModal = () => {
        setShowEvaluationGrid(false);
        setSelectedProject(null);
    };

    const handleCloseDetailsModal = () => {
        setShowDetailsModal(false);
        setSelectedProject(null);
    };

    const handleScoreUpdate = (criterion: number, score: number) => {
        if (selectedProject) {
            setScores((prev) => ({
                ...prev,
                [selectedProject.id]: {
                    ...prev[selectedProject.id],
                    [criterion]: score,
                },
            }));
        }
    };

    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    const calculateTotal = (): number => {
        const projectScores = scores[selectedProject?.id || 0] || {};
        return Object.values(projectScores).reduce((sum, score) => sum + score, 0);
    };

    const criteria: Criterion[] = [
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

    const filteredEvaluations = evaluations.filter((evalItem) => {
        // Filtre par recherche
        const matchesSearch = evalItem.projectName.toLowerCase().includes(search.toLowerCase());
        // Filtre par statut
        let matchesStatus = true;
        if (statusFilter === 'completed') matchesStatus = evalItem.status === 'Complétée';
        else if (statusFilter === 'in-progress') matchesStatus = evalItem.status === 'En cours';
        else if (statusFilter === 'todo') matchesStatus = evalItem.status === 'À faire';
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="evaluations-page">
            <div className="page-title">
                <h1>Mes Évaluations</h1>
                <p>Consultez et gérez vos évaluations des projets</p>
            </div>

            <div className="evaluation-controls">
                <div className="search-bar">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Rechercher un projet..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>
                <div className="filter-options">
                    <select value={statusFilter}
                        onChange={e => setStatusFilter(e.target.value)}
                    >
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
                            {filteredEvaluations.map((evalItem) => (
                                <div className="table-row" key={evalItem.id}>
                                    <span>{evalItem.projectName}</span>
                                    <span className={`status ${evalItem.status.toLowerCase().replace(' ', '-')}`}>
                                        {evalItem.status}
                                    </span>
                                    <span>{evalItem.score ? evalItem.score.toFixed(1) : '-'}</span>
                                    <span>{evalItem.deadline}</span>
                                    <span>
                                        <div className="mini-progress">
                                            <div className="mini-fill" style={{ width: `${evalItem.progress}%` }}></div>
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
                                                <td colSpan={5}></td> {/* Changed "5" to 5 */}
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
                                    {criteria.map((criterion) => (
                                        <tr key={criterion.id} className="criterion-row">
                                            <td>
                                                <div className={`watercolor-box watercolor-${criterion.id % 5 || 5}`}>
                                                    <span className="criterion-number">{criterion.id}</span>
                                                    <div>
                                                        <strong>{criterion.name}</strong><br />
                                                        {criterion.description}
                                                    </div>
                                                </div>
                                            </td>
                                            <td><input type="radio" name={`criterion${criterion.id}`} value="2" onChange={() => handleScoreUpdate(criterion.id, 2)} checked={scores[selectedProject.id][criterion.id] === 2} /></td>
                                            <td><input type="radio" name={`criterion${criterion.id}`} value="4" onChange={() => handleScoreUpdate(criterion.id, 4)} checked={scores[selectedProject.id][criterion.id] === 4} /></td>
                                            <td><input type="radio" name={`criterion${criterion.id}`} value="6" onChange={() => handleScoreUpdate(criterion.id, 6)} checked={scores[selectedProject.id][criterion.id] === 6} /></td>
                                            <td><input type="radio" name={`criterion${criterion.id}`} value="8" onChange={() => handleScoreUpdate(criterion.id, 8)} checked={scores[selectedProject.id][criterion.id] === 8} /></td>
                                            <td><input type="radio" name={`criterion${criterion.id}`} value="10" onChange={() => handleScoreUpdate(criterion.id, 10)} checked={scores[selectedProject.id][criterion.id] === 10} /></td>
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

export default Evaluations;