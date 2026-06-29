import React from "react";
import{useAuth} from '../context/AuthContext.tsx';
const Summary = () => {
  const {user} = useAuth();
  return (
    <>
      <div className="pb-4 border-b border-gray-100">
        <h6 className="text-[20px] font-normal text-gray-700">Hi, {user?.name.split(" ")[0]}</h6>
      </div>

      <div className="grid grid-cols-2 gap-8 items-start">
        {/* Equity Card */}
        <div className="border border-gray-100 rounded-md p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-4 border-b border-gray-50 pb-2">
            <span className="text-[15px] font-medium text-gray-700">Equity</span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[30px] font-light text-gray-800">3.74k</h3>
              <p className="text-[12px] text-gray-400 mt-1">Margin available</p>
            </div>
            <div className="h-12 w-[1px] bg-gray-100 mx-6" />
            <div className="flex-grow flex flex-col gap-2">
              <div className="flex justify-between text-[13px] text-gray-500">
                <span>Margins used</span>
                <span className="font-semibold text-gray-700">0</span>
              </div>
              <div className="flex justify-between text-[13px] text-gray-500">
                <span>Opening balance</span>
                <span className="font-semibold text-gray-700">3.74k</span>
              </div>
            </div>
          </div>
        </div>

        {/* Holdings Card */}
        <div className="border border-gray-100 rounded-md p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-4 border-b border-gray-50 pb-2">
            <span className="text-[15px] font-medium text-gray-700">Holdings (13)</span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[30px] font-light text-[#4caf50]">
                1.55k <small className="text-[14px] font-medium ml-1.5">+5.20%</small>
              </h3>
              <p className="text-[12px] text-gray-400 mt-1">P&L</p>
            </div>
            <div className="h-12 w-[1px] bg-gray-100 mx-6" />
            <div className="flex-grow flex flex-col gap-2">
              <div className="flex justify-between text-[13px] text-gray-500">
                <span>Current Value</span>
                <span className="font-semibold text-gray-700">31.43k</span>
              </div>
              <div className="flex justify-between text-[13px] text-gray-500">
                <span>Investment</span>
                <span className="font-semibold text-gray-700">29.88k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;