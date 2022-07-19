"use strict"
// Main functions or actions
// Create an object that includes:
// image
// scenario
// correct answer
let questionPic = document.getElementById("question-pic");
let qBox = document.getElementById("qBox");

function Question(q, answer, image){
    this.q = q;
    this.correctAnswer = answer;
    this.image = image;
}
let allObjects = [];
let q1 = new Question("You're in a cave and hear large footsteps approaching. What do you do?", "hide", "./assets/teamRocket.jpg");
allObjects.push(q1);
function pickQuestion(){
    let rando = Math.floor(Math.random()*allObjects.length);
    let pickedQuestion = allObjects[rando];
    console.log(pickedQuestion.q);
    console.log(pickedQuestion.correctAnswer);
    //questionPic.setAttribute("src", pickedQuestion.image);
    //questionPic.setAttribute("alt", "Cave");
}
pickQuestion();
let test = document.querySelector("pre");
test.addEventListener('click', function(){
    test.innerHTML = 
})
