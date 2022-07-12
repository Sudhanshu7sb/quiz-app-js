let questionSection = document.querySelector(".questions");
let question = document.querySelector(".question-text");
let isCorrect = document.querySelector("small");
let saveUserInitials = document.querySelector(".save-user-initials");
let finalscore = document.querySelector(".finalscore");
console.log(finalscore,"fs");
// finalscore.innerText = ""




let score = 0;
let questionCounter = 0;
let currentQuestion = {};
let availableQuestions = []









const questions = [
    {
        questionText: "Commonly used data types DO NOT include:",
        options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts",
    },
    {
        questionText: "Arrays in JavaScript can be used to store ______.",
        options: [
            "1. numbers and strings",
            "2. other arrays",
            "3. booleans",
            "4. all of the above",
        ],
        answer: "4. all of the above",
    },
    {
        questionText:
            "String values must be enclosed within _____ when being assigned to variables.",
        options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        answer: "3. quotes",
    },
    {
        questionText:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: [
            "1. JavaScript",
            "2. terminal/bash",
            "3. for loops",
            "4. console.log",
        ],
        answer: "4. console.log",
    },
    {
        questionText:
            "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
        options: ["1. break", "2. stop", "3. halt", "4. exit"],
        answer: "1. break",
    },
];




startQuiz = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions)
    showNewQuestion();
}

showNewQuestion = () => {
    if (availableQuestions.length == 0) {

        // console.log(score, "sc");
        localStorage.setItem("totalscore",score);
        setTimeout(() => { console.log(score);
        window.location.assign("/end.html");
       
        console.log(score);

         }, 1000)
        return
    }
    questionCounter++;
    let questionIndex = Math.floor(Math.random() * availableQuestions.length);
    // console.log(questionIndex)
    // console.log(availableQuestions)
    currentQuestion = availableQuestions[questionIndex];
    // console.log(currentQuestion,question)
    question.innerText = currentQuestion.questionText;
    // let question = document.createElement("h2");
    // let isAnsCorrect = document.createElement("small");

    // question.innerText = questionText;
    // questionSection.appendChild(question);
    let options = currentQuestion.options;
    options.forEach((opt, i) => {
        let option = document.createElement("p");
        option.classList.add("option");
        // option${}
        option.innerText = `${opt}`;
        questionSection.appendChild(option);
        option.addEventListener("click", (e) => {
            let selectedAnswer = e.target.innerText;
            console.log(selectedAnswer, currentQuestion.answer, "?");
            //  show correct or wrong 

            if (selectedAnswer === currentQuestion.answer) {
                isCorrect.innerText = "Correct";
                score += 1;
                questionSection.appendChild(isCorrect);

            } else {

                isCorrect.innerText = "Wrong!";
                questionSection.appendChild(isCorrect);
                // score=score;

            }
            let currentQuestionOptions = Array.from(document.querySelectorAll(".option"));

            setTimeout(() => {

                isCorrect.innerText = "";
                currentQuestionOptions.map(opt => opt.style.display = "none");

                showNewQuestion()
            }
                , 1000)
        })
    });

    // options.forEach((opt,i) => {
    //         opt.addEventListener("click", (e) => {
    //              let selectedAnswer = e.target.innerText;
    //              console.log(selectedAnswer);
    //              showNewQuestion()
    //          })
    //          });


    availableQuestions.splice(questionIndex, 1);

    // console.log(curre);
}




startQuiz()
// console.log(availableQuestions);

// getNewQuestion();
// availableQuestions.map((ques,i,arr) => {
//     // let {questionText,options,answer} = ques;
//     // currentQuestionIndex = i;
//     // console.log(questionText);
//     // console.log(options);
//     if(currentQuestionIndex == i){

//     showQuestion();
//     currentQuestionIndex++;

//     }
// })