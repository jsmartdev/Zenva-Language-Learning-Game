/* eslint-disable */

let question = {
    title: "gato",
    alternatives: ["dog", "cat", "bird", "fish"],
    correctAnswer: 1
};

let questions = [
    {
        title: "gato",
        alternatives: ["dog", "cat", "bird", "fish"],
        correctAnswer: 1    
    },
    
    {
        title: "ave",
        alternatives: ["mouse", "hamster", "lizard", "bird"],
        correctAnswer: 3
    },
    
    {
        title: "rata",
        alternatives: ["cat", "fish", "rat", "shark"],
        correctAnswer: 2 
    },
    
    {
        title: "mosca",
        alternatives: ["fly", "puma", "fish", "dog"],
        correctAnswer: 0 
    }
];

let app = {
    start: function() {
        
        // keep track of current position in the questions array
        this.currentPosition = 0;

        // keep track of player's score
        this.score = 0;
        
        // show alternatives
        let alts = document.querySelectorAll(".alternative");
        
        alts.forEach((element, index) => {
            element.addEventListener("click", () => {
            // check for correct answer
            this.checkAnswer(index);
            });
        });

        // show score
        this.updateScore();

        // show first question
        this.showQuestion(questions[this.currentPosition]);
    },

    showQuestion: function(q) {
        
        // show question title
        let titleDiv = document.getElementById("title");
        titleDiv.textContent = q.title;

        // show alternatives
        let alts = document.querySelectorAll(".alternative");
        alts.forEach(function(element, index) {
            element.textContent = q.alternatives[index];
        });
    },

    checkAnswer: function(userSelected) {

        let currentQuestion = questions[this.currentPosition];

        if(currentQuestion.correctAnswer == userSelected) {
            // correct answer
            this.score++;
            console.log("Correct!")
        }

        else {
            // incorrect answer
            console.log("Incorrect!")
        }

        //update the score
        this.updateScore();

        //increase position
        this.increasePosition();

        // show next question
        this.showQuestion(questions[this.currentPosition]);
    },

    increasePosition: function() {
        // advance the current position
        this.currentPosition++;

        // if reached the end of the question database
        if(this.currentPosition == questions.length) {
            // send back to beginning
            this.currentPosition = 0;
        }
    },

    updateScore: function() {
        let scoreDiv = document.getElementById("score");
        scoreDiv.textContent = `Your Score: ${this.score}`;
    }
};

// initialize the application
app.start();



