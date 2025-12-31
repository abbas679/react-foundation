import { useState } from "react";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (input === "") return;

    setTodos((prev) => [...prev, input]);
    setInput("");
  }

  function deleteTodo(index) {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>Todo App</h2>

      <input value={input} onChange={(e) => setInput(e.target.value)} />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
