document.addEventListener("DOMContentLoaded", () => {
  function createNewTask() {
    let ul = document.getElementById("tasks");
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(name));
    ul.appendChild(li);
    li.innerHTML = document.getElementById("myDes").value;
  }
});
