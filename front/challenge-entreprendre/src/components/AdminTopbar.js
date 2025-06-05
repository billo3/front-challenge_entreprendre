import React from 'react';

function AdminTopbar() {
    return (
        <div className="admin-topbar">
            <button className="sidebar-toggle">
                <i className="fas fa-bars"></i>
            </button>

            <div className="topbar-search">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Rechercher..." />
            </div>

            <div className="topbar-actions">
                <div className="topbar-notification">
                    <i className="fas fa-bell"></i>
                    <span className="notification-badge">2</span>
                </div>

                <div className="topbar-profile">
                    <i className="fas fa-user-circle"></i>
                    <span>Pierre Martin</span>
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>
        </div>
    );
}

export default AdminTopbar;