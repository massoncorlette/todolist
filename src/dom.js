// dom.js

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
