import React, { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import CaruoselCard from "./CaruoselCard";

const SocialCarousel = ({ testimonials }) => {
  const options = {
    axis: "y",
    loop: true,
    dragFree: true,
  };

  const plugins = useRef(
    AutoScroll({
      speed: 1,
      startDelay: 1000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef] = useEmblaCarousel(options, [plugins.current]);

  return (
    <div className="w-full max-w-2xl mx-auto py-8 px-4 font-sans">
      <h2 className="text-4xl font-extrabold text-center text-white mb-10">
        What Our Clients Say
      </h2>
      <div
        className="embla overflow-hidden relative h-[700px] bg-gray-900 rounded-lg shadow-2xl border border-gray-700"
        ref={emblaRef}
      >
        <div className="embla__container flex flex-col h-full">
          {testimonials.map((testimonial, index) => (
            <div
              className="embla__slide flex-shrink-0 flex-grow-0 w-full md:w-[416px] mx-auto mb-6 min-h-fit"
              key={index}
            >
              <CaruoselCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialCarousel;
