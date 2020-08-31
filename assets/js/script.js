var score = 0;
var startQuiz = document.querySelector("#start-btn");
var timerEl = document.querySelector("#timer");
var timeLeft = 75;
var questionEl = document.querySelector("#question");
var mainEl = document.querySelector("#main");
var choicesList = document.querySelector("#choice-buttons");
var shuffledQs, currentQIndex;
var answerButtons = document.getElementsByClassName("choice-btn");
var op1 = document.getElementById("choice-1");
var op2 = document.getElementById("choice-2");
var op3 = document.getElementById("choice-3");
var op4 = document.getElementById("choice-4");
var signalEl = document.getElementById('signal');


function quizCountdown() {
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        if (timeLeft >= 1) {
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            score = timeLeft;
        }
    }, 1000);
}

 var quizQuestions = [
     //q-0
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
      },
        //q-1
      {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
      },
        //q-2
      {
        title: "Arrays in JavaScript can be used to store ____.",
        choices: [
          "numbers and strings",
          "other arrays",
          "booleans",
          "all of the above"
        ],
        answer: "all of the above"
      },
        //q-3
      {
        title:
          "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
      },
        //q-4
      {
        title:
          "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
      }
 ]

 var jsQuiz = function(){
     console.log("started");
    shuffledQs = quizQuestions.sort(() => Math.random() - 0.5);
    currentQIndex = 0;
     quizCountdown();
     mainEl.classList.add("hide");
     startQuiz.classList.add("hide");
     setNextQuestion();
 }

 var setNextQuestion = function(){
     displayQ(shuffledQs[currentQIndex])

 }

 var displayQ = function(currentQ){
     console.log(currentQ)
    questionEl.innerText = currentQ.title;
    choicesList.classList.remove("hide");
    for(var i = 0; i < 4 ; i ++){
        console.log(currentQ.choices[i])
        answerButtons[i].innerText = currentQ.choices[i];
    }     
    console.log(currentQ.answer)
    op1.addEventListener("click" , function(){
        if(op1.innerText == currentQ.answer)
            console.log("correct!")
            else timeLeft -= 10;
    })
    op2.addEventListener("click" , function(){
        if(op1.innerText == currentQ.answer)
            console.log("correct!")
            else timeLeft -= 10;
    })
    op3.addEventListener("click" , function(){
        if(op1.innerText == currentQ.answer)
            console.log("correct!")
            else timeLeft -= 10;
    })
    op4.addEventListener("click" , function(){
        if(op1.innerText == currentQ.answer)
            console.log("correct!")
            else timeLeft -= 10;
    })


 }


startQuiz.addEventListener("click", jsQuiz)
