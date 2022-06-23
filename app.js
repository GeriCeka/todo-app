// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Add Todo Listener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", clickHandler);

function addTodo(event) {
  event.preventDefault();
  if (todoButton.previousElementSibling.value.length === 0) {
    alert("Please fill the blanket input");
    return;
  }

  // // TODO Div
  // const todoDiv = document.createElement("div");
  // todoDiv.classList.add("todo");

  // //CREATE LI
  // const newTodo = document.createElement("li");
  // newTodo.innerText = todoInput.value;
  // newTodo.classList.add("todo-item");
  // newTodo.contentEditable = false;
  // todoDiv.appendChild(newTodo);

  // CREATE LI
  const todoLi = document.createElement("li");
  todoLi.classList.add("todo");

  //Create Div
  const newTodo = document.createElement("div");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  newTodo.contentEditable = false;
  todoLi.appendChild(newTodo); 

  //Edit button
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.classList.add("edit-btn");
  todoLi.appendChild(editBtn);

  //Save button
  const saveBtn = document.createElement("button");
  saveBtn.innerText = "Save";
  saveBtn.classList.add("save-btn");
  todoLi.appendChild(saveBtn);

  //Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("delete-btn");
  todoLi.appendChild(deleteBtn);

  //Append to list
  todoList.appendChild(todoLi);

  //Clear Input
  todoInput.value = "";
}

function clickHandler(event) {
  const item = event.target;
  //Delete TODO
  if (item.classList.contains("delete-btn")) {
    const todo = item.parentElement;
    todo.remove();
  }

  //Edit TODO
  if (item.classList.contains("edit-btn")) {
    item.previousElementSibling.contentEditable = true;
    item.previousElementSibling.focus();
    item.style.display = "none";
    item.nextElementSibling.style.display = "block";
  } else if (item.classList.contains("save-btn")) {
    item.previousElementSibling.contentEditable = false;
    item.previousElementSibling.blur();
    item.style.display = "none";
    item.previousElementSibling.style.display = "block";
  }
}
