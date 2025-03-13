import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const portfolioItems = [
  {
    id: 1,
    category: "Fashion",
    img: "./port1.png",
  },
  {
    id: 2,
    category: "Beauty",
    img: "./port2.png",
  },
  {
    id: 3,
    category: "Finance",
    img: "./port3.png",
  },
  {
    id: 4,
    category: "Fashion",
    img: "./port4.png",
  },
  {
    id: 5,
    category: "Beauty",
    img: "./port5.png",
  },
  {
    id: 6,
    category: "Finance",
    img: "https://source.unsplash.com/400x300/?investment",
  },
  {
    id: 7,
    category: "Fashion",
    img: "https://source.unsplash.com/400x300/?style",
  },
  {
    id: 8,
    category: "Beauty",
    img: "https://source.unsplash.com/400x300/?cosmetics",
  },
  {
    id: 9,
    category: "Finance",
    img: "https://source.unsplash.com/400x300/?money",
  },
  {
    id: 10,
    category: "Fashion",
    img: "https://source.unsplash.com/400x300/?trendy",
  },
  {
    id: 11,
    category: "Beauty",
    img: "https://source.unsplash.com/400x300/?haircare",
  },
  {
    id: 12,
    category: "Finance",
    img: "https://source.unsplash.com/400x300/?banking",
  },
  {
    id: 13,
    category: "Fashion",
    img: "https://source.unsplash.com/400x300/?outfits",
  },
  {
    id: 14,
    category: "Beauty",
    img: "https://source.unsplash.com/400x300/?skincare",
  },
  {
    id: 15,
    category: "Finance",
    img: "https://source.unsplash.com/400x300/?currency",
  },
  {
    id: 16,
    category: "Fashion",
    img: "https://source.unsplash.com/400x300/?runway",
  },
  {
    id: 17,
    category: "Beauty",
    img: "https://source.unsplash.com/400x300/?spa",
  },
  {
    id: 18,
    category: "Finance",
    img: "https://source.unsplash.com/400x300/?stocks",
  },
  {
    id: 19,
    category: "Fashion",
    img: "https://source.unsplash.com/400x300/?luxury",
  },
  {
    id: 20,
    category: "Beauty",
    img: "https://source.unsplash.com/400x300/?wellness",
  },
  {
    id: 21,
    category: "Finance",
    img: "https://source.unsplash.com/400x300/?wealth",
  },
  {
    id: 22,
    category: "Fashion",
    img: "https://source.unsplash.com/400x300/?shoes",
  },
  {
    id: 23,
    category: "Beauty",
    img: "https://source.unsplash.com/400x300/?perfume",
  },
  {
    id: 24,
    category: "Finance",
    img: "https://source.unsplash.com/400x300/?trading",
  },
  {
    id: 25,
    category: "Fashion",
    img: "https://source.unsplash.com/400x300/?denim",
  },
  {
    id: 26,
    category: "Beauty",
    img: "https://source.unsplash.com/400x300/?nails",
  },
  {
    id: 27,
    category: "Finance",
    img: "https://source.unsplash.com/400x300/?crypto",
  },
  {
    id: 28,
    category: "Fashion",
    img: "https://source.unsplash.com/400x300/?jackets",
  },
  {
    id: 29,
    category: "Beauty",
    img: "https://source.unsplash.com/400x300/?lashes",
  },
  {
    id: 30,
    category: "Finance",
    img: "https://source.unsplash.com/400x300/?budget",
  },
  {
    id: 31,
    category: "Fashion",
    img: "https://source.unsplash.com/400x300/?sneakers",
  },
  {
    id: 32,
    category: "Beauty",
    img: "https://source.unsplash.com/400x300/?lipstick",
  },
  {
    id: 33,
    category: "Finance",
    img: "https://source.unsplash.com/400x300/?savings",
  },
  {
    id: 34,
    category: "Fashion",
    img: "https://source.unsplash.com/400x300/?hats",
  },
  {
    id: 35,
    category: "Beauty",
    img: "https://source.unsplash.com/400x300/?serum",
  },
  {
    id: 36,
    category: "Finance",
    img: "https://source.unsplash.com/400x300/?funds",
  },
  {
    id: 37,
    category: "Fashion",
    img: "https://source.unsplash.com/400x300/?glamour",
  },
  {
    id: 38,
    category: "Beauty",
    img: "https://source.unsplash.com/400x300/?powder",
  },
  {
    id: 39,
    category: "Finance",
    img: "https://source.unsplash.com/400x300/?portfolio",
  },
  {
    id: 40,
    category: "Fashion",
    img: "https://source.unsplash.com/400x300/?accessories",
  },
  {
    id: 41,
    category: "Beauty",
    img: "https://source.unsplash.com/400x300/?moisturizer",
  },
  {
    id: 42,
    category: "Finance",
    img: "https://source.unsplash.com/400x300/?financial",
  },
  {
    id: 43,
    category: "Fashion",
    img: "https://source.unsplash.com/400x300/?fashionable",
  },
  {
    id: 44,
    category: "Beauty",
    img: "https://source.unsplash.com/400x300/?cosmetic",
  },
  {
    id: 45,
    category: "Finance",
    img: "https://source.unsplash.com/400x300/?entrepreneurship",
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
        Arming businesses for marketplace dominance with high-level AI marketing and advertising assets from our Toronto fort.
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
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8"
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white cursor-pointer transition transform hover:scale-105 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.category}
                className="w-full h-[19rem] object-cover"
              />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
