import React from "react";

const Education = () => {
  return (
    <div id="education" className="container mx-auto p-8">
      <div className="lg:flex gap-8">
        <div className="mb-8 lg:w-1/2">
          <h1 className="text-left text-3xl font-bold mb-4 lg:mb-6">
            Education
          </h1>
          <div className="flex-col items-start justify-start">
            <h2 className="font-bold text-2xl mb-2">Institutions</h2>
            <ul className="list-disc pl-4">
              <li className="mb-2">
                <strong>10th:</strong> DAV Lakkar Bazaar Shimla
              </li>
              <li className="mb-2">
                <strong>12th:</strong> Govt Sen. Sec School Kandaghat Solan HP
              </li>
              <li className="mb-2 italic">
                <strong>Bachelor of Computer Application:</strong> Rajeev Gandhi
                Degree College Shimla [ 2015-2018]
              </li>
              <li className="mb-2 italic">
                <strong>Master of Computer Application:</strong> Bhara
                University Shimla Hills HP [ 2019-2021 ]
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-8 lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4 lg:mb-6">Marks</h2>
          <ul className="list-disc pl-4">
            <li className="mb-2">
              <strong>10th:</strong> 6.6 CGPA
            </li>
            <li className="mb-2">
              <strong>12th:</strong> 60%
            </li>
            <li className="mb-2">
              <strong>BCA:</strong> 6.6 CGPA
            </li>
            <li className="mb-2">
              <strong>MCA:</strong> 7.4 CGPA
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
