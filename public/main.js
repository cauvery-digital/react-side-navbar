const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
  sidebar.classList.toggle('close')
  toggleButton.classList.toggle('rotate')

  closeAllSubMenus()
}

function toggleSubMenu(button){

  if(!button.nextElementSibling.classList.contains('show')){
    closeAllSubMenus()
  }

  button.nextElementSibling.classList.toggle('show')
  button.classList.toggle('rotate')

  if(sidebar.classList.contains('close')){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
  }
}

function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
  })
}

<nav ref={sidebarRef} id="sidebar">

  
<button ref={toggleButtonRef} onClick={toggleSidebar} id="toggle-btn">
<button onClick={(e) => toggleSubMenu(e.currentTarget)} className="dropdown-btn">



  Example

  import React, { useRef } from 'react';

const NavBar = () => {
  const toggleButtonRef = useRef(null);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    sidebarRef.current.classList.toggle('close');
    toggleButtonRef.current.classList.toggle('rotate');
    closeAllSubMenus();
  };

  const toggleSubMenu = (button) => {
    const nextSibling = button.nextElementSibling;

    if (!nextSibling.classList.contains('show')) {
      closeAllSubMenus();
    }

    nextSibling.classList.toggle('show');
    button.classList.toggle('rotate');

    if (sidebarRef.current.classList.contains('close')) {
      sidebarRef.current.classList.toggle('close');
      toggleButtonRef.current.classList.toggle('rotate');
    }
  };

  const closeAllSubMenus = () => {
    const subMenus = sidebarRef.current.getElementsByClassName('show');
    Array.from(subMenus).forEach((ul) => {
      ul.classList.remove('show');
      ul.previousElementSibling.classList.remove('rotate');
    });
  };

  return (
    <nav ref={sidebarRef} id="sidebar">
      <ul>
        <li>
          <span className="logo">coding2go</span>
          <button ref={toggleButtonRef} onClick={toggleSidebar} id="toggle-btn">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
              <path d="m313-480 155 156q11 11 11.5 27.5T468-268q-11 11-28 11t-28-11L228-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T468-692q11 11 11 28t-11 28L313-480Zm264 0 155 156q11 11 11.5 27.5T732-268q-11 11-28 11t-28-11L492-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T732-692q11 11 11 28t-11 28L577-480Z" />
            </svg>
          </button>
        </li>
        {/* Other menu items go here */}
        <li>
          <button onClick={(e) => toggleSubMenu(e.currentTarget)} className="dropdown-btn">
            <span>Create</span>
          </button>
          <ul className="sub-menu">
            <li><a href="#">Folder</a></li>
            <li><a href="#">Document</a></li>
            <li><a href="#">Project</a></li>
          </ul>
        </li>
        {/* Additional items */}
      </ul>
    </nav>
  );
};

export default NavBar;
