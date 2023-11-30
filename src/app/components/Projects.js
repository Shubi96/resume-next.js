import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="container mx-auto p-4 pl-8 ">
      {" "}
      {/* Add pl-4 for left padding */}
      <div className="lg:flex lg:justify-between">
        <div className="mb-4 lg:mb-0">
          <h1 className="text-left text-xl font-bold mb-4">Projects</h1>
          <div className="flex-col items-center justify-center">
            <h2 className="font-bold text-xl mb-2">Name</h2>
            <ul>
              <li className="mb-2">Shopify store creation</li>
              <li className="mb-2">Wordpress Shipping website</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
