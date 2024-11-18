const addTaskBtn = document.querySelector(`.btn.addTask`);
const toDoList = document.getElementById(`toDoList`);
const inputVeli = document.getElementById(`inputVeli`);

let totalTasks = 0;
let completedTasks = 0;

const displayTotalTasks = document.createElement("div");
displayTotalTasks.innerText = `Total Tasks: ${totalTasks}`;
document.body.appendChild(displayTotalTasks);

const displayCompletedTasks = document.createElement("div");
displayCompletedTasks.innerText = `Completed Tasks: ${completedTasks}`;
document.body.appendChild(displayCompletedTasks);

addTaskBtn.addEventListener(`click`, function () {
  const taskText = inputVeli.value;
  if (taskText === "") return;

  totalTasks++;
  displayTotalTasks.innerText = `Total Tasks: ${totalTasks}`;

  const newTask = document.createElement(`li`);
  newTask.innerText = taskText;

  const doneBtn = document.createElement(`button`);
  doneBtn.className = `btn complete`;
  doneBtn.innerText = `Complete`;

  doneBtn.addEventListener(`click`, function () {
    if (doneBtn.innerText === 'Complete') {
      newTask.style.textDecoration = `line-through`;
      completedTasks++;
      displayCompletedTasks.innerText = `Completed Tasks: ${completedTasks}`;
      doneBtn.innerText = 'Undo';
    } else {
      newTask.style.textDecoration = ``;
      completedTasks--;
      displayCompletedTasks.innerText = `Completed Tasks: ${completedTasks}`;
      doneBtn.innerText = 'Complete';
    }
  });

  const delBtn = document.createElement(`button`);
  delBtn.className = `btn del`;
  delBtn.innerText = `Delete`;

  delBtn.addEventListener(`click`, function () {
    toDoList.removeChild(newTask);
    totalTasks--;
    displayTotalTasks.innerText = `Total Tasks: ${totalTasks}`;
    if (completedTasks > 0) {
      completedTasks--;
    }
    displayCompletedTasks.innerText = `Completed Tasks: ${completedTasks}`;
  });

  newTask.appendChild(doneBtn);
  newTask.appendChild(delBtn);
  toDoList.appendChild(newTask);

  inputVeli.value = ``;
});
