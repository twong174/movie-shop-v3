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

  return (
    <div className="p-1">
      {movieData ? (
        <>
          <div onClick={navMovie}>
            <img src={movieData.Poster} />
            <p className="font-semibold">{movieData.Title}</p>
            <div className="flex justify-between px-1">
              <div className="flex gap-2">
                <p className="text-sm font-medium text-gray-600">
                  {movieData.Year}
                </p>
                <p className="text-sm font-medium text-gray-600">
                  {movieData.Runtime}
                </p>
              </div>
              <MovieLabel />
            </div>
            <p className="px-1 font-semibold text-sm"> $5.99</p>
            <p>{movieData.imdbID}</p>
          </div>
        </>
      ) : (
        <p> Loading... </p>
      )}
    </div>
  );
};

export default MovieWidget;
