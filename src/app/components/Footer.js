import React from "react";

const Footer = () => {
  return (
    <>
      <div className="py-6 pl-8">
        <div className="container mx-auto">
          <div className="lg:flex gap-4">
            <div className="mb-4 lg:w-1/2">
              <h1 className="text-left text-3xl font-bold mb-2 container mx-auto">
                Additional Info
              </h1>
              <ul className="list-disc pl-4">
                <li className="mb-2">
                  <strong>Name:</strong> Professional certifications in Python
                  and Java.
                </li>
                <li className="mb-2">
                  <strong>Client testimonials:</strong> Communication skills.
                </li>

                <li className="mb-2">
                  <strong>Linguistic skills.</strong>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              {/* Additional content can be added here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
