// dom.js
import sidebarIcon from './icons/sidebar.svg';
import calendarIcon from './icons/schedule.png';

export default function toggleSidebarButton() {
  const main = document.querySelector('main');
  const sidebar = document.querySelector('.sidebar-container');
  const sidebarBtn = document.getElementById('sidebar-icon');
  const calendarContainer = document.getElementById('calendar')
  const btnElement = document.createElement('button');
  const btnSvg = document.createElement('img');
  const calendarPNG = document.createElement('img');


  btnSvg.src = sidebarIcon;

  btnElement.appendChild(btnSvg);
  sidebarBtn.appendChild(btnElement);

  btnElement.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    main.classList.toggle('full');
  });

  calendarPNG.src = calendarIcon;
  calendarPNG.classList.add('icons');
  calendarContainer.appendChild(calendarPNG);
  sidebar.appendChild(calendarContainer);
};




// making sure to focus on DOM only, not logic
//export default function newProject(); {



//export default function projectDetails(); {



//export default function newTask(); {



