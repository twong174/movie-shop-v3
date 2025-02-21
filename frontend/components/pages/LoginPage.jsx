import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!username || !password) return;
    const response = await login(username, password);
    if (isAuthenticated) {
      navigate("/home");
      alert("Successfully logged in!");
    } else {
      alert(response.message);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && username && password) {
      handleLogin();
    }
  };

  return (
    <div className="h-screen w-full grid grid-cols-[60%_40%] overflow-hidden">
      <div className="flex flex-col justify-center items-center p-5 gap-2 bg-blue-100">
        <h1 className="text-5xl w-1/2 font-semibold">Hello SaleSkip! </h1>
        <p className="w-1/2 font-light">
          Skip repetitive and manual sales-marketing tasks. Get highly
          productive through automation and save a ton of time!
        </p>
      </div>
      <div className="grid grid-rows-[20%_80%] gap-1">
        <div className="p-10">
          <p className="text-2xl font-semibold">SaleSkip</p>
        </div>
        <div className="p-10 flex flex-col gap-6">
          <h1 className="text-2xl font-semibold">Welcome Back!</h1>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              className="border-b text-xs p-2 focus:outline-none"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              onKeyDown={handleKeyDown}
            />
            <input
              type="password"
              className="border-b text-xs p-2 focus:outline-none"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              onKeyDown={handleKeyDown}
            />
          </div>
          <button
            className="bg-black text-white text-xs p-2 rounded-lg cursor-pointer"
            onClick={handleLogin}
            disabled={!username || !password}
          >
            Login
          </button>
          <p className="text-xs">
            Don't have an account?{" "}
            <a href="/register" className="cursor-pointer font-semibold">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
