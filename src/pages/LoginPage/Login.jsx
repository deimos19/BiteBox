import React, { useState } from 'react';
import BiteBox from "../../assets/hero-images/hero2.png";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

 const handleLogin = (e) => {
  e.preventDefault();

  const savedUser = JSON.parse(localStorage.getItem('userLoginDetails'));

  if (savedUser) {
    if (savedUser.email === email && savedUser.password === password) {
      // ✅ Create a Login Session
      localStorage.setItem('loggedInUser', JSON.stringify(savedUser));

      alert('Login successful!');
      navigate('/');  // Go to homepage
    } else {
      alert('Invalid email or password');
    }
  } else {
    alert('No user found. Please sign up first.');
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
              <legend className="fieldset-legend text-2xl font-semibold mb-4">User Login</legend>

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
                <a href="/Signup" className="text-blue-500 cursor-pointer ml-1 hover:underline">
                  Sign Up
                </a>
              </p>

              <hr className="my-4 border-gray-300" />

              <div>
                <h3 className='text-base'>What is BiteBox Business?</h3>
                <p>BiteBox Business is the dedicated admin panel for restaurant partners and food vendors on the BiteBox platform. It allows restaurant owners and partners to manage their menu, track orders, and monitor sales in real time.</p>
                <a href='/AdminSignup' className="btn btn-outline btn-sm w-full hover:bg-yellow-500 hover:text-black mt-3">
                  <i className="bi bi-bag"></i> Get BiteBox Business
                </a>
              </div>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;
