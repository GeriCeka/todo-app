// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Add Todo Listener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleted);
todoList.addEventListener("dblclick", saveTodo);

function addTodo(event) {
  event.preventDefault();
  if (todoButton.previousElementSibling.value.length === 0) {
    todoList.remove();
    alert("Please fill the blanket input");
  } 

  // TODO Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //CREATE LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  newTodo.contentEditable = false;
  todoDiv.appendChild(newTodo);

  //Edit button
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.classList.add("edit-btn");
  todoDiv.appendChild(editBtn);

  //Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("delete-btn");
  todoDiv.appendChild(deleteBtn);

  //Append to list
  todoList.appendChild(todoDiv);

  //Clear Input
  todoInput.value = "";
}

function deleted(event) {
  const item = event.target;
  //Delete TODO
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    todo.remove();
  }

  //Edit TODO
  if (item.classList[0] === "edit-btn") {
    // const todo = item.previousElementSibling.innerHTML;
    item.previousElementSibling.contentEditable = true;
    item.previousElementSibling.focus();
    item.innerText = "Save";
    item.classList.add("save-todo");
    console.log(item);
  }
}

function saveTodo(event) {
  const item = event.target;

  if (item.classList[1] === "save-todo") {
    item.previousElementSibling.contentEditable = false;
    item.previousElementSibling.blur();
    item.innerText = "Edit";
  }
}
