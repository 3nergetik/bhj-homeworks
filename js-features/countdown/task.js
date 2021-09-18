let timer = document.getElementById("timer");

function timerMinus() {
    let counter = timer.textContent;
    if (counter <= 0) {
        clearInterval(idInterval);
        alert("Вы победили в конкурсе!");
    } else {
        timer.textContent = timer.textContent - 1;
    }
};

let idInterval = setInterval(timerMinus, 1000);