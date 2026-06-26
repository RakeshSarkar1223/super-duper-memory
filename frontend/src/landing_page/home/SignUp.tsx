import React from "react";
import { Button } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <section className="py-7 bg-white">
      <div className="max-w-3xl mx-auto text-center px-3">
        <h2 className="text-4xl text-gray-600 font-medium">
          Open a Zerodha account
        </h2>

        <p className="text-xl text-gray-500 leading-8 mb-5 mt-2">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&amp;O trades.
        </p>

        <Button className="bg-[#5790d5] hover:bg-[#10151a] border-0 rounded-xl px-7 py-2 text-lg font-semibold shadow-none text-white cursor-pointer transition-colors">
          <Link to="/signup">Sign up for free</Link>
        </Button>
      </div>
    </section>
  );
}

export default SignUp;
