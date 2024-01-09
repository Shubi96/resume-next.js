import React from "react";
import Header from "./components/Header";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Social from "./components/Social";

const Home = () => {
  return (
    <div>
      <div id="header" className="border-b-[2px]">
        <Header />
      </div>

      <div id="scroll-projects" className="border-b-[2px]">
        <Projects />
      </div>

      <div id="scroll-experience" className="border-b-[2px]">
        <Experience />
      </div>

      <div id="scroll-skills" className="border-b-[2px]">
        <Skills />
      </div>

      <div id="scroll-education" className="border-b-[2px]">
        <Education />
      </div>

      <div id="scroll-footer" className="border-b-[2px]">
        <Footer />
      </div>

      <div id="scroll-social" className="border-b-[2px]">
        <Social />
      </div>
    </div>
  );
};

export default Home;
