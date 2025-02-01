import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import VideocamIcon from "@mui/icons-material/Videocam";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import Header from "../Header";
import Search from "../Search";
import Main from "../Main";

const HomePage = () => {
  return (
    <div className="grid grid-rows-[1fr_10fr] h-screen">
      <div className="">
        <Header />
      </div>
      <div className="bg-green-100">
        <Main />
      </div>
    </div>
  );
};

export default HomePage;
