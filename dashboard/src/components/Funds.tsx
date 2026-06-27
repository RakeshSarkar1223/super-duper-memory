import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-gray-50 border border-gray-100 p-5 rounded-md mb-6">
        <p className="text-[13px] text-gray-600">Instant, zero-cost fund transfers with UPI</p>
        <div className="flex gap-4">
          <Link
            to="/"
            className="inline-block bg-[#4caf50] hover:bg-[#43a047] text-white text-[13px] font-medium px-5 py-2 rounded transition-colors"
          >
            Add funds
          </Link>
          <Link
            to="/"
            className="inline-block bg-[#387ed1] hover:bg-[#2e6dbd] text-white text-[13px] font-medium px-5 py-2 rounded transition-colors"
          >
            Withdraw
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 items-start">
        {/* Equity margins */}
        <div>
          <span className="block mb-4">
            <p className="text-[16px] font-medium text-gray-700">Equity</p>
          </span>

          <div className="border border-gray-100 rounded-md overflow-hidden bg-white shadow-sm">
            <div className="flex justify-between items-center p-3.5 px-5 border-b border-gray-100 text-[13px] text-gray-600">
              <p>Available margin</p>
              <p className="font-semibold text-[15px] text-[#ff5722]">4,043.10</p>
            </div>
            <div className="flex justify-between items-center p-3.5 px-5 border-b border-gray-100 text-[13px] text-gray-600">
              <p>Used margin</p>
              <p className="font-semibold text-gray-700">3,757.30</p>
            </div>
            <div className="flex justify-between items-center p-3.5 px-5 border-b border-gray-100 text-[13px] text-gray-600">
              <p>Available cash</p>
              <p className="font-semibold text-gray-700">4,043.10</p>
            </div>
            <div className="border-b border-gray-100" />
            <div className="flex justify-between items-center p-3.5 px-5 border-b border-gray-100 text-[13px] text-gray-500">
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className="flex justify-between items-center p-3.5 px-5 border-b border-gray-100 text-[13px] text-gray-500">
              <p>Opening Balance</p>
              <p>3,736.40</p>
            </div>
            <div className="flex justify-between items-center p-3.5 px-5 border-b border-gray-100 text-[13px] text-gray-500">
              <p>Payin</p>
              <p>4,064.00</p>
            </div>
            <div className="flex justify-between items-center p-3.5 px-5 border-b border-gray-100 text-[13px] text-gray-500">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="flex justify-between items-center p-3.5 px-5 border-b border-gray-100 text-[13px] text-gray-500">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="flex justify-between items-center p-3.5 px-5 border-b border-gray-100 text-[13px] text-gray-500">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="flex justify-between items-center p-3.5 px-5 border-b border-gray-100 text-[13px] text-gray-500">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <div className="border-b border-gray-100" />
            <div className="flex justify-between items-center p-3.5 px-5 border-b border-gray-100 text-[13px] text-gray-500">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="flex justify-between items-center p-3.5 px-5 border-b border-gray-100 text-[13px] text-gray-500">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="flex justify-between items-center p-3.5 px-5 text-[13px] text-gray-500">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        {/* Commodity account */}
        <div className="h-full">
          <div className="border border-gray-100 bg-gray-50 p-8 rounded-md text-center flex flex-col items-center justify-center min-h-[280px]">
            <p className="text-[14px] text-gray-600 mb-5">You don't have a commodity account</p>
            <Link
              to="/"
              className="inline-block bg-[#387ed1] hover:bg-[#2e6dbd] text-white text-[13px] font-medium px-5 py-2 rounded transition-colors"
            >
              Open Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;