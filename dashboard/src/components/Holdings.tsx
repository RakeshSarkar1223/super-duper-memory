import React, { useState, useEffect } from "react";
// import { holdings } from "../data/data";
import axios from "axios";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import faker from "faker";

const Holdings = () => {
  const [holdings, setHoldings] = useState([]);
  let totalVal = 0;
  let currVal = 0;
  let avgPnl = 0;
  let percent = 0;
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get("http://localhost:3002/getHoldings");

        if (response.status === 200) {
          setHoldings(response.data);
        }
      } catch (error) {
        console.error("Error fetching holdings:", error);
      }
    };

    loadData();
  }, []);

  // console.log(holdings);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Holdings",
      },
    },
  };

  const labels = holdings.map(item => item.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: holdings.map((item) => item.price),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="text-[18px] font-medium text-gray-700 mb-5">
        Holdings ({holdings.length})
      </h3>
      <div className="border border-gray-100 rounded-md  bg-white shadow-sm">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-[12px] font-normal text-gray-400 p-3.5 pl-5">
                Instrument
              </th>
              <th className="text-[12px] font-normal text-gray-400 p-3.5 text-right">
                Qty.
              </th>
              <th className="text-[12px] font-normal text-gray-400 p-3.5 text-right">
                Avg. cost
              </th>
              <th className="text-[12px] font-normal text-gray-400 p-3.5 text-right">
                LTP
              </th>
              <th className="text-[12px] font-normal text-gray-400 p-3.5 text-right">
                Cur. val
              </th>
              <th className="text-[12px] font-normal text-gray-400 p-3.5 text-right">
                P&L
              </th>
              <th className="text-[12px] font-normal text-gray-400 p-3.5 text-right">
                Net chg.
              </th>
              <th className="text-[12px] font-normal text-gray-400 p-3.5 text-right pr-5">
                Day chg.
              </th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((h, i) => {
              const curVal = h.qty * h.price;
              const invested = h.qty * h.avg;
              const pnl = curVal - invested;
              const isUp = pnl >= 0;
              totalVal += invested;
              currVal += curVal;
              avgPnl += pnl;
              percent = ((avgPnl / totalVal) * 100).toFixed(2);
              return (
                <tr
                  key={i}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="text-[13px] font-medium text-[#4184f3] p-3.5 pl-5">
                    {h.name}
                  </td>
                  <td className="text-[13px] text-gray-600 p-3.5 text-right">
                    {h.qty}
                  </td>
                  <td className="text-[13px] text-gray-600 p-3.5 text-right">
                    {h.avg.toFixed(2)}
                  </td>
                  <td className="text-[13px] text-gray-600 p-3.5 text-right">
                    {h.price.toFixed(2)}
                  </td>
                  <td className="text-[13px] text-gray-600 p-3.5 text-right">
                    {curVal.toFixed(2)}
                  </td>
                  <td
                    className={`text-[13px] font-medium p-3.5 text-right ${isUp ? "text-[#4caf50]" : "text-[#df514c]"}`}
                  >
                    {pnl.toFixed(2)}
                  </td>
                  <td
                    className={`text-[13px] font-medium p-3.5 text-right ${h.net.startsWith("+") ? "text-[#4caf50]" : "text-[#df514c]"}`}
                  >
                    {h.net}
                  </td>
                  <td
                    className={`text-[13px] font-medium p-3.5 text-right pr-5 ${h.day.startsWith("+") ? "text-[#4caf50]" : "text-[#df514c]"}`}
                  >
                    {h.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Bar options={options} data={data} />;
      <div className="flex gap-10 mt-8 border-t border-gray-100 pt-6">
        <div>
          <h5 className="text-[22px] font-light text-gray-700">{totalVal}</h5>
          <p className="text-[12px] text-gray-400 mt-1">Total investment</p>
        </div>
        <div>
          <h5 className="text-[22px] font-light text-gray-700">
            {currVal.toFixed(2)}
          </h5>
          <p className="text-[12px] text-gray-400 mt-1">Current value</p>
        </div>
        <div>
          <h5
            className={`text-[22px] font-medium ${percent >= 0 ? `text-[#4caf50]` : `text-[#df514c]`}`}
          >
            {avgPnl.toFixed(2)} ({percent >= 0 ? +percent : -percent}%)
          </h5>
          <p className="text-[12px] text-gray-400 mt-1">P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;
