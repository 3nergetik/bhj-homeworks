let sliderItem = Array.from(document.querySelectorAll('.slider__item'));
let sliderArrowPrev = document.querySelector('.slider__arrow_prev');
let sliderArrowNext = document.querySelector('.slider__arrow_next');
let currentIndex = 0;

sliderArrowPrev.addEventListener('click', function() {
    if (currentIndex <= 0) {
        currentIndex = sliderItem.length - 1;
    } else {
        currentIndex--;
    }
    showCurrent(currentIndex);
});

sliderArrowNext.addEventListener('click', function() {
    if (currentIndex >= sliderItem.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    showCurrent(currentIndex);
});

let showCurrent = function(index) {
    sliderItem.forEach(item => item.classList.remove('slider__item_active'));
    sliderItem[index].classList.add('slider__item_active');
};