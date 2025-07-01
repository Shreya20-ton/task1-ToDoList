const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Load tasks from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  savedTasks.forEach(task => addTaskToDOM(task));
});

// Add new task on button click
addTaskBtn.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task) {
    addTaskToDOM(task);
    saveTask(task);
    taskInput.value = '';
  }
});

function addTaskToDOM(task) {
  const li = document.createElement('li');
  li.innerText = task;
  taskList.appendChild(li);
}

function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
