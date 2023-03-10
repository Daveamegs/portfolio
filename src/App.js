import "./App.css";
import Intro from "./components/header/Intro";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Feedback from "./components/feedback/Feedback";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Intro />
      <main>
        <About />
        <Skills />
        <Education />
        <Feedback />
        <Footer />
      </main>
    </div>
  );
}

export default App;
