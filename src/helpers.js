// logic goes here
let projects = [];

function makeUser(name, age) {
  return {
    name, 
    age,  
  };
};

//factory functions so each project & task has methods and properties
function makeTask(task) {
  this.task = task;
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
  }
}

function makeProject(title,notes,date) {
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




