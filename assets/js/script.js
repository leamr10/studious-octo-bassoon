// when start button is clicked, timer starts and question is presented
// 6 questions, once one is finished, the other appears until the final question
// when question is answered incorrectly, 15 seconds subtracted from time
// when all questions are answered or timer reaches 0, game ends
// final score and initial enter screen
// high score screen

var startButton = document.querySelector("#start");
var choicesEl =document.getElementById("choices");
var titlesEl = document.getElementById("questions-title");
var timeEl = document.querySelector(".time")
var secondsLeft = 75;

var questions = [

    {
        question: "Commonly used data types DO Not Include:",
        choices: [
            "1. strings", "2. booleans", "3. alerts", "4. numbers"
        ],
        answer: "3. alerts"
    },
    {   
        question: "The condition in an if/else statement is enclosed with _______. ",
        choices: [
            "1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"
    ],
        answer: "3. parenthesis"
    },
    {   
        question: "Arrays in JavaScript can be used to store ________. ",
        choices: [
            "1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"
    ],
        answer: "4. all of the above"
    },
    {   
        question: "String values must be enclosed within ________ when being assigned to variables. ",
        choices: [
           "1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"
    ],
        answer: "3. quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        choices: [
            "1. JavaScript", "2. terminal/bash", "3. for loops", "4. console log"
     ],
        answer: "4. console log"
    }
];

// this variable is used to keep track of what question the user is on
// once user submits their answer we should increment it (ex: currentQuestion++)
var currentQuestion = 0;





startButton.addEventListener("click", function(event) {
    console.log('working');
    console.log(questions[currentQuestion].question);

    titlesEl.innerText = questions[currentQuestion].question;
    
});

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;

        if (secondsLeft === 0) {
            
        }
    } )
}