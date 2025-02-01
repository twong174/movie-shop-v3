import React from "react";
import TestPoster from "/Users/tylerwong/movie-shop-v3/frontend/test_movie_poster.png";

const MovieWidget = () => {
  return (
    <div>
      <img src={TestPoster} />
      <div className="flex justify-between">
        <p> Batman </p>
        <p> Movie </p>
      </div>

      <div className="flex justify-between">
        <p> 2024</p>
        <p> 114M </p>
      </div>
      <p> $5.99</p>
    </div>
  );
};

export default MovieWidget;
