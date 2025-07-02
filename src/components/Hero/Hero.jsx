import React from 'react'
import BiteBox from '../../assets/hero-images/Bitebox.png';
import Categories from '../Categories_hero/Categories';


const Hero = () => {
  return (
    <>
     <div className='container mx-auto lg:px-40'>
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={BiteBox} alt="Delicious Food" className=""/>
            <div className='text-center lg:text-left'>
            <h1 className="text-5xl font-bold">Crave It. Order It. Enjoy It!</h1>
            <p className="py-6">
                From sizzling street bites to gourmet meals, get your favorite dishes delivered hot and fresh.
                Fast delivery, endless choices, and happiness in every bite!
            </p>
            <button className="btn btn-warning"><i class="bi bi-building"></i>Explore Menu</button>
            </div>
        </div>
    </div>
    </div>
    </>

  )
}

export default Hero