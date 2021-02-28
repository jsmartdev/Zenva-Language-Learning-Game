/* eslint-disable */

let question = {
    title: "gato",
    choices: ["dog", "cat", "bird", "fish"],
    answer: 1
};

function showQuestion(q) {
let titelDiv = document.getElementById("title");
titelDiv.textContent = question.title;
let answers = document.querySelectorAll(".choice");
answers.forEach(function(element, index) {
    element.textContent = q.choices[index];
});
}

showQuestion(question);