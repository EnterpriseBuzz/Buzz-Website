import React, { useState, useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import classNames from "classnames";

const slides = [
  { id: 1, image: "/images/seo1.png", alt: "SEO Slide 1" },
  { id: 2, image: "/images/seo2.png", alt: "SEO Slide 2" },
  { id: 3, image: "/images/seo3.png", alt: "SEO Slide 3" },
];

const WhyInvestInSEO = () => {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false })
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-center">
      {/* Headline */}
      <h2 className="text-4xl font-bold text-gray-900">
        Why Invest in SEO for Your <br /> Toronto Business?
      </h2>
      <p className="mt-4 text-gray-600 max-w-xl mx-auto">
        Find out how SEO can increase your visibility to potential customers
        actively searching in Toronto and around the GTA.
      </p>

      <div className="mt-12 flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Carousel with vertical indicators */}
        <div className="relative w-full max-w-xl group flex items-center">
          {/* Vertical Indicators */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10 ml-[-2.5rem]">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={classNames(
                  "w-3 h-3 rounded-full",
                  selectedIndex === index ? "bg-red-500" : "bg-gray-300"
                )}
              />
            ))}
          </div>

          {/* Embla Carousel */}
          <div
            className="overflow-hidden rounded-xl shadow-lg w-full"
            ref={emblaRef}
          >
            <div className="flex touch-pan-y">
              {slides.map((slide) => (
                <div className="min-w-full relative" key={slide.id}>
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-auto object-cover"
                  />
                  {/* Play Button */}
                  <button className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white p-3 rounded-full shadow-lg">
                      <svg
                        className="w-10 h-10 text-red-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote Box */}
        <div className="bg-gray-100 p-6 rounded-xl text-left max-w-xs">
          <p className="text-3xl text-gray-800 leading-tight mb-4">
            <span className="text-5xl leading-none font-serif">“</span>
            The best place to hide a dead body is page two of Google.
            <span className="text-5xl leading-none font-serif">”</span>
          </p>
          <p className="font-semibold text-gray-700">Unknown</p>
          <p className="text-gray-500 text-sm mt-1">
            Emphasizing the importance of high ranking
          </p>
          <button className="mt-6 bg-gradient-to-r from-red-500 to-orange-400 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:opacity-90 transition">
            Activate My Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyInvestInSEO;
