// src/types/index.ts (create this file if it doesn’t exist)
export interface Evaluation {
    id: number;
    projectName: string;
    description: string;
    team: string;
    submissionDate: string;
    status: 'Complétée' | 'En cours' | 'À faire';
    score: number | null;
    deadline: string;
    progress: number;
}

export interface Project {
    id: number;
    name: string;
    description: string;
    deadline: string;
    progress: number;
    adjustedScore: string | number;
    statut?: 'Soumis' | 'Incomplet' | 'Qualifié Phase 1';
}

export interface JuryMember {
    id: number;
    name: string;
    role: string;
    status: 'active' | 'inactive';
    progress: number;
    present: boolean;
}

export interface Criterion {
    id: number;
    name: string;
    description: string;
}

// src/types/index.ts (create this file if it doesn’t exist)
export interface ActionItem {
    title: string;
    description: string;
    deadline: string;
    priority: 'high' | 'medium' | 'low';
}

export interface ConsolidatedProject {
    id: number;
    name: string;
    scores: { [key: string]: number };
}

export interface StatCardProps {
    icon: string;
    title: string;
    value: string | number;
}