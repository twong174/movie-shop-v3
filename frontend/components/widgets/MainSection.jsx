import React from "react";

import MovieWidget from "./MovieWidget";

const MainSection = () => {
  return (
    <div className="h-full w-full grid grid-rows-3 gap-2">
      <div className="flex flex-col gap-1 p-1">
        <h1 className="text-2xl font-light">Trending</h1>
        <div className="grid grid-cols-4 gap-1">
          <MovieWidget movieTitle={"Batman"} />
          <MovieWidget movieTitle={"Superman"} />
          <MovieWidget movieTitle={"S"} />
          <MovieWidget movieTitle={"W"} />
        </div>
      </div>
      <div className="flex flex-col gap-1 p-1">
        <h1 className="text-2xl font-light">Latest Movies</h1>
        <div className="grid grid-cols-4 gap-1">
          <MovieWidget />
          <MovieWidget />
          <MovieWidget />
          <MovieWidget />
        </div>
      </div>
      <div className="flex flex-col gap-1 p-1">
        <h1 className="text-2xl font-light">Latest TV Shows</h1>
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

export default MainSection;
