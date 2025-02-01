import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import VideocamIcon from "@mui/icons-material/Videocam";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import Header from "../Header";
import Search from "../Search";

const HomePage = () => {
  return (
    <div className="grid grid-rows-[1fr_1fr_10fr] h-screen">
      <div>
        <Header />
      </div>
      <div className="">
        <Search />
      </div>
      <div className="bg-green-100 p-2">3</div>
    </div>
  );
};

export default HomePage;
