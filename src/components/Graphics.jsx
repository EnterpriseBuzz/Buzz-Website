import React, { useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Graphics() {
  // Memoized callback for Calendly
  const openCalendly = useCallback(() => {
    window.open("https://calendly.com/enterprisebuzzai", "_blank");
  }, []);
  return (
    <div className="mx-auto px-3 lg:px-48 py-10">
      <AnimatePresence>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full cursor-pointer transition transform hover:scale-105 "
        >
          <img
            src="./bg/graphicsTop.svg"
            alt="pics"
            className="w-full hidden md:block py-2"
          />
          {/* Mobile view */}
          <img
            src="./bg/mGraphicsTop.svg"
            alt="pics"
            className="w-full md:hidden py-2"
          />
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full items-center justify-between  grid grid-cols-1 md:grid-cols-2 gap-2"
        >
          <img
            src="./bg/graphicsLeft.png"
            alt="pics"
            className="w-full cursor-pointer transition transform hover:scale-105 "
          />
          <img
            src="/bg/graphicsRight.svg"
            alt="pics"
            onClick={openCalendly}
            className="w-full cursor-pointer transition transform hover:scale-105 "
          />
        </motion.div>

        <motion.h2
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-base text-[#000] font-extralight mx-auto text-center md:text-xl xl:text-3xl px-5 md:px-10 py-10 capitalize"
        >
          embed a full‑stack design squad inside your brand—on demand—yet you
          pay only a sliver of in‑house costs. <br /> Unlimited requests,
          lightning‑fast turnarounds, and AI‑driven creative that converts. One
          flat fee; zero compromise.
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}

export default Graphics;
