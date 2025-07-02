import React from 'react';
import { assets } from '../../assets/frontend_assets/assets'; // Adjust path based on your structure

const Footer = () => {
  return (
    <div className="container mx-auto lg:px-40 bg-gray-900 text-gray-300">
        <footer className=" py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-2">BiteBox</h3>
          <p>Your favorite meals delivered fresh and fast.</p>
          <div className="flex gap-4 mt-4">
            <img src={assets.facebook_icon} alt="Facebook" className="w-6 h-6 cursor-pointer" />
            <img src={assets.twitter_icon} alt="Twitter" className="w-6 h-6 cursor-pointer" />
            <img src={assets.linkedin_icon} alt="LinkedIn" className="w-6 h-6 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Menu</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="text-xl font-bold mb-2">Get Our App</h3>
          <p>Order faster with our mobile app</p>
          <div className="flex gap-2 mt-3">
            <img src={assets.play_store} alt="Play Store" className="w-32 cursor-pointer" />
            <img src={assets.app_store} alt="App Store" className="w-32 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} BiteBox. All rights reserved.
      </div>
    </footer>
    </div>
  );
};

export default Footer;
