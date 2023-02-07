import '../scss/styles.scss';

const input = document.getElementById('input');
const form = document.getElementById('form');
const tasks = document.getElementById('tasks');
const buttonsInformation = document.getElementById('buttons-information');

let allTasks = [];
let completedTasks = [];
let activeTasks = [];

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

const completeTask = id => {
  //   console.log(id);
  allTasks = allTasks.map(task => {
    if (task.id === id) {
      task.checked = !task.checked;
    }
    return task;
  });
  createTasks(allTasks);
};

const filterTaskChecked = () => {
  const completedTasks = allTasks.filter(task => {
    return task.checked;
  });
  createTasks(completedTasks);
};

const createTasks = arrayTasks => {
  const fragment = document.createDocumentFragment();

  arrayTasks.forEach(task => {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    const taskInput = document.createElement('input');
    taskInput.classList.add('task__item');
    taskInput.type = 'checkbox';
    taskInput.checked = task.checked;
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

tasks.addEventListener('click', e => {
  if (e.target.classList.contains('task__span')) {
    e.target.parentElement.remove();
  }

  completeTask(Number(e.target.id));
  //   console.dir(e.target);
});

buttonsInformation.addEventListener('click', e => {
  //   console.dir(e.target);

  [...buttonsInformation.children].forEach(button => {
    button.classList.remove('information__button--active');
  });
  e.target.classList.add('information__button--active');

  filterTaskChecked();
});

form.addEventListener('submit', e => {
  e.preventDefault();
  createObject(e.target.task.value);
  e.target.task.value = '';
});
