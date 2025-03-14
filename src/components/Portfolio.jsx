import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const portfolioItems = [
  {
    id: 1,
    category: "Fashion",
    img: "./portfolio/port.png",
  },
  {
    id: 2,
    category: "Beauty",
    img: "./portfolio/port1.png",
  },
  {
    id: 3,
    category: "Finance",
    img: "./portfolio/port2.png",
  },
  {
    id: 4,
    category: "Fashion",
    img: "./portfolio/port3.png",
  },
  {
    id: 5,
    category: "Beauty",
    img: "./portfolio/port4.png",
  },
  {
    id: 6,
    category: "Finance",
    img: "./portfolio/port5.png",
  },
  {
    id: 7,
    category: "Fashion",
    img: "./portfolio/port6.png",
  },
  {
    id: 8,
    category: "Beauty",
    img: "./portfolio/port7.png",
  },
  {
    id: 9,
    category: "Finance",
    img: "./portfolio/port8.png",
  },
  {
    id: 10,
    category: "Fashion",
    img: "./portfolio/port9.png",
  },
  {
    id: 11,
    category: "Beauty",
    img: "./portfolio/port10.png",
  },
  {
    id: 12,
    category: "Finance",
    img: "./portfolio/port11.png",
  },
  {
    id: 13,
    category: "Fashion",
    img: "./portfolio/port12.png",
  },
  {
    id: 14,
    category: "Beauty",
    img: "./portfolio/port13.png",
  },
  {
    id: 15,
    category: "Finance",
    img: "./portfolio/port14.png",
  },
  {
    id: 16,
    category: "Fashion",
    img: "./portfolio/port15.png",
  },
  {
    id: 17,
    category: "Beauty",
    img: "./portfolio/port16.png",
  },
  {
    id: 18,
    category: "Finance",
    img: "./portfolio/port17.png",
  },
  {
    id: 19,
    category: "Fashion",
    img: "./portfolio/port18.png",
  },
  {
    id: 20,
    category: "Beauty",
    img: "./portfolio/port19.png",
  },
  {
    id: 21,
    category: "Finance",
    img: "./portfolio/port20.png",
  },
  {
    id: 22,
    category: "Fashion",
    img: "./portfolio/port35.png",
  },
  {
    id: 23,
    category: "Beauty",
    img: "./portfolio/port22.png",
  },
  {
    id: 24,
    category: "Finance",
    img: "./portfolio/port23.png",
  },
  {
    id: 25,
    category: "Fashion",
    img: "./portfolio/port24.png",
  },
  {
    id: 26,
    category: "Beauty",
    img: "./portfolio/port25.png",
  },
  {
    id: 27,
    category: "Finance",
    img: "./portfolio/port26.png",
  },
  {
    id: 28,
    category: "Fashion",
    img: "./portfolio/port27.png",
  },
  {
    id: 29,
    category: "Beauty",
    img: "./portfolio/port28.png",
  },
  {
    id: 30,
    category: "Finance",
    img: "./portfolio/port29.png",
  },
  {
    id: 31,
    category: "Fashion",
    img: "./portfolio/port30.png",
  },
  {
    id: 32,
    category: "Beauty",
    img: "./portfolio/port31.png",
  },
  {
    id: 33,
    category: "Finance",
    img: "./portfolio/port32.png",
  },
  {
    id: 34,
    category: "Fashion",
    img: "./portfolio/port33.png",
  },
  {
    id: 35,
    category: "Beauty",
    img: "./portfolio/port34.png",
  },
  {
    id: 36,
    category: "Finance",
    img: "./portfolio/port36.png",
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full px-2 lg:px-24">
      <div className="pt-16 pb-5 px-2 lg:px-24  flex flex-col  items-center  justify-center space-y-2 ">
        <h2 className="text-3xl font-bold text-[#000]">Portfolio</h2>
        <h2 className="text-[10px] text-[#000] text-center md:text-sm">
          Arming businesses for marketplace dominance with high-level AI
          marketing and advertising assets from our Toronto fort.
        </h2>
      </div>

      <div className="flex justify-start gap-3 my-5 flex-wrap">
        {["All", "Fashion", "Beauty", "Finance"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full shadow-md transition ${
              selectedCategory === category
                ? "bg-yellow-500 text-white"
                : "border text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-6 mb-8"
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white cursor-pointer transform scale-95 animate-zoom-in transition-transform duration-1000 ease-in-out hover:scale-105 rounded-lg shadow-lg overflow-hidden"
            >
              <motion.img
                src={item.img}
                alt={item.category}
                animate={{
                  scale: [1, 1.1, 1], // Zoom in and out
                  x: [-10, 10, -10], // Slight side-to-side movement
                  y: [-5, 5, -5], // Slight up-down movement
                }}
                transition={{
                  duration: 10, // Slow movement
                  repeat: Infinity, // Loop forever
                  ease: "easeInOut",
                }}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
