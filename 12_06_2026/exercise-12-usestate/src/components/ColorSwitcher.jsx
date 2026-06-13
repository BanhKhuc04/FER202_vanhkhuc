import { useState } from "react";

const colors = ["red", "blue", "green", "yellow", "purple"];

export default function ColorSwitcher() {
  const [color, setColor] = useState("white");
  return (
    <div>
      <select onChange={(e) => setColor(e.target.value)} defaultValue="">
        <option value="" disabled>Select a color</option>
        {colors.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <div
        style={{
          width: 150,
          height: 80,
          backgroundColor: color,
          marginTop: 10,
          border: "1px solid #ccc",
          borderRadius: 8,
        }}
      />
    </div>
  );
}
