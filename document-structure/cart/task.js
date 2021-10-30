let controls = document.getElementsByClassName("product__quantity-controls");
let products = document.getElementsByClassName("product");
let cart = document.querySelector(".cart__products");

for (let control of controls) {
    const dec = control.querySelector(".product__quantity-control_dec");
    const inc = control.querySelector(".product__quantity-control_inc");
    const controlValue = control.querySelector(".product__quantity-value");

    inc.onclick = () => {
        controlValue.textContent = String(Number(controlValue.textContent) + 1);
    };

    dec.onclick = () => {
        if (Number(controlValue.textContent) > 1) {
            controlValue.textContent = String(Number(controlValue.textContent) - 1);
        }
    };
};

for (let product of products) {
    let buttonAdd = product.querySelector(".product__add");
    let count = product.querySelector(".product__quantity-value");
    const img = product.querySelector(".product__image");
    let quantity = product.getAttribute("data-id");

    buttonAdd.onclick = () => {
        let cartProducts = cart.querySelectorAll(".cart__product");
        let item = Array.from(cartProducts).find((item) => {
            if (item.getAttribute("data-id") === quantity) {
                return item;
            }
        });

        if (item) {
            let element = item.querySelector(".cart__product-count");
            element.textContent = String(Number(element.textContent) + Number(count.textContent));
            count.textContent = 1;
            return;
        }

        let div = document.createElement("div");
        let image = document.createElement("img");
        let divChild = document.createElement("div");
        div.appendChild(image);
        image.setAttribute("src", img.getAttribute("src"));
        image.classList.add("cart__product-image");
        div.classList.add("cart__product");
        div.setAttribute("data-id", quantity);
        divChild.classList.add("cart__product-count");
        divChild.textContent = count.textContent;
        count.textContent = "1";
        div.appendChild(divChild);
        cart.appendChild(div);
    };
};