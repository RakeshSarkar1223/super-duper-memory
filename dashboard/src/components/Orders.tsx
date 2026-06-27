import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Orders = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] text-center">
      <div className="max-w-md">
        <p className="text-[14px] text-gray-500 mb-5">You haven't placed any orders today</p>
        <Link
          to="/"
          className=""
        >
          <Button variant="contained">Hello world</Button>
        </Link>
      </div>
    </div>
  );
};

export default Orders;