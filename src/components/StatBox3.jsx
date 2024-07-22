import React from "react";

const StatBox = () => {
  return (
    <div className="md:h-[200px] h-[150px] max-w-[550px] rounded-[35px] transition-transform transform hover:scale-105 bg-[#43434B] hover:bg-[#FFB200] flex items-center justify-start px-5 shadow-lg group">
      <div className="md:border-[20px] border-[15px] border-[#FFB200] group-hover:border-white rounded-full md:h-[150px] md:w-[150px] min-w-[100px] min-h-[100px] flex items-center justify-center">
        <h1 className="text-[#FFB200] group-hover:text-[#FFFFFF] text-xl josefin-sans-bold md:text-[42px] text-[24px] ">24</h1>
      </div>
      <div className="max-w-[300px] mx-8 text-white md:text-[24px] text-[16px] josefin-sans-semi">
      <p>Items <br />On Watchlist</p>
      </div>
    </div>
  );
};

export default StatBox;
