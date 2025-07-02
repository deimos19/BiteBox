import React, { useState } from 'react';
import { food_list } from '../../assets/frontend_assets/assets'; // Assuming your food_list is here
import AdminFoodCard from './AdminFoodCard';

const AdminFoodManager = () => {
  const [foods, setFoods] = useState(food_list);
  const [newFood, setNewFood] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    image: ''
  });

  const handleDelete = (index) => {
    const updatedFoods = [...foods];
    updatedFoods.splice(index, 1);
    setFoods(updatedFoods);
  };

  const handleAddFood = (e) => {
    e.preventDefault();
    const newFoodItem = {
      ...newFood,
      price: parseFloat(newFood.price),
      image: newFood.image || 'https://via.placeholder.com/150',  // Dummy image if not provided
      _id: Date.now().toString()
    };
    setFoods([newFoodItem, ...foods]);
    setNewFood({ name: '', price: '', description: '', category: '', image: '' });
  };

  const handleChange = (e) => {
    setNewFood({
      ...newFood,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto lg:px-40 py-8">
      <div className='flex justify-between'>
        <h2 className="text-2xl font-bold mb-6">Manage Food Items</h2>
        <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1">Add Food Item</div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-100 p-2 shadow-sm">
        
        <form onSubmit={handleAddFood} className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
          type="text"
          name="name"
          placeholder="Food Name"
          value={newFood.name}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newFood.price}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newFood.description}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={newFood.category}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newFood.image}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <button type="submit" className="btn bg-green-600 text-white w-full md:col-span-2">
          Add Food Item
        </button>
        
      </form>
        </ul>
        </div>
      </div>


      {/* Food Items List */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {foods.map((item, index) => (
          <AdminFoodCard key={index} item={item} index={index} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default AdminFoodManager;
