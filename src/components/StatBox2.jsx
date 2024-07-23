import React from "react";

const StatBox = () => {
  return (
    <div className="md:h-[200px] h-[150px] max-w-[550px] rounded-[35px] transition-transform transform hover:scale-105 bg-[#43434B] hover:bg-[#FF8D1B] flex items-center justify-start px-5 shadow-lg group">
      <div className="md:border-[20px] border-[15px] border-[#FF8D1B] group-hover:border-white rounded-full md:h-[150px] md:w-[150px] min-w-[100px] min-h-[100px] flex items-center justify-center">
        <h1 className="text-[#FF8D1B] group-hover:text-[#FFFFFF] josefin-sans-bold md:text-[42px] text-[32px] ">24</h1>
      </div>
      <div className="max-w-[300px] mx-8 text-white md:text-[24px] text-[16px] josefin-sans-semi">
      <p>Series <br />Watched Together</p>
      </div>
    </div>
  );
};

export default StatBox;


