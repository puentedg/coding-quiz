// Quiz questions
var questions = [{
    title: 'Which language is used to structure the webpage?',
    a:'HTML', 
    b:'CSS', 
    c:'JavaScript',
    d:'Python',
    correctAnswer: 'HTML'
    },
{   title: 'What attribute do you use to link your style sheet to HTML?',
    a:'Div', 
    b:'Href', 
    c:'Link',
    d:'Span',
    correctAnswer: 'Href'
    },
{   title: 'What does CSS stands for?',
    a:'Cascading Style Screen', 
    b:'Cascading Screen Style', 
    c:'Clever Style Sheet',
    d:'Cascading Style Sheet',
    correctAnswer: 'Cascading Style Sheet'
    },
{   title: 'What is the golden rule in programming?',
    a:'Keep changing the code, even if it works', 
    b:'IF IT WORKS, DONT TOUCH IT', 
    c:'Never take small brakes',
    d:'Spend 24/7 coding',
    correctAnswer: 'IF IT WORKS, DONT TOUCH IT'
    },
{   title: 'Why should you marry a programmer?',
    a:'They are always coding and wont have time for you',
    b:'They just talk about bugs', 
    c:'They are not afraid to commit.',
    d:'They will sleep and wake up thinking about coding ',
    correctAnswer: 'They are not afraid to commit.'
    
}];

// Quiz variables

const startQuiz = document.querySelector('#start');
const startContainer = document.querySelector('.start-container');
const quizContainer = document.querySelector('#quiz');
const quizQuestion = document.querySelector('.quiz-question');
const btn1 = document.querySelector("#answer1");
const btn2 = document.querySelector("#answer2");
const btn3 = document.querySelector("#answer3");
const btn4 = document.querySelector("#answer4");
const btnGrid = document.querySelector('.btn-grid');
const timerEl = document.getElementById("timer");
const highscoreSectionEl = document.getElementById("highscoreSection");
const rulesContainer = document.querySelector(".rules");
const homeButtonEl = document.getElementById("home-btn");
let index =0;
let timer;
let score=0;
let finalScore = [];
// document.querySelector("#user-score");
let highScore=[];
const initialEl=document.querySelector('.initials');
const resultEl = document.getElementById("result");
const userInput=document.getElementById("user-initials");
const submitBtn=document.getElementById("submit");

 // Remaining time in the quiz in seconds
let quizTime = 60;
function startTimer() { 
    timer = setInterval(function () {
      quizTime--;
      timerEl.textContent = quizTime;
      if (quizTime <= 0) { 
        clearInterval(timer); 
        quizTime = 0; 
        endQuiz()
      }
    }, 1000); 
  }
// Write quiz questions
function generateQuestions () {
quizContainer.classList.replace("hide","show");
rulesContainer.classList.replace("show","hide")

if (index===questions.length) {
    endQuiz();
}
quizQuestion.textContent=questions[index].title
btn1.textContent=questions[index].a
btn2.textContent=questions[index].b
btn3.textContent=questions[index].c
btn4.textContent=questions[index].d
btn1.setAttribute("value",questions[index].a)
btn2.setAttribute("value",questions[index].b)
btn3.setAttribute("value",questions[index].c)
btn4.setAttribute("value",questions[index].d)
};

// Checks users answers
function checkAnswer (userAnswer) {
if (userAnswer===questions[index].correctAnswer) {
console.log("correct");
index++ 
score+=10;
console.log(score)
generateQuestions()
} else {
console.log("wrong");
index++ 
quizTime-=10;
generateQuestions()
}};

// End quiz
function endQuiz () {
    quizContainer.classList.replace("show", "hide")
    initialEl.classList.replace("hide", "show")
    highscoreSectionEl.classList.replace("hide","show");
    clearInterval(timer)
    finalScore=score;
    resultEl.classList.replace("hide","show");
    resultEl.setAttribute("style", "display: flex");
    resultEl.innerHTML = "";
    console.log(resultEl);
}

// Display the highscore page
function displayScore () {
    let highScore=JSON.parse(localStorage.getItem("highScores"))
    console.log(highScore);
    console.log(highScore.length);
    const highscoreListEl = document.getElementById("high-scoreList");
    highscoreSectionEl.setAttribute("style", "display: flex");
    highscoreListEl.innerHTML = ""; 
    // Append each of the highscores in the JSON object
    for (let i = 0; i < highScore.length; i++) {
      let highscoreListItem = document.createElement("li");
      highscoreListItem.textContent = `${highScore[i].initials} - ${highScore[i].score}`; // Format the highscores
    // Append the highscore to the list
      highscoreListEl.appendChild(highscoreListItem); 
    }
  }
// Event that starts the quiz
startQuiz.addEventListener("click", function(){ 
    console.log('click');
    startContainer.style.display = "none"
    startTimer();
    generateQuestions();
});
// Event that takes the value of the users answer
btnGrid.addEventListener("click",(event)=>{
    event.preventDefault()
    let btnClick= this.event.target.value
    console.log(btnClick); 
    checkAnswer(btnClick);
});
// Storage users initials and score
submitBtn.addEventListener("click", ()=>{
    let userInitials = userInput.value;
    console.log(userInitials,finalScore);
    if (userInitials!=="") {
        highScore=JSON.parse(localStorage.getItem("highScores")) || [];
        const userScores={
            initials:userInitials,
            score:finalScore
        }
        highScore.push(userScores);
        localStorage.setItem("highScores",JSON.stringify(highScore))
    }
    displayScore()
})