import React from 'react';
import { Link } from 'react-router-dom';

interface JuryMember {
  id: string;
  name: string;
  isUser: boolean;
  status: 'active' | 'inactive';
}

interface Jury {
  id: string;
  name: string;
  phase: string;
  president: {
    name: string;
  };
  rapporteur: {
    name: string;
  };
  members: JuryMember[];
}

const MonJury: React.FC = () => {
  const jury: Jury = {
    id: '1',
    name: 'Jury Innovation Technologique',
    phase: 'Phase 1: Présentation',
    president: { name: 'Pierre Martin' },
    rapporteur: { name: 'Marie Dubois' },
    members: [
      { id: '1', name: 'Sophie Leclerc (Vous)', isUser: true, status: 'active' },
      { id: '2', name: 'Robert Durand', isUser: false, status: 'active' },
      { id: '3', name: 'Nathalie Moreau', isUser: false, status: 'active' },
      { id: '4', name: 'Paul Lefevre', isUser: false, status: 'inactive' },
    ],
  };

  return (
    <div className="admin-content full-page">
      <div className="page-title">
        <h1>Mon Jury</h1>
        <p>Consultez les informations sur le jury auquel vous appartenez</p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="stat-info">
            <h3>Membres Actifs</h3>
            <p className="stat-number">{jury.members.filter((m) => m.status === 'active').length}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-calendar-alt"></i>
          </div>
          <div className="stat-info">
            <h3>Phase Actuelle</h3>
            <p className="stat-number">{jury.phase}</p>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="widget full-width jury-info">
          <div className="widget-header">
            <h3>Détails du Jury</h3>
            <Link to="/" className="widget-action">
              Retour au Tableau de Bord <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          <div className="widget-content">
            <div className="jury-details">
              <div className="jury-name">
                <h4>{jury.name}</h4>
                <div className="jury-phase">{jury.phase}</div>
              </div>
              <div className="jury-president">
                <div className="president-avatar">
                  <i className="fas fa-user-tie"></i>
                </div>
                <div className="president-info">
                  <h5>{jury.president.name}</h5>
                  <span>Président du Jury</span>
                </div>
              </div>
              <div className="jury-members">
                <h5>Membres du Jury</h5>
                <ul>
                  {jury.members.map((member) => (
                    <li key={member.id}>
                      <i className="fas fa-user-circle"></i>
                      <span>{member.name}</span>
                      <span className={`status ${member.status}`}>
                        {member.status === 'active' ? 'Actif' : 'Inactif'}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="jury-rapporteur">
                <div className="rapporteur-avatar">
                  <i className="fas fa-clipboard"></i>
                </div>
                <div className="rapporteur-info">
                  <h5>{jury.rapporteur.name}</h5>
                  <span>Rapporteur</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonJury;