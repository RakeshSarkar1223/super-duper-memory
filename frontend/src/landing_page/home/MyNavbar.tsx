import React, { useState } from "react";
// import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

function MyNavbar() {
  const [idx, setIdx] = useState(0);
  const handlePage = (i) => {
    setIdx(i);
  }

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50 py-1 shadow-xs">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4 transition-colors">
          <Link to="/" onClick={() => handlePage(0)}>
            <img src={logo} alt="Zerodha" className="h-5 w-auto" />
          </Link>

          <div className="flex items-center gap-10 text-[15px]">
            <Link
              className={`no-underline hover:text-blue-600 ${idx === 1 ? `text-blue-600`: `text-gray-600`}`}
              to="/signup"
              onClick={() => handlePage(1)}
            >
              Signup
            </Link>

            <Link
              className={`no-underline hover:text-blue-600 ${idx === 2 ? `text-blue-600`: `text-gray-600`}`}
              to="/about"
              onClick={() => handlePage(2)}
            >
              About
            </Link>

            <Link
              className={`no-underline hover:text-blue-600 ${idx === 3 ? `text-blue-600`: `text-gray-600`}`}
              to="/products"
              onClick={() => handlePage(3)}
            >
              Products
            </Link>

            <Link
              className={`no-underline hover:text-blue-600 ${idx === 4 ? `text-blue-600`: `text-gray-600`}`}
              to="/pricing"
              onClick={() => handlePage(4)}
            >
              Pricing
            </Link>

            <Link
              className={`no-underline hover:text-blue-600 ${idx === 5 ? `text-blue-600`: `text-gray-600`}`}
              to="/support"
              onClick={() => handlePage(5)}
            >
              Support
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MyNavbar;
