var questions = [
  {
    title: "What does HTML stand for?",
    choiceA: "Hi Thierry More Laught",
    choiceB: "How To move Left",
    choiceC: "Ho Theary Missed the Laundry !",
    choiceD: "Hypertext Markup Language",
    correct: "D"
  },
  {
    title: "What does CSS stand for?",
    choiceA: "Cisco and Super Start",
    choiceB: "Ci So Sa",
    choiceC: "Cascading Style Sheets ",
    choiceD: "I don't know !",
    correct: "C"
  },
  {
    title: "What does JS stand for?",
    choiceA: "Junior stars",
    choiceB: "Justing Star",
    choiceC: "Javascript",
    choiceD: "RonanScript",
    correct: "C"
  }
];
let i=0;
const dom_addq=document.querySelector("#add-btn");
const dom_qlist=document.querySelector("#questionlist");
const dialog = document.querySelector("#create-newQ");

function renderQuestion(){
    for(i;i<questions.length;i++){
        let card = document.createElement("div");
        card.className="q-card";
        let title = document.createElement("p")
        title.className="q-title";
        title.innerText=questions[i].title;
        
        let ctaBtn= document.createElement("div");
        ctaBtn.className="cta-btn";
        let editBtn = document.createElement("button");
        editBtn.className = "q-btn edit-btn";
        editBtn.innerText = "✏"; 

        let deleteBtn = document.createElement("button");
        deleteBtn.className = "q-btn delete-btn";
        deleteBtn.innerText = "🗑"; 
        
        card.appendChild(title);
        ctaBtn.appendChild(editBtn);
        ctaBtn.appendChild(deleteBtn);
        card.appendChild(ctaBtn);
        dom_qlist.appendChild(card);
    }


}
function openDialog(){
    dialog.showModal();
}
function closeDialog(){
    dialog.close();
}

renderQuestion();