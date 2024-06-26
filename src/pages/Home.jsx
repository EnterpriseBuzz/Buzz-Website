import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import TestimonySlide from "../components/TestimonySlide";
import MarketingSlide from "../components/MarketingSlide";
import PortfolioSlide from "../components/PortfolioSlide";
import CompanySlide from "../components/CompanySlide";

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

  return (
    <div className="  text-gray-600 ">
      <SEO
        title="EnterpriseBuzz | Home"
        description="EnterpriseBuzz is a pioneering media and technology company, dedicated to propelling businesses forward through innovative advertising, branding, CRM, and marketing tools."
        name="EnterpriceBuzz"
        type="description"
      />
      {/* Hero ++++++++++++++++++++++++++ */}

      <div className="container m-auto space-y-6 md:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-12 py-5 md:py-10 px-2 lg:px-16">
        <div className="md:7/12 lg:w-6/12">
          <h2 className="text-2xl text-[#212529] font-medium md:text-4xl">
            Unlock the Power of massive Digital Growth for your business
          </h2>
          <p className="mt-6 font-light text-[#62747d]">
            Are you ready to propel your business to the zenith of marketplace
            dominance? At EnterpriseBuzz, we're not just another marketing
            technology company – we're your partners in success.
          </p>

          <div className=" flex gap-x-4 mt-5 items-center">
             <a
              href="https://app.enterprisebuzzai.com/register"
              className="w-[14rem] bg-[#FFCC00] rounded-lg text-sm  py-4 text-center text-[#000]  transition duration-200 hover:bg-[#757E7E] hover:text-white"
            >
              Start your free 7-day trial
            </a>
          </div>
        </div>

        <div className="sm:w-[35rem]">
          <img src="../PIC4.png" alt="i" />
        </div>
      </div>
      {/* CTA +++++++++++++++++++++++++++++ */}

      <section className="mx-auto  justify-center  py-10 bg-[#F5F5F5]">
        <h2 className="text-xs text-[#36474F] text-center md:text-base mx-auto">
          Over 10,000+ businesses start every year
        </h2>
        <div className="w-full py-7">
          <CompanySlide />
        </div>
      </section>

      <div className="container m-auto space-y-6 md:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-12 py-5 md:py-10 px-2 lg:px-16">
        <div className="sm:w-[35rem]">
          <div className="wrap-video ">
            <video
              className="object-cover h-96 w-full bg-black cursor-pointer rounded-xl"
              autoPlay
              loop
              controls
            >
              <source
                src="https://videos.pexels.com/video-files/7414127/7414127-sd_640_360_24fps.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="md:7/12 lg:w-6/12">
          <h2 className="text-2xl text-[#212529] font-medium md:text-4xl">
            About enterprisebuzz
          </h2>
          <p className="mt-6 font-light text-[#62747d]">
            EnterpriseBuzz stands out by actively managing and optimizing
            marketing strategies for our clients, ensuring they get value for
            every dollar spent. Unlike other marketing software companies that
            leave users to navigate complex systems on their own, we do the
            heavy lifting. Our approach is founded on the principle that to
            achieve extraordinary results, one must take extraordinary measures.
          </p>
          <p className="mt-6 font-light text-[#62747d]">
            This is why we embrace a marketing philosophy that is Aggressive,
            Bold, and Controversial (ABC). We're not just a software company;
            we're pioneers at the digital marketing frontier, utilizing the
            power of artificial intelligence to revolutionize your business's
            marketplace dominance
          </p>
          <div className=" flex gap-x-4 mt-5 items-center">
            <Link
              to="/about"
              className="w-[6rem] bg-[#DA281C] rounded-lg text-xs py-3 text-center text-white  transition duration-200 hover:bg-[#757E7E]"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div className="container px-5 lg:px-16   mx-auto mb-5">
        <div className="container m-auto  bg-[#F5F5F5] py-10 px-5 lg:px-24  flex flex-col  items-center  justify-center  rounded-xl">
          <h2 className="text-xs text-[#000]  italic text-center md:text-4xl ">
            “It’s important to remember your competitor is only one mouse click
            away.”
          </h2>
          <h2 className="text-[8px] text-[#000] font-bold md:text-base pt-5">
            Douglas Warner III{" "}
            <span className="font-light text-[7px] md:text-sm">
              Former CEO, J.P. Morgan Chase & Co
            </span>
          </h2>
        </div>
      </div>

      {/* social */}
      <div className=" bg-[#F5F5F5] py-10 px-2 lg:px-24  flex flex-col  items-center  justify-center gap-x-1 ">
        <h2 className="text-sm text-[#000] font-semibold  text-center md:text-2xl lg:w-[35rem] ">
          EnterpriseBuzz is your partner in deploying sophisticated marketing
          strategies & tools
        </h2>
        <h2 className="text-[10px] text-[#000] text-center font-light md:text-sm md:w-[44rem] lg:w-[50rem]">
          Our mission is to empower businesses with the most innovative and
          aggressive marketing by leveraging artificial intelligence & our
          signature fine-tuned A/B/C techniques that drive engagement and boost
          revenue.
        </h2>

        <div className="container m-auto space-y-6 md:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-12 py-5 md:py-10 px-2 lg:px-16">
          <div className="w-full lg:w-[35rem]">
            <img
              src="../Generate-1.png"
              alt="i"
              className="rounded-2xl w-full"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-[#212529] font-medium md:text-4xl">
              Generate
            </h2>
            <p className="mt-6 font-light text-[#62747d]">
              At EnterpriseBuzz, assumptions are relics of the past. We wield
              the transformative power of our proprietary AI suite, including
              the unparalleled Buzzer, to transcend traditional marketing
              boundaries. Buzzer isn't just a tool; it's your gateway to
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
        </div>

        <div className="container m-auto space-y-6 md:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-12 py-5 md:py-10 px-2 lg:px-16">
          <div className="lg:hidden">
            <img src="../Hero image.png" alt="i" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-[#212529] font-medium md:text-4xl">
              Execute
            </h2>
            <p className="mt-6 font-light text-[#62747d]">
              At EnterpriseBuzz, execution is not just a part of our strategy;
              it is the heart of our battle plan. In the relentless arena of
              digital marketing, we deploy an arsenal that covers the entire
              spectrum: search engine mastery, precision-targeted email
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
          <div className="hidden lg:block sm:w-[35rem]">
            <img src="../Hero image.png" alt="i" />
          </div>
        </div>

        <div className="container m-auto space-y-6 md:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-12 py-5 md:py-10 px-2 lg:px-16">
          <div className="w-full lg:w-[35rem]">
            <img src="../Measure.png" alt="i" className="rounded-xl" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-[#212529] font-medium md:text-4xl">
              Measure
            </h2>
            <p className="mt-6 font-light text-[#62747d]">
              Embracing the maxim 'If you can't measure it, you can't improve
              it,' EnterpriseBuzz zealously champions the doctrine that the
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
        </div>

        <div className="container px-2 lg:px-16   mx-auto mb-5">
          <div className="container m-auto  bg-[#fff] py-10 px-5 lg:px-16    rounded-xl">
            <h2 className="text-xs text-[#000]  text-center md:text-xl leading-[1.5rem] lg:leading-[3rem] ">
              To conquer today's fiercely competitive marketplace, we adopt the
              unwavering resolve of Winston Churchill's strategic vision. We do
              not merely engage, but relentlessly attack from every conceivable
              channel, leaving no stone unturned in our pursuit of your
              marketplace victory. Like Churchill's rallying cry, we fight on
              every front: on the beaches of social media, the landing grounds
              of digital advertising, the fields of content creation, and the
              streets of viral marketing. We ascend the hills of SEO and conquer
              the peaks of email campaigns. In this relentless pursuit,
              surrender is not an option. We harness the power of all social
              media platforms and marketing channels to drive your message
              forward, ensuring that your presence is felt and your impact is
              undeniable.
            </h2>
          </div>
        </div>
      </div>
      <section className="mx-auto  justify-center  py-10 bg-[#F5F5F5]">
        <h2 className="text-sm text-[#000] font-semibold  text-center md:text-3xl mb-8 mx-auto">
          Our Digital Marketing Verticals
        </h2>
        <div className="w-full ">
          <MarketingSlide />
        </div>
      </section>
      <section className="mx-auto  justify-center  py-10 bg-[#F5F5F5]">
        <h2 className="text-sm text-[#000] font-semibold  text-center md:text-3xl mb-8 mx-auto">
          Our portfolio
        </h2>
        <div className="w-full ">
          <PortfolioSlide />
        </div>
      </section>
      <div className=" bg-[#fff] pt-10 px-2  ">
        {/* Testimonies */}
        <h2 className="text-sm text-[#000] font-semibold  text-center md:text-3xl lg:w-[35rem] mx-auto">
          What our clients say about us
        </h2>
        <h2 className="mx-auto text-[10px] text-[#36474F] text-center font-semibold md:text-sm md:w-[44rem] lg:w-[44rem] flex items-center justify-center gap-x-2">
          <img
            className="object-cover object-center w-auto h-5 md:w-auto md:h-9 "
            src="../Frame 41.png"
            alt=""
          />{" "}
          over 10,000+ clients trust us
        </h2>
        <section className="mx-auto  justify-center md:space-x-2 my-5 lg:mt-10 ">
          <div className="w-full ">
            <TestimonySlide />
          </div>
        </section>
      </div>
      <div className=" bg-[#fff] py-10 px-2 lg:px-24  flex flex-col  items-center  justify-center gap-x-1 ">
        <div className="container lg:px-16 mx-auto my-20">
          <div
            className="w-full bg-center bg-cover h-[15rem] sm:h-[15rem] lg:h-[20rem] rounded-2xl p-5 lg:p-20"
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
                  Ready to ignite your marketplace dominance? Let's conjure up
                  some marketing wizardry together.
                </p>

                <div className=" flex gap-x-4 mt-5 items-center">
                  <a
                    href="https://app.enterprisebuzzai.com/register"
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

export default Home;
