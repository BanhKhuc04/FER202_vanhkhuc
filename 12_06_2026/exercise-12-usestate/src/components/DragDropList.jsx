import { useState } from "react";

const initialItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

export default function DragDropList() {
  const [items, setItems] = useState(initialItems);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => setDraggingItem(index);

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggingItem === null || draggingItem === index) return;
    const newItems = [...items];
    const [removed] = newItems.splice(draggingItem, 1);
    newItems.splice(index, 0, removed);
    setDraggingItem(index);
    setItems(newItems);
  };

  const handleDragEnd = () => setDraggingItem(null);

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {items.map((item, index) => (
        <li
          key={item}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDragEnd={handleDragEnd}
          style={{
            padding: "8px 12px",
            margin: "4px 0",
            background: draggingItem === index ? "#cce5ff" : "#f0f0f0",
            border: "1px solid #bbb",
            borderRadius: 6,
            cursor: "grab",
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
