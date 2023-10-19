$(document).ready(function () {
  const questions = [
    {
      question: "What year did Canada's Confederation happen?",
      answers: ["1918", "1706", "1697", "1867"],
      correctAnswer: "1867",
    },
    {
      question: "Who is Canada's Head of State?",
      answers: [
        "His Majesty King Charles III",
        "Governor-General - Mary Simon",
        "Prime Minister - Justin Trudeau",
        "Leader of the Government in the House of Commons of Canada - Karina Gould",
      ],
      correctAnswer: "His Majesty King Charles III",
    },
    {
      question:
        "When was the Canadian flag in use today first raised on a flagpole?",
      answers: ["1964", "1970", "1965", "1950"],
      correctAnswer: "1965",
    },
    {
      question: "Which animal is an official symbol of Canada?",
      answers: ["The moose", "The beaver", "The bear", "The goose"],
      correctAnswer: "The beaver",
    },
  ];

  const questionElement = $("#question");
  const answerElements = [
    $("#answer1"),
    $("#answer2"),
    $("#answer3"),
    $("#answer4"),
  ];
  const feedbackElement = $(".feedback");
  const tryAgainButton = $("#try-again");
  let currentQuestion = null;
  let userChoice = null;

  function getRandomQuestion() {
    let randomQuestion = null;
    do {
      randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    } while (randomQuestion === currentQuestion);
    return randomQuestion;
  }

  function displayQuestion(questionObj) {
    questionElement.text(questionObj.question);
    for (let i = 0; i < questionObj.answers.length; i++) {
      answerElements[i].text(questionObj.answers[i]);
      answerElements[i].data("answer", questionObj.answers[i]);
      answerElements[i].prop("disabled", false);
      answerElements[i].removeClass("correct-background incorrect-background");
    }
  }

  function checkAnswer(selectedAnswer, correctAnswer, userChoice) {
    if (selectedAnswer === correctAnswer) {
      feedbackElement.text("Correct!").addClass("correct-answer");
      userChoice.addClass("correct-background");
    } else {
      feedbackElement
        .text("Incorrect! Hand in your nerd card immediately!")
        .addClass("incorrect-answer");
      userChoice.addClass("incorrect-background");
    }
    answerElements.forEach((answerElement) =>
      answerElement.prop("disabled", true)
    );
    tryAgainButton.show();
  }

  function nextQuestion() {
    currentQuestion = getRandomQuestion();
    displayQuestion(currentQuestion);
    feedbackElement.empty().removeClass("correct-answer incorrect-answer");
    tryAgainButton.hide();
  }

  $(".btn-answer").on("click", function () {
    const selectedAnswer = String($(this).data("answer"));
    const currentQuestionObj = currentQuestion;
    userChoice = $(this);

    if (currentQuestionObj) {
      const correctAnswer = currentQuestionObj.correctAnswer;
      checkAnswer(selectedAnswer, correctAnswer, userChoice);
    }
  });

  tryAgainButton.on("click", function () {
    nextQuestion();
  });

  nextQuestion();
});
