let fontSize = Array.from(document.querySelectorAll('.font-size'));
let book = document.querySelector('.book');

fontSize.forEach(item => item.addEventListener('click', function(evt) {
    evt.preventDefault();
    fontSize.forEach(item => item.classList.remove('font-size_active'));
    item.classList.add('font-size_active');
    if (item.classList.contains('font-size_small')) {
        book.classList = 'book';
        book.classList.add('book_fs-small');
    } else if (item.classList.contains('font-size_big')) {
        book.classList = 'book';
        book.classList.add('book_fs-big');
    } else {
        book.classList = 'book';
    }
}));