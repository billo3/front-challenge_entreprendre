import React, { useState } from 'react';

interface Project {
  id: number;
  name: string;
  juryScore: number;
  adjustedScore: number | string;
  qualified: boolean;
}

const Classement: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([
    { id: 1, name: 'EcoDrive', juryScore: 8.5, adjustedScore: 8.8, qualified: true },
    { id: 2, name: 'MediConnect', juryScore: 8.2, adjustedScore: 8.5, qualified: true },
    { id: 3, name: 'SmartFarming', juryScore: 7.9, adjustedScore: 8.0, qualified: true },
    { id: 4, name: 'UrbanGreen', juryScore: 7.6, adjustedScore: 7.6, qualified: false },
  ]);
  const [qualifiedCount, setQualifiedCount] = useState<number>(3);
  const [isValidated, setIsValidated] = useState<boolean>(false);

  const handleScoreChange = (id: number, value: string) => {
    if (isValidated) {
      alert('La sélection est validée, les scores ne peuvent plus être modifiés.');
      return;
    }
    setProjects(projects.map((project) =>
      project.id === id ? { ...project, adjustedScore: parseFloat(value) || '' } : project
    ));
  };

  const handleQualifiedCountChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (isValidated) {
      alert('La sélection est validée, le nombre de projets qualifiés ne peut plus être modifié.');
      return;
    }
    const count = parseInt(e.target.value);
    setQualifiedCount(count);
    setProjects(projects.map((project, index) => ({
      ...project,
      qualified: index < count,
    })));
  };

  const validateSelection = () => {
    const invalidScores = projects.some((p) => !p.adjustedScore || (typeof p.adjustedScore === 'number' && (p.adjustedScore < 0 || p.adjustedScore > 10)));
    if (invalidScores) {
      alert('Veuillez entrer des scores valides (0-10) pour tous les projets.');
      return;
    }
    setIsValidated(true);
    alert('Sélection finale validée avec succès!');
  };

  return (
    <div className="admin-content full-page">
      <div className="page-title">
        <h1>Classement</h1>
        <p>Ajustez les scores et validez la sélection finale</p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-trophy"></i>
          </div>
          <div className="stat-info">
            <h3>Projets Qualifiés</h3>
            <p className="stat-number">{projects.filter((p) => p.qualified).length}</p>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="widget full-width project-scoring">
          <div className="widget-header">
            <h3>Classement des Projets</h3>
            <div className="qualification-setting">
              <label>Projets qualifiés: </label>
              <input
                type="number"
                min={1}
                max={projects.length}
                value={qualifiedCount}
                onChange={(e) => {
                  if (isValidated) {
                    alert('La sélection est validée, le nombre de projets qualifiés ne peut plus être modifié.');
                    return;
                  }
                  let count = parseInt(e.target.value, 10);
                  if (isNaN(count) || count < 1) count = 1;
                  if (count > projects.length) count = projects.length;
                  setQualifiedCount(count);
                  setProjects(projects.map((project, index) => ({
                    ...project,
                    qualified: index < count,
                  })));
                }}
                disabled={isValidated}
                style={{ width: 60, marginLeft: 8 }}
              />
              <span style={{ marginLeft: 8 }}>/ {projects.length}</span>
            </div>
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

            <div className="project-scores full-table">
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
                        <input
                          type="number"
                          min="0"
                          max="10"
                          step="0.1"
                          value={project.adjustedScore}
                          onChange={(e) => handleScoreChange(project.id, e.target.value)}
                          className="score-input"
                          disabled={isValidated}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="project-actions">
                    <button className="btn btn-sm btn-outline" disabled={isValidated}>
                      <i className="fas fa-eye"></i> Voir
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="qualification-actions">
              <button className="btn btn-primary" onClick={validateSelection} disabled={isValidated}>
                <i className="fas fa-check"></i> Valider Sélection Finale
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classement;