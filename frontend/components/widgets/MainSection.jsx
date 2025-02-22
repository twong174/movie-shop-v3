import React from "react";

import MovieWidget from "./MovieWidget";

const MainSection = () => {
  return (
    <div className="h-full w-full grid grid-rows-3 gap-6 p-2">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl ">Trending</h1>
        <div className="grid grid-cols-6 gap-1">
          <MovieWidget movieTitle={"Batman"} />
          <MovieWidget movieTitle={"Superman"} />
          <MovieWidget movieTitle={"Superman"} />
          <MovieWidget movieTitle={"Superman"} />
          <MovieWidget movieTitle={"S"} />
          <MovieWidget movieTitle={"W"} />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl">Latest Movies</h1>
        <div className="grid grid-cols-6 gap-1">
        <MovieWidget movieTitle={"Batman"} />
          <MovieWidget movieTitle={"Superman"} />
          <MovieWidget movieTitle={"Superman"} />
          <MovieWidget movieTitle={"Superman"} />
          <MovieWidget movieTitle={"S"} />
          <MovieWidget movieTitle={"W"} />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl">Latest TV Shows</h1>
        <div className="grid grid-cols-6 gap-1">
        <MovieWidget movieTitle={"Batman"} />
          <MovieWidget movieTitle={"Breaking Bad"} />
          <MovieWidget movieTitle={"Superman"} />
          <MovieWidget movieTitle={"Superman"} />
          <MovieWidget movieTitle={"S"} />
          <MovieWidget movieTitle={"W"} />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
