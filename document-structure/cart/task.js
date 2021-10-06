let productQuantityControls = document.querySelectorAll('.product__quantity-controls');
let cartProducts = document.querySelector('.cart__products');
let addButtons = document.querySelectorAll('.product__add');

// Обработчик на кнопки + и -
for (let item of productQuantityControls) {
    let itemButtons = item.querySelectorAll('.product__quantity-control');
    itemButtons.forEach(item => item.addEventListener('click', () => {
        if (item.classList.contains('product__quantity-control_dec')) {

        }
    }));
};

// Обработчик на кнопки "Добавить в корзину"
for (let addButton of addButtons) {
    addButton.addEventListener('click', () => {
        // Вызываем функцию добавления товара в корзину
        // В аргументы передаем количество товара и копируем его картинку
        addProduct(1);
    });
};

// Функция для добавления товара в корзину
function addProduct(count) {

    // Выполняем проверку, есть ли подобный товар в корзине
    if () {
        // и если есть, то просто увеличиваем счетчик

    } else {

    // Создаем разметку для товара
    let cartProduct = document.createElement('div');
    cartProduct.classList.add('cart__product');

    let cartProductImage = document.createElement('img');
    cartProductImage.classList.add('cart__product-image');
    cartProduct.appendChild(cartProductImage);

    let cartProductCount = document.createElement('div');
    cartProductCount.classList.add('cart__product-count');
    cartProductCount.textContent = count;

    cartProduct.appendChild(cartProductCount);

    cartProducts.appendChild(cartProduct);
    }
};