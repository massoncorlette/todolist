import sidebarIcon from './icons/sidebar.svg';
import calendarIcon from './icons/schedule.png';
import todoIcon from './icons/note.png';
import completedIcon from './icons/approved.png';
import importantIcon from './icons/flag.png';
import {makeProject, makeTask, displayImportant, projects, allTasks} from './helpers';


// npm run liveview script command to update liveview

const main = document.getElementById('main-body');
const body = document.querySelector('body');
const sidebar = document.querySelector('.sidebar-container');

function clearMain() {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
};

export default function toggleSidebarButton() {
  const homeContainer = document.querySelector('.home-container');
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
    homeContainer.classList.toggle('open');
    main.classList.toggle('main-body-full');

    if (!body.contains(sidebar)) {
      body.appendChild(sidebar);
    } else {
      body.removeChild(sidebar);
    }
  });

  todoPNG.src = todoIcon;
  todoPNG.classList.add('icons');
  todoContainer.appendChild(todoPNG);
  homeContainer.appendChild(todoContainer);
  
  const todoText = document.createElement('p');
  todoText.textContent = 'All Tasks';
  todoContainer.appendChild(todoText);

  importantPNG.src = importantIcon;
  importantPNG.classList.add('icons');
  importantContainer.appendChild(importantPNG);
  homeContainer.appendChild(importantContainer);
  
  let importantText = document.createElement('p');
  importantText.textContent = 'Important';
  importantContainer.appendChild(importantText);

  calendarPNG.src = calendarIcon;
  calendarPNG.classList.add('icons');
  calendarContainer.appendChild(calendarPNG);
  homeContainer.appendChild(calendarContainer);
  
  const calendarText = document.createElement('p');
  calendarText.textContent = 'Calendar';
  calendarContainer.appendChild(calendarText);

  completedPNG.src = completedIcon;
  completedPNG.classList.add('icons');
  completedContainer.appendChild(completedPNG);
  homeContainer.appendChild(completedContainer);
  
  const completedText = document.createElement('p');
  completedText.textContent = 'Completed';
  completedContainer.appendChild(completedText);

  const projectContainer = document.createElement('div');
projectContainer.id = 'project-container';

const heading = document.createElement('div');
heading.id = 'h3';
heading.textContent = 'Projects';
projectContainer.appendChild(heading);


const addContainer = document.createElement('div');
addContainer.id = 'add-container';

const addParagraph = document.createElement('p');
addParagraph.textContent = 'Add project';
addContainer.appendChild(addParagraph);

const addButton = document.createElement('button');
addButton.id = 'add-btn';
addContainer.appendChild(addButton);

projectContainer.appendChild(addContainer);

  sidebar.appendChild(homeContainer);
  sidebar.appendChild(projectContainer);
};

// making sure to focus on DOM only, not logic
export function newProject() {
  let addProjectBtn = document.getElementById('add-container');
  let projectInput = document.createElement('input');
  let cancelBtn = document.createElement('button');
  cancelBtn.id = 'cancel-btn';
  const addBtn = document.querySelector('#add-btn');
  const btnDiv = document.createElement('div');
  projectInput.type = 'text';
  projectInput.id = 'projectInput';
  projectInput.placeholder = "Enter project name";


  addProjectBtn.addEventListener('click', (event) => {
    btnDiv.id = 'btnDiv';
    addProjectBtn.innerHTML = '';
    addProjectBtn.appendChild(projectInput);
    addProjectBtn.appendChild(addBtn);
    projectInput.focus();
    projectInput.classList.add('focus');
    addProjectBtn.classList.add('active');
    btnDiv.appendChild(addBtn);
    btnDiv.appendChild(cancelBtn);
    addProjectBtn.appendChild(btnDiv);
    event.stopPropagation();
    projectInput.addEventListener('focus', () => {
      projectInput.classList.add('focus');
    });
    
    addBtn.addEventListener('click', (event) => {
      const sidebarProjectContainer = document.querySelector('#project-container');
      if (projectInput.value) {
        const projectName = projectInput.value;
        const newProjectAdd = document.createElement('div');
        newProjectAdd.classList.add('addedProjects');
        const projectNameTxt = document.createElement('p');
        
        projectNameTxt.innerHTML = projectName;
        newProjectAdd.appendChild(projectNameTxt);
        sidebarProjectContainer.appendChild(newProjectAdd);
        clearProjectAdd();
        event.stopPropagation();
      }
    });
    cancelBtn.addEventListener('click', (event) => {
      clearProjectAdd();
      event.stopPropagation();
    });
  });

  function clearProjectAdd() {
    addProjectBtn.innerHTML = '<p>Add project</p>'; 
    addProjectBtn.appendChild(addBtn);
    addProjectBtn.classList.remove('active');
    projectInput.classList.remove('focus');
    projectInput.value = '';
  }
};

export function projectDetails() {
  const allProject = document.querySelectorAll('#project-container');

  allProject.forEach(project => {
    project.addEventListener('click', () => {
      clearMain();
    });
  });
};




//export default function projectDetails(); {



//export default function newTask(); {



