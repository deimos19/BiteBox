import React, { useEffect, useState } from "react";
import CartItems from "../../components/CartItems/CartItems";
import Checkout from "../../components/Checkout/Checkout";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCart);
  }, []);

  const handleRemoveItem = (removeIndex) => {
    const updatedCart = cartItems.filter((_, index) => index !== removeIndex);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (index, newQuantity) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const handlePlaceOrder = () => {
    alert("Order Placed Successfully!");
    localStorage.removeItem("cartItems");
    setCartItems([]);
    setShowCheckout(false);
    navigate("/");  // Redirect to homepage after placing order
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <>
      <div className="container mx-auto lg:px-60">
        <div className="p-4">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold mb-4">
              <i className="bi bi-cart3 mr-3"></i>Your Cart
            </h2>
            <div className="flex gap-4 text-center items-center">
              <div>
                <p>
                  Cart Total :{" "}
                  <span className="text-green-500 font-semibold">₹ {cartTotal}</span>
                </p>
              </div>
              <button
                className="btn btn-link no-underline text-white hover:text-yellow-500"
                onClick={() => {
                  localStorage.removeItem("cartItems");
                  setCartItems([]);
                  setShowCheckout(false);
                }}
              >
                <i className="bi bi-x-lg"></i>Clear Cart
              </button>
            </div>
          </div>

          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://cdni.iconscout.com/illustration/free/thumb/free-empty-cart-illustration-download-in-svg-png-gif-file-formats--is-explore-box-states-pack-design-development-illustrations-3385483.png?f=webp"
                alt="Empty Cart"
              />
              <p className="text-center">Your cart is empty.</p>
            </div>
          ) : (
            <ul className="space-y-2">
              {cartItems.map((item, index) => (
                <CartItems
                  key={index}
                  item={item}
                  index={index}
                  handleRemoveItem={handleRemoveItem}
                  handleQuantityChange={handleQuantityChange}
                />
              ))}
            </ul>
          )}
        </div>

        <hr className="my-5" />

        {showCheckout && (
          <div className="my-5 overflow-x-auto">
            <h2 className="text-xl font-bold mb-3">Order Summary</h2>
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
                {cartItems.map((item, index) => (
                  <Checkout key={index} item={item} index={index} />
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan="4" className="text-right">
                    Grand Total:
                  </th>
                  <th>₹ {cartTotal}</th>
                </tr>
              </tfoot>
            </table>
          </div>
        )}

        {/* Button Toggle Section */}
        <div className="flex justify-end gap-3 mb-5">
          {/* View Order Summary Button */}
          <button
            className={`btn bg-green-600 text-white mt-4 ${showCheckout ? "hidden" : "block"}`}
            onClick={handleCheckout}
          ><i class="bi bi-book mr-1"></i>
            View Order Summary
          </button>

          {/* Place Order Button */}
          <button
            className={`btn bg-green-600 text-white mt-4 ${showCheckout ? "block" : "hidden"}`}
            onClick={handlePlaceOrder}
          ><i class="bi bi-arrow-return-left mr-1"></i>
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
