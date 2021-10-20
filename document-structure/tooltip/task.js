const tooltips = document.querySelectorAll('.has-tooltip');
let emptyDiv = document.createElement('div');
let prevBottom;
let prevLeft;

emptyDiv.classList.add('tooltip');

for (let tooltip of tooltips) {
    tooltip.addEventListener('click', (evt) => {
        evt.preventDefault();

        if (prevBottom && bottom === prevBottom && left === prevLeft) {
            emptyDiv.classList.toggle('tooltip_active');
        };

        let left = Math.round(tooltip.getBoundingClientRect().left);
        let bottom = Math.round(tooltip.getBoundingClientRect().bottom);

        emptyDiv.classList.add('tooltip_active');

        emptyDiv.textContent = tooltip.getAttribute("title");
        emptyDiv.setAttribute("style", `left:${left}px; top:${bottom}px`);
        document.body.appendChild(emptyDiv);

        window.addEventListener('scroll', () => {
            emptyDiv.classList.remove('tooltip_active');
        });
    });
};