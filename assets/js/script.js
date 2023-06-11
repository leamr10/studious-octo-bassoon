// when start button is clicked, timer starts and question is presented
// 6 questions, once one is finished, the other appears until the final question
// when question is answered incorrectly, 15 seconds subtracted from time
// when all questions are answered or timer reaches 0, game ends
// final score and initial enter screen
// high score screen

var startButtonEl = document.querySelector("#start-button");
var startScreenEl = document.querySelector("#start-screen");
var clearHighScoresEl = document.querySelector("#clear-highscores");
var backHighScoresEl = document.querySelector("#back-highscores");
var initialsFormEl = document.querySelector("#initials-form");
var initialsEl = document.querySelector("#initials");
initialsEl.setAttribute("style", "display: none");
clearHighScoresEl.setAttribute("style", "display: none");
backHighScoresEl.setAttribute("style", "display: none");
var initialsInputEl = document.querySelector("#initials-input");
var choicesEl = {
    1: document.querySelector("#choice1"),
    2: document.querySelector("#choice2"),
    3: document.querySelector("#choice3"),
    4: document.querySelector("#choice4")
};
var titlesEl = document.getElementById("questions");
var timeEl = document.querySelector("#time")
var secondsLeft = 75;

var questions = {

    0: ["Commonly used data types DO Not Include: ", "A: strings", "B: booleans", "C: alerts", "D: numbers"],
    1: ["The condition in an if/else statement is enclosed with _______", "A: quotes", "B: curly brackets", "C: parenthesis", "D: square brackets"],
    2: ["Arrays in JavaScript can be used to store _______", "A: numbers and strings", "B: other arrays", "C: booleans", "D: all of the above"],
    3: ["String values must be enclosed within ______ when being assigned to variables.", "A: commas", "B: curly brackets", "C: quotes", "D: parenthesis"],
    4: ["A very useful tool used during development and debugging for printing content to the debugger is: ", "A: JavaScript", "B: terminal/bash", "C: for loops", "D: console log"],

};

var answers = ["C. alerts", "C: parenthesis", "D: all of the above", "C: quotes", "D: console log"]


var currentQuestion = 0;

var correctAnswer;

function startQuiz (event) {
    setTime();
    startScreenEl.setAttribute("style", "display: none");
    alignQuestions();
}

function alignQuestions (event) {
    titlesEl.textContent = questions[currentQuestion][0];
    choicesEl[1].textContent = questions[currentQuestion][1];
    choicesEl[2].textContent = questions[currentQuestion][2];
    choicesEl[3].textContent = questions[currentQuestion][3];
    choicesEl[4].textContent = questions[currentQuestion][4];
}


startButtonEl.addEventListener("click", startQuiz);


function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft+ " seconds left";
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            secondsLeft = 0;
        }
    } , 1000)
};

choicesEl[1].addEventListener("click", function() {
    currentQuestion++;
    alignQuestions();
});

choicesEl[2].addEventListener("click", function() {
    currentQuestion++;
    alignQuestions();
})

choicesEl[3].addEventListener("click", function() {
    currentQuestion++;
    alignQuestions();
})

choicesEl[4].addEventListener("click", function() {
    currentQuestion++;
    alignQuestions();
})
