const QUIZ_QUESTIONS = [
  { category: "Hardware", question: "What is a safe first step when a laptop feels unusually hot?", answers: ["Place it on a soft blanket", "Move it to a firm surface and clear its vents", "Put it in a refrigerator", "Open the power adapter"], correct: 1, explanation: "A firm, flat surface helps keep air vents clear. Let the device cool and avoid opening powered equipment." },
  { category: "Network", question: "Wi-Fi says connected, but you cannot browse. What should you check first?", answers: ["Whether another device on the same Wi-Fi can access the internet", "Factory-reset the router", "Change advanced DNS settings", "Disable the router password"], correct: 0, explanation: "Testing another device helps determine whether the issue is isolated to one device or affects the whole connection." },
  { category: "Security", question: "An unexpected email asks you to verify your password through a link. What should you do?", answers: ["Click quickly before the offer expires", "Reply with your password", "Avoid the link and contact the organization through a trusted channel", "Forward it to everyone"], correct: 2, explanation: "Do not use unexpected links to sign in. Navigate to the official service directly or contact it using known details." },
  { category: "Software", question: "An application keeps crashing. Which is a low-risk first troubleshooting step?", answers: ["Delete system folders", "Restart the app and device, then check for official updates", "Install a random cleaner", "Disable all security software"], correct: 1, explanation: "Restarting and using official app and operating system updates are sensible initial checks." },
  { category: "Security", question: "What should you do if you entered a password on a site you now suspect was fake?", answers: ["Reuse it on a different site", "Change it from the official site using a trusted device", "Send it to support in a message", "Ignore it if no error appeared"], correct: 1, explanation: "Change the exposed password from the service's official site and update other accounts where you reused it." },
  { category: "Hardware", question: "You notice a damaged power cable with exposed wiring. What is safest?", answers: ["Tape it and keep using it", "Avoid using it and replace it with a compatible cable", "Touch the exposed wire to test it", "Plug it into a different power strip"], correct: 1, explanation: "A damaged cable can cause electric shock or fire. Stop using it and get a compatible replacement." }
];

let questionIndex = 0;
let score = 0;
let answered = false;
const quizCard = document.getElementById("quiz-card");
const resultsPanel = document.getElementById("quiz-results");

function readPersonalBest() {
  try {
    const stored = localStorage.getItem("techfix-hub-quiz-best");
    if (stored === null) return null;
    const value = Number(stored);
    return Number.isFinite(value) && value >= 0 && value <= QUIZ_QUESTIONS.length ? value : null;
  } catch (error) {
    console.error("Unable to read quiz personal best from localStorage.", error);
    return null;
  }
}

function displayPersonalBest() {
  const best = readPersonalBest();
  document.getElementById("personal-best").textContent = best === null ? "Not set" : `${best} / ${QUIZ_QUESTIONS.length}`;
}

function renderQuestion() {
  answered = false;
  const item = QUIZ_QUESTIONS[questionIndex];
  document.getElementById("question-counter").textContent = `Question ${questionIndex + 1} of ${QUIZ_QUESTIONS.length}`;
  document.getElementById("question-category").textContent = item.category;
  document.getElementById("question-text").textContent = item.question;
  document.getElementById("answered-count").textContent = `${questionIndex} answered`;
  const progress = Math.round((questionIndex / QUIZ_QUESTIONS.length) * 100);
  document.getElementById("quiz-progress").style.width = `${progress}%`;
  document.querySelector(".quiz-progress").setAttribute("aria-valuenow", String(progress));
  document.getElementById("answer-feedback").classList.add("d-none");
  const answerList = document.getElementById("answer-list");
  answerList.innerHTML = item.answers.map((answer, index) => `<button class="answer-option" type="button" data-answer="${index}"><span class="answer-letter">${String.fromCharCode(65 + index)}</span><span>${escapeHTML(answer)}</span></button>`).join("");
  document.getElementById("next-question").textContent = "Check answer";
  document.getElementById("next-question").disabled = true;
}

function chooseAnswer(event) {
  const option = event.target.closest("[data-answer]");
  if (!option || answered) return;
  answered = true;
  const selected = Number(option.dataset.answer);
  const item = QUIZ_QUESTIONS[questionIndex];
  const correct = selected === item.correct;
  if (correct) score += 1;
  document.querySelectorAll(".answer-option").forEach((button) => {
    button.disabled = true;
    const choice = Number(button.dataset.answer);
    if (choice === item.correct) button.classList.add("answer-correct");
    else if (choice === selected) button.classList.add("answer-incorrect");
  });
  const feedback = document.getElementById("answer-feedback");
  feedback.className = `feedback-box ${correct ? "feedback-correct" : "feedback-incorrect"}`;
  feedback.innerHTML = `<strong>${correct ? "Correct!" : "Not quite."}</strong> ${escapeHTML(item.explanation)}`;
  document.getElementById("answered-count").textContent = `${questionIndex + 1} answered`;
  document.getElementById("next-question").disabled = false;
  document.getElementById("next-question").textContent = questionIndex === QUIZ_QUESTIONS.length - 1 ? "See results" : "Next question";
}

function finishQuiz() {
  quizCard.classList.add("d-none");
  resultsPanel.classList.remove("d-none");
  const percent = Math.round((score / QUIZ_QUESTIONS.length) * 100);
  document.getElementById("score-number").textContent = `${score} / ${QUIZ_QUESTIONS.length}`;
  document.getElementById("score-percent").textContent = `${percent}%`;
  const rank = percent >= 80 ? "Tech pro" : percent >= 50 ? "Rising troubleshooter" : "Curious learner";
  document.getElementById("result-rank").innerHTML = `<i class="fa-solid fa-star"></i> ${rank}`;
  document.getElementById("result-title").textContent = percent >= 80 ? "Excellent work!" : percent >= 50 ? "Nice progress!" : "Keep learning!";
  document.getElementById("result-message").textContent = percent >= 80 ? "You have a strong grasp of practical IT basics." : "Every question is a chance to build your troubleshooting confidence.";
  try {
    const previous = readPersonalBest();
    if (previous === null || score > previous) localStorage.setItem("techfix-hub-quiz-best", String(score));
  } catch (error) {
    console.error("Unable to save quiz personal best to localStorage.", error);
  }
  displayPersonalBest();
}

document.getElementById("answer-list").addEventListener("click", chooseAnswer);
document.getElementById("next-question").addEventListener("click", () => {
  if (!answered) return;
  questionIndex += 1;
  if (questionIndex === QUIZ_QUESTIONS.length) finishQuiz();
  else renderQuestion();
});
document.getElementById("retry-quiz").addEventListener("click", () => {
  questionIndex = 0;
  score = 0;
  resultsPanel.classList.add("d-none");
  quizCard.classList.remove("d-none");
  renderQuestion();
});

displayPersonalBest();
renderQuestion();
