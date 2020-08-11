// These are referencing the id's in the html
buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

/* buttonEl.addEventListener("click", function() {
    //Create a new task item
    var listItemEl = document.createElement("li");
    //Style the new task item
    listItemEl.className = "task-item";
    // Add the text
    listItemEl.textContent = "This is a new task.";
    // Append this element to the task list
    tasksToDoEl.appendChild(listItemEl);
});
*/

var createTaskHandler = function() {
    //Create a new task item
    var listItemEl = document.createElement("li");
    //Style the new task item
    listItemEl.className = "task-item";
    // Add the text
    listItemEl.textContent = "This is a new task.";
    // Append this element to the task list
    tasksToDoEl.appendChild(listItemEl);
}

buttonEl.addEventListener("click", createTaskHandler);