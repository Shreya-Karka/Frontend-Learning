import { useState } from "react";
import "./TodoList.css";

function SimpleToDoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleAdd() {
    if (task.trim().length > 0) {
      const todo = {
        id: Date.now(),
        text: task,
        isCompleted: false,
      };
      setTodos([...todos, todo]);
      setTask("");
    }
  }

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="todo-list">
      <div className="input-section">
        <input
          type="text"
          value={task}
          placeholder="Add To do list...."
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Add Task</button>
      </div>

      <p>Total Todos: {todos.length}</p>

      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.text}</span>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-state">No Todos, Add above!</p>
      )}
    </div>
  );
}
export default SimpleToDoList;
