import React, { useState } from 'react';

interface Criterion {
  id: number;
  name: string;
  description: string;
}

interface EvaluationCriteriaGridProps {
  projectId: string;
  projectName: string;
  onClose: () => void;
}

const EvaluationCriteriaGrid: React.FC<EvaluationCriteriaGridProps> = ({ projectId, projectName, onClose }) => {
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

  const [scores, setScores] = useState<{ [key: number]: number }>(
    criteria.reduce((acc, criterion) => ({ ...acc, [criterion.id]: 0 }), {})
  );

  const handleScoreUpdate = (criterionId: number, score: number) => {
    setScores((prev) => ({
      ...prev,
      [criterionId]: score,
    }));
  };

  const calculateTotal = (): number => {
    return Object.values(scores).reduce((sum, score) => sum + score, 0);
  };

  const handleSaveAndClose = () => {
    // Simulate saving scores (e.g., to localStorage or backend)
    console.log(`Saved scores for ${projectName}:`, scores);
    alert('Évaluation sauvegardée');
    onClose();
  };

  return (
    <div className="evaluation-criteria-grid">
      <table className="evaluation-grid">
        <thead>
          <tr>
            <th>Critères d’évaluation</th>
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
              <td>
                <input
                  type="radio"
                  name={`criterion${criterion.id}`}
                  value="2"
                  onChange={() => handleScoreUpdate(criterion.id, 2)}
                  checked={scores[criterion.id] === 2}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={`criterion${criterion.id}`}
                  value="4"
                  onChange={() => handleScoreUpdate(criterion.id, 4)}
                  checked={scores[criterion.id] === 4}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={`criterion${criterion.id}`}
                  value="6"
                  onChange={() => handleScoreUpdate(criterion.id, 6)}
                  checked={scores[criterion.id] === 6}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={`criterion${criterion.id}`}
                  value="8"
                  onChange={() => handleScoreUpdate(criterion.id, 8)}
                  checked={scores[criterion.id] === 8}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={`criterion${criterion.id}`}
                  value="10"
                  onChange={() => handleScoreUpdate(criterion.id, 10)}
                  checked={scores[criterion.id] === 10}
                />
              </td>
              <td>10 pts</td>
            </tr>
          ))}
          <tr className="total-row">
            <td>TOTAL</td>
            <td colSpan={5}></td>
            <td>{calculateTotal()} / 100</td>
          </tr>
        </tbody>
      </table>
      <div className="modal-footer">
        <button className="btn btn-primary" onClick={handleSaveAndClose}>
          Sauvegarder et Fermer
        </button>
      </div>
    </div>
  );
};

export default EvaluationCriteriaGrid;