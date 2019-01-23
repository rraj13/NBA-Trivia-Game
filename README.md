# NBA-Trivia-Game

# JavaScript-Calculator

## Introduction
Hey there! Here I have created an NBA inspired trivia game. The user presses start to begin and is then presented with a question with four possible answer choices. They have 20 seconds to guess before the answer is revealed. 

If they click the correct answer, a corresponding "correct" message is displayed along with a GIF, and the same is true for an incorrect answer, except with a corresponding "incorrect" answer. If they do not provide an answer, the page displays an "unanswered" message along with the same GIF as before. The program then waits 5 seconds before displaying the next question. After all questions have been asked, the user is shown a results page where they can find out how many they got right, missed or didn't answer. From here the user can click to play again. 

## Technologies 
HTML 5<br/>
CSS 3<br/>
JavaScript - objects, constructors, if-else statment, for-loops<br/>
JQuery - event handlers, DOM manipulation<br/>

## General Methodology
The logic for this project involved having a questionCounter variable that incrememnted each time a question was asked and then answered. The game was made in an array with each of the questions and their data as elements of that array (the questions were constructed as objects and each object was an element in array). The aforementioned questionCounter would start at index 0, display all the information for that question, then once answered, it would increase to 1, 2, 3 etc. In this way, each time the user would answer, the program would display the data for the next question. In addition, I utilized timers to allow the user 20 seconds to answer each question and then 5 seconds between each question display. 

This was a great completely front end or client side project. It really required a lot of pseudocoding and logic determination before even writing a single line of code!

Please reach out with any questions!
