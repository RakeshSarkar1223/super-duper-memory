import React from "react";
import logo from "../../assets/images/logo.svg";

function Footer() {
  return (
    <>
      <div className="min-h-full bg-gray-100 shadow-md px-40">
        <div className="grid grid-cols-5 text-gray-500 pt-8">
          <div>
            <div className="">
              <img src={logo} alt="logo" className="w-4/5 pb-2 my-3" />
              <p>2010 - 2026, Zerodha Broking Ltd. All rights reserved.</p>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold flex justify-center ">Account</h3>
            <ol className="my-3">
              <li className="py-3 text-lg">
                <a href="/" className="hover:text-blue-600 transition-colors">Open demat account</a>
              </li>
              <li className="py-3 text-lg ">
                <a href="/" className="hover:text-blue-600 transition-colors">Open demat account</a>
              </li>
              <li className="py-3 text-lg ">
                <a href="/" className="hover:text-blue-600 transition-colors">Open demat account</a>
              </li>
              <li className="py-3 text-lg">
                <a href="/" className="hover:text-blue-600 transition-colors">Open demat account</a>
              </li>
              <li className="py-3 text-lg ">
                <a href="/" className="hover:text-blue-600 transition-colors">Open demat account</a>
              </li>
            </ol>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Footer;
