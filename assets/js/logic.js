// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;
var score = 0;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var questionTitle = document.getElementById("question-title");
var finalScoreEl = document.getElementById("final-score");

// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");
var myInterval;

function startQuiz() {
  // hide start screen
  document.getElementById("start-screen").style.display = "none";
  // un-hide questions section
  document.getElementById("questions").style.display = "block";
  // start timer
  // var seconds = 75;
   myInterval = setInterval(function () {
    time--
    timerEl.textContent = time;
    if (time <= 0) {
      alert("Game Over ");
      clearInterval(myInterval);
    }
  }, 1000);
  getQuestion();
}

function getQuestion() {
  // get current question object from array
  questions[currentQuestionIndex];

  // update title with current question
  questionTitle.innerText = questions[currentQuestionIndex].title;

  // clear out any old question choices
  choicesEl.innerHTML = "";

  // loop over choices
  for (var i = 0; i < questions[currentQuestionIndex].choices.length; i++) {
    // create new button for each choice
    var answerButton = document.createElement("button");
    answerButton.innerText = questions[currentQuestionIndex].choices[i];

    // display on the page
    choicesEl.append(answerButton);

    // attach click event listener to each choice
    answerButton.addEventListener("click", function (e) {
      var input = e.target.textContent
      console.log(input)
      
      // answerClick(input)
      if (questions[currentQuestionIndex].answer !== input) {
        // reduce 10 from the counter
        time = time - 10
      }
      currentQuestionIndex++
      if(currentQuestionIndex === questions.length)
      {
        // got to results
        document.getElementById("questions").style.display = "none";
        document.getElementById("end-screen").style.display = "block";
        alert("Game Over ");
        clearInterval(myInterval);
      }
        else{
        getQuestion()
      }
    })
  }
}
function questionClick(event) {
  // check if user guessed wrong
  if (this.value !== questions[currentQuestionIndex].answer) {
    // penalize time
    time -= 15;

    if (time < 0) {
      time = 0;
      // display new time on page
      timerEl.textContent = time;
  
      // play "wrong" sound effect
      sfxWrong.play();
    }

    feedbackEl.textContent = "Wrong!";
  } else {
    // play "right" sound effect
    sfxRight.play();

    feedbackEl.textContent = "Correct!";
  }

  // flash right/wrong feedback on page for half a second
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);

  // move to next question
  currentQuestionIndex++;

  // check if we've run out of questions
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
  
}

function quizEnd() {
  // stop timer
  clearInterval(timerId);

  // show end screen
  // document.getElementById("start-screen").style.display = "none";
  var endScreenEl = document.getElementById("end-screen").style.display = "block";

  endScreenEl.removeAttribute("class");

  // show final score
  
  finalScoreEl.textContent = time;
  finalScoreEl.appendChild(time);



  // hide questions section
  questionsEl.setAttribute("class", "hide");

  // show a form the get the initials and save the initial + score in the localstoraget
  console.log(finalScoreEl)

}
function clockTick() {
  // update time
  time--;
  timerEl.textContent = time;

  // check if user ran out of time
  if (time <= 0) {
    quizEnd();
  }
}

function saveHighscore() {
  

  // make sure value wasn't empty
  if (initials !== ""){
    // get saved scores from localstorage, or if not any, set to empty array
    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    var initials = initialsEl.value.trim();
    // get value of input box
    highscores.push([initials, time])

  localStorage.setItem("highscores", JSON.stringify(highscores) );
    
    
      // redirect to next page
      window.location.href = "highscores.html";


    
  }
}

function checkForEnter(event) {
  // check if event key is enter
  if (event.key === "Enter") {
    // saveHighscore
    saveHighscore();

  }
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;
initialsEl.onkeyup = checkForEnter;