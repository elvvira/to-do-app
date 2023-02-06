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

let inputArray;

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
  printItems();
};
const printItems = () => {
  console.log(tasks.children.length);
  itemsNumber.textContent = tasks.children.length + ' ';
};

const clearElements = value => {
  console.dir(value.parentElement.parentElement.nextElementSibling.children);

  value.parentElement.parentElement.nextElementSibling.children.remove();
};

form.addEventListener('submit', e => {
  e.preventDefault();
});

input.addEventListener('change', e => {
  createTask(e.target.value);
  input.value = ' ';
});

buttonClear.addEventListener('click', e => {
  // console.dir(e.target);
  clearElements(e.target);
  // console.dir(tasks.children);
});

tasks.addEventListener('click', e => {
  if (e.target.classList.contains('task__span')) {
    e.target.parentElement.remove();
  }
});

buttonsInformation.addEventListener('click', e => {
  console.dir(e.target);
});
