import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const WelcomePage = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [username, setUsername] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const register = async () => {
    if (!firstName || !username || !emailAddress || !password || !confirmPassword) {
      alert("Missing fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords dont match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/registerUser",
        {
          firstName,
          username,
          emailAddress,
          password,
        }
      );

      if (response.status === 201) {
        alert("Registered!");
        navigate("/login");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="w-full h-screen p-10 bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-1/2 h-full rounded-lg flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold"> Register here! </h1>
          <p className="text-xs mt-2">Please enter your details</p>
          <div className="mt-5 flex flex-col w-full">
            <input
              className="text-sm placeholder-black border-b p-2 w-full mt-2 focus:outline-none"
              placeholder="Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              type="text"
            />

            <input
              className="text-sm placeholder-black border-b p-2 w-full mt-2 focus:outline-none"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
            />
            <input
              className="text-sm placeholder-black border-b p-2 w-full mt-2 focus:outline-none"
              placeholder="Email"
              onChange={(e) => setEmailAddress(e.target.value)}
              value={emailAddress}
              type="email"
            />
            <input
              className=" text-sm placeholder-black border-b p-2 w-full mt-2 focus:outline-none"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
            />
            <input
              className=" text-sm placeholder-black border-b p-2 w-full mt-2 focus:outline-none"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              type="password"
            />
          </div>
          <button
            className="cursor-pointer text-sm rounded-xl bg-black text-white w-full p-2 mt-4"
            onClick={register}
          >
            Register
          </button>
          <p className="text-xs mt-15">
            Already have an account? <a href="/login">Login </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
