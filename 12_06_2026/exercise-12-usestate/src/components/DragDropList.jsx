import { useState } from "react";

const initialItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];

export default function DragDropList() {
  const [items, setItems] = useState(initialItems);
  const [dragIndex, setDragIndex] = useState(null);

  function handleDragStart(index) {
    setDragIndex(index);
  }

  function handleDrop(dropIndex) {
    const newItems = [...items];

    const itemDangKeo = newItems[dragIndex];

    newItems.splice(dragIndex, 1);
    newItems.splice(dropIndex, 0, itemDangKeo);

    setItems(newItems);
    setDragIndex(null);
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={item}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop(index)}
          style={{
            padding: "10px",
            margin: "5px",
            background: "#ffc7c7",
            border: "1px solid gray",
            cursor: "grab",
            color: dragIndex === index ? "red" : "black",
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}