import React, { useEffect } from "react";
import SEO from "../../components/SEO";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialSection from "../../components/services/TestimonialSection";
import WhySEOServices from "../../components/services/WhySEOServices";
import SeoScore from "../../components/services/SeoScore";
import WhyInvestInSEO from "../../components/services/WhyInvestInSEO";
import CustomerReviewsWall from "../../components/services/CustomerReviewsWall";

function SEOMarketing() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <SEO
        title="SEOMarketing"
        description="EnterpriseBuzz AI is a pioneering media and technology company, dedicated to propelling businesses forward through innovative advertising, branding, CRM, and marketing tools."
        name="EnterpriseBuzz AI"
        type="description"
      />
      <div
        className="bg-[#F3F4F5] bg-no-repeat bg-cover "
        style={{
          "background-image": "url('../bg/seoBg.png')",
        }}
      >
        <motion.img
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          src="../SeoHeader.svg"
          alt=""
          className="mx-auto -mt-5"
        />
        <h2 className="md:text-base lg:text-lg text-[#414141] p-5 lg:py-16 text-center  mx-auto w-full  md:leading-[4.5rem]">
          Trusted by 50,000+ businesses for innovative design and growth.
        </h2>
      </div>
      <div className=" px-2 lg:px-24 bg-[#fff]">
        <AnimatePresence>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-3  sm:grid-cols-6 gap-6"
          >
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="../logogrid/Hero image28.png" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="../logogrid/Hero image1.png" alt="pics" />
            </button>
            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="../logogrid/Hero image29.png" alt="pics" />
            </button>

            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="../logogrid/Hero image9.png" alt="pics" />
            </button>

            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="../logogrid/Hero image16.png" alt="pics" />
            </button>

            <button className="w-full cursor-pointer transition transform hover:scale-105">
              <img src="../logogrid/Hero image5.png" alt="pics" />
            </button>
          </motion.div>
          <motion.img
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            src="../headerRating.png"
            alt=""
            className="mx-auto px-4 py-20"
          />
        </AnimatePresence>
      </div>

      {/* Seo Score */}
      <SeoScore />

      {/* TestimonialSection */}
      <TestimonialSection />

      {/* CustomerReviewsWall */}
      <CustomerReviewsWall />

      {/* WhySEOServices */}
      <WhySEOServices />

      {/* WhyInvestInSEO */}
      <WhyInvestInSEO />
    </div>
  );
}

export default SEOMarketing;
