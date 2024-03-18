const quizData = [ 
    {
        question: "What does computer hardware refer to?",
        a: "Software programs and applications",
        b: "Data and information stored on a computer",
        c: "Computer networks and internet connectivity",
        d: "The physical components that make up a computer system",
        correct: "d",
    },
    {
        question: "Which component is often referred to as the 'brain' of the computer?",
        a: "Graphics Processing Unit (GPU)",
        b: "Central Processing Unit (CPU)",
        c: "Random Access Memory (RAM)",
        d: "Motherboard",
        correct: "b",
    },
    {
        question: "What type of memory is used for temporary storage of data that CPU needs to access quickly?",
        a: "Read-Only Memory (ROM)",
        b: "Hard Disk Drive (HDD)",
        c: "Random Access Memory (RAM)",
        d: "Solid-State Drive (SSD)",
        correct: "c",
    },
    {
        question: "Which storage device provides permanent storage for data, applications and operating system?",
        a: "Random Access Memory (RAM)",
        b: "Hard Disk Drive (HDD)",
        c: "Central Processing Unit (CPU)",
        d: "Graphics Processing Unit (GPU)",
        correct: "b",
    },
    {
        question: "Which of the following is an example of an input device?",
        a: "Keyboard",
        b: "Printer",
        c: "Monitor",
        d: "Speakers",
        correct: "a",
    },
    {
        question: "Which component allows computer connect to network and access the internet?",
        a: "Central Processing Unit (CPU)",
        b: "Graphics Processing Unit (GPU)",
        c: "Network Interface Card (NIC)",
        d: "Random Access Memory (RAM)",
        correct: "c",
    },
    {
        question: "What does the acronym 'HDD' stand for in computer hardware?",
        a: "Hybrid Data Drive",
        b:  "Hardware Desing Diagram",
        c: "High Definition Display",
        d: "Hard Disk Drive",
        correct: "d",
    },
    {
        question: "What is the main purpose of the 'BIOS' in a computer?",
        a: "Controlling the computer's basic operations and boot process",
        b: "Providing internet connectivity",
        c: "Rendering graphics for video games",
        d: "Storing and accessing data quickly",
        correct: "a",
    },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
}

const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
}

const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
loadQuiz();
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = `
            <h2> You answered ${score} /${quizData.length} questions correctly</h2>
            <button onclick = "history.go(0)"> Play again </button>`
        }
    }
});