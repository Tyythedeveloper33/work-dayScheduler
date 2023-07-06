

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
 
