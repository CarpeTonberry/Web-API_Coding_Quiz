var timer = document.getElementById("time");
var timerLeft = 60;

var score = 0;
var clicked = false

//Link JS to HTML Body
// document.getElementById('')

// We access the <body> element by using `document.body`
var body = document.body;

// Add a list of your favorite foods (or other favorites)
var quizMaster = document.createElement('div');
var testTaker = document.createElement('section');
var startBtn = document.createElement('button');

quizMaster.textContent = 'Are you ready for it?';
startBtn.textContent = 'Start';

// Adjust Sizing/Placement 
quizMaster.setAttribute('style', 'font-size:20px; text-align:center;');
testTaker.setAttribute('style', 'background: #888888; padding:20px; text-align:center;');

// Append to the body
body.appendChild(quizMaster);
quizMaster.appendChild(testTaker);
testTaker.appendChild(startBtn);

startBtn.addEventListener('click', letsPlay);

function letsPlay() {
  startQuiz1();
  countdown();
};

// timer function start


function countdown() {
  var timerInterval = setInterval(function () {
    if (timerLeft > 1) {
      timer.textContent = timerLeft + " seconds remaining";
      // Decrease 'timerLeft' by one second
      timerLeft--;
    } else if (timerLeft === 1) {
      // When 'timerLeft' is equl to 1, rename to 'second' instead of 'seconds' 
      timer.textContent = timerLeft + " second remaining";
      timerLeft--;
    } else {
      // When 'timerLeft' gets to 0, set 'timer' to an empty string
      timer.textContent = "";
      // Stop Timer
      clearInterval(timerInterval);
    }
    // Speed of timer
  }, 2000);
};
// Timer function end

function startQuiz1() {
  startBtn.remove();
  quizMaster.textContent = ("What is a callback?");
  var answer1 = document.createElement('button');
  var answer2 = document.createElement('button');
  var answer3 = document.createElement('button');
  var answer4 = document.createElement('button');

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
};

function startQuiz2() {
  quizMaster.textContent = ("What is || in JS?");
  var answer1 = document.createElement('button');
  var answer2 = document.createElement('button');
  var answer3 = document.createElement('button');
  var answer4 = document.createElement('button');

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
};

function startQuiz3() {
  quizMaster.textContent = ("What is >= in JS?");
  var answer1 = document.createElement('button');
  var answer2 = document.createElement('button');
  var answer3 = document.createElement('button');
  var answer4 = document.createElement('button');

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
};

function startQuiz4() {
  quizMaster.textContent = ("How many Data Types exist in JS?");
  var answer1 = document.createElement('button');
  var answer2 = document.createElement('button');
  var answer3 = document.createElement('button');
  var answer4 = document.createElement('button');

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
};

function startQuiz5() {
  quizMaster.textContent = ("What is break; used for in JS?");
  var answer1 = document.createElement('button');
  var answer2 = document.createElement('button');
  var answer3 = document.createElement('button');
  var answer4 = document.createElement('button');

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
    // endOfQuiz();
  }
};

// function endOfQuiz() {
// }