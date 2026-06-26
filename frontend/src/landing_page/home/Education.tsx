import React from "react";
import edu from "../../assets/images/education.svg";
import { Link } from "react-router-dom";
function Education() {
  return (
    <>
      <div className="grid grid-cols-2 mx-33 mb-20 items-center">
        <div>
          <img src={edu} alt="edu" className="w-full h-auto object-contain" />
        </div>
        <div className="text-gray-500 pl-20 items-center">
          <h3 className="text-3xl font-semibold mb-5">
            Free and open market education
          </h3>
          <div className="text-lg py-4">
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <Link to="/">
              <p className="mt-3 text-blue-400 font-semibold text-xl pt-3 hover:text-gray-800 transition-colors">
                Versity <i className="fa-solid fa-arrow-right"></i>
              </p>
            </Link>
          </div>
          <div className="text-lg py-4">
            <p>
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <Link to="/">
              <p className="mt-3 text-blue-400 font-semibold text-xl pt-3 hover:text-gray-800 transition-colors">
                TradingQ&A <i className="fa-solid fa-arrow-right"></i>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
