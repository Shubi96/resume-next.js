import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { FaGithub, FaTwitter, FaFacebookSquare } from "react-icons/fa";

const Social = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="lg:flex gap-8">
        <div className="mb-8 lg:w-1/2">
          <h1 className="text-left text-3xl font-bold mb-4 lg:mb-6">
            Social Links
          </h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="lg"
                className="text-blue-500 hover:text-blue-700"
              />
              <h2 className="font-bold text-xl">LinkedIn</h2>
            </div>
            <div className="flex items-center space-x-2">
              <FaGithub
                size="1.5em"
                className="text-gray-800 hover:text-gray-600"
              />
              <h2 className="font-bold text-xl">GitHub</h2>
            </div>
            <div className="flex items-center space-x-2">
              <FaTwitter
                size="1.5em"
                className="text-blue-400 hover:text-blue-600"
              />
              <h2 className="font-bold text-xl">Twitter</h2>
            </div>
            <div className="flex items-center space-x-2">
              <FaFacebookSquare
                size="1.5em"
                className="text-blue-700 hover:text-blue-900"
              />
              <h2 className="font-bold text-xl">Facebook</h2>
            </div>
          </div>
        </div>
        {/* Add any additional content or styling for the right side of the social component */}
      </div>
    </div>
  );
};

export default Social;
