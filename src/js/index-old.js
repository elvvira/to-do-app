// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
// import { sayHello } from './demo.js';

const input = document.getElementById('input');
const form = document.getElementById('form');
const tasks = document.getElementById('tasks');
const buttonClear = document.getElementById('button-clear');
const itemsNumber = document.getElementById('items-number');
const information = document.getElementById('information');
const buttonsInformation = document.getElementById('buttons-information');

let allTasks = [];

const createObject = value => {
  const timeStamp = Date.now();
  const newTask = {
    id: timeStamp,
    checked: false,
    task: value
  };

  allTasks.push(newTask);
  createTasks(allTasks);
};

const createTasks = arrayTasks => {
  const fragment = document.createDocumentFragment();

  arrayTasks.forEach(task => {
    // console.log(task);
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    const taskInput = document.createElement('input');
    taskInput.classList.add('task__item');
    taskInput.type = 'checkbox';
    taskInput.id = task.id;
    taskElement.append(taskInput);
    const taskLabel = document.createElement('label');
    taskLabel.classList.add('task__item');
    taskLabel.textContent = task.task;
    taskLabel.htmlFor = task.id;
    taskElement.append(taskLabel);
    const spanLabel = document.createElement('p');
    spanLabel.classList.add('task__span');
    spanLabel.textContent = 'x';
    taskElement.append(spanLabel);

    fragment.append(taskElement);
  });

  tasks.innerHTML = '';
  tasks.append(fragment);
};

const tasksActive = value => {
  console.dir(value);
};

const checkCompletedTask = id => {
  allTasks = allTasks.map(task => {
    if (Number(task.id) === id) {
      task.checked = !task.checked;
    }
  });
  printItems(allTasks);
};

buttonClear.addEventListener('click', e => {
  /*  for (let index = 0; index < allTasks.length; index++) {
    if (tasks.children[index].children[0].checked) {
      console.log('eliminar');
      tasks.children[index].children[0].checked = '';
    } */
  // console.dir(allTasks[index].checked);
  // console.dir(tasks.children[index].children[0].checked);

  console.log(completed);
});

form.addEventListener('submit', e => {
  e.preventDefault();
  createObject(e.target.value);
});

input.addEventListener('change', e => {
  input.value = ' ';
});

tasks.addEventListener('click', e => {
  if (e.target.classList.contains('task__span')) {
    e.target.parentElement.remove();
  }
});

buttonsInformation.addEventListener('click', e => {
  console.dir(e.target);

  [...buttonsInformation.children].forEach(button => {
    button.classList.remove('information__button--active');
  });
  e.target.classList.add('information__button--active');
  tasksActive(e.target);
});
