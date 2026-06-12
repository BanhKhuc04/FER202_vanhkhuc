import { useState } from "react";

function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (inputValue.trim() === "") return;
    setItems([...items, { id: Date.now(), text: inputValue.trim() }]);
    setInputValue("");
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div className="card">
      <h2 className="card-title">📝 To-do List</h2>
      <div className="input-row">
        <input
          type="text"
          className="text-input"
          placeholder="Enter item name..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          Add List
        </button>
      </div>

      <h3 className="list-heading">List of Items</h3>

      {items.length === 0 ? (
        <p className="empty-msg">No items yet. Add something above!</p>
      ) : (
        <ul className="todo-list">
          {items.map((item) => (
            <li key={item.id} className="todo-item">
              <span>{item.text}</span>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
