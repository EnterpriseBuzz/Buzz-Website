import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function SeoSuites() {
  return (
    <div className=" px-2 lg:px-32  bg-[#fff]">
      {/* Headline */}
      <h2 className="text-4xl font-bold text-gray-900">
        Our Suite of SEO Solutions
      </h2>
      <p className="pb-10 text-gray-600 ">
        Discover our comprehensive suite of SEO services, crafted to deliver
        sustainable growth and a stronger online presence for your business—all
        under one roof.
      </p>

      <AnimatePresence>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1  sm:grid-cols-3 gap-6"
        >
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="../seo/seo 1.svg" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="../seo/seo 2.svg" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="../seo/seo 3.svg" alt="pics" />
          </button>

          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="../seo/seo 4.svg" alt="pics" />
          </button>

          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="../seo/seo 5.svg" alt="pics" />
          </button>

          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="../seo/seo 6.svg" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="../seo/seo 7.svg" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="../seo/seo 8.svg" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="../seo/seo 9.svg" alt="pics" />
          </button>
        </motion.div>
      </AnimatePresence>

      <p className="py-4 lg:py-10 text-gray-600 ">
        Outmaneuver competitors, not outspend them. EnterpriseBuzz AI provides
        the strategic intelligence to win the SEO war ethically. We dissect the
        entire SEO battlefield – from white-hat excellence to black-hat threats
        and negative SEO defenses – empowering you to build an unshakeable
        foundation and exploit competitive weaknesses without compromising your
        integrity. Gain a lasting, ethical edge. Choose EnterpriseBuzz AI.
      </p>
    </div>
  );
}

export default SeoSuites;
