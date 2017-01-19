var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first-button
var incompleteTaskHolder = document.getElementById("incomplete-tasks"); //imcomplete-tasks
var completedTaskHolder = document.getElementById("completed-tasks"); //completed-tasks
//Add new Task

var addTask = function(){
  console.log("Add Task...");
  //When button is pressed
  //Create a new list item with the text from new-task:
  //input (checkbox)
  //label
  //input (text)
  //button.edit
  //button.delete
  //each elements, needs to be modified and appended
}
//Edit existing tasks
var editTask = function(){
  console.log("Edit Task...");
  //When the Edit button is pressed
   //if the class of parent is edit mode
   //switch from editmode
   //label text become inputs value
 //else
  //switch to edit mode
  //input value becomes the labels text

 //toggle edit mode on parent
}
//Delete an existing task
var deleteTask = function(){
  console.log("Delete Task...");
  //when delete button is pressed
   //remove parent list item from ul
}
//Mark a task as completed-tasks
var taskCompleted = function(){
  console.log("Task Complete...");
   //when the checkbox is checked
    //append the tast list item to the #completed-tasks
}
//Mark a task as incomplete-tasks
var tastIncomplete = function(){
  console.log("Task Incomplete...");
  //when the checkbox is unchecked we want to append it to #incomplete-tasks
}

var bindTaskEvent = function(taskListItem, checkBoxEventHandler){
//Set the click handler to the addTask function
//select list items its children
var checkbox = taskListItem.querySelector("input[type=checkbox]");
var editButton = taskListItem.querySelector("input[type=edit]");;
var deleteButton = taskListItem.querySelector("input[type=delete]");;
//bind editTask to edit button
editButton.onclick = editTask;

//bind deleteTask to delete button
deleteButton.onclick = deleteTask;
//bind taskCompleted to the checkbox
checkbox.onchange = checkBoxEventHandler;
}
addButton.onclick = addTask();

//cycle over incompleteTaskHolder ul list items
for(var i = 0; i < imcompleteTaskHolder.children.length, i++); {
  //bind events to list item's children(taskCompleted)
  bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}

//cycle over completedTaskHolder ul list items
for(var i = 0; i < completedTaskHolder.children.length, i++){
  //bind events to list item's children(taskCompleted)
  bindTaskEvents(completedTaskHolder.children[i], taskComplete);
}
