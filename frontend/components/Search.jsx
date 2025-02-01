import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-1/3 flex items-center border">
        <input className="p-1 w-full" placeholder="Search" />
        <SearchIcon />
      </div>
    </div>
  );
};

export default Search;
