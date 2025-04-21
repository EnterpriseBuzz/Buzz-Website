import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import TrustedBy from "../components/TrustedBy";
import PaymentOptions from "../components/PaymentOptions";
import AIGrowthSection from "../components/AIGrowthSection";

function Pricing() {
  return (
    <div>
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
        <div className="w-full py-20 bg-gradient-to-r from-[#FF8C00] via-[#8B008B] to-[#191853] flex justify-center items-center">
          <div className="text-center text-white">
            <h1 className="text-sm lg:text-lg font- text-white w-full md:w-[48rem] ">
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
                <p className="text-[#36474F] text-center text-sm ">
                  AI-Driven Campaigns
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
                  SEO and SEM Services
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
                  Automated Email Marketing
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
                  Social Media Mgt. and Marketing
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
                  Aggressive Marketing Techniques
                </p>
              </div>
              <div className="flex items-center gap-x-2 md:pb-[16.5rem]">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
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
                <p className="text-[#36474F] text-center text-sm ">
                  AI-Driven Campaigns
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
                  SEO and SEM Services
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
                  Automated Email Marketing
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
                  Social Media Mgt. and Marketing
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
                  Basic Website Metrics
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
                  Predictive Retargeting
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
                  UGC Campaign
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
                  Landing Page & CRO
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
                  Web Optimization Services
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
                  High-Impact Content Vault (e.g. eBook)
                </p>
              </div>
              <div className="flex items-center gap-x-2 md:pb-20">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
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
                <p className="text-[#36474F] text-center text-sm ">
                  AI-Driven Campaigns
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
                  SEO and SEM Services
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
                  Automated Email Marketing
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
                  Social Media Mgt. and Marketing
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
                  Basic Website Metrics
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
                  Predictive Retargeting
                </p>
              </div>
              <div className="flex items-center gap-x-2 ">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
                  UGC Campaign
                </p>
              </div>
              <div className="flex items-center gap-x-2 ">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
                  Landing Page & CRO
                </p>
              </div>
              <div className="flex items-center gap-x-2 ">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
                  High-Impact Content Vault (e.g. eBook)
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
                  Brand Reputation Monitoring
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
                  Influencer Marketing
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
                  Immersive AR/VR Brand Experience Lab
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-left text-sm ">
                  Global Crisis Aversion & Reputation Recovery Protocol
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA ************************* */}
        <div className=" bg-[#fff] py-10 px-2 lg:px-24  flex flex-col  items-center  justify-center gap-x-1 ">
          <div className="container  mx-auto my-16">
            <div
              className="w-full bg-center bg-cover h-[35rem] md:h-[40rem]  lg:h-[22rem] rounded-2xl p-5 lg:p-20"
              style={{
                "background-image": "url('./bg/pCTABanner.svg')",
              }}
            >
              <div className="lg:flex items-center justify-between w-full h-full py-5 gap-x-10">
                <div className="lg:w-[37rem]">
                  <h1 className=" font-semibold text-white py-3 min-[350px]:text-[58px] max-[350px]:text-[58px]  leading-[3.5rem]">
                    Need a custom plan? Get in touch.
                  </h1>
                  <p className=" font-normal  text-[#fff]">
                    At EnterpriseBuzz AI, we understand that every enterprise
                    has unique goals. Our expert team is ready to craft a
                    tailored, aggressive strategy to fuel your growth—contact us
                    today!
                  </p>
                </div>
                <div className=" pt-5 md:pt-0">
                  <div className=" flex gap-x-4 mt-5 items-center">
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
          <h2 className="text-gray-900 mt-3 mb-5 lg:mb-10 text-base md:text-3xl font-bold text-left rounded-2xl focus:outline-none block w-full ">
            Compared Features
          </h2>
          <div className="w-screen lg:w-full mx-auto overflow-x-auto scrollbar-hide inset-x-0 flex lg:grid grid-cols-4  mt-12 px-2 lg:px-0">
            {/* Bar ************************************ */}
            <div className="">
              <p className="font-bold text-black text-xl mt-16 py-2 ">
                Top features
              </p>
              <div className="py-3  space-y-12 w-[15.5rem] lg:w-full">
                <p className="text-sm ">AI-Driven Campaigns</p>
                <p className="text-sm ">Aggressive Marketing Techniques</p>
                <p className="text-sm ">Creative and Bold Content</p>
                <p className="text-sm ">Landing Page & CRO</p>
                <div className="py-[0.0px]"></div>
                <p className="text-sm font-bold">SEO and SEM Services</p>
                <p className="text-sm ">1. SEO Setup & On-Page Optimization</p>
                <p className="text-sm ">2. Target Keyword Research</p>
                <p className="text-sm ">3. Link Building</p>
                <p className="text-sm ">Video Marketing</p>
                <p className="text-sm ">Social Media Mgt. and Marketing</p>
                <div className="py-0.5"></div>
                <p className="text-sm font-bold">
                  Channel Optimizations Services
                </p>
                <p className="text-sm ">1. Web Optimization</p>
                <p className="text-sm ">2. Mobile Marketing Enhancements</p>
                <p className="text-sm ">3. E-commerce Optimization</p>
                <p className="text-sm ">Blog Content Production</p>
                <p className="text-sm ">
                  Digital Display and Native Advertising
                </p>
                <p className="text-sm ">Influencer Outreach</p>
                <div className="py-1"></div>
                <p className="text-sm font-bold">Email Marketing Services</p>
                <p className="text-sm ">1. Email Marketing Campaigns</p>
                <p className="text-sm ">2. Email Automation (Drip Series)</p>
                <p className="text-sm ">Paid Search (SEM/PPC)</p>
                <p className="text-sm ">UGC Campaigns</p>
                <p className="text-sm ">Immersive AR/VR Brand Experience Lab</p>
                <p className="text-sm ">
                  Exclusive AI-Driven Automation & Dynamic Creative Engine
                </p>
                <p className="text-sm ">Performance Analytics</p>
                <p className="text-sm ">
                  Dedicated Account Management & Consulting
                </p>
                <p className="text-sm ">Sustainability Reporting</p>
                <p className="text-sm ">Performance Guarantees</p>
                <p className="text-sm ">Transparency and Reporting</p>
              </div>
            </div>

            {/* Plan 1 ************************************ */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b from-[#FFCC00] to-[#DA281C]"></div>

              <div>
                <div className="px-8 py-1 text-center">
                  <h1 className="text-xs sm:text-base md:text-xl font-bold text-gray-800 pb-2">
                    Spark Buzz Plan
                  </h1>
                  <h1 className="text-xs sm:text-xl md:text-xl font-semibold text-[#DA281C]  mb-5">
                    $1,399/ <span className="text-black text-sm">mo</span>
                  </h1>
                </div>

                <div className=" px-2 py-6 rounded-b-xl space-y-11  w-[19.5rem] lg:w-full">
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Basic AI-driven analytics and demographic targeting.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Entry-level aggressive digital campaigns
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Dynamic content strategies that push creative boundaries.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">Not included.</p>
                  </div>
                  <div className="py-0.5"></div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Basic technical site check + on-page fixes for up to 5
                      pages.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      10 core keywords for visibility.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Minimal link building efforts (3 new backlinks/month from
                      basic directories).
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      1 videos/month (e.g. product demo, brand story) with
                      moderate production values.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      8 posts/month on 1 platform (Facebook or Instagram).
                    </p>
                  </div>
                  <div className="py-0.5"></div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Website analysis and basic optimization
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">Not included.</p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">Not included.</p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      2 posts/month (approx. 500 words each); SEO-optimized but
                      basic.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">Not included.</p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">Not included.</p>
                  </div>
                  <div className="py-9"></div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      1 newsletter per month; simple template and minimal
                      segmentation.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">Not included.</p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">Not included.</p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">Not included.</p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">Not included.</p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">Not included.</p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Monthly reports with actionable insights to fuel
                      aggressive growth.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Monthly strategy call + email support.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Implementation of eco-friendly marketing practices+ Basic
                      sustainability impact reports
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      90-day hyper-growth guarantee.
                    </p>
                  </div>

                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Monthly performance insights with action plans
                    </p>
                  </div>
                  <button className="">
                    <img src="../buttons/butt1.png" alt="check" />
                  </button>
                </div>
              </div>
            </div>
            {/* Plan 2 ************************************ */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b from-[#FFCC00] to-[#DA281C]"></div>

              <div>
                <div className="px-8 py-1 text-center">
                  <h1 className="text-xs sm:text-base md:text-xl font-bold text-gray-800 pb-2">
                    Boaster Buzz Plan
                  </h1>
                  <h1 className="text-xs sm:text-xl md:text-xl font-semibold text-[#DA281C]  mb-5">
                    $3,599/ <span className="text-black text-sm">mo</span>
                  </h1>
                </div>

                <div className=" px-2 py-6 rounded-b-xl space-y-6  w-[19rem] lg:w-full">
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Advanced AI integrations for real-time data processing,
                      market predictions, and strategy adjustments.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Comprehensive multi-channel aggressive marketing
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Comprehensive content solutions that incorporate bold
                      ideas and controversial topics to captivate audiences.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      1 landing page creation/optimization for campaigns​ with
                      A/B testing.
                    </p>
                  </div>
                  <div className="py-2"></div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Broader site audit and on-page improvements for up to 15
                      pages.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      20+ targeted keywords (including competitor/long-tail)
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Ongoing outreach (~5 new backlinks/month) from relevant
                      mid-tier sources, guest blogging.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      We deploy 3 dynamic video blitz campaigns per month (e.g.,
                      product demos or brand stories) designed to captivate.
                    </p>
                  </div>

                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      14 posts/month on 2 platforms (e.g. Facebook + LinkedIn)
                      with strategic scheduling and brand consistency.
                    </p>
                  </div>
                  <div className="py-4"></div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Full website overhaul for enhanced user experience
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Mobile-first strategies including app development, SMS
                      marketing, and location-based services.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Streamlining online shopping experiences to improve user
                      interface, functionality, and checkout processes.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      We produce 4 posts per month (700–800 words each)
                      featuring enhanced SEO keyword integration and topic
                      variety.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Enhanced native ad strategies with optimized content
                      matching.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Limited influencer outreach by identifying and partnering
                      with one micro-influencer per quarter.
                    </p>
                  </div>
                  <div className="py-8"></div>

                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      3 email campaigns/month (newsletter + promo/announcement),
                      segmentation by basic user groups.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      2. Single drip series (e.g., welcome or product
                      onboarding) triggered by user actions.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Google Ads management (2 campaigns maximum) with a
                      moderate budget and monthly optimization.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Occasional user-generated content push (e.g., short
                      contest or hashtag campaign) once every year.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">Not included.</p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Exclusive AI-Driven Automation & Dynamic Creative Engine
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      More frequent, in-depth bi-monthly analytics to fine-tune
                      and escalate marketing efforts.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Dedicated account manager with bi-weekly strategy calls
                      and priority email support.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Commitment to reducing digital campaign carbon footprints,
                      with regular sustainability audits.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      90-day ROI improvement guarantee
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
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
              <div className="absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b from-[#FFCC00] to-[#DA281C]"></div>

              <div>
                <div className="px-8 py-1 text-center">
                  <h1 className="text-xs sm:text-base md:text-xl font-bold text-gray-800 pb-2">
                    Inferno Buzz Plan
                  </h1>
                  <h1 className="text-xs sm:text-xl md:text-xl font-semibold text-[#DA281C]  mb-5">
                    $7,999/ <span className="text-black text-sm">mo</span>
                  </h1>
                </div>

                <div className=" px-2 py-6 rounded-b-xl space-y-2 w-[19rem] lg:w-full">
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Ultra-advanced AI solutions for predictive market
                      movements, deep learning enhancements, and competitive
                      dominance.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Global, aggressive-domination marketing campaigns with
                      real-time, aggressive adjustments.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Revolutionary content sets industry trends and provokes
                      discussion.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Up to 3 new or revised landing pages/month + multi-variant
                      testing, advanced funnel optimization, robust CRO
                      strategies.
                    </p>
                  </div>
                  <div className="py-3"></div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Full-scale technical SEO for 30+ pages, along with
                      continuous site audits, improvements, and architecture
                      overhauls to achieve maximum search dominance.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      40+ dynamic keywords with AI-driven expansion and ongoing
                      competitor analysis.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Aggressive backlink strategy (averaging 10+ backlinks per
                      month), PR-driven partnerships, and high-authority
                      placements to secure sustained ranking power.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      4 advanced cinematic productions per month—promotional,
                      educational, and behind-the-scenes exclusives—with
                      multi-format distribution for maximum reach.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      22+ posts/month across 3+ platforms; platform-specific
                      strategies (e.g. TikTok campaigns, LinkedIn thought
                      leadership) and advanced scheduling/engagement.
                    </p>
                  </div>
                  <div className="py-3"></div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Custom-built, high-performance web solutions
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Dominate the mobile landscape with a full-scale,
                      mobile-first strategy that includes custom mobile app
                      development, intuitive UX design, and holistic campaign
                      orchestration.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Full e-commerce funnel optimization, advanced product feed
                      management, frictionless checkout improvements,
                      multi-currency & multi-region support if needed.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      8+ blog posts per month (1000+ words each), data-driven,
                      advanced SEO focusing on thought leadership and deep
                      industry insights.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      High-impact native campaigns integrated with overall
                      marketing strategy.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Ongoing collaborations with mid- to top-tier influencers,
                      manage brand ambassador programs, and implement
                      multi-campaign influencer strategies on a quarterly
                      basis—all with comprehensive management.
                    </p>
                  </div>
                  <div className="py-3"></div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      4+ monthly emails (newsletters, promos, re-engagement)
                      with advanced personalization, multi-step automation
                      sequences, and dynamic content.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Multiple complex automations (welcome, nurture,
                      post-purchase, and upsell) with AI-driven timing and
                      content triggers.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Comprehensive multi-channel SEM including Google, Bing,
                      etc., large-scale budgets with real-time bid optimization
                      and advanced A/B testing and advanced competitor
                      targeting.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Interactive, immersive brand experiences throughAR/VR
                      technologies. From virtual showrooms to product demos,
                      this lab creates unforgettable, buzz-worthyexperiences
                      that capture global attention and set your brand apart.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      quarterly UGC campaigns with a robust plan to crowdsource
                      user content and drive viral community engagement, brand
                      advocacy, and social proof.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Exclusive AI-Driven Automation & Dynamic Creative Engine
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Real-time, comprehensive analytics with a custom dashboard
                      to continuously monitor and adapt market strategies.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      weekly strategy meetings with a senior strategist,
                      near-real-time support, and a dedicated Slack channel (or
                      equivalent) for immediate collaboration.
                    </p>
                  </div>{" "}
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Leadership in eco-friendly marketing, with tangible
                      outcomes in sustainability and detailed environmental
                      impact reports.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Market leadership after Q2 guarantee.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="../check.svg" alt="check" />
                    <p className="text-[#36474F]  text-sm ">
                      Weekly comprehensive reports, including performance
                      analytics, adjustment rationales, and strategic forecasts.
                    </p>
                  </div>
                  <button className="mb-4">
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
            <h2 className="text-gray-900 mt-3 mb-5 lg:mb-10 text-base md:text-3xl font-bold text-left rounded-2xl focus:outline-none block w-full ">
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
        {/* Payment Options */}
        <PaymentOptions />
      </div>
    </div>
  );
}

export default Pricing;
