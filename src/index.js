document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const description = document.getElementById('new-task-description')
  let ul = document.getElementById("tasks");

  function createNewTask(){
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(name));
    ul.appendChild(li);
    li.innerHTML
    console.log(li.innerHTML)
  }

  form.addEventListener('submit', createNewTask);
});
