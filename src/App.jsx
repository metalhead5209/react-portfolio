import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ContactForm from "./components/Contact/Contact";




function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default App;
