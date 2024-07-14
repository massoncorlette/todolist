import sidebarIcon from './icons/sidebar.svg';
import calendarIcon from './icons/schedule.png';
import todoIcon from './icons/note.png';
import completedIcon from './icons/approved.png';
import toggleImportantIcon from './icons/star.svg';
import toggleImportantFill from './icons/filledstar.svg';
import checkBox from './icons/checkbox.svg';
import checkBoxFilled from './icons/checkboxfilled.svg';
import importantIcon from './icons/flag.png';
import edit from './icons/edit.svg';
import { format } from "date-fns";
import {makeProject, makeTask, deleteTask, projects, allTasks, importantTasks, completedTasks} from './helpers';


//use splice(startIndex, deleteCount, items): Adds or removes elements from array when update edited task
//use filter for todo tasks on all tasks page

const main = document.getElementById('main-body');
const body = document.querySelector('body');
const sidebar = document.querySelector('.sidebar-container');
const important = document.getElementById('important');
const todo = document.getElementById('todo');
const calendar = document.getElementById('calendar');
const completed = document.getElementById('completed');
const allOptions = document.querySelectorAll('.options');
const allProjects = document.querySelectorAll('.addedProjects');

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

function resetOptions() {
  allOptions.forEach(option => {
    option.classList.remove('optionsClicked'); 
  });
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
          resetOptions();
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

//main body DOM 
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

  let taskColorToggle = true;
  // start of task main
  const displayTasks = function(taskname, notes, date, task) {
    const taskInformation = document.createElement('div');
    const taskTitle = document.createElement('div');
    const toggleNotes = document.createElement('div');
    const toggleComplete = document.createElement('div');
    const toggleImportant = document.createElement('div');
    const titleToggleContainer = document.createElement('div');
    const titleDateContainer = document.createElement('div');
    const taskNoteContainer = document.createElement('div');
    const taskDateContainer = document.createElement('div');
    const taskEditContainer = document.createElement('div');
    const completedImg = document.createElement('img');
    const importantImg = document.createElement('img');
    const settingImg = document.createElement('img');

     if (taskColorToggle) {
      taskInformation.classList.add('taskInformation');
      } else {
          taskInformation.classList.add('taskInformationAlt');
      }
      taskColorToggle = !taskColorToggle; 

    taskInformation.classList.add('taskInformation');
    taskTitle.classList.add('taskTitle');
    taskDateContainer.classList.add('taskDateContainer');
    toggleNotes.classList.add('toggleNotes');
    toggleComplete.classList.add('toggleCompleted');
    toggleImportant.classList.add('toggleImportant');
    titleToggleContainer.classList.add('titleToggleContainer');
    titleDateContainer.classList.add('titleDateContainer');
    taskNoteContainer.classList.add('taskNoteContainer');
    taskEditContainer.classList.add('taskEditContainer');
    settingImg.classList.add('settingIcon');

    taskTitle.innerText = taskname;
    taskNoteContainer.innerText = notes;

    if (task.complete === true) {
      completedImg.src = checkBoxFilled; 
    } else {
      completedImg.src = checkBox;
    }
    completedImg.classList.add('toggleCompleted');
    toggleComplete.appendChild(completedImg);

    if (task.important === true) {
      importantImg.src = toggleImportantFill;
    } else {
      importantImg.src = toggleImportantIcon;
    }
    importantImg.classList.add('importantImg');
    toggleImportant.appendChild(importantImg);

    titleToggleContainer.appendChild(toggleComplete);
    titleToggleContainer.appendChild(toggleImportant);
    titleToggleContainer.appendChild(taskTitle);
    titleToggleContainer.appendChild(toggleNotes);
    titleDateContainer.append(titleToggleContainer);
      
    if (date) {
      taskDateContainer.innerText = date;
      titleDateContainer.appendChild(taskDateContainer);
    }

    settingImg.src = edit;
    taskEditContainer.appendChild(settingImg);
    
    const dropdown = document.createElement('div');
    dropdown.className = 'dropdown-content';

    const editSelection = document.createElement('a');
    editSelection.textContent = 'Edit';

    const deleteSelection = document.createElement('a');
    deleteSelection.textContent = 'Delete';

    dropdown.appendChild(editSelection);
    dropdown.appendChild(deleteSelection);

    taskEditContainer.appendChild(dropdown);

    titleDateContainer.appendChild(taskEditContainer);

    taskInformation.appendChild(titleDateContainer);
    projectInfoContainer.appendChild(taskInformation);
    projectInfoContainer.appendChild(addTaskContainer);

    toggleComplete.addEventListener('click', () => {
      if (completedImg.src === checkBox) {
        completedImg.src = checkBoxFilled;
        task.complete = true;
        completedTasks.push(task);
      } else {
        completedImg.src = checkBox;
        task.complete = false;
        deleteTask(completedTasks, task);
      };
    });

    toggleImportant.addEventListener('click', () => {
      if (importantImg.src === toggleImportantIcon) {
        importantImg.src = toggleImportantFill;
        task.important = true;
        importantTasks.push(task);
      } else {
        importantImg.src = toggleImportantIcon
        task.important = false;
        deleteTask(importantTasks, task);
      };
    });

    toggleNotes.addEventListener('click', () => {
      if (notes) {
        taskNoteContainer.innerText = notes;
      }
      if (!taskInformation.contains(taskNoteContainer)) {
        taskInformation.appendChild(taskNoteContainer);
      } else {
        taskInformation.removeChild(taskNoteContainer);
      }
      taskNoteContainer.classList.toggle('open');
      toggleNotes.classList.toggle('open')
    });

    taskEditContainer.addEventListener('click', () => {
      dropdown.classList.toggle("show");
    });
    deleteSelection.addEventListener('click', () => {
      if (main.firstChild.classList.contains('projectInfoContainer')) {
        projectInfoContainer.removeChild(taskInformation);
      } else {
        main.removeChild(taskInformation);
      }     
      deleteTask(allTasks, task);
      deleteTask(projectArray, task);
      console.log(allTasks);
      if (task.important === true) {
        deleteTask(importantTasks, task);
      };
      if (task.complete === true) {
        deleteTask(completedTasks, task);
      };
    });
    editSelection.addEventListener('click', () => {
      const taskInput = document.createElement('input');
      const taskDetails = document.createElement('textarea');
  
      taskInput.classList.add('taskInput');
      taskDetails.classList.add('taskDetails');

      taskInput.value = taskname;
      taskDetails.innerHTML = notes;

      const editBoolean = true;
      addTaskForum(taskInput, taskDetails, editBoolean);
    })
    return taskInformation;
  };

  window.onclick = function(event) {
    if (!event.target.matches('.settingIcon')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      };
    };
  };

  function displayAllTasks(taskArray) {
    for (let i = 0; i < taskArray.length; i++) {
      displayTasks(taskArray[i].task, taskArray[i].notes, taskArray[i].date, taskArray[i]);
    };
  };
  // direct function call to keep tasks displayed for every project
  displayAllTasks(projectArray);

  function addTaskForum(taskInput, taskDetails, editBoolean) {
    const taskForum = document.createElement('form');
    const taskDate = document.createElement('input');
    const submitBtn = document.createElement('button');
    const cancelSubmit = document.createElement('button');
    const taskContainer = document.createElement('div');
    const inputDateContainer = document.createElement('div'); 
    const inputBtnContainer = document.createElement('div');
    
    taskDate.classList.add('taskDate');
    submitBtn.classList.add('submitBtn');
    cancelSubmit.classList.add('cancelSubmit');
    
    taskInput.type = 'text';
    submitBtn.type = 'submit';
    taskDate.type = 'date';
    submitBtn.textContent = 'Add Task';
    cancelSubmit.textContent = 'Cancel';
    inputDateContainer.classList.add('inputContainer'); 

    editBoolean ? taskContainer.classList.add('taskContainerEdit') : taskContainer.classList.add('taskContainer') && projectInfoContainer.removeChild(addTaskContainer);
    
    inputDateContainer.appendChild(taskInput);
    inputDateContainer.appendChild(taskDate);
    inputBtnContainer.appendChild(submitBtn);
    inputBtnContainer.appendChild(cancelSubmit);
    
    taskForum.appendChild(inputDateContainer); 
    taskForum.appendChild(taskDetails);
    taskForum.appendChild(inputBtnContainer);
    
    taskContainer.appendChild(taskForum);

    editBoolean ? main.appendChild(taskContainer) : projectInfoContainer.appendChild(taskContainer);

    cancelSubmit.addEventListener('click', () => {
      if (!editBoolean) {
        projectInfoContainer.appendChild(addTaskContainer);
        projectInfoContainer.removeChild(taskContainer);
      } else {
        main.removeChild(taskContainer);
      }
    });

    submitBtn.addEventListener('click', (event) => {
      event.preventDefault();

      const taskName = taskInput.value;
      const taskNotes = taskDetails.value;
      const taskDateValue = taskDate.value;

      let formattedTaskDate = null;
      if (taskDateValue) {
        formattedTaskDate = format(new Date(taskDateValue), 'MM/dd/yyyy');
      }

      const newTask = new makeTask(taskName, taskNotes, formattedTaskDate);
      allTasks.push(newTask);
      projectArray.push(newTask);

      displayTasks(taskName, taskNotes, formattedTaskDate, newTask);

      projectInfoContainer.removeChild(taskContainer);
      projectInfoContainer.appendChild(addTaskContainer);
    });
  };

  addTaskBtn.addEventListener('click', () => {
    const taskInput = document.createElement('input');
    const taskDetails = document.createElement('textarea');

    taskInput.classList.add('taskInput');
    taskDetails.classList.add('taskDetails');

    taskInput.placeholder = 'Enter new task';
    taskDetails.placeholder = 'Notes:';

    const editBoolean = false;

    addTaskForum(taskInput, taskDetails, editBoolean);
  });
 // sidebar clicking logic
 // ADD a section for alltasks that shows uncompleted
  function displayTaskType(taskArray) {
    clearMain();
    for (let i = 0; i < taskArray.length; i++) {
      let addedTask = displayTasks(taskArray[i].task, taskArray[i].notes, taskArray[i].date, taskArray[i]);
      main.appendChild(addedTask);    
    }
  };

  function filterUncompleteTasks(task) {
    if (task.complete === false) {
      return task;
    }
  };

  allProjects.forEach(project => {
    project.addEventListener('click', () => {
      resetOptions();
    });
  });
  
  todo.addEventListener('click', () => {
    displayTaskType(allTasks);
    resetOptions(); 
    todo.classList.add('optionsClicked');
  });
  
  important.addEventListener('click', () => {
    displayTaskType(importantTasks);
    resetOptions(); 
    important.classList.add('optionsClicked');
  });
  
  completed.addEventListener('click', () => {
    displayTaskType(completedTasks);
    resetOptions(); 
    completed.classList.add('optionsClicked');
  });
};
