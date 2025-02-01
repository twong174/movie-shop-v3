import React from "react";

import MovieWidget from "./widgets/MovieWidget";

const Main = () => {
  return (
    <div className="h-full w-full p-1 border grid grid-rows-3 gap-1">
      <div className="border p-1">
        <h1 className="text-xl"> Trending </h1>
        <div className="grid grid-cols-5 gap-1">
          <div className="border p-2">
            <MovieWidget />
          </div>
          <div className="border p-2">
            <MovieWidget />
          </div>
          <div className="border p-2">
            <MovieWidget />
          </div>
          <div className="border p-2">
            <MovieWidget />
          </div>
          <div className="border p-2">
            <MovieWidget />
          </div>
        </div>
      </div>

      <div className="border p-1">
        <h1 className="text-xl"> Latest Movies </h1>
        <div className="grid grid-cols-5 gap-1">
        <div className="border p-2">
            <MovieWidget />
          </div>
          <div className="border p-2">
            <MovieWidget />
          </div>
          <div className="border p-2">
            <MovieWidget />
          </div>
          <div className="border p-2">
            <MovieWidget />
          </div>
          <div className="border p-2">
            <MovieWidget />
          </div>
        </div>
      </div>

      <div className="border p-1">
        <h1 className="text-xl"> Latest Shows </h1>
        <div className="grid grid-cols-5 gap-1">
        <div className="border p-2">
            <MovieWidget />
          </div>
          <div className="border p-2">
            <MovieWidget />
          </div>
          <div className="border p-2">
            <MovieWidget />
          </div>
          <div className="border p-2">
            <MovieWidget />
          </div>
          <div className="border p-2">
            <MovieWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
