import React from "react";
import TestPoster from "/Users/tylerwong/movie-shop-v3/frontend/test_movie_poster.png";

const MovieWidget = () => {
  return (
    <div className="mt-3 mb-3 cursor-pointer">
      <img className="rounded-lg" src={TestPoster} />
      <div className="flex justify-between mt-2 px-1">
        <p className="font-semibold	text-xl"> Batman </p>

        <div className="border rounded-md flex justify-center items-center px-1">
          <p className="text-xs font-medium">Movie</p>
        </div>
      </div>

      <div className="flex justify-between px-1">
        <p className="text-sm"> 2024</p>
        <p className="text-sm"> 114M </p>
      </div>
      <p className="px-1 font-semibold text-md"> $5.99</p>
    </div>
  );
};

export default MovieWidget;
