import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <section className="w-full max-w-3xl p-8 bg-pink-100 rounded-lg shadow-lg">
        {/* Title */}
        <h2 className="text-4xl text-pink-700 font-bold mb-6 text-center animate-fade-in">
          Contact Us
        </h2>
        {/* Form */}
        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
          </div>
          {/* Email Address */}
          <div>
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
          </div>
          {/* Phone Number */}
          <div>
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
          </div>
          {/* Message */}
          <div>
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
            ></textarea>
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-pink-600 text-white font-bold rounded-md hover:bg-pink-700 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
