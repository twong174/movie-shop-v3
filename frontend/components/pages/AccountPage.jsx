import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AccountPage = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);

  const displayUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/users/getUser",
        {
          withCredentials: true,
        }
      );

      if (response.data.authenticated) {
        setUserInfo(response.data.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );

      if (response.data.authenticated === false) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    displayUser();
  }, []);

  return (
    <div className="w-full h-screen bg-gray-100 p-10 flex items-center justify-center">
      {userInfo ? (
        <>
          <div className="bg-white w-1/2 h-full p-4 rounded-xl flex flex-col justify-between">
            <div>
              <p className="font-bold"> Name: {userInfo.firstName}</p>
              <p className="font-bold"> Username: {userInfo.username}</p>
              <p className="font-bold"> Email: {userInfo.emailAddress}</p>
            </div>

            <button
              className="bg-blue-700 rounded-md text-white p-1 text-sm cursor-pointer"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center">
        <p className="text-xl"> You're not logged in </p>
        <p className="text-xs"> ¯\_( ͡° ͜ʖ ͡°)_/¯ Log in <a href = "/login"> here</a> </p>
        </div>
      
        
      )}
    </div>
  );
};

export default AccountPage;
