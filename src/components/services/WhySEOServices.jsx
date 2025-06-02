import React, { useState } from "react";

// Define the data for the reasons/features
const reasonsData = [
  {
    id: 1,
    title: "We take the time to understand your brand and vision",
    content:
      "At EnterpriseBuzz, our approach begins with a deep dive into your brand's core values, unique selling propositions, and long-term vision. We believe that a thorough understanding of your identity is paramount to crafting an AI SEO strategy that truly resonates with your target audience and aligns with your business objectives.",
  },
  {
    id: 2,
    title: "We create a brand led shopping experiences",
    content:
      "Beyond just optimizing for search engines, we focus on creating seamless, engaging, and brand-consistent shopping experiences. Our AI-driven strategies ensure that every touchpoint, from initial search to final purchase, reinforces your brand identity and encourages customer loyalty.",
  },
  {
    id: 3,
    title: "More than ecommerce",
    content:
      "While we excel in ecommerce SEO, our expertise extends far beyond. We provide comprehensive AI SEO services for various industries and business models, focusing on driving organic traffic, improving online visibility, and generating leads, regardless of your specific digital goals.",
  },
  {
    id: 4,
    title: "Free technical support and maintenance with every build",
    content:
      "We stand by our work. Every AI SEO strategy and implementation comes with complimentary technical support and ongoing maintenance. This ensures your website remains optimized, performs flawlessly, and adapts to algorithm changes without additional costs, giving you peace of mind.",
  },
  {
    id: 5,
    title: "We collaborate with brand owners weekly",
    content:
      "Transparency and collaboration are key to our success. We maintain a proactive communication channel with brand owners, providing weekly updates, insights, and strategic discussions. This collaborative approach ensures our AI SEO efforts are always aligned with your evolving business needs.",
  },
  {
    id: 6,
    title: "Top agency talent",
    content:
      "Our team comprises industry-leading AI SEO specialists, data scientists, and digital marketing strategists. With a wealth of experience and a passion for innovation, our top agency talent is dedicated to delivering exceptional results and staying ahead of the curve in the ever-evolving SEO landscape.",
  },
];

const WhySEOServices = () => {
  // State to manage which card is currently open (expanded)
  const [openCardId, setOpenCardId] = useState(null);

  // Function to toggle the open/closed state of a card
  const toggleCard = (id) => {
    setOpenCardId(openCardId === id ? null : id);
  };

  return (
    // Main section container with responsive padding and background
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-28 font-sans">
      <style>
        {`
          /* Define the fadeIn animation for smooth content expansion */
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out forwards;
          }

          /* General font family for the entire section */
          body {
            font-family: 'Inter', sans-serif;
          }

          /* Custom gradient border styling */
          .gradient-border-card {
            background: linear-gradient(to right, #ff7e5f, #feb47b); /* Default gradient */
            padding: 2px; /* Controls the thickness of the border */
            border-radius: 0.75rem; /* Matches rounded-xl */
            position: relative;
            z-index: 1; /* Ensures the inner content is above the gradient */
          }

          .gradient-border-card .inner-content {
            background-color: white;
            border-radius: 0.65rem; /* Slightly smaller to reveal gradient */
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between; /* Pushes content and button apart */
            overflow: hidden; /* Ensures content doesn't spill out */
          }

          /* Hover effect for the gradient border */
          .gradient-border-card:hover {
            background: linear-gradient(to right, #fe6b8b, #ff8e53); /* A slightly different gradient on hover */
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto">
        {/* Section title with responsive text alignment and styling */}
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center sm:text-left">
          Why choose{" "}
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">EnterpriseBuzz AI SEO Services?</span>
        </h2>

        {/* Grid layout for the cards, responsive for single or double columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Map through the reasonsData to render each card */}
          {reasonsData.map((reason) => (
            <div
              key={reason.id} // Unique key for React list rendering
              className="gradient-border-card shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer"
              onClick={() => toggleCard(reason.id)} // Click handler to toggle card state
            >
              <div className="inner-content">
                {/* Card header with title and expand/collapse button */}
                <div className="flex justify-between items-center p-6">
                  <h3 className="text-lg font-semibold text-gray-700">
                    {reason.title}
                  </h3>
                  {/* Button for toggling card content visibility */}
                  <button
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200
                               focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50
                               transition-colors duration-200"
                    aria-expanded={openCardId === reason.id} // ARIA attribute for accessibility
                    aria-controls={`content-${reason.id}`} // ARIA attribute for accessibility
                  >
                    {/* Conditional rendering of '+' or '-' icon based on card state */}
                    {openCardId === reason.id ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18 12H6" // Path for '-' icon
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6" // Path for '+' icon
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {/* Card content, conditionally rendered and animated */}
                {openCardId === reason.id && (
                  <div
                    id={`content-${reason.id}`} // ID for ARIA control
                    className="px-6 pb-6 text-gray-600 animate-fadeIn text-sm leading-relaxed"
                  >
                    {reason.content}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySEOServices;
