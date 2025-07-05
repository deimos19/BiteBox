import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-base-100 px-5 py-10 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

        
        <div className="card bg-base-200 shadow-md mb-6">
          <div className="card-body">
            <h2 className="card-title text-2xl">Our Story</h2>
            <p className="text-gray-600">
              Bitebox started with a simple idea: bringing delicious food to your doorstep effortlessly. 
              We’re a team of food lovers and tech enthusiasts who believe everyone deserves great meals, fast service, and a hassle-free ordering experience.
            </p>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <h2 className="card-title text-xl">Our Mission</h2>
              <p className="text-gray-600">
                To connect hungry customers with their favorite restaurants through a fast, user-friendly, and affordable platform.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <h2 className="card-title text-xl">Our Vision</h2>
              <p className="text-gray-600">
                To become the most loved and trusted food delivery brand, known for quality, convenience, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        
        <div className="card bg-base-200 shadow-md">
          <div className="card-body">
            <h2 className="card-title text-2xl">Why Choose Bitebox?</h2>
            <ol className="list-disc list-inside text-gray-600 space-y-2">
              <li>Super-fast delivery across your city</li>
              <li>Curated menus from top-rated restaurants</li>
              <li>Easy-to-use interface for smooth ordering</li>
              <li>Exciting deals and rewards on every order</li>
              <li>24/7 customer support</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
