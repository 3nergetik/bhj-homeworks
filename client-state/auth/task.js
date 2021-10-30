const welcome = document.getElementById("welcome");
const userID = document.getElementById("user_id");
const sign = document.getElementById("signin");
const url = "https://netology-slow-rest.herokuapp.com/auth.php";
const btnSend = document.getElementById("signin__btn");
const form = document.getElementById("signin__form");
const key = "welcome_active";

window.addEventListener("load", () => {
    const id = localStorage.getItem(key);
    if (id) {
        sign.classList.remove("signin_active");
        userID.textContent = id;
        welcome.classList.add("welcome_active");
    }
})

btnSend.onclick = (event) => {
    sendForm();
    event.preventDefault();
}

function sendForm() {
    const xhr = new XMLHttpRequest();
    const formData = new FormData(form);
    xhr.open("POST", url);
    xhr.send(formData);
    xhr.onload = () => {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            if (response.success) {
                sign.classList.remove("signin_active");
                userID.textContent = response["user_id"];
                welcome.classList.add("welcome_active");
                localStorage.setItem(key, response["user_id"]);
            }
            else {
                sign.classList.remove("signin_active");
                welcome.textContent = "Неверный логин/пароль";
                welcome.classList.add("welcome_active");
            }
        }
    }
}
