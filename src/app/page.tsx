import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="border-[2px] border-blue-100 mt-[3px]">
        <Header />
      </div>
      <div className="border-[2px] border-blue-100 mt-[3px]">
        <Education />
      </div>
      <div className="border-[2px] border-blue-100 mt-[3px]">
        <Experience />
      </div>
      <div className="border-[2px] border-blue-100 mt-[3px]">
        <Skills />
      </div>
      <div className="border-[2px] border-blue-100 mt-[3px]">
        <Projects />
      </div>
      <div className="border-[2px] border-blue-100 mt-[3px]">
        <Footer />
      </div>
    </>
  );
}
