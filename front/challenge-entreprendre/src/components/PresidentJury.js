import React from 'react';
import StatCard from './StatCard';
import EvaluationProgress from './EvaluationProgress';
import JuryStatus from './JuryStatus';
import ProjectScoring from './ProjectScoring';
import ActionItems from './ActionItems';

function PresidentJury() {
    return (
        <>
            <div className="page-title">
                <h1>Tableau de Bord Président du Jury</h1>
                <p>Gérez vos évaluations et celles de votre jury</p>
            </div>

            <div className="dashboard-stats">
                <StatCard icon="fas fa-tasks" title="Projets à Évaluer" value="12" />
                <StatCard icon="fas fa-check-circle" title="Évaluations Complétées" value="8" />
                <StatCard icon="fas fa-user-check" title="Membres Actifs" value="4/5" />
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
        </>
    );
}

export default PresidentJury;