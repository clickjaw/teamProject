"use strict"
// Main functions or actions
// Create an object that includes:
// image
// scenario
// correct answer
let questionPic = document.getElementById("question-pic");
let qBox = document.getElementById("questionBox");
let preDoc = document.getElementById("preDoc");
let scoreDiv = document.getElementById("scoreDiv");

function Question(q, answer, image){
    this.q = q;
    this.correctAnswer = answer;
    this.image = image;
}
let allObjects = [];
let q1 = new Question("You're in a cave and hear large footsteps approaching. What do you do?", "hide", "");
let q2 = new Question("(Scenario goes here) What do you do?", "hide", "");
let q3 = new Question("(Scenario goes here) What do you do?", "hide", "");
let q4 = new Question("(Scenario goes here) What do you do?", "hide", "");
let q5 = new Question("(Scenario goes here) What do you do?", "hide", "");
let q6 = new Question("(Scenario goes here) What do you do?", "hide", "");
let q7 = new Question("(Scenario goes here) What do you do?", "hide", "");
let q8 = new Question("(Scenario goes here) What do you do?", "hide", "");
let q9 = new Question("(Scenario goes here) What do you do?", "hide", "");
let q10 = new Question("(Scenario goes here) What do you do?", "hide", "");
allObjects.push(q1);
function pickQuestion(){
    let rando = Math.floor(Math.random()*allObjects.length);
    let pickedQuestion = allObjects[rando];
    preDoc.innerHTML = pickedQuestion.image;
    console.log(pickedQuestion.q);
    console.log(pickedQuestion.correctAnswer);
}
pickQuestion();