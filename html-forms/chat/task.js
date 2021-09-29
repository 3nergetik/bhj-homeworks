const chatWidgetSide = document.querySelector('.chat-widget__side');
const chatWidget = document.querySelector('.chat-widget');
const chatWidgetInput = document.getElementById('chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );

// Объявляем массив с ответами робота
let randomMessage = [
    'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
    'Добрый день! До свидания!', 
    'Кто тут?', 
    'Где ваша совесть?',
    'Мы ничего не будем вам продавать',
    'К сожалению, все операторы сейчас заняты. Не пишите нам больше'
];

// Функция, которая возвращает случайный ответ робота
let showRandom = function() {
    return randomMessage[Math.round(Math.random()) * (randomMessage.length - 1)];
};

chatWidgetSide.addEventListener('click', function() {
    chatWidget.classList.add('chat-widget_active');
});

// Функция по добавлению сообщения в чат
let addMessage = function(message, type) {
    let date = new Date().toLocaleTimeString().substring(0,5);
    let template = `
    <div class="message ${type}">
    <div class="message__time">${date}</div>
    <div class="message__text">${message}</div>
    </div>
    `;

    messages.innerHTML += template;
};

// Отслеживаем нажатие клавиш в окне чата
chatWidgetInput.addEventListener('keypress', function(evt) {
    if ((evt.key === 'Enter') && (chatWidgetInput.value)) {
        addMessage(chatWidgetInput.value, 'message_client');
        chatWidgetInput.value = null;
        addMessage(showRandom(), '');
    }
});