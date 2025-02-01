import React from "react";
import TestPoster from "/Users/tylerwong/movie-shop-v3/frontend/test_movie_poster.png";

const MovieWidget = () => {
  return (
    <div>
      <img src={TestPoster} />
      <div>
        <p> Batman </p> 
      </div>
    </div>
  );
};

export default MovieWidget;
