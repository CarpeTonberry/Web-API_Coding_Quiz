var usernameSpan = document.querySelector('#name');
var userEmailSpan = document.querySelector('#score');
var usertimeSpan = document.querySelector('#time');

function renderLastRegistered() {

    var name = localStorage.getItem('Last Player')
    var score = localStorage.getItem('Last Score');
    var time = localStorage.getItem('Last Time');


    if (score === null || time === null || name === null) {
        return;
    }
    usernameSpan.textContent = name;
    userEmailSpan.textContent = score;
    usertimeSpan.textContent = time;
}

renderLastRegistered();

// function renderAllScores() {
//     allScores = JSON.parse(localStorage.getItem('Local Scores'));

//     if (!'Local Scores') {
//         return;
//     }

// }
