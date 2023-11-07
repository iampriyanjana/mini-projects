let nextButton= document.getElementById("nextBtn");
let answerButtons=document.getElementById("answer-buttons");
let questionElement=document.getElementById("question");

const questions=[
    {
        question:"Which is the largest animal in the world",
        answers:[
            {text:"shark",correct:false},
            {text:"blue whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"Which is the smallest country in the world",
        answers:[
            {text:"vatican city",correct:true},
            {text:"bhutan",correct:false},
            {text:"nepal",correct:false},
            {text:"sri lanka",correct:false},
        ]
    },
    {
        question:"Which is the largest desert in the world",
        answers:[
            {text:"kalahari",correct:false},
            {text:"gobi",correct:false},
            {text:"sahara",correct:false},
            {text:"antartica",correct:true},
        ]
    },
    {
        question:"Which is the smallest continent in the world",
        answers:[
            {text:"asia",correct:false},
            {text:"australia",correct:true},
            {text:"artic",correct:false},
            {text:"africa",correct:false},
        ]
    },
];

let currentQuestionIndex=0;    //question index will change everytime we click on next button
let score=0;

function StartQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next"; //when we start the quiz the button should show
    showQuestion();
}
function showQuestion(){ 
    resetState();
    let currentQuestion=questions[currentQuestionIndex];  //grab the current question from the array
    let questionNo=currentQuestionIndex+1;                //we need the question lso to show the current question number
    questionElement.innerHTML=questionNo+'.'+currentQuestion.question;   //displays the question from the array

    currentQuestion.answers.forEach(answer=>{ //this forEach loops creates the four options for each question
        const button=document.createElement("button"); 
        button.innerHTML=answer.text;    //text is taken from the questions array and attached as the inner html in every question
        button.classList.add("btn");     
        answerButtons.appendChild(button);    //attach the questions to the answer button

        if(answer.correct){
             button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

  function selectAnswer(e){
      const selectedBtn=e.target;
      const isCorrect=selectedBtn.dataset.correct==="true";
      if(isCorrect){
          selectedBtn.classList.add("correct");
          score++;
      }
     else{
         selectedBtn.classList.add("incorrect");
     }
     Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct == "true"){
            button.classList.add("correct");
        }
        button.disabled = "true";
     });
     nextButton.style.display="block";
 }

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

 function handleNextButton(){
     currentQuestionIndex++;
     if(currentQuestionIndex < questions.length){
         showQuestion();
 }
 else{
     showScore();
 }
 }
 nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex<questions.length){
         handleNextButton();
     }
    else{
         StartQuiz();
     }
 })
StartQuiz();