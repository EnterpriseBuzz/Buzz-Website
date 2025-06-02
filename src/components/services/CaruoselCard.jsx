import React from "react";

const HoverBackgroundSVG = () => (
  <svg
    className="absolute -left-[72%] bottom-0 overflow-visible aspect-[2/1] w-[250%]
               translate-y-[calc(50%_-_122px_+_25vw)] sm:translate-y-1/2
               blur-[56px] saturate-150 transform-gpu will-change-transform,filter"
    fill="none"
    viewBox="0 0 701 467"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g className="transform-gpu">
      <path
        d="M407.64 132.674L511.646 108l81.075 17.082V326.27H419.103l-31.111-98.696 19.648-94.9Z"
        fill="#548A05"
      />
      <path
        d="m357.667 186.498 72.448-19.143 56.475 13.253v156.09H365.651l-21.671-76.572 13.687-73.628Z"
        fill="#F28C1F"
      />
      <path
        d="m136.004 208.083 73.697-19.143 57.449 13.253v156.09H144.127l-22.045-76.572 13.922-73.628Z"
        fill="#EB348C"
      />
      <path
        d="m243.752 200.799 86.172-18.321 67.174 12.683v149.388H253.249l-25.776-73.284 16.279-70.466Z"
        fill="#A41F7E"
      />
      <path
        d="m417.299 212.382 39.278-7.668 30.618 5.309v62.518h-65.567l-11.749-30.669 7.42-29.49Z"
        fill="#7D1A72"
      />
    </g>
  </svg>
);

const CaruoselCard = ({ quote, authorName, authorCompany, authorImage }) => (
  <div
    className="group relative flex flex-col gap-8 overflow-hidden rounded-2xl
                  border border-gray-700 bg-gray-800 p-5 md:gap-10 md:rounded-2.5xl md:px-6 md:py-6.5
                  transition-all duration-300 hover:border-gray-600 h-full"
  >
    {/* SVG background effect, visible on hover */}
    <div className="absolute bottom-0 left-0 hidden w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:block">
      <HoverBackgroundSVG />
    </div>

    <p
      className="text-sm/[1.125rem] md:text-base/[1.375rem] relative text-gray-200
                  transition-colors duration-300 lg:group-hover:text-white"
    >
      "{quote}"
    </p>

    <div className="relative mt-auto flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <img
          alt={authorName}
          loading="lazy"
          width="156"
          height="156"
          decoding="async"
          data-nimg="1"
          className="size-[2.6875rem] rounded-full md:size-[3.25rem] object-cover"
          src={authorImage}
          // Fallback for image loading errors
          onError={(e) => {
            e.target.onerror = null; // Prevent infinite loop
            e.target.src = `https://placehold.co/156x156/E0E7FF/4F46E5?text=${authorName
              .split(" ")[0]
              .charAt(0)}${
              authorName.split(" ").length > 1
                ? authorName.split(" ")[1].charAt(0)
                : ""
            }`;
          }}
        />
        <div>
          <p
            className="text-base/[1.125rem] md:text-lg/[1.5rem] flex items-center text-gray-300
                        transition-colors duration-300 lg:group-hover:text-white"
          >
            {authorName}
          </p>
          <p
            className="text-base/[1.125rem] md:text-lg/[1.5rem] text-gray-500
                        transition-colors duration-300 lg:group-hover:text-white"
          >
            {authorCompany}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default CaruoselCard;
