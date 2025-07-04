import React from 'react';

const AdminFoodCard = ({ item, index, handleDelete }) => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-300">
      <figure>
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-40 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg">{item.name}</h2>
        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
        <p className="text-yellow-600 font-semibold mb-2">₹ {item.price}</p>

        <div className="flex justify-end mt-3">
          <button
            className="btn btn-sm bg-red-600 text-white hover:bg-red-700"
            onClick={() => handleDelete(index)}
          ><i class="bi bi-trash3"></i>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminFoodCard;
