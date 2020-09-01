function printHighscores() {
  // get scores from an array
  var highscores = JSON.parse(localStorage.getItem("highscores"));

  // create a list of the user highscores 
  for (var i = 0; i < highscores.length; i++) {
    var liTag = document.createElement("li");
    for (var j = 0; j < highscores[i].length; j++) {
      
      liTag.textContent = highscores[i][0] + " - " + highscores[i][1];

      // display on page
      var olEL = document.getElementById("highscores");
      olEL.appendChild(liTag);

    }
  }


}

function clearHighscores() {
  window.localStorage.removeItem("highscores");
  // (and reload)
  window.location.reload();
}

// attach clear event to clear score button
document.getElementById("clear").onclick = clearHighscores;

// run printhighscore when page loads
printHighscores();