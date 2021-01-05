document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskDis = document.getElementById("new-task-description").innerHTML;
  const ul = document.getElementById("tasks");

  function createNewTask(){
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(name));
    ul.appendChild(li);
    li.innerHTML =
  }

  form.addEventListener('submit', createNewTask);
});
