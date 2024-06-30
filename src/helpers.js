export {projects, allTasks, importantTasks};

// logic goes here
let projects = [];
let allTasks = [];
let importantTasks = [];

//factory functions so each project & task has methods and properties
export default function makeTask(task) {
  this.task = task;
  this.important = false;
  this.complete = false;

  function addTask(task, tasksArray) {
    tasksArray.push(task);
  };

  function deleteTask(tasksArray) {
    tasksArray.splice(tasksArray.indexOf(task), 1);
  };
  return {
    addTask:addTask,
    deleteTask:deleteTask
  };
};

//each project will have its own task array
export function makeProject(title,notes,date) {
  this.title = title;
  this.notes = notes;
  this.date = date;
  this.tasksArray = [];
  this.complete = false;

  function addProject(project) {
    projects.push(project);
  };

  function deleteProject(project) {
    projects.splice(projects.indexOf(project), 1);
  };

  return {
    title,
    notes,
    date,
    tasksArray,
    complete,
    addProject,
    deleteProject
  };
};

export function displayImportant() {
  for (let i = 0; i < allTasks.length; i++) {
    if (allTasks[i].tasksArray.important === true) {
      importantTasks.push(allTasks[i]);
    }
  };
  return importantTasks;
};




