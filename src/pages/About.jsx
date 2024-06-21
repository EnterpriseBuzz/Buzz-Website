import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function About() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <SEO
        title="About Us"
        description="EnterpriseBuzz is a pioneering media and technology company, dedicated to propelling businesses forward through innovative advertising, branding, CRM, and marketing tools."
        name="EnterpriceBuzz"
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
            <div class="text-center">
              <h1 class="text-2xl font-bold text-white pb-3 lg:text-7xl">
                About Us
              </h1>
              <h1 class="text-sm lg:text-base font- text-white w-full md:w-[28rem] ">
                we're more than just a digital media agency - we're your
                partners in business growth
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container m-auto  px-2 lg:px-16">
        <img
          src="../Artboard.png"
          alt="i"
          className="w-full lg:h-[33rem] -mt-12 lg:-mt-24 rounded-xl"
        />
      </div>

      {/* Hero ++++++++++++++++++++++++++ */}
      <div className="container m-auto  text-gray-600 my-10">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 px-2 lg:px-16">
          <div className="md:7/12 lg:w-6/12">
            <p className="mt-6 font-light text-[#62747d]">
              EnterpriseBuzz is a full-service media and technology company that
              helps businesses deploy sophisticated advertising, branding, CRM,
              and marketing tools using our signature aggressive traditional and
              digital techniques for generating attention, driving engagement,
              customer acquisition, and increasing revenue.
            </p>
            <p className="mt-3 font-light text-[#62747d]">
              EnterpriseBuzz is a pioneering media and technology company,
              dedicated to propelling businesses forward through innovative
              advertising, branding, CRM, and marketing tools. Our unique
              approach combines aggressive traditional and digital techniques
              with a deep understanding of client needs, driving unparalleled
              engagement, customer acquisition, and revenue growth. Known for
              our adaptability and forward-thinking, we not only respond to
              industry trends but also set them, ensuring our partners achieve
              tangible results.
            </p>
            <div className=" flex gap-x-4 mt-5 items-center">
              <Link
                to="login"
                className="w-[14rem] bg-[#FFCC00] rounded-lg text-sm  py-4 text-center text-[#000]  transition duration-200 hover:bg-[#757E7E] hover:text-white"
              >
                Start your free 7-day trial
              </Link>
            </div>
          </div>

          <div className="sm:w-[28rem]">
            <img src="../about.png" alt="i" />
          </div>
        </div>
      </div>
      <div className="container m-auto  text-gray-600 my-10">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 px-2 lg:px-16">
          <div className="p-5 py-10 bg-[#F9F9F9] md:w-6/12 rounded-xl">
            <img src="../mission.png" alt="i" />
            <h1 className="text-lg mt-5 sm:text-xl font-semibold text-gray-800">
              Our Mission
            </h1>
            <p className="mt-3 text-sm font-light text-[#62747d]">
              Our mission is to empower businesses with the most innovative and
              aggressive marketing strategies by leveraging artificial
              intelligence and our signature fine-tuned A/B/C techniques.
            </p>
            <p className="mt-1 text-sm font-light text-[#62747d]">
              We are committed to transforming the digital marketing landscape
              by pushing the boundaries of creativity, technology, and strategy.
              We aim to deliver unparalleled engagement and revenue growth for
              our clients, ensuring they stand out in a crowded marketplace.
            </p>
            <p className="mt-1 text-sm font-light text-[#62747d]">
              At EnterpriseBuzz, we believe in bold moves, daring ideas, and the
              power of controversy to captivate and convert.
            </p>
          </div>

          <div className="px-5 py-10 bg-[#F9F9F9] md:w-6/12 rounded-xl">
            <img src="../vision.png" alt="i" />
            <h1 className="text-lg mt-5 sm:text-xl font-semibold text-gray-800">
              Our Vision
            </h1>
            <p className="mt-3 text-sm font-light text-[#62747d]">
              Our vision is to establish the premier global community for
              digital marketers and entrepreneurs, pioneering the frontier of
              marketing innovation with aggressive, bold, and controversial
              strategies powered by cutting-edge technology and artificial
              intelligence.
            </p>
            <p className="mt-1 text-sm font-light text-[#62747d]">
              We aim to empower millions of enterprises to reach unicorn status
              by 2031, transforming their trajectories with our comprehensive
              arsenal for marketing and business growth.
              <br />
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
      {/* What we offer +++++++++++++++++++++++++++ */}
      <div className="px-2 bg-[#F9F9F9]  mx-auto py-20">
        <h2 className="text-lg text-[#000] font-semibold  text-center md:text-2xl lg:w-[35rem] mx-auto">
          Our values
        </h2>
        <h2 className="text-[10px] text-[#000] text-center font-light md:text-sm md:w-[40rem] lg:w-[44rem] mx-auto">
          Explore cutting-edge marketing insights, latest news, trends, and
          technological innovations right at your fingertips. Discover content
          that drives the future of innovative marketing
        </h2>
        <div className="mx-auto container px-2 lg:px-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-12">
          <div className="bg-[#fff] p-5 rounded-xl ">
            <h1 className="text-xs sm:text-base font-semibold text-gray-800">
              Innovation Leadership
            </h1>
            <p className="text-[#36474F] font-light text-xs">
              We relentlessly pursue the cutting edge, pioneering advancements
              in marketing technology and strategies. Our commitment to
              innovation drives us to challenge the status quo and redefine
              what's possible in digital marketing.
            </p>
          </div>
          <div className="bg-[#fff] p-5 rounded-xl ">
            <h1 className="text-xs sm:text-base font-semibold text-gray-800">
              Impactful Boldness
            </h1>
            <p className="text-[#36474F] font-light text-xs">
              We are fearless in our actions and decisions, embracing
              controversy and bold tactics that stand out in the crowded market.
              Our approaches are designed not just to participate but to lead
              and redefine industry standards, ensuring our clients always stay
              ahead.
            </p>
          </div>
          <div className="bg-[#fff] p-5 rounded-xl ">
            <h1 className="text-xs sm:text-base font-semibold text-gray-800">
              Empowerment through Knowledge
            </h1>
            <p className="text-[#36474F] font-light text-xs">
              We believe in the power of community and collaboration to uplift
              and transform businesses. By sharing expertise, insights, and
              resources, we empower entrepreneurs and digital marketers
              worldwide to achieve extraordinary growth and reach unicorn
              status.
            </p>
          </div>
        </div>
        <div className=" flex gap-x-4  items-center lg:hidden px-2 md:px-8">
          <Link
            to="login"
            className="w-[14rem] bg-[#FFCC00] rounded-lg text-sm  py-4 text-center text-[#000]  transition duration-200 hover:bg-[#757E7E] hover:text-white"
          >
            Start your free 7-day trial
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
