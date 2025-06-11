import React, { useState } from 'react';

function ProjectEvaluation({ projects, userRole, onSubmitScore }) {
    const [scores, setScores] = useState({});

    const handleScoreChange = (projectId, value) => {
        setScores({ ...scores, [projectId]: value });
    };

    const submitScore = (project) => {
        const score = scores[project.id];
        if (score && !isNaN(score) && score >= 0 && score <= 10) {
            onSubmitScore(project.id, parseFloat(score));
            setScores({ ...scores, [project.id]: '' });
        } else {
            alert('Veuillez entrer un score valide entre 0 et 10.');
        }
    };

    return (
        <div className="widget">
            <div className="widget-header">
                <h3>Projets à Évaluer</h3>
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
                                </div>
                            </div>
                            <div className="project-actions">
                                <input
                                    type="number"
                                    min="0"
                                    max="10"
                                    step="0.1"
                                    value={scores[project.id] || ''}
                                    onChange={(e) => handleScoreChange(project.id, e.target.value)}
                                    placeholder="Score (0-10)"
                                    className="score-input"
                                />
                                <button className="btn btn-primary" onClick={() => submitScore(project)}>
                                    <i className="fas fa-save"></i> Soumettre
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectEvaluation;

