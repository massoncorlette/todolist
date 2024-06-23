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
  allTasks[];

  makeProject factory(title,notes, complete, date, delete add methods)
    this.tasksArray[];

    function addProject
    function deleteProject


  makeTask factory function(task,complete,important,+ delete and add methods)

    function addTask
      *push to project's tasksArray[], also allTasks[]
    function deleteTask
      *delete from project's tasksArray[], also allTasks[]
    function editTask
      *update task

  function displayImportant()
    importantTasks[];
     *filter allTasks to put into importantTasks


//////////////////////
DOM.js
toggleSidebarButton();   
  toggles sidebar 

clearBody(); (Make's things more modular)
  function to clear DOM in body sense I will be doing it alot

newProject();
  'click' event listener addProject();
    import makeProject();
      user inputs new project title in sidebar
      adds Project title and date to side bar, with edit delete 

deleteProject();
  'click' event listener deleteProject();
    import deleteProject();
      delete option clicked in sidebar
      remove from array and remove from sidebar
      remove projects tasks from allTasks[]

projectDetails();
  'click' event listener for every project in sidebar
   displays project details(tasks, notes, date) in body

newTask();
  'click' event listener to add task in body
   displays task details in body for project

sidebarAllTasks();
    'click' event to display all tasks in body

sidebarImportant();
    'click' event to display all important tasks from any project in body

sidebarCalendar();
    'click' event to display calendar with 
    projects and what is completed


Functionality: Will display in body upon what option is clicked on sidebar. 
I want to aim to use a calendar library. All projects and tasks should 
be deleted and added in their respective arrays. Need for projects and tasks to be saved on clients computer upon reload. 
Have a edit option for every task and project. 

