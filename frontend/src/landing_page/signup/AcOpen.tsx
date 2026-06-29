import React, { useState } from "react";
import ac_open from "../../assets/images/account_open.svg";
import { Button } from "@mui/material";
// import { Link } from "react-router-dom";
import axios from 'axios';
import { redirect } from "react-router-dom";

function AcOpen() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [toggleSignup, setToggleSignup] = useState<boolean>(true);

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setNumber(value);

    if (value.length > 0 && value.length < 10) {
      setError("Phone number must be 10 digits");
    } else {
      setError("");
    }
  };

  const handleSubmit =async (e) => {
    console.log("submitted")
    e.preventDefault();
    if(toggleSignup){
        const responce = await axios.post("http://localhost:3002/addUser",{
            phone:number,
            name:name,
            password:pass,
            email:email,
        }, {withCredentials:true});
        if(responce.status === 400){
            window.alert(responce.data);
            redirect("http://localhost:5174/signup");
        }
        if(responce.data.success){
            window.location.href = "http://localhost:5173";
        }
    }
    
  };

  return (
    <div className="grid grid-cols-[65%_45%]  mx-33 text-gray-600">
      <div className="px-5 flex justify-center">
        <img src={ac_open} alt="ac_open" className="h-[500px] w-auto object-contain" />
      </div>
      <div className="flex-col text-left mb-10 justify-center">
        {toggleSignup ? (
          <div className="w-8/12">
            <h3 className="text-2xl font-semibold">Signup Now</h3>
            <p className="text-md py-3">Or track your existing application</p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 bg-white p-6 rounded-xl shadow-lg border border-gray-200"
            >
              <div className="h-21">
                <label
                  htmlFor="number"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>

                <input
                  id="number"
                  type="text"
                  value={number}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className={`w-full h-12 px-4 rounded-lg border transition duration-200
        ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        }
        outline-none focus:ring-2`}
                />

                {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="pass"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <input
                  id="pass"
                  type="password"
                  placeholder="Enter your password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  required
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  mt: 1,
                  height: 48,
                  borderRadius: "10px",
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
                fullWidth
              >
                Create Account
              </Button>
              <div className="text-center">
                <p>
                  Already have an account?
                  <button
                    onClick={() => setToggleSignup(!toggleSignup)}
                    className="mx-2 text-blue-600 font-semibold cursor-pointer"
                  >
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="w-8/12">
            <h3 className="text-2xl font-semibold">Login</h3>
            <p className="text-md py-3">Access your account to continue</p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 bg-white p-6 rounded-xl shadow-lg border border-gray-200"
            >
              <div className="h-21">
                <label
                  htmlFor="number"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>

                <input
                  id="number"
                  type="text"
                  value={number}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className={`w-full h-12 px-4 rounded-lg border transition duration-200
        ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        }
        outline-none focus:ring-2`}
                />

                {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
              </div>

              <div>
                <label
                  htmlFor="pass"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <input
                  id="pass"
                  type="password"
                  placeholder="Enter your password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  required
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  mt: 1,
                  height: 48,
                  borderRadius: "10px",
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
                fullWidth
              >
                Login
              </Button>

              <div className="text-center">
                <p>
                  Don't have an account?
                  <button
                    type="button"
                    onClick={() => setToggleSignup(!toggleSignup)}
                    className="mx-2 text-blue-600 font-semibold cursor-pointer"
                  >
                    Sign Up
                  </button>
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default AcOpen;
