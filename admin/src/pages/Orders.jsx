import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/admin_assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  // Always prefer fresh token
  const adminToken = token || localStorage.getItem("adminToken");

  
     //FETCH ALL ORDERS
  
  const fetchAllOrders = async () => {
    if (!adminToken) {
      toast.error("Not Authorized - No Token");
      return;
    }

    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        {
          headers: {
  Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
}

        }
      );

      if (response.data.success) {
        setOrders(response.data.orders || []);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch orders");
    }
  };

  
    // UPDATE ORDER STATUS

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        {
          orderId,
          status: event.target.value,
        },
        {
          headers: {
            token: adminToken,
          },
        }
      );

      if (response.data.success) {
        toast.success("Order status updated");
        fetchAllOrders();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update status");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  //UI
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Order Page</h3>

      {orders.length === 0 ? (
        <p className="text-gray-500">No orders found</p>
      ) : (
        <div>
          {orders.map((order, index) => (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] 
                         lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr]
                         gap-3 items-start border-2 border-gray-200
                         p-5 md:p-8 my-3 text-xs sm:text-sm text-gray-700"
            >
              {/* ICON */}
              <img
                className="w-12"
                src={assets.parcel_icon}
                alt="parcel"
              />

              {/* ITEMS + ADDRESS */}
              <div>
                {order.items.map((item, i) => (
                  <p className="py-0.5" key={i}>
                    {item.name} x {item.quantity}{" "}
                    <span className="font-semibold">{item.size}</span>
                    {i !== order.items.length - 1 && ","}
                  </p>
                ))}

                <p className="mt-3 mb-2 font-medium">
                  {order.address.firstName} {order.address.lastName}
                </p>

                <p>
                  {order.address.street},{" "}
                  {order.address.city},{" "}
                  {order.address.state},{" "}
                  {order.address.country} - {order.address.zipcode}
                </p>

                <p>{order.address.phone}</p>
              </div>

              {/* ORDER INFO */}
              <div>
                <p>Items: {order.items.length}</p>
                <p className="mt-2">Method: {order.paymentMethod}</p>
                <p>Payment: {order.payment ? "Done" : "Pending"}</p>
                <p>
                  Date: {new Date(order.date).toLocaleString()}
                </p>
              </div>

              {/* AMOUNT */}
              <p className="font-semibold">
                {currency}
                {order.amount}
              </p>

              {/* STATUS */}
              <select
                value={order.status}
                onChange={(e) => statusHandler(e, order._id)}
                className="p-2 border font-semibold"
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out For Delivery">Out For Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
