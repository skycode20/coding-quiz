# hw-04-columbia

# Code Quiz Assignment

## Road to the Quiz Functionality

* The objective of this assignment was to create a functioning coding quiz that has a working start button, responsive questions with right/wrong choices, the high score system thats shows user's initials and the user's, and the ability to store the scores with each playthrough of the quiz.

<br><br>

<!-- Quiz Start Img -->
<p align="center">
<img src="assets\img\quizstart.png" alt="picture of the start quiz function along with the quiz timer function" width = 400px height = 400px>
</p>

<br><br>

* One of the first things I had to do was to show the questions page and hide the start screen. Then activating the timer to begin once the quiz has started.

* Once the quiz has begun, the questions needed to be responsive to the user input.

<br><br>

<!-- Get Questions Img -->
<p align="center">
<img src="assets\img\getquestions.png" alt="picture of the get questions function" width = 400px height = 400px>
</p>

<br><br>

* It was crucial to get the questions & choices from the questions.js file. Once that was achieved I had to make buttons for each choice that the user could select. Once that was completed the clicking event was added to each button. When all of the questions were answered, a pop-up would alert the user that the quiz has ended. Then the quiz would end and change to the end screen and hide the questions.

<br><br>

<!-- Quiz End Img -->
<p align="center">
<img src="assets\img\quizend.png" alt="picture of the quiz end function" width = 400px height = 400px>
</p>

<br><br>

* Next the results screen would pop up with the results of the user's input as well as the time in which the user had finished. A text box would prompt the user to enter their initials so that the score would be recorded in a list with the user name alongside it.

<br><br>

<!-- Save Highscore Img -->
<p align="center">
<img src="assets\img\savehighscore.png" alt="picture of the quiz end function" width = 400px height = 400px>

<!-- Print Highscore Img -->
<img src="assets\img\printhighscore.png" alt="picture of the quiz end function" width = 400px height = 400px>
</p>

<br><br>

* It was important to save the user input in the local storage so that the user could refresh the page and still have access to the highscores. Also, if the user didn't want to see the list of highscores any longer then there is the option to clear all of the highscores to start anew.

<br><br>

## Enjoy the Quiz and Good Luck!

<br><br>

<!-- Link to the deployed app -->
* <a href="https://skycode20.github.io/hw-04-columbia/" alt="link to the website the quiz is deployed on">Go to the quiz</a>