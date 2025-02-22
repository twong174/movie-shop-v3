import React from "react";

import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-2">
      <div className="flex items-center text-3xl gap-1 font-semibold cursor-pointer">
        <p>PopPix</p>
      </div>
      <div className="flex gap-8 items-center">
        <button className="cursor-pointer tracking-tight font-medium">
          HOME
        </button>
        <button className="cursor-pointer tracking-tight font-medium">
          GENRES
        </button>
        <button className="cursor-pointer tracking-tight font-medium">
          MOVIES{" "}
        </button>
        <button className="cursor-pointer tracking-tight font-medium">
          TV SHOWS
        </button>
      </div>
      <div className="border border-gray-600 rounded-md pl-1 cursor-pointer">
        <input
          type="text"
          placeholder="Search"
          className="text-sm focus:outline-none p-1 font-medium"
        />
        <SearchIcon />
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center cursor-pointer">
          <p>
            <Link to="/cart">
              <ShoppingCartIcon />
            </Link>
          </p>
        </div>
        <div className="flex items-center cursor-pointer">
          <p>
            <Link to="/settings">
              <SettingsIcon />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
