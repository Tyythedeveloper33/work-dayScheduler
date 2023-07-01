// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

//get current hour using Day.js in 12-hour format
var currentHour = dayjs().format("H");
// shows the displayed hour in the console
console.log(currentHour);
var timeBlocks = document.getElementsByClassName("time-block");
for (var i = 0; i < timeBlocks.length; i++) {
  var block = timeBlocks[i];
  
  var blockHour = block.id.split("-")[1]
  
var integer = parseInt(blockHour)

  // remove "AM" or "PM" from block hour
 // blockHour = blockHour.slice(0, -2);
  //if (dayjs(blockHour, "H").isBefore(dayjs(currentHour, "H"), "hour")) {
    if( integer < currentHour) {
    // past time block
    
    block.classList.add("past");
  } else if (blockHour === currentHour) {
    // current time block
    
    block.classList.add("present");
  } else {
    // future time block
    
    block.classList.add("future");
  }
};
// creating dat}e element & appending date element
var dayWeek = dayjs().format('dddd M/D/YY');
document.getElementById("currentDay").textContent = "Today is " + dayWeek;
document.getElementById("colorKey").textContent = 'Grey = Past-Time, Red = Current-Time, Green = Future-Time';
 
//loop through each time block
//$(".time-block").each(function() {
// extract the hour from the timeblocks id
//var blockHour = parseInt($(this).attr("id").split("-")[1]);
//console.log(blockHour)
// compare the block hour with the current hour
//if(blockHour < currentHour) {
  //past time block
  //$(this).removeClass("present", "future").addClass("past");
//} else if(blockHour === currentHour) {
  //current time block
 // $(this).removeClass("past", "future").addClass("present");
//} else{
  //future time block
 // $(this).removeClass("past", "present").addClass("future");
//}
//});

//function to save the user input to local storage
function saveToLocalStorage(){
const timeBlocks = document.getElementsByClassName("time-block");
  for (var i = 0; i < timeBlocks.length; i++) {
    const block = timeBlocks[i];
    const id = block.id;
    const description = block.querySelector(".description").value;
    localStorage.setItem(id, description);
  }
  }
// function to load saved user input from local storage
function loadFromLocalStorage(){
  const timeBlocks = document.getElementsByClassName("time-block");
  for (var i = 0; i < timeBlocks.length; i++) {
    const block = timeBlocks[i];
    const id = block.id;
    const savedDescription = localStorage.getItem(id);
    if(savedDescription){
      block.querySelector(".description").value = savedDescription
    }
  }
}
// save button click event handler
const saveButtons = document.querySelectorAll(".saveBtn");
saveButtons.forEach((button)=> {
  button.addEventListener("click", saveToLocalStorage);
});
// load saved data on page load
document.addEventListener("DOMContentLoaded", loadFromLocalStorage);
 
