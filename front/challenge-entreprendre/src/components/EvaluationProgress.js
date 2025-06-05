import React from 'react';

function EvaluationProgress() {
    return (
        <div className="widget evaluation-progress">
            <div className="widget-header">
                <h3>Progression des Évaluations</h3>
                <a href="evaluations.html" className="widget-action">
                    Détails <i className="fas fa-arrow-right"></i>
                </a>
            </div>
            <div className="widget-content">
                <div className="progress-chart">
                    <div className="chart-label">
                        <span>Progression globale</span>
                        <span>67%</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '67%' }}></div>
                    </div>

                    <div className="chart-details">
                        <div className="chart-item">
                            <span className="chart-label">Vos évaluations</span>
                            <div className="mini-progress">
                                <div className="mini-fill" style={{ width: '75%' }}></div>
                                <span>75%</span>
                            </div>
                        </div>

                        <div className="chart-item">
                            <span className="chart-label">Jury collectif</span>
                            <div className="mini-progress">
                                <div className="mini-fill" style={{ width: '60%' }}></div>
                                <span>60%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="progress-summary">
                    <p>8 évaluations complétées sur 12 projets</p>
                    <p className="deadline">Date limite: <strong>15 juin 2025</strong></p>
                </div>
            </div>
        </div>
    );
}

export default EvaluationProgress;