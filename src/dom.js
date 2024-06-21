// dom.js
import sidebarIcon from './icons/sidebar.svg';
import calendarIcon from './icons/schedule.png';
import todoIcon from './icons/note.png';
import completedIcon from './icons/approved.png';
import importantIcon from './icons/flag.png';

export default function toggleSidebarButton() {
  const main = document.querySelector('main');
  const sidebar = document.querySelector('.sidebar-container');
  const sidebarBtn = document.getElementById('sidebar-icon');
  const todoContainer = document.getElementById('todo');
  const importantContainer = document.getElementById('important');
  const calendarContainer = document.getElementById('calendar');
  const completedContainer = document.getElementById('completed');
  const btnElement = document.createElement('button');
  const btnSvg = document.createElement('img');
  const todoPNG = document.createElement('img');
  const importantPNG = document.createElement('img');
  const calendarPNG = document.createElement('img');
  const completedPNG = document.createElement('img');
  
  btnSvg.src = sidebarIcon;

  btnElement.appendChild(btnSvg);
  sidebarBtn.appendChild(btnElement);

  btnElement.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    main.classList.toggle('full');
  });

  todoPNG.src = todoIcon;
  todoPNG.classList.add('icons');
  todoContainer.appendChild(todoPNG);
  sidebar.appendChild(todoContainer);

  importantPNG.src = importantIcon;
  importantPNG.classList.add('icons');
  importantContainer.appendChild(importantPNG);
  sidebar.appendChild(importantContainer);

  calendarPNG.src = calendarIcon;
  calendarPNG.classList.add('icons');
  calendarContainer.appendChild(calendarPNG);
  sidebar.appendChild(calendarContainer);

  completedPNG.src = completedIcon;
  completedPNG.classList.add('icons');
  completedContainer.appendChild(completedPNG);
  sidebar.appendChild(completedContainer);
};




// making sure to focus on DOM only, not logic
//export default function newProject(); {



//export default function projectDetails(); {



//export default function newTask(); {



