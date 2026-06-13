import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import Theme from "./components/Theme";
import DishesList from "./components/DishesList";
import Cart from "./components/Cart";
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
      <h1>Exercise 14 – useContext</h1>
      <ThemeProvider>
        <Section title="1. Theme Switcher">
          <Theme />
        </Section>
      </ThemeProvider>
      <CartProvider>
        <Section title="2. Dishes List">
          <DishesList />
        </Section>
        <Section title="3. Cart (Real-time Update)">
          <Cart />
        </Section>
      </CartProvider>
    </div>
  );
}
