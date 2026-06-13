import UserPosts from "./components/UserPosts";
import CountdownTimer from "./components/CountdownTimer";
import WindowSize from "./components/WindowSize";
import ValidatedInput from "./components/ValidatedInput";
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
      <h1>Exercise 13 – useEffect</h1>
      <Section title="1. Data Fetching – User Posts">
        <UserPosts userId={1} />
      </Section>
      <Section title="2. Countdown Timer">
        <CountdownTimer initialValue={10} />
      </Section>
      <Section title="3. Window Resize Listener">
        <WindowSize />
      </Section>
      <Section title="4. Form Input Validation">
        <ValidatedInput
          validationFunction={(v) => v.length >= 3}
          errorMessage="Input must be at least 3 characters."
        />
      </Section>
    </div>
  );
}
