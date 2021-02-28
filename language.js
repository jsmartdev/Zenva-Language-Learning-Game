/* eslint-disable */

let question = {
    title: "gato",
    choices: ["dog", "cat", "bird", "fish"],
    answer: 1
};

function showQuestion(q) {
    // show question title
    let titelDiv = document.getElementById("title");
    titelDiv.textContent = question.title;
    // show possible answers
    let answers = document.querySelectorAll(".choice");
    answers.forEach(function(element, index) {
        element.textContent = q.choices[index];
        element.addEventListener("click", function() {
            //check correct answer
            if(q.correctAnswer = index) {
                console.log("Congratulations, you have the correct answer!")
            }
            else {
                console.log("Sorry, you are incorrect.")
            }
    })
});
}

showQuestion(question);

let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    console.log("clicked!");
});