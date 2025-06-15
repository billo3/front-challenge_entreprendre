import React from 'react';

interface StatCardProps {
    icon: string;
    title: string;
    value: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value }) => {
    return (
        <div className="stat-card">
            <div className="stat-icon">
                <i className={icon}></i>
            </div>
            <div className="stat-info">
                <h3>{title}</h3>
                <p>{value}</p>
            </div>
        </div>
    );
};

export default StatCard;