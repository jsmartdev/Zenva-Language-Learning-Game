/* eslint-disable */

let question = {
    title: "gato",
    choices: ["dog", "cat", "bird", "fish"],
    correct: 1
};

let questions = [
    {
    title: "gato",
    choices: ["dog", "cat", "bird", "fish"],
    correct: 1
    },
    {
    title: "ave",
    choices: ["mouse", "hamster", "lizard", "bird"],
    correct: 3
    },
    {
    title: "rata",
    choices: ["cat", "fish", "rat", "shark"],
    correct: 2
    },
    {
    title: "mosca",
    choices: ["fly", "puma", "fish", "dog"],
    correct: 0
}
]

let app = {
    start: function(){

        this.currentPositon = 0;
        // show possible answers
        let answers = document.querySelectorAll(".choice");
        answers.forEach(function(element, index) {
            element.addEventListener("click", function() {
            //check correct answer
            console.log("Check for correct answer!")
            })
        });
    // show first question
    this.showQuestion(questions[this.currentPosition]);
    },

    showQuestion: function(question) {
        //keep track of the current question
        this.currentQuestion = q;
        // show question title
        let titleDiv = document.getElementById('title');
        titleDiv.textContent = question.title; 
        // show alternatives
        let answers = document.querySelectorAll('.choice');
        answers.forEach(function(element, index){
        element.textContent = question.choices[index];
        });
    },

    checkAnswer: function(userSelected) {
        if(this.currentQuestion.correctAnswer == userSelected)  {
            //correct
            console.log("Correct!");
        }
        else {
            //not correct
            console.log("Wrong!");
        }

        //increase position
        this.increasePosition();
        
        //show next question
        this.showQuestion(questions[this.currentPosition])
    },

    increasePosition: function() {
        this.currentPosition++;
        if(this.currentPosition == questions.length) {
            this.currentPosition = 0;
        }
    }
};

app.start();