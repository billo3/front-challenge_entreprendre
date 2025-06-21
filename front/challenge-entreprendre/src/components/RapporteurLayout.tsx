import React from 'react';
import { Outlet } from 'react-router-dom';
import RapporteurSidebar from './RapporteurSidebar';
import RapporteurTopbar from './RapporteurTopbar';

const RapporteurLayout: React.FC = () => {
  console.log('RapporteurLayout rendered');
  return (
    <>
      <RapporteurSidebar />
      <main className="admin-main">
        <RapporteurTopbar />
        <div className="admin-content">
          <Outlet /> {/* Rend le composant correspondant à la route enfant */}
        </div>
      </main>
    </>
  );
};

export default RapporteurLayout;