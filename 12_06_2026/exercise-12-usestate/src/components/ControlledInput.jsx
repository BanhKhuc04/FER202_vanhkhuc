import { useState } from "react";

export default function ControlledInput() {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>You typed: <strong>{text}</strong></p>
    </div>
  );
}
