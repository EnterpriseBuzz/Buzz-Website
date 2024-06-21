import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Services() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  // const [more1, setMore1] = useState(false);
  // const [more2, setMore2] = useState(false);
  // const [more3, setMore3] = useState(false);
  // const [more4, setMore4] = useState(false);
  // const [more5, setMore5] = useState(false);
  // const [more6, setMore6] = useState(false);
  // const [more7, setMore7] = useState(false);
  // const [more8, setMore8] = useState(false);
  // const [more9, setMore9] = useState(false);
  return (
    <div>
      <div class=" text-gray-600">
        <div
          class="w-full bg-center bg-cover h-[15rem] lg:h-[25rem] "
          style={{
            "background-image": "url('./hbg.png')",
          }}
        >
          <div class="flex items-center justify-center w-full h-full  ">
            <div class="text-center">
              <h1 class="text-2xl font-bold text-white py-3 lg:text-7xl">
                Our Services
              </h1>
              <h1 class="text-sm lg:text-base font- text-white w-full md:w-[28rem] ">
                We offer all forms of media services
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
              Marketing Design
            </h2>
            <p className="mt-6 font-light text-[#62747d]">
              At EnterpriseBuzz, assumptions are relics of the past. We wield
              the transformative power of our proprietary AI suite, including
              the unparalleled Buzzer, to transcend traditional marketing
              boundaries. Buzzer isn't just a tool; it's your gateway to
              precision. By analyzing and synthesizing custom data on your
              business's audience—spanning demographic, psychographic,
              geographic, and behavioural dimensions—we craft hyper-targeted
              marketing strategies. These strategies are meticulously designed
              to penetrate the most profitable marketing channels and verticals,
              ensuring your message doesn't just reach its audience but
              resonates deeply, catalyzing effective results.
            </p>

            <div className=" flex gap-x-4 mt-5 items-center">
              <Link
                to="/login"
                className="w-[7rem] bg-[#DA281C] rounded-lg text-sm  py-3 text-center text-white  transition duration-200 hover:bg-[#757E7E]"
              >
                Join us today
              </Link>
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
              Website Designs & Optimizations
            </h2>
            <p className="mt-6 font-light text-[#62747d]">
              At EnterpriseBuzz, execution is not just a part of our strategy;
              it is the heart of our battle plan. In the relentless arena of
              digital marketing, we deploy an arsenal that covers the entire
              spectrum: search engine mastery, precision-targeted email
              marketing, compelling video marketing, authoritative influencer
              engagements, commanding social media campaigns, unmissable digital
              display ads, explosive viral initiatives, and revolutionary
              user-generated content strategies. Our battlefield? The digital
              domain. Our weapons? The ABC (Aggressive, Bold, Controversial)
              Ethos, combined with state-of-the-art technology wielded by a
              brigade of the fiercest, most passionate digital warriors in the
              industry.
            </p>

            <div className=" flex gap-x-4 mt-5 items-center">
              <Link
                to="/about"
                className="w-[7rem] bg-[#DA281C] rounded-lg text-sm  py-3 text-center text-white  transition duration-200 hover:bg-[#757E7E]"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>

        <div className="container m-auto space-y-6 md:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-x-12 py-5 md:py-10 px-2 lg:px-16">
          <div className="lg:hidden">
            <img src="../ser6.png" alt="i" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-[#212529] font-medium md:text-4xl">
              Mobile App Design & Marketing
            </h2>
            <p className="mt-6 font-light text-[#62747d]">
              Embracing the maxim 'If you can't measure it, you can't improve
              it,' EnterpriseBuzz zealously champions the doctrine that the
              essence of marketing dominance is forged in the crucible of
              rigorous analysis. Our fervor for this philosophy eclipses the
              conventional aim of expanding our client roster, directing our
              focus instead toward the palpable achievements and exponential
              enhancements of every campaign under our stewardship.
            </p>

            <div className=" flex gap-x-4 mt-5 items-center">
              <Link
                to="/about"
                className="w-[7rem] bg-[#DA281C] rounded-lg text-sm  py-3 text-center text-white  transition duration-200 hover:bg-[#757E7E]"
              >
                Read more
              </Link>
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
              Video/Animation Marketing
            </h2>
            <p className="mt-6 font-light text-[#62747d]">
              At EnterpriseBuzz, assumptions are relics of the past. We wield
              the transformative power of our proprietary AI suite, including
              the unparalleled Buzzer, to transcend traditional marketing
              boundaries. Buzzer isn't just a tool; it's your gateway to
              precision. By analyzing and synthesizing custom data on your
              business's audience—spanning demographic, psychographic,
              geographic, and behavioural dimensions—we craft hyper-targeted
              marketing strategies. These strategies are meticulously designed
              to penetrate the most profitable marketing channels and verticals,
              ensuring your message doesn't just reach its audience but
              resonates deeply, catalyzing effective results.
            </p>

            <div className=" flex gap-x-4 mt-5 items-center">
              <Link
                to="/login"
                className="w-[7rem] bg-[#DA281C] rounded-lg text-sm  py-3 text-center text-white  transition duration-200 hover:bg-[#757E7E]"
              >
                Join us today
              </Link>
            </div>
          </div>
        </div>

        <div className="container m-auto space-y-6 md:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-x-12 py-5 md:py-10 px-2 lg:px-16">
          <div className="lg:hidden">
            <img src="../ser4.png" alt="i" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-[#212529] font-medium md:text-4xl">
              Email Marketing
            </h2>
            <p className="mt-6 font-light text-[#62747d]">
              At EnterpriseBuzz, execution is not just a part of our strategy;
              it is the heart of our battle plan. In the relentless arena of
              digital marketing, we deploy an arsenal that covers the entire
              spectrum: search engine mastery, precision-targeted email
              marketing, compelling video marketing, authoritative influencer
              engagements, commanding social media campaigns, unmissable digital
              display ads, explosive viral initiatives, and revolutionary
              user-generated content strategies. Our battlefield? The digital
              domain. Our weapons? The ABC (Aggressive, Bold, Controversial)
              Ethos, combined with state-of-the-art technology wielded by a
              brigade of the fiercest, most passionate digital warriors in the
              industry.
            </p>

            <div className=" flex gap-x-4 mt-5 items-center">
              <Link
                to="/about"
                className="w-[7rem] bg-[#DA281C] rounded-lg text-sm  py-3 text-center text-white  transition duration-200 hover:bg-[#757E7E]"
              >
                Read more
              </Link>
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
              Illustration design
            </h2>
            <p className="mt-6 font-light text-[#62747d]">
              Embracing the maxim 'If you can't measure it, you can't improve
              it,' EnterpriseBuzz zealously champions the doctrine that the
              essence of marketing dominance is forged in the crucible of
              rigorous analysis. Our fervor for this philosophy eclipses the
              conventional aim of expanding our client roster, directing our
              focus instead toward the palpable achievements and exponential
              enhancements of every campaign under our stewardship.
            </p>

            <div className=" flex gap-x-4 mt-5 items-center">
              <Link
                to="/about"
                className="w-[7rem] bg-[#DA281C] rounded-lg text-sm  py-3 text-center text-white  transition duration-200 hover:bg-[#757E7E]"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
        <div className="container m-auto space-y-6 md:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-x-12 py-5 md:py-10 px-2 lg:px-16">
          <div className="lg:hidden">
            <img src="../ser2.png" alt="i" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-[#212529] font-medium md:text-4xl">
              Logo & Brand Identity
            </h2>
            <p className="mt-6 font-light text-[#62747d]">
              Embracing the maxim 'If you can't measure it, you can't improve
              it,' EnterpriseBuzz zealously champions the doctrine that the
              essence of marketing dominance is forged in the crucible of
              rigorous analysis. Our fervor for this philosophy eclipses the
              conventional aim of expanding our client roster, directing our
              focus instead toward the palpable achievements and exponential
              enhancements of every campaign under our stewardship.
            </p>

            <div className=" flex gap-x-4 mt-5 items-center">
              <Link
                to="/about"
                className="w-[7rem] bg-[#DA281C] rounded-lg text-sm  py-3 text-center text-white  transition duration-200 hover:bg-[#757E7E]"
              >
                Read more
              </Link>
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
              SEO
            </h2>
            <p className="mt-6 font-light text-[#62747d]">
              Embracing the maxim 'If you can't measure it, you can't improve
              it,' EnterpriseBuzz zealously champions the doctrine that the
              essence of marketing dominance is forged in the crucible of
              rigorous analysis. Our fervor for this philosophy eclipses the
              conventional aim of expanding our client roster, directing our
              focus instead toward the palpable achievements and exponential
              enhancements of every campaign under our stewardship.
            </p>

            <div className=" flex gap-x-4 mt-5 items-center">
              <Link
                to="/about"
                className="w-[7rem] bg-[#DA281C] rounded-lg text-sm  py-3 text-center text-white  transition duration-200 hover:bg-[#757E7E]"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
