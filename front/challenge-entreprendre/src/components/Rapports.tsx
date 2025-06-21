import React from 'react';

const Rapports: React.FC = () => {
  const handleDownload = (reportName: string) => {
    // Simuler un téléchargement de fichier texte
    const content = `Rapport: ${reportName}\nDate: 18 Juin 2025\nStatut: Généré`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${reportName}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="admin-content full-page">
      <div className="page-title">
        <h1>Gérer Rapports</h1>
        <p>Générez et téléchargez les rapports d'évaluation</p>
      </div>

      <div className="dashboard-content">
        <div className="widget full-width">
          <div className="widget-header">
            <h3>Liste des Rapports</h3>
          </div>
          <div className="widget-content">
            <table className="evaluation-table full-table">
              <thead>
                <tr>
                  <th>Rapport</th>
                  <th>Date de Génération</th>
                  <th>Statut</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Rapport Final - Juin 2025</td>
                  <td>18 Juin 2025</td>
                  <td><span className="statut soumis">Généré</span></td>
                  <td>
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => handleDownload('Rapport_Final_Juin_2025')}
                    >
                      <i className="fas fa-download"></i> Télécharger
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Rapport Intermédiaire</td>
                  <td>10 Juin 2025</td>
                  <td><span className="statut incomplet">En attente</span></td>
                  <td>
                    <button className="btn btn-sm btn-primary" disabled>
                      <i className="fas fa-spinner"></i> Générer
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rapports;