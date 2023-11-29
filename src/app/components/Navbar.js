import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-[100%] bg-blue-400 flex items-center p-5 gap-5">
      <Link href="/" className="list-none cursor-pointer">
        Home
      </Link>
      <Link href="/education" className="list-none cursor-pointer">
        Education
      </Link>
      <Link href="/experience" className="list-none cursor-pointer">
        Experience
      </Link>
      <Link href="/skills" className="list-none cursor-pointer">
        Skills
      </Link>
      <Link href="/projects" className="list-none cursor-pointer">
        Projects
      </Link>
    </nav>
  );
};

export default Navbar; //rafce
