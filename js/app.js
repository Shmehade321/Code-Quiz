const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempts = 0;
let countDownTimer = 75;

// Push the questions into availableQuestions array
const setAvailableQuestions = () => {
  const totalQuestion = quiz.length;
  for (let i = 0; i < totalQuestion; i++) {
    availableQuestions.push(quiz[i]);
  }
};

// Set question number, question and options
const getNewQuestion = () => {
  // Reset the optionContainer
  optionContainer.innerHTML = "";

  questionNumber.innerHTML = `Question ${questionCounter + 1} of ${
    quiz.length
  } <p class="timer">${countDownTimer}</p>`;

  // Set question text
  // Random question
  const questionIndex =
    availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
  currentQuestion = questionIndex;
  questionText.innerHTML = currentQuestion.q;

  // Get the position of 'questionIndex' from the availableQuestion array
  const positionOfQuestionIndex = availableQuestions.indexOf(questionIndex);
  // Remove the 'questionIndex' from the availableQuestion array, so that the question does not repeat
  availableQuestions.splice(positionOfQuestionIndex, 1);

  // Set options
  // Get the length of options
  const optionLength = currentQuestion.options.length;
  // Push options into availableOptions array
  for (let i = 0; i < optionLength; i++) {
    availableOptions.push(i);
  }

  let animationDelay = 0.2;
  // Create options in html
  for (let i = 0; i < optionLength; i++) {
    // Random option
    const optionIndex =
      availableOptions[Math.floor(Math.random() * availableOptions.length)];
    // Get the position of 'optionIndex' from the availableOptions array
    const positionOfOptionIndex = availableOptions.indexOf(optionIndex);
    // Remove the 'optionIndex' from the availableOptions, so that the option does not repeat
    availableOptions.splice(positionOfOptionIndex, 1);
    const option = document.createElement("div");
    option.innerHTML = currentQuestion.options[optionIndex];
    option.id = optionIndex;
    option.className = "option";
    option.style.animationDelay = `${animationDelay}s`;
    animationDelay = animationDelay + 0.15;
    optionContainer.appendChild(option);
    option.setAttribute("onclick", "getResult(this)");
  }

  questionCounter++;
};

// Get the result of current attempt question
const getResult = (element) => {
  const id = parseInt(element.id);
  // Get the answer by comparing the id of clicked option
  if (id === currentQuestion.answer) {
    // Set the green color to the correct option
    element.classList.add("correct");
    // Add the indicator to correct mark
    updateAnswerIndicator("correct");
    correctAnswers++;
  } else {
    // Set the green color to the wrong option
    element.classList.add("wrong");
    // Add the indicator to wrong mark
    updateAnswerIndicator("wrong");

    // If the answer is incorrect show the correct option by adding green color
    const optionLength = optionContainer.children.length;
    for (let i = 0; i < optionLength; i++) {
      if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
        optionContainer.children[i].classList.add("correct");
      }
    }
  }

  attempts++;
  unClickableOptions();
};

// Make all the options unclickable once the user select a option (Restrict the user to change the selection)
const unClickableOptions = () => {
  const optionLength = optionContainer.children.length;
  for (let i = 0; i < optionLength; i++) {
    optionContainer.children[i].classList.add("already-answered");
  }
};

const next = () => {
  if (questionCounter === quiz.length) {
    quizOver();
  } else {
    getNewQuestion();
  }
};

const answersIndicator = () => {
  answersIndicatorContainer.innerHTML = "";
  const totalQuestion = quiz.length;
  for (let i = 0; i < totalQuestion; i++) {
    const indicator = document.createElement("div");
    answersIndicatorContainer.appendChild(indicator);
  }
};

const updateAnswerIndicator = (markType) => {
  answersIndicatorContainer.children[questionCounter - 1].classList.add(
    markType
  );
};

const quizOver = () => {
  // Hide quiz 'quizBox'
  quizBox.classList.add("hide");
  // Show result box
  resultBox.classList.remove("hide");
  quizResult();
};

// Get quiz result
const quizResult = () => {
  resultBox.querySelector(".total-question").innerHTML = quiz.length;
  resultBox.querySelector(".total-skipped").innerHTML = quiz.length - attempts;
  resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
  resultBox.querySelector(".total-wrong").innerHTML = attempts - correctAnswers;
  const percentage = (correctAnswers / quiz.length) * 100;
  resultBox.querySelector(".percentage").innerHTML = percentage.toFixed() + "%";
  resultBox.querySelector(".total-score").innerHTML =
    correctAnswers + " / " + quiz.length;
};

const tryAgainQuiz = () => {
  resultBox.classList.add("hide");
  quizBox.classList.remove("hide");
  resetQuiz();
  startQuiz();
};

const resetQuiz = () => {
  questionCounter = 0;
  correctAnswers = 0;
  attempts = 0;
  countDownTimer = 75;
};

const goToHome = () => {
  resultBox.classList.add("hide");
  homeBox.classList.remove("hide");
  resetQuiz();
};

window.onload = () => {
  document.querySelector(".total-questions").innerHTML = quiz.length;
};

const quizTimeCountDown = () => {
  let timer = setInterval(() => {
    document.querySelector(".timer").innerHTML = countDownTimer;
    countDownTimer--;
    if (countDownTimer === 0) {
      stopInterval();
    }
  }, 1000);

  let stopInterval = () => {
    clearInterval(timer);
    quizOver();
  };
};

// STARTING POINT
const startQuiz = () => {
  homeBox.classList.add("hide");
  quizBox.classList.remove("hide");
  // Set all the questions in availableQuestions array
  setAvailableQuestions();
  // Call this function to retrive the questions
  getNewQuestion();
  // Create indicator of answers
  answersIndicator();
  quizTimeCountDown();
};
