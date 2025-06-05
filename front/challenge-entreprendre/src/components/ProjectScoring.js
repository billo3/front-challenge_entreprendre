import React from 'react';
import { useNavigate } from 'react-router-dom'; // Ajout de l'import

function ProjectScoring() {
    const navigate = useNavigate(); // Initialisation du hook

    const handleAjusterClick = () => {
        navigate('/projets-a-evaluer'); // Redirection vers la page souhaitée
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
                    <div className="project-score-item qualify">
                        <div className="project-rank">1</div>
                        <div className="project-info">
                            <h4>EcoDrive</h4>
                            <div className="project-score-bars">
                                <div className="score-bar">
                                    <div className="score-fill jury-score" style={{ width: '85%' }}></div>
                                    <span>8.5</span>
                                </div>
                                <div className="score-bar">
                                    <div className="score-fill adjusted-score" style={{ width: '88%' }}></div>
                                    <span>8.8</span>
                                </div>
                            </div>
                        </div>
                        <div className="project-actions">
                            <button className="btn btn-sm btn-outline">
                                <i className="fas fa-eye"></i>
                            </button>
                            <button className="btn btn-sm btn-primary" onClick={handleAjusterClick}>Ajuster</button>
                        </div>
                    </div>

                    <div className="project-score-item qualify">
                        <div className="project-rank">2</div>
                        <div className="project-info">
                            <h4>MediConnect</h4>
                            <div className="project-score-bars">
                                <div className="score-bar">
                                    <div className="score-fill jury-score" style={{ width: '82%' }}></div>
                                    <span>8.2</span>
                                </div>
                                <div className="score-bar">
                                    <div className="score-fill adjusted-score" style={{ width: '85%' }}></div>
                                    <span>8.5</span>
                                </div>
                            </div>
                        </div>
                        <div className="project-actions">
                            <button className="btn btn-sm btn-outline">
                                <i className="fas fa-eye"></i>
                            </button>
                            <button className="btn btn-sm btn-primary" onClick={handleAjusterClick}>Ajuster</button>
                        </div>
                    </div>

                    <div className="project-score-item qualify">
                        <div className="project-rank">3</div>
                        <div className="project-info">
                            <h4>SmartFarming</h4>
                            <div className="project-score-bars">
                                <div className="score-bar">
                                    <div className="score-fill jury-score" style={{ width: '79%' }}></div>
                                    <span>7.9</span>
                                </div>
                                <div className="score-bar">
                                    <div className="score-fill adjusted-score" style={{ width: '80%' }}></div>
                                    <span>8.0</span>
                                </div>
                            </div>
                        </div>
                        <div className="project-actions">
                            <button className="btn btn-sm btn-outline">
                                <i className="fas fa-eye"></i>
                            </button>
                            <button className="btn btn-sm btn-primary" onClick={handleAjusterClick}>Ajuster</button>
                        </div>
                    </div>

                    <div className="project-score-item">
                        <div className="project-rank">4</div>
                        <div className="project-info">
                            <h4>UrbanGreen</h4>
                            <div className="project-score-bars">
                                <div className="score-bar">
                                    <div className="score-fill jury-score" style={{ width: '76%' }}></div>
                                    <span>7.6</span>
                                </div>
                                <div className="score-bar">
                                    <div className="score-fill adjusted-score" style={{ width: '76%' }}></div>
                                    <span>7.6</span>
                                </div>
                            </div>
                        </div>
                        <div className="project-actions">
                            <button className="btn btn-sm btn-outline">
                                <i className="fas fa-eye"></i>
                            </button>
                            <button className="btn btn-sm btn-primary" onClick={handleAjusterClick}>Ajuster</button>
                        </div>
                    </div>
                </div>

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
}

export default ProjectScoring;