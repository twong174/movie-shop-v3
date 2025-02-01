import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TestPoster from "/Users/tylerwong/movie-shop-v3/frontend/test_movie_poster.png";
import CloseIcon from '@mui/icons-material/Close';

const MovieCard = () => {

  const navigate = useNavigate();
  
  const [addedToCart, setAddedToCart] = useState(false);

  const addToCart = () => {
    setAddedToCart(!addedToCart);
    alert("Added to cart!");
  };

  const navHome = () => {
    navigate("/home");
  };


  return (
    <div className="h-screen w-full bg-gray-100 p-10">
      <div className="bg-white h-full rounded-xl p-4 grid grid-cols-[1fr_2fr]">
        <div className="p-4">
          <img className="rounded-lg" src={TestPoster} />
        </div>
        <div className=" p-4">
          <div className="flex justify-between">
            
            <div className="flex gap-2">
              <button
                className="cursor-pointer rounded-xl p-2 bg-blue-700 text-white"
                onClick={addToCart}
              >
                {addedToCart ? "Added to Cart" : "Add to Cart"}
              </button>
              <button className="cursor-pointer bg-black text-white rounded-xl p-2">
                Buy Now
              </button>
            </div>
            <div className="cursor-pointer" onClick={navHome}> 
              <CloseIcon/>
            </div>
          </div>

          <p className="mt-4 text-3xl font-light"> Batman </p>
          <p className="mt-4 text-orange-400 font-bold"> IMBd: 12.2 </p>

          <p className="mt-4">
            Kraven Kravinoff's complex relationship with his ruthless gangster
            father, Nikolai, starts him down a path of vengeance with brutal
            consequences, motivating him to become not only the greatest hunter
            in the world, but also one of its most feared.
          </p>
          <div className="mt-4  grid grid-cols-2">
            <p> Released: </p>
            <p> Released: </p>
            <p> Released: </p>
            <p> Released: </p>
            <p> Released: </p>
            <p> Released: </p>
          </div>
          <p className="mt-4 text-lg font-semibold"> $5.99 </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
