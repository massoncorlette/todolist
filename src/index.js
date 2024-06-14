//index is entry point for application 
// import modules, initialize app
import './style.css';
import sidebarIcon from './icons/sidebar.svg';

document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector('#main-body');
  const sidebar = document.querySelector('.sidebar-container');
  const sidebarBtn = document.getElementById('sidebar-icon');
  const btnElement = document.createElement('button');
  const btnSvg = document.createElement('img');

  btnSvg.src = sidebarIcon;
  btnElement.appendChild(btnSvg);
  sidebarBtn.appendChild(btnElement);

  btnElement.addEventListener('click', () => {
    sidebar.innerHTML = '';
  });
});

console.log("test");