import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Sidebar from "../components/navbar/Sidebar";
    
const Error = () => {
  const [isNavClosed, setIsNavClosed] = useState(false);
  const handleSidebarClose = () => {
    setIsNavClosed(!isNavClosed);
  };
  return (
  <>
  <Sidebar onSidebarClose={handleSidebarClose}/>
    <main>
    <div className={isNavClosed ? 'nav-closed' : 'container'}>
      <center>
        <h1>404 No Page Found!</h1>
        <button><Link to="/">Go Home</Link></button>
      </center>
    </div>
    </main>
    </>
  );
};

export default Error;
