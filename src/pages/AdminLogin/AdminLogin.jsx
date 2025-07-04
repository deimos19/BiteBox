import React, { useState } from 'react';
import BiteBox from "../../assets/hero-images/hero2.png";
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState({ message: '', type: '' });

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const savedAdmin = JSON.parse(localStorage.getItem('adminSignupDetails'));

    if (savedAdmin) {
      if (savedAdmin.email === email && savedAdmin.password === password) {
        setAlert({ message: 'Admin login successful!', type: 'success' });
        localStorage.setItem('loggedInAdmin', JSON.stringify(savedAdmin));

        setTimeout(() => {
          navigate('/admin');
        }, 1000);
      } else {
        setAlert({ message: 'Invalid email or password', type: 'error' });
      }
    } else {
      setAlert({ message: 'No admin found. Please register first.', type: 'error' });
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
              <div className='flex justify-between items-center'>
                <legend className="fieldset-legend text-2xl font-semibold mb-4">Admin Login</legend>
                <p><a href="/Login" className='font-semibold'>User Login</a></p>
              </div>

              {alert.message && (
                <div
                  role="alert"
                  className={`alert ${alert.type === 'success' ? 'alert-success' : 'alert-error'} mb-4`}
                >
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
