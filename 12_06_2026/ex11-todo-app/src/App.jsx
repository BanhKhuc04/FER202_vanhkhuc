import TodoList from "./components/TodoList";
import Calculator from "./components/Calculator";
import SearchFilter from "./components/SearchFilter";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Exercise 11: React Components</h1>
      <div className="components-grid">
        <TodoList />
        <Calculator />
        <SearchFilter />
      </div>
    </div>
  );
}

export default App;
