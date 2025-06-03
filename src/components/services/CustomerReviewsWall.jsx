import React, { useState } from "react";
import { Star, Heart, CheckCircle } from "lucide-react";

const CustomerReviewsWall = () => {
  const [activeTab, setActiveTab] = useState("All Reviews");

  const tabs = [
    { name: "All Reviews", active: true },
    { name: "Google", icon: "../icons/g.svg" },
    { name: "Facebook", icon: "../icons/f.svg" },
    { name: "Trustpilot", icon: "../icons/trust.png" },
    { name: "Yelp", icon: "../icons/yelp.png" },
  ];

  const reviews = [
    {
      id: 1,
      name: "William Thomas",
      title: "Director, Thomas & Partners",
      avatar: "WT",
      rating: 5,
      review:
        "A truly outstanding experience. They understood our vision and executed it flawlessly.",
      platform: "Google",
      platformLogo: "../icons/google.svg",
    },
    {
      id: 2,
      name: "John Smith",
      title: "CEO, Tech Innovations Inc",
      avatar: "JS",
      rating: 5,
      review:
        "Exceptional service! The team exceeded our expectations and delivered a top-notch product on time.",
      platform: "Trustpilot",
      platformLogo: "../icons/trustp.png",
    },
    {
      id: 3,
      name: "Mia Anderson",
      title: "Social Media Manager",
      avatar: "MA",
      rating: 4,
      review:
        "Their team delivered beyond expectations. Highly responsive and creative!",
      platform: "Facebook",
      platformLogo: "../icons/facebook.svg",
    },
    {
      id: 4,
      name: "Isabella Turner",
      title: "Project Manager",
      avatar: "IT",
      rating: 5,
      review: "Everything was seamless from start to finish. Highly impressed!",
      platform: "Yelp",
      platformLogo: "../icons/yelp1.png",
    },
    {
      id: 5,
      name: "Chloe Ramirez",
      title: "Marketing Head",
      avatar: "CR",
      rating: 5,
      review:
        "A wonderful experience from start to finish. Their creativity and attention to detail are unmatched!",
      platform: "Trustpilot",
      platformLogo: "../icons/trustp.png",
    },
    {
      id: 6,
      name: "Logan Adams",
      title: "Operations Manager",
      avatar: "LA",
      rating: 5,
      review:
        "They handled everything seamlessly and delivered exceptional results!",
      platform: "Facebook",
      platformLogo: "../icons/facebook.svg",
    },
    {
      id: 7,
      name: "Ethan Cooper",
      title: "Founder, Cooper Consulting",
      avatar: "EC",
      rating: 5,
      review:
        "Absolutely amazing service! Their expertise and dedication truly set them apart.",
      platform: "Google",
      platformLogo: "../icons/google.svg",
    },
    {
      id: 8,
      name: "Grace Foster",
      title: "CEO, Foster Enterprises",
      avatar: "GF",
      rating: 4,
      review:
        "Outstanding service! Their commitment to quality and customer satisfaction is evident.",
      platform: "yelp",
      platformLogo: "../icons/yelp1.png",
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  // Filter reviews based on active tab
  const filteredReviews =
    activeTab === "All Reviews"
      ? reviews
      : reviews.filter((review) => review.platform === activeTab);

  return (
    <div className="max-w-6xl mx-auto p-6 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 flex flex-col md:flex-row items-center justify-center gap-2">
          Customer Reviews Wall of Love
          <Heart className="w-8 h-8 text-red-500 fill-current" />
        </h1>
        <p className="text-gray-600 text-sm  max-w-3xl mx-auto">
          Read stories of impact, share your own experiences, and celebrate the
          connections that make us stronger. 💕
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 bg-[#F3F3F3] p-2 rounded-lg shadow-sm">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-4 py-2  font-medium transition-all duration-200 flex items-center gap-2 ${
              activeTab === tab.name
                ? "border-b-2 border-gray-800 "
                : "text-black hover:bg-gray-100"
            }`}
          >
            {tab.icon && <img src={tab.icon} />}
            {tab.name}
          </button>
        ))}
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {filteredReviews.map((review) => (
          <div
            key={review.id}
            className="bg-[#F3F3F3] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
          >
            {/* Rating */}
            <div className="flex gap-1 mb-4">{renderStars(review.rating)}</div>

            {/* Profile */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                {review.avatar}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{review.name}</h3>
                <p className="text-xs text-gray-500">{review.title}</p>
              </div>
            </div>

            {/* Review Text */}
            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
              {review.review}
            </p>

            {/* Platform */}
            <div className=" text-sm text-gray-500 space-y-1">
              <span>Posted on</span>
              <img src={review.platformLogo} alt={review.name} />
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="text-center">
        <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          See More
        </button>
      </div>
    </div>
  );
};

export default CustomerReviewsWall;
