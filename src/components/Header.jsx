import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="z-[100] sticky top-0">
      <header className="bg-white  ">
        <motion.nav
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto hidden lg:flex max-w-7xl items-center justify-between   px-10   "
          aria-label="Global"
        >
          <Link to="/" className=" m-5">
            <img className="h-11 w-auto" src="../logo.png" alt="" />
          </Link>

          <div className="flex gap-10 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-sm text-[#DA281C] transition-colors duration-300  p-1 hover:text-[#DA281C] "
                  : "text-sm text-[#576B74] transition-colors duration-300  hover:text-[#DA281C] "
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-sm text-[#DA281C] transition-colors duration-300  p-1 hover:text-[#DA281C] "
                  : "text-sm text-[#576B74] transition-colors duration-300  hover:text-[#DA281C] "
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-sm text-[#DA281C] transition-colors duration-300  p-1 hover:text-[#DA281C] "
                  : "text-sm text-[#576B74] transition-colors duration-300  hover:text-[#DA281C] "
              }
            >
              Our services
            </NavLink>
            <div className="relative inline-block group">
              <button
                type="button"
                className="flex items-center gap-x-1 text-sm   text-[#576B74] py-2.5"
                aria-expanded="false"
              >
                Community
              </button>
            </div>
            <div className="relative inline-block group">
              <button
                type="button"
                className="flex items-center gap-x-1 text-sm   text-[#576B74] py-2.5"
                aria-expanded="false"
              >
                Support
                <svg
                  className="h-5 w-5 flex-none text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div className="absolute -right-8 z-[100] w-44 p-2 hidden group-hover:block origin-top-right bg-white rounded-md shadow-xl ">
                {/* <Link
                  to="/faqs"
                  className="block px-4 py-2 text-sm text-gray-800 capitalize transition-colors duration-300 transform  hover:bg-gray-100   rounded"
                >
                  FAQs
                </Link> */}

                <Link
                  to="#"
                  className="flex items-center justify-center p-2 text-sm text-white capitalize transition-colors duration-300 transform bg-[#DA281C]  hover:bg-gray-500   rounded"
                >
                  <svg
                    className="w-8 h-8  -mb-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <svg
                      width="20"
                      height="15"
                      viewBox="0 0 20 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.9286 5.35714C13.9286 2.39732 10.8114 0 6.96429 0C3.11719 0 0 2.39732 0 5.35714C0 6.50558 0.472098 7.56362 1.27232 8.4375C0.823661 9.44866 0.0837054 10.2522 0.0736607 10.2623C0 10.3393 -0.0200893 10.4531 0.0234375 10.5536C0.0669643 10.654 0.160714 10.7143 0.267857 10.7143C1.4933 10.7143 2.50781 10.3025 3.23772 9.87723C4.31585 10.4029 5.59152 10.7143 6.96429 10.7143C10.8114 10.7143 13.9286 8.31696 13.9286 5.35714ZM18.0134 12.7232C18.8136 11.8527 19.2857 10.7913 19.2857 9.64286C19.2857 7.4029 17.4944 5.48437 14.9565 4.68415C14.9866 4.90513 15 5.12946 15 5.35714C15 8.9029 11.394 11.7857 6.96429 11.7857C6.60268 11.7857 6.25112 11.7589 5.9029 11.7221C6.95759 13.6473 9.43527 15 12.3214 15C13.6942 15 14.9699 14.692 16.048 14.1629C16.7779 14.5882 17.7924 15 19.0179 15C19.125 15 19.2221 14.9364 19.2623 14.8393C19.3058 14.7422 19.2857 14.6283 19.2121 14.548C19.202 14.5379 18.4621 13.7377 18.0134 12.7232Z"
                        fill="white"
                      />
                    </svg>
                  </svg>

                  <span>Live Chat</span>
                </Link>
              </div>
            </div>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-sm text-[#DA281C] transition-colors duration-300  p-1 hover:text-[#DA281C] "
                  : "text-sm text-[#576B74] transition-colors duration-300  hover:text-[#DA281C] "
              }
            >
              Contact Us
            </NavLink>
          </div>
          <div className="flex gap-2 items-center">
            <a
              href="https://app.enterprisebuzzai.com/login"
              className="w-[4rem]  p-1.5 text-[#DA281C] text-sm font-normal transition duration-200 hover:text-[#757E7E] mx-auto "
            >
              Log in
            </a>

            <a
              href="https://app.enterprisebuzzai.com/register"
              className="w-[13rem] bg-[#FFCC00] rounded-lg text-sm  py-4 text-center text-[#000]  transition duration-200 hover:bg-[#757E7E] mx-auto hover:text-white"
            >
              Start your free 7-day trial
            </a>
          </div>
        </motion.nav>

        <div className="lg:hidden item-center  flex justify-between px-3 py-5 bg-[#fff] ">
          <Link to="/">
            <span className="sr-only">EnterpriceBuzz</span>
            <img className="h-10 w-auto" src="../logo.png" alt="" />
          </Link>

          <div className="flex lg:hidden">
            {isOpen ? (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                }}
                className="text-[#576B74]  hover:text-gray-600  focus:outline-none focus:text-gray-600 "
                aria-label="toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#576B74"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            ) : (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(true);
                }}
                className="text-[#576B74]  hover:text-gray-600  focus:outline-none focus:text-gray-600 "
                aria-label="toggle menu"
              >
                <svg
                  width="30"
                  height="26"
                  viewBox="0 0 30 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="20" height="6" rx="3" fill="#576B74" />
                  <rect y="10" width="30" height="6" rx="3" fill="#576B74" />
                  <rect y="20" width="15" height="6" rx="3" fill="#576B74" />
                </svg>
              </button>
            )}
          </div>
        </div>

        <div
          class={`${
            isOpen
              ? "translate-x-0 opacity-100 "
              : "opacity-0 -translate-x-full"
          } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-[#fff] space-y-3`}
        >
          <div className="flex flex-col px-2 -mx-4 space-y-2">
            <Link
              to="/#"
              className="px-2.5 py-2 text-[#576B74] font-bold transition-colors duration-300 transform rounded-lg  hover:bg-gray-100  md:mx-2"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-2.5 py-2 text-[#576B74] font-bold transition-colors duration-300 transform rounded-lg  hover:bg-gray-100  md:mx-2"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="px-2.5 py-2 text-[#576B74] font-bold transition-colors duration-300 transform rounded-lg  hover:bg-gray-100  md:mx-2"
            >
              Our Services
            </Link>
            <Link
              to="/faqs"
              className="px-2.5 py-2 text-[#576B74] font-bold transition-colors duration-300 transform rounded-lg  hover:bg-gray-100  md:mx-2"
            >
              Faqs
            </Link>{" "}
            <Link
              to="/contact"
              className="px-2.5 py-2 text-[#576B74] font-bold transition-colors duration-300 transform rounded-lg  hover:bg-gray-100  md:mx-2"
            >
              Contact Us
            </Link>
            <Link
              to="/pricing"
              className="px-2.5 py-2 text-[#576B74] font-bold transition-colors duration-300 transform rounded-lg  hover:bg-gray-100  md:mx-2"
            >
              Pricing
            </Link>
            <a
              href="https://app.enterprisebuzzai.com/login"
              className="w-full px-2.5 py-2 text-[#576B74] font-bold transition-colors duration-300 transform rounded-lg  hover:bg-gray-100  md:mx-2"
            >
              Log in
            </a>
            <a
              href="https://app.enterprisebuzzai.com/register"
              className="w-full md:w-[10rem] bg-[#FFCC00] rounded-lg mt-2 py-4 px-2.5 text-[#000]  transition duration-200 hover:bg-[#757E7E] mx-auto "
            >
              Start your free 7-day trial
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
