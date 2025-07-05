import React, { useState } from 'react';

const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setShowToast(true);
    setFormData({ name: '', email: '', message: '' });

    
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-base-100 px-5 py-10 md:px-20 relative">
      <h1 className="text-3xl font-bold text-center mb-10">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div className="card bg-base-200 shadow-md p-6">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Get in Touch</h2>
            <p className="mb-4 text-gray-600">
              Have questions or feedback? We'd love to hear from you!
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">support@bitebox.com</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium">+91 9990009988</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-medium">123 Food Street, Kochi, Kerala, India</p>
              </div>
            </div>
          </div>
        </div>

        
        <form onSubmit={handleSubmit} className="card bg-base-200 shadow-md p-6">
          <div className="card-body space-y-4">
            <h2 className="card-title text-2xl">Send a Message</h2>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="textarea textarea-bordered w-full h-32"
              required
            />
            <button type="submit" className="btn btn-warning w-full">
              Send Message
            </button>
          </div>
        </form>
      </div>

      
      {showToast && (
        <div className="toast toast-end">
          <div className="alert alert-success">
            <span>Message sent successfully!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportPage;
