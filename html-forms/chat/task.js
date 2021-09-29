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
showRandom = function() {
    return randomMessage[Math.round(Math.random()) * (randomMessage.length - 1)];
}

chatWidgetSide.addEventListener('click', function() {
    chatWidget.classList.add('chat-widget_active');
});

// Функция по добавлению сообщения в чат
addMessage = function(message, type) {
    // Для начала создаем 3 дива
    let div = document.createElement("div");
    let text = document.createElement("div");
    let time = document.createElement("div");

    // Помещаем 2 дива в родительский див
    div.appendChild(text);
    div.appendChild(time);

    // Родительскому диву добавляем класс .message

    div.classList.add('message');

    // А если это сообщение от клиента, то добавляем класс .message_client
    if (type) {
        div.classList.add('message_client');
    }

    // Добавляем диву класс message__time и помещаем туда текущее время в формате HH:MM
    time.classList.add('message__time');
    time.textContent = new Date().toLocaleTimeString().substring(0,5);

    // Добавляем диву класс message_text и помещаем туда текст сообщения
    text.classList.add('message__text');
    text.textContent = message;

    // Помещаем полученный див в окно чата
    messages.appendChild(div);
}

// Отслеживаем нажатие клавиш в окне чата
chatWidgetInput.addEventListener('keypress', function(evt) {

    // И если нажата клавиша Enter и в инпуте что-то есть, то...
    if ((evt.key === 'Enter') && (chatWidgetInput.value)) {

        // Вызываем функцию добавления сообщения и передаем туда сообщение и флаг клиента
        addMessage(chatWidgetInput.value, 'client');

        // Очищаем поле ввода
        chatWidgetInput.value = null;

        // Вызываем рандомное сообщение от робота
        addMessage(showRandom());
    }
});