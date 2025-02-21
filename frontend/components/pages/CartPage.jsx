import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-md p-6 shadow-md">
        <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-gray-500">
            Your cart is empty. Browse movies to add some!
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 text-left">Movie</th>
                    <th className="p-3 text-left">Price</th>
                    <th className="p-3 text-left">Quantity</th>
                    <th className="p-3 text-left">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index} className="border-t">
                      <td className="p-3">{item.movieName}</td>
                      <td className="p-3">${item.price.toFixed(2)}</td>
                      <td className="p-3">{item.quantity}</td>
                      <td className="p-3">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex justify-end">
              <div className="text-xl font-semibold">
                Total: ${calculateTotal()}
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                className="bg-gray-200 px-4 py-2 rounded"
                onClick={() => navigate("/home")}
              >
                Continue Shopping
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
