/* eslint-disable */

let question = {
    title: "gato",
    alternatives: ["dog", "cat", "bird", "fish"],
    correctAnswer: 1
};

let app = {
    start: function() {
        // show alternatives
        let alts = document.querySelectorAll(".alternative");
        
    /*    alts.forEach(function(element, index) {
            element.addEventListener("click", function() {
            // check for correct answer
            this.checkAnswer(index);
            }.bind(this));
         }.bind(this)); */
        
        alts.forEach((element, index) => {
            element.addEventListener("click", () => {
            // check for correct answer
            this.checkAnswer(index);
            });
        });

        // show first question
        this.showQuestion(question);
    },

    showQuestion: function(q) {
        
        //keep track of current question
        this.currentQuestion = q;
        
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
        if(this.currentQuestion.correctAnswer == userSelected) {
            // correct answer
            console.log("Correct!")
        }

        else {
            // incorrect answer
            console.log("Incorrect!")
        }
    }
};

app.start();



