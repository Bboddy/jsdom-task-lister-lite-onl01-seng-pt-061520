document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskDis = document.getElementById("new-task-description");
  const ul = document.getElementById("tasks");

  function createNewTask(){
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(name));
    ul.appendChild(li);
    li.innerHTML = taskDis
  }

  form.addEventListener('submit', createNewTask);
});
