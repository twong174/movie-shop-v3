import React from "react";

import MovieWidget from "./widgets/MovieWidget";

const Main = () => {
  return (
    <div className="h-full w-full p-1  grid grid-rows-3 gap-1">
      <div className=" p-1">
        <h1 className="text-xl"> Trending </h1>
        <div className="grid grid-cols-4 gap-1">
          <MovieWidget />
          <MovieWidget />
          <MovieWidget />
          <MovieWidget />
        </div>
      </div>

      <div className=" p-1">
        <h1 className="text-xl"> Latest Movies </h1>
        <div className="grid grid-cols-4 gap-1">
          <MovieWidget />
          <MovieWidget />
          <MovieWidget />
          <MovieWidget />
        </div>
      </div>

      <div className=" p-1">
        <h1 className="text-xl"> Latest Shows </h1>
        <div className="grid grid-cols-4 gap-1">
          <MovieWidget />
          <MovieWidget />
          <MovieWidget />
          <MovieWidget />
        </div>
      </div>
    </div>
  );
};

export default Main;
