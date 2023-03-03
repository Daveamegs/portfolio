import "./App.css";
import Intro from "./components/header/Intro";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";

function App() {
  return (
    <div>
      <Intro />
      <main>
        <About />
        <Skills />
        <Education />
      </main>
    </div>
  );
}

export default App;
