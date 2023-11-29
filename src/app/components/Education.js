import React from "react";

const Education = () => {
  return (
    <div>
      <div className="flex gap-[500px]">
        <h1 className="text-left text-xl font-bold">Education </h1>
        <div className="flex-col items-center justify-center">
          <h1 className="font-bold text-xl">Institutions</h1>
          <nav className="">
            <li className="">
              10th DAV Shimla
              {/* <h2>
                <span className="bullet">&#8226;</span>10th DAV Shimla
              </h2> */}
            </li>
            <li className="">
              12th GSSS Kandaghat Solan
              {/* <h2>
                <span className="bullet">&#8226;</span>12th GSSS Kandaghat Solan{" "}
              </h2> */}
            </li>
            <li className="italic">
              Bachelor of Computer Application Shimla 2015-2018
              {/* <h2 className=" italic">
                <span className="bullet">&#8226;</span>Bachelor of Computer
                Application Shimla 2015-2018
              </h2> */}
            </li>
            <li className="italic">
              Master of Computer Application Bhara Univ Solan HP 2019-2020
              {/* <h2 className="italic">
                <span className="bullet">&#8226;</span>Master of Computer
                Application Bhara Univ Solan HP 2019-2020
              </h2> */}
            </li>
          </nav>
        </div>
        <div className="flex-col items-center justify-center">
          <h1 className="font-bold text-xl">MARKS</h1>
          <nav className="">
            <li className="">
              6.6 CGPA
              {/* <h2>
                {" "}
                <span className="bullet">&#8226;</span>6.6 CGPA
              </h2> */}
            </li>
            <li className="">
              60%
              {/* <h2>
                <span className="bullet">&#8226;</span> 60 %
              </h2> */}
            </li>
            <li className="">
              6.6 CGPA
              {/* <h2>
                <span className="bullet">&#8226;</span>6.6 CGPA
              </h2> */}
            </li>
            <li className="">
              7.4 CGPA
              {/* <h2>
                {" "}
                <span className="bullet">&#8226;</span>7.4 CGPA
              </h2> */}
            </li>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Education;
