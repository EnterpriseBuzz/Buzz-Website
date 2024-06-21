import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function Contact() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="bg-[#F9F9F9]">
      <SEO
        title="Contact"
        description="EnterpriseBuzz is a pioneering media and technology company, dedicated to propelling businesses forward through innovative advertising, branding, CRM, and marketing tools."
        name="EnterpriceBuzz"
        type="description"
      />
      <div
        className="w-full bg-center bg-cover h-[15rem] lg:h-[20rem] "
        style={{
          "background-image": "url('./hbg.png')",
        }}
      >
        <div className="flex items-center justify-center w-full h-full  ">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-white py-3 lg:text-7xl">
              Contact Us
            </h1>
            <h1 className="text-sm lg:text-base font- text-white w-full md:w-[28rem] ">
              Want to make an inquiry? feel free to reach out to us anytime,
              we’re always available to attend to you.
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto container px-2 lg:px-32 grid grid-cols-1 gap-5 md:grid-cols-2  my-12 -mt-5 lg:-mt-8">
        <div className="p-6 lg:p-12 bg-white items-center flex flex-col space-y-3 justify-center rounded-xl">
          <img src="../message.svg" className="w-16 lg:w-auto" alt="i" />
          <div className="text-center text-[#000000]">
            <h1 className="text-xl font-semibold  py-3 lg:text-3xl">
              Chat With Us
            </h1>
            <h1 className="text-sm lg:text-base text-[#36474F]  w-full md:w-[24rem] ">
              Reach out to us on any of our social media channels
            </h1>
          </div>
          <div className=" flex gap-x-3 lg:gap-x-5  items-center justify-between">
            <a
              href="https://www.facebook.com/enterprisebuzz"
              className="text-lightBlue-400   py-3 px-0.5 text-center items-center justify-center align-center rounded-full h-9 w-9 lg:w-full lg:h-full outline-none focus:outline-none "
            >
              <img src="../insta.svg" alt="i" />
            </a>
            <a
              href="https://twitter.com/enterprisebuzz"
              className="text-lightBlue-600    py-3 items-center justify-center align-center rounded-full h-9 w-9 lg:w-full lg:h-full outline-none focus:outline-none "
            >
              <img src="../X.svg" alt="i" />
            </a>
            <a
              href="https://www.linkedin.com/enterprisebuzz"
              className="  py-3 px-0.5 items-center justify-center align-center rounded-full h-9 w-9 lg:w-full lg:h-full outline-none focus:outline-none "
            >
              <img src="../Whats.svg" alt="i" />
            </a>
            <a
              href="https://www.instagram.com/enterprisebuzz"
              className="text-blueGray-800   py-3 px-0.5 items-center justify-center align-center rounded-full h-9 w-9 lg:w-full lg:h-full outline-none focus:outline-none "
            >
              <img src="../Linkedin.svg" alt="i" />
            </a>
          </div>
        </div>
        <div className="p-6 lg:p-12 bg-white items-center flex flex-col space-y-3 justify-center rounded-xl">
          <img src="../mail.svg" className="w-16 lg:w-auto" alt="i" />
          <div className="text-center text-[#000000]">
            <h1 className="text-xl font-semibold  py-3 lg:text-3xl">
              Send Us A Mail
            </h1>
            <h1 className="text-sm lg:text-base text-[#36474F]  w-full md:w-[24rem] ">
              Want to partner with us? send us an email and we’ll be sure to
              respond
            </h1>
          </div>
          <Link
            to="mailto:business@enterpricebuzz"
            className="w-full bg-[#DA281C] rounded-lg text-sm  py-3 text-center text-white  transition duration-200 hover:bg-[#757E7E]"
          >
            Send A Mail
          </Link>
        </div>
      </div>
      {/* Send Message +++++++++++++++++++++++++++ */}
      <div className="px-2 bg-[#F9F9F9]  mx-auto py-8 lg:py-20">
        <h2 className="text-lg text-[#000] font-semibold  text-center md:text-3xl lg:w-[35rem] mx-auto">
          Leave A Message
        </h2>
        <h2 className="text-[10px] text-[#000] text-center font-light md:text-sm md:w-[40rem] lg:w-[44rem] mx-auto">
          Leave us a message and we’ll attend to you immediately
        </h2>
        <div className="mx-auto container px-2 lg:px-16 grid grid-cols-1 gap-4 md:grid-cols-2  my-12">
          <div className="p-5 lg:p-10 ">
            <img src="../conti.png" alt="i" />
          </div>
          <form className="my-3">
            <div className="mb-5 w-full">
              <label className="relative w-20 pb-1 rounded-full px-auto  block text-base text-[#000] font-semibold">
                Full Name
              </label>
              <input
                required
                type="text"
                placeholder="Enter Full Name"
                className="py-4 px-3 font-light text-sm bg-white rounded-lg w-full focus:outline-none"
              />
            </div>
            <div className="mb-5 w-full">
              <label className="relative w-28 pb-1 rounded-full px-auto  block text-base text-[#000] font-semibold">
                Email
              </label>
              <input
                required
                type="email"
                placeholder="example@mail.com"
                className="py-4 px-3 font-light text-sm bg-white rounded-lg w-full focus:outline-none"
              />
            </div>

            <div className="mb-5 w-full">
              <label className="relative w-32 pb-1 rounded-full px-auto  block text-base text-[#000] font-semibold">
                Mobile Number
              </label>

              <input
                required
                placeholder="80000000000000"
                maxLength={10}
                className="py-4 px-3 font-light text-sm bg-white rounded-lg w-full focus:outline-none"
              />
            </div>

            <div className="mb-5 w-full">
              <label className="relative w-36 pb-1 rounded-full px-auto  block text-base text-[#000] font-semibold">
                Brief Description
              </label>
              <textarea
                required
                placeholder="Type Message"
                type="text"
                rows={6}
                className="py-4 px-3 font-light text-sm bg-white rounded-lg w-full focus:outline-none"
              />
            </div>

            <button className="w-full bg-[#DA281C] rounded-lg text-sm  py-4 text-center text-white  transition duration-200 hover:bg-[#757E7E]">
              Send A Mail
            </button>
          </form>
        </div>
      </div>

      <div className="px-2 bg-[#FFF]  mx-auto py-20">
        <h2 className="text-lg text-[#000] font-semibold  text-center md:text-3xl lg:w-[35rem] mx-auto">
          Visit Us
        </h2>
        <h2 className="text-[10px] text-[#000] text-center font-light md:text-sm md:w-[40rem] lg:w-[44rem] mx-auto">
          Meet us at our physical location anytime, anyday and we’ll be sure to
          attend to your business needs.
        </h2>
        <div className="mx-auto container px-2 lg:px-16 grid grid-cols-1 gap-4 md:grid-cols-10  my-12">
          <div className="p-5 flex w-full col-span-4">
            <div>
              <img src="../distance.svg" alt="i" />
            </div>

            <div className=" text-[#000000] ">
              <h1 className="text-base font-semibold  pb-3 lg:text-xl">
                First Canadian Place <br /> 100 King Street West, Suite 5700,
                <br /> Toronto, ONTARIO M5X 1C7
              </h1>
              <button className="w-[10rem] bg-[#DA281C] rounded-lg text-sm  py-3 text-center text-white  transition duration-200 hover:bg-[#757E7E]">
                Get Directions
              </button>
            </div>
          </div>

          <div className=" wow fadeInUp col-span-6">
            <iframe
              title="map"
              className="position-relative rounded- w-full h-[20rem]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
