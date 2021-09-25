let dropdown = document.querySelector('.dropdown');
let dropdownList = document.querySelector('.dropdown__list');
let dropdownItem = Array.from(dropdownList.querySelectorAll('.dropdown__item'));
let dropdownValue = document.querySelector('.dropdown__value');

dropdown.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active');
});

dropdownItem.forEach(item => item.addEventListener('click', (evt) => {
    evt.preventDefault();
    dropdownValue.textContent = item.textContent;
}));