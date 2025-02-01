import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieWidget from "./widgets/MovieWidget";
import axios from "axios";

const Main = () => {
  return (
    <div className="h-full w-full p-3 grid grid-rows-3 gap-1">
      <div className=" p-1">
        <h1 className="text-2xl font-semibold"> Trending </h1>
        <div className="grid grid-cols-4 gap-2">
          <MovieWidget movieTitle={"Batman"} />
          <MovieWidget movieTitle={"Superman"} />
          <MovieWidget movieTitle={"S"} />
          <MovieWidget movieTitle={"W"} />
        </div>
      </div>

      <div className="p-1">
        <h1 className="text-2xl font-semibold"> Latest Movies </h1>
        <div className="grid grid-cols-4 gap-2">
        <MovieWidget movieTitle={"Batman"} />
          <MovieWidget movieTitle={"Superman"} />
          <MovieWidget movieTitle={"S"} />
          <MovieWidget movieTitle={"W"} />
        </div>
      </div>

      <div className=" p-1">
        <h1 className="text-2xl font-semibold"> Latest Shows </h1>
        <div className="grid grid-cols-4 gap-2">
        <MovieWidget movieTitle={"Breaking Bad"} />
          <MovieWidget movieTitle={"Better Call Saul"} />
          <MovieWidget movieTitle={"Dexter"} />
          <MovieWidget movieTitle={"W"} />
        </div>
      </div>
    </div>
  );
};

export default Main;
