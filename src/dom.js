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
import { compareAsc, compareDesc, format } from "date-fns";
import {storeArray, getArray, makeProject, addProject, deleteProject, makeTask, addTask, deleteTask, projects, allTasks, importantTasks, completedTasks, orderTasks} from './helpers';


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
const starterTxt = document.getElementById('startertxt');

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
  const sidebarProjectContainer = document.querySelector('#project-container');
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
        addProject(newProject);
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
  addTxt.id = "addtxt";
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

    toggleComplete.addEventListener('click', () => {
      if (completedImg.src === checkBox) {
        completedImg.src = checkBoxFilled;
        task.complete = true;
        completedTasks.push(task);
        storeArray("completedTasks", completedTasks);
      } else {
        completedImg.src = checkBox;
        task.complete = false;
        deleteTask(completedTasks, task);
        storeArray("completedTasks", completedTasks);
      };
    });

    toggleImportant.addEventListener('click', () => {
      if (importantImg.src === toggleImportantIcon) {
        importantImg.src = toggleImportantFill;
        task.important = true;
        importantTasks.push(task);
        storeArray('importantTasks', importantTasks);
      } else {
        importantImg.src = toggleImportantIcon
        task.important = false;
        deleteTask(importantTasks, task);
        storeArray('importantTasks', importantTasks);
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
      storeArray('allTasks', allTasks);
      storeArray(title.innerText, projectArray);
      console.log(allTasks);
      if (task.important === true) {
        deleteTask(importantTasks, task);
        storeArray('importantTasks', importantTasks);
      };
      if (task.complete === true) {
        deleteTask(completedTasks, task);
        storeArray('completedTasks', completedTasks);
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
      addTaskForum(taskInput, taskDetails, editBoolean, projectArray, task);
    })
    return taskInformation;
  };

  //Made my elements too early now I have this very specific function to bail me out
  //lesson learned..
  function displayAllTasks(taskArray) {

    if (main.firstElementChild && main.firstElementChild.classList.contains('projectInfoContainer')) {
     
      const projectSelector = document.querySelector('.projectInfoContainer');
      
      const title = projectSelector.firstElementChild;
      
      while (projectSelector.firstChild) {
          projectSelector.removeChild(projectSelector.firstChild);
      }
      projectSelector.appendChild(title);
 
      main.appendChild(projectSelector);
  } else {
      while (main.firstChild) {
        main.removeChild(main.firstChild);
      }
      setupOrderByContainer(taskArray);
    }
    for (let i = 0; i < taskArray.length; i++) {
      let taskToDisplay = displayTasks(taskArray[i].task, taskArray[i].notes, taskArray[i].date, taskArray[i]);
      if (main.firstElementChild && main.firstElementChild.classList.contains('projectInfoContainer')) {
        projectInfoContainer.appendChild(taskToDisplay);
      } else {
        main.appendChild(taskToDisplay);
      };
    };
    projectInfoContainer.appendChild(addTaskContainer);
  };
  // direct function call to keep tasks displayed for every project
  displayAllTasks(projectArray);

  function addTaskForum(taskInput, taskDetails, editBoolean, projectTasks, task) {
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
        projectInfoContainer.removeChild(taskContainer);
        projectInfoContainer.appendChild(addTaskContainer);
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

      if (editBoolean) {
        addTask(allTasks, newTask);
        addTask(projectTasks, newTask);

        deleteTask(allTasks, task);
        deleteTask(projectTasks, task);
        main.removeChild(taskContainer); 

        displayAllTasks(projectArray);
        projectInfoContainer.appendChild(addTaskContainer);
        storeArray('allTasks', allTasks);
        storeArray(title.innerText, projectArray);

        if (task.important === true) {
          deleteTask(importantTasks, task);
          storeArray('importantTasks', importantTasks);
        };
        if (task.complete === true) {
          deleteTask(completedTasks, task);
          storeArray('completedTasks', completedTasks);
        };
        
      } else {
        allTasks.push(newTask);
        projectArray.push(newTask);
        projectInfoContainer.removeChild(taskContainer);
        displayAllTasks(projectArray); 
        projectInfoContainer.appendChild(addTaskContainer); 
        storeArray('allTasks', allTasks);    
        storeArray(title.innerText, projectArray);
      }
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

  function setupOrderByContainer(taskArray) {
    const orderByContainer = document.createElement('div');
    const orderTaskBtn = document.createElement('div');
    const orderTxt = document.createElement('p');
    
    const dropdown = document.createElement('div');
    dropdown.className = 'dropdown-content';

    const dateSelectionAsc = document.createElement('a');
    dateSelectionAsc.textContent = 'Newest';

    const dateSelectionDesc = document.createElement('a');
    dateSelectionDesc.textContent = 'Oldest';

    dropdown.appendChild(dateSelectionAsc);
    dropdown.appendChild(dateSelectionDesc);
    dropdown.className = 'dropdown-content';
  
    orderByContainer.classList.add('orderByContainer');
    orderTaskBtn.classList.add('orderTaskBtn');
  
    orderTxt.innerText = "Order by";
    orderTxt.id = "ordertxt";
  
    orderByContainer.appendChild(orderTxt);
    orderByContainer.appendChild(orderTaskBtn);
    orderByContainer.appendChild(dropdown);
  
    main.appendChild(orderByContainer);

    orderTaskBtn.addEventListener('click',  () => {
      dropdown.classList.toggle("show");
    });

    dateSelectionAsc.addEventListener('click', () => {
      let orderedArray = orderTasks(taskArray);
      console.log(orderedArray);
      displayAllTasks(orderedArray);
    });

    dateSelectionDesc.addEventListener('click', () => {
      let desc = true;
      let orderedArray = orderTasks(taskArray, desc);
      console.log(orderedArray);
      displayAllTasks(orderedArray);
    });
  };

  function orderTasks(taskArray,desc) {
    return taskArray.sort((a, b) => {
    
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
  
      if (desc) {
        return compareAsc(dateA, dateB);
      } else {
        return compareDesc(dateA, dateB);
      }
      });
    };
  

  allProjects.forEach(project => {
    project.addEventListener('click', () => {
      resetOptions();
    });
  });
  
  todo.addEventListener('click', () => {
    clearMain();
    if (allTasks.length === 0) {
      main.appendChild(starterTxt);
    } else {
      displayAllTasks(allTasks);
    }
    resetOptions(); 
    todo.classList.add('optionsClicked');
  });
  
  important.addEventListener('click', () => {
    clearMain();
    if (importantTasks.length === 0) {
      main.appendChild(starterTxt);
    } else {
      displayAllTasks(importantTasks);
    }
    resetOptions(); 
    important.classList.add('optionsClicked');
  });
  
  completed.addEventListener('click', () => {
    clearMain();
    if (completedTasks.length === 0) {
      main.appendChild(starterTxt);
    } else {
      displayAllTasks(completedTasks);
    }
    resetOptions(); 
    completed.classList.add('optionsClicked');
  });
};

export function setTheme() {
  const root = document.documentElement;
  const newTheme = root.className === 'dark' ? 'light' : 'dark';
  root.className = newTheme;
}
const toggleSwitch = document.querySelector('#toggleClick');
toggleSwitch.addEventListener('click', setTheme);