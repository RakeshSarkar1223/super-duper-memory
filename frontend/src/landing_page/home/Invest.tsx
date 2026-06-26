import React from "react";
import { Button } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
function Invest() {
  return (
    <section className="py-7 pt-10 bg-white">
      <div className="max-w-3xl mx-auto text-center px-6">

        <h2 className="text-4xl text-gray-600 font-medium">
          Invest in everything
        </h2>

        <p className="text-xl text-gray-500 leading-8 mb-5 mt-2">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
        </p>

        <Button
          className="bg-[#5790d5] hover:bg-[#10151a] border-0 rounded-xl px-7 py-2 text-lg font-semibold shadow-none text-white cursor-pointer transition-colors"
        >
          <Link to="/signup">Sign up for free</Link>
        </Button>

      </div>
    </section>
  );
}

export default Invest;