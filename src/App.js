import "./App.css";
import Intro from "./components/header/Intro";
import About from "./about/About";

function App() {
  return (
    <div>
      <Intro />
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
