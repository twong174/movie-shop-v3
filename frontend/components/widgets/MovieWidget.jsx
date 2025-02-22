import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import MovieLabel from "./MovieLabel";
import ShowLabel from "./ShowLabel";

const MovieWidget = ({ movieTitle }) => {
  const navigate = useNavigate();

  const [movieData, setMovieData] = useState(null);

  const getMovieData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/getMovie", {
        params: { movieTitle },
      });
      setMovieData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const navMovie = () => {
    if (movieData) {
      navigate(`/movie/${movieData.imdbID}`, { state: movieData });
    }
  };

  useEffect(() => {
    if (movieTitle) {
      getMovieData();
    }
  }, [movieTitle]);

  const price = movieData
    ? parseFloat(movieData.imdbRating).toFixed(2)
    : "0.00";

  return (
    <div className="p-1">
      {movieData ? (
        <>
          <div onClick={navMovie}>
            <img src={movieData.Poster} />
            <div className="flex items-center justify-between">
              <p className="font-semibold">{movieData.Title}</p>
              {movieData.Type === "movie" ? <MovieLabel /> : <ShowLabel />}
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-gray-600">
                  {movieData.Year}
                </p>
                <span className="text-gray-600 font-bold">&#183;</span>

                <p className="text-sm font-medium text-gray-600">
                  {movieData.Runtime}
                </p>
              </div>
            </div>
            <p className="px-1 font-semibold text-sm"> ${price}</p>
          </div>
        </>
      ) : (
        <p> Loading... </p>
      )}
    </div>
  );
};

export default MovieWidget;
