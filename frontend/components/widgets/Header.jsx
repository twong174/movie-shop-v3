import React from "react";

import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-1">
      <div className="flex items-center text-xl gap-1 font-semibold cursor-pointer">
        <LiveTvIcon />
        <p>SaleSkip</p>
      </div>
      <div className="flex gap-8 items-center">
        <button className="cursor-pointer">Home</button>
        <button className="cursor-pointer">Genres</button>
        <button className="cursor-pointer">Movies </button>
        <button className="cursor-pointer">TV Shows</button>
      </div>
      <div className="border">
        <input
          type="text"
          placeholder="Search"
          className="text-sm focus:outline-none p-1 rounded-md"
        />
        <SearchIcon />
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center cursor-pointer">
          <ShoppingCartIcon />
          <p>
            {" "}
            <Link to="/cart">Cart </Link>
          </p>
        </div>
        <div className="flex items-center cursor-pointer">
          <SettingsIcon />
          <p>
            <Link to="/settings">Settings </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
