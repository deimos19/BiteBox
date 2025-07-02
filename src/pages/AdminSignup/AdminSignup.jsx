import React, { useState } from 'react';
import BiteBox from "../../assets/hero-images/hero2.png";

const AdminSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminDetails = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: "admin"
    };

    console.log('Admin Details:', adminDetails);

   
    localStorage.setItem('adminSignupDetails', JSON.stringify(adminDetails));

    alert('Admin registered successfully!');
  };

  return (
    <div className="container mx-auto lg:px-40 px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        
        <div className="text-left">
          <h2 className="text-3xl font-bold mb-4 text-yellow-500">What is BiteBox Business?</h2>
          <p className="text-gray-100 mb-4">
            BiteBox Business is a dedicated platform for restaurant partners and food vendors. 
            It allows business owners to manage their menus, track customer orders, monitor daily sales, 
            and control product availability in real time. 
          </p>
          <p className="text-gray-100 mb-4">
            With BiteBox Business, vendors can also analyze their sales data, receive customer feedback, 
            and update pricing or product listings on the go. 
            It’s designed to help businesses grow and serve customers more efficiently.
          </p>
          <img
            src={BiteBox}
            alt="Business Illustration"
            className="rounded-lg mx-auto object-cover"
          />
        </div>

        
        <div>
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-6 shadow-md">
              <legend className="fieldset-legend text-2xl font-semibold mb-4">BiteBox Business Signup</legend>

              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input input-bordered w-full mb-3 focus:outline-none"
                placeholder="Enter your name"
                required
              />

              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input input-bordered w-full mb-3 focus:outline-none"
                placeholder="Enter your email"
                required
              />

              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input input-bordered w-full mb-3 focus:outline-none"
                placeholder="Enter your password"
                required
              />

              <label className="label">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="input input-bordered w-full mb-4 focus:outline-none"
                placeholder="Re-enter your password"
                required
              />

              <button type="submit" className="btn btn-outline btn-sm w-full hover:bg-yellow-500 hover:text-black">
                Register as Admin
              </button>

              <p className="text-sm mt-2 text-center">
                Already have an account?
                <a href='/AdminLogin' className="text-blue-500 cursor-pointer ml-1 hover:underline">
                  Login
                </a>
              </p>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  );
};

export default AdminSignup;
