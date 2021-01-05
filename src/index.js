document.addEventListener("DOMContentLoaded", () => {
  const taskCreateBtn = document.getElementById("create-task-form");
  const taskDis = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  function createNewTask(){
    var li = document.createElement("li");
    taskList.appendChild(li);
    li.innerHTML = taskDis
  }

  form.addEventListener('submit', createNewTask);
});
