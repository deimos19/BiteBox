// import { useState } from 'react'
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import './styles/general.css'
import Categories from './components/Categories_hero/Categories'
import FoodItems from './components/FoodItems/FoodItems'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Categories/>
    <Hero/>
    <FoodItems/>
    </>
  )
}

export default App
