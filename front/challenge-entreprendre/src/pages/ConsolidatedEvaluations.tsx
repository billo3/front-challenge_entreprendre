import React from 'react';

interface ConsolidatedProject {
  id: number;
  name: string;
  scores: { [key: string]: number };
}

const ConsolidatedEvaluations: React.FC = () => {
  const projects: ConsolidatedProject[] = [
    {
      id: 1,
      name: 'EcoDrive',
      scores: { 'Sophie Leclerc': 8.0, 'Robert Durand': 8.5, 'Nathalie Moreau': 8.7 },
    },
    {
      id: 2,
      name: 'MediConnect',
      scores: { 'Sophie Leclerc': 7.8, 'Robert Durand': 8.0, 'Nathalie Moreau': 8.2 },
    },
    {
      id: 3,
      name: 'SmartFarming',
      scores: { 'Sophie Leclerc': 7.5, 'Robert Durand': 7.9, 'Nathalie Moreau': 8.0 },
    },
  ];

  const calculateAverage = (scores: { [key: string]: number }): string => {
    const values = Object.values(scores);
    return (values.reduce((sum, score) => sum + score, 0) / values.length).toFixed(1);
  };

  return (
    <div className="admin-content full-page">
      <div className="page-title">
        <h1>Évaluations Consolidées</h1>
        <p>Consultez les scores attribués par les membres du jury</p>
      </div>

      <div className="dashboard-content">
        <div className="widget full-width">
          <div className="widget-header">
            <h3>Scores des Projets</h3>
          </div>
          <div className="widget-content">
            <table className="evaluation-table full-table">
              <thead>
                <tr>
                  <th>Projet</th>
                  {Object.keys(projects[0].scores).map((jury) => (
                    <th key={jury}>{jury}</th>
                  ))}
                  <th>Moyenne</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id}>
                    <td>{project.name}</td>
                    {Object.values(project.scores).map((score, index) => (
                      <td key={index}>{score}</td>
                    ))}
                    <td>{calculateAverage(project.scores)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsolidatedEvaluations;
