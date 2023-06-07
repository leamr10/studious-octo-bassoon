// when start button is clicked, timer starts and question is presented
// 6 questions, once one is finished, the other appears until the final question
// when question is answered incorrectly, 15 seconds subtracted from time
// when all questions are answered or timer reaches 0, game ends
// final score and initial enter screen
// high score screen

var startButton = document.querySelector("#start");
var choicesEl =document.getElementById("choices");
var titlesEl = document.getElementById("questions-title");

var questions = [

    {
        question: "Commonly used data types DO Not Include:",
        choices: [
            "1. strings", "2. booleans", "3. alerts", "4. numbers"
        ],
        answer: "3. alerts"
    },
    {   
    question: "Commonly used data types DO Not Include:",
    choices: [
        "1. strings", "2. booleans", "3. alerts", "4. numbers"
    ],
    answer: "3. alerts"
},
{   
    question: "Commonly used data types DO Not Include:",
    choices: [
        "1. strings", "2. booleans", "3. alerts", "4. numbers"
    ],
    answer: "3. alerts"
},
{   
    question: "Commonly used data types DO Not Include:",
    choices: [
        "1. strings", "2. booleans", "3. alerts", "4. numbers"
    ],
    answer: "3. alerts"
}
];

// this variable is used to keep track of what question the user is on
// once user submits their answer we should increment it (ex: currentQuestion++)
var currentQuestion = 0;



startButton.addEventListener("click", function(event) {
    console.log('working');
    console.log(questions[currentQuestion].question);
    //var questionText = document.createTextNode(questions[currentQuestion].question);
    //titlesEl.appendChild(questionText);

    titlesEl.innerText = questions[currentQuestion].question;
    
});