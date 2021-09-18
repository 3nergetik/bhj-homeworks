let timer = document.getElementById("timer");
let counter = timer.textContent;

function timerMinus() {
    if (counter <= 0) {
        clearInterval(idInterval);
        alert("Вы победили в конкурсе!");
    } else {
        timer.textContent--;
    }
};

let idInterval = setInterval(timerMinus, 1000);