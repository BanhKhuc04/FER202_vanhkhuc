import { useState } from "react";
import Counter from "./components/Counter";
import ControlledInput from "./components/ControlledInput";
import ToggleVisibility from "./components/ToggleVisibility";
import TodoList from "./components/TodoList";
import ColorSwitcher from "./components/ColorSwitcher";
import SearchFilter from "./components/SearchFilter";
import DragDropList from "./components/DragDropList";
import "./App.css";



function App() {
  const [color, setColor] = useState("red");
  return (
    <div className="app"
          style={{
        minHeight: "100vh",
        backgroundColor: color,
        padding: 20,
      }}
    >
      <h1>Exercise 12 – useState</h1>
      <Section title="1. Counter"><Counter /></Section>
      <Section title="2. Controlled Input"><ControlledInput /></Section>
      <Section title="3. Toggle Visibility"><ToggleVisibility /></Section>
      <Section title="4. Todo List"><TodoList /></Section>
      <Section title="5. Color Switcher"><ColorSwitcher /></Section>
      <Section title="6. Search Filter"><SearchFilter /></Section>
      <Section title="7. Drag and Drop List"><DragDropList /></Section>

    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default App;
