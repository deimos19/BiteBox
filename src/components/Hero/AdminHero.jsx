import React from 'react';
import BiteBox from "../../assets/hero-images/BiteBoxBusiness.png";
import { Link } from 'react-router-dom';

const AdminHero = () => {
  return (
    <div className="container mx-auto lg:px-40">
      <section className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* Hero Image */}
          <img
            src={BiteBox}
            className="max-w-sm rounded-lg"
            alt="BiteBox Admin"
          />

          {/* Hero Text */}
          <div>
            <h1 className="text-4xl font-extrabold mb-2">Welcome, Admin!</h1>
            <h2 className="text-xl font-semibold text-gray-500 mb-4">
              Manage your restaurant operations seamlessly
            </h2>
            <p className="text-base mb-6 leading-relaxed">
              Access real-time order updates, monitor kitchen performance, and keep your customers satisfied. 
              Simplify your backend tasks with BiteBox Admin Dashboard.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <a href="#food" className="btn btn-primary">
                <i className="bi bi-tools mr-2"></i> Manage
              </a>
              <Link to="/admin/Orders" className="btn btn-primary">
                <i className="bi bi-view-list mr-2"></i> View Orders
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminHero;
