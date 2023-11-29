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
      <h1 className=" text-4xl font-sans">SHUBHAM SHARMA </h1>
      <div className="">
        <span>
          <h3 className=" text-xs border-b-[4px] border-black-300">
            PHONE : 82195-66092
          </h3>
        </span>
        <h3 className=" text-xs">shubhamsharmakgt@gmail.com</h3>
        <h3 className=" text-xs">Address : Solan HP </h3>
      </div>
    </div>
  );
};

export default Header;
