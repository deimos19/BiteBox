import React from 'react'
import { menu_list } from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom';

const Categories = ({ handleCategoryClick }) => {
  return (
    <div className="container mx-auto lg:px-50">
      <div className="px-4 py-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">What are you craving for?</h2>
          <Link href="#" className="flex items-center">
            <i className="bi bi-search mx-2"></i> Search Food
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-4 overflow-x-auto lg:overflow-visible no-scrollbar px-2 py-4">
          {menu_list.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-24 text-center cursor-pointer hover:scale-95 transition-transform duration-200"
              onClick={() => handleCategoryClick(item.menu_name)}
            >
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className="w-20 h-20 object-cover rounded-full mx-auto mb-2 shadow-md"
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