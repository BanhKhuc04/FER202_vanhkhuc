import Counter from "./components/Counter";
import QuestionBank from "./components/QuestionBank";
import "./App.css";

function Section({ title, children }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function App() {
  return (
    <div className="app">
      <h1>Exercise 15 – useReducer</h1>
      <Section title="1. Counter with useReducer">
        <Counter />
      </Section>
      <Section title="2. Question Bank Quiz">
        <QuestionBank />
      </Section>
    </div>
  );
}
