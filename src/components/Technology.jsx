import React from "react";
import { motion } from "framer-motion";

const techImages = Array.from(
  { length: 20 },
  (_, i) => `./technology/tech${i + 1}.png`
);

const containerVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

function Technology() {
  return (
    <div className="bg-[#0C0C1B] py-10 px-2 lg:p-24">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl text-white font-semibold text-center md:text-3xl xl:text-4xl lg:w-[35rem]">
          THE TECHNOLOGY
        </h2>
        <h2 className="text-[12px] text-white text-center md:text-sm xl:text-base lg:w-[75%] py-2 capitalize">
          Unlike other marketing software companies that leave their users to
          navigate complex systems on their own, EnterpriseBuzz AI Toronto does
          the heavy lifting by helping businesses deploy sophisticated
          advertising, branding, and marketing tools that generate bold
          attention, drive engagement, acquire customers, and boost revenue.
        </h2>
      </div>

      <motion.div
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 mt-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {techImages.map((src, index) => (
          <motion.button
            key={index}
            className="w-full cursor-pointer"
            variants={itemVariants}
          >
            <img
              src={src}
              alt={`Tech ${index + 1}`}
              loading="lazy"
              className="w-full h-auto transition-transform duration-200 hover:scale-105"
            />
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}

export default Technology;
