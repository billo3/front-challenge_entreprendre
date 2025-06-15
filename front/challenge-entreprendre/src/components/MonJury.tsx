import React, { useState } from 'react';

interface JuryMember {
    id: number;
    name: string;
    role: string;
    status: 'active' | 'inactive';
    present: boolean;
}

const allPossibleMembers: JuryMember[] = [
    { id: 1, name: 'Bachir Diop', role: 'Membre du jury', status: 'active', present: true },
    { id: 2, name: 'Amadou LY', role: 'Membre du jury', status: 'active', present: true },
    { id: 3, name: 'Babzo', role: 'Membre du jury', status: 'active', present: true },
    { id: 4, name: 'El pepe', role: 'Membre du jury', status: 'inactive', present: false },
    { id: 5, name: 'Fatou Ndiaye', role: 'Membre du jury', status: 'inactive', present: false },
    { id: 6, name: 'Jean Dupont', role: 'Membre du jury', status: 'inactive', present: false },
];

const MonJury: React.FC = () => {
    const [juryMembers, setJuryMembers] = useState<JuryMember[]>([
        { id: 1, name: 'Bachir Diop', role: 'Membre du jury', status: 'active', present: true },
        { id: 2, name: 'Amadou LY', role: 'Membre du jury', status: 'active', present: true },
        { id: 3, name: 'Babzo', role: 'Membre du jury', status: 'active', present: true },
        { id: 4, name: 'El pepe', role: 'Membre du jury', status: 'inactive', present: false },
    ]);
    const [showAddList, setShowAddList] = useState(false);

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

    // Membres qui ne sont pas encore dans le jury
    const availableMembers = allPossibleMembers.filter(
        m => !juryMembers.some(j => j.id === m.id)
    );

    const handleAddMember = (member: JuryMember) => {
        setJuryMembers([...juryMembers, member]);
        setShowAddList(false);
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
                        <button className="btn btn-primary" onClick={() => setShowAddList(true)}>
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

            {/* Modal ou liste pour ajouter un membre */}
            {showAddList && (
                <div className="modal-overlay" onClick={() => setShowAddList(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: 400, margin: "10% auto", background: "#fff", borderRadius: 12, padding: 24 }}>
                        <h4>Ajouter un membre au jury</h4>
                        {availableMembers.length === 0 ? (
                            <p>Aucun membre disponible à ajouter.</p>
                        ) : (
                            <ul style={{ listStyle: "none", padding: 0 }}>
                                {availableMembers.map(member => (
                                    <li key={member.id} style={{ marginBottom: 12 }}>
                                        <button className="btn btn-outline" style={{ width: "100%" }} onClick={() => handleAddMember(member)}>
                                            <i className="fas fa-user-plus"></i> {member.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <button className="btn btn-secondary" style={{ marginTop: 16 }} onClick={() => setShowAddList(false)}>
                            Annuler
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MonJury;
