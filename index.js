const questions = [
    {
        question: "What is my favourite cuisine?" ,
        answers:[
            { text:"Italian", correct: false},
            { text:"Indian", correct: false},
            { text:"Chinees", correct: true},
            { text:"Korean", correct: false},
        ]
    },
    {
        question: "Which is the three country ananya wants to go with her partner ?" ,
        answers:[
            { text:"Switzerland, France, South-Korea", correct: true},
            { text:"South-Korea, Dubai, America", correct: false},
            { text:"Switzerland, England, Maldives", correct: false},
            { text:"New-Zealand, Bali, Spain", correct: false},
        ]
    },
    {
        question: "What is Ananya's favourite thing to do when she gets bored" ,
        answers:[
            { text:"Cooking and cleaning", correct: true},
            { text:"Cleaning and listening Music", correct: false},
            { text:"Netflix and chill", correct: false},
            { text:"talking with friends", correct: false},
        ]
    },
    {
        question: "Ananya's favourite movie" ,
        answers:[
            { text:"Veer-zara, SOTY, KKHH", correct: false},
            { text:"KKKG, KHNH,Ranjhana ", correct: false},
            { text:"DDLJ, Salam Namaste, Hum Tum", correct:false},
            { text:"Veer-zara, Sanam Teri Kasam, Kal Ho Naa Ho", correct: true},
        ]
    },
    {
        question: "Ananya's favourite book" ,
        answers:[
            { text:"Harry Potter", correct: true},
            { text:"The Vampire Diaries", correct: false},
            { text:"To All The Boys I Have Loved Before", correct: false},
            { text:"it ends with us", correct: false},
        ]
    }


];

/*const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestinIndex = 0;
 let Score = 0;

 function startquiz(){
    currentQuestinIndex = 0;
    Score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
 }

 function showQuestions(){
    resetState();
    let currentQuestion = questions[currentQuestinIndex];
    let questionNo = currentQuestinIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const buttons = document.createElement("button");
        buttons.innerHTML = answer.text;
        buttons.classList.add("btn");
        answerButtons.appendChild(buttons);
        if(answer.correct){
            buttons.dataset.correct = answer.correct;
        }
        buttons.addEventListener("click", selectAnswer);
    })
 }


 function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        const buttons = answerButtons.firstChild;
        buttons.classList.removeChild("correct", "incorrect");
        buttons.disabled = false;
        answerButtons.removeChild(answerButtons.firstChild);
    }
 }

 function selectAnswer(e){
    const selectedBtn = e.target ;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        Score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(buttons => {
        if(buttons.dataset.correct === "true"){
            buttons.classList.remove("correct", "incorrect");
        }
        buttons.disabled = false;
    });
    nextButton.style.display = "block";
 }

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${Score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = " block";
}


function handleNextButton(){
    currentQuestinIndex++;
    if(currentQuestinIndex < questions.length){
        showQuestions();

    }
    else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestinIndex < questions.length){
        handleNextButton();
    }else{
        startquiz();
    }
});

 startquiz();*/


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}

function showQuestions() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestions();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
