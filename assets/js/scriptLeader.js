var userEmailSpan = document.querySelector('#score');
var usertimeSpan = document.querySelector('#time');

function renderLastRegistered() {

    var score = localStorage.getItem('Score');
    var time = localStorage.getItem('Time Left');


    if (score === null || time === null) {
        return;
    }

    userEmailSpan.textContent = score;
    usertimeSpan.textContent = time;
}

renderLastRegistered();