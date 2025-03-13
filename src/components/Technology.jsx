import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function Technology() {
  return (
    <div className="bg-[#0C0C1B] py-10 px-2 lg:p-24">
      <div className=" flex flex-col  items-center  justify-center  ">
        <h2 className="text-sm text-[#fff] font-semibold  text-center md:text-3xl lg:w-[35rem] ">
          THE TECHNOLOGY
        </h2>
        <h2 className="text-[10px] text-[#fff] text-center md:text-sm w-[75%] py-2 capitalize">
          Unlike other marketing software companies that leave their users to
          navigate complex systems on their own, EnterpriseBuzz AI Toronto does
          the heavy lifting by helping businesses deploy sophisticated
          advertising, branding, and marketing tools that generates bold
          attention, drive engagement, acquire customers, and boost revenue.
        </h2>
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-4  sm:grid-cols-2 md:grid-cols-5 mt-6"
        >
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="./technology/tech1.png" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="./technology/tech2.png" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="./technology/tech3.png" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="./technology/tech4.png" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="./technology/tech5.png" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="./technology/tech6.png" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="./technology/tech7.png" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="./technology/tech8.png" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="./technology/tech9.png" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="./technology/tech10.png" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="./technology/tech11.png" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="./technology/tech12.png" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="./technology/tech13.png" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="./technology/tech14.png" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="./technology/tech15.png" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="./technology/tech16.png" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="./technology/tech17.png" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="./technology/tech18.png" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="./technology/tech19.png" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="./technology/tech20.png" alt="pics" />
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Technology;
