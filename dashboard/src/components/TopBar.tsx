import React from "react";

import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="flex items-center justify-between h-[60px] w-full px-8 bg-white border-b border-gray-100 fixed top-0 left-0 z-50 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      <Menu />
    </div>
  );
};

export default TopBar;