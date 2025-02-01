import React from "react";

import MovieWidget from "./widgets/MovieWidget";

const Main = () => {
  return (
    <div className="h-full w-full p-3 grid grid-rows-3 gap-1">
      <div className=" p-1">
        <h1 className="text-2xl font-semibold"> Trending </h1>
        <div className="grid grid-cols-4 gap-2">
          <MovieWidget />
          <MovieWidget />
          <MovieWidget />
          <MovieWidget />
        </div>
      </div>

      <div className="p-1">
        <h1 className="text-2xl font-semibold"> Latest Movies </h1>
        <div className="grid grid-cols-4 gap-2">
          <MovieWidget />
          <MovieWidget />
          <MovieWidget />
          <MovieWidget />
        </div>
      </div>

      <div className=" p-1">
        <h1 className="text-2xl font-semibold"> Latest Shows </h1>
        <div className="grid grid-cols-4 gap-2">
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
