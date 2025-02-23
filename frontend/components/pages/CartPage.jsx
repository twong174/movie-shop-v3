import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CartWidget from "../widgets/CartWidget";

const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  const fetchCart = async () => {
    try {
      const response = await axios.get("http://localhost:8000/getCart", {
        withCredentials: true,
      });
      setCartItems(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/deleteItem",
        { productId },
        { withCredentials: true }
      );

      if (response.status === 200 || response.status === 201) {
        setCartItems((prevItems) =>
          prevItems.filter((item) => item.productId !== productId)
        );
      }
    } catch (error) {
      console.log("Error deleting item:", error);
    }
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleCheckOut = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/checkout",
        {},
        { withCredentials: true }
      );
      if (response.status === 200) {
        alert("Order successfully placed!");
        setCartItems([]);
        navigate("/thankyou");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="w-full h-screen grid grid-rows-[auto_1fr] p-1 gap-1 border">
      <div className="flex items-center text-2xl gap-1 font-semibold cursor-pointer">
        <p>SaleSkip</p>
      </div>
      <div className="h-full grid grid-rows-[auto_1fr] gap-1">
        {cartItems.length === 0 ? (
          <div className="text-gray-500">
            Your cart is empty. Browse movies to add some!
          </div>
        ) : (
          <>
            <h1 className="text-2xl">Cart</h1>
            <div className="h-fill grid grid-cols-[70%_30%] gap-1">
              <div className="border flex flex-col gap-1 p-1">
                {cartItems.map((item) => (
                  <CartWidget
                    key={item.productId}
                    item={item}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
              <div className="border">
                <h1>Order Summary</h1>
                <p>Total: ${calculateTotal()}</p>
                <button
                  className="border"
                  onClick={handleCheckOut}
                  disabled={cartItems.length === 0}
                >
                  Check Out
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
