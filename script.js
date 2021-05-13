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
  
  var questionIndex = 0;
  var correctCount = 0;
  
  var time = 20;
  var intervalId;
  
  