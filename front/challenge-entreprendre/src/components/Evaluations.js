import React from 'react';

function Evaluations() {
    // Sample data for evaluations (replace with API data later if needed)
    const evaluations = [
        {
            id: 1,
            projectName: 'EcoDrive',
            status: 'Complétée',
            score: 8.5,
            deadline: '10 juin 2025',
            progress: 100,
        },
        {
            id: 2,
            projectName: 'MediConnect',
            status: 'En cours',
            score: 6.2,
            deadline: '12 juin 2025',
            progress: 60,
        },
        {
            id: 3,
            projectName: 'SmartFarming',
            status: 'À faire',
            score: null,
            deadline: '15 juin 2025',
            progress: 0,
        },
        {
            id: 4,
            projectName: 'UrbanGreen',
            status: 'À faire',
            score: null,
            deadline: '15 juin 2025',
            progress: 0,
        },
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
                                        <button className="btn btn-sm btn-outline">
                                            <i className="fas fa-eye"></i> Voir
                                        </button>
                                        <button
                                            className="btn btn-sm btn-primary"
                                            disabled={evalItem.status === 'Complétée'}
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
        </div>
    );
}

export default Evaluations;