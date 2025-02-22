import React from "react";
import TestImage from "../../src/assets/test_movie_poster.png";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const CartWidget = ({ item, onDelete }) => {
  const deleteItem = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/deleteItem",
        {
          productId: item.productId,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200 || response.status === 201) {
        alert(`${item.movieName} was removed successfully!`);
        onDelete(item.productId);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" w-full grid grid-cols-[10%_90%] p-1">
      <div className=" flex items-start justify-center">
        <img src={TestImage} className="w-16" />
      </div>
      <div className="">
        <div className="flex justify-between items-center">
          <h1>{item.movieName}</h1>
          <p>${item.price.toFixed(2)}</p>
        </div>
        <div className="flex items-center gap-2" onClick={deleteItem}>
          <DeleteIcon />
          <p className="text-xs ">Delete</p>
        </div>
      </div>
    </div>
  );
};

export default CartWidget;
