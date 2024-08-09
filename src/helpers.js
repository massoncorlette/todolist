export {projects, allTasks, importantTasks, completedTasks};

let projects = [];
let allTasks = [];
let importantTasks = [];
let completedTasks = [];

// functions to store and retrieve from local storage
// stringify to ensure array values are strings 
function storeArray(key, array) {
  if (Array.isArray(array)) {
    localStorage.setItem(key, JSON.stringify(array));
  } else {
    console.error("not an array.");
  }
};

function getArray(key) {
  const storedArray = localStorage.getItem(key);
  if (storedArray) {
    return JSON.parse(storedArray);
  } else {
    console.warn(`No data found`);
    return [];
  }
};

//factory functions so each project & task has methods and properties
export function makeTask(task,notes,date) {
  this.task = task;
  this.notes = notes;
  this.date = date;
  this.important = false;
  this.complete = false;

  return {
    task:task,
    notes:notes,
    date:date,
    important: this.important,
    complete: this.complete
  }
};

export function deleteTask(tasksArray, selectedTask) {
  tasksArray.splice(tasksArray.indexOf(selectedTask), 1);
};

export function addTask(tasksArray, selectedTask) {
  const index = tasksArray.indexOf(selectedTask);
  tasksArray.splice(index, 0, selectedTask);
};
//each project will have its own task array
export function makeProject(title) {
  this.title = title;
  this.tasksArray = [];
  this.complete = false;

  function addProject(project) {
    projects.push(project);
    storeArray('projects', projects);
  };

  function deleteProject(project) {
    projects.splice(projects.indexOf(project), 1);
    storeArray('projects', projects);
  };

  return {
    title,
    tasksArray: this.tasksArray,
    complete: this.complete,
    addProject,
    deleteProject
  };
};









