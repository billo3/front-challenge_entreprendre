import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminTopbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

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

        <div
          className="topbar-profile"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <i className="fas fa-user-circle"></i>
          <span>Billo the GOAT</span>
          <i className="fas fa-chevron-down"></i>
          {isDropdownOpen && (
            <div className="profile-dropdown">
              <Link to="/mon-profil" className="dropdown-item">
                <i className="fas fa-user-circle"></i> Mon Profil
              </Link>
              <Link to="/login" className="dropdown-item logout-btn">
                <i className="fas fa-sign-out-alt"></i> Déconnexion
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminTopbar;