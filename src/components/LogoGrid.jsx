import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function LogoGrid() {
  return (
    <div>
      <div className="py-10 px-2 lg:px-24  flex flex-col  items-center  justify-center  ">
        <h2 className="text-sm text-[#000] font-bold  text-center md:text-2xl lg:w-[35rem] capitalize">
          still not convinced? well they were
        </h2>
        <h2 className="text-[10px] text-[#000] text-center md:text-sm">
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
            className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-7"
          >
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./services/service3.svg" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./services/service3.svg" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./services/service3.svg" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./services/service3.svg" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./services/service3.svg" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./services/service3.svg" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./services/service3.svg" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./services/service3.svg" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./services/service3.svg" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./services/service3.svg" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./services/service3.svg" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./services/service3.svg" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./services/service3.svg" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./services/service3.svg" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./services/service3.svg" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./services/service3.svg" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./services/service3.svg" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./services/service4.svg" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./services/service5.svg" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./services/service6.svg" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./services/service7.svg" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./services/service8.svg" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./services/service9.svg" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./services/service10.svg" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./services/service11.svg" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./services/service12.svg" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./services/service13.svg" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="./services/service14.svg" alt="pics" />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default LogoGrid;
