const todoInput = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");
const totalTasks = document.querySelector("#totalTasks");
const completedTasks = document.querySelector("#completedTasks");

let todos = [];

// TODO 3: Function to render todos
// Loop through todos array and display them
function renderTodos() {
  todoList.innerHTML = "";
  if (todos.length === 0) {
    todoList.innerHTML =
      '<li class="empty-state">No tasks yet. Add one above! 👆</li>';
    return;
  }

  todos.forEach((todo) => {
    let list = document.createElement("li");
    list.classList.add("todo-item");

    let span = document.createElement("span");
    span.classList.add("todo-item");
    span.innerHTML = todo.task;
    list.appendChild(span);
    span.addEventListener("click", () => {
      toggleTodo(todo.id);
    });

    if (todo.completed == true) {
      span.classList.add("completed");
    }

    let deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete"; // ← Add this!
    deletebtn.classList.add("delete-btn");

    deletebtn.addEventListener("click", () => {
      deleteTodo(todo.id);
    });
    list.appendChild(deletebtn);

    todoList.appendChild(list);
  });
  updateStats();
}

// TODO 4: Function to add a new todo
function addTodo() {
  let input = todoInput.value;
  todoInput.value = "";
  if (input.length !== 0) {
    let newId = Date.now();
    todos.push({ id: newId, task: input, completed: false });

    saveTodos();
    renderTodos();
  }
}

// TODO 5: Function to toggle todo completion
function toggleTodo(id) {
  let todo = todos.find((t) => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    saveTodos();
    renderTodos();
  }
}

// TODO 6: Function to delete todo
function deleteTodo(id) {
  todos = todos.filter((t) => t.id !== id);
  saveTodos();
  renderTodos();
}

// TODO 7: Function to save todos to localStorage
function saveTodos() {
  let saved = JSON.stringify(todos);
  localStorage.setItem("todos", saved);
}

// TODO 8: Function to load todos from localStorage
function loadTodos() {
  let saved = localStorage.getItem("todos");
  if (saved) {
    todos = JSON.parse(saved);
  } else {
    todos = [];
  }
}

// TODO 9: Function to update stats
function updateStats() {
  let len = todos.length;
  let completed = todos.filter((t) => t.completed === true).length;

  totalTasks.textContent = len;
  completedTasks.textContent = completed;
}

addBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});

// TODO 11: Initialize app when page loads
// 1. Load todos from localStorage
// 2. Render todos

loadTodos();
renderTodos();
