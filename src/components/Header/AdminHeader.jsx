import React from 'react'
import BiteBox from "../../assets/hero-images/BiteBoxBusiness.png"
import { Link } from 'react-router-dom'

const AdminHeader = ({ toggleTheme, currentTheme }) => {
  return (
    <div className="container mx-auto lg:px-40">
      <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <img src={BiteBox} className='w-15 mr-3' alt="logo" />
    <p className="font-bold text-blue-400 text-xl">BiteBox Business</p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to={'/admin'}><i class="bi bi-house"></i>Home</Link></li>
      <li><a href='#food'><i class="bi bi-tools"></i>Manage Food</a></li>
      <li><Link to={'/admin/support'}><i class="bi bi-telephone"></i>Support</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <div className="mx-5 text-center">
      <Link to={'/admin/Orders'} className='btn btn-ghost'><i class="bi bi-view-list"></i>Orders</Link>
    </div>
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
        <li>
          <div className="form-control">
            <label className="label cursor-pointer">Theme :
              <span className="label-text mr-2">{currentTheme === 'light' ? 'Light' : 'Dark'}</span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                onChange={toggleTheme}
                checked={currentTheme === 'dark'}
              />
            </label>
          </div>
        </li>
        <li><a>Settings</a></li>
        <li><Link to={'/'}>Logout</Link></li>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default AdminHeader