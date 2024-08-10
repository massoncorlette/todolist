export {projects, allTasks, importantTasks, completedTasks};

let projects = [];
let allTasks = [];
let importantTasks = [];
let completedTasks = [];

// functions to store and retrieve from local storage
// stringify to ensure array values are strings 

// Projects stored along with all task arrays
// allTasks displayed upon Load?
export function storeArray(key, array) {
  if (Array.isArray(array)) {
    localStorage.setItem(key, JSON.stringify(array));
  } else {
    console.error("not an array.");
  }
};

export function getArray(key) {
  const storedArray = localStorage.getItem(key);
  if (storedArray) {
    return JSON.parse(storedArray);
  } else {
    console.warn(`No data found`);
    return [];
  }
};

export function populateArrays() {
  allTasks = getArray('allTasks');
  importantTasks = getArray('importantTasks');
  completedTasks = getArray('completedTasks');
  projects = getArray('projects');
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

export function deleteTask(tasksArray, selectedTask, key) {
  tasksArray.splice(tasksArray.indexOf(selectedTask), 1);
};

export function addTask(tasksArray, selectedTask, key) {
  const index = tasksArray.indexOf(selectedTask);
  tasksArray.splice(index, 0, selectedTask);
};
//each project will have its own task array
export function makeProject(title) {
  this.title = title;
  this.tasksArray = [];
  this.complete = false;

  return {
    title,
    tasksArray: this.tasksArray,
    complete: this.complete,
  };
};

export function addProject(project) {
  projects.push(project);
  storeArray(project.title, project);
  storeArray('projects', projects);
};

export function deleteProject(project) {
  projects.splice(projects.indexOf(project), 1);
  storeArray(project.title, project);
  storeArray('projects', projects);
};









