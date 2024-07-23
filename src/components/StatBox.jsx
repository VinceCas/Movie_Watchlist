import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

const StatBox = () => {

  const {watched} = useContext(GlobalContext);

  return (
    <div className="md:h-[200px] md:w-[600px] h-[150px] max-w-[550px] rounded-[35px] transition-transform transform hover:scale-105 bg-[#43434B] hover:bg-[#E53322] flex items-center justify-start px-5 shadow-lg group">
    <div className="md:border-[20px] border-[15px] border-[#E53322] group-hover:border-white rounded-full md:h-[150px] md:w-[150px] min-w-[100px] min-h-[100px] flex items-center justify-center">
        <h1 className="text-[#E53322] group-hover:text-[#FFFFFF] josefin-sans-bold md:text-[42px] text-[32px]">
          {watched.length}
        </h1>
      </div>
      <div className="max-w-[300px] mx-8 text-white md:text-[24px] text-[16px] josefin-sans-semi">
        <p>Movies <br />Watched Together</p>
      </div>
    </div>
  );
};

export default StatBox;
