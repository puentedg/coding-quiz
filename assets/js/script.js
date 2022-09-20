var questions = [{
    title: 'Which language is used to structure the webpage?',
    op1:'HTML', 
    op2:'CSS', 
    op3:'JavaScript',
    op4:'Python',
    correctAnswer: 'HTML'
    },
{   title: 'What attribute do you use to link your style sheet to HTML?',
    op1:'div', 
    op2:'href', 
    op3:'link',
    op4:'span',
    correctAnswer: 'href'
}];
const startQuiz = document.querySelector('#start');
const startContainer = document.querySelector('.start-container');
const quizContainer = document.querySelector('#quiz');
const quizQuestion = document.querySelector('.quiz-question');
const btn1 = document.querySelector("#answer1");
const btn2 = document.querySelector("#answer2");
const btn3 = document.querySelector("#answer3");
const btn4 = document.querySelector("#answer4");
const btnGrid = document.querySelector('.btn-grid');
let index =0;

function generateQuestions () {
quizContainer.classList.replace("hide","show");
if (index===questions.length) {
    alert ("end quiz")
}
quizQuestion.textContent=questions[index].title
btn1.textContent=questions[index].op1
btn2.textContent=questions[index].op2
btn3.textContent=questions[index].op3
btn4.textContent=questions[index].op4
btn1.setAttribute("value",questions[index].op1)
btn2.setAttribute("value",questions[index].op2)
btn3.setAttribute("value",questions[index].op3)
btn4.setAttribute("value",questions[index].op4)
};

// function showQuestions
// function submitAnswer

// function showResult
// function saveInitials
// function saveScore
startQuiz.addEventListener("click", function(){ 
    console.log('click');
    startContainer.style.display = "none"
    generateQuestions();
});
btnGrid.addEventListener("click", function (event){
    event.preventDefault()
    let btnClick= this.event.target.value
    console.log(btnClick);
})