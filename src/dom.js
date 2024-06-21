// dom.js
import sidebarIcon from './icons/sidebar.svg';

export default function toggleSidebarButton(sidebarIcon) {
  const main = document.querySelector('main');
  const sidebar = document.querySelector('.sidebar-container');
  const sidebarBtn = document.getElementById('sidebar-icon');
  const btnElement = document.createElement('button');
  const btnSvg = document.createElement('img');

  btnSvg.src = sidebarIcon;
  btnElement.appendChild(btnSvg);
  sidebarBtn.appendChild(btnElement);

  btnElement.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    main.classList.toggle('full');
  });
};

// making sure to focus on DOM only, not logic
export default function newProject(); {

}

export default function projectDetails(); {

}

export default function newTask(); {

}

