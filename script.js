const addTaskBtn = document.getElementById(`addTaskBtn`);
const toDoList = document.getElementById(`toDoList`);
const inputVeli = document.getElementById(`inputVeli`);

addTaskBtn.addEventListener(`click`, function () {
  const taskText = inputVeli.value;
  if (taskText === " ") return;

  const newTask = document.createElement(`li`);
  newTask.innerText = taskText;

  const doneBtn = document.createElement(`button`);
  doneBtn.innerText = `Complete`;

  doneBtn.addEventListener(`click`, function () {
    newTask.style.textDecoration = `line-through`;
  });

  const delBtn = document.createElement(`button`);
  delBtn.innerText = `Delete`;

  delBtn.addEventListener(`click`, function () {
    toDoList.removeChild(newTask);
  });

  newTask.appendChild(doneBtn);
  newTask.appendChild(delBtn);
  toDoList.appendChild(newTask);
  inputVeli.value = ` `;
});
