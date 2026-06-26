import React from "react";
// import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

function MyNavbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50 py-1 shadow-xs">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4 transition-colors">
          <Link to="/">
            <img src={logo} alt="Zerodha" className="h-5 w-auto" />
          </Link>

          <div className="flex items-center gap-10 text-[15px]">
            <Link
              className="text-gray-600 no-underline hover:text-blue-600"
              to="/signup"
            >
              Signup
            </Link>

            <Link
              className="text-gray-600 no-underline hover:text-blue-600"
              to="/about"
            >
              About
            </Link>

            <Link
              className="text-gray-600 no-underline hover:text-blue-600"
              to="/products"
            >
              Products
            </Link>

            <Link
              className="text-gray-600 no-underline hover:text-blue-600"
              to="/pricing"
            >
              Pricing
            </Link>

            <Link
              className="text-gray-600 no-underline hover:text-blue-600"
              to="/support"
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
