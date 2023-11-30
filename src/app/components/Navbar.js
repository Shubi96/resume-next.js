"use client";
import React, { useEffect, useState } from "react";

const scrollToSection = (id) => {
  const divId = "scroll-" + id;
  console.log({ divId });
  const element = document.getElementById(divId);
  if (element) {
    const offset = 75; // Adjust this value based on your design
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;
    console.log("scrolling to", offsetPosition);
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  } else {
    console.log("div not found");
  }
};

const Navbar = () => {
  useEffect(() => {
    const handleHashChange = () => {
      if (window) {
        const hash = window.location.hash.substr(1);
        if (hash) {
          scrollToSection(hash);
        }
      }
    };

    handleHashChange(); // Log initial hash

    if (typeof window !== "undefined") {
      window.addEventListener("hashchange", handleHashChange);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("hashchange", handleHashChange);
      }
    };
  }, []);
  const onClick = (e) => {
    //e.preventDefault();
  };

  return (
    <>
      <nav className="w-full bg-blue-300 flex items-center p-4 lg:px-10 gap-4 fixed transition duration-300 ease-in-out shadow-md">
        <a href="#" onClick={onClick}>
          <span className="cursor-pointer text-white hover:bg-blue-500 px-4 py-2 rounded-md transform hover:scale-105">
            Home
          </span>
        </a>
        <a href="#education" onClick={onClick}>
          <span className="cursor-pointer text-white hover:bg-blue-500 px-4 py-2 rounded-md transform hover:scale-105">
            Education
          </span>
        </a>
        <a href="#experience" onClick={onClick}>
          <span className="cursor-pointer text-white hover:bg-blue-500 px-4 py-2 rounded-md transform hover:scale-105">
            Experience
          </span>
        </a>
        <a href="#skills" onClick={onClick}>
          <span className="cursor-pointer text-white hover:bg-blue-500 px-4 py-2 rounded-md transform hover:scale-105">
            Skills
          </span>
        </a>
        <a href="#projects" onClick={onClick}>
          <span className="cursor-pointer text-white hover:bg-blue-500 px-4 py-2 rounded-md transform hover:scale-105">
            Projects
          </span>
        </a>
      </nav>
      <div style={{ height: 75 }}></div>
    </>
  );
};

export default Navbar;
