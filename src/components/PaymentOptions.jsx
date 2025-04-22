import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function PaymentOptions() {
  return (
    <div className="bg-[#fff] py-10 px-4 lg:px-24">
      <div className=" flex flex-col  items-center  justify-center  ">
        <h2 className="text-xl text-[#000] font-normal text-center md:text-2xl xl:text-3xl lg:w-[35rem] ">
          Payment Options
        </h2>
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 gap-4  sm:grid-cols-3 md:grid-cols-10 mt-6"
        >
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="./payment/Container.png" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="./payment/Container1.png" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="./payment/Container2.png" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="./payment/Container3.png" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="./payment/Container4.png" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="./payment/Container5.png" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="./payment/Container6.png" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="./payment/Container7.png" alt="pics" />
          </button>
          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="./payment/Container8.png" alt="pics" />
          </button>

          <button className="w-full cursor-pointer transition transform hover:scale-105">
            <img src="./payment/more.png" alt="pics" />
          </button>
        </motion.div>
      </AnimatePresence>

      <img src="./payment/ssl.svg" alt="pics" className="mx-auto pt-10" />
    </div>
  );
}

export default PaymentOptions;
