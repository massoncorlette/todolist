//index is entry point for application 
// import modules, initialize app
import './style.css';
import sidebarIcon from './icons/sidebar.svg';
import initializeSidebarButton from './dom.js';

document.addEventListener("DOMContentLoaded", () => {
  initializeSidebarButton(sidebarIcon);
  console.log("test");
});

