export {projects, allTasks, importantTasks};

// logic goes here
let projects = [];
let allTasks = [];
let importantTasks = [];

//factory functions so each project & task has methods and properties
export function makeTask(task,notes,date) {
  this.task = task;
  this.notes = notes;
  this.date = date;
  this.important = false;
  this.complete = false;

  return {
    important: this.important,
    complete: this.complete
  }

};

export function deleteTask(tasksArray, selectedTask) {
  tasksArray.splice(tasksArray.indexOf(selectedTask), 1);
};

//each project will have its own task array
export function makeProject(title) {
  this.title = title;
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
    tasksArray: this.tasksArray,
    complete: this.complete,
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




