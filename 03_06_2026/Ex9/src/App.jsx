import "./App.css";
import fptLogo from "./assets/img/logo_fpt.png";

import AboutMe from "./components/AboutMe";
import HelloWorld from "./components/HelloWorld";
import Counter from "./components/Counter";
import SimpleCard from "./components/SimpleCard";
import SimpleWebsite from "./components/SimpleWebsite";

function App() {
  const item = {
    title: "A Title",
    description: "The description goes here.",
    imageUrl: fptLogo,
  };

  return (
    <div className="app">
      <h1>Exercise 9: React Component</h1>

      <section className="section-box">
        <h2>1. About Me Component</h2>
        <AboutMe />
      </section>

      <section className="section-box">
        <h2>2. Hello World Component</h2>
        <HelloWorld />
      </section>

      <section className="section-box">
        <h2>3. Counter Application</h2>
        <Counter />
      </section>

      <section className="section-box">
        <h2>4. Create Simple Card</h2>
        <SimpleCard item={item} />
      </section>

      <section className="section-box">
        <h2>5. Create Simple Website</h2>
        <SimpleWebsite logo={fptLogo} />
      </section>
    </div>
  );
}

export default App;