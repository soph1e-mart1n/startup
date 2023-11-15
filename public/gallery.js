$(document).ready(function () {
    $(document).on("click", '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
});

async function loadScores() {
    let score = 0;
    try {
      // Get the latest high scores from the service
      const response = await fetch('/api/score');
      score = await response.json();
  
      // Save the scores in case we go offline in the future
      localStorage.setItem('score', JSON.stringify(score));
    } catch {
      // If there was an error then just use the last saved scores
      const scoreText = localStorage.getItem('score');
      if (scoreText) {
        score = JSON.parse(scoreText);
      }
    }
  
    displayScore(score);
  }
  
  function displayScore(score) {
    if(score)
    {
        document.querySelector("#score").innerText = score.score;
    }
  }
  
  loadScores();