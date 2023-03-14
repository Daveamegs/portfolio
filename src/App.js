import "./App.css";
import Intro from "./components/header/Intro";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Feedback from "./components/feedback/Feedback";
import Footer from "./components/footer/Footer";
import Top from "./components/Top";

function App() {
  return (
    <div>
      <Intro />
      <main className="main">
        <About />
        <Skills />
        <Education />
        <Feedback />
        <Top />
      </main>
      <Footer />
    </div>
  );
}

export default App;
