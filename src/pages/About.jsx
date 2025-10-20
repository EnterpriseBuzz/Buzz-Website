import React, { useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const openCalendly = useCallback(() => {
    window.open("https://calendly.com/enterprisebuzzai", "_blank");
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="text-gray-600">
      <SEO
        title="About Us"
        description="EnterpriseBuzz AI is a pioneering media and technology company, dedicated to propelling businesses forward through innovative advertising, branding, CRM, and marketing tools."
        name="EnterpriseBuzz AI"
        type="description"
      />

      {/* Hero Section */}
      <div
        className="w-full bg-center bg-cover h-[15rem]  relative"
        style={{ backgroundImage: "url('./hbg.png')" }}
      >
        <div className="absolute inset-0 bg-black/5" />
        <div className="relative flex items-center justify-center h-full text-center px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="space-y-3"
          >
            <h1 className="text-3xl lg:text-7xl font-bold text-white">
              About Us
            </h1>
            <p className="text-sm lg:text-lg text-white max-w-3xl mx-auto pb-5">
              We're more than just a digital media agency — we’re your partners
              in business growth.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="container relative z-[10] mx-auto px-4 lg:px-16 -mt-12 ">
        <motion.img
          src="../Artboard.webp"
          alt="EnterpriseBuzz AI team illustration"
          className="w-full lg:h-[33rem] rounded-xl shadow-lg object-cover"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* Company Intro */}
      <div className="container mx-auto my-16 px-4 lg:px-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            className="md:w-7/12 lg:w-6/12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-[#62747d] font-light leading-relaxed">
              EnterpriseBuzz AI is a full-service media and technology company
              that helps businesses deploy sophisticated advertising, branding,
              CRM, and marketing tools using our signature aggressive
              traditional and digital techniques for generating attention,
              driving engagement, customer acquisition, and increasing revenue.
            </p>
            <p className="mt-4 text-[#62747d] font-light leading-relaxed">
              Known for our adaptability and forward-thinking, we not only
              respond to industry trends but also set them, ensuring our
              partners achieve tangible results and market leadership.
            </p>
            <button
              onClick={openCalendly}
              className="mt-6 w-[14rem] bg-[#FFCC00] rounded-lg text-sm py-4 font-medium text-black transition duration-200 hover:bg-[#757E7E] hover:text-white"
            >
              Get Started
            </button>
          </motion.div>

          <motion.div
            className="sm:w-[28rem]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <img
              src="../about.webp"
              alt="EnterpriseBuzz AI office"
              className="rounded-lg shadow-md"
            />
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container mx-auto my-16 px-4 lg:px-16">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="p-6 bg-[#F9F9F9] rounded-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <img src="../mission.webp" alt="Mission" className="h-16" />
            <h2 className="text-xl font-semibold text-gray-800 mt-5">
              Our Mission
            </h2>
            <p className="mt-3 text-sm font-light text-[#62747d] leading-relaxed">
              Our mission is to empower businesses with the most innovative and
              aggressive marketing strategies by leveraging artificial
              intelligence and our signature fine-tuned A/B/C techniques.
            </p>
            <p className="mt-2 text-sm font-light text-[#62747d] leading-relaxed">
              We push the boundaries of creativity, technology, and strategy to
              deliver unparalleled engagement and revenue growth for our
              clients.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-[#F9F9F9] rounded-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <img src="../vision.webp" alt="Vision" className="h-16" />
            <h2 className="text-xl font-semibold text-gray-800 mt-5">
              Our Vision
            </h2>
            <p className="mt-3 text-sm font-light text-[#62747d] leading-relaxed">
              Our vision is to establish the premier global community for
              digital marketers and entrepreneurs, pioneering the frontier of
              marketing innovation with bold, controversial, and tech-powered
              strategies.
            </p>
            <p className="mt-2 text-sm font-light text-[#62747d] leading-relaxed">
              We aim to empower millions of enterprises to reach unicorn status
              by 2031, transforming their trajectories with our comprehensive
              arsenal for marketing and growth.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-[#F9F9F9] py-20 px-4 lg:px-16">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-black">
            Our Values
          </h2>
          <p className="mt-3 text-sm md:text-base font-light text-[#62747d]">
            Explore cutting-edge marketing insights, trends, and technological
            innovations right at your fingertips. Discover content that drives
            the future of innovative marketing.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Innovation Leadership",
              desc: "We pioneer advancements in marketing technology, redefining what's possible in digital marketing.",
            },
            {
              title: "Impactful Boldness",
              desc: "We embrace controversy and bold tactics that ensure clients always stand out in the crowded market.",
            },
            {
              title: "Empowerment through Knowledge",
              desc: "We empower entrepreneurs worldwide with insights, collaboration, and resources for extraordinary growth.",
            },
          ].map((value, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h3 className="text-base font-semibold text-gray-800">
                {value.title}
              </h3>
              <p className="mt-2 text-sm font-light text-[#36474F] leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center lg:hidden">
          <button
            onClick={openCalendly}
            className="w-[14rem] bg-[#FFCC00] rounded-lg text-sm py-4 font-medium text-black transition duration-200 hover:bg-[#757E7E] hover:text-white"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
