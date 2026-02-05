// DOMS ELEMENTS  ---------------------------------------------------------
const dom_quiz = document.querySelector("#quiz");
const dom_question = document.querySelector("#question");
const dom_choiceA = document.querySelector("#A");
const dom_choiceB = document.querySelector("#B");
const dom_choiceC = document.querySelector("#C");
const dom_choiceD = document.querySelector("#D");
const dom_score = document.querySelector("#scoreContainer");
const dom_start = document.querySelector("#start");

dom_start.addEventListener("click", onStart);

// DATA  ---------------------------------------------------------
let questions = [
  {
    title: "What does HTML stand for?",
    choiceA: "Hi Thierry More Laught",
    choiceB: "How To move Left",
    choiceC: "Ho Theary Missed the Laundry !",
    choiceD: "Hypertext Markup Language",
    correct: "D",
  },
  {
    title: "What does CSS stand for?",
    choiceA: "Cisco and Super Start",
    choiceB: "Ci So Sa",
    choiceC: "Cascading Style Sheets ",
    choiceD: "I don't know !",
    correct: "C",
  },
  {
    title: "What does JS stand for?",
    choiceA: "Junior stars",
    choiceB: "Justing Star",
    choiceC: "Javascript",
    choiceD: "RonanScript",
    correct: "C",
  },
];
let runningQuestionIndex = 0;
let score = 0;

// FUNCTIONS ---------------------------------------------------------

// Hide a given element
function hide(element) {
  // TODO
  element.style.display = "none";

}

function show(element) {
  // TODO
  element.style.display = "block";
}

function onStart() {
  // Render the current question
  // Display the quiz view,
  hide(dom_start);
  show(dom_quiz);
  renderQuestion(runningQuestionIndex);

}

function renderQuestion(runningQuestionIndex) {
  // Render the current question on the quiz view
  dom_question.innerText = questions[runningQuestionIndex].title;
  dom_choiceA.innerText = questions[runningQuestionIndex].choiceA;
  dom_choiceB.innerText = questions[runningQuestionIndex].choiceB;
  dom_choiceC.innerText = questions[runningQuestionIndex].choiceC;
  dom_choiceD.innerText = questions[runningQuestionIndex].choiceD;

}

function checkAnswer(answer) {
  // Update the score, display the next question or the score view
  console.log(runningQuestionIndex + " "+ "runnig before");
    if(answer==questions[runningQuestionIndex].correct) score++;
     console.log(score +"scores")
    let size = questions.length;
    let nextq= ++runningQuestionIndex;
   console.log(nextq + " "+ "before");
   if(nextq<size){
    renderQuestion(nextq);
     
  }else{

    renderSCore();
  }
  console.log(nextq + " "+ "after");
  console.log(runningQuestionIndex + " "+ "runnig");
}

function renderSCore() {
  // calculate the amount of question percent answered by the user
  // choose the image based on the scorePerCent
  hide(dom_quiz);
  show(dom_score);
const average = ((score / questions.length) * 100).toFixed(2);
  let emo="";
  if(average>=80){
     emo="👽";
  }else if(average>=60){
     emo="😐";
  }else if(average>=40){
     emo="😔";
  }else if(average<20){
     emo="😒";
}  
dom_score.innerText= `      ${emo} \n${average}%  `;

}
// FUNCTIONS ---------------------------------------------------------
show(dom_start);
hide(dom_quiz);
hide(dom_score);
