const reveals = Array.from(document.querySelectorAll(".reveal"));

const viewportHeight = window.innerHeight;

document.addEventListener('scroll', () => {
    for (let reveal of reveals) {
        if (reveal.getBoundingClientRect().top < viewportHeight) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
        if (reveal.getBoundingClientRect().top <= 0) {
            reveal.classList.remove('reveal_active');
        }
    }
});