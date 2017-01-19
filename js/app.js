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
//select its children
//bind editTask to edit button
//bind deleteTask to delete button
//bind taskCompleted to the checkbox
}
addButton.onclick = addTask();

//cycle over incompleteTaskHolder ul list items
  //for each list itemm
  //bind events to list item's children(taskCompleted)


//cycle over completedTaskHolder ul list items
  //for each list itemm
  //bind events to list item's children(taskIncomplete)
