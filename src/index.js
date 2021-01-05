document.addEventListener("DOMContentLoaded", () => {
  const createTask = document.getElementById("create-task-form");
  const taskDis = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  document.getElementByid("create-task-form").addEventListener("click", function() {
    var li = document.createElement("li");
    li.innerHTML =
    taskList.appendChild(li);
  });
});
