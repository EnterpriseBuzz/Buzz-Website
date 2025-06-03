import React from "react";
import SeoScoreForm from "./SeoScoreForm";
import { motion, AnimatePresence } from "framer-motion";

function SeoScore() {
  return (
    <div className=" px-2 lg:px-24 bg-[#fff]">
      <SeoScoreForm />
      <AnimatePresence>
        <motion.img
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          src="../drive.png"
          alt=""
          className="h-[8rem] sm:h-auto mx-auto  pt-10 mb-5 lg:py-20"
        />

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1  sm:grid-cols-3 gap-6 "
        >
          <div className="bg-[#fff] p-5 rounded-xl cursor-pointer transition transform hover:scale-105 text-center space-y-2">
            <img src="../icons/icon18.svg" alt="pics" className="mx-auto" />
            <h1 className="font-semibold text-gray-800">
              Foundational SEO Setup
            </h1>
            <p className="text-[#36474F] font-light ">
              This service focuses on implementing the core SEO elements your
              website needs to be properly understood and indexed by search
              engines, setting you up for success in the Toronto online
              landscape.
            </p>
          </div>
          <div className="bg-[#fff] p-5 rounded-xl cursor-pointer transition transform hover:scale-105 text-center space-y-2">
            <img src="../icons/icon19.svg" alt="pics" className="mx-auto" />
            <h1 className="font-semibold text-gray-800">
              SEO Audit & Strategy
            </h1>
            <p className="text-[#36474F] font-light ">
              We provide a thorough SEO audit to pinpoint areas for improvement,
              followed by a custom strategy designed for your business goals in
              Toronto
            </p>
          </div>
          <div className="bg-[#fff] p-5 rounded-xl cursor-pointer transition transform hover:scale-105 text-center space-y-2">
            <img src="../icons/icon20.svg" alt="pics" className="mx-auto" />
            <h1 className="font-semibold text-gray-800">
              Local SEO Domination
            </h1>
            <p className="text-[#36474F] font-light ">
              This service combines a comprehensive audit of your local SEO, the
              development of a targeted strategy for Toronto, and the execution
              of a specific project to improve your local search rankings and
              visibility in a competitive market like Toronto.
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default SeoScore;
