import React from 'react';
import BiteBox from "../../assets/hero-images/BiteBox.png";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = ({ toggleTheme, currentTheme }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  const restaurantStatus = localStorage.getItem('restaurantStatus') || 'Closed';

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/Login');
  };

  return (
    <div className="container mx-auto lg:px-40">
      <div className="navbar bg-base-100 text-base-content shadow-sm">
        
        <div className="navbar-start items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li><Link to={'/'}><i className="bi bi-house"></i> Home</Link></li>
              <li><Link to={'/about'}><i className="bi bi-question-circle"></i> About Us</Link></li>
              <li><Link to={'/support'}><i className="bi bi-telephone"></i> Support</Link></li>
              <li><Link><i className="bi bi-list-ul"></i> Menu</Link></li>
            </ul>
          </div>

          
          <img src={BiteBox} className='w-15' alt="logo" />
          <div className="flex flex-col">
            <p className="font-bold text-yellow-500 text-xl">BiteBox</p>
          </div>
        </div>

        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to={'/'}><i className="bi bi-house"></i> Home</Link></li>
            <li><Link to={'/about'}><i className="bi bi-question-circle"></i> About Us</Link></li>
            <li><Link to={'/Support'}><i className="bi bi-telephone"></i> Support</Link></li>
            <li><a href='#Menu'><i className="bi bi-list-ul"></i> Menu</a></li>
          </ul>
        </div>

        
        <div className="navbar-end gap-5">
          {user && (
            <div className="flex items-center gap-2 mt-1 rounded-lg border text-sm px-2 py-1">
              <div className="inline-grid *:[grid-area:1/1]">
                <div
                  className={`animate-ping rounded-full h-3 w-3 ${
                    restaurantStatus === 'Open' ? 'bg-green-500' : 'bg-red-500'
                  }`}
                ></div>
                <div
                  className={`rounded-full h-3 w-3 ${
                    restaurantStatus === 'Open' ? 'bg-green-600' : 'bg-red-600'
                  }`}
                ></div>
              </div>
              <small>{restaurantStatus}</small>
            </div>
          )}
          {user ? (
            <Link to="/cart" className="btn btn-ghost border-none hover:border-none">
              <i className="bi bi-cart-dash"></i> Cart
            </Link>
          ) : (
            <div className="form-control">
              <label className="label cursor-pointer">
                <small>
                  <span className="label-text mr-2">
                    {currentTheme === 'light' ? 'Light' : 'Dark'}
                  </span>
                </small>
                <input
                  type="checkbox"
                  className="toggle toggle-primary toggle-sm"
                  onChange={toggleTheme}
                  checked={currentTheme === 'dark'}
                />
              </label>
            </div>
          )}

          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="User"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <div className="form-control">
                    <label className="label cursor-pointer">Theme:
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
                <li><a onClick={handleLogout}>Logout</a></li>
              </ul>
            </div>
          ) : (
            <>
            <Link to={'/Login'} className="btn btn-ghost bg-yellow-500 text-black hover:bg-yellow-600">
              <i className="bi bi-box-arrow-in-left"></i> Sign In
            </Link>
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default Header;
