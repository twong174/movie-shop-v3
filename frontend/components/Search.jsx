import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {

 

  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-full flex items-center border rounded-md cursor-pointer">
        <input
          className="p-1 w-full text-sm placeholder-black focus:outline-none"
          placeholder="Search"
        />
        <SearchIcon />
      </div>
    </div>
  );
};

export default Search;
