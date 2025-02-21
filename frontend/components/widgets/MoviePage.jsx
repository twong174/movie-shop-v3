import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import CloseIcon from "@mui/icons-material/Close";

const MoviePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const movieData = location.state;

  const addToCart = async () => {
    if (!movieData || !movieData.imdbRating) {
      alert("Invalid movie data");
      return;
    }
    
    const price = parseFloat(movieData.imdbRating).toFixed(2);

    try {
      const response = await axios.post("http://localhost:8000/addToCart", {
        productId: movieData.imdbID, 
        movieName: movieData.Title,
        price: price,
      }, { 
        withCredentials: true
      });

      if (response.status === 201) {
        alert("Successfully added to cart!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen p-10 bg-gray-100">
      {movieData ? (
        <>
          <div className="bg-white h-full rounded-md p-10 grid grid-cols-[1fr_2fr]">
            <div className="flex flex-col items-center ">
              <img src={movieData.Poster} />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <button className="border p-1 rounded-md">Buy Now </button>
                  <button className="border p-1 rounded-md" onClick={addToCart}>
                    Add to Cart
                  </button>
                </div>
                <div
                  onClick={() => {
                    navigate("/home");
                  }}
                >
                  <CloseIcon />
                </div>
              </div>
              <h1 className="text-2xl font-light">{movieData.Title}</h1>
              <p className="font-semibold text-orange-400">
                IMDB: {movieData.imdbRating}
              </p>
              <p className="font-light">{movieData.Plot}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="">
                  {" "}
                  <p> Released: {movieData.Released} </p>
                  <p> Genre: {movieData.Genre} </p>
                  <p> Casts: {movieData.Actors}</p>
                </div>
                <div className="">
                  {" "}
                  <p> Duration: {movieData.Runtime}</p>
                  <p> Country: {movieData.Country} </p>
                  <p> Production: {movieData.Production} </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p> Loading... </p>
      )}
    </div>
  );
};

export default MoviePage;
