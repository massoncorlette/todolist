export {projects, allTasks, importantTasks, completedTasks};
import { compareAsc } from "date-fns";

// logic goes here
let projects = [];
let allTasks = [];
let importantTasks = [];
let completedTasks = [];

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

export function orderTasks() {
  return allTasks.sort((a, b) => {
  
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return compareAsc(dateA, dateB);
  });
}








