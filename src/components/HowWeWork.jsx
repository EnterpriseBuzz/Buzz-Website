import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

function HowWeWork() {
  const navigate = useNavigate();

  return (
    <div
      className="bg-[#0C0C1B] py-10 lg:p-24 px-2   flex flex-col  items-center  justify-center bg-no-repeat  bg-top md:bg-contain"
      style={{
        "background-image": "url('./bg/bgHDEAW.svg')",
      }}
    >
      <div className=" flex flex-col  items-center  justify-center ">
        <h2 className="text-3xl text-[#fff] font-semibold  text-center md:text-4xl xl:text-5xl  ">
          How Does EnterpriseBuzz AI Work?
        </h2>
        <h2 className="text-[13px] text-[#fff] text-center md:text-sm xl:text-base lg:w-[75%] py-2 capitalize">
          At EnterpriseBuzz AI, you have two options to inject your business
          with the Buzztamins (well-tested marketing & advertising services) it
          needs to grow healthily.
        </h2>

        <AnimatePresence>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full cursor-pointer transition transform hover:scale-105 hidden md:block py-10"
          >
            <img src="./HDEAW.svg" alt="pics" />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full justify-between hidden md:flex px-[12rem] -mt-10"
          >
            <button
              onClick={() => navigate("/pricing")}
              className="-mt-10 h-[3rem] w-[11rem] px-12 py-3 text-white text-lg font-semibold rounded-xl bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 shadow-lg hover:opacity-90 transition"
            >
              Explore
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                document
                  .getElementById("web")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-10 w-[11rem] px-12 py-3 text-white text-lg font-semibold rounded-xl bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 shadow-lg hover:opacity-90 transition"
            >
              Explore
            </button>
          </motion.div>

          {/* Mobile view */}
          <div className="md:hidden py-10 px-2 flex flex-col justify-center w-full">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full  transition transform pb-10"
            >
              <img src="./top.svg" alt="pics" className="w-full" />
            </motion.div>
            <motion.button
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => navigate("/pricing")}
              className="mx-auto w-[11rem] cursor-pointer hover:scale-105 px-12 py-2 text-white text-lg font-semibold rounded-xl bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 shadow-lg hover:opacity-90 transition"
            >
              Explore
            </motion.button>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="  transition transform pt-20"
            >
              <img src="./butt.svg" alt="pics" className="w-full" />
            </motion.div>
            <motion.button
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);

                document
                  .getElementById("web")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mx-auto w-[11rem] my-10 cursor-pointer hover:scale-105 px-12 py-2 text-white text-lg font-semibold rounded-xl bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 shadow-lg hover:opacity-90 transition"
            >
              Explore
            </motion.button>
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default HowWeWork;
