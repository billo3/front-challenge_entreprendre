import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import StatCard from './StatCard';
import EvaluationCriteriaGrid from './EvaluationCriteriaGrid';

Modal.setAppElement('#root');

interface Project {
  id: string;
  name: string;
  description: string;
  category: string;
}

interface Evaluation {
  id: string;
  projectName: string;
  description: string;
  category: string;
  scores: {
    technique: number;
    commercial: number;
    financier: number;
    presentation: number;
    total: number;
  };
  date: string;
}

const MembreJury: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    { id: '1', name: 'GreenCity', description: "Solution d'urbanisme durable pour villes intelligentes", category: 'Environnement' },
    { id: '2', name: 'FinTech Pro', description: "Plateforme d'inclusion financière pour entrepreneurs", category: 'Finance' },
  ];

  const evaluations: Evaluation[] = [
    {
      id: '1',
      projectName: 'EcoSolutions',
      description: 'Solution écologique de gestion des déchets urbains',
      category: 'Environnement',
      scores: { technique: 24, commercial: 21, financier: 25, presentation: 8, total: 78 },
      date: '10 juin 2025',
    },
    {
      id: '2',
      projectName: 'HealthConnect',
      description: 'Plateforme de télémédecine pour régions rurales',
      category: 'Santé',
      scores: { technique: 23, commercial: 24, financier: 22, presentation: 8, total: 77 },
      date: '8 juin 2025',
    },
    {
      id: '3',
      projectName: 'SmartCity',
      description: 'Système intelligent de gestion du trafic urbain',
      category: 'Technologie',
      scores: { technique: 23, commercial: 24, financier: 18, presentation: 8, total: 73 },
      date: '6 juin 2025',
    },
  ];

  const rankings = [
    { rank: 1, project: 'EcoSolutions', team: 'Équipe Beta', score: '85/100', phase: 'Phase 1' },
    { rank: 2, project: 'HealthConnect', team: 'Équipe Gamma', score: '80/100', phase: 'Phase 1' },
    { rank: 3, project: 'SmartCity', team: 'Équipe Delta', score: '75/100', phase: 'Phase 1' },
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="admin-content">
      <div className="page-title">
        <h1>Tableau de Bord Membre du Jury</h1>
        <p>Évaluez les projets qui vous sont assignés</p>
      </div>

      <div className="dashboard-stats">
        <StatCard icon="fas fa-tasks" title="Projets à Évaluer" value="10" />
        <StatCard icon="fas fa-check-circle" title="Évaluations Complétées" value="8" />
      </div>


      <div className="dashboard-widgets">
        <div className="widget recent-evaluations">
          <div className="widget-header">
            <h3>Évaluations Récentes</h3>
            <Link to="/evaluations" className="widget-action">
              Voir tout <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          <div className="widget-content">
            <ul className="evaluation-list">
              {evaluations.map((evaluation) => (
                <li key={evaluation.id} className="evaluation-item">
                  <div className="evaluation-project">
                    <h4>{evaluation.projectName}</h4>
                    <p>{evaluation.description}</p>
                    <div className="project-category">
                      <i className="fas fa-tag"></i> {evaluation.category}
                    </div>
                  </div>
                  <div className="evaluation-scores">
                    <div className="score-section">
                      <div className="score-item technique">
                        <span className="score-label">Technique</span>
                        <span className="score-value">{evaluation.scores.technique}/30</span>
                      </div>
                    </div>
                    <div className="score-section">
                      <div className="score-item commercial">
                        <span className="score-label">Commercial</span>
                        <span className="score-value">{evaluation.scores.commercial}/30</span>
                      </div>
                    </div>
                    <div className="score-section">
                      <div className="score-item financier">
                        <span className="score-label">Financier</span>
                        <span className="score-value">{evaluation.scores.financier}/30</span>
                      </div>
                    </div>
                    <div className="score-section">
                      <div className="score-item presentation">
                        <span className="score-label">Présentation</span>
                        <span className="score-value">{evaluation.scores.presentation}/10</span>
                      </div>
                    </div>
                    <div className="score-item total excellent">
                      <span className="score-label">Total</span>
                      <span className="score-value">{evaluation.scores.total}/100</span>
                    </div>
                  </div>
                  <div className="evaluation-meta">
                    <div className="evaluation-date">
                      <i className="fas fa-calendar-alt"></i> {evaluation.date}
                    </div>
                    <div className="evaluation-status completed">
                      <i className="fas fa-check-circle"></i> Validée
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="widget ranking">
          <div className="widget-header">
            <h3>Classement des Projets</h3>
            <Link to="/classement" className="widget-action">
              Voir tout <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          <div className="widget-content">
            <table className="ranking-table">
              <thead>
                <tr>
                  <th>Rang</th>
                  <th>Projet</th>
                  <th>Équipe</th>
                  <th>Score</th>
                  <th>Phase</th>
                </tr>
              </thead>
              <tbody>
                {rankings.map((item) => (
                  <tr key={item.rank}>
                    <td>{item.rank}</td>
                    <td>{item.project}</td>
                    <td>{item.team}</td>
                    <td>{item.score}</td>
                    <td>{item.phase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="dashboard-widgets">
        <div className="widget jury-info">
          <div className="widget-header">
            <h3>Mon Jury</h3>
          </div>
          <div className="widget-content">
            <div className="jury-details">
              <div className="jury-name">
                <h4>Jury Innovation Technologique</h4>
                <div className="jury-phase">Phase 1: Présentation</div>
              </div>
              <div className="jury-president">
                <div className="president-avatar">
                  <i className="fas fa-user-tie"></i>
                </div>
                <div className="president-info">
                  <h5>Pierre Martin</h5>
                  <span>Président du Jury</span>
                </div>
              </div>
              <div className="jury-members">
                <h5>Membres du Jury</h5>
                <ul>
                  <li>
                    <i className="fas fa-user-circle"></i>
                    <span>Sophie Leclerc (Vous)</span>
                    <span className="status active">Actif</span>
                  </li>
                  <li>
                    <i className="fas fa-user-circle"></i>
                    <span>Robert Durand</span>
                    <span className="status active">Actif</span>
                  </li>
                  <li>
                    <i className="fas fa-user-circle"></i>
                    <span>Nathalie Moreau</span>
                    <span className="status active">Actif</span>
                  </li>
                  <li>
                    <i className="fas fa-user-circle"></i>
                    <span>Paul Lefevre</span>
                    <span className="status inactive">Inactif</span>
                  </li>
                </ul>
              </div>
              <div className="jury-rapporteur">
                <div className="rapporteur-avatar">
                  <i className="fas fa-clipboard"></i>
                </div>
                <div className="rapporteur-info">
                  <h5>Marie Dubois</h5>
                  <span>Rapporteur</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="evaluation-modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h2>Critères d’évaluation - {selectedProject?.name}</h2>
            <button className="close-modal" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="modal-body">
            {selectedProject && (
              <div className="project-info-header">
                <h3>{selectedProject.name}</h3>
                <p>{selectedProject.description}</p>
              </div>
            )}
            {selectedProject && (
              <EvaluationCriteriaGrid
                projectId={selectedProject.id}
                projectName={selectedProject.name}
                onClose={closeModal}
              />
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MembreJury;