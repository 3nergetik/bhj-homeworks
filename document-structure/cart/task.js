let productQuantityControls = document.querySelectorAll('.product__quantity-controls');
let cartProducts = document.querySelector('.cart__products');
let product = document.querySelectorAll('.product');
let cart = document.querySelector('.cart');

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
    let value = productItem.querySelector('.product__quantity-value');
    let productImage = productItem.querySelector('.product__image');

    // Обработчик на кнопки "Добавить в корзину"
    for (let addButton of addButtons) {
        addButton.addEventListener('click', () => {
            // Вызываем функцию добавления товара в корзину
            // В аргументы передаем количество товара и копируем его картинку
            addProduct(productImage.getAttribute('src'), Number(value.textContent));
        });
    };  
};

// Функция для добавления товара в корзину
function addProduct(src, count) {

    // Сперва нужно проверить, есть ли в корзине элемент с похожей картинкой
    let srcImages = cart.querySelectorAll('.cart__product-image');

    if (srcImages.length > 0) {
        srcImages.forEach(item => function() {
            if (item.getAttribute('src') === src) {
                let value = cart.querySelector('.cart__product-count');
                value.textContent = Number(value.textContent) + count;

            };
        });
    } else {

      // Если нет, то создаем новую карточку
      let cartProduct = document.createElement('div');
      cartProduct.classList.add('cart__product');

      let cartProductImage = document.createElement('img');
      cartProductImage.classList.add('cart__product-image');
      cartProductImage.setAttribute('src', src);
      cartProduct.appendChild(cartProductImage);

      let cartProductCount = document.createElement('div');
      cartProductCount.classList.add('cart__product-count');
      cartProductCount.textContent = count;

      cartProduct.appendChild(cartProductCount);
      cartProducts.appendChild(cartProduct);      
    }    
};