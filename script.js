const quiz = [
    {
        question: "What should you do if someone asks for your UPI PIN?",
        options: ["Share it immediately", "Keep it private", "Send it via phone"],
        answer: 1
    },
    {
        question: "How can you identify a phishing link?",
        options: ["Strange domain or spelling errors", "Official-looking emails", "Popular company logos"],
        answer: 0
    }
];
let currentQuestion = 0;
function startQuiz() {
    document.getElementById('quiz-container').querySelector('button').style.display = 'none';
    document.getElementById('quiz-content').style.display = 'block';
    showQuestion();
}
function showQuestion() {
    const q = quiz[currentQuestion];
    document.getElementById('quiz-question').innerText = q.question;
    const options = document.getElementById('quiz-options');
    options.innerHTML = '';
    q.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        options.appendChild(button);
    });
}
function checkAnswer(selected) {
    if (selected === quiz[currentQuestion].answer) {
        alert('Correct!');
    } else {
        alert('Wrong answer.');
    }
    document.getElementById('next-btn').style.display = 'block';
}
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quiz.length) {
        showQuestion();
    } else {
        alert('Quiz completed!');
        document.getElementById('quiz-content').style.display = 'none';
        document.getElementById('quiz-container').querySelector('button').style.display = 'block';
    }
}