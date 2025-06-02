import React, { useState } from 'react';
import { Globe, Mail, Send } from 'lucide-react'; // Import icons from Lucide

const SeoScoreForm = () => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the websiteUrl and email to your backend
    // to calculate the SEO score or trigger an action.
    console.log('Website URL:', websiteUrl);
    console.log('Email:', email);
    alert('Form submitted! (Check console for values)');
    // You might want to add loading states, error handling, etc.
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full">
        <div className="text-center mb-8">
          <p className="text-[#FFA913] text-sm font-semibold mb-2">See How Well Your Page Is Optimized</p>
          <h2 className="text-4xl font-bold text-gray-900">Your SEO Score?</h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center items-center">
          {/* Website URL Input */}
          <div className="relative w-full md:w-1/2">
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="url"
              placeholder="Enter Your Website URL"
              className="pl-10 pr-4 py-3 w-full bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              required
            />
          </div>

          {/* Email Input */}
          <div className="relative w-full md:w-1/2">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="pl-10 pr-4 py-3 w-full bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Send Button */}
          <button
            type="submit"
            className="flex items-center justify-center pl-6 pr-3  bg-[#FFA913] text-white font-semibold rounded-full shadow-md hover:bg-[#FFA913]focus:outline-none focus:ring-2 focus:ring-[#FFA913] focus:ring-offset-2 transition-colors duration-200 w-full md:w-auto"
          >
            Send
           <img src="../icons/arrowSend.svg" alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SeoScoreForm;