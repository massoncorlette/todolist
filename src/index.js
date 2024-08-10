//index is entry point for application 
// import modules, initialize app
import './style.css';
import sidebarIcon from './icons/sidebar.svg';
import toggleSidebarButton from './dom.js';
import { newProject } from './dom.js';
import { allTasks, populateArrays } from './helpers.js';

document.addEventListener("DOMContentLoaded", () => {
  toggleSidebarButton(sidebarIcon);
  newProject();
  console.log("test");
});

