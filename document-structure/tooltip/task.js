const tooltips = document.querySelectorAll('.has-tooltip');
let emptyDiv = document.createElement('div');

emptyDiv.classList.add('tooltip');

for (let tooltip of tooltips) {
    tooltip.addEventListener('click', (evt) => {
        evt.preventDefault();

        let left = Math.round(tooltip.getBoundingClientRect().left);
        let bottom = Math.round(tooltip.getBoundingClientRect().bottom);

        emptyDiv.classList.add('tooltip_active');

        emptyDiv.textContent = tooltip.getAttribute("title");
        emptyDiv.setAttribute("style", `left:${left}px; top:${bottom}px`);
        document.body.appendChild(emptyDiv);  

        window.addEventListener('scroll', () => {
            document.body.removeChild(emptyDiv);
        });
    });
};