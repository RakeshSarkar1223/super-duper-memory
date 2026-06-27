import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const Menu = () => {
  const [idx, setIdx] = useState(0);
  const handleClick = (i) => {
    setIdx(i);
  };

  const handleProfileClick = () => {
    console.log("Profile clicked");
  };

  return (
    <div className="flex items-center justify-between w-full h-full select-none">
      {/* Left section: Logo & Indices */}
      <div className="flex items-center gap-8">
        <Link to="/" onClick={() => handleClick(0)} className="flex items-center">
          <img src={logo} className="w-[30px] h-auto" alt="Kite logo" />
        </Link>

        {/* Indices */}
        <div className="flex items-center gap-6 text-[11px] font-medium text-gray-400">
          <div className="flex items-center gap-2">
            <span className="tracking-wider">NIFTY 50</span>
            <span className="text-[#df514c] font-semibold">18,245.30</span>
            <span className="text-[#df514c] text-[10px]">-0.55%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="tracking-wider">SENSEX</span>
            <span className="text-[#df514c] font-semibold">61,900.20</span>
            <span className="text-[#df514c] text-[10px]">-0.50%</span>
          </div>
        </div>
      </div>

      {/* Right section: Navigation links & Profile */}
      <div className="flex items-center">
        <ul className="flex items-center gap-7">
          <li>
            <Link
              to="/"
              onClick={() => handleClick(0)}
              className={`flex items-center h-[60px] border-b-2 text-[13px] transition-colors ${
                idx === 0
                  ? "text-[#ff5722] border-[#ff5722] font-medium"
                  : "text-gray-500 border-transparent hover:text-[#ff5722]"
              }`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/holdings"
              onClick={() => handleClick(1)}
              className={`flex items-center h-[60px] border-b-2 text-[13px] transition-colors ${
                idx === 1
                  ? "text-[#ff5722] border-[#ff5722] font-medium"
                  : "text-gray-500 border-transparent hover:text-[#ff5722]"
              }`}
            >
              Holdings
            </Link>
          </li>
          <li>
            <Link
              to="/positions"
              onClick={() => handleClick(2)}
              className={`flex items-center h-[60px] border-b-2 text-[13px] transition-colors ${
                idx === 2
                  ? "text-[#ff5722] border-[#ff5722] font-medium"
                  : "text-gray-500 border-transparent hover:text-[#ff5722]"
              }`}
            >
              Positions
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              onClick={() => handleClick(3)}
              className={`flex items-center h-[60px] border-b-2 text-[13px] transition-colors ${
                idx === 3
                  ? "text-[#ff5722] border-[#ff5722] font-medium"
                  : "text-gray-500 border-transparent hover:text-[#ff5722]"
              }`}
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              to="/funds"
              onClick={() => handleClick(4)}
              className={`flex items-center h-[60px] border-b-2 text-[13px] transition-colors ${
                idx === 4
                  ? "text-[#ff5722] border-[#ff5722] font-medium"
                  : "text-gray-500 border-transparent hover:text-[#ff5722]"
              }`}
            >
              Funds
            </Link>
          </li>
          <li>
            <Link
              to="/apps"
              onClick={() => handleClick(5)}
              className={`flex items-center h-[60px] border-b-2 text-[13px] transition-colors ${
                idx === 5
                  ? "text-[#ff5722] border-[#ff5722] font-medium"
                  : "text-gray-500 border-transparent hover:text-[#ff5722]"
              }`}
            >
              Apps
            </Link>
          </li>
        </ul>

        {/* Separator */}
        <div className="w-[1px] h-4 bg-gray-200 mx-5" />

        {/* Profile Avatar */}
        <div
          className="flex items-center gap-2 cursor-pointer group select-none"
          onClick={handleProfileClick}
        >
          <div className="w-6 h-6 rounded-full bg-[#fcf1ed] border border-[#ffdecb] text-[#ff5722] text-[10px] font-semibold flex items-center justify-center">
            ZU
          </div>
          <span className="text-[12px] font-medium text-gray-500 group-hover:text-[#ff5722] uppercase">
            USERID
          </span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
