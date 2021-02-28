/* eslint-disable */

question = {
    title: "gato",
    alternatives: ["dog", "cat", "bird", "fish"],
    correctAnswer: 1
};

function start() {
    // show alternatives
    let alts = document.querySelectorAll(".alternative");
    alts.forEach(function(element, index) {
        element.addEventListener("click", function() {
            // chceck for correct answer
            console.log("Check Correct Answer");
        });
    });
};

function showQuestion(q) {
    // show question title
    let titleDiv = document.getElementById("title");
    titleDiv.textContent = q.title;

    // show alternatives
    let alts = document.querySelectorAll(".alternative");
    alts.forEach(function(element, index) {
        element.textContent = q.alternatives[index];
    });
}

start();



