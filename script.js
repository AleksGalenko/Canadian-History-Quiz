$(document).ready(function() {

  const correctAnswer = "1867";

  $(".btn").on("click", function() {
    let selectedAnswer = String($(this).data("answer"));
      $(".btn").attr("disabled", true); // Disable all buttons

      if (selectedAnswer === correctAnswer) {
          $(".feedback").text("Correct! In Canada, the Confederation was in 1867.").addClass("correct-answer");
      } else {
          $(".feedback").text("Incorrect! Hand in your nerd card immediately!").addClass("incorrect-answer");
      }
  });

});
