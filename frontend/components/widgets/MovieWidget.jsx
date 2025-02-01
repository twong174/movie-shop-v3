import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MovieWidget = ({ movieTitle }) => {
  const navigate = useNavigate();

  const [movieData, setMovieData] = useState(null);

  const getMovieData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/movies/getMovie",
        {
          params: { movieTitle },
        }
      );
      setMovieData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const navMovie = () => {
    if (movieData) {
      navigate(`/movie/${movieData.imdbID}`);
    }
  };

  useEffect(() => {
    if (movieTitle) {
      getMovieData();
    }
  }, [movieTitle]);

  return (
    <div className="mt-3 mb-3 cursor-pointer" onClick={navMovie}>
      {movieData ? (
        <>
          <img className="rounded-lg" src={movieData.Poster} />
          <div className="flex justify-between mt-2 px-1">
            <p className="font-semibold	text-xl"> {movieData.Title} </p>

            <div className="border rounded-md flex justify-center items-center px-1">
              <p className="text-xs font-medium">Movie</p>
            </div>
          </div>

          <div className="flex justify-between px-1">
            <p className="text-sm"> {movieData.Year} </p>
            <p className="text-sm"> {movieData.Runtime} </p>
          </div>
          <p className="px-1 font-semibold text-md"> $5.99</p>
        </>
      ) : (
        <p> Loading... </p>
      )}
    </div>
  );
};

export default MovieWidget;
