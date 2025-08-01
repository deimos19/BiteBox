import React, { useEffect, useState } from "react";
import Checkout from "../../components/Checkout/Checkout";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [acceptedOrders, setAcceptedOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("userOrders")) || [];
    setOrders(savedOrders);

    const savedAccepted = JSON.parse(localStorage.getItem("acceptedOrders")) || [];
    setAcceptedOrders(savedAccepted);
  }, []);

  const handleAcceptOrder = (index) => {
    const updatedAccepted = [...acceptedOrders];
    updatedAccepted[index] = true;
    setAcceptedOrders(updatedAccepted);
    localStorage.setItem("acceptedOrders", JSON.stringify(updatedAccepted));
  };

  const confirmClearOrders = () => {
    localStorage.removeItem("userOrders");
    localStorage.removeItem("acceptedOrders");
    setOrders([]);
    setAcceptedOrders([]);
    document.getElementById("clear-orders-modal").checked = false;
  };

  return (
    <div className="container mx-auto lg:px-40 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">User Orders Overview</h2>
        {orders.length > 0 && (
          <label htmlFor="clear-orders-modal" className="btn btn-ghost">
            <i className="bi bi-trash3 mr-1"></i> Clear All Orders
          </label>
        )}
      </div>

      {/* Modal */}
      <input type="checkbox" id="clear-orders-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Confirm Clear</h3>
          <p className="py-4">Are you sure you want to clear all orders? This action cannot be undone.</p>
          <div className="modal-action">
            <label htmlFor="clear-orders-modal" className="btn btn-outline">Cancel</label>
            <button onClick={confirmClearOrders} className="btn btn-error">
              Yes, Clear All
            </button>
          </div>
        </div>
      </div>

      {orders.length === 0 ? (
        <>
          <p className="text-gray-300 text-center font-semibold my-3">No orders found.</p>
          <div className="grid grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex w-52 flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                  <div className="flex flex-col gap-4">
                    <div className="skeleton h-4 w-20"></div>
                    <div className="skeleton h-4 w-28"></div>
                  </div>
                </div>
                <div className="skeleton h-32 w-full"></div>
              </div>
            ))}
          </div>
        </>
      ) : (
        orders.map((order, orderIndex) => {
          const orderTotal = order.reduce(
            (total, item) => total + item.price * (item.quantity || 1),
            0
          );

          return (
            <div key={orderIndex} className="mb-8 bg-base-200 p-5 rounded-md shadow">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">Order #{orderIndex + 1}</h3>
                {acceptedOrders[orderIndex] ? (
                  <span className="badge badge-success text-black">
                    <i className="bi bi-check-circle mr-1"></i> Accepted
                  </span>
                ) : (
                  <button
                    className="btn btn-sm bg-green-600 text-white"
                    onClick={() => handleAcceptOrder(orderIndex)}
                  >
                    <i className="bi bi-check2-all mr-1"></i> Accept Order
                  </button>
                )}
              </div>

              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Item</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.map((item, index) => (
                      <Checkout key={index} item={item} index={index} />
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colSpan="4" className="text-right">Grand Total:</th>
                      <th>₹ {orderTotal}</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default AdminOrders;
