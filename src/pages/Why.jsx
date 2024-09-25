import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function Why() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const [more1, setMore1] = useState(false);
  const [more2, setMore2] = useState(false);
  const [more3, setMore3] = useState(false);
  const [more4, setMore4] = useState(false);
  const [more5, setMore5] = useState(false);
  const [more6, setMore6] = useState(false);
  const [more7, setMore7] = useState(false);
  const [more8, setMore8] = useState(false);
  const [more9, setMore9] = useState(false);
  const [more10, setMore10] = useState(false);
  return (
    <div className=" text-gray-600">
      <SEO
        title="Why Us"
        description="Enterprise Buzzer is a pioneering media and technology company, dedicated to propelling businesses forward through innovative advertising, branding, CRM, and marketing tools."
        name="EnterpriceBuzzer"
        type="description"
      />
      <div
        className="w-full bg-center bg-cover h-[15rem] lg:h-[25rem] "
        style={{
          "background-image": "url('./hbg.png')",
        }}
      >
        <div className="flex items-center justify-center w-full h-full  ">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white py-3 lg:text-7xl">
              Why Enterprise Buzzer
            </h1>
            <h1 className="text-sm lg:text-base  text-white w-full md:w-[32rem] text-center mx-auto">
              Benefits your business will gain by working with Enterprise
              Buzzer, beyond just driving revenue.
            </h1>
          </div>
        </div>
      </div>

      <div className="container m-auto space-y-6 md:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-x-12 py-5 md:py-10 px-2 lg:px-16">
        <div className="lg:hidden">
          <img src="../ser8.png" alt="i" />
        </div>
        <div className="md:7/12 lg:w-6/12">
          <h2 className="text-2xl text-[#212529] font-medium md:text-4xl">
            Building a Dominant Brand Presence
          </h2>
          <p className="mt-6 font-light text-[#62747d]">
            At Enterprise Buzzer, we understand that long-term success is tied to
            your brand’s presence and influence. We create marketing campaigns
            that establish your brand as a leader in your industry, ensuring
            that your business
            {more1
              ? "becomes synonymous with authority, trust, and excellence."
              : "..."}
            <ul className={more1 ? "block list-disc p-3" : "hidden"}>
              <h2 className="text-xl text-[#212529] font-medium md:text-3xl -ml-3">
                Benefits:
              </h2>
              <li>Increased brand visibility across all digital channels.</li>
              <li>
                Reinforced brand positioning in a competitive market, ensuring
                your business remains top-of-mind for your audience.
              </li>
              <li>
                Consistency in messaging that builds brand recognition and
                loyalty.
              </li>
            </ul>
          </p>

          <div className=" flex gap-x-4 mt-5 items-center">
            {more1 ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setMore1(false);
                }}
                className="w-[7rem] bg-[#757E7E]  rounded-lg text-sm  py-3 text-center text-white  transition duration-200"
              >
                Read less
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setMore1(true);
                }}
                className="w-[7rem] rounded-lg text-sm  py-3 text-center text-white  transition duration-200 bg-[#DA281C] hover:bg-[#757E7E]"
              >
                Read more
              </button>
            )}
          </div>
        </div>

        <div className="hidden lg:block sm:w-[35rem]">
          <img src="../ser8.png" alt="i" />
        </div>
      </div>

      <div className="container m-auto space-y-6 md:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-x-12 py-5 md:py-10 px-2 lg:px-16">
        <div className=" sm:w-[35rem]">
          <img src="../ser7.png" alt="i" />
        </div>
        <div className="md:7/12 lg:w-6/12">
          <h2 className="text-2xl text-[#212529] font-medium md:text-4xl">
            Expanding Market Reach and Customer Base
          </h2>
          <p className="mt-6 font-light text-[#62747d]">
            Through our multi-channel, precision-targeted strategies, Enterprise
            Buzzer helps businesses expand their market reach by targeting new
            audiences beyond immediate geographical locations or existing
            markets. We ensure that your message resonates
            {more2
              ? "with potential customers you may not have reached otherwise."
              : "..."}
            <ul className={more2 ? "block list-disc p-3" : "hidden"}>
              <h2 className="text-xl text-[#212529] font-medium md:text-3xl -ml-3">
                Benefits:
              </h2>
              <li>
                Access to broader markets across demographics, geographic areas,
                and customer segments.
              </li>
              <li>
                Expanded online presence through targeted digital advertising,
                social media, and SEO, increasing your market share.
              </li>
              <li>
                Positioning your business as a global player, no matter the size
                of your operation.
              </li>
            </ul>
          </p>

          <div className=" flex gap-x-4 mt-5 items-center">
            {more2 ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setMore2(false);
                }}
                className="w-[7rem] bg-[#757E7E]  rounded-lg text-sm  py-3 text-center text-white  transition duration-200"
              >
                Read less
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setMore2(true);
                }}
                className="w-[7rem] rounded-lg text-sm  py-3 text-center text-white  transition duration-200 bg-[#DA281C] hover:bg-[#757E7E]"
              >
                Read more
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="container m-auto space-y-6 md:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-x-12 py-5 md:py-10 px-2 lg:px-16">
        <div className="lg:hidden">
          <img src="../ser6.png" alt="i" />
        </div>
        <div className="md:7/12 lg:w-6/12">
          <h2 className="text-2xl text-[#212529] font-medium md:text-4xl">
            Establishing Long-Term Customer Relationships
          </h2>
          <p className="mt-6 font-light text-[#62747d]">
            Customer relationships are the foundation of long-term growth.
            Enterprise Buzzer helps your business build lasting, meaningful
            connections with your audience through personalized marketing
            campaigns that foster trust and loyalty. We nurture these
            relationships by delivering
            {more3
              ? "ongoing value through content, engagement, and direct communication."
              : "..."}
            <ul className={more3 ? "block list-disc p-3" : "hidden"}>
              <h2 className="text-xl text-[#212529] font-medium md:text-3xl -ml-3">
                Benefits:
              </h2>
              <li>
                Strengthened customer loyalty through consistent, personalized
                communication and engagement.
              </li>
              <li>
                Ongoing relationship-building that results in repeat business
                and long-term customer retention.
              </li>
              <li>
                Fostering brand advocates who help spread your message
                organically and drive customer referrals.
              </li>
            </ul>
          </p>

          <div className=" flex gap-x-4 mt-5 items-center">
            {more3 ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setMore3(false);
                }}
                className="w-[7rem] bg-[#757E7E]  rounded-lg text-sm  py-3 text-center text-white  transition duration-200"
              >
                Read less
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setMore3(true);
                }}
                className="w-[7rem] rounded-lg text-sm  py-3 text-center text-white  transition duration-200 bg-[#DA281C] hover:bg-[#757E7E]"
              >
                Read more
              </button>
            )}
          </div>
        </div>
        <div className="hidden lg:block sm:w-[35rem]">
          <img src="../ser6.png" alt="i" />
        </div>
      </div>

      <div className="container m-auto space-y-6 md:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-x-12 py-5 md:py-10 px-2 lg:px-16">
        <div className="w-full lg:w-[35rem]">
          <img src="../ser5.png" alt="i" className="rounded-full w-full" />
        </div>
        <div className="md:7/12 lg:w-6/12">
          <h2 className="text-2xl text-[#212529] font-medium md:text-4xl">
            Driving Customer Engagement Across All Channels
          </h2>
          <p className="mt-6 font-light text-[#62747d]">
            Our multi-channel approach ensures that your business is always
            engaging with your audience —whether through social media, email,
            SEO, or viral content. Enterprise Buzzer creates interactive
            campaigns that keep your customers engaged, connected, and excited
            about your
            {more4
              ? "brand, building deeper emotional connections that lead to sustained loyalty."
              : "..."}
            <ul className={more4 ? "block list-disc p-3" : "hidden"}>
              <h2 className="text-xl text-[#212529] font-medium md:text-3xl -ml-3">
                Benefits:
              </h2>
              <li>
                Higher engagement rates that increase brand awareness and
                customer interaction.
              </li>
              <li>
                Improved customer experience through seamless communication
                across social media, email, and other digital platforms.
              </li>
              <li>
                Interactive campaigns that foster two-way communication, giving
                customers a sense of belonging and investment in your brand.
              </li>
            </ul>
          </p>

          <div className=" flex gap-x-4 mt-5 items-center">
            {more4 ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setMore4(false);
                }}
                className="w-[7rem] bg-[#757E7E]  rounded-lg text-sm  py-3 text-center text-white  transition duration-200"
              >
                Read less
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setMore4(true);
                }}
                className="w-[7rem] rounded-lg text-sm  py-3 text-center text-white  transition duration-200 bg-[#DA281C] hover:bg-[#757E7E]"
              >
                Read more
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="container m-auto space-y-6 md:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-x-12 py-5 md:py-10 px-2 lg:px-16">
        <div className="lg:hidden">
          <img src="../ser4.png" alt="i" />
        </div>
        <div className="md:7/12 lg:w-6/12">
          <h2 className="text-2xl text-[#212529] font-medium md:text-4xl">
            Building Thought Leadership and Authority
          </h2>
          <p className="mt-6 font-light text-[#62747d]">
            Through carefully crafted content and bold, attention-grabbing
            campaigns, Enterprise Buzzer positions your business as a thought
            leader in your industry. Whether through blogs, whitepapers, or
            educational webinars, we help you share your expertise, establish
            credibility, and build
            {more5
              ? "authority, attracting customers who trust your knowledge and insights."
              : "..."}
            <ul className={more5 ? "block list-disc p-3" : "hidden"}>
              <h2 className="text-xl text-[#212529] font-medium md:text-3xl -ml-3">
                Benefits:
              </h2>
              <li>
                Positioning your brand as an industry authority through content
                marketing and thought leadership initiatives.
              </li>
              <li>
                Increased trust and credibility with your target audience,
                leading to higher engagement and customer conversion rates over
                time.
              </li>
              <li>
                Establishing a knowledge hub that customers turn to when seeking
                insights, solutions, and expertise in your field.
              </li>
            </ul>
          </p>

          <div className=" flex gap-x-4 mt-5 items-center">
            {more5 ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setMore5(false);
                }}
                className="w-[7rem] bg-[#757E7E]  rounded-lg text-sm  py-3 text-center text-white  transition duration-200"
              >
                Read less
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setMore5(true);
                }}
                className="w-[7rem] rounded-lg text-sm  py-3 text-center text-white  transition duration-200 bg-[#DA281C] hover:bg-[#757E7E]"
              >
                Read more
              </button>
            )}
          </div>
        </div>
        <div className="hidden lg:block sm:w-[35rem]">
          <img src="../ser4.png" alt="i" />
        </div>
      </div>

      <div className="container m-auto space-y-6 md:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-x-12 py-5 md:py-10 px-2 lg:px-16">
        <div className="w-full lg:w-[35rem]">
          <img src="../ser3.png" alt="i" className="rounded-xl" />
        </div>
        <div className="md:7/12 lg:w-6/12">
          <h2 className="text-2xl text-[#212529] font-medium md:text-4xl">
            Enhanced Customer Data and Insights
          </h2>
          <p className="mt-6 font-light text-[#62747d]">
            With Buzzer AI, you gain access to deep insights and data on
            customer behavior, preferences, and patterns. This data enables you
            to make smarter, data-driven decisions that enhance your marketing
            strategies, personalize your
            {more6
              ? "messaging, and continually improve your customer experience."
              : "..."}
            <ul className={more6 ? "block list-disc p-3" : "hidden"}>
              <h2 className="text-xl text-[#212529] font-medium md:text-3xl -ml-3">
                Benefits:
              </h2>
              <li>
                Comprehensive customer data that helps identify trends,
                behaviors, and opportunities for growth.
              </li>
              <li>
                Enhanced decision-making powered by precise data insights,
                allowing for ongoing optimization of marketing efforts.
              </li>
              <li>
                Tailored marketing strategies based on real-time data, ensuring
                campaigns resonate with your audience and drive sustained
                engagement.
              </li>
            </ul>
          </p>

          <div className=" flex gap-x-4 mt-5 items-center">
            {more6 ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setMore6(false);
                }}
                className="w-[7rem] bg-[#757E7E]  rounded-lg text-sm  py-3 text-center text-white  transition duration-200"
              >
                Read less
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setMore6(true);
                }}
                className="w-[7rem] rounded-lg text-sm  py-3 text-center text-white  transition duration-200 bg-[#DA281C] hover:bg-[#757E7E]"
              >
                Read more
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="container m-auto space-y-6 md:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-x-12 py-5 md:py-10 px-2 lg:px-16">
        <div className="lg:hidden">
          <img src="../ser2.png" alt="i" />
        </div>
        <div className="md:7/12 lg:w-6/12">
          <h2 className="text-2xl text-[#212529] font-medium md:text-4xl">
            Scalability and Flexibility for Long-Term Growth
          </h2>
          <p className="mt-6 font-light text-[#62747d]">
            With Enterprise Buzzer, your marketing strategies are designed to
            grow with your business. Our campaigns are built to scale, allowing
            you to seamlessly expand your efforts as your business grows.
            Whether you’re aiming to expand to new markets, launch new products,
            or take your business global, Enterprise Buzzer provides
            {more7
              ? "the flexibility and scalability you need to achieve your goals."
              : "..."}
            <ul className={more7 ? "block list-disc p-3" : "hidden"}>
              <h2 className="text-xl text-[#212529] font-medium md:text-3xl -ml-3">
                Benefits:
              </h2>
              <li>
                Scalable marketing strategies that adapt to your business’s
                growth and evolving needs.
              </li>
              <li>
                Flexible campaigns that allow you to pivot and adjust based on
                market trends and customer behavior.
              </li>
              <li>
                Long-term sustainability, ensuring your business continues to
                see growth well beyond immediate sales spikes.
              </li>
            </ul>
          </p>

          <div className=" flex gap-x-4 mt-5 items-center">
            {more7 ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setMore7(false);
                }}
                className="w-[7rem] bg-[#757E7E]  rounded-lg text-sm  py-3 text-center text-white  transition duration-200"
              >
                Read less
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setMore7(true);
                }}
                className="w-[7rem] rounded-lg text-sm  py-3 text-center text-white  transition duration-200 bg-[#DA281C] hover:bg-[#757E7E]"
              >
                Read more
              </button>
            )}
          </div>
        </div>
        <div className="hidden lg:block sm:w-[35rem]">
          <img src="../ser2.png" alt="i" />
        </div>
      </div>
      <div className="container m-auto space-y-6 md:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-x-12 py-5 md:py-10 px-2 lg:px-16">
        <div className="w-full lg:w-[35rem]">
          <img src="../ser1.png" alt="i" className="rounded-xl" />
        </div>
        <div className="md:7/12 lg:w-6/12">
          <h2 className="text-2xl text-[#212529] font-medium md:text-4xl">
            Boosting Brand Loyalty and Advocacy
          </h2>
          <p className="mt-6 font-light text-[#62747d]">
            Enterprise Buzzer doesn’t just focus on getting your brand seen—we
            ensure your customers become loyal advocates. Through personalized
            experiences, regular engagement, and value-driven content, we help
            turn customers into
            {more8
              ? "passionate supporters who champion your brand and spread the word, creating a powerful network of advocates."
              : "..."}
            <ul className={more8 ? "block list-disc p-3" : "hidden"}>
              <h2 className="text-xl text-[#212529] font-medium md:text-3xl -ml-3">
                Benefits:
              </h2>
              <li>
                Higher customer retention due to enhanced loyalty programs and
                personalized interactions.
              </li>
              <li>
                Increased word-of-mouth referrals from brand advocates who trust
                your business and share their positive experiences.
              </li>
              <li>
                Creation of a loyal customer base that supports your long-term
                growth and success.
              </li>
            </ul>
          </p>

          <div className=" flex gap-x-4 mt-5 items-center">
            {more8 ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setMore8(false);
                }}
                className="w-[7rem] bg-[#757E7E]  rounded-lg text-sm  py-3 text-center text-white  transition duration-200"
              >
                Read less
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setMore8(true);
                }}
                className="w-[7rem] rounded-lg text-sm  py-3 text-center text-white  transition duration-200 bg-[#DA281C] hover:bg-[#757E7E]"
              >
                Read more
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="container m-auto space-y-6 md:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-x-12 py-5 md:py-10 px-2 lg:px-16">
        <div className="lg:hidden">
          <img src="../ser2.png" alt="i" />
        </div>
        <div className="md:7/12 lg:w-6/12">
          <h2 className="text-2xl text-[#212529] font-medium md:text-4xl">
            Data-Driven Strategy for Continuous Improvement
          </h2>
          <p className="mt-6 font-light text-[#62747d]">
            Enterprise Buzzer embraces the philosophy that if you can’t measure
            it, you can’t improve it. We are committed to constant analysis and
            optimization of your marketing campaigns. With real-time data
            insights and performance metrics, we refine your strategy to ensure
            {more9
              ? "sustained improvements over time, keeping your business ahead of the curve."
              : "..."}
            <ul className={more9 ? "block list-disc p-3" : "hidden"}>
              <h2 className="text-xl text-[#212529] font-medium md:text-3xl -ml-3">
                Benefits:
              </h2>
              <li>
                Real-time performance tracking to measure campaign success and
                ROI.
              </li>
              <li>
                Ongoing optimization and refinement to ensure maximum
                effectiveness and impact.
              </li>
              <li>
                Adaptability and continuous improvement, allowing your business
                to evolve and stay competitive in a rapidly changing
                marketplace.
              </li>
            </ul>
          </p>

          <div className=" flex gap-x-4 mt-5 items-center">
            {more9 ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setMore9(false);
                }}
                className="w-[7rem] bg-[#757E7E]  rounded-lg text-sm  py-3 text-center text-white  transition duration-200"
              >
                Read less
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setMore9(true);
                }}
                className="w-[7rem] rounded-lg text-sm  py-3 text-center text-white  transition duration-200 bg-[#DA281C] hover:bg-[#757E7E]"
              >
                Read more
              </button>
            )}
          </div>
        </div>
        <div className="hidden lg:block sm:w-[35rem]">
          <img src="../ser2.png" alt="i" />
        </div>
      </div>
      <div className="container m-auto space-y-6 md:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-x-12 py-5 md:py-10 px-2 lg:px-16">
        <div className="w-full lg:w-[35rem]">
          <img src="../ser1.png" alt="i" className="rounded-xl" />
        </div>
        <div className="md:7/12 lg:w-6/12">
          <h2 className="text-2xl text-[#212529] font-medium md:text-4xl">
            Competitive Advantage and Industry Leadership
          </h2>
          <p className="mt-6 font-light text-[#62747d]">
            By working with Enterprise Buzzer, your business gains a competitive
            edge over industry rivals. Our forward-thinking, aggressive
            marketing strategies ensure that you not only keep up with industry
            trends but set them. We position your business as an
            {more10
              ? "innovator, attracting attention, fostering engagement, and commanding respect within your field."
              : "..."}
            <ul className={more10 ? "block list-disc p-3" : "hidden"}>
              <h2 className="text-xl text-[#212529] font-medium md:text-3xl -ml-3">
                Benefits:
              </h2>
              <li>
                Establishing your business as an industry leader,
                differentiating your brand from the competition.
              </li>
              <li>
                Staying ahead of market trends and customer expectations with
                our cutting-edge marketing tactics.
              </li>
              <li>
                Attracting top-tier customers and partners who recognize your
                business as a trailblazer in your space.
              </li>
            </ul>
          </p>

          <div className=" flex gap-x-4 mt-5 items-center">
            {more10 ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setMore10(false);
                }}
                className="w-[7rem] bg-[#757E7E]  rounded-lg text-sm  py-3 text-center text-white  transition duration-200"
              >
                Read less
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setMore10(true);
                }}
                className="w-[7rem] rounded-lg text-sm  py-3 text-center text-white  transition duration-200 bg-[#DA281C] hover:bg-[#757E7E]"
              >
                Read more
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Conclusion ********************* */}
      <div className=" bg-[#fff] py-10 px-2 lg:px-24  flex flex-col  items-center  justify-center gap-x-1 ">
        <div className="container lg:px-16 mx-auto  lg:my-10">
          <div
            className="w-full bg-center bg-cover h-[17rem] lg:h-[20rem] rounded-2xl p-5 lg:p-20"
            style={{
              "background-image": "url('./CTA Banner.png')",
            }}
          >
            <div className="sm:flex items-center justify-between w-full h-full  ">
              <h1 className="text-lg sm:text-2xl font-bold text-white md:py-3 sm:w-[34rem] lg:text-5xl">
                Turbocharge your brand's potential right now!
              </h1>

              <div className="sm:w-[22rem]">
                <p className="mt-3 sm:mt-6 font-normal text-[#fff]">
                  If you’re ready to build a brand that doesn’t just survive,
                  but dominates, Enterprise Buzzer is the partner you need.
                  Let’s take your business to new heights.
                </p>

                <div className=" flex gap-x-4 mt-5 items-center">
                  <a
                    href="http://app.enterprisebuzzer.com/register"
                    className="w-[14rem] bg-[#FFCC00] rounded-lg text-sm  py-3 text-center text-white  transition duration-200 hover:bg-[#757E7E]"
                  >
                    Start your free 7-day trial
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
