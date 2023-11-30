import React from "react";

function Experience() {
  return (
    <div className="container mx-auto p-8">
      <div className="lg:flex gap-8">
        <div className="mb-8 lg:w-1/2">
          <h1 className="text-left text-3xl font-bold mb-4 lg:mb-6">
            Experience
          </h1>
          <div className="flex-col items-start justify-start">
            <h2 className="font-bold text-2xl mb-2">Preffer Groups</h2>
            <ul className="list-disc pl-4">
              <li className="mb-2">
                <strong>Company:</strong> DBUGLAB Pvt Ltd
              </li>
              <li className="mb-2">
                <strong>Location:</strong> Mohali, SAS Nagar
              </li>
              <li className="mb-2">
                <strong>Position:</strong> Software Developer
              </li>
              <li className="mb-2">
                <strong>Duration:</strong> December 2021 to September 2023
              </li>
              <li className="mb-2">
                <strong>Responsibilities:</strong>
                <ul className="list-disc pl-4">
                  <li className="mb-1">
                    Developing and maintaining web applications.
                  </li>
                  <li className="mb-1">
                    Collaborating with cross-functional teams.
                  </li>
                  <li className="mb-1">
                    Troubleshooting and debugging issues.
                  </li>
                  {/* Add more responsibilities as needed */}
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {/* Add another experience or additional content in the second half */}
        <div className="mb-8 lg:w-1/2">
          {/* Add another experience or additional content here */}
        </div>
      </div>
    </div>
  );
}

export default Experience;
