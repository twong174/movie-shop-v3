import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );

      if (response.data.authenticated) {
        alert("authenticated");
        navigate("/home");
      } else {
        alert("NOT Authenticated");
        navigate("/login");
      }
      
    } catch (error) {
      console.log(error);
      alert(error.response.data);
    }
  };

  return (
    <div className="w-full h-screen p-10 bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-1/2 h-full rounded-lg flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold"> Welcome back! </h1>
          <p className="text-xs mt-2">Please enter your details</p>
          <div className="mt-5 flex flex-col w-full">
            <input
              className="text-sm placeholder-black border-b p-2 w-full mt-2 focus:outline-none"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              className=" text-sm placeholder-black border-b p-2 w-full mt-2 focus:outline-none"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <button
            className="cursor-pointer text-sm rounded-xl bg-black text-white w-full p-2 mt-4"
            onClick={login}
          >
            Login
          </button>
          <p className="text-xs mt-15">
            Don't have an account? <a href="/register"> Signup </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
