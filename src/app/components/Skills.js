import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="container mx-auto p-8">
      <div className="lg:flex gap-8">
        <div className="mb-8 lg:w-1/2">
          <div className="flex-col items-start justify-start">
            <h2 className="font-bold text-2xl mb-2">Technical Skills</h2>
            <ul className="list-disc pl-4">
              <li className="mb-2">JavaScript (ES6+)</li>
              <li className="mb-2">React.js</li>
              <li className="mb-2">Next.js</li>
              <li className="mb-2">Node.js</li>
              <li className="mb-2">Express.js</li>
              <li className="mb-2">HTML5 & CSS3</li>
              <li className="mb-2">RESTful APIs</li>
            </ul>
          </div>
        </div>

        <div className="mb-8 lg:w-1/2">
          <h2 className="font-bold text-2xl mb-2">Additional Skills</h2>
          <ul className="list-disc pl-4">
            <li className="mb-2">Version Control (Git)</li>
            <li className="mb-2">Responsive Web Design</li>
            <li className="mb-2">Problem Solving</li>
            <li className="mb-2">Agile Development</li>
            <li className="mb-2">Team Collaboration</li>
            <li className="mb-2">Technical Documentation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
