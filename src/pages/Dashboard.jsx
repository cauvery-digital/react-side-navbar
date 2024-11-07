import React, { useState } from 'react';
import Sidebar from '../components/navbar/Sidebar'

function Dashboard() {
  const [isNavClosed, setIsNavClosed] = useState(false);
  const handleSidebarClose = () => {
    setIsNavClosed(!isNavClosed);
  };
  return (
  <>
  <Sidebar onSidebarClose={handleSidebarClose}/>
    <main>
    <div className={isNavClosed ? 'nav-closed' : 'container'}>
        <h2>Dashboard</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis porro iure quaerat aliquam! Optio dolorum in eum provident, facilis error repellendus excepturi enim dolor deleniti adipisci consectetur doloremque, unde maiores odit sapiente. Atque ab necessitatibus laboriosam consequatur eius similique, ex dolorum eum eaque sequi id veritatis voluptates perspiciatis, cupiditate pariatur.</p>
      </div>

    </main> 
    </>
  );
}

export default Dashboard;
