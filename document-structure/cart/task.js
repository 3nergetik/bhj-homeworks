let productQuantityControls = document.querySelectorAll('.product__quantity-controls');
let cartProducts = document.querySelector('.cart__products');
let product = document.querySelectorAll('.product');

// Обработчик на кнопки + и -
for (let productQuantityControl of productQuantityControls) {
    let decButton = productQuantityControl.querySelector('.product__quantity-control_dec');
    let incButton = productQuantityControl.querySelector('.product__quantity-control_inc');
    let value = productQuantityControl.querySelector('.product__quantity-value');

    decButton.addEventListener('click', () => {
        if (value.textContent > 1) {
            value.textContent--;
        };
    });

    incButton.addEventListener('click', () => {
        value.textContent++;
    });
};

for (let productItem of product) {

    let addButtons = productItem.querySelectorAll('.product__add');
    
    // Обработчик на кнопки "Добавить в корзину"
    for (let addButton of addButtons) {
        addButton.addEventListener('click', () => {
            // Вызываем функцию добавления товара в корзину
            // В аргументы передаем количество товара и копируем его картинку
            addProduct(1);
        });
    };  
};



// Функция для добавления товара в корзину
function addProduct(count) {

    // Выполняем проверку, есть ли подобный товар в корзине
    if (count) {
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