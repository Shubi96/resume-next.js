import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex gap-[480px]">
      <h1 className="text-left font-bold text-xl">Social Links</h1>

      <div className="flex-col items-center justify-center">
        <h2 className=" font-bold text-xl">Name</h2>
        <a
          className=""
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          className=""
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className=""
          href="https://twitter.com/your-twitter-handle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiTwitterXFill />
        </a>
        <a
          className=""
          href="https://facebook.com/your-facebook-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare />
        </a>
      </div>
    </div>
  );
};

export default Social;
