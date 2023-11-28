import React from "react";

const Header = () => {
  return (
    <div>
      <div className="w-[100%]">
        <img
          className="w-[150px] h-[150px] rounded-full border-[4px] border-black-[100] "
          src="/shubham.jpg"
        />
      </div>
      <h1 className=" font-bold">Shubham Sharma </h1>
      <div className="">
        <h3 className=" text-xs">82195-66092</h3>
        <h3 className=" text-xs">shubhamsharmakgt@gmail.com</h3>
        <h3 className=" text-xs">Address : Solan HP </h3>
      </div>
    </div>
  );
};

export default Header;
