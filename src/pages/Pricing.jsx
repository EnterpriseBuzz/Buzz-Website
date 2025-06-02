import React, { useEffect } from "react";
import SEO from "../components/SEO";
import TrustedBy from "../components/TrustedBy";
import AIGrowthSection from "../components/AIGrowthSection";

function Pricing() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="bg-white">
      <SEO
        title="Pricing"
        description="EnterpriseBuzz AI is a pioneering media and technology company, dedicated to propelling businesses forward through innovative advertising, branding, CRM, and marketing tools."
        name="EnterpriseBuzz AI"
        type="description"
      />
      {/* Hero ++++++++++++++++++++++++++ */}
      {/* <div className="wrap-video ">
        <video
          className="object-cover h-full lg:h-[36rem] xl:h-full w-full bg-black cursor-pointer"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="./HeroVid.mp4" type="video/mp4" />
        </video>
      </div> */}
      <img src="../bg/cover.svg" alt="check" />

      <div className=" text-gray-600">
        <div className="w-full py-10 sm:py-20 bg-gradient-to-r from-[#FF8C00] via-[#8B008B] to-[#191853] flex justify-center items-center">
          <div className="text-center text-white">
            <h1 className="text-sm lg:text-lg font- text-white w-full px-4 md:w-[48rem] ">
              At EnterpriseBuzz AI, we combine our signature A/B/C (Aggressive,
              Bold, Controversial) marketing framework with advanced AI-driven
              strategies to rapidly establish your brand’s digital presence
              while maximizing ROI.
            </h1>
          </div>
        </div>
        <div className="mx-auto sm:px-12 lg:px-24 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {/* Plan 1 ************************************ */}
          <div>
            <div className="bg-[#F4F4F4] px-5 py-12 rounded-t-xl text-center">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 pb-2">
                Spark Buzz Plan
              </h1>
              <h1 className="text-xl md:text-3xl font-semibold text-[#DA281C] ">
                $1,399
              </h1>

              <div className="relative mx-auto w-44 my-7">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
                <select className="py-3 block appearance-none border-y-[1px] text-[#495454] text-center border-[#ACACAC] text-xl font-semibold w-full focus:outline-none  bg-[#F4F4F4]">
                  <option value="">Monthly</option>
                  <option value="">Quaterly</option>
                  <option value="">Yearly</option>
                </select>
              </div>
              <a
                href="https://app.enterprisebuzzer.com/register"
                className="capitalize w-full bg-[#FFCC00] rounded-lg text-sm px-5 py-3 text-center font-semibold text-black  transition duration-200 hover:bg-[#757E7E]"
              >
                Activate your free trial
              </a>
              <p className="text-[#36474F]  text-sm mt-7">
                Cancel anytime. Pay nothing for 7 days.
              </p>
              <p className="text-[#36474F]  text-sm mt-7">
                Startups and emerging businesses
              </p>
            </div>
            <p className="text-[#36474F] text-center text-sm py-2">
              All features options
            </p>
            <div className="bg-[#F4F4F4] px-8 md:px-12 py-6 rounded-b-xl space-y-3 ">
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  AI-Driven Campaigns
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  SEO and SEM Services
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Automated Email Marketing
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Social Media Mgt. and Marketing
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Aggressive Marketing Techniques
                </p>
              </div>
              <div className="flex items-center gap-x-2 md:pb-[16.5rem]">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Predictive Retargeting
                </p>
              </div>
            </div>
          </div>
          {/* Plan 2 ************************************ */}
          <div>
            <div className="relative bg-[#F4F4F4] px-5 py-12 rounded-t-xl text-center overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400"></div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 pb-2 relative z-10">
                Boaster Buzz Plan
              </h1>
              <h1 className="text-xl md:text-3xl font-semibold text-[#DA281C] relative z-10">
                $3,599
              </h1>

              <div className="relative mx-auto w-44 my-7 z-10">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
                <select className="py-3 block appearance-none border-y-[1px] text-[#495454] text-center border-[#ACACAC] text-xl font-semibold w-full focus:outline-none  bg-[#F4F4F4]">
                  <option value="">Monthly</option>
                  <option value="">Quaterly</option>
                  <option value="">Yearly</option>
                </select>
              </div>
              <a
                href="https://app.enterprisebuzzer.com/register"
                className="capitalize w-full bg-[#FFCC00] rounded-lg text-sm px-5 py-3 text-center font-semibold text-black  transition duration-200 hover:bg-[#757E7E] relative z-10"
              >
                Activate your free trial
              </a>
              <p className="text-[#36474F]  text-sm mt-7 relative z-10">
                Cancel anytime. Pay nothing for 7 days.
              </p>
              <p className="text-[#36474F]  text-sm mt-7 relative z-10">
                Established mid-sized companies
              </p>
            </div>
            <p className="text-[#36474F] text-center text-sm py-2">
              All features options
            </p>
            <div className="bg-[#F4F4F4] px-8 md:px-12 py-6 rounded-b-xl space-y-3">
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  AI-Driven Campaigns
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  SEO and SEM Services
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Automated Email Marketing
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Social Media Mgt. and Marketing
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Basic Website Metrics
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Predictive Retargeting
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  UGC Campaign
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Landing Page & CRO
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Web Optimization Services
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  High-Impact Content Vault (e.g. eBook)
                </p>
              </div>
              <div className="flex items-center gap-x-2 md:pb-20">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Brand Reputation Monitoring
                </p>
              </div>
            </div>
          </div>
          {/* Plan 3 ************************************ */}
          <div>
            <div className="bg-[#F4F4F4] px-5 py-12 rounded-t-xl text-center">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 pb-2">
                Inferno Buzz Plan
              </h1>
              <h1 className="text-xl md:text-3xl font-semibold text-[#DA281C] ">
                $7,999
              </h1>

              <div className="relative mx-auto w-44 my-7">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
                <select className="py-3 block appearance-none border-y-[1px] text-[#495454] text-center border-[#ACACAC] text-xl font-semibold w-full focus:outline-none  bg-[#F4F4F4]">
                  <option value="">Monthly</option>
                  <option value="">Quaterly</option>
                  <option value="">Yearly</option>
                </select>
              </div>
              <a
                href="https://app.enterprisebuzzer.com/register"
                className="capitalize w-full bg-[#FFCC00] rounded-lg text-sm px-5 py-3 text-center font-semibold text-black  transition duration-200 hover:bg-[#757E7E]"
              >
                Activate your free trial
              </a>
              <p className="text-[#36474F]  text-sm mt-7">
                Cancel anytime. Pay nothing for 7 days.
              </p>
              <p className="text-[#36474F]  text-sm mt-7">
                Large enterprises and market leaders
              </p>
            </div>
            <p className="text-[#36474F] text-center text-sm py-2">
              All features options
            </p>
            <div className="bg-[#F4F4F4] px-8 md:px-12 py-6 rounded-b-xl space-y-3">
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  AI-Driven Campaigns
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  SEO and SEM Services
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Automated Email Marketing
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Social Media Mgt. and Marketing
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Basic Website Metrics
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Predictive Retargeting
                </p>
              </div>
              <div className="flex items-center gap-x-2 ">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  UGC Campaign
                </p>
              </div>
              <div className="flex items-center gap-x-2 ">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Landing Page & CRO
                </p>
              </div>
              <div className="flex items-center gap-x-2 ">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  High-Impact Content Vault (e.g. eBook)
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Brand Reputation Monitoring
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Influencer Marketing
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Immersive AR/VR Brand Experience Lab
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-left text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Global Crisis Aversion & Reputation Recovery Protocol
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA ************************* */}
        <div className=" bg-[#fff] py-10 px-2 lg:px-24  flex flex-col  items-center  justify-center gap-x-1 ">
          <div className="container  mx-auto my-6 lg:my-16">
            <div
              className="w-full bg-center bg-cover sm:h-[35rem] md:h-[40rem] lg:h-[18rem] xl:h-[22rem] 2xl:h-[24rem] 3xl:h-[33rem] rounded-2xl p-5 lg:p-20"
              style={{
                "background-image": "url('./bg/pCTABanner.svg')",
              }}
            >
              <div className="flex items-center justify-between w-full h-full lg:py-5 lg:gap-x-10">
                <div className=" w-[37rem]">
                  <h1 className=" font-semibold text-white py-3 text-3xl lg:min-[350px]:text-[58px] lg:max-[350px]:text-[58px]  lg:leading-[3.5rem]">
                    Need a custom plan? Get in touch.
                  </h1>
                  <p className="hidden lg:block font-normal  text-[#fff]">
                    At EnterpriseBuzz AI, we understand that every enterprise
                    has unique goals. Our expert team is ready to craft a
                    tailored, aggressive strategy to fuel your growth—contact us
                    today!
                  </p>
                </div>
                <div className=" pt-0">
                  <div className=" flex gap-x-4 lg:mt-5 items-center">
                    <button className="">
                      <img src="../buttons/button.png" alt="i" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compared Features ************************* */}
        <div className="px-2 lg:px-20 mx-auto pb-20">
          <h2 className="text-gray-900 mt-3 mb-5 lg:mb-10 text-xl md:text-3xl font-bold text-left rounded-2xl focus:outline-none block w-full ">
            Compared Features
          </h2>
          <div className=" lg:w-full mx-auto overflow-x-auto scrollbar-hide inset-x-0 lg:grid grid-cols-4  lg:mt-12 px-2 lg:px-0">
            {/* Bar ************************************ */}
            <div className="">
              <p className="font-bold text-black text-xl lg:mt-16 py-2 ">
                Top features
              </p>
              <div className="pt-3 2xl:pt-0 space-y-5 lg:space-y-10 2xl:space-y-11 3xl:space-y-12 lg:w-full">
                <p className="text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  AI-Driven Campaigns
                </p>
                <p className="text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Aggressive Marketing Techniques
                </p>
                <p className="text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Creative and Bold Content
                </p>
                <p className="text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Landing Page & CRO
                </p>
                <p className="text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Landing Page & CRO
                </p>
                <div className="lg:py-[0.0px]"></div>
              </div>

              <p className="text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg font-bold">
                SEO and SEM Services
              </p>
              <div className="py-3 2xl:pb-3 2xl:pt-1 space-y-5 lg:space-y-10 2xl:space-y-12 lg:w-full">
                <p className="text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  1. SEO Setup & On-Page Optimization
                </p>
                <p className="text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  2. Target Keyword Research
                </p>
                <p className="text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  3. Link Building
                </p>
                <p className="text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Video Marketing
                </p>
                <p className="text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Social Media Mgt. and Marketing
                </p>
                <div className="lg:py-[0px]"></div>
              </div>

              <p className="text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg font-bold">
                Channel Optimizations Services
              </p>
              <div className="py-3 space-y-5 lg:space-y-10  lg:w-full">
                <p className="text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  1. Web Optimization
                </p>
                <p className="text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  2. Mobile Marketing Enhancements
                </p>
                <p className="text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  3. E-commerce Optimization
                </p>
                <p className="text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Blog Content Production
                </p>
                <p className="text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Digital Display and Native Advertising
                </p>
                <p className="text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Influencer Outreach
                </p>
                <div className="lg:py-0 2xl:py-5 3xl:py-7"></div>
              </div>

              <p className="text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg font-bold">
                Email Marketing Services
              </p>
              <div className="py-6 2xl:py-1 space-y-5 lg:space-y-9  2xl:space-y-11 lg:w-full">
                <p className="text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  1. Email Marketing Campaigns
                </p>
                <p className="text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  2. Email Automation (Drip Series)
                </p>
                <p className="text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Paid Search (SEM/PPC)
                </p>
                <p className="text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  UGC Campaigns
                </p>
                <p className="text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Immersive AR/VR Brand Experience Lab
                </p>
                <p className="text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Exclusive AI-Driven Automation & Dynamic Creative Engine
                </p>
                <p className="text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Performance Analytics
                </p>
                <p className="text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Dedicated Account Management & Consulting
                </p>
                <p className="text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Sustainability Reporting
                </p>
                <p className="text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Performance Guarantees
                </p>
                <p className="text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                  Transparency and Reporting
                </p>
              </div>
            </div>

            {/* Plan 1 ************************************ */}
            <div className="relative overflow-hidden mt-5 lg:mt-0">
              <div className="absolute inset-y-0 left-0 w-0.5 lg:bg-gradient-to-b from-[#FFCC00] to-[#DA281C]"></div>

              <div>
                <div className="px-8 py-1 text-center">
                  <h1 className="text-xl font-bold text-gray-800 pb-2">
                    Spark Buzz Plan
                  </h1>
                  <h1 className="text-xl font-semibold text-[#DA281C]  mb-5">
                    $2,399/ <span className="text-black text-sm">mo</span>
                  </h1>
                  <button className="lg:hidden w-full border-2 border-[#DA281C] rounded-lg  px-6 py-2 text-center font-semibold text-[#DA281C] text-base transition duration-200 hover:bg-[#757E7E] hover:border-[#757E7E] hover:text-white ">
                    Buy Now
                  </button>
                </div>

                <div className=" px-2 pt-6 lg:py-6 rounded-b-xl space-y-4 lg:space-y-7  2xl:space-y-8  lg:w-full">
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Basic AI-driven analytics and demographic targeting.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Entry-level aggressive digital campaigns
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Dynamic content strategies that push creative boundaries.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Not included.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Not included.
                    </p>
                  </div>
                  <div className="lg:py-0.5"></div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Basic technical site check + on-page fixes for up to 5
                      pages.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      10 core keywords for visibility.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Minimal link building efforts (3 new backlinks/month from
                      basic directories).
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      1 videos/month (e.g. product demo, brand story) with
                      moderate production values.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      8 posts/month on 1 platform (Facebook or Instagram).
                    </p>
                  </div>
                  <div className="lg:py-0.5"></div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Website analysis and basic optimization
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Not included.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Not included.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      2 posts/month (approx. 500 words each); SEO-optimized but
                      basic.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Not included.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Not included.
                    </p>
                  </div>
                  <div className="lg:py-7 2xl:py-9 3xl:py-12"></div>
                </div>

                <div className=" px-2 pb-4 rounded-b-xl space-y-4 lg:space-y-[1.8rem] 2xl:space-y-9  lg:w-full">
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      1 newsletter per month; simple template and minimal
                      segmentation.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Not included.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Not included.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Not included.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Not included.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Not included.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Monthly reports with actionable insights to fuel
                      aggressive growth.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Monthly strategy call + email support.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Implementation of eco-friendly marketing practices+ Basic
                      sustainability impact reports
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      90-day hyper-growth guarantee.
                    </p>
                  </div>

                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Monthly performance insights with action plans
                    </p>
                  </div>
                </div>
                <button className="px-2">
                  <img src="../buttons/butt1.png" alt="check" />
                </button>
              </div>
            </div>
            {/* Plan 2 ************************************ */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-0.5 lg:bg-gradient-to-b from-[#FFCC00] to-[#DA281C]"></div>

              <div>
                <div className="px-8 pt-10 lg:py-1 text-center">
                  <h1 className="text-xl font-bold text-gray-800 pb-2">
                    Boaster Buzz Plan
                  </h1>
                  <h1 className="text-xl md:text-xl font-semibold text-[#DA281C]  mb-5">
                    $5,599/ <span className="text-black text-sm">mo</span>
                  </h1>
                  <button className="lg:hidden w-full border-2 border-[#DA281C] rounded-lg  px-6 py-2 text-center font-semibold text-[#DA281C] text-base transition duration-200 hover:bg-[#757E7E] hover:border-[#757E7E] hover:text-white ">
                    Buy Now
                  </button>
                </div>

                <div className=" px-2 py-6 rounded-b-xl space-y-4 lg:space-y-5  lg:w-full">
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Advanced AI Integrations for Real-Time Data Processing &
                      Market Predictions.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Comprehensive multi-channel aggressive marketing
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Comprehensive Content That Incorporate Bold Ideas to
                      Captivate Audiences.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      1 landing page creation/optimization for campaigns​ with
                      A/B testing.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Not included.
                    </p>
                  </div>
                  <div className="lg:py-2 2xl:py-3 3xl:py-2"></div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Broader site audit and on-page improvements for up to 15
                      pages.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      20+ targeted keywords (including competitor/long-tail)
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      5 New Backlinks per Month from Relevant Mid-Tier Sources.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Deploy 3 Dynamic Video Blitz Campaigns per Month Designed
                      to Captivate.
                    </p>
                  </div>

                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      14 Posts per Month on 2 Platforms with Strategic
                      Scheduling & Brand Consistency
                    </p>
                  </div>
                  <div className="lg:py-4"></div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Full website overhaul for enhanced user experience
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      App Development, SMS Marketing, and Location-Based
                      Services.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Streamlining Online Shopping Experiences to Improve UI and
                      Functionality.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      4 Posts per Month with Enhanced SEO Keyword Integration &
                      Topic Variety.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Enhanced native ad strategies with optimized content
                      matching.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Influencer Outreach: Partnering with One Micro-Influencer
                      per Quarter.
                    </p>
                  </div>
                  <div className="lg:py-5 2xl:py-6 3xl:py-5 "></div>
                </div>
                <div className=" px-2 pb-6 rounded-b-xl space-y-5 2xl:space-y-6 lg:w-full">
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      3 Email Campaigns per Month with Segmentation by Basic
                      User Groups.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      2 Single Drip Series Triggered by User Actions.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Google Ads Management (2 Campaigns) with Moderate Budget &
                      Optimization.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Occasional User-Generated Content Push (e.g., Short
                      Contest) Once per Year.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Not included.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Exclusive AI-Driven Automation & Dynamic Creative Engine
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      In-Depth Bi-Monthly Analytics to Fine-Tune and Escalate
                      Marketing Efforts.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Dedicated Account Manager with Bi-Weekly Strategy Calls &
                      Email Support.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Commitment to Reducing Campaign Carbon Footprints with
                      Sustainability Audits.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      90-day ROI improvement guarantee
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Bi-weekly detailed reports with actionable insights and
                      adjustment logs.
                    </p>
                  </div>
                  <button className="mb-4">
                    <img
                      src="../buttons/butt2.png"
                      alt="check"
                      className="shadow-2xl shadow-[#850042] rounded-lg "
                    />
                  </button>
                  <p className="py-4"></p>
                </div>
              </div>
            </div>

            {/* Plan 3 ************************************ */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-0.5 lg:bg-gradient-to-b from-[#FFCC00] to-[#DA281C]"></div>

              <div>
                <div className="px-8 py-1 text-center">
                  <h1 className="text-xl font-bold text-gray-800 pb-2">
                    Inferno Buzz Plan
                  </h1>
                  <h1 className="text-xl md:text-xl font-semibold text-[#DA281C]  mb-5">
                    $12,999/ <span className="text-black text-sm">mo</span>
                  </h1>
                  <button className="lg:hidden w-full border-2 border-[#DA281C] rounded-lg  px-6 py-2 text-center font-semibold text-[#DA281C] text-base transition duration-200 hover:bg-[#757E7E] hover:border-[#757E7E] hover:text-white ">
                    Buy Now
                  </button>
                </div>

                <div className=" px-2 pt-5 pb-1 rounded-b-xl space-y-5 lg:w-full">
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Ultra-Advanced AI Solutions for Predictive Market
                      Movements and Deep Learning.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Global Domination Marketing Campaigns with Real-Time
                      Adjustments.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Revolutionary content sets industry trends and provokes
                      discussion.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Up to 3 New or Revised Landing Pages per/Month +
                      Multi-Variant Testing.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Advanced Funnel Optimization and Robust CRO Strategies.
                    </p>
                  </div>
                  <div className="lg:py-2"></div>
                </div>
                <div className=" px-2 pb-6 rounded-b-xl space-y-5 lg:w-full">
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Full-Scale Technical SEO for 30+ Pages, Along with
                      Continuous Site Audits.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      40+ Dynamic Keywords with AI-Driven Ongoing Competitor
                      Analysis.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Aggressive Backlink Strategy and PR-Driven Partnerships to
                      Sustain Rankings.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      4 Cinematic Videos per Month with Multi-Format
                      Distribution for Maximum Reach.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      22+ Posts per Month Across 3+ Platforms with Advanced
                      Engagement.
                    </p>
                  </div>
                  <div className="lg:py-4"></div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Custom-built, high-performance web solutions
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Full-Scale, Mobile-First Strategy and Holistic Campaign
                      Orchestration.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Full E-Commerce Funnel Optimization and Advanced Product
                      Feed Management.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      8+ Data-Driven, SEO-Optimized, Deep Industry Insight Blog
                      Posts per Month.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      High-impact native campaigns integrated with overall
                      marketing strategy.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      High-Impact Native Campaigns Woven into Your Overall
                      Marketing Strategy.
                    </p>
                  </div>
                  <div className="lg:py-4 2xl:py-9 3xl:py-4"></div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      4+ Monthly Email Newsletters with Personalization and
                      Dynamic Content.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      AI-Driven Multiple Automations (Welcome, Nurture,
                      Post-Purchase, and Upsell).
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Multi-Channel SEM with Real-Time Bid Optimization Across
                      Google, Bing, & More.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Interactive, Immersive Brand Experiences Through AR/VR
                      Technologies.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Quarterly UGC Campaigns with a Robust Plan to Crowdsource
                      User Content.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Exclusive AI-Driven Automation & Dynamic Creative Engine
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Real-Time Analytics with a Custom Dashboard to Monitor &
                      Adapt Strategies.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Weekly Strategy Meetings with a Senior Strategist for
                      Progress Assessment.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Leadership in Eco-Friendly Marketing with Detailed
                      Sustainability Reports.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Market Leadership Guaranteed After Quarter 3.
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm lg:text-[13px] 2xl:text-base 3xl:text-lg ">
                      Weekly Comprehensive Reports, Including Performance
                      Analytics and Forecasts.
                    </p>
                  </div>
                  <button className="my-4">
                    <img
                      src="../buttons/butt3.png"
                      alt="check"
                      className="shadow-2xl shadow-[#850042] rounded-lg "
                    />
                  </button>
                  <p className="py-4"></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By */}
        <TrustedBy />

        {/*  Pricing FAQs */}
        <div
          className="bg-[#F3F4F5] bg-no-repeat  bg-cover "
          style={{
            "background-image": "url('./bg/NoiseBG.svg')",
          }}
        >
          <div className="container lg:px-16 mx-auto py-20">
            <h2 className="text-gray-900 px-2 lg:mt-3 mb-5 lg:mb-10 text-xl md:text-3xl font-bold text-left rounded-2xl focus:outline-none block w-full ">
              Pricing FAQs
            </h2>
            <div className="md:flex gap-x-12 ">
              <ul className="flex flex-col w-full">
                <li className="my- px-3 border-t">
                  <div className="py-3">
                    <details className="group">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span className="text-[13px] md:text-base font-semibold">
                          Do you offer a free trial or demo?
                        </span>
                        <span className="transition group-open:rotate-180">
                          <svg
                            fill="none"
                            height="24"
                            shape-rendering="geometricPrecision"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        We offer a one-time, 7-day free trial exclusively for
                        monthly subscriptions. Experience EnterpriseBuzz AI
                        aggressive AI-driven strategies risk-free before
                        committing.
                      </p>
                    </details>
                  </div>
                </li>
                <li className="my- px-3 border-t">
                  <div className="py-3">
                    <details className="group">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span className="text-[13px] md:text-base font-semibold">
                          What payment methods do you accept?
                        </span>
                        <span className="transition group-open:rotate-180">
                          <svg
                            fill="none"
                            height="24"
                            shape-rendering="geometricPrecision"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        EnterpriseBuzz AI accepts major credit cards—including
                        Mastercards and Visa—as well as debit cards. Our payment
                        process is powered by Stripe, QuickBooks, and PayPal,
                        utilizing high-tech encrypted infrastructure to ensure a
                        seamless and secure transaction experience.
                      </p>
                    </details>
                  </div>
                </li>
                <li className="my- px-3 border-t">
                  <div className="py-3">
                    <details className="group">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span className="text-[13px] md:text-base font-semibold">
                          How do you handle content creation and management?
                        </span>
                        <span className="transition group-open:rotate-180">
                          <svg
                            fill="none"
                            height="24"
                            shape-rendering="geometricPrecision"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        At EnterpriseBuzz AI, we handle content creation and
                        management through a comprehensive, data-driven process
                        that delivers aggressive, measurable results. We begin
                        by researching your target audience and analyzing market
                        trends to develop a content strategy that aligns with
                        your brand voice and goals. Our team of experts,
                        supported by cutting-edge AI technologies, creates
                        high-quality content that not only captivates but also
                        drives engagement. <br /> We continuously update and
                        optimize this content using advanced analytics to track
                        performance in real time, ensuring your digital presence
                        remains at the forefront. This relentless, innovative
                        approach to content management fuels your enterprise's
                        long-term growth and delivers unrivaled ROI, positioning
                        you as a market leader in the digital space..
                      </p>
                    </details>
                  </div>
                </li>
                <li className="my- px-3 border-t">
                  <div className="py-3">
                    <details className="group">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span className="text-[13px] md:text-base font-semibold">
                          What kind of ROI can I expect from your services?
                        </span>
                        <span className="transition group-open:rotate-180">
                          <svg
                            fill="none"
                            height="24"
                            shape-rendering="geometricPrecision"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        our aggressive, AI-powered strategies consistently
                        deliver an average ROI of 300%. This means every dollar
                        invested is engineered to generate three dollars in
                        revenue, rapidly accelerating your business growth.
                        EnterpriseBuzz AI bold, data-driven approach is designed
                        to disrupt the status quo and set new benchmarks in
                        digital marketing performance.
                      </p>
                    </details>
                  </div>
                </li>
                <li className="my- px-3 border-t">
                  <div className="py-3">
                    <details className="group">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span className="text-[13px] md:text-base font-semibold">
                          What is your refund policy?
                        </span>
                        <span className="transition group-open:rotate-180">
                          <svg
                            fill="none"
                            height="24"
                            shape-rendering="geometricPrecision"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        What is your refund policy? Our refund policy allows you
                        to request a full refund within the first 30 days if you
                        are not satisfied with our services. We are committed to
                        delivering high-quality results and ensuring your
                        satisfaction. If you have any concerns, our team is
                        available to address them and work towards a solution
                        that meets your needs.
                      </p>
                    </details>
                  </div>
                </li>
              </ul>{" "}
              <ul className="flex flex-col w-full">
                <li className="my- px-3 border-t">
                  <div className="py-3">
                    <details className="group">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span className="text-[13px] md:text-base font-semibold">
                          What is the pricing currency?
                        </span>
                        <span className="transition group-open:rotate-180">
                          <svg
                            fill="none"
                            height="24"
                            shape-rendering="geometricPrecision"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        Our pricing is set in United States Dollars (USD),
                        ensuring global clarity and straightforward transaction
                        processing..
                      </p>
                    </details>
                  </div>
                </li>
                <li className="my- px-3 border-t">
                  <div className="py-3">
                    <details className="group">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span className="text-[13px] md:text-base font-semibold">
                          Can I upgrade or downgrade my plan at any time?
                        </span>
                        <span className="transition group-open:rotate-180">
                          <svg
                            fill="none"
                            height="24"
                            shape-rendering="geometricPrecision"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        Yes, we offer the flexibility to upgrade or downgrade
                        your plan at any time. Our agile subscription model is
                        designed to evolve with your enterprise’s needs,
                        allowing you to seamlessly scale your engagement with
                        our aggressive, AI-powered strategies. This dynamic
                        approach ensures you always have the precise tools to
                        drive exceptional ROI and secure a dominant market
                        position..
                      </p>
                    </details>
                  </div>
                </li>

                <li className="my- px-3 border-t">
                  <div className="py-3">
                    <details className="group">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span className="text-[13px] md:text-base font-semibold">
                          Is there a minimum contract length?
                        </span>
                        <span className="transition group-open:rotate-180">
                          <svg
                            fill="none"
                            height="24"
                            shape-rendering="geometricPrecision"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        At EnterpriseBuzz AI, there is no minimum contract
                        length—you can subscribe for any duration that suits
                        your business needs. However, for optimal performance
                        and to fully leverage our aggressive, AI-powered
                        strategies, we typically recommend a quarterly
                        commitment to deliver maximum impact and robust ROI..
                      </p>
                    </details>
                  </div>
                </li>
                <li className="my- px-3 border-t">
                  <div className="py-3">
                    <details className="group">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span className="text-[13px] md:text-base font-semibold">
                          Can I pay annually instead of monthly for a discount?
                        </span>
                        <span className="transition group-open:rotate-180">
                          <svg
                            fill="none"
                            height="24"
                            shape-rendering="geometricPrecision"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        Yes, we offer an annual payment option that includes a
                        25% discount. This approach maximizes your savings
                        compared to our monthly subscription model and
                        reinforces our commitment to aggressive, data-driven
                        digital amplification—fueling your enterprise's
                        long-term growth and delivering unrivaled ROI.
                      </p>
                    </details>
                  </div>
                </li>
                <li className="my- px-3 border-t">
                  <div className="py-3">
                    <details className="group">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span className="text-[13px] md:text-base font-semibold">
                          Do you offer any pay-as-you-go options?
                        </span>
                        <span className="transition group-open:rotate-180">
                          <svg
                            fill="none"
                            height="24"
                            shape-rendering="geometricPrecision"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        We offer a one-time, 7-day free trial exclusively for
                        monthly subscriptions. Experience EnterpriseBuzz AI
                        aggressive AI-driven strategies risk-free before
                        committing.
                      </p>
                    </details>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Unlock Section */}
        <AIGrowthSection />
      </div>
    </div>
  );
}

export default Pricing;
