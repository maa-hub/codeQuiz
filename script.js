var questions = [
    {
      question: "______ is an html attribute which references an external link",
      choices: ["src", "href", "alt", "id"],
      answer: "href",
    },
    {
      question:
        "What html tag is the main heading of a page wrapped in?",
      choices: ["header", "h1", "h3", "any of the above"],
      answer: "h1",
    },

    {
        question:
          "______ is the code used to save data to local storage in js",
        choices: ["localStorage.setItem()", "localStorage.", "document.localStorage", "local.storage"],
        answer: "localStorage.setItem()",
      },
      
   {   question:
      "When is localStorage data cleared?",
    choices: ["reload page", "computer restart", "does not clear", "close browser"],
    answer: "does not clear",
  },
  
{
  question:
  "The condition in an if / else statement is enclosed within ____.",
choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
answer: "parentheses",
},
    
{
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },

{
  question:
  "An example of a library for styling is ______",
choices: ["jQuery", "Bootstrap", "javaScript", "HTML"],
answer: "Bootstrap",
},


{
    question:
    "What does DOM stand for?",
  choices: ["Document Object Model", "Display Object Management", "Digital Ordinance Model", "Desktop Oriented Mode"],
  answer: "Document Object Model",
  },

{
    question:
    "What are the commands for moving a local repo to a remote in github",
  choices: ["git add", "git commit -m", "git push", "all of the above"],
  answer: "all of the above",
  },  

];
  
  var questionEl = document.querySelector("#question");
  var optionListEl = document.querySelector("#option-list");
  var questionResultEl = document.querySelector("#question-result");
  var timerEl = document.querySelector("#timer");
  var startQuizButton = document.querySelector("#start-quiz-button");
  var startQuizDiv = document.querySelector("#start-quiz");
  var quizContent = document.querySelector("#quiz-content");
  var highScoreDiv = document.querySelector("#display-highscores");
  var displayScore = document.querySelector("#display-score");
  var endQuizDiv = document.querySelector("#end-quiz");
  var highScoreInitials = document.querySelector("#high-score-initials");
  var submitScoreButton = document.querySelector("#submit-score");
  var highScoreDisplayName = document.querySelector("#highscores");
  var clearHighScoreButton = document.querySelector("#clear-highscore-button");
  var playAgainButton = document.querySelector("#go-back-button");


  var questionIndex = 0;
  var correctCount = 0;
  
  var time = 60;
  var intervalId;
  
  highScoreDiv.style.display = "none";
  endQuizDiv.style.display = "none";

  // function to render question
  function renderQuestion() {
    endQuizDiv.style.display = "none";
    if (questionIndex >= 9) {
        return;
    }
  else{
    questionEl.textContent = questions[questionIndex].question;
  }
    optionListEl.innerHTML = "";
    questionResultEl.innerHTML = "";
  
    var choices = questions[questionIndex].choices;
    var choicesLength = choices.length;
  
    for (var i = 0; i < choicesLength; i++) {
      var questionListItem = document.createElement("li");
      questionListItem.textContent = choices[i];
      questionListItem.className = "option-list"
      optionListEl.append(questionListItem);
    }
  }

  // timer function
  function updateTime() {
    time--;
    timerEl.textContent = "Time left: " + time;
    if (time <= 0) {
        clearInterval(intervalId);
        endQuiz();
    }   
  }

  // Start quiz function 
function startQuiz(){
    startQuizDiv.style.display = "none";
    highScoreDiv.style.display = "none";
    endQuizDiv.style.display = "none";
    renderQuestion();
     // time interval of 1 second
    timerEl.textContent = "Time left: " + time;
    intervalId = setInterval(updateTime, 1000);
    quizContent.style.display = "block";
}

// function to end quiz at the end of the questions array or when time =0
  function endQuiz() {
    quizContent.style.display = "none";
    endQuizDiv.style.display = "flex";
    displayScore.innerHTML = "Quiz over, You scored " + correctCount;
    clearInterval(intervalId);
  }

  // function for showing the score you got
  function highscore(){
      if(!highScoreInitials.value) {
          alert("You must enter your initials");
          return false;
      } else{
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        var currentUser = highScoreInitials.value.trim();
        var currentHighscore = {
            name : currentUser,
            score : correctCount
        };
        endQuizDiv.style.display = "none";
        highScoreDiv.style.display = "flex";
        
        savedHighscores.push(currentHighscore);
        localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
        generateHighscores();
      } 
      }

      // function to generate high scores to local storage
      function generateHighscores(){
        endQuizDiv.style.display = "none";
        highScoreDisplayName.innerHTML = "";
        var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        for (i=0; i<highscores.length; i++){
            var newNameSpan = document.createElement("li");
            var newScoreSpan = document.createElement("li");
            newNameSpan.textContent = highscores[i].name;
            newScoreSpan.textContent = highscores[i].score;
            highScoreDisplayName.appendChild(newNameSpan);
            highScoreDisplayName.appendChild(newScoreSpan);
        }
    }

      submitScoreButton.addEventListener("click", highscore);
  
// function to render next question
  function nextQuestion() {
    questionIndex++;
    if (questionIndex >= questions.length || time<=0) {
    endQuiz();
    clearInterval(intervalId);
    }
    else{
        renderQuestion();
    }
  }
  
  // function to check correct and incorrect answers 
  function checkAnswer(event) {
    // clearInterval(intervalId);
    if (event.target.matches("li")) {
      var answer = event.target.textContent;
      if (answer === questions[questionIndex].answer) {
        questionResultEl.textContent = "Correct!😃";
        questionResultEl.className = "correct-result"
        correctCount++;
        
      } else {
        questionResultEl.textContent = "Incorrect!😔";
        time = time - 10;
        questionResultEl.className = "incorrect-result"
      }
    }
    setTimeout(nextQuestion, 2000);
  }

  // function to clear the high scores
  function clearHighScore(){
      window.localStorage.clear();
      highScoreDisplayName.textContent = "";
  }

  // function to take quiz again
  function quizAgain (){
    highScoreDiv.style.display = "none";
    endQuizDiv.style.display = "none";
    startQuizDiv.style.display = "flex";
    time = 60;
    correctCount = 0;
    questionIndex = 0;
    
  }

  startQuizButton.addEventListener("click",startQuiz);
  optionListEl.addEventListener("click", checkAnswer);
  clearHighScoreButton.addEventListener("click", clearHighScore);
  playAgainButton.addEventListener("click", quizAgain);
