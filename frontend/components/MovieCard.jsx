import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TestPoster from "/Users/tylerwong/movie-shop-v3/frontend/test_movie_poster.png";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

const MovieCard = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Hook that gives access to the current URL's location object
  const movieData = location.state; // Retrieves data passed via state

  const [addedToCart, setAddedToCart] = useState(false);

  const addToCart = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/cart/addToCart",
        {
          productId: movieData.imdbID,
          movieName: movieData.Title,
          moviePrice: 9.99,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 201) {
        alert("Added to cart!");
        setAddedToCart(true);
      } else {
        alert(response.data.message);  // Log the specific error message
      }
    } catch (error) {
      console.error("Full error:", error);
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  const navHome = () => {
    navigate("/home");
  };

  return (
    <div className="h-screen w-full bg-gray-100 p-10">
      {movieData ? (
        <>
          <div className="bg-white h-full rounded-xl p-4 grid grid-cols-[1fr_2fr]">
            <div className="p-4">
              <img className="rounded-lg" src={movieData.Poster} />
            </div>
            <div className=" p-4">
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <button
                    className="cursor-pointer rounded-xl p-2 bg-blue-700 text-white"
                    onClick={addToCart}
                    disabled={addedToCart}
                  >
                    {addedToCart ? "Added to Cart" : "Add to Cart"}
                  </button>
                  <button className="cursor-pointer bg-black text-white rounded-xl p-2">
                    Buy Now
                  </button>
                </div>
                <div className="cursor-pointer" onClick={navHome}>
                  <CloseIcon />
                </div>
              </div>

              <p className="mt-4 text-3xl font-light"> {movieData.Title} </p>
              <p className="mt-4 text-orange-400 font-bold">
                {" "}
                IMDb: {movieData.imdbRating}{" "}
              </p>

              <p className="mt-4">{movieData.Plot}</p>
              <div className="mt-4  grid grid-cols-2">
                <p> Released: {movieData.Released} </p>
                <p> Genre: {movieData.Genre} </p>
                <p> Casts: {movieData.Actors}</p>
                <p> Duration: {movieData.Runtime}</p>
                <p> Country: {movieData.Country} </p>
                <p> Production: {movieData.Production} </p>
              </div>
              <p className="mt-4 text-lg font-semibold">
                {" "}
                {movieData.imdbRating}
              </p>
            </div>
          </div>
        </>
      ) : (
        <p> Loading... </p>
      )}
    </div>
  );
};

export default MovieCard;
