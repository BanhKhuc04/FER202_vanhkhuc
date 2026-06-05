import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import BookingForm from "./components/BookingForm";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Menu />
      <BookingForm />
    </div>
  );
}

export default App;