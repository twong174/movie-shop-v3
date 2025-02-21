import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import { Link, Outlet } from "react-router-dom";

import LiveTvIcon from "@mui/icons-material/LiveTv";

import AccountWidget from "../widgets/AccountWidget";
import OrderHistoryWidget from "../widgets/OrderHistoryWidget";

import SettingsAccount from "./settings/SettingsAccount";
import SettingsOrder from "./settings/SettingsOrder";
import SettingsCart from "./settings/SettingsCart";

const AccountPage = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="h-screen w-full grid grid-rows-[auto_1fr] gap-1 p-1 ">
      <div className="flex items-center text-xl gap-1 font-semibold cursor-pointer">
        <LiveTvIcon />
        <p>
          <a href="/home">SaleSkip</a>
        </p>
      </div>
      <div className="border grid grid-rows-[auto_1fr] gap-1 p-1">
        <h1 className="text-2xl font-light">Account Settings</h1>
        <div className="grid grid-cols-[15%_85%] gap-1 p-1">
          <div className=" border flex flex-col items-center">
            <ul className="flex flex-col gap-10">
              <li>
                <Link to="account">Account</Link>
              </li>
              <li>
                <Link to="cart">Cart</Link>
              </li>
              <li>
                <Link to="orders">Orders</Link>
              </li>
              <li onClick={handleLogout}>Log Out</li>
            </ul>
          </div>
          <div className="border">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
