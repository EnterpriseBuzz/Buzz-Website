import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AIGrowthSection() {
  const [firstName, setFirstName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application submitted with name:", firstName);
    // Here you would typically handle form submission
    alert(
      "Thank you for applying to the EnterpriseBuzz AI Amplification Giveaway!"
    );
    setFirstName("");
  };
  return (
    <div
      className="bg-[#FAFAFA] py-16 md:px-24"
      style={{
        "background-image": "url('./bg/unlockBg.svg')",
      }}
    >
      <AnimatePresence>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4  mt-6"
        >
          {/* Left */}
          <div
            className="bg-[#FAFAFA] p-5 lg:p-10 h-[35rem] sm:h-[42rem] bg-no-repeat space-y-3 bg-cover"
            style={{
              "background-image": "url('./bg/left.svg')",
            }}
          >
            <img
              src="../flogo.png"
              alt="buzzlogo"
              className=" w-[8rem] lg:w-[11rem]"
            />
            <h2 className="text-base text-[#fff] font-semibold  md:text-xl  ">
              Take a look at our premium web design portfolio
            </h2>
            <h2 className="text-[12px] font-thin text-[#fff] md:text-sm capitalize">
              a showcase of game-changing, aggressive design strategies that
              obliterate mediocrity and set a new benchmark for digital
              excellence.
            </h2>
            <button className="text-red-500 hover:bg-red-100 bg-white px-8 py-3 rounded-full  transition-colors duration-300 capitalize shadow-md">
              browse template
            </button>
          </div>

          {/* Right */}
          <div
            className="bg-[#FAFAFA] p-5 lg:p-10 h-[35rem] sm:h-[42rem] bg-no-repeat space-y-3 bg-cover"
            style={{
              "background-image": "url('./bg/right.svg')",
            }}
          >
            <img
              src="../logo.svg"
              alt="buzzlogo"
              className=" w-[8rem] lg:w-[11rem]"
            />
            <h2 className="text-base text-[#170F49] font-semibold  md:text-xl  ">
              Looking to build a web front that not only impresses but also
              converts?
            </h2>
            <h2 className="text-[12px] font-thin text-[#6F6C90] md:text-sm py-2 capitalize">
              Tap the button below, and our elite tactical web‑design strike
              team will unleash an aggressive arsenal on your behalf—converting
              every pixel into quantifiable profit.
            </h2>
            <button className="w-[10rem]">
              <img src="../buttons/magicButt.gif" alt="" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="max-w-3xl mx-auto text-center mt-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-2xl font-semibold text-gray-900 mb-4">
          Unlock transformational AI-powered growth—for free.
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mb-8">
          Are you a non-profit organization, female-owned start-up, or an
          entrepreneur under 18? Then, you qualify for our Monthly
          EnterpriseBuzz AI Amplification Giveaway.
        </p>
        <div className="flex justify-center">
          <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-4 shadow-md p-2 rounded-xl sm:rounded-full  bg-white">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full sm:w-72 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent " // Added bg-white
            />
            <button
              onClick={handleSubmit}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full  transition-colors duration-300 shadow-md"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIGrowthSection;
