import React, { useEffect, useState } from "react";
// import { watchlist } from "../data/data";
import axios from "axios";
// import { log } from "console";


const WatchList = () => {
  const [watchlist, setWatchlist] = useState([]);
  
  useEffect(() => {
    const loadData = async () => {
      try{
        const responce = await axios.get("http://localhost:3002/getWatch", {withCredentials:true})
        if(responce.data.success){
          setWatchlist(responce.data.watch);
        }
      }
      catch(err){
        console.log(err);
      }
    }
    loadData();
  })

  return (
    <div className="w-[350px] min-w-[350px] max-w-[350px] border-r border-gray-100 bg-white h-full flex flex-col select-none">
      {/* Search Bar */}
      <div className="flex items-center justify-between px-5 h-[50px] border-b border-gray-100">
        <input
          type="text"
          placeholder="Search eg: infy bse, nifty fut ..."
          className="w-full text-[12px] text-gray-400 bg-transparent outline-none placeholder-gray-400"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-gray-400"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>

      {/* Stock list */}
      <div className="flex-grow overflow-y-auto">
        {watchlist.map((stock, i) => (
          <div
            key={i}
            className="flex items-center justify-between px-5 h-[50px] border-b border-gray-100 hover:bg-gray-50 cursor-pointer group transition-colors"
          >
            <span className="text-[13px] font-medium text-gray-700">
              {stock.name}
            </span>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4 group-hover:hidden">
                <span
                  className={`text-[11px] ${stock.isDown ? "text-[#df514c]" : "text-[#4caf50]"}`}
                >
                  {stock.percent}
                </span>
                <span
                  className={`text-[13px] font-medium ${
                    stock.isDown ? "text-[#df514c]" : "text-[#4caf50]"
                  }`}
                >
                  {stock.price.toFixed(2)}
                </span>
              </div>

              {/* Hover actions */}
              <div className="hidden group-hover:flex items-center gap-2">
                <button className="bg-[#4184f3] text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow-sm hover:bg-[#3574de] transition-colors">
                  B
                </button>
                <button className="bg-[#ff5722] text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow-sm hover:bg-[#e04a1b] transition-colors">
                  S
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchList;
