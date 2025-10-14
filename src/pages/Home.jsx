import React, {
  useEffect,
  useState,
  lazy,
  Suspense,
  useMemo,
  useCallback,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Critical components loaded immediately
import SEO from "../components/SEO";

// Lazy load non-critical components
const TestimonySlide = lazy(() => import("../components/TestimonySlide"));
const Portfolio = lazy(() => import("../components/Portfolio"));
const CompanySlide = lazy(() => import("../components/CompanySlide"));
const MarketingOverview = lazy(() => import("../components/MarketingOverview"));
const LogoGrid = lazy(() => import("../components/LogoGrid"));
const Technology = lazy(() => import("../components/Technology"));
const HowWeWork = lazy(() => import("../components/HowWeWork"));
const CTA = lazy(() => import("../components/CTA"));
const Graphics = lazy(() => import("../components/Graphics"));

// Loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
  </div>
);

function Home() {
  const [more1, setMore1] = useState(false);
  const [more2, setMore2] = useState(false);
  const [more3, setMore3] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const navigate = useNavigate();

  // Memoized scroll to top effect
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Memoized callback for Calendly
  const openCalendly = useCallback(() => {
    window.open("https://calendly.com/enterprisebuzzai", "_blank");
  }, []);

  // Memoized navigation handlers
  const navigationHandlers = useMemo(
    () => ({
      web: () => navigate("services/web"),
      branding: () => navigate("services/branding"),
      emailMarketing: () => navigate("services/email-marketing"),
      seoMarketing: () => navigate("services/seo-marketing"),
      socialMarketing: () => navigate("services/social-media-marketing"),
      logoDesign: () => navigate("services/logo-design"),
    }),
    [navigate]
  );

  // Memoized toggle handlers
  const toggleHandlers = useMemo(
    () => ({
      more1: () => setMore1((prev) => !prev),
      more2: () => setMore2((prev) => !prev),
      more3: () => setMore3((prev) => !prev),
    }),
    []
  );

  // Preload critical images
  useEffect(() => {
    const criticalImages = [
      "./bg/redbg.svg",
      "../bg/commercebg.png",
      "./bg/marketingbg.png",
      "./bg/Servicesbg.svg",
    ];

    criticalImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div
      className="w-full text-gray-600 bg-[center_top_20rem] bg-no-repeat"
      style={{
       
      }}
    >
      <SEO
        title="EnterpriseBuzz AI | Home"
        description="EnterpriseBuzz AI is a pioneering media and technology company, dedicated to propelling businesses forward through innovative advertising, branding, CRM, and marketing tools."
        name="EnterpriseBuzz AI"
        type="description"
      />

      {/* Hero Section with optimized video loading */}
      <div className="wrap-video">
        {!isVideoLoaded && (
          <div className="h-full lg:h-[36rem] xl:h-full w-full bg-gray-900 flex items-center justify-center">
            <LoadingSpinner />
          </div>
        )}
        <video
          className={`object-cover h-full lg:h-[36rem] xl:h-full w-full bg-black cursor-pointer ${
            isVideoLoaded ? "block" : "hidden"
          }`}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          preload="metadata"
        >
          <source src="./HeroVid.mp4" type="video/mp4" />
        </video>
      </div>

      {/* CTA Section */}
      <section className="mx-auto justify-center py-10">
        <h2 className="md:text-base lg:text-lg text-[#414141] px-2 text-center font-semibold mx-auto w-full md:leading-[4.5rem]">
          Over 100,000,000 businesses start every year. <br /> The question of
          standing out is not just crucial—it is the difference between your
          business dominating or dying.
        </h2>
        <div className="w-full py-7">
          <Suspense fallback={<LoadingSpinner />}>
            <CompanySlide />
          </Suspense>
        </div>
      </section>

      {/* Quote Section with lazy loading */}
      <div className="px-5 lg:px-24 mx-auto mb-5">
        <picture>
          <source media="(max-width: 640px)" srcSet="../Mquote.svg" />
          <img
            src="../quote.svg"
            alt="Quote section"
            className="w-full h-full"
            loading="lazy"
          />
        </picture>
      </div>

      {/* AI-Driven Video Commercial */}

      {/* AI-Driven Call Agent */}

      {/* Services Section - Optimized with Intersection Observer */}
      <div
        className="py-10 px-2 lg:px-24 bg-no-repeat bg-center 2xl:bg-cover"
        style={{

        }}
      >
        <AnimatePresence>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          >
            {[
              {
                id: "web",
                handler: navigationHandlers.web,
                src: "../services/service.png",
              },
              {
                id: "branding",
                handler: navigationHandlers.branding,
                src: "./services/service1.svg",
              },
              {
                id: "promoDesign",
                handler: openCalendly,
                src: "./services/service2.png",
              },
              {
                id: "promoDesign2",
                handler: openCalendly,
                src: "./services/service3.png",
              },
              {
                id: "promoDesign3",
                handler: openCalendly,
                src: "./services/service4.png",
              },
              {
                id: "promoDesign4",
                handler: openCalendly,
                src: "./services/service5.png",
              },
            ].map((service, index) => (
              <button
                key={`service-${index}`}
                id={service.id}
                onClick={service.handler}
                className="w-full cursor-pointer transition transform hover:scale-105"
                aria-label={`Service ${index + 1}`}
              >
                <img
                  src={service.src}
                  alt={`Service ${index + 1}`}
                  loading="lazy"
                />
              </button>
            ))}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-3 px-auto"
          >
            {[
              {
                id: "emailMarketing",
                handler: navigationHandlers.emailMarketing,
                src: "./services/service6.png",
              },

              {
                id: "socialMarketing",
                handler: navigationHandlers.socialMarketing,
                src: "./services/service8.png",
              },
              {
                id: "logoDesign",
                handler: navigationHandlers.logoDesign,
                src: "./services/service10.png",
              },

              {
                id: "videography",
                handler: openCalendly,
                src: "./services/service12.png",
              },
              {
                id: "photography",
                handler: openCalendly,
                src: "./services/service13.png",
              },
              {
                id: "chatbot",
                handler: openCalendly,
                src: "./services/service15.png",
              },
            ].map((service, index) => (
              <button
                key={`service2-${index}`}
                id={service.id}
                onClick={service.handler}
                className="w-full cursor-pointer transition transform hover:scale-105"
                aria-label={service.id.replace(/([A-Z])/g, " $1").toLowerCase()}
              >
                <img src={service.src} alt={service.id} className="w-full" loading="lazy" />
              </button>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lazy loaded components with Suspense */}
      <Suspense fallback={<LoadingSpinner />}>
        <Graphics />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <HowWeWork />
      </Suspense>

      {/* Social Section */}
      <div
        className="py-10 lg:py-20 px-2 lg:px-24 flex flex-col items-center justify-center bg-no-repeat bg-center 2xl:bg-cover"
        style={{
          backgroundImage: "url('./bg/bobbg.svg')",
        }}
      >
        <h2 className="text-sm text-[#000] font-bold text-center md:text-2xl xl:text-4xl lg:w-[35rem] xl:w-[55rem]">
          EnterpriseBuzz AI is your partner in deploying sophisticated marketing
          strategies & tools
        </h2>
        <h2 className="text-[10px] text-[#0C212C] text-center md:text-sm xl:text-lg md:w-[44rem] xl:w-[54rem]">
          Our mission is to empower businesses with the most innovative and
          aggressive marketing by leveraging artificial intelligence & our
          signature fine-tuned A/B/C techniques that drive engagement and boost
          revenue.
        </h2>

        {/* Generate Section */}
        <div className="m-auto space-y-6 md:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-12 py-5 md:py-10 px-2 lg:px-16">
          <div className="w-full lg:w-[35rem]">
            <img
              src="../Generate-1.png"
              alt="Generate illustration"
              className="rounded-2xl w-full"
              loading="lazy"
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
            <div className="flex gap-x-4 mt-5 items-center">
              <button
                onClick={toggleHandlers.more1}
                className={`w-[7rem] rounded-lg text-sm py-3 text-center text-white transition duration-200 ${
                  more1
                    ? "bg-[#757E7E]"
                    : "bg-gradient-to-r from-red-500 via-pink-400 to-orange-300 hover:bg-[#757E7E]"
                }`}
                aria-label={more1 ? "Read Less" : "Read More"}
              >
                {more1 ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>

        {/* Execute Section */}
        <div className="m-auto space-y-6 md:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-12 py-5 md:py-10 px-2 lg:px-16">
          <div className="lg:hidden">
            <img
              src="../Hero image.png"
              alt="Execute illustration"
              loading="lazy"
            />
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
            <div className="flex gap-x-4 mt-5 items-center">
              <button
                onClick={toggleHandlers.more2}
                className={`w-[7rem] rounded-lg text-sm py-3 text-center text-white transition duration-200 ${
                  more2
                    ? "bg-[#757E7E]"
                    : "bg-gradient-to-r from-red-500 via-pink-400 to-orange-300 hover:bg-[#757E7E]"
                }`}
                aria-label={more2 ? "Read Less" : "Read More"}
              >
                {more2 ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
          <div className="hidden lg:block sm:w-[35rem]">
            <img
              src="../Hero image.png"
              alt="Execute illustration"
              loading="lazy"
            />
          </div>
        </div>

        {/* Measure Section */}
        <div className="m-auto space-y-6 md:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-12 py-5 md:py-10 px-2 lg:px-16">
          <div className="w-full lg:w-[35rem]">
            <img
              src="../Measure.png"
              alt="Measure illustration"
              className="rounded-xl"
              loading="lazy"
            />
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
            <div className="flex gap-x-4 mt-5 items-center">
              <button
                onClick={toggleHandlers.more3}
                className={`w-[7rem] rounded-lg text-sm py-3 text-center text-white transition duration-200 ${
                  more3
                    ? "bg-[#757E7E]"
                    : "bg-gradient-to-r from-red-500 via-pink-400 to-orange-300 hover:bg-[#757E7E]"
                }`}
                aria-label={more3 ? "Read Less" : "Read More"}
              >
                {more3 ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lazy loaded sections */}
      <Suspense fallback={<LoadingSpinner />}>
        <Technology />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Portfolio />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <LogoGrid />
      </Suspense>

      {/* Testimonies Section */}
      <div className="bg-[#fff] py-10">
        <h2 className="text-sm text-[#000] font-semibold text-center md:text-3xl xl:text-4xl pb-3 mx-auto">
          What our clients say about us
        </h2>
        <h2 className="mx-auto text-[#36474F] text-center font-semibold text-sm xl:text-xl md:w-[44rem] xl:w-[48rem] flex items-center justify-center gap-x-2">
          <img
            className="object-cover object-center w-auto h-5 md:w-auto md:h-9 xl:h-10"
            src="../Frame 41.png"
            alt="Trust indicator"
            loading="lazy"
          />
          over 1k clients trust us
        </h2>
        <section className="mx-auto justify-center my-5 lg:mt-10">
          <div className="w-full">
            <Suspense fallback={<LoadingSpinner />}>
              <TestimonySlide />
            </Suspense>
          </div>
        </section>
      </div>

      {/* Quote Section */}
      <div className="p-2 lg:p-28 bg-[#F4F4F4] mx-auto">
        <div className="m-auto bg-gradient-to-r from-pink-100 to-blue-100 rounded-lg shadow-md text-gray-800 leading-relaxed py-10 px-5 lg:px-16">
          <h2 className="text-sm text-[#000] text-center md:text-xl xl:text-2xl 2xl:text-3xl leading-[1.5rem] lg:leading-[3rem] 2xl:leading-[4.5rem]">
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

      <Suspense fallback={<LoadingSpinner />}>
        <MarketingOverview />
      </Suspense>



    </div>
  );
}

export default Home;
