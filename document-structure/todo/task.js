const tasksAddButton = document.getElementById('tasks__add');
const tasksInput = document.getElementById('task__input');
let tasks = document.getElementById('tasks__list');

// Отслеживаем клик по кнопке
tasksAddButton.addEventListener('click', (evt) => {
    evt.preventDefault();

    // Если в инпуте что-то есть, то вызываем функцию добавления задачи
    if (tasksInput.value.trim().length > 0) {
        addTask(tasksInput.value);
    };
});

// Отслеживаем нажатие Enter на инпуте
tasksInput.addEventListener('keypress', (evt) => {
    // Если нажат Enter и в инпуте что-то есть, то вызываем функцию добавления задачи
    if ((evt.key === "Enter") && (tasksInput.value.trim().length > 0)) {
        addTask(tasksInput.value);
    };
});

// Функция добавления задачи в список задач
function addTask(taskText) {
    let task = document.createElement('div');
    task.classList.add('task');
    
    let taskTitle = document.createElement('div');
    taskTitle.classList.add('task__title');
    taskTitle.textContent = taskText;
    task.appendChild(taskTitle);

    let taskRemove = document.createElement('a');
    taskRemove.classList.add('task__remove');
    taskRemove.textContent = 'x';
    task.appendChild(taskRemove);
    
    tasks.appendChild(task);
    taskRemove.addEventListener('click', (evt) => {
        evt.preventDefault();
        tasks.removeChild(task);
    });

    tasksInput.value = null;
};