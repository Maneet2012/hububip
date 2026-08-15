function myFunction() {
    document.getElementById("myDrop").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


function closeNav() {
    document.getElementById("offcanvasNavbar").style.width = "0%";
}
function myFunction(x) {
    x.classList.toggle("change");
}
// document.getElementById("demo").innerHTML = "" ? z

document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        item.addEventListener("click", () => {
            if (item.classList.contains("active")) {
                item.classList.remove("active");
            } else {
                faqItems.forEach(i => i.classList.remove("active"));
                item.classList.add("active");
            }
        });
    });
});const quizData = [
    {
        question: "Who founded Sikhism and in which year?",
        options: ["Guru Nanak Dev Ji, 1469", "Guru Gobind Singh Ji, 1699", "Guru Arjan Dev Ji, 1606", "Guru Angad Dev Ji, 1539"],
        answer: "Guru Nanak Dev Ji, 1469"
    },
    {
        question: "What main teachings did Guru Nanak Dev Ji give?",
        options: [
            "Belief in many gods",
            "Equality, honest living, sharing, one God",
            "Only meditation",
            "Worship of idols"
        ],
        answer: "Equality, honest living, sharing, one God"
    },
    {
        question: "Which Guru introduced the Gurmukhi script?",
        options: ["Guru Nanak Dev Ji", "Guru Angad Dev Ji", "Guru Amar Das Ji", "Guru Arjan Dev Ji"],
        answer: "Guru Angad Dev Ji"
    },
    {
        question: "Why is Guru Arjan Dev Ji important in Sikh history?",
        options: [
            "He created the Khalsa",
            "He built the Golden Temple",
            "He compiled the Adi Granth and was martyred",
            "He introduced Gurmukhi"
        ],
        answer: "He compiled the Adi Granth and was martyred"
    },
    {
        question: "What does Miri and Piri represent?",
        options: [
            "Two Sikh festivals",
            "Worldly power and spiritual authority",
            "Two Sikh scriptures",
            "Two battles"
        ],
        answer: "Worldly power and spiritual authority"
    },
    {
        question: "Who created the Khalsa and in which year?",
        options: [
            "Guru Nanak Dev Ji, 1469",
            "Guru Arjan Dev Ji, 1604",
            "Guru Gobind Singh Ji, 1699",
            "Guru Tegh Bahadur Ji, 1675"
        ],
        answer: "Guru Gobind Singh Ji, 1699"
    },
    {
        question: "Who are the four Chaar Sahibzade?",
        options: [
            "Ajit, Jujhar, Zorawar, Fateh Singh Ji",
            "Nanak, Angad, Amar, Ram Das",
            "Arjan, Hargobind, Har Rai, Har Krishan",
            "Gobind, Tegh, Arjan, Angad"
        ],
        answer: "Ajit, Jujhar, Zorawar, Fateh Singh Ji"
    },
    {
        question: "What happened to the two elder Sahibzade at Chamkaur?",
        options: [
            "They escaped safely",
            "They were captured",
            "They fought bravely and were martyred",
            "They became Gurus"
        ],
        answer: "They fought bravely and were martyred"
    },
    {
        question: "What choice was given to the younger Sahibzade by Wazir Khan?",
        options: [
            "To rule a kingdom",
            "To convert or face death",
            "To leave Punjab",
            "To join the army"
        ],
        answer: "To convert or face death"
    },
    {
        question: "Who was declared the eternal Guru of the Sikhs?",
        options: [
            "Guru Gobind Singh Ji",
            "Guru Nanak Dev Ji",
            "Guru Granth Sahib Ji",
            "Guru Arjan Dev Ji"
        ],
        answer: "Guru Granth Sahib Ji"
    }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timerInterval;

const startBtn = document.getElementById("startBtn");
const quizContainer = document.querySelector(".quiz-container");
const timerEl = document.getElementById("time");
const questionEl = document.querySelector(".question");
const optionsEl = document.querySelector(".options");
const resultEl = document.querySelector(".result");
const scoreEl = document.getElementById("score");
const restartBtn = document.querySelector(".restart-btn");

startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    quizContainer.style.display = "block";
    loadQuestion();
});

function loadQuestion() {
    if (currentQuestion >= quizData.length) {
        endQuiz();
        return;
    }

    clearInterval(timerInterval);
    timeLeft = 30;
    timerEl.textContent = timeLeft;
    startTimer();

    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(option);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(selected) {
    if (selected === quizData[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    loadQuestion();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timerInterval);
    questionEl.style.display = "none";
    optionsEl.style.display = "none";
    resultEl.style.display = "block";
    scoreEl.textContent = score;
    restartBtn.style.display = "block";
}

restartBtn.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    questionEl.style.display = "block";
    optionsEl.style.display = "flex";
    resultEl.style.display = "none";
    restartBtn.style.display = "none";
    loadQuestion();
});

// To access the stars
let stars = 
    document.getElementsByClassName("star");
let output = 
    document.getElementById("output");

// Funtion to update rating
function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    output.innerText = "Rating is: " + n + "/5";
}
// To remove the pre-applied styling
function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}