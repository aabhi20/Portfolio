// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="w-full h-full absolute bg-[#0a0a1f] -z-10 snap-y snap-mandatory  scroll-smooth">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProjectSection />
      <Skills />
    </div>
  );
}

export default App;
