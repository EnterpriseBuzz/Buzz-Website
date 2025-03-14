import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function LogoGrid() {
  return (
    <div>
      <div className="py-10 px-2 lg:px-24  flex flex-col  items-center  justify-center  ">
      <h2 className="text-xl text-[#000] font-semibold  text-center md:text-3xl lg:text-4xl 2xl:text-5xl  capitalize">
      still not convinced? well they were
        </h2>
        <h2 className="text-[12px] text-[#000] text-center md:text-sm lg:text-lg 2xl:text-xl  py-1">
          Beyond Toronto’s borders, EnterpriseBuzz AI has not only built
          believers in our AI-driven marketing and advertising prowess but also
          raving lifelong evangelists.
        </h2>
      </div>
      <div className="py-10 px-2 lg:p-24 bg-[#0C0C1B]">
        <AnimatePresence>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-3  sm:grid-cols-5 md:grid-cols-7"
          >
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./logogrid/Hero image.png" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./logogrid/Hero image 1.png" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./logogrid/Hero image1.png" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./logogrid/Hero image2.png" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./logogrid/Hero image3.png" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./logogrid/Hero image4.png" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./logogrid/Hero image5.png" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./logogrid/Hero image6.png" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./logogrid/Hero image7.png" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./logogrid/Hero image8.png" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./logogrid/Hero image9.png" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./logogrid/Hero image10.png" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./logogrid/Hero image11.png" alt="pics" />
            </button>
            
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./logogrid/Hero image13.png" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./logogrid/Hero image14.png" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./logogrid/Hero image15.png" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./logogrid/Hero image16.png" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./logogrid/Hero image17.png" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./logogrid/Hero image18.png" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./logogrid/Hero image19.png" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./logogrid/Hero image20.png" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./logogrid/Hero image21.png" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./logogrid/Hero image22.png" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./logogrid/Hero image23.png" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./logogrid/Hero image24.png" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./logogrid/Hero image25.png" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./logogrid/Hero image26.png" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./logogrid/Hero image27.png" alt="pics" />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default LogoGrid;
