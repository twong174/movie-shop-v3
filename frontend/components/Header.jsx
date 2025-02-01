import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import VideocamIcon from "@mui/icons-material/Videocam";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import Search from "./Search";

const Header = () => {
  return (
    <div className="p-2 grid grid-cols-[auto_1fr_1fr_auto] items-center gap-15">
      <div className="w-full flex gap-1 items-center">
        <VideocamIcon />
        <p className="text-xl font-bold"> PopcornPix </p>
      </div>
      <div className="">
        <ul className="w-full flex justify-between">
          <li className="cursor-pointer text-sm p-2 hover:bg-blue-700 hover:text-white hover:rounded-md">
            {" "}
            Home{" "}
          </li>
          <li className="cursor-pointer text-sm p-2 hover:bg-blue-700 hover:text-white hover:rounded-md">
            {" "}
            Genre{" "}
          </li>
          <li className="cursor-pointer text-sm p-2 hover:bg-blue-700 hover:text-white hover:rounded-md">
            {" "}
            Movies{" "}
          </li>
          <li className="cursor-pointer text-sm p-2 hover:bg-blue-700 hover:text-white hover:rounded-md">
            {" "}
            TV Shows{" "}
          </li>
        </ul>
      </div>
      <div>
        <Search/>
      </div>
      <div className="flex gap-2">
        <div className="flex  items-center">
          <ShoppingCartIcon />
          <p className="text-sm"> Cart </p>
        </div>

        <div className="flex  items-center">
          <PersonIcon />
          <p className="text-sm"> Account </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
