import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function Faqs() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const [openTab, setOpenTab] = useState(1);
  return (
    <div>
      <SEO
        title="FAQs"
        description="EnterpriseBuzz AI is a pioneering media and technology company, dedicated to propelling businesses forward through innovative advertising, branding, CRM, and marketing tools."
        name="EnterpriseBuzz AI"
        type="description"
      />
      <div class=" text-gray-600">
        <div
          class="w-full bg-center bg-cover h-[15rem] lg:h-[25rem] "
          style={{
            "background-image": "url('./hbg.png')",
          }}
        >
          <div class="flex items-center justify-center w-full h-full  ">
            <div class="text-center ">
              <h1 class="text-2xl font-semibold text-white py-3 lg:text-7xl md:w-[38rem]">
                Frequently Asked Questions
              </h1>
              <h1 class="text-sm lg:text-base  text-center text-white w-full md:w-[28rem] mx-auto ">
                Have any question, we’re here to assist you
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Hero ++++++++++++++++++++++++++ */}
      <section className="py-3 lg:my-4 max-w-6xl mx-auto md:px-2  rounded-2xl">
        <div className="lg:flex items-center justify-between">
          {" "}
          <div class="flex  rounded-3xl lg:rounded-lgrtl:flex-row-reverse  w-screen sm:w-min overflow-x-auto scrollbar-hide inset-x-0 mt-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              className={` w-[9rem] px-5 rounded-3xl py-2.5 lg:py-3 text-xs font-medium ${
                openTab === 1
                  ? "shadow-md   bg-[#DA281C] text-white"
                  : "text-gray-600"
              } transition-colors duration-200 sm:text-sm  hover:bg-[#DA281C] hover:text-white`}
            >
              <span className=" text-center">General</span>
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              className={`w-[9rem] rounded-3xl px-5 lg:px-8 py-2.5 lg:py-3 text-xs font-medium ${
                openTab === 2
                  ? "shadow-md   bg-[#DA281C] text-white"
                  : "text-gray-600"
              } transition-colors duration-200 sm:text-sm  hover:bg-[#DA281C] hover:text-white`}
            >
              <span className=" text-center">Services</span>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
              className={`w-[9rem] rounded-3xl px-5 py-2.5 lg:py-3 text-xs font-medium ${
                openTab === 3
                  ? "shadow-md   bg-[#DA281C] text-white"
                  : "text-gray-600"
              } transition-colors duration-200 sm:text-sm  hover:bg-[#DA281C] hover:text-white`}
            >
              <span className=" text-center">Pricing</span>
            </button>
          </div>
          <div class="relative flex items-center mt-4 md:mt-0 px-2">
            <span class="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>

            <input
              type="text"
              placeholder="Search"
              class="block w-full py-2.5 pr-5 text-gray-700 bg-[#F5F5F5] border border-gray-200 rounded-lg md:w-80 placeholder-gray-800/70 text-sm pl-11 rtl:pr-11 rtl:pl-5 focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
        </div>

        <div className={openTab === 1 ? "block px-2" : "hidden"}>
          <div className="mx-auto container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                1. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                2. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                3. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                4. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                5. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                6. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                7. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                8. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                9. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                10. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                11. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                12. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
          </div>
        </div>
        <div className={openTab === 2 ? "block px-2" : "hidden"}>
          <div className="mx-auto container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                1. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                2. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                3. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                4. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                5. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                6. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                7. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                8. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                9. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                10. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                11. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                12. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
          </div>
        </div>

        <div className={openTab === 3 ? "block px-2" : "hidden"}>
          <div className="mx-auto container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                1. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                2. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                3. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                4. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                5. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                6. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                7. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                8. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                9. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                10. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                11. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <h1 className="text-xs sm:text-base font-semibold text-gray-800 pb-3">
                12. User friendly
              </h1>
              <p className="text-[#36474F] font-light text-xs">
                dand strategic campaigns to captivate users on Instagram.
                Whether it's through eye-catching posts, Stories, or IGTV
                videos, we'll help you showcase your brand in its best light and
                stand out in the crowded feed.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className=" bg-[#fff] py-10 px-2 lg:px-24  flex flex-col  items-center  justify-center gap-x-1 ">
        <div className="container lg:px-16 mx-auto ">
          <div
            className="w-full bg-center bg-cover h-[15rem] sm:h-[15rem] lg:h-[20rem] rounded-2xl p-5 lg:p-20"
            style={{
              "background-image": "url('./CTA Banner.png')",
            }}
          >
            <div className="sm:flex items-center justify-between w-full h-full  ">
              <h1 className="text-lg sm:text-2xl font-bold text-white md:py-3 sm:w-[24rem] lg:text-5xl">
                Still Have Questions?
              </h1>

              <div className="sm:w-[22rem]">
                <p className="mt-3 sm:mt-6 font-normal text-[#fff]">
                  Can’t find the answers you’re looking for, please send a
                  message to our team and we’ll get back to you in no time
                </p>

                <div className=" flex gap-x-4 mt-5 items-center">
                  <Link
                    to="/contact"
                    className="w-[10rem] bg-[#fff] rounded-lg text-sm  py-3 text-center text-[#DA281C] transition duration-200 hover:bg-[#757E7E] hover:text-white"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
