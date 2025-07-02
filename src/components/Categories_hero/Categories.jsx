import React from 'react'
import { menu_list } from '../../assets/frontend_assets/assets'

const Categories = ({ handleCategoryClick }) => {
  return (
    <div className="container mx-auto lg:px-50">
      <div className="px-4 py-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">What are you craving for?</h2>
          <a href="#" className="flex items-center">
            <i className="bi bi-search mx-2"></i> Search Food
          </a>
        </div>

        <div className="flex lg:flex-wrap overflow-x-auto lg:overflow-visible gap-4 no-scrollbar">
          {menu_list.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/4 no-scrollbar lg:w-24 text-center cursor-pointer hover:scale-90 transition-transform duration-200 lg:mx-3"
              onClick={() => handleCategoryClick(item.menu_name)}
            >
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className="w-20 h-20 lg:w-24 lg:h-24 object-cover rounded-full mx-auto mb-2 shadow-md"
              />
              <p className="text-sm font-medium">{item.menu_name}</p>
            </div>
          ))}
        </div>
      </div>
      <hr className="mx-10 my-4 border-gray-300" />
    </div>
  );
};

export default Categories;