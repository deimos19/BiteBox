import React, { useState } from 'react';
import BiteBox from "../../assets/hero-images/hero2.png";
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const savedAdmin = JSON.parse(localStorage.getItem('adminSignupDetails'));

    if (savedAdmin) {
      if (savedAdmin.email === email && savedAdmin.password === password) {
        alert('Admin login successful!');
        
        
        localStorage.setItem('loggedInAdmin', JSON.stringify(savedAdmin));
        navigate('/admin');  
      } else {
        alert('Invalid email or password');
      }
    } else {
      alert('No admin found. Please register first.');
    }
  };

  return (
    <div className="container mx-auto lg:px-40 px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

       
        <div className="text-left">
          <h2 className="text-3xl font-bold mb-4 text-yellow-500">BiteBox Business Login</h2>
          <p className="text-gray-100 mb-4">
            Welcome back, partner! Login to manage your restaurant, track your orders, monitor daily sales,
            and keep your menu updated on BiteBox Business.
          </p>
          <img
            src={BiteBox}
            alt="Business Illustration"
            className="rounded-lg mx-auto object-cover"
          />
        </div>

        
        <div>
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-6 shadow-md">
              <legend className="fieldset-legend text-2xl font-semibold mb-4">Admin Login</legend>

              <label className="label">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full mb-3 focus:outline-none"
                placeholder="Enter your admin email"
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
                Login as Admin
              </button>

              <p className="text-sm mt-2 text-center">
                Don't have an admin account? 
                <a href='/AdminSignup' className="text-blue-500 cursor-pointer ml-1 hover:underline">
                  Register
                </a>
              </p>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  );
};

export default AdminLogin;
