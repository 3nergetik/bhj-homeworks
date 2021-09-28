let rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
let counter = 0;

function rotate() {
    if (counter < rotatorCase.length) {
        rotatorCase.forEach(item => item.classList.remove('rotator__case_active'));
        rotatorCase[counter].classList.add('rotator__case_active');
        counter++;
    } else {
        counter = 0;
    }
}

setInterval(rotate, 1000);