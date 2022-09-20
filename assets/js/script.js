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
function generateQuestions () {


}

// function showQuestions
// function submitAnswer

// function showResult
// function saveInitials
// function saveScore
startQuiz.addEventListener("click", function(){ 
    console.log('click');
    startContainer.style.display = "none"
});
