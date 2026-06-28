import React, { useEffect, useState } from "react";
// import { positions } from "../data/data";
import axios from "axios";

const Positions = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const responce = await axios.get("http://localhost:3002/getPositions");
      if(responce.status === 200) {
        setPositions(responce.data)
      }
    }
    loadData();
  }, [])

  return (
    <>
      <h3 className="text-[18px] font-medium text-gray-700 mb-5">Positions ({positions.length})</h3>

      <div className="border border-gray-100 rounded-md overflow-hidden bg-white shadow-sm">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-[12px] font-normal text-gray-400 p-3.5 pl-5">Product</th>
              <th className="text-[12px] font-normal text-gray-400 p-3.5">Instrument</th>
              <th className="text-[12px] font-normal text-gray-400 p-3.5 text-right">Qty.</th>
              <th className="text-[12px] font-normal text-gray-400 p-3.5 text-right">Avg.</th>
              <th className="text-[12px] font-normal text-gray-400 p-3.5 text-right">LTP</th>
              <th className="text-[12px] font-normal text-gray-400 p-3.5 text-right">P&L</th>
              <th className="text-[12px] font-normal text-gray-400 p-3.5 text-right pr-5">Chg.</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((p, i) => {
              const curVal = p.qty * p.price;
              const invested = p.qty * p.avg;
              const pnl = curVal - invested;
              const isUp = pnl >= 0;

              return (
                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="text-[12px] text-gray-500 font-semibold p-3.5 pl-5">
                    <span className="bg-gray-100 px-1.5 py-0.5 rounded text-[10px]">{p.product}</span>
                  </td>
                  <td className="text-[13px] font-medium text-[#4184f3] p-3.5">{p.name}</td>
                  <td className="text-[13px] text-gray-600 p-3.5 text-right">{p.qty}</td>
                  <td className="text-[13px] text-gray-600 p-3.5 text-right">{p.avg.toFixed(2)}</td>
                  <td className="text-[13px] text-gray-600 p-3.5 text-right">{p.price.toFixed(2)}</td>
                  <td className={`text-[13px] font-medium p-3.5 text-right ${isUp ? "text-[#4caf50]" : "text-[#df514c]"}`}>
                    {pnl.toFixed(2)}
                  </td>
                  <td className={`text-[13px] font-medium p-3.5 text-right pr-5 ${p.day.startsWith("+") ? "text-[#4caf50]" : "text-[#df514c]"}`}>
                    {p.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;