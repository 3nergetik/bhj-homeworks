let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

let killedMole = 0;
let miss = 0;

getHole = (index) => {
    let currentHole = document.getElementById(`hole${index}`);
    currentHole.onclick = function() {
        if (currentHole.className.includes('hole_has-mole')) {
            dead.textContent++;
            if (dead.textContent >= 10) {
                alert("You win!");
            }
        } else {
            lost.textContent++;
            if (lost.textContent >= 5) {
                alert("Game is over");
            }
        }
    }
};

for (let index = 1; index <= 9; index ++) {
    getHole(index);
};