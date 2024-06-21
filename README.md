# todolist
Focusing on Single Responsibility Principle, web pack, plugins, general review.  

Want to take my time to keep my code modular, and logical with keeping DOM seperated from app logic - following S.R.P

The design I want to go for a modern minimalistic look that most websites seem to adhere to nowadays. 
Something of the looks of this:
https://culturedcode.com/things/features/

Libraries: https://github.com/date-fns/date-fns
https://www.npmjs.com/package/date-fns

To-do object properties: title, details(optional), duedate(optional), important toggle, checklist toggle

Want to add an extra feature for habit tracker,
where for everyday you can add if you did 
the habit. (E.g - exercise, studying, reading).

PSEUDO:
INDEX.js
display upon DOMload
  initializeSidebarButton();

//////////////
Helpers.js

  projects[];

  addProject factory(title,notes, complete, date, delete add methods)
    this.tasksArray[];

  addTask factory function(task,complete,delete and add methods)

    
/////////////
DOM.js
toggleSidebarButton();   
  toggles sidebar 

newProject();
  'click' event listener addProject();
    import addProject();
      user inputs new project details

projectDetails();
  'click' event listener for every project in sidebar
   displays project details(tasks, notes, date) in body

newTask();
  'click' event listener to add task
   import addProject.addTasks();
   displays task details in list

sidebarAllTasks();
    'click' event to display all tasks in body

sidebarImportant();
    'click' event to display all important tasks from any project in body

sidebarCalendar();
    'click' event to display calendar with 
    projects and what is completed




