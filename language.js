/* eslint-disable */

question = {
    title: "gato",
    alternatives: ["dog", "cat", "bird", "fish"],
    correctAnswer: 1
};

function showQuestion(q) {
    // select DOM element

    let titleDiv = document.getElementById("title");

    // modify DOM element

    titleDiv.textContent = q.title;
}

