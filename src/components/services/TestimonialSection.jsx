import React, { useRef } from "react";

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Lisa",
      initials: "LS",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1589729132389-8f0e0b55b91e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGhlYWRzaG90fGVufDB8fDB8fHww&auto=format&fit=crop&w=687&q=80",
      testimonial:
        "The team took time to understand our vision and delivered a sleek, professional site that not only looks great but also improved our conversion rates. Their design process was smooth, communication was clear, and they met all deadlines. We've received numerous compliments on the new site, and it's easier for customers to navigate. I can confidently say we'll be working with them again in the future.",
    },
    {
      id: 2,
      name: "Michael",
      initials: "MJ",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      testimonial:
        "Outstanding service from start to finish. The team's attention to detail and creative approach exceeded our expectations. Our new website has transformed our online presence completely. The design is modern, functional, and perfectly represents our brand. Highly recommend their services.",
    },
    {
      id: 3,
      name: "Sarah",
      initials: "SK",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGhlYWRzaG90fGVufDB8fDB8fHww&auto=format&fit=crop&w=1170&q=80",
      testimonial:
        "Professional, responsive, and incredibly talented. They delivered exactly what we needed on time and within budget. The results speak for themselves - our engagement has increased significantly since the launch. Working with them was a pleasure from beginning to end.",
    },
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [touchStart, setTouchStart] = React.useState(null);
  const [touchEnd, setTouchEnd] = React.useState(null);
  const [swipeOffset, setSwipeOffset] = React.useState(0);
  const sliderRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setSwipeOffset(0);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setSwipeOffset(0);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setSwipeOffset(0);
  };

  // Enhanced touch handling with visual feedback
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    const currentTouch = e.targetTouches[0].clientX;
    setTouchEnd(currentTouch);

    // Calculate swipe offset for visual feedback
    const diff = touchStart - currentTouch;
    setSwipeOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setSwipeOffset(0);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    } else {
      // If swipe wasn't significant enough, return to current slide
      setSwipeOffset(0);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-red-500" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const current = testimonials[currentSlide];

  return (
    <div className="bg-white flex items-center justify-center p-4 md:p-8">
      <div className="max-w-5xl w-full relative">
        {/* Swiper container with enhanced touch feedback */}
        <div
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          ref={sliderRef}
        >
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(calc(-${
                currentSlide * 100
              }% + ${-swipeOffset}px))`,
              transition: swipeOffset ? "none" : "transform 300ms ease-out",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="w-full flex-shrink-0 relative md:h-[30rem] h-[40rem] touch-none"
              >
                {/* Main red background block - hidden on mobile */}
                <div className="hidden md:block bg-red-500 w-80 h-full absolute top-0 left-52 z-0"></div>

                {/* Quote icon in red block - hidden on mobile */}
                <div className="hidden md:block absolute top-8 left-[22rem] z-10">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>

                {/* Profile image - adjusted for mobile */}
                <div className="relative md:top-12 top-8 z-20 flex justify-center md:justify-start">
                  <div className="w-64 h-72 md:w-72 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover touch-none"
                    />
                  </div>
                </div>

                {/* Testimonial card - adjusted for mobile */}
                <div className="absolute md:top-24 top-80 md:left-80 left-0 z-30 bg-white rounded-2xl shadow-xl p-6 w-full md:w-[62%] touch-none">
                  <div className="border-l-2 border-red-500 px-3">
                    {/* Stars and rating */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex space-x-1">
                        {renderStars(testimonial.rating)}
                      </div>
                      <span className="text-lg font-semibold text-gray-800 ml-2">
                        {testimonial.rating}/5
                      </span>
                    </div>

                    {/* Testimonial text */}
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                      {testimonial.testimonial}
                    </p>
                  </div>
                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">
                        {testimonial.initials}
                      </span>
                    </div>
                    <span className="font-semibold text-gray-900">
                      {testimonial.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows - hidden on mobile */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 z-40 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-colors focus:outline-none"
          aria-label="Previous testimonial"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-40 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-colors focus:outline-none"
          aria-label="Next testimonial"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Pagination dots - centered on mobile */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-red-500 md:bg-white w-6"
                  : "bg-red-300 hover:bg-gray-100"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
