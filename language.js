/* eslint-disable */

let app = {
    start: function() {
        // show alternatives
        let alts = document.querySelectorAll(".alternative");
        alts.forEach(function(element, index) {
            element.addEventListener("click", function() {
            // chceck for correct answer
            console.log("Check Correct Answer");
            });
        });

        // show first question
        this.showQuestion(question);
    },

    showQuestion: function() {
        // show question title
        let titleDiv = document.getElementById("title");
        titleDiv.textContent = q.title;

        // show alternatives
        let alts = document.querySelectorAll(".alternative");
        alts.forEach(function(element, index) {
            element.textContent = q.alternatives[index];
        });
    }
};

question = {
    title: "gato",
    alternatives: ["dog", "cat", "bird", "fish"],
    correctAnswer: 1
};

function start() {
    
};

function showQuestion(q) {
    

start();



