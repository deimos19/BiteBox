import React from 'react'

const CartItems = ({ item, index, handleRemoveItem, handleQuantityChange }) => {
    

  return (
    <div className="card card-side bg-base-100 shadow-sm">
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
          <div className='flex gap-5 items-center'>
            <p>Quantity :</p>
            <input type="number" className="input validator w-15 focus:outline-none focus:ring-0 focus:border-none" required placeholder="" min="1" max="10" title="Set Quantity" defaultValue={1} onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}/>
          </div>
          <button className="btn btn-sm bg-yellow-700 text-white" onClick={() => handleRemoveItem(index)}>Remove from Cart</button>
        </div>
      </div>
    </div>
  );
}

export default CartItems