import React, { useState } from 'react';

interface JuryMember {
    id: number;
    name: string;
    role: string;
    status: 'active' | 'inactive';
    progress: number;
    present: boolean;
}

const MonJury: React.FC = () => {
    const [juryMembers, setJuryMembers] = useState<JuryMember[]>([
        { id: 1, name: 'Bachir Diop', role: 'Membre du jury', status: 'active', progress: 80, present: true },
        { id: 2, name: 'Amadou LY', role: 'Membre du jury', status: 'active', progress: 65, present: true },
        { id: 3, name: 'Babzo', role: 'Membre du jury', status: 'active', progress: 45, present: true },
        { id: 4, name: 'El pepe', role: 'Membre du jury', status: 'inactive', progress: 0, present: false },
    ]);

    const togglePresence = (id: number) => {
        setJuryMembers(juryMembers.map((member) =>
            member.id === id
                ? { ...member, present: !member.present, status: !member.present ? 'active' : 'inactive' }
                : member
        ));
    };

    const sendReminder = (name: string) => {
        alert(`Rappel envoyé à ${name}`);
    };

    return (
        <div className="admin-content full-page">
            <div className="page-title">
                <h1>Mon Jury</h1>
                <p>Gérez les membres de votre jury et leur présence</p>
            </div>

            <div className="dashboard-stats">
                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-users"></i>
                    </div>
                    <div className="stat-info">
                        <h3>Membres Présents</h3>
                        <p className="stat-number">
                            {juryMembers.filter((m) => m.present).length}/{juryMembers.length}
                        </p>
                    </div>
                </div>
            </div>

            <div className="dashboard-content">
                <div className="widget full-width jury-status">
                    <div className="widget-header">
                        <h3>Membres du Jury</h3>
                        <button className="btn btn-primary">
                            <i className="fas fa-plus"></i> Ajouter Membre
                        </button>
                    </div>
                    <div className="widget-content">
                        <div className="jury-members full-table">
                            {juryMembers.map((member) => (
                                <div key={member.id} className="member">
                                    <div className="member-avatar">
                                        <i className="fas fa-user-circle"></i>
                                        <span className={`status-dot ${member.status}`}></span>
                                    </div>
                                    <div className="member-info">
                                        <h4>{member.name}</h4>
                                        <span className="member-role">{member.role}</span>
                                        <div className="member-progress">
                                            <div className="mini-progress">
                                                <div className="mini-fill" style={{ width: `${member.progress}%` }}></div>
                                                <span>{member.progress}%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="jury-actions">
                                        <button
                                            className={`btn btn-sm ${member.present ? 'btn-secondary' : 'btn-primary'}`}
                                            onClick={() => togglePresence(member.id)}
                                        >
                                            <i className="fas fa-user-check"></i> {member.present ? 'Marquer Absent' : 'Marquer Présent'}
                                        </button>
                                        <button className="btn btn-sm btn-secondary" onClick={() => sendReminder(member.name)}>
                                            <i className="fas fa-envelope"></i> Rappel
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MonJury;