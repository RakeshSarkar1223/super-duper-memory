import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-gray-600 text-center min-h-80 flex items-center justify-center">
      <div>
        <h1 className="text-3xl my-6 font-bold">404 Not Found</h1>
        <p className="text-lg">
          We couldn't find the page you were looking for.{" "}
          <Link to="/" className="text-blue-500 font-semibold no-underline">
            Visit Zerodha's home page
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}

export default NotFound;
