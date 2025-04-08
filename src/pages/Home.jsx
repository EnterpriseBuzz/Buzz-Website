import React, { useEffect, useState } from "react";
import SEO from "../components/SEO";
import TestimonySlide from "../components/TestimonySlide";
import Portfolio from "../components/Portfolio";
import CompanySlide from "../components/CompanySlide";
import MarketingOverview from "../components/MarketingOverview";
import { motion, AnimatePresence } from "framer-motion";
import LogoGrid from "../components/LogoGrid";
import Technology from "../components/Technology";
import LatestUpdates from "../components/Lastest";
import HowWeWork from "../components/HowWeWork";

function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const [more1, setMore1] = useState(false);
  const [more2, setMore2] = useState(false);
  const [more3, setMore3] = useState(false);

  const openCalendly = () => {
    window.open("https://calendly.com/enterprisebuzzai", "_blank");
  };

  return (
    <div
      className="w-full  text-gray-600 bg-[center_top_20rem] bg-no-repeat"
      style={{
        "background-image": "url('./bg/redbg.svg')",
      }}
    >
      <SEO
        title="EnterpriseBuzz AI | Home"
        description="EnterpriseBuzz AI is a pioneering media and technology company, dedicated to propelling businesses forward through innovative advertising, branding, CRM, and marketing tools."
        name="EnterpriceBuzzer"
        type="description"
      />
      {/* Hero ++++++++++++++++++++++++++ */}
      <div className="wrap-video ">
        <video
          className="object-cover h-full lg:h-[36rem] xl:h-full w-full bg-black cursor-pointer"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="./HeroVid.mp4" type="video/mp4" />
        </video>
      </div>

      {/* CTA +++++++++++++++++++++++++++++ */}

      <section className="mx-auto  justify-center  py-10">
        <h2 className="md:text-base lg:text-lg text-[#414141] px-2 text-center font-semibold  mx-auto w-full  md:leading-[4.5rem]">
          Over 100,000,000 businesses start every year. <br /> The question of
          standing out is not just crucial—it is the difference between your
          business dominating or dying.
        </h2>
        <div className="w-full py-7">
          <CompanySlide />
        </div>
      </section>

      {/* Quote Section ++++++++++++++++++++++++++++++++++++++++++++++++ */}
      <div className=" px-5 lg:px-24   mx-auto mb-5">
        <img
          src="../quote.svg"
          alt=""
          className="hidden sm:block w-full h-full"
        />
        <img src="../Mquote.svg" alt="" className="sm:hidden w-full" />
      </div>

      {/* Free Marketing overview Section ++++++++++++++++++++++++++++++++++++++++++++++++ */}
      <MarketingOverview />

      {/* Ai Marketing  Section ++++++++++++++++++++++++++++++++++++++++++++++++ */}
      <div
        id="marketing"
        className="w-full py-10 px-2 lg:px-24 bg-[center_left_-70rem] bg-no-repeat sm:bg-center 2xl:bg-cover "
        style={{
          "background-image": "url('./bg/callbg.png')",
        }}
      >
        <div className=" m-auto space-y-6 md:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-12 py-20 lg:py-28 2xl:py-32 px-2">
          <div className="w-10/12 lg:w-6/12">
            <h2 className="w-[10rem] 2xl:w-[14rem] text-center text-xs text-[#fff] bg-[#fff]/40 p-2 rounded-full 2xl:text-lg">
              AI-Driven MARKETING
            </h2>
            <h2 className="my-3 text-2xl text-[#fff] font-semibold md:text-4xl 2xl:text-6xl">
              AI-Driven MARKETING
            </h2>
            <p className="text-[#fff] lg:text-lg 2xl:text-3xl">
              Amplify brand impact with EnterpriseBuzz AI’s unstoppable
              AI-Driven Digital Marketing—boost ROI, outrank rivals, and
              dominate online engagements worldwide, faster than ever.
            </p>

            <button
              onClick={(e) => {
                e.preventDefault();
                openCalendly();
              }}
              className="-ml-12 lg:-ml-12 -mt-4 transition duration-200 w-[16rem] xl:w-[18rem] 2xl:w-[20rem]"
            >
              <img src="./buttons/Get Started.svg" alt="" />
            </button>
          </div>
        </div>
      </div>

      {/*   AI-Driven Video Commercial ++++++++++++++++++++++++++++++++++++++++++++++++ */}
      <div
        id="comVideo"
        className="w-full py-10 px-2 lg:px-24  bg-no-repeat bg-center 2xl:bg-cover"
        style={{
          "background-image": "url('../bg/commercebg.png')",
        }}
      >
        <div className=" m-auto space-y-6 md:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-16 py-10 md:py-20 lg:py-28 2xl:py-32 px-2">
          <div className="hidden lg:block w-full lg:w-6/12">
            <img src="./CommerceScreen.svg" alt="" />
          </div>
          <div className="w-full lg:w-6/12">
            <h2 className="w-[12rem] 2xl:w-[17rem] text-center text-xs text-[#000] bg-[#fff]/40 p-2 rounded-full 2xl:text-lg">
              AI-Driven Video Commercial
            </h2>
            <h2 className="my-3 text-2xl text-[#fff] font-semibold md:text-4xl 2xl:text-6xl">
              AI-Driven Video Commercial
            </h2>
            <p className="text-[#fff] lg:text-lg 2xl:text-3xl">
              Elevate your brand with EnterpriseBuzz AI’s unstoppable, AI-driven
              video commercial—seamlessly merging advanced visuals and fearless
              creativity for unmatched market impact.
            </p>
            <div className="mt-3 lg:hidden w-full lg:w-6/12">
              <img src="./CommerceScreen.svg" alt="" />
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
               openCalendly();
              }}
              className="-ml-12 lg:-ml-12 -mt-4 transition duration-200 w-[16rem] xl:w-[18rem] 2xl:w-[20rem]"
            >
              <img src="./buttons/Get Started.svg" alt="" />
            </button>
          </div>
        </div>
      </div>

      {/* AI-Driven Call Agent ++++++++++++++++++++++++++++++++++++++++++++++++ */}
      <div
        id="callAgent"
        className="py-10 px-2 lg:px-24 bg-[center_left_-70rem] bg-no-repeat sm:bg-center 2xl:bg-cover"
        style={{
          "background-image": "url('./bg/marketingbg.png')",
        }}
      >
        <div className=" m-auto space-y-6 md:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-12 py-20 lg:py-28 2xl:py-32 px-2">
          <div className="w-10/12 lg:w-6/12">
            <h2 className="w-[10rem] 2xl:w-[13rem] text-center text-xs text-[#fff] bg-[#fff]/40 p-2 rounded-full 2xl:text-lg">
              AI-Driven Call Agent
            </h2>
            <h2 className="my-3 text-2xl text-[#fff] font-semibold md:text-4xl 2xl:text-6xl">
              AI-Driven Call Agent
            </h2>
            <p className="text-[#fff] lg:text-lg 2xl:text-3xl">
              Provide your Customers 24/7 receptionist with EnterpriseBuzz AI’s
              Virtual Call Agent, powered by advanced data. Serve customers
              around the clock at a fraction of the cost—ensuring zero missed
              opportunities and 100% conversion retention.
            </p>

            <button
              onClick={(e) => {
                e.preventDefault();
                openCalendly();
              }}
              className="-ml-12 lg:-ml-12 -mt-4 transition duration-200 w-[16rem] xl:w-[18rem] 2xl:w-[20rem]"
            >
              <img src="./buttons/Get Started.svg" alt="" />
            </button>
          </div>
        </div>
      </div>

      {/* Services +++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      <div
        className="py-10 px-2 lg:px-24 bg-no-repeat bg-center 2xl:bg-cover"
        style={{
          "background-image": "url('./bg/Servicesbg.svg')",
        }}
      >
        <AnimatePresence>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          >
            <button
              id="web"
              onClick={openCalendly}
              className="w-full cursor-pointer transition transform hover:scale-105"
            >
              <img src="../services/service.png" alt="pics" />
            </button>
            <button
              id="branding"
              onClick={openCalendly}
              className="w-full cursor-pointer transition transform hover:scale-105"
            >
              <img src="./services/service1.svg" alt="pics" />
            </button>
            <button
              id="promoDesign"
              onClick={openCalendly}
              className="w-full cursor-pointer transition transform hover:scale-105"
            >
              <img src="./services/service2.png" alt="pics" />
            </button>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4"
          >
            <button
              id="emailMarketing"
              onClick={openCalendly}
              className="w-full cursor-pointer transition transform hover:scale-105"
            >
              <img src="./services/service3.svg" alt="pics" />
            </button>
            <button
              id="seoMarketing"
              onClick={openCalendly}
              className="w-full cursor-pointer transition transform hover:scale-105"
            >
              <img src="./services/service4.svg" alt="pics" />
            </button>
            <button
              id="socialMarketing"
              onClick={openCalendly}
              className="w-full cursor-pointer transition transform hover:scale-105"
            >
              <img src="./services/service5.svg" alt="pics" />
            </button>
            <button
              id="nativeAds"
              onClick={openCalendly}
              className="w-full cursor-pointer transition transform hover:scale-105"
            >
              <img src="./services/service6.svg" alt="pics" />
            </button>
            <button
              id="logoDesign"
              onClick={openCalendly}
              className="w-full cursor-pointer transition transform hover:scale-105"
            >
              <img src="./services/service7.svg" alt="pics" />
            </button>
            <button
              id="leadGen"
              onClick={openCalendly}
              className="w-full cursor-pointer transition transform hover:scale-105"
            >
              <img src="./services/service8.svg" alt="pics" />
            </button>
            <button
              id="videography"
              onClick={openCalendly}
              className="w-full cursor-pointer transition transform hover:scale-105"
            >
              <img src="./services/service9.svg" alt="pics" />
            </button>
            <button
              id="photography"
              onClick={openCalendly}
              className="w-full cursor-pointer transition transform hover:scale-105"
            >
              <img src="./services/service10.svg" alt="pics" />
            </button>
            <button
              id="UGC"
              onClick={openCalendly}
              className="w-full cursor-pointer transition transform hover:scale-105"
            >
              <img src="./services/service11.svg" alt="pics" />
            </button>
            <button
              id="chatbot"
              onClick={openCalendly}
              className="w-full cursor-pointer transition transform hover:scale-105"
            >
              <img src="./services/service12.svg" alt="pics" />
            </button>
            <button
              id="emailAutomation"
              onClick={openCalendly}
              className="w-full cursor-pointer transition transform hover:scale-105"
            >
              <img src="./services/service13.svg" alt="pics" />
            </button>
            <button
              id="podcast"
              onClick={openCalendly}
              className="w-full cursor-pointer transition transform hover:scale-105"
            >
              <img src="./services/service14.svg" alt="pics" />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* How Does EnterpriseBuzz AI Work? Section +++++++++++++++++++++++++++++++++++++++++++ */}
      <HowWeWork />

      {/* social ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      <div
        className="py-10 lg:py-20 px-2 lg:px-24  flex flex-col  items-center  justify-center bg-no-repeat bg-center 2xl:bg-cover"
        style={{
          "background-image": "url('./bg/bobbg.svg')",
        }}
      >
        <h2 className="text-sm text-[#000] font-bold  text-center md:text-2xl xl:text-4xl lg:w-[35rem] xl:w-[55rem]  ">
          EnterpriseBuzz AI is your partner in deploying sophisticated marketing
          strategies & tools
        </h2>
        <h2 className="text-[10px] text-[#0C212C] text-center md:text-sm xl:text-lg md:w-[44rem] xl:w-[54rem]">
          Our mission is to empower businesses with the most innovative and
          aggressive marketing by leveraging artificial intelligence & our
          signature fine-tuned A/B/C techniques that drive engagement and boost
          revenue.
        </h2>

        <div className=" m-auto space-y-6 md:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-12 py-5 md:py-10 px-2 lg:px-16">
          <div className="w-full lg:w-[35rem]">
            <img
              src="../Generate-1.png"
              alt="i"
              className="rounded-2xl w-full"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-[#212529] font-bold md:text-4xl 2xl:text-6xl">
              Generate
            </h2>
            <p className="mt-6 font-normal text-[#62747d] lg:text-lg 2xl:text-xl">
              At EnterpriseBuzz AI, assumptions are relics of the past. We wield
              the transformative power of our proprietary AI suite, including
              the unparalleled Buzzer, to transcend traditional marketing
              boundaries. Buzz AI isn't just a tool; it's your gateway to
              precision. By analyzing and syn
              {more1
                ? "thesizing custom data on your business's audience—spanning demographic, psychographic, geographic, and behavioural dimensions—we craft hyper-targeted marketing strategies."
                : "..."}
              <span className={more1 ? "block" : "hidden"}>
                These strategies are meticulously designed to penetrate the most
                profitable marketing channels and verticals, ensuring your
                message doesn't just reach its audience but resonates deeply,
                catalyzing effective results.
              </span>
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
                  Read Less
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setMore1(true);
                  }}
                  className="w-[7rem] rounded-lg text-sm  py-3 text-center text-white  transition duration-200 bg-gradient-to-r from-red-500 via-pink-400 to-orange-300 hover:bg-[#757E7E]"
                >
                  Read More
                </button>
              )}
            </div>
          </div>
        </div>

        <div className=" m-auto space-y-6 md:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-12 py-5 md:py-10 px-2 lg:px-16">
          <div className="lg:hidden">
            <img src="../Hero image.png" alt="i" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-[#212529] font-bold md:text-4xl 2xl:text-6xl">
              Execute
            </h2>
            <p className="mt-6 font-normal text-[#62747d] lg:text-lg 2xl:text-xl">
              At EnterpriseBuzz AI, execution is not just a part of our
              strategy; it is the heart of our battle plan. In the relentless
              arena of digital marketing, we deploy an arsenal that covers the
              entire spectrum: search engine mastery, precision-targeted email
              marketing, compelling
              {more2
                ? " video marketing, authoritative influencer engagements, commanding social media campaigns, unmissable digital display ads, explosive viral initiatives, and revolutionary user-generated content strategies."
                : "..."}
              <span className={more2 ? "block" : "hidden"}>
                Our battlefield? The digital domain. Our weapons? The ABC
                (Aggressive, Bold, Controversial) Ethos, combined with
                state-of-the-art technology wielded by a brigade of the
                fiercest, most passionate digital warriors in the industry.
              </span>
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
                  Read Less
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setMore2(true);
                  }}
                  className="w-[7rem] rounded-lg text-sm  py-3 text-center text-white  transition duration-200 bg-gradient-to-r from-red-500 via-pink-400 to-orange-300 hover:bg-[#757E7E]"
                >
                  Read More
                </button>
              )}
            </div>
          </div>
          <div className="hidden lg:block sm:w-[35rem]">
            <img src="../Hero image.png" alt="i" />
          </div>
        </div>

        <div className=" m-auto space-y-6 md:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-12 py-5 md:py-10 px-2 lg:px-16">
          <div className="w-full lg:w-[35rem]">
            <img src="../Measure.png" alt="i" className="rounded-xl" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-[#212529] font-bold md:text-4xl 2xl:text-6xl">
              Measure
            </h2>
            <p className="mt-6 font-normal text-[#62747d] lg:text-lg 2xl:text-xl">
              Embracing the maxim 'If you can't measure it, you can't improve
              it,' EnterpriseBuzz AI zealously champions the doctrine that the
              essence of marketing dominance is forged in the crucible of
              rigorous analysis.
              <span className={more3 ? "block" : "hidden"}>
                Our fervor for this philosophy eclipses the conventional aim of
                expanding our client roster, directing our focus instead toward
                the palpable achievements and exponential enhancements of every
                campaign under our stewardship.
              </span>
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
                  Read Less
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setMore3(true);
                  }}
                  className="w-[7rem] rounded-lg text-sm  py-3 text-center text-white  transition duration-200 bg-gradient-to-r from-red-500 via-pink-400 to-orange-300 hover:bg-[#757E7E]"
                >
                  Read More
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section +++++++++++++++++++++++++++++++++++++++++++ */}
      <Technology />

      {/* Portfolio Section +++++++++++++++++++++++++++++++++++++++++++ */}
      <Portfolio />

      {/* Logo Grid Section +++++++++++++++++++++++++++++++++++++++++++ */}
      <LogoGrid />

      {/* Testimonies Section +++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      <div className=" bg-[#fff] py-10  ">
        <h2 className="text-sm text-[#000] font-semibold  text-center md:text-3xl xl:text-4xl pb-3 mx-auto">
          What our clients say about us
        </h2>
        <h2 className="mx-auto text-[#36474F] text-center font-semibold text-sm xl:text-xl md:w-[44rem] xl:w-[48rem] flex items-center justify-center gap-x-2">
          <img
            className="object-cover object-center w-auto h-5 md:w-auto md:h-9 xl:h-10"
            src="../Frame 41.png"
            alt=""
          />
          over 1k clients trust us
        </h2>
        <section className="mx-auto  justify-center  my-5 lg:mt-10 ">
          <div className="w-full ">
            <TestimonySlide />
          </div>
        </section>
      </div>

      {/* Quote Section +++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      <div className="p-2 lg:p-28 bg-[#F4F4F4]  mx-auto">
        <div className=" m-auto  bg-gradient-to-r from-pink-100 to-blue-100 rounded-lg shadow-md text-gray-800 leading-relaxed py-10 px-5 lg:px-16 ">
          <h2 className="text-sm text-[#000]  text-center md:text-xl xl:text-2xl 2xl:text-3xl leading-[1.5rem] lg:leading-[3rem] 2xl:leading-[4.5rem]">
            To conquer today's fiercely competitive marketplace, we adopt the
            unwavering resolve of Winston Churchill's strategic vision. We do
            not merely engage, but relentlessly attack from every conceivable
            channel, leaving no stone unturned in our pursuit of your
            marketplace victory. Like Churchill's rallying cry, we fight on
            every front: on the beaches of social media, the landing grounds of
            digital advertising, the fields of content creation, and the streets
            of viral marketing. We ascend the hills of SEO and conquer the peaks
            of email campaigns. In this relentless pursuit, surrender is not an
            option. We harness the power of all social media platforms and
            marketing channels to drive your message forward, ensuring that your
            presence is felt and your impact is undeniable.
          </h2>
        </div>
      </div>

      {/* latest updates +++++++++++++++++++++++++++++++++++++++++++++ */}
      <LatestUpdates />

      {/* CTA Section +++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      <div
        className=" bg-[#fff] py-10 2xl:py-20 px-2 lg:px-16  flex flex-col  items-center  justify-center gap-x-1 bg-no-repeat  bg-cover"
        style={{
          "background-image": "url('./bg/CTAbg.svg')",
        }}
      >
        <div className=" lg:px-16 2xl:px-24 mx-auto 2xl:w-full">
          <div
            className="w-full bg-center bg-cover hidden md:block h-[18rem] lg:h-[21rem] 2xl:h-[33rem] rounded-2xl p-5 lg:p-20"
            style={{
              "background-image": "url('./bg/CTABanner.svg')",
            }}
          >
            <div className="md:flex items-center justify-between w-full h-full  ">
              <h1 className="text-5xl font-semibold 2xl:font-bold text-white md:py-3 md:w-[26rem] 2xl:w-[50rem] lg:text-5xl 2xl:text-7xl">
                Turbocharge your brand's potential right now!
              </h1>

              <div className="w-[20rem] lg:w-[22rem] 2xl:w-[38rem]  space-y-10">
                <p className="mt-3  font-semibold text-[#fff] 2xl:text-2xl">
                  Ready to ignite your marketplace dominance? Let's conjure up
                  some marketing wizardry together.
                </p>

                <div className=" flex gap-x-4  items-center">
                  <button
                    onClick={openCalendly}
                    className="2xl:text-3xl px-6 lg:px-12 2xl:px-16 py-2.5 text-white font-semibold rounded-lg bg-gradient-to-r from-orange-500 to-yellow-400 shadow-md hover:shadow-lg transition-all"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile View ++++++++++++++++++++++++++++++++++++++++ */}
          <div
            className="w-full bg-center bg-cover md:hidden h-auto min-[400px]:h-[46rem] max-[330px]:h-[36rem] max-[400px]:h-[40rem] rounded-2xl p-5 "
            style={{
              "background-image": "url('./bg/mCTA Banner.svg')",
            }}
          >
            <div className="w-full px-2  py-9 sm:py-12">
              <h1 className=" font-semibold text-white py-3 min-[350px]:text-[48px] max-[350px]:text-[40px]  leading-[3rem]">
                Turbocharge your brand's potential right now!
              </h1>

              <div className="sm:w-[22rem]  min-[350px]:space-y-10 max-[350px]:space-y-6">
                <p className="mt-3 text-2xl  font-semibold text-[#fff] max-[350px]:leading-[2rem] min-[350px]:leading-[3rem]">
                  Ready to ignite your marketplace dominance? Let's conjure up
                  some marketing wizardry together.
                </p>

                <div className=" flex gap-x-4  items-center">
                  <button
                   onClick={openCalendly}
                    className="px-6 lg:px-12 py-2.5 text-white font-semibold rounded-lg bg-gradient-to-r from-orange-500 to-yellow-400 shadow-md hover:shadow-lg transition-all"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
