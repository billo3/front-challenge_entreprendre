import React, { useState } from 'react';

interface Project {
  id: number;
  name: string;
  team: string;
  juryScore: number;
  qualified: boolean;
  phase: string;
  description?: string;
  details?: string;
}

const Classement: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      name: 'EcoSolutions',
      team: 'Équipe Beta',
      juryScore: 8.5,
      qualified: true,
      phase: 'Phase 1',
      description: 'Solution écologique de gestion des déchets urbains',
      details: 'Utilise des technologies avancées pour le recyclage',
    },
    {
      id: 2,
      name: 'HealthConnect',
      team: 'Équipe Gamma',
      juryScore: 8.0,
      qualified: true,
      phase: 'Phase 1',
      description: 'Plateforme de télémédecine pour régions rurales',
      details: 'Connecte patients et médecins via une app mobile',
    },
    {
      id: 3,
      name: 'SmartCity',
      team: 'Équipe Delta',
      juryScore: 7.5,
      qualified: false,
      phase: 'Phase 1',
      description: 'Système intelligent de gestion du trafic urbain',
      details: 'Optimise les flux grâce à l’IA',
    },
  ]);
  const [qualifiedCount, setQualifiedCount] = useState<number>(2);
  const [isValidated, setIsValidated] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleScoreChange = (id: number, value: string) => {
    if (isValidated) {
      alert('La sélection est validée, les scores ne peuvent plus être modifiés.');
      return;
    }
    const numValue = parseFloat(value);
    setProjects(projects.map((project) =>
      project.id === id ? { ...project, adjustedScore: isNaN(numValue) ? '' : numValue } : project
    ));
  };

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };



  return (
    <div className="admin-content full-page">

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
                value={qualifiedCount === 0 ? '' : qualifiedCount}
                onChange={(e) => {
                  if (isValidated) {
                    alert('La sélection est validée, le nombre de projets qualifiés ne peut plus être modifié.');
                    return;
                  }
                  const value = e.target.value;
                  let count = value === '' ? 0 : parseInt(value, 10);
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
            <table className="ranking-table">
              <thead>
                <tr>
                  <th>Rang</th>
                  <th>Projet</th>
                  <th>Équipe</th>
                  <th>Score Jury</th>
                  <th>Statut</th>
                  <th>Phase</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr key={project.id} className={project.qualified ? 'qualify' : ''}>
                    <td>{index + 1}</td>
                    <td>{project.name}</td>
                    <td>{project.team}</td>
                    <td>{project.juryScore.toFixed(1)}</td>
                    
                    <td>{project.qualified ? 'Qualifié' : 'Non qualifié'}</td>
                    <td>{project.phase}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline"
                        onClick={() => handleViewProject(project)}
                        disabled={isValidated}
                      >
                        <i className="fas fa-eye"></i> Voir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {selectedProject && (
              <div className="modal-overlay">
                <div className="modal-content">
                  <div className="modal-header">
                    <h2>{selectedProject.name}</h2>
                    <button className="close-modal" onClick={closeModal}>
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p><strong>Équipe:</strong> {selectedProject.team}</p>
                    <p><strong>Score Jury:</strong> {selectedProject.juryScore.toFixed(1)}</p>
                    <p><strong>Statut:</strong> {selectedProject.qualified ? 'Qualifié' : 'Non qualifié'}</p>
                    <p><strong>Phase:</strong> {selectedProject.phase}</p>
                    <p><strong>Description:</strong> {selectedProject.description}</p>
                    <p><strong>Détails:</strong> {selectedProject.details}</p>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-primary" onClick={closeModal}>
                      Fermer
                    </button>
                  </div>
                </div>
              </div>
            )}

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classement;