import React, { useState, useEffect } from 'react';

const AdminWeatherControl = () => {
  const [weather, setWeather] = useState(localStorage.getItem('weather') || '');
  const [status, setStatus] = useState(localStorage.getItem('restaurantStatus') || 'Open');

  const handleWeatherChange = (value) => {
    setWeather(value);
    localStorage.setItem('weather', value);

    if (value === 'Cloudy' || value === 'Rainy') {
      const message =
        value === 'Cloudy'
          ? 'Delivery times may be slightly delayed due to cloudy weather.'
          : 'Expect possible delays. Heavy rain in progress.';
      localStorage.setItem('weatherAlert', message);
    } else {
      localStorage.removeItem('weatherAlert');
    }
  };

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    localStorage.setItem('restaurantStatus', newStatus);
  };

  useEffect(() => {
    const savedWeather = localStorage.getItem('weather');
    const savedStatus = localStorage.getItem('restaurantStatus');
    if (savedWeather) setWeather(savedWeather);
    if (savedStatus) setStatus(savedStatus);
  }, []);

  return (
    <div className="container mx-auto lg:px-40 py-10">
        <div className='text-center'>
            <h2 className="text-2xl font-bold mb-2">
        Manage Restaurant Status & Weather Alerts
        </h2>
        <p className=" mb-6">
        Keep your customers informed by updating the current weather conditions and restaurant availability. 
        Choose from Sunny, Cloudy, or Rainy weather, and toggle restaurant status to Open or Closed. 
        These updates will display on the user interface to ensure better order transparency and delivery expectations.
        </p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-box shadow-md">

        
        <div className='bg-base-200 px-5 py-5'>
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Restaurant Status</h2>
          <p className="mb-4 ">Set your restaurant availability status:</p>

          <div className="flex gap-4">
            <button
              className={`btn ${status === 'Open' ? 'bg-green-600 text-white' : 'btn-outline'}`}
              onClick={() => handleStatusChange('Open')}
            >
              🟢 Open
            </button>
            <button
              className={`btn ${status === 'Closed' ? 'bg-red-600 text-white' : 'btn-outline'}`}
              onClick={() => handleStatusChange('Closed')}
            >
              🔴 Closed
            </button>
          </div>

          <div className="alert alert-info alert-outline mt-4">
            <span>Current Status: <strong>{status}</strong></span>
          </div>
        </div>

        
        <div className='bg-base-200 px-5 py-5'>
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Weather Alert Control</h2>
          <p className="mb-4">Set weather alerts that affect delivery times:</p>

          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <label className={`btn ${weather === 'Sunny' ? 'btn-active bg-blue-700 text-white' : 'btn-active'}`}>
              <input
                type="radio"
                name="weather"
                className="hidden"
                checked={weather === 'Sunny'}
                onChange={() => handleWeatherChange('Sunny')}
              />
              ☀️ Sunny
            </label>

            <label className={`btn ${weather === 'Cloudy' ? 'btn-active bg-blue-700 text-white' : 'btn-active'}`}>
              <input
                type="radio"
                name="weather"
                className="hidden"
                checked={weather === 'Cloudy'}
                onChange={() => handleWeatherChange('Cloudy')}
              />
              ☁️ Cloudy
            </label>

            <label className={`btn ${weather === 'Rainy' ? 'btn-active bg-blue-700 text-white' : 'btn-active'}`}>
              <input
                type="radio"
                name="weather"
                className="hidden"
                checked={weather === 'Rainy'}
                onChange={() => handleWeatherChange('Rainy')}
              />
              🌧️ Rainy
            </label>
          </div>

          {weather && (
            <div className="alert alert-info alert-outline">
              <span>Selected Weather: <strong>{weather}</strong></span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default AdminWeatherControl;
