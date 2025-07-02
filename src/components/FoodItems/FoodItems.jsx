import React, { useState } from 'react';
import { food_list } from '../../assets/frontend_assets/assets';
import ItemCard from '../ItemCard/item';

const FoodItems = ({ selectedCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFoods = food_list.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || selectedCategory === undefined
        ? true
        : item.category === selectedCategory;

    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto lg:px-40 px-4 py-6">
      <h2 className="text-3xl font-bold mb-4 text-center md:text-left" id='Menu'>
        Explore Our Delicious Menu
      </h2>

      <div className="mb-6 flex items-center">
        <i className="bi bi-search mr-2"></i>
        <input
          type="text"
          placeholder="Search food..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm rounded-md focus:outline-none border-b-4 border-white-500 "
        />
      </div>

      <div className="grid grid-cols-1 place-items-center md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((item, index) => (
            <ItemCard key={index} item={item} />
          ))
        ) : (
          <div className="col-span-full text-center">
            <img
              src="https://worldfoodtour.co.uk/wp-content/uploads/2013/06/neptune-placeholder-48.jpg"
              alt="No items found"
              className="mx-auto mb-4"
            />
            <p className="text-gray-500">
              No food items found matching "{searchTerm}" in {selectedCategory || 'All'} category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodItems;
