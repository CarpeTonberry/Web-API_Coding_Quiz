var attemptNumber = "0"
var score = 0

// Timer variables
var timer = document.getElementById("time");
var timerLeft = 60;
var clicked = false

// Save data variables
var allScores = [];
var getLocalScores = localStorage.getItem('Local Scores');

// Modify the HTML <body> element by using `document.body`
var body = document.body;


var quizMaster = document.createElement('div');
quizMaster.className = "theStart"
var testTaker = document.createElement('section');
var startBtn = document.createElement('button');

quizMaster.textContent = 'Are you ready for it?';
startBtn.textContent = 'Start';

// Adjust sizing/placement of created DOM elements  
quizMaster.setAttribute('style', 'font-size:20px; text-align:center;');
testTaker.setAttribute('style', 'padding:20px; text-align:center;');

// Append created elements to the <body>
body.appendChild(quizMaster);
quizMaster.appendChild(testTaker);
testTaker.appendChild(startBtn);

startBtn.addEventListener('click', letsPlay);

function letsPlay() {
  // preSetUp();
  startQuiz1();
  countdown();
}

// function preSetUp() {
//   if (localStorage.getItem('Local Scores') === null) {
//     localStorage.setItem('Local Scores', "Are you ready for it?")
//   }
//   else {
//     allScores = allScores.concat(getLocalScores);
//   }
// }

function countdown() {
  var timerInterval = setInterval(function () {
    if (timerLeft > 1) {
      timer.textContent = timerLeft + " seconds remaining";
      timerLeft--;
    } else if (timerLeft === 1) {
      timer.textContent = timerLeft + " second remaining";
      timerLeft--;
    } else {
      timer.textContent = "";
      // Stop the timer
      clearInterval(timerInterval);
    }
    // Speed of timer
  }, 930);
}

function startQuiz1() {
  startBtn.remove();
  quizMaster.textContent = ("What is a callback?");
  var answer1 = document.createElement('button');
  answer1.className = "theAnswer"
  var answer2 = document.createElement('button');
  answer2.className = "theAnswer"
  var answer3 = document.createElement('button');
  answer3.className = "theAnswer"
  var answer4 = document.createElement('button');
  answer4.className = "theAnswer"

  answer1.setAttribute('id', 'wrongAnswer');
  answer2.setAttribute('id', 'correctAnswer');
  answer3.setAttribute('id', 'wrongAnswer');
  answer4.setAttribute('id', 'wrongAnswer');

  answer1.textContent = ("Calls a function or evaluates an expression at specified intervals (in milliseconds)");
  answer2.textContent = ("A function passed to another function, which we assume will be invoked at some point");
  answer3.textContent = ("Calls a function or evaluates an expression after a specified number of milliseconds");
  answer4.textContent = ("Database elements, such as tables, queries, forms, and reports.");

  body.appendChild(quizMaster);
  body.appendChild(answer1);
  body.appendChild(answer2);
  body.appendChild(answer3);
  body.appendChild(answer4);

  answer1.addEventListener('click', theWrongAnswer);
  answer2.addEventListener('click', theCorrectAnswer);
  answer3.addEventListener('click', theWrongAnswer);
  answer4.addEventListener('click', theWrongAnswer);

  // Check if correct or wrong answer was selected and move to the next question
  function theCorrectAnswer() {
    if (document.getElementById("correctAnswer").clicked = true) {
      score++;
      timerLeft += 5;
      timer.textContent = timerLeft + " seconds remaining";
      console.log("hello");
      nextQuestion();
    };
  };

  function theWrongAnswer() {
    if (document.getElementById("wrongAnswer").clicked = true) {
      score--;
      timerLeft -= 5;
      timer.textContent = timerLeft + " seconds remaining";
      console.log("fudge");
      nextQuestion();
    };
  };

  function nextQuestion() {
    answer1.remove();
    answer2.remove();
    answer3.remove();
    answer4.remove();
    startQuiz2();
  }
}

