// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
// import { sayHello } from './demo.js';

const input = document.getElementById('input');
const form = document.getElementById('form');
const tasks = document.getElementById('tasks');

const createTask = value => {
  const timeStamp = Date.now();
  const fragment = document.createDocumentFragment();

  const taskElement = document.createElement('div');
  taskElement.classList.add('task');
  fragment.append(taskElement);

  const taskInput = document.createElement('input');
  taskInput.classList.add('task__item');
  taskInput.type = 'checkbox';
  taskInput.id = timeStamp;
  taskElement.append(taskInput);
  const taskLabel = document.createElement('label');
  taskLabel.classList.add('task__item');
  taskLabel.textContent = value;
  taskLabel.htmlFor = timeStamp;
  taskElement.append(taskLabel);
  const spanLabel = document.createElement('p');
  spanLabel.classList.add('task__span');
  spanLabel.textContent = 'x';
  taskElement.append(spanLabel);

  tasks.append(fragment);
};

form.addEventListener('submit', e => {
  e.preventDefault();
});

input.addEventListener('change', e => {
  console.dir(e.target.value);
  createTask(e.target.value);
  input.value = ' ';
});

tasks.addEventListener('click', e => {
  console.dir(e.target);
  if (e.target.classList.contains('task__span')) {
    e.target.parentElement.remove();
  }
});
