import Image from "next/image";
// import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Social from "./components/Social";
export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="border-b-[2px] order-black-400  mt-[3px]">
        <Header />
      </div>
      <div className="border-b-[2px] border-black-400 mt-[3px]">
        <Projects />
      </div>
      <div className="border-b-[2px] border-black-400 mt-[3px]">
        <Experience />
      </div>
      <div className="border-b-[2px] border-black-400 mt-[3px]">
        <Skills />
      </div>

      <div className="border-b-[2px] border-black-400 mt-[3px]">
        <Education />
      </div>
      <div className="border-b-[2px] border-black-400 mt-[3px]">
        <Footer />
      </div>
      <div className="border-b-[2px] border-black-400 mt-[3px]">
        <Social />
      </div>
    </>
  );
}
