import React, { useState } from 'react';
import BiteBox from "../../assets/hero-images/hero2.png";
import { useNavigate,Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState({ message: '', type: '' });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem('userLoginDetails'));

    if (savedUser) {
      if (savedUser.email === email && savedUser.password === password) {
        localStorage.setItem('loggedInUser', JSON.stringify(savedUser));
        setAlert({ message: 'Login successful!', type: 'success' });

        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        setAlert({ message: 'Invalid email or password', type: 'error' });
      }
    } else {
      setAlert({ message: 'No user found. Please sign up first.', type: 'error' });
    }
  };

  return (
    <div className="container mx-auto lg:px-40 px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-yellow-500">Welcome Back to BiteBox!</h2>
          <p className="text-gray-100 mb-4">
            Craving something delicious? Login and explore our wide variety of meals delivered fast and fresh.
          </p>
          <img src={BiteBox} alt="Food Illustration" className="rounded-lg mx-auto object-cover" />
        </div>

        <div>
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-6 shadow-md">
              <div className='flex justify-between items-center'>
                <legend className="fieldset-legend text-2xl font-semibold mb-4">User Login</legend>
                <p><Link to={'/AdminLogin'} className='font-semibold'>Admin Login</Link></p>
              </div>
              

              {alert.message && (
                <div role="alert" className={`alert ${alert.type === 'success' ? 'alert-success' : 'alert-error'} mb-4`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{alert.message}</span>
                </div>
              )}

              <label className="label">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full mb-3 focus:outline-none"
                placeholder="Enter your email"
                required
              />

              <label className="label">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full mb-4 focus:outline-none"
                placeholder="Enter your password"
                required
              />

              <button type="submit" className="btn btn-outline btn-sm w-full hover:bg-yellow-500 hover:text-black">
                Login
              </button>

              <p className="text-sm mt-2 text-center">
                Not a user? 
                <Link to={'/Signup'} className="text-blue-500 cursor-pointer ml-1 hover:underline">
                  Sign Up
                </Link>
              </p>

              <hr className="my-4 border-gray-300" />

              <div>
                <h3 className='text-base'>What is BiteBox Business?</h3>
                <p>BiteBox Business is the dedicated admin panel for restaurant partners and food vendors on the BiteBox platform. It allows restaurant owners and partners to manage their menu, track orders, and monitor sales in real time.</p>
                <Link to={'/AdminSignup'} className="btn btn-outline btn-sm w-full hover:bg-yellow-500 hover:text-black mt-3">
                  <i className="bi bi-bag"></i> Get BiteBox Business
                </Link>
              </div>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;
