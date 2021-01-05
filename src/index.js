document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskDis = document.getElementById("new-task-description");
  const ul = document.getElementById("taks");


  function createNewTask(){
    var li = document.createElement("li");
    taskList.appendChild(li);
    li.innerHTML = taskDis
  }

  form.addEventListener('submit', createNewTask);
});
