//Creating each question as a constructor 

function Question(question, answer, options, gifLink, correctMessage, incorrectMessage, skippedMessage) {
    this.question = question,
    this.answer = answer,
    this.options = options,
    this.giflink = gifLink,
    this.correctMessage = correctMessage,
    this.incorrectMessage = incorrectMessage,
    this.unansweredMessage = skippedMessage
}

var q1 = new Question(
    "Which player scored the most points in a single game?",
    "Wilt Chamberlain", 
    ["Kobe Bryant", "Lebron James", "Michael Jordan", "Wilt Chamberlain"], 
    '<iframe src="https://giphy.com/embed/orjr6OEwbbRV6" frameBorder="0" class="giphy-embed" allowFullScreen class="gifclass"></iframe>',
    "Yep! Wilt scored 100pts in a single game!!",
    "Nope! It was Wilt Chamberlain with 100pts!",
    "It was Wilt Chamberlain with 100pts!" 
);

var q2 = new Question(
    "Which player has the most career assists?",
    "John Stockton", 
    ["John Stockton", "Magic Johnson", "Karl Malone", "Mark Jackson"], 
    '<iframe src="https://giphy.com/embed/ZWVLbmDFOcRby" frameBorder="0" class="giphy-embed" class="gifclass" allowFullScreen></iframe>',
    "Yep! It's John Stockton with 15,806 assists!",
    "Nope! It's John Stockton with 15,806 assists!",
    "It's John Stockton with 15,806 assists!!" 
);

var q3 = new Question(
    "Which team has the most NBA Finals appearances?",
    "Minneapolis/Los Angeles Lakers", 
    ["Boston Celtics", "Minneapolis/Los Angeles Lakers", "Philadelphia 76ers", "Golden State Warriors"], 
    '<iframe src="https://giphy.com/embed/P7Ki0jpjGW37i" frameBorder="0" class="giphy-embed" class="gifclass" allowFullScreen ></iframe>',
    "You're right! The Minneapolis/Los Angeles Lakers have been to the NBA Finals a record 31 times!",
    "Nope! It's the Minneapolis/Los Angeles Lakers with 31 appearances!",
    "It's the Minneapolis/Los Angeles Lakers with 31 appearances!"
);

var q4 = new Question(
    "Who was the #1 pick in the 2003 NBA Draft?",
    "LeBron James", 
    ["Allen Iverson", "LeBron James", "Dwayne Wade", "Carmelo Anthony"], 
    '<iframe src="https://giphy.com/embed/3wqMxx4VAkByM" frameBorder="0" class="giphy-embed" class="gifclass" allowFullScreen></iframe>',
    "Correct! LeBron James was the #1 pick and went on to win Rookie of the Year!",
    "Nope! It was LeBron James!",
    "It was LeBron James!" 
);

var q5 = new Question(
    "Who has the most career points?",
    "Kareem Abdul-Jabbar", 
    ["Karl Malone", "Kobe Bryant", "Michael Jordan", "Kareem Abdul-Jabbar"], 
    '<iframe src="https://giphy.com/embed/k481R5ERN7jJm" frameBorder="0" class="giphy-embed" class="gifclass" allowFullScreen></iframe>',
    'Yep! Kareem Abdul-Jabbar leads the NBA in scoring with 38,387 points!',
    "Incorrect! It's Kareem Abdul-Jabbar with 38,387 points!",
    "It's Kareem Abdul-Jabbar with 38,387 points!" 
);

var q6 = new Question(
    "Who has the most NBA Finals MVPs?",
    "Michael Jordan", 
    ["Tim Duncan", "Lebron James", "Michael Jordan", "Stephen Curry"], 
    '<iframe src="https://giphy.com/embed/uxTYtxv3Ezryg" frameBorder="0" class="giphy-embed" class = "gifclass" allowFullScreen></iframe>',
    "Correct! It's Michael Jordan with 6!",
    "Sorry! It's Michael Jordan with 6!",
    "It's Michael Jordan with 6!"
);

var q7 = new Question(
    "Which NBA player most recently averaged triple double for the entire regular season?",
    "Russell Westbrook", 
    ["Russell Westbrook", "Oscar Robertson", "Ben Simmons", "Kevin Love"], 
    '<iframe src="https://giphy.com/embed/3o6fJ8M1GNLzyXW7Be" frameBorder="0" class="giphy-embed" class="gifclass" allowFullScreen></iframe>',
    "Yep! Russell Westbrook did so and won MVP that year!",
    "Sorry, no! It was Russell Westbrook!",
    "It was Russell Westbrook!"
);

var q8 = new Question(
    "How many championships has LeBron James won?",
    "3", 
    ["1", "2", "3", "4"], 
    '<iframe src="https://giphy.com/embed/mJBtZUG7kSGpI3fKX1" frameBorder="0" class="giphy-embed" class="gifclass" allowFullScreen></iframe>',
    "Yep! LeBron has won 3 rings, 2 in Miami and 1 in Cleveland!",
    "Nope! LeBron has won 3 rings!",
    "LeBron has won 3 championships!" 
);

var q9 = new Question(
    "Who has won the most NBA Championships as a coach?",
    "Phil Jackson", 
    ["Pat Riley", "Gregg Popovich", "Phil Jackson", "Red Auerbach"], 
    '<iframe src="https://giphy.com/embed/o9yEYXabWbsM8" frameBorder="0" class="giphy-embed" class="gifclass" allowFullScreen></iframe>',
    "Yep! Phil Jackson has won 11 rings as a coach!",
    "Nope! It's Phil Jackson with 11!",
    "It's Phil Jackson with 11!"
);

var q10 = new Question(
    "Who has the record for the most three pointers made in a game?",
    "Klay Thompson", 
    ["Stephen Curry", "Kyle Korver", "Reggie Miller", "Klay Thompson"], 
    '<iframe src="https://giphy.com/embed/3ohze2hnMxkIrzZPyg" frameBorder="0" class="giphy-embed" class="gifclass" allowFullScreen></iframe>',
    "Yep! Klay Thompson broke the record with 14!",
    "Nope! It's Klay Thompson with 14!",
    "It's Klay Thompson with 14!"
);

//logic is based on same game div being appending accordingly
$(".answer-button").hide();

//keeps track of which question we are on and gathers corresponding information
var game = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
var questionCounter = 0;

//timer code
var timer = 20;
var runTimer;

function countdown () {
    timer--;
    $(".timer").text("Time Remaining: " + timer + " seconds");

    if (timer === 0) {
        clearInterval(runTimer);
    
        numUnanswered++;
    
        $(".game-board").empty();
        $(".game-board").append("<div class='text message'>" + game[questionCounter].unansweredMessage + "</div>");
        $(".game-board").append(game[questionCounter].giflink);
    
        if (questionCounter < 9) {
            questionCounter++;
            timer = 20; 
            setTimeout(function() {
                genQuestion(game[questionCounter]);
            }, 5000);
        } else {
            setTimeout(genResultsScreen, 5000);
        }
    
    }
}

function genQuestion(question) {
    clearInterval(runTimer);
    $(".game-board").empty();
    $(".game-board").append("<div class='text'>"  + "Question: " + (questionCounter + 1) + " of 10" + "</div>");
    $(".game-board").append("<div class='timer text'>"  + "Time Remaining: 20 seconds" + "</div>");
    $(".game-board").append("<div class ='text' id='question'>" + question.question + "</div>");
    for (var i = 0; i < question.options.length; i++) {
        $(".game-board").append("<button class='option'>" + question.options[i] + "</button>");
    }
    runTimer = setInterval(countdown, 1000);
}

function genResultsScreen () {
    $(".game-board").empty();
    $(".game-board").append("<div class='text'>" + "Thanks for playing!" + "</div>");
    $(".game-board").append("<div class='text'>" + "Here are your results!" + "</div");
    $(".game-board").append("<div class='text'>" + "Correct: " + numCorrect + "</div>");
    $(".game-board").append("<div class='text'>" + "Incorrect: " + numIncorrect + "</div>");
    $(".game-board").append("<div class='text'>" + "Unanswered: " + numUnanswered + "</div>");
    $(".game-board").append("<div class='text'>" + "Click to play again!" + "</div");
    $(".game-board").append("<button class='play-again'>" + "Play Again!" + "</button>");
}

//correct/incorrect/unanswered count
var numCorrect = 0;
var numIncorrect = 0;
var numUnanswered = 0;


$("#start").on("click", function() {
    genQuestion(game[questionCounter]);
});

$(document).on("click", ".option", function() {
    if ($(this).text() === game[questionCounter].answer) {
        clearInterval(runTimer);

        answerClicked = true;
        
        numCorrect++;
        
        $(".game-board").empty();
        $(".game-board").append("<div class='text message'>" + game[questionCounter].correctMessage + "</div>");
        $(".game-board").append(game[questionCounter].giflink);
        
        if (questionCounter < 9) {
            questionCounter++;
            timer = 20; 
            setTimeout(function() {
                genQuestion(game[questionCounter]);
            }, 5000);
        } else {
            setTimeout(genResultsScreen, 5000);
        }
           
       
    } else if ($(this).text() != game[questionCounter].answer) {
        
        clearInterval(runTimer);

        answerClicked = true;

        numIncorrect++;

        $(".game-board").empty();
        $(".game-board").append("<div class='text message'>" + game[questionCounter].incorrectMessage + "</div>");
        $(".game-board").append(game[questionCounter].giflink);

        if (questionCounter < 9) {
            questionCounter++;
            timer = 20; 
            setTimeout(function() {
                genQuestion(game[questionCounter]);
            }, 5000);
        } else {
            setTimeout(genResultsScreen, 5000);
        }
    }
});


$(document).on("click", ".play-again", function() {
    questionCounter = 0;
    genQuestion(game[questionCounter]);
});


