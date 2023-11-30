import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-blue-300 flex items-center p-4 lg:px-10 gap-4">
      <Link href="/">
        <span className="cursor-pointer">Home</span>
      </Link>
      <Link href="/education">
        <span className="cursor-pointer">Education</span>
      </Link>
      <Link href="/experience">
        <span className="cursor-pointer">Experience</span>
      </Link>
      <Link href="/skills">
        <span className="cursor-pointer">Skills</span>
      </Link>
      <Link href="/projects">
        <span className="cursor-pointer">Projects</span>
      </Link>
    </nav>
  );
};

export default Navbar;
