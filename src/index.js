//index is entry point for application 
// import modules, initialize app
import './style.css';
import sidebarIcon from './icons/sidebar.svg';
import toggleSidebarButton from './dom.js';

document.addEventListener("DOMContentLoaded", () => {
  toggleSidebarButton(sidebarIcon);
  console.log("test");
});

