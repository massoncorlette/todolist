import sidebarIcon from './icons/sidebar.svg';
import calendarIcon from './icons/schedule.png';
import todoIcon from './icons/note.png';
import completedIcon from './icons/approved.png';
import importantIcon from './icons/flag.png';
import { format } from "date-fns";
import {makeProject, makeTask, displayImportant, projects, allTasks, importantTasks} from './helpers';


// npm run liveview script command to update liveview
// making sure to focus on DOM only, not logic

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
      const allProjects = document.querySelector('#allProjects');
      
      if (projectInput.value) {
        const projectName = projectInput.value;
        const newProjectAdd = document.createElement('div');
        newProjectAdd.classList.add('addedProjects');
        const projectNameTxt = document.createElement('p');
        
        projectNameTxt.innerHTML = projectName;
        newProjectAdd.appendChild(projectNameTxt);
        allProjects.appendChild(newProjectAdd);
        sidebarProjectContainer.appendChild(allProjects);
        
        const newProject = new makeProject(projectName);
        projects.push(newProject);
        console.log(projects);

        newProjectAdd.addEventListener('click', () => {
          let projectTxt = newProjectAdd.innerText;
          projectDetails(projectTxt, newProject.tasksArray);
          console.log(newProject);
        });

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

const projectDetails = function(project, projectArray) {
  clearMain();

  let projectInfoContainer = document.createElement('div');
  let titleBtnContainer = document.createElement('div');
  let addTaskBtn = document.createElement('div');
  let addTaskContainer = document.createElement('div');
  let title = document.createElement('p');
  let addTxt = document.createElement('p');

  titleBtnContainer.classList.add('titleBtnContainer');
  projectInfoContainer.classList.add('projectInfoContainer');
  addTaskBtn.classList.add('addTaskBtn');
  addTaskContainer.classList.add('addTaskContainer');

  title.innerText = project;
  addTxt.innerText = "Add task";
 
  titleBtnContainer.appendChild(title);
  projectInfoContainer.appendChild(titleBtnContainer);
  addTaskContainer.appendChild(addTxt);
  addTaskContainer.appendChild(addTaskBtn);
  projectInfoContainer.appendChild(addTaskContainer);

  main.appendChild(projectInfoContainer);

  for (let i = 0; i < projectArray.length; i++) {
    displayTasks(projectArray[i].task,projectArray[i].notes, projectArray[i].date);

  };
  
  addTaskBtn.addEventListener('click', () => {
    projectInfoContainer.removeChild(addTaskContainer);
    const taskForum = document.createElement('form');
    const taskInput = document.createElement('input');
    const taskDate = document.createElement('input');
    const taskDetails = document.createElement('textarea');
    const submitBtn = document.createElement('button');
    const cancelSubmit = document.createElement('button');
    const taskContainer = document.createElement('div');
    const inputDateContainer = document.createElement('div'); 
    const inputBtnContainer = document.createElement('div');
    
    taskInput.placeholder = 'Enter new task';
    taskDetails.placeholder = 'Notes:';
    
    taskInput.classList.add('taskInput');
    taskDetails.classList.add('taskDetails');
    taskDate.classList.add('taskDate');
    submitBtn.classList.add('submitBtn');
    cancelSubmit.classList.add('cancelSubmit');
    
    taskInput.type = 'text';
    submitBtn.type = 'submit';
    taskDate.type = 'date';
    submitBtn.textContent = 'Add Task';
    cancelSubmit.textContent = 'Cancel';
    taskContainer.classList.add('taskContainer');
    inputDateContainer.classList.add('inputContainer'); 
    
    inputDateContainer.appendChild(taskInput);
    inputDateContainer.appendChild(taskDate);
    inputBtnContainer.appendChild(submitBtn);
    inputBtnContainer.appendChild(cancelSubmit);
    
    taskForum.appendChild(inputDateContainer); 
    taskForum.appendChild(taskDetails);
    taskForum.appendChild(inputBtnContainer);
    
    taskContainer.appendChild(taskForum);
    projectInfoContainer.appendChild(taskContainer);

    cancelSubmit.addEventListener('click', () => {
      projectInfoContainer.appendChild(addTaskContainer);
      projectInfoContainer.removeChild(taskContainer);
    });

    submitBtn.addEventListener('click', (event) => {
      event.preventDefault();

      const taskName = taskInput.value;
      const taskNotes = taskDetails.value;
      const taskDateValue = taskDate.value;

      let formattedTaskDate = null;
      if (taskDateValue) {
        formattedTaskDate = format(new Date(taskDateValue), 'dd/MM/yyyy');
      }

      const newTask = new makeTask(taskName, taskNotes, formattedTaskDate);
      allTasks.push(newTask);
      projectArray.push(newTask);

      displayTasks(taskName, taskNotes, formattedTaskDate);

      projectInfoContainer.removeChild(taskContainer);
      projectInfoContainer.appendChild(addTaskContainer);
    });
  });
  function displayTasks(task, notes, date) {
    const taskInformation = document.createElement('div');
    const taskTitle = document.createElement('div');
    const taskNoteContainer = document.createElement('div');
    const taskDateContainer = document.createElement('div');

    taskInformation.classList.add('taskInformation');
    taskDateContainer.classList.add('taskDateContainer');

    taskTitle.innerText = task;
    taskInformation.appendChild(taskTitle);

    if (notes) {
      taskNoteContainer.innerText = notes;
    }
      
    let formattedTaskDate = null;
    if (date) {
      formattedTaskDate = date;
      taskDateContainer.innerText = formattedTaskDate;
      taskInformation.appendChild(taskDateContainer);
    }
    console.log(allTasks);
    projectInfoContainer.appendChild(taskInformation);
    projectInfoContainer.appendChild(addTaskContainer);
  }
};
