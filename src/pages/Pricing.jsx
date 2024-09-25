import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function Pricing() {
  return (
    <div>
      <SEO
        title="Pricing"
        description="Enterprise Buzzer is a pioneering media and technology company, dedicated to propelling businesses forward through innovative advertising, branding, CRM, and marketing tools."
        name="EnterpriceBuzzer"
        type="description"
      />
      <div class=" text-gray-600">
        <div
          class="w-full bg-center bg-cover h-[12rem] lg:h-[20rem] "
          style={{
            "background-image": "url('./hbg.png')",
          }}
        >
          <div class="flex items-center justify-center w-full h-full  ">
            <div class="text-center">
              <h1 class="text-2xl font-bold text-white py-3 lg:text-7xl">
                Pricing
              </h1>
              <h1 class="text-sm lg:text-base font- text-white w-full md:w-[38rem] ">
                Choose the plan that’s right for your business. Whether you’re
                just getting started or you’re well into the business, we’ve got
                you covered
              </h1>
            </div>
          </div>
        </div>
        <div className="mx-auto container max-w-6xl grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-12">
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
                className="w-full bg-[#FFCC00] rounded-lg text-sm px-5 py-3 text-center font-semibold text-black  transition duration-200 hover:bg-[#757E7E]"
              >
                Activate your free 7-day trial
              </a>
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
              <div className="flex items-center gap-x-2 md:pb-[11.5rem]">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
                  Aggressive Marketing Techniques
                </p>
              </div>
            </div>
          </div>
          {/* Plan 2 ************************************ */}
          <div>
            <div className="bg-[#F4F4F4] px-5 py-12 rounded-t-xl text-center">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 pb-2">
                Boaster Buzz Plan
              </h1>
              <h1 className="text-xl md:text-3xl font-semibold text-[#DA281C] ">
                $3,599
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
                className="w-full bg-[#FFCC00] rounded-lg text-sm px-5 py-3 text-center font-semibold text-black  transition duration-200 hover:bg-[#757E7E]"
              >
                Activate your free 7-day trial
              </a>
              <p className="text-[#36474F]  text-sm mt-7">
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
                  Web Optimization Services
                </p>
              </div>
              <div className="flex items-center gap-x-2 md:pb-28">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
                  Web Optimization Services
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
                className="w-full bg-[#FFCC00] rounded-lg text-sm px-5 py-3 text-center font-semibold text-black  transition duration-200 hover:bg-[#757E7E]"
              >
                Activate your free 7-day trial
              </a>
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
                  Web Optimization Services
                </p>
              </div>
              <div className="flex items-center gap-x-2 ">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
                  Lead Nurturing Automation
                </p>
              </div>
              <div className="flex items-center gap-x-2 ">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
                  Lead Nurturing Automation
                </p>
              </div>
              <div className="flex items-center gap-x-2 ">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
                  Lead Nurturing Automation
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="../check.svg" alt="check" />
                <p className="text-[#36474F] text-center text-sm ">
                  Lead Nurturing Automation
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-[#fff] py-10 px-2 lg:px-24  flex flex-col  items-center  justify-center gap-x-1 ">
          <div className="container lg:px-16 mx-auto my-20">
            <div
              className="w-full bg-center bg-cover h-[35rem] md:h-[38rem]  lg:h-[20rem] rounded-2xl p-5 lg:p-20"
              style={{
                "background-image": "url('./CTA Banner.png')",
              }}
            >
              <div className="lg:flex items-center justify-between w-full h-full py-5 ">
                <div className="lg:w-[28rem]">
                  <img src="../dashboardframe.png" className="w-full" alt="i" />
                </div>
                <div className="lg:w-[28rem] pt-5 md:pt-0">
                  <p className=" font-normal text-[#fff]">
                    With EnterpriseBuzz's AI-driven "Generate," "Execute," and
                    "Measure" (GEM) approach to marketing, when you choose a
                    Buzz plan, grab a glass of wine, coffee, tea, juice, palm
                    wine, or whatever helps you relax, sit back, and watch your
                    business grow as EnterpriseBuzz deploys well-tuned
                    aggressive, bold, and cutting-edge strategies.
                  </p>

                  <div className=" flex gap-x-4 mt-5 items-center">
                    <Link
                      to="app.enterprisebuzzai.com/login"
                      className="w-[14rem] bg-[#FFCC00] rounded-lg text-sm  py-3 text-center text-white  transition duration-200 hover:bg-[#757E7E]"
                    >
                      Start your free 7-day trial
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compared Features ************************* */}
        <div className="container lg:px-10 mx-auto py-20">
          <h2 className="text-gray-900 mt-3 mb-5 lg:mb-10 text-base md:text-3xl font-bold text-left rounded-2xl focus:outline-none block w-full ">
            Compared Features
          </h2>
          <div className="w-screen lg:w-full mx-auto overflow-x-auto scrollbar-hide inset-x-0 flex lg:grid grid-cols-4  mt-12 px-2 lg:px-0">
            {/* Bar ************************************ */}
            <div className="">
              <p className="font-bold text-black text-base mt-28 py-2 ">
                Target Audience
              </p>
              <div className="py-3  space-y-4 w-[15.5rem] lg:w-full">
                <p className="text-sm ">AI-Driven Campaigns</p>
                <p className="text-sm ">Aggressive Marketing Techniques</p>
                <p className="text-sm ">Bold and Controversial Content</p>
                <p className="text-sm ">Comprehensive Market Research</p>
                <p className="text-sm ">SEO and SEM Services</p>
                <p className="text-sm ">Brand Visibility Projects</p>
                <p className="text-sm ">Video and Viral Marketing</p>
                <p className="text-sm ">Email and Content Marketing</p>
                <p className="text-sm ">Web Optimization Services</p>
                <p className="text-sm ">Performance Analytics</p>
                <p className="text-sm ">Social Media Mgt. and Marketing</p>
                <p className="text-sm ">
                  Digital Display and Native Advertising
                </p>
                <p className="text-sm ">Sustainability Reporting</p>
                <p className="text-sm ">Guarantee</p>
                <p className="text-sm ">Transparency and Reporting</p>
                <p className="text-sm ">CTA</p>
              </div>
            </div>
            {/* Plan 1 ************************************ */}
            <div className="border-l-2 border-[#D9D9D9]">
              <div className="px-8 py-1 text-center">
                <h1 className="text-xs sm:text-base md:text-xl font-bold text-gray-800 pb-2">
                  Spark Buzz Plan
                </h1>
                <h1 className="text-xs sm:text-xl md:text-xl font-semibold text-[#DA281C]  mb-5">
                  $1,399/ <span className="text-black text-sm">mo</span>
                </h1>

                <button className="w-full border-2 border-[#DA281C] rounded-lg  px-6 py-2 text-center font-semibold text-[#DA281C] text-base transition duration-200 hover:bg-[#757E7E] hover:border-[#757E7E] hover:text-white ">
                  Buy Now
                </button>
              </div>

              <div className=" px-2 py-6 rounded-b-xl space-y-3  w-[19.5rem] lg:w-full">
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Basic AI analytics for target identification
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
                    Dynamic, bold content creation
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Market entry research
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Aggressive local and niche SEO, rapid keyword deployment
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Brand exposure tactics for startups
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Dynamic video blitz campaign, basic animated explainers
                    designed to captivate
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    High-octane campaign launches, conversion-focused designs,
                    aggressive lead capture
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Website analysis and basic optimization
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Monthly analytics reports
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Explosive start package: Viral campaign setups, "Scroll
                    Stopping" ad campaigns for maximum engagement.
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Management for up to 2 Social Media platforms.
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Stealth native ads, content-driven market entry
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Monthly detailed reports on campaign performance and
                    strategic insights.
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    30-day money-back guarantee if significant market disruption
                    is not achieved
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Start with Spark and Ignite Your Market Presence Today!
                  </p>
                </div>
              </div>
            </div>

            {/* Plan 2 ************************************ */}
            <div className="border-l-2 border-[#D9D9D9]">
              <div className="px-8 py-1 text-center">
                <h1 className="text-xs sm:text-base md:text-xl font-bold text-gray-800 pb-2">
                  Boaster Buzz Plan
                </h1>
                <h1 className="text-xs sm:text-xl md:text-xl font-semibold text-[#DA281C]  mb-5">
                  $3,599/ <span className="text-black text-sm">mo</span>
                </h1>

                <button className="w-full bg-[#DA281C] rounded-lg  px-6 py-2 text-center font-semibold text-white text-base transition duration-200 hover:bg-[#757E7E]  hover:text-white ">
                  Buy Now
                </button>
              </div>

              <div className=" px-2 py-6 rounded-b-xl space-y-3  w-[19rem] lg:w-full">
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Advanced AI-driven market predictions
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
                    Bold and controversial content strategies across platforms
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    In-depth market and competitor analysis
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    High-intensity SEO strategies including deep competitor
                    undercutting, extensive backlinking campaigns
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Brand consolidation strategies for mid-market companies
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Advanced video productions and viral marketing
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Full-funnel email assault: hyper-targeted content,
                    automation sequences, behavioral segmentation
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Full website overhaul for enhanced user experience
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Bi-weekly detailed analytics and adjustments
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Comprehensive social dominance strategy
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Aggressive native storytelling, seamless integration with
                    top-tier publications
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
                    60-day money-back guarantee if growth targets are not
                    aggressively met
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Bi-weekly detailed reports with actionable insights and
                    adjustment logs.
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Boost Your Growth with Boaster—Embrace Bold and
                    Controversial Strategies Now!
                  </p>
                </div>
              </div>
            </div>
            {/* Plan 3 ************************************ */}
            <div className="border-l-2 border-[#D9D9D9]">
              <div className="px-8 py-1 text-center">
                <h1 className="text-xs sm:text-base md:text-xl font-bold text-gray-800 pb-2">
                  Inferno Buzz Plan
                </h1>
                <h1 className="text-xs sm:text-xl md:text-xl font-semibold text-[#DA281C]  mb-5">
                  $7,999/ <span className="text-black text-sm">mo</span>
                </h1>

                <button className="w-full bg-[#DA281C] rounded-lg  px-6 py-2 text-center font-semibold text-white text-base transition duration-200 hover:bg-[#757E7E]  hover:text-white ">
                  Buy Now
                </button>
              </div>

              <div className=" px-2 py-6 rounded-b-xl space-y-3 w-[19rem] lg:w-full">
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Advanced AI-driven market predictions
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
                    Revolutionary content that sets industry trends
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Global market trends and forecasting
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    War-room SEO tactics, international targeting,
                    multi-language optimization, high-impact keyword assaults
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Brand dominance strategies for market leaders
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Cinematic video projects and massive viral campaigns
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Elite influence campaigns: AI-driven personalized messaging,
                    predictive analytics, dynamic content adaptation
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Custom-built, high-performance web solutions
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Real-time analytics and dashboard access
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Custom-built campaigns, Comprehensive management with viral
                    marketing and engineered UGC content
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Supreme native campaigns: Sponsored content that dominates
                    discussions, integrates with global trends
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Leadership in eco-friendly marketing, with tangible outcomes
                    in sustainability and detailed environmental impact reports.
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    90-day money-back guarantee if market domination goals are
                    not met
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Seize Ultimate Market Leadership with Inferno – The Time is
                    Now!
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="../check.svg" alt="check" />
                  <p className="text-[#36474F]  text-sm ">
                    Unleash Inferno and Dominate the Global Market—Join Us in
                    Setting New Standards!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F3F4F5]  ">
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
                        <span className="text-[13px] font-semibold">
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
                        Yes, we offer a 7-day free trial for all three plans.
                      </p>
                    </details>
                  </div>
                </li>
                <li className="my- px-3 border-t">
                  <div className="py-3">
                    <details className="group">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span className="text-[13px] font-semibold">
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
                        We accept credit cards, debit cards, and PayPal.
                      </p>
                    </details>
                  </div>
                </li>
                <li className="my- px-3 border-t">
                  <div className="py-3">
                    <details className="group">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span className="text-[13px] font-semibold">
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
                        You can expect a substantial ROI from our services,
                        typically seeing a 30-50% increase in engagement, a
                        25-40% rise in leads, and a 20-35% boost in sales within
                        the first few months. Our aggressive, bold, and
                        controversial techniques are designed to push boundaries
                        and deliver impactful results that will drive your
                        business growth significantly.
                      </p>
                    </details>
                  </div>
                </li>
                <li className="my- px-3 border-t">
                  <div className="py-3">
                    <details className="group">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span className="text-[13px] font-semibold">
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
                <li className="my- px-3 border-t">
                  <div className="py-3">
                    <details className="group">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span className="text-[13px] font-semibold">
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
                        All our pricing plans are billed in US dollars.
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
                        <span className="text-[13px] font-semibold">
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
                        Yes you can.
                      </p>
                    </details>
                  </div>
                </li>
                <li className="my- px-3 border-t">
                  <div className="py-3">
                    <details className="group">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span className="text-[13px] font-semibold">
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
                        We handle content creation and management through a
                        comprehensive process that includes researching your
                        target audience, developing a content strategy, creating
                        high-quality content, and regularly updating and
                        optimizing it. Our team of experts ensures that all
                        content aligns with your brand voice and goals, and we
                        use advanced analytics to track performance and make
                        continuous improvements.
                      </p>
                    </details>
                  </div>
                </li>
                <li className="my- px-3 border-t">
                  <div className="py-3">
                    <details className="group">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span className="text-[13px] font-semibold">
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
                        There is no minimum contract length; you can subscribe
                        for any amount of time. However, we usually recommend a
                        quarter for effective results.
                      </p>
                    </details>
                  </div>
                </li>
                <li className="my- px-3 border-t">
                  <div className="py-3">
                    <details className="group">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span className="text-[13px] font-semibold">
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
                        Yes, you can pay annually instead of monthly, and you'll
                        receive a 20% discount for doing so.
                      </p>
                    </details>
                  </div>
                </li>
                <li className="my- px-3 border-t">
                  <div className="py-3">
                    <details className="group">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span className="text-[13px] font-semibold">
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
                        Yes, you can purchase single or multiple marketing
                        services on EnterpriseBuzz Marketplace and pay for them
                        individually without a bundle plan subscription.
                      </p>
                    </details>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
