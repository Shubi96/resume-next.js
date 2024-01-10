import React from "react";

const Header = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <div className="mb-4">
        <img
          className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full border-4 border-black mx-auto"
          src="/office.jpg"
          alt="Profile Picture"
          style={{
            objectFit: "cover",
            objectPosition: "top",
            borderRadius: "50%",
          }}
        />
      </div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold mb-2">
        SHUBHAM SHARMA
      </h1>
      <div className="mb-4">
        <span className="block text-xs md:text-sm ">PHONE: 82195-66092</span>
        <h3 className="text-xs md:text-sm mb-1">shubhamsharmakgt@gmail.com</h3>
        <h3 className="text-xs md:text-sm">Address: Shimla HP</h3>
      </div>
    </div>
  );
};

export default Header;
