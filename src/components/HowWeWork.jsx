import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function HowWeWork() {
  return (
    <div className="bg-[#0C0C1B] py-10 px-2 lg:p-24 space-y-10">
      <div className=" flex flex-col  items-center  justify-center">
        <h2 className="text-xl text-[#fff] font-semibold  text-center md:text-3xl xl:text-4xl  ">
          How Does EnterpriseBuzz AI Work?
        </h2>
        <h2 className="text-[12px] text-[#fff] text-center md:text-sm xl:text-base lg:w-[75%] py-2 capitalize">
          At EnterpriseBuzz AI, you have two options to inject your business
          with the Buzztamins (well-tested marketing & advertising services) it
          needs to grow healthily.
        </h2>
      </div>
      <AnimatePresence>
        <motion.button
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full cursor-pointer transition transform hover:scale-105 hidden md:block"
        >
          <img src="./HDEAW.svg" alt="pics" />
        </motion.button>
        {/* Mobile view */}
        <motion.button
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full cursor-pointer transition transform hover:scale-105 md:hidden"
        >
          <img src="./mHDEAW.svg" alt="pics" />
        </motion.button>
      </AnimatePresence>
    </div>
  );
}

export default HowWeWork;
