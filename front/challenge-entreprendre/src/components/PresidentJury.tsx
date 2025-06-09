import React from 'react';
import { Link } from 'react-router-dom';
import StatCard from './StatCard';
import EvaluationProgress from './EvaluationProgress';
import JuryStatus from './JuryStatus';
import ProjectScoring from '../pages/ProjectScoring';
import ActionItems from './ActionItems';

const PresidentJury: React.FC = () => {
    return (
        <>
            <div className="page-title">
                <h1>Tableau de Bord Président du Jury</h1>
                <p>Gérez vos évaluations, votre jury et la sélection finale</p>
            </div>

            <div className="dashboard-stats">
                <StatCard icon="fas fa-tasks" title="Projets à Évaluer" value="12" />
                <StatCard icon="fas fa-check-circle" title="Évaluations Complétées" value="8" />
                <StatCard icon="fas fa-user-check" title="Membres Présents" value="4/5" />
                <StatCard icon="fas fa-trophy" title="Projets Qualifiés" value="3" />
            </div>

            <div className="dashboard-widgets">
                <EvaluationProgress />
                <JuryStatus />
            </div>

            <div className="dashboard-widgets">
                <ProjectScoring />
                <ActionItems />
            </div>

            <div className="dashboard-actions">
                <Link to="/evaluations-consolidees" className="btn btn-primary">
                    <i className="fas fa-table"></i> Consulter Évaluations Consolidées
                </Link>
                <Link to="/projets-a-evaluer" className="btn btn-primary">
                    <i className="fas fa-clipboard-check"></i> Ajuster Scores
                </Link>
                <Link to="/mon-jury" className="btn btn-primary">
                    <i className="fas fa-users"></i> Gérer Présence Jury
                </Link>
                <Link to="/classement" className="btn btn-primary">
                    <i className="fas fa-trophy"></i> Valider Sélection Finale
                </Link>
            </div>
        </>
    );
};

export default PresidentJury;