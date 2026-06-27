import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased text-[#444444] bg-white">
      <TopBar />
      <Dashboard />
    </div>
  );
};

export default Home;