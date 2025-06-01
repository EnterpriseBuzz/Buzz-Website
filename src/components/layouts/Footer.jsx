import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(to bottom right, #FF690A 10%, #BE1E01 40%, #420004 90%)",
        }}
      >
        <div className="container  py-6 lg:py-20 mx-auto px-4  text-white  ">
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-8 lg:gap-12 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.5fr]"
          >
            <div className="items-start space-y-6 ">
              <Link to="/">
                <img
                  src="../flogo.png"
                  alt="buzzlogo"
                  className=" w-[10rem] lg:w-[12rem]"
                />
              </Link>
              <div className="items-start  mb-2 ">
                <p className=" text-lg font-bold mb-3">Newsletter</p>
                <p className=" text-sm  w-full lg:w-[21rem]">
                  Sign up for our newsletter and stay informed about the latest
                  marketing breakthroughs, expertly curated from
                  our Toronto front.
                </p>
                <div className="my-2 flex items-center bg-white rounded-lg  w-full max-w-md overflow-hidden">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 text-gray-900 focus:outline-none"
                  />
                  <button className="bg-[#BE1E01] text-white  rounded-r-lg flex items-center justify-center hover:bg-red-700 transition-all">
                    <svg
                      width="60"
                      height="54"
                      viewBox="0 0 60 54"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.5 0.5H52C56.1421 0.5 59.5 3.85786 59.5 8V46C59.5 50.1421 56.1421 53.5 52 53.5H0.5V0.5Z"
                        stroke="white"
                      />
                      <mask
                        id="mask0_2409_316"
                        maskUnits="userSpaceOnUse"
                        x="18"
                        y="12"
                        width="24"
                        height="24"
                      >
                        <rect
                          x="18"
                          y="12"
                          width="24"
                          height="24"
                          fill="currentColor"
                        />
                      </mask>
                      <g mask="url(#mask0_2409_316)">
                        <path
                          d="M34.175 28.125H22V25.875H34.175L28.575 19.575L30 18L38 27L30 36L28.575 34.425L34.175 28.125Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="">
                <p>
                  Stay updated on the latest marketing technology happenings on
                  our social media platforms.
                </p>
                <div className="mt-2 flex  gap-x-3 items-center ">
                  <a
                    href="h ttps://www.facebook.com/enterprisebuzzai"
                    className=" rounded-full outline-none focus:outline-none "
                  >
                    <svg
                      width="38"
                      height="30"
                      viewBox="0 0 10 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                    >
                      <path
                        d="M6.37296 18V9.78936H9.26765L9.70104 6.5895H6.37288V4.54653C6.37288 3.6201 6.64305 2.98879 8.0385 2.98879L9.81819 2.98799V0.126072C9.51038 0.0871459 8.45386 0 7.22488 0C4.65886 0 2.90212 1.49118 2.90212 4.22972V6.5895H0V9.78936H2.90212V17.9999H6.37296V18Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/enterprisebuzzai"
                    className="text-blueGray-800  font-normal px-0.5 items-center justify-center align-center rounded-full outline-none focus:outline-none "
                  >
                    <svg
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                    >
                      <g clip-path="url(#clip0_2441_6012)">
                        <path
                          d="M16.4036 0.195825C13.4244 0.336385 11.3899 0.811825 9.61132 1.51071C7.7706 2.22807 6.21044 3.19071 4.65812 4.74863C3.1058 6.30655 2.14989 7.86783 1.43757 9.71135C0.748205 11.4938 0.281165 13.53 0.149565 16.5109C0.0179654 19.4917 -0.0111546 20.4499 0.0034054 28.0536C0.0179654 35.6573 0.0515654 36.6104 0.196045 39.5974C0.338285 42.5761 0.812045 44.61 1.51093 46.3891C2.22941 48.2298 3.19092 49.7894 4.7494 51.3423C6.30788 52.8952 7.86804 53.8489 9.71604 54.5623C11.4968 55.2505 13.5336 55.7198 16.5139 55.8503C19.4942 55.9808 20.4535 56.011 28.0549 55.9965C35.6564 55.9819 36.6134 55.9483 39.5999 55.8066C42.5864 55.6649 44.6096 55.1878 46.3893 54.4923C48.23 53.7721 49.7908 52.8123 51.3425 51.2533C52.8943 49.6942 53.8496 48.1318 54.5614 46.2872C55.2513 44.5064 55.72 42.4697 55.8494 39.4916C55.9799 36.5029 56.0107 35.5486 55.9961 27.9461C55.9816 20.3435 55.9474 19.3904 55.8057 16.4045C55.664 13.4185 55.1897 11.3908 54.4914 9.61055C53.7718 7.76983 52.8114 6.21135 51.2535 4.65735C49.6956 3.10335 48.132 2.14855 46.288 1.43847C44.506 0.749105 42.4704 0.279265 39.4901 0.150465C36.5098 0.0216653 35.5505 -0.0113747 27.9463 0.00318531C20.342 0.0177453 19.39 0.0502253 16.4036 0.195825ZM16.7306 50.8131C14.0006 50.6944 12.5183 50.2408 11.5304 49.8611C10.2223 49.3571 9.29044 48.7478 8.30596 47.7729C7.32149 46.7979 6.71668 45.8627 6.20596 44.5573C5.82236 43.5695 5.36036 42.0889 5.23269 39.3589C5.0938 36.4082 5.06468 35.5223 5.04844 28.0469C5.0322 20.5714 5.06076 19.6866 5.19012 16.7349C5.3066 14.0071 5.763 12.5231 6.14212 11.5358C6.64612 10.226 7.25316 9.29583 8.23036 8.31191C9.20756 7.32799 10.14 6.72207 11.4464 6.21135C12.4332 5.82607 13.9138 5.36799 16.6427 5.23807C19.5956 5.09807 20.4804 5.07007 27.9547 5.05383C35.429 5.03759 36.316 5.06559 39.27 5.19551C41.9978 5.31423 43.4824 5.76615 44.4685 6.14751C45.7772 6.65151 46.7085 7.25687 47.6924 8.23575C48.6764 9.21463 49.2828 10.1437 49.7936 11.4529C50.1794 12.4369 50.6375 13.9169 50.7663 16.6475C50.9068 19.6004 50.9388 20.4857 50.9522 27.9595C50.9656 35.4333 50.9393 36.3209 50.81 39.2715C50.6907 42.0015 50.2382 43.4844 49.858 44.4733C49.354 45.7809 48.7464 46.7133 47.7686 47.6967C46.7908 48.6801 45.8596 49.286 44.5525 49.7967C43.5669 50.1814 42.0846 50.6406 39.358 50.7705C36.4051 50.9094 35.5203 50.9385 28.0432 50.9548C20.566 50.971 19.684 50.9408 16.7312 50.8131M39.5568 13.0349C39.5579 13.6995 39.756 14.3489 40.1262 14.9008C40.4964 15.4528 41.0219 15.8826 41.6364 16.1358C42.2508 16.3891 42.9266 16.4544 43.5782 16.3236C44.2298 16.1928 44.8279 15.8717 45.297 15.4009C45.7661 14.9301 46.085 14.3307 46.2134 13.6787C46.3419 13.0266 46.274 12.3511 46.0185 11.7376C45.763 11.1241 45.3313 10.6001 44.778 10.232C44.2247 9.86381 43.5746 9.66802 42.91 9.66935C42.0191 9.67113 41.1654 10.0267 40.5365 10.6578C39.9077 11.289 39.5553 12.144 39.5568 13.0349ZM13.6232 28.0278C13.6388 35.9686 20.0878 42.3913 28.0269 42.3761C35.966 42.361 42.3932 35.9126 42.378 27.9718C42.3629 20.031 35.9123 13.6067 27.972 13.6224C20.0318 13.6381 13.608 20.0881 13.6232 28.0278ZM18.6665 28.0177C18.6629 26.1718 19.2067 24.3661 20.2292 22.8292C21.2518 21.2923 22.7071 20.0931 24.4112 19.3833C26.1153 18.6735 27.9915 18.485 29.8028 18.8415C31.614 19.1981 33.2788 20.0837 34.5867 21.3864C35.8946 22.6892 36.7869 24.3505 37.1506 26.1603C37.5143 27.9701 37.3332 29.8471 36.6301 31.554C35.9271 33.2609 34.7337 34.7209 33.2008 35.7495C31.668 36.7782 29.8645 37.3291 28.0185 37.3328C26.7928 37.3354 25.5785 37.0965 24.4452 36.6297C23.3118 36.1629 22.2814 35.4775 21.413 34.6125C20.5445 33.7475 19.855 32.7198 19.3838 31.5883C18.9125 30.4568 18.6688 29.2435 18.6665 28.0177Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2441_6012">
                          <rect width="56" height="56" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@enterprisebuzzai"
                    className="font-normal  items-center justify-center align-center rounded-full outline-none focus:outline-none "
                  >
                    <img src="../icons/youtube.svg" alt="" />
                  </a>
                  <a
                    href="https://twitter.com/enterprisebuzzai"
                    className="font-normal  items-center justify-center align-center rounded-full outline-none focus:outline-none "
                  >
                    <svg
                      width="57"
                      height="51"
                      viewBox="0 0 57 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                    >
                      <g clip-path="url(#clip0_2441_6014)">
                        <path
                          d="M44.7468 0H53.293L34.6263 21.4779L56.6665 50.6024H39.3492L25.8553 32.9478L10.3372 50.6024H1.791L21.8071 27.6627L0.666504 0H18.4336L30.6906 16.1928L44.7468 0ZM41.7107 45.4297H46.4336L15.8472 4.83534H10.6745L41.7107 45.4297Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2441_6014">
                          <rect
                            width="56"
                            height="50.6024"
                            fill="white"
                            transform="translate(0.666504)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com/@enterprisebuzzai"
                    className="text-blueGray-800  font-normal px-0.5 items-center justify-center align-center rounded-full outline-none focus:outline-none "
                  >
                    <img src="../icons/tick.svg" alt="" />
                  </a>

                  <a
                    href="https://www.snapchat.com/add/enterprisebuzz"
                    className="text-blueGray-800  font-normal px-0.5 items-center justify-center align-center rounded-full outline-none focus:outline-none "
                  >
                    <img src="../icons/snap.svg" alt="" />
                  </a>
                  <a
                    href="https://www.linkedin.com/enterprisebuzz"
                    className=" font-normal px-0.5 items-center justify-center align-center rounded-full outline-none focus:outline-none "
                  >
                    <svg
                      width="56"
                      height="48"
                      viewBox="0 0 56 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                    >
                      <g clip-path="url(#clip0_2441_6017)">
                        <path
                          d="M53.2554 44.2218C53.3756 44.223 53.4947 44.1998 53.6054 44.1535C53.7161 44.1072 53.816 44.0388 53.8989 43.9527C53.9819 43.8666 54.046 43.7646 54.0875 43.6529C54.1289 43.5412 54.1466 43.4223 54.1397 43.3035C54.1397 42.6522 53.7429 42.3411 52.9287 42.3411H51.6133V45.7509H52.1081V44.2645H52.7161L52.73 44.2826L53.6735 45.7509H54.2026L53.1875 44.2312L53.2554 44.2218ZM52.6832 43.8803H52.1095V42.7275H52.8367C53.2123 42.7275 53.6406 42.7883 53.6406 43.2753C53.6406 43.8354 53.2072 43.8803 52.6803 43.8803"
                          fill="white"
                        />
                        <path
                          d="M40.3461 39.9483H33.33V29.0691C33.33 26.4748 33.2832 23.1352 29.6809 23.1352C26.0267 23.1352 25.4676 25.9617 25.4676 28.8802V39.9476H18.4515V17.5754H25.187V20.6328H25.2813C25.9553 19.4917 26.9293 18.5529 28.0996 17.9165C29.2699 17.2801 30.5926 16.9699 31.9268 17.0189C39.0379 17.0189 40.349 21.6503 40.349 27.6753L40.3461 39.9483ZM10.5351 14.5173C9.72979 14.5175 8.94254 14.2812 8.27291 13.8383C7.60327 13.3954 7.08134 12.7659 6.77304 12.0293C6.46474 11.2927 6.38395 10.4822 6.54091 9.70011C6.69786 8.91806 7.08552 8.19967 7.65483 7.63576C8.22414 7.07186 8.94955 6.68777 9.73932 6.53208C10.5291 6.37638 11.3477 6.45608 12.0918 6.76107C12.8358 7.06607 13.4718 7.58267 13.9193 8.24555C14.3668 8.90844 14.6057 9.68783 14.6059 10.4852C14.606 11.0146 14.5007 11.5388 14.2962 12.028C14.0917 12.5171 13.7919 12.9616 13.4139 13.336C13.0359 13.7104 12.587 14.0075 12.0931 14.2102C11.5992 14.4128 11.0697 14.5172 10.5351 14.5173ZM14.0431 39.9483H7.01972V17.5754H14.0431V39.9483ZM43.8439 0.00319428H3.49416C2.57833 -0.00703902 1.69583 0.343158 1.04064 0.976832C0.385449 1.61051 0.0111771 2.47581 0 3.38261V43.5007C0.0107946 44.4079 0.384847 45.2738 1.04001 45.9081C1.69518 46.5425 2.57788 46.8934 3.49416 46.8837H43.8439C44.762 46.8951 45.6471 46.5452 46.3049 45.9109C46.9627 45.2766 47.3392 44.4097 47.3519 43.5007V3.37971C47.3388 2.47112 46.962 1.60483 46.3042 0.971171C45.6465 0.337512 44.7615 -0.0116847 43.8439 0.000298537"
                          fill="white"
                        />
                        <path
                          d="M52.7408 40.822C51.8872 40.8302 51.0715 41.1727 50.4723 41.7746C49.873 42.3766 49.5389 43.1891 49.543 44.0343C49.5471 44.8796 49.8891 45.6888 50.4942 46.285C51.0993 46.8813 51.9182 47.216 52.7718 47.216C53.6255 47.216 54.4444 46.8813 55.0495 46.285C55.6546 45.6888 55.9966 44.8796 56.0007 44.0343C56.0048 43.1891 55.6707 42.3766 55.0714 41.7746C54.4722 41.1727 53.6565 40.8302 52.8029 40.822H52.7408ZM52.7408 46.85C52.1809 46.8592 51.6308 46.7038 51.1601 46.4035C50.6894 46.1032 50.3192 45.6714 50.0963 45.1627C49.8734 44.6541 49.8079 44.0914 49.908 43.5459C50.0081 43.0004 50.2693 42.4965 50.6586 42.0979C51.0479 41.6994 51.5478 41.4241 52.0952 41.3069C52.6425 41.1897 53.2126 41.2358 53.7335 41.4395C54.2543 41.6431 54.7025 41.9951 55.0213 42.4509C55.3401 42.9067 55.5152 43.4459 55.5245 44.0003C55.5245 44.0162 55.5245 44.0314 55.5245 44.0473C55.5402 44.7746 55.2635 45.4782 54.7553 46.0035C54.2471 46.5288 53.5491 46.8328 52.8146 46.8485H52.7415"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2441_6017">
                          <rect width="56" height="47.2727" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>

                  <a
                    href="https://dribbble.com/Enterprisebuzzai "
                    className="text-blueGray-800  font-normal px-0.5 items-center justify-center align-center rounded-full outline-none focus:outline-none "
                  >
                    <img src="../icons/dribble.svg" alt="" />
                  </a>
                  <a
                    href="https://www.behance.net/enterprisebuzzai"
                    className="text-blueGray-800  font-normal px-0.5 items-center justify-center align-center rounded-full outline-none focus:outline-none "
                  >
                    <img src="../icons/be.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-7 ">
              <div className="flex justify-between">
                <div className="items-start">
                  <p className=" text-xl font-bold mb-3">Information</p>
                  <div className="flex flex-col items-start  space-y-2">
                    <Link
                      to="/faqs"
                      className="capitalize text-white font-semibold transition-colors duration-300  hover:text-gray-300 text-xs lg:text-base"
                    >
                      FAQs
                    </Link>

                    <Link
                      to=""
                      className="capitalize text-white font-semibold transition-colors duration-300  hover:text-gray-300 text-xs lg:text-base"
                    >
                      Community
                    </Link>

                    <Link
                      to="/contact"
                      className="capitalize text-white font-semibold transition-colors duration-300  hover:text-gray-300 text-xs lg:text-base"
                    >
                      Support
                    </Link>
                    <Link
                      to="/privacy"
                      className="capitalize text-white font-semibold transition-colors duration-300  hover:text-gray-300 text-xs lg:text-base"
                    >
                      Privacy
                    </Link>
                    <Link
                      to="/terms"
                      className="capitalize text-white font-semibold transition-colors duration-300  hover:text-gray-300 text-xs lg:text-base"
                    >
                      Terms & Condition
                    </Link>
                  </div>
                </div>

                <div className="">
                  <p className=" text-xl font-bold mb-3">Company</p>
                  <div className="flex flex-col items-start  space-y-2">
                    <Link
                      to="/about"
                      className="capitalize text-white font-semibold transition-colors duration-300  hover:text-gray-300 text-xs lg:text-base"
                    >
                      About us
                    </Link>

                    <Link
                      to="/pricing"
                      className="capitalize text-white font-semibold transition-colors duration-300  hover:text-gray-300 text-xs lg:text-base"
                    >
                      Pricing
                    </Link>

                    <Link
                      to="/services"
                      className="capitalize text-white font-semibold transition-colors duration-300  hover:text-gray-300 text-xs lg:text-base"
                    >
                      Our Services
                    </Link>
                    <Link
                      to=""
                      className="capitalize text-white font-semibold transition-colors duration-300  hover:text-gray-300 text-xs lg:text-base"
                    >
                      Careers
                    </Link>
                    <Link
                      to=""
                      className="capitalize text-white font-semibold transition-colors duration-300  hover:text-gray-300 text-xs lg:text-base"
                    >
                      Team
                    </Link>
                  </div>
                </div>
              </div>
              <div className="py-3">
                <p className=" text-xl font-bold mb-3">Contact</p>
                <p className=" font-semibold ">
                  100 King St W #5700, Toronto, ON M5X 1C7
                </p>
                <p className=" font-semibold ">+1 (647) 370-8700</p>
              </div>
            </div>

            <div className="flex justify-between col-span-1.5">
              <div className="items-start">
                <p className=" text-xl font-bold mb-3">Our Services</p>
                <div className="flex flex-col items-start  space-y-2">
                  <Link
                    to=""
                    onClick={(e) => {
                      e.preventDefault();
                      // navigate("/");
                      document
                        .getElementById("marketing")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="capitalize text-white font-semibold transition-colors duration-300  hover:text-gray-300 text-xs lg:text-base"
                  >
                    AI-Driven MARKETING
                  </Link>

                  <Link
                    to=""
                    onClick={(e) => {
                      e.preventDefault();
                      // navigate("/");
                      document
                        .getElementById("comVideo")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="capitalize text-white font-semibold transition-colors duration-300  hover:text-gray-300 text-xs lg:text-base"
                  >
                    AI-Driven Video Commercial
                  </Link>

                  <Link
                    to=""
                    onClick={(e) => {
                      e.preventDefault();

                      // navigate("/");
                      document
                        .getElementById("callAgent")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="capitalize text-white font-semibold transition-colors duration-300  hover:text-gray-300 text-xs lg:text-base"
                  >
                    AI-Driven Call Agent
                  </Link>
                  <Link
                    to="/services/web"
                    className="capitalize text-white font-semibold transition-colors duration-300  hover:text-gray-300 text-xs lg:text-base"
                  >
                    Website/ Mobile App Design
                  </Link>
                  <Link
                    to=""
                    onClick={(e) => {
                      e.preventDefault();

                      // navigate("/");
                      document
                        .getElementById("emailAutomation")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="capitalize text-white font-semibold transition-colors duration-300  hover:text-gray-300 text-xs lg:text-base"
                  >
                    email automation
                  </Link>
                  <Link
                    to="/services/branding"
                    className="capitalize text-white font-semibold transition-colors duration-300  hover:text-gray-300 text-xs lg:text-base"
                  >
                    Branding Identity Designs
                  </Link>

                  <Link
                    to="/services/logo-design"
                    className="capitalize text-white font-semibold transition-colors duration-300  hover:text-gray-300 text-xs lg:text-base"
                  >
                    Logo Design
                  </Link>

                  <Link
                    to=""
                    onClick={(e) => {
                      e.preventDefault();
                      // navigate("/");
                      document
                        .getElementById("videography")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="capitalize text-white font-semibold transition-colors duration-300  hover:text-gray-300 text-xs lg:text-base"
                  >
                    Videography Services
                  </Link>
                  <Link
                    to=""
                    onClick={(e) => {
                      e.preventDefault();
                      // navigate("/");
                      document
                        .getElementById("photography")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="capitalize text-white font-semibold transition-colors duration-300  hover:text-gray-300 text-xs lg:text-base"
                  >
                    Photography Services
                  </Link>
                </div>
              </div>

              <div className="">
                <div className="flex flex-col items-start mt-10 space-y-2">
                  <Link
                    to=""
                    onClick={(e) => {
                      e.preventDefault();

                      // navigate("/");
                      document
                        .getElementById("promoDesign")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="capitalize text-white font-semibold transition-colors duration-300  hover:text-gray-300 text-xs lg:text-base"
                  >
                    Marketing/Promotional Designs
                  </Link>

                  <Link
                    to="/services/email-marketing"
                    className="capitalize text-white font-semibold transition-colors duration-300  hover:text-gray-300 text-xs lg:text-base"
                  >
                    Email Marketing
                  </Link>

                  <Link
                    to="/services/seo-marketing"
                    className="capitalize text-white font-semibold transition-colors duration-300  hover:text-gray-300 text-xs lg:text-base"
                  >
                    SEO Marketing
                  </Link>
                  <Link
                    to=""
                    onClick={(e) => {
                      e.preventDefault();
                      // navigate("/");
                      document
                        .getElementById("podcast")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="capitalize text-white font-semibold transition-colors duration-300  hover:text-gray-300 text-xs lg:text-base"
                  >
                    Podcast for marketing
                  </Link>
                  <Link
                    to="/services/social-media-marketing"
                    className="capitalize text-white font-semibold transition-colors duration-300  hover:text-gray-300 text-xs lg:text-base"
                  >
                    Social Media marketing
                  </Link>
                  <Link
                    to=""
                    onClick={(e) => {
                      e.preventDefault();
                      // navigate("/");
                      document
                        .getElementById("chatbot")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="capitalize text-white font-semibold transition-colors duration-300  hover:text-gray-300 text-xs lg:text-base"
                  >
                    AI Chatbot Development
                  </Link>
                  <Link
                    to=""
                    onClick={(e) => {
                      e.preventDefault();
                      // navigate("/");
                      document
                        .getElementById("UGC")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="capitalize text-white font-semibold transition-colors duration-300  hover:text-gray-300 text-xs lg:text-base"
                  >
                    UGC marketing
                  </Link>
                  <Link
                    to=""
                    onClick={(e) => {
                      e.preventDefault();
                      // navigate("/");
                      document
                        .getElementById("nativeAds")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="capitalize text-white font-semibold transition-colors duration-300  hover:text-gray-300 text-xs lg:text-base"
                  >
                    Native ADS marketing
                  </Link>
                  <Link
                    to=""
                    onClick={(e) => {
                      e.preventDefault();
                      // navigate("/");
                      document
                        .getElementById("leadGen")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="capitalize text-white font-semibold transition-colors duration-300  hover:text-gray-300 text-xs lg:text-base"
                  >
                    Lead Generations
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Footer;
