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
      <div id="header">
        <Header />
      </div>

      <div id="scroll-projects">
        <Projects />
      </div>

      <div id="scroll-experience">
        <Experience />
      </div>

      <div id="scroll-skills">
        <Skills />
      </div>

      <div id="scroll-education">
        <Education />
      </div>

      <div id="scroll-footer">
        <Footer />
      </div>

      <div id="scroll-social">
        <Social />
      </div>
    </div>
  );
};

export default Home;
