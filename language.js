/* eslint-disable */

let question = {
    title: "gato",
    choices: ["dog", "cat", "bird", "fish"],
    correct: 1
};

let app = {
    start: function(){
        // show possible answers
    let answers = document.querySelectorAll(".choice");
    answers.forEach(function(element, index) {
        element.addEventListener("click", function() {
            //check correct answer
            console.log("Check for correct answer!")
        })
    });
    // show first question
    this.showQuestion(question);
    },

    showQuestion: function(question) {
        // show question title
        let titleDiv = document.getElementById('title');
        titleDiv.textContent = q.title; 
        // show alternatives
        let answers = document.querySelectorAll('.choice');
        answers.forEach(function(element, index){
        element.textContent = q.alternatives[index];
        });
    }
};

app.start();