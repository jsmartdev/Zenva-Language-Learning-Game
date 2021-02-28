/* eslint-disable */

let question = {
    title: "gato",
    choices: ["dog", "cat", "bird", "fish"],
    correct: 1
};

// function for starting the application
function start() {
    // show possible answers
    let answers = document.querySelectorAll(".choice");
    answers.forEach(function(element, index) {
        element.addEventListener("click", function() {
            //check correct answer
            console.log("Check for correct answer!")
        })
    });
    // show first question
    showQuestion(question);
};

// function for showing the question
function showQuestion(q) {
    // show question title
    let titleDiv = document.getElementById('title');
    titleDiv.textContent = q.title; 
    // show alternatives
    let answers = document.querySelectorAll('.choice');
    answers.forEach(function(element, index){
    element.textContent = q.alternatives[index];
    });
}

start();