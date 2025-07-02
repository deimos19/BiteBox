import FoodItems from '../../components/FoodItems/FoodItems'
import Hero from "../../components/Hero/Hero"
import Categories from '../../components/Categories_hero/Categories';
import React, { useState } from 'react';

const Homepage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    
    const menuSection = document.getElementById('Menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
    <Categories handleCategoryClick={handleCategoryClick}/>
    <Hero/>
    <FoodItems selectedCategory={selectedCategory}/>
    </>
  )
}

export default Homepage