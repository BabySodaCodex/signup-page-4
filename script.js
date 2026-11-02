//console.log("Hello from script.js!");

//delare or define Function
let clubName = "Sunday Book Club";
console.log("Welcome to " + clubName);

let meetingDay = "We meet Sundays ";
console.log(meetingDay);

function sayHi() {
  console.log("Hi! Thanks for visiting.");
}

//call the Function
sayHi();

function sayBye()
{
console.log("Good bye");
}

sayBye();
sayBye();

let nextButton = document.querySelector("#next-btn");
let nextMeeting = document.querySelector("#next-meeting");

//declare show message 
function showNextMeeting() {
  nextMeeting.textContent = "Our next meeting is Sunday, November 8 at 3 PM.";
}

nextButton.addEventListener("click", showNextMeeting);