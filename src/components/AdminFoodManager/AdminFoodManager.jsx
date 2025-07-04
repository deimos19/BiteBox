import React, { useState } from 'react';
import { food_list } from '../../assets/frontend_assets/assets';
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
      image: newFood.image || 'https://via.placeholder.com/150',
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
        <div tabIndex={0} role="button" className="btn btn-ghost hover:btn-primary m-1"><i class="bi bi-bag-plus-fill mr-1"></i>Add Food Item</div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-200 rounded-box z-1 w-100 p-2 shadow-sm">
        
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
        <button type="submit" className="btn bg-green-500 text-white md:col-span-2"><i className="bi bi-bag-plus-fill"></i>
        Add Item</button>
        
      </form>
        </ul>
        </div>
      </div>


      
      <div className="grid grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-4 gap-4">
        {foods.map((item, index) => (
          <AdminFoodCard key={index} item={item} index={index} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default AdminFoodManager;
