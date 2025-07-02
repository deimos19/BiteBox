import React from 'react';

import { useNavigate } from 'react-router-dom';

const ItemCard = ({ item }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    localStorage.setItem("cartItems", JSON.stringify([...existingCart, item]));
    alert(`${item.name} added to cart`);
  };

  return (
    <div className="card bg-base-100 w-72 shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <figure>
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-40 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg">{item.name}</h2>
        <p className="text-sm text-gray-600">{item.description}</p>
        <div className="card-actions justify-between items-center mt-2">
          <span className="text-yellow-600 font-semibold">₹ {item.price}</span>

          {user ? (<button
            className="btn btn-sm bg-yellow-500 text-white hover:bg-green-600"
            onClick={handleAddToCart}
          >
            <i className="bi bi-cart-plus"></i> Add to Cart
          </button>):(
            <button
            className="btn btn-sm bg-yellow-500 text-white hover:bg-green-600"
            onClick={()=>navigate('/Login')}
          >
            <i className="bi bi-cart-plus"></i> Add to Cart
          </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
