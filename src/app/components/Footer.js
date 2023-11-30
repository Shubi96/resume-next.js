import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="lg:flex gap-4">
        <div className="mb-4 lg:w-1/2">
          <h1 className="text-left text-xl font-bold mb-2">Additional Info.</h1>
          <ul>
            <li className="mb-2">
              <strong>Name:</strong> Professional certifications in Python and
              Java.
            </li>
            <li className="mb-2">
              <strong>Client testimonials:</strong> Communication skills.
            </li>
            <li className="mb-2">
              <strong>Technical skills.</strong>
            </li>
            <li className="mb-2">
              <strong>Linguistic skills.</strong>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2">
          {/* Add any additional content or styling for the right side of the footer */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
