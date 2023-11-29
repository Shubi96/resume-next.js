import React from "react";

function Experience() {
  return (
    <div className="flex gap-[490px]">
      <h1 className="text-left text-xl font-bold">Experience </h1>
      <div className="flex-col items-center justify-center">
        <h1 className="font-bold text-xl">Preffer Groups</h1>
        <li className="list-none">
          <h2>1. DBUGLAB Pvt Ltd </h2>
          <h2>Location : Mohali, SAS Nagar</h2>
        </li>
      </div>
      <div className="flex-col items-center justify-center ml-[290px]">
        <h1 className="font-bold text-xl">Years </h1>
        <li className="list-none">
          <h2>1.5 Years</h2>
          <h2>(Dec-2021 to Spt-2023)</h2>
        </li>
      </div>
    </div>
  );
}

export default Experience;
