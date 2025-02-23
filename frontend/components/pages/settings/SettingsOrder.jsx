import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SettingsOrder = () => {
  const navigate = useNavigate();
  const [orderItems, setOrderItems] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios("http://localhost:8000/getOrders", {
        withCredentials: true,
      });

      setOrderItems(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="h-full grid grid-rows-[auto_1fr] gap-1">
      {orderItems.length === 0 ? (
        <div className="text-gray-500">
          You have no past orders.
        </div>
      ) : (
        <>
          <h1 className="text-2xl">Order History</h1>
          <div className="h-fill grid grid-cols-[70%_30%] gap-1">
            <div className="border flex flex-col gap-1 p-1">
              {orderItems.map((item) => (
                <div key={item.productId} className="border p-2">
                  {item.movieName} - ${item.price} x {item.quantity}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SettingsOrder;
