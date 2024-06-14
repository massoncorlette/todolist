//index is entry point for application 
// import modules, initialize app
import './style.css';
import sidebarIcon from './icons/sidebar.svg';

document.addEventListener("DOMContentLoaded", () => {
  const sidebarBtn = document.getElementById('sidebar-icon');
  const btnElement = document.createElement('button');
  const btnSvg = document.createElement('img');

  btnSvg.src = sidebarIcon;
  btnElement.appendChild(btnSvg);
  sidebarBtn.appendChild(btnElement);

});

console.log("test");