function startQuiz2() {
  quizMaster.textContent = ("What is || in JS?");
  var answer1 = document.createElement('button');
  answer1.className = "theAnswer"
  var answer2 = document.createElement('button');
  answer2.className = "theAnswer"
  var answer3 = document.createElement('button');
  answer3.className = "theAnswer"
  var answer4 = document.createElement('button');
  answer4.className = "theAnswer"

  answer1.setAttribute('id', 'wrongAnswer');
  answer2.setAttribute('id', 'wrongAnswer');
  answer3.setAttribute('id', 'correctAnswer');
  answer4.setAttribute('id', 'wrongAnswer');

  answer1.textContent = ("And");
  answer2.textContent = ("Else");
  answer3.textContent = ("Or");
  answer4.textContent = ("And");

  body.appendChild(quizMaster);
  body.appendChild(answer1);
  body.appendChild(answer2);
  body.appendChild(answer3);
  body.appendChild(answer4);

  answer1.addEventListener('click', theWrongAnswer);
  answer2.addEventListener('click', theWrongAnswer);
  answer3.addEventListener('click', theCorrectAnswer);
  answer4.addEventListener('click', theWrongAnswer);

  // Check if correct or wrong answer was selected and move to the next question
  function theCorrectAnswer() {
    if (document.getElementById("correctAnswer").clicked = true) {
      score++;
      timerLeft += 5;
      timer.textContent = timerLeft + " seconds remaining";
      console.log("hello");
      nextQuestion();
    };
  };

  function theWrongAnswer() {
    if (document.getElementById("wrongAnswer").clicked = true) {
      score--;
      timerLeft -= 5;
      timer.textContent = timerLeft + " seconds remaining";
      console.log("fudge");
      nextQuestion();
    };
  };

  function nextQuestion() {
    answer1.remove();
    answer2.remove();
    answer3.remove();
    answer4.remove();
    startQuiz3();
  };
}

function startQuiz3() {
  quizMaster.textContent = ("What is >= in JS?");
  var answer1 = document.createElement('button');
  answer1.className = "theAnswer"
  var answer2 = document.createElement('button');
  answer2.className = "theAnswer"
  var answer3 = document.createElement('button');
  answer3.className = "theAnswer"
  var answer4 = document.createElement('button');
  answer4.className = "theAnswer"

  answer1.setAttribute('id', 'wrongAnswer');
  answer2.setAttribute('id', 'wrongAnswer');
  answer3.setAttribute('id', 'wrongAnswer');
  answer4.setAttribute('id', 'correctAnswer');

  answer1.textContent = ("Less than or equal");
  answer2.textContent = ("Greater than");
  answer3.textContent = ("Gator Mouth ");
  answer4.textContent = ("Greater than or equal");

  body.appendChild(quizMaster);
  body.appendChild(answer1);
  body.appendChild(answer2);
  body.appendChild(answer3);
  body.appendChild(answer4);

  answer1.addEventListener('click', theWrongAnswer);
  answer2.addEventListener('click', theWrongAnswer);
  answer3.addEventListener('click', theWrongAnswer);
  answer4.addEventListener('click', theCorrectAnswer);

  // Check if correct or wrong answer was selected and move to the next question
  function theCorrectAnswer() {
    if (document.getElementById("correctAnswer").clicked = true) {
      score++;
      timerLeft += 5;
      timer.textContent = timerLeft + " seconds remaining";
      console.log("hello");
      nextQuestion();
    };
  };

  function theWrongAnswer() {
    if (document.getElementById("wrongAnswer").clicked = true) {
      score--;
      timerLeft -= 5;
      timer.textContent = timerLeft + " seconds remaining";
      console.log("fudge");
      nextQuestion();
    };
  };

  function nextQuestion() {
    answer1.remove();
    answer2.remove();
    answer3.remove();
    answer4.remove();
    startQuiz4();
  }
}

function startQuiz4() {
  quizMaster.textContent = ("How many Data Types exist in JS?");
  var answer1 = document.createElement('button');
  answer1.className = "theAnswer"
  var answer2 = document.createElement('button');
  answer2.className = "theAnswer"
  var answer3 = document.createElement('button');
  answer3.className = "theAnswer"
  var answer4 = document.createElement('button');
  answer4.className = "theAnswer"

  answer1.setAttribute('id', 'correctAnswer');
  answer2.setAttribute('id', 'wrongAnswer');
  answer3.setAttribute('id', 'wrongAnswer');
  answer4.setAttribute('id', 'wrongAnswer');

  answer1.textContent = ("9");
  answer2.textContent = ("2");
  answer3.textContent = ("4");
  answer4.textContent = ("Over 9000!");

  body.appendChild(quizMaster);
  body.appendChild(answer1);
  body.appendChild(answer2);
  body.appendChild(answer3);
  body.appendChild(answer4);

  answer1.addEventListener('click', theCorrectAnswer);
  answer2.addEventListener('click', theWrongAnswer);
  answer3.addEventListener('click', theWrongAnswer);
  answer4.addEventListener('click', theWrongAnswer);

  // Check if correct or wrong answer was selected and move to the next question
  function theCorrectAnswer() {
    if (document.getElementById("correctAnswer").clicked = true) {
      score++;
      timerLeft += 5;
      timer.textContent = timerLeft + " seconds remaining";
      console.log("hello");
      nextQuestion();
    };
  };

  function theWrongAnswer() {
    if (document.getElementById("wrongAnswer").clicked = true) {
      score--;
      timerLeft -= 5;
      timer.textContent = timerLeft + " seconds remaining";
      console.log("fudge");
      nextQuestion();
    };
  };

  function nextQuestion() {
    answer1.remove();
    answer2.remove();
    answer3.remove();
    answer4.remove();
    startQuiz5();
  };
}

function startQuiz5() {
  quizMaster.textContent = ("What is break; used for in JS?");
  var answer1 = document.createElement('button');
  answer1.className = "theAnswer"
  var answer2 = document.createElement('button');
  answer2.className = "theAnswer"
  var answer3 = document.createElement('button');
  answer3.className = "theAnswer"
  var answer4 = document.createElement('button');
  answer4.className = "theAnswer"

  answer1.setAttribute('id', 'wrongAnswer');
  answer2.setAttribute('id', 'wrongAnswer');
  answer3.setAttribute('id', 'correctAnswer');
  answer4.setAttribute('id', 'wrongAnswer');

  answer1.textContent = ("Allows us to break our code into smaller code.");
  answer2.textContent = ("Break the habit tonight!");
  answer3.textContent = ("Allows us to exit a current loop");
  answer4.textContent = ("Equivalent to alt + F4 on Windows");

  body.appendChild(quizMaster);
  body.appendChild(answer1);
  body.appendChild(answer2);
  body.appendChild(answer3);
  body.appendChild(answer4);

  answer1.addEventListener('click', theWrongAnswer);
  answer2.addEventListener('click', theWrongAnswer);
  answer3.addEventListener('click', theCorrectAnswer);
  answer4.addEventListener('click', theWrongAnswer);

  // Check if correct or wrong answer was selected and move to the next question
  function theCorrectAnswer() {
    if (document.getElementById("correctAnswer").clicked = true) {
      score++;
      timerLeft += 5;
      timer.textContent = timerLeft + " seconds remaining";
      console.log("hello");
      nextQuestion();
    };
  };

  function theWrongAnswer() {
    if (document.getElementById("wrongAnswer").clicked = true) {
      score--;
      timerLeft -= 5;
      timer.textContent = timerLeft + " seconds remaining";
      console.log("fudge");
      nextQuestion();
    };
  };

  function nextQuestion() {
    answer1.remove();
    answer2.remove();
    answer3.remove();
    answer4.remove();
    endOfQuiz();
  }
}
function endOfQuiz() {
  // Stop time
  clearInterval(countdown);
  // Collect Player Name
  var playerName = whatIsYourName();

  function whatIsYourName() {
    var playerName = "";

    while (playerName === "" || playerName === null) {
      playerName = prompt("What are your initials?");
    }
    return playerName;
  }

  // Increment the var attemptNumber
  // anotherOne();
  // Input results of the quiz into an object
  // tallyResults();

  // Set array into local storage (JSON takes strings and arrays)
  // localStorage.setItem('Local Scores', JSON.stringify(allScores));

  // Set last score results in local storage
  localStorage.setItem('Last Player', (playerName));
  localStorage.setItem('Last Score', (score));
  localStorage.setItem('Last Time', (timer.textContent));
  // Redirect to the leaderboard
  location.href = 'leaderboard.html';
}

// function anotherOne() {
//   for (i = 0; i <= arguments.length / 3; i++) {
//     attemptNumber++;
//   };
// }

// function tallyResults() {
//   var finalScores = {
//     Player: playerName,
//     Attempt: attemptNumber,
//     Score: score,
//     Time: timer.textContent,
//   }

//   //  tallyResults object is pushed into an array which we can save 
//   allScores.push(finalScores);
// }
