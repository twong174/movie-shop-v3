import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [username, setUsername] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const registerAccount = async () => {
    try {
      if (
        !firstName ||
        !username ||
        !emailAddress ||
        !password ||
        !confirmedPassword
      ) {
        alert("Missing field(s)");
      }

      if (password != confirmedPassword) {
        alert("Passwords not matching!");
      }

      const response = await axios.post("http://localhost:8000/registerUser", {
        firstName,
        username,
        emailAddress,
        password,
      });

      if (response.status === 201) {
        alert("Successfully created account!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen w-full grid grid-cols-[60%_40%] overflow-hidden">
      <div className=" flex flex-col justify-center items-center p-5 gap-2 bg-blue-100">
        <h1 className="text-5xl w-1/2 font-semibold">Hello SaleSkip! </h1>
        <p className="w-1/2 font-light">
          Skip repetitve and manual sales-marketing tasks. Get highly
          productiver through automation and save a ton of time!
        </p>
      </div>
      <div className=" grid grid-rows-[20%_80%] gap-1">
        <div className="p-10">
          <p className="text-2xl font-semibold">SaleSkip</p>{" "}
        </div>
        <div className="p-10 flex flex-col gap-6">
          <h1 className="text-2xl font-semibold">Sign Up!</h1>
          <div className="flex flex-col gap-4 ">
            <input
              type="text"
              className="border-b text-xs p-2 focus:outline-none"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            <input
              type="text"
              className="border-b text-xs p-2 focus:outline-none"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <input
              type="text"
              className="border-b text-xs p-2 focus:outline-none"
              placeholder="Email Address"
              onChange={(e) => setEmailAddress(e.target.value)}
              value={emailAddress}
            />
            <input
              type="password"
              className="border-b text-xs p-2 focus:outline-none"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <input
              type="password"
              className="border-b text-xs p-2 focus:outline-none"
              onChange={(e) => setConfirmedPassword(e.target.value)}
              value={confirmedPassword}
              placeholder="Confirm Password"
            />
          </div>
          <button
            className="bg-black text-white text-xs p-2 rounded-lg cursor-pointer"
            onClick={registerAccount}
          >
            {" "}
            Create Account{" "}
          </button>
          <p className="text-xs">
            Already have an account?{" "}
            <a href="/login" className="cursor-pointer font-semibold">
              {" "}
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
