import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const testimonialData = [
  {
    name: "Lisa Senis",
    title: "Independent Enagic Distributor, Canada",
    image: "../avatars/testi6.png",
    stars: 5,
    testimonial:
      "Enterprise Buzz AI Created Our Brand Logo And Several Different Pieces Of Media Graphics That Represented Our Brand. Their Work On Everything Was Phenomenal!! They Created An Incredible Logo That Was Even Better Than I Could Have Imagined!",
  },
  {
    name: "Christopher",
    title: "VP Marketing, Ausyglosian Cosmetics, Australia",
    image: "../avatars/testi7.png",
    stars: 4,
    testimonial:
      "Their Email War-Room Rewrote Our Nurture Flows, Slashing Acquisition Costs By 53% Across Five Continents.",
  },
  {
    name: "Lucia R.",
    title: "VP Marketing, Aurelia Cosmetics, Mexico",
    image: "../avatars/testi8.png",
    stars: 5,
    testimonial:
      "Controversial? Absolutely. Effective? Beyond Expectation. Our Influencer-Driven Product Launch Smashed Regional Sales Records Within 48 Hours.",
  },
  {
    name: "Ade O.",
    title: "CMO, Zamara Telecom, Nigeria",
    image: "../avatars/testi9.png",
    stars: 5,
    testimonial:
      "Their Bold Multichannel Takeover Spiked Our Qualified-Lead Pipeline By 4.3x In Just One Quarter. We've Never Scaled This Fast.",
  },
  {
    name: "Water Divas",
    title: "Enagic Distributor, Canada",
    image: "../avatars/testi10.png",
    stars: 5,
    testimonial:
      "EnterpriseBuzz AI Has Not Only Redefined Our Online Presence But Also Elevated Our Audience Engagement To Unprecedented Levels.",
  },
  {
    name: "Jenifer",
    title: "Digital Director, Heliminos Energy, Italy",
    image: "../avatars/testi11.png",
    stars: 4,
    testimonial:
      "From a standing start, they built us a global digital presence that's driving seven-figure revenues. Astonishing.",
  },
];

const TestimonialCard = ({ testimonialData }) => {
  const stars = [];
  for (let i = 0; i < testimonialData.stars; i++) {
    stars.push(<Star key={i} className="w-4 h-4 text-yellow-400" />);
  }

  return (
    <div className="bg-white rounded-lg  p-6">
      <div className="flex items-center mb-4">
        <img
          src={testimonialData.image}
          alt={testimonialData.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h4 className="text-sm italic font-semibold text-gray-700">
            {testimonialData.name}
          </h4>
          <p className="text-xs text-gray-500">{testimonialData.title}</p>
        </div>
      </div>
      <div className="flex text-yellow-400 mb-2">{stars}</div>
      <p className="text-gray-600 text-sm italic">
        {testimonialData.testimonial}
      </p>
    </div>
  );
};

function TrustedBy() {
  return (
    <>
      <div className="w-full bg-gradient-to-br from-[#F0FFF0] via-[#E0FFFF] to-[#FAEBD7]">
        <div className="lg:px-28 mx-auto py-20">
          <img
            src="../charlie.svg"
            alt="quote"
            className="lg:w-[56rem] mx-auto"
          />

          <div className=" flex flex-col  items-center  justify-center  mt-9">
            <h2 className="text-xl text-[#000] capitalize italic font-semibold  text-center md:text-3xl xl:text-4xl lg:w-[45rem] ">
              trusted by over 1K+ forward-thinking enterprises worldwide.
            </h2>
          </div>
          <AnimatePresence>
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 gap-4  sm:grid-cols-2 md:grid-cols-3 mt-6"
            >
              {testimonialData.map((testimonial, index) => (
                <TestimonialCard key={index} testimonialData={testimonial} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="bg-[#fff] py-10 px-2 lg:px-24">
        <div className=" flex flex-col  items-center  justify-center lg:w-[68%] mx-auto">
          <h2 className="text-[12px] italic text-[#000] font-light text-center md:text-sm xl:text-base  py-2 capitalize">
            Tap to inspect the battlefield accolades—unfiltered client verdicts
            forged by our Aggressive, Bold & Controversial growth offensives
            across 12 + global theaters (Countries) where EnterpriseBuzz AI
            dominates.
          </h2>

          <AnimatePresence>
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-16  md:grid-cols-4"
            >
              <button className="w-full cursor-pointer transition transform hover:scale-105">
                <img src="./brands/trust1.png" alt="pics" />
              </button>
              <button className="w-full cursor-pointer transition transform hover:scale-105">
                <img src="./brands/trust2.png" alt="pics" />
              </button>
              <button className="w-full cursor-pointer transition transform hover:scale-105">
                <img src="./brands/trust3.png" alt="pics" />
              </button>
              <button className="w-full cursor-pointer transition transform hover:scale-105">
                <img src="./brands/trust4.png" alt="pics" />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default TrustedBy;
