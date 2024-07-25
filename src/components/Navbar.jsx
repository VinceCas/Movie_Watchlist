import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo, menulogo } from "../assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center w-[92%] mx-[10px] pt-2">
      <Link to="/">
      <div className="flex items-center md:ml-24 z-50">
        <img src={logo} className="mx-[3px] fade-up h-[30px] w-[30px]" alt="Logo" />
        <h1 className="josefin-sans-bold text-white items-baseline fade-up md:text-[20px] text-[30px] pt-[5px]">WatchBuddy</h1>
      </div>
      </Link>
      <div
        className={`absolute md:static bg-[#212124] z-10 ${isMenuOpen ? 'top-12 py-10 fade-down box-shadow' : 'fade-up top-[-100%]'} md:min-h-fit left-0 w-full md:w-auto flex md:items-center md:gap-[24px] gap-5 flex-col md:flex-row md:px-5 px-10`}
      >
        <ul className="flex md:flex-row md:items-center md:gap-[24px] gap-5 flex-col md:pb-[0px] pb-[50px] md:text-[16px] text-[32px] text-white z-50 josefin-sans-semi">
          <li className="transition-transform transform hover:scale-[105%]">
            <Link to="/">Home</Link>
          </li>
          <li className="transition-transform transform hover:scale-[105%]">
            <Link to="/watchlist">Watch List</Link>
          </li>
          <li className="transition-transform transform hover:scale-[105%]">
            <Link to="/watched">Watched</Link>
          </li>
          <li className="transition-transform transform hover:scale-[105%] md:bg-[#FF8D1B] md:px-[18px] md:py-[3px] md:rounded-full">
            <Link to="/search">+Add</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-6 md:hidden">
        <img
          src={menulogo}
          className="w-[20px] cursor-pointer"
          alt="Menu"
          onClick={toggleMenu}
        />
      </div>
    </nav>
  );
};

export default Navbar;
