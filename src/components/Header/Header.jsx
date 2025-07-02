import React from 'react'
import BiteBox from "../../assets/hero-images/BiteBox.png"
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  const handleLogout = () => {
  localStorage.removeItem('loggedInUser');
  alert('Logged out successfully!');
  navigate('/Login');
};
  return (
    <div className="container mx-auto lg:px-40">
        <div className="navbar bg-grey-500 text-white shadow-sm">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><a href='/'><i className="bi bi-house"></i>Home</a></li>
                <li><a><i className="bi bi-question-circle"></i>About Us</a></li>
                <li><a><i className="bi bi-telephone"></i>Support</a></li>
                <li><a><i className="bi bi-list-ul"></i>Menu</a></li>
            </ul>
            </div>
            <img src={BiteBox} className='w-15 mr-3' alt="logo" />
            <a className="font-bold text-yellow-500 text-xl">BiteBox</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><a href='/'><i className="bi bi-house"></i>Home</a></li>
                <li><a><i className="bi bi-question-circle"></i>About Us</a></li>
                <li><a><i className="bi bi-telephone"></i>Support</a></li>
                <li><a><i className="bi bi-list-ul"></i>Menu</a></li>
            </ul>
        </div>
        <div className="navbar-end gap-5">
            <a href='/cart' className="btn btn-square btn-ghost hover:bg-transparent border-none hover:border-none focus:border-none active:border-none hover:shadow-none"><i className="bi bi-cart-dash"></i>Cart</a> 
            {/* ✅ Conditionally show Login or Logout */}
          {user ? (
            <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a onClick={handleLogout}>Logout</a></li>
      </ul>
    </div>
          ) : (
            <a
              href='/Login'
              className="btn btn-ghost border-none hover:border-none focus:border-none active:border-none bg-yellow-500 text-black"
            >
              <i className="bi bi-box-arrow-in-left"></i> Sign In
            </a>
          )}
        </div>
    </div>
    </div>
  )
}

export default Header