import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

function TestimonySlide() {
  const navigate = useNavigate();

  return (
    <>
      <div className="lg:hidden">
        <Swiper
          slidesPerView={1.1}
          centeredSlides={true}
          spaceBetween={12}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 1.3,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 3.3,
              spaceBetween: 12,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 12,
            },
          }}
          className="mySwiper "
        >
          <SwiperSlide>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <p className="text-gray-500 text-sm">
                Choosing EnterpriseBuzz was one of the best decisions we've made
                for our business. Their tailored digital marketing strategies
                have not only driven more traffic to our website but also
                increased our conversion rates. Their expertise and attention to
                detail have made a significant impact on our bottom line.
              </p>
              <div className="flex items-center gap-x-2 mt-3">
                <img
                  className="object-cover object-center w-5 h-5 md:w-9 md:h-9 rounded-full "
                  src="../avatars/testi3.png"
                  alt=""
                />
                <div>
                  <h1 className="text-xs sm:text-sm font-semibold text-gray-800">
                    Michael Johnson
                  </h1>
                  <p className="text-[8px] sm:text-xs text-gray-500 font-light">
                    CEO, Peak Performance Gym
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <p className="text-gray-500 text-sm">
                EnterpriseBuzz has been instrumental in helping us navigate the
                ever-changing landscape of digital marketing. Their team is
                always ahead of the curve, implementing the latest trends and
                techniques to keep our brand relevant and competitive. Their
                passion for what they do is evident in the exceptional results
                they deliver.
              </p>
              <div className="flex items-center gap-x-2 mt-3">
                <img
                  className="object-cover object-center w-5 h-5 md:w-9 md:h-9 rounded-full "
                  src="../Rectangle.png"
                  alt=""
                />
                <div>
                  <h1 className="text-xs sm:text-sm font-semibold text-gray-800">
                    Rachel Thompson
                  </h1>
                  <p className="text-[8px] sm:text-xs text-gray-500 font-light">
                    Marketing Director, Trendsetter Fashion Co.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <p className="text-gray-500 text-sm">
                EnterpriseBuzz has truly been a game-changer for our business.
                Their innovative digital marketing strategies have helped us
                reach new audiences and increase our online visibility. We've
                seen a significant boost in traffic and conversions since
                partnering with them. Highly recommended.
              </p>
              <div className="flex items-center gap-x-2 mt-3">
                <img
                  className="object-cover object-center w-5 h-5 md:w-9 md:h-9 rounded-full "
                  src="../avatars/testi2.png"
                  alt=""
                />
                <div>
                  <h1 className="text-xs sm:text-sm font-semibold text-gray-800">
                    Sarah Thompson
                  </h1>
                  <p className="text-[8px] sm:text-xs text-gray-500 font-light">
                    CEO, Thompson & Co.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <p className="text-gray-500 text-sm">
                EnterpriseBuzz has been instrumental in helping us build a
                strong brand presence on social media. Their team consistently
                delivers engaging content that resonates with our audience,
                resulting in higher engagement rates and brand loyalty. They're
                reliable, creative, and truly understand our brand's voice.
              </p>
              <div className="flex items-center gap-x-2 mt-3">
                <img
                  className="object-cover object-center w-5 h-5 md:w-9 md:h-9 rounded-full "
                  src="../Rectangle.png"
                  alt=""
                />
                <div>
                  <h1 className="text-xs sm:text-sm font-semibold text-gray-800">
                    Jessica Nguyen
                  </h1>
                  <p className="text-[8px] sm:text-xs text-gray-500 font-light">
                    Marketing Manager, FreshEats Meal Prep
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <p className="text-gray-500 text-sm">
                Choosing EnterpriseBuzz was one of the best decisions we've made
                for our business. Their tailored digital marketing strategies
                have not only driven more traffic to our website but also
                increased our conversion rates. Their expertise and attention to
                detail have made a significant impact on our bottom line.
              </p>
              <div className="flex items-center gap-x-2 mt-3">
                <img
                  className="object-cover object-center w-5 h-5 md:w-9 md:h-9 rounded-full "
                  src="../avatars/testi2.png"
                  alt=""
                />
                <div>
                  <h1 className="text-xs sm:text-sm font-semibold text-gray-800">
                    Michael Johnson
                  </h1>
                  <p className="text-[8px] sm:text-xs text-gray-500 font-light">
                    CEO, Peak Performance Gym
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <p className="text-gray-500 text-sm">
                EnterpriseBuzz has been instrumental in helping us navigate the
                ever-changing landscape of digital marketing. Their team is
                always ahead of the curve, implementing the latest trends and
                techniques to keep our brand relevant and competitive. Their
                passion for what they do is evident in the exceptional results
                they deliver.
              </p>
              <div className="flex items-center gap-x-2 mt-3">
                <img
                  className="object-cover object-center w-5 h-5 md:w-9 md:h-9 rounded-full "
                  src="../Rectangle.png"
                  alt=""
                />
                <div>
                  <h1 className="text-xs sm:text-sm font-semibold text-gray-800">
                    Rachel Thompson
                  </h1>
                  <p className="text-[8px] sm:text-xs text-gray-500 font-light">
                    Marketing Director, Trendsetter Fashion Co.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <p className="text-gray-500 text-sm">
                EnterpriseBuzz has truly been a game-changer for our business.
                Their innovative digital marketing strategies have helped us
                reach new audiences and increase our online visibility. We've
                seen a significant boost in traffic and conversions since
                partnering with them. Highly recommended.
              </p>
              <div className="flex items-center gap-x-2 mt-3">
                <img
                  className="object-cover object-center w-5 h-5 md:w-9 md:h-9 rounded-full "
                  src="../avatars/testi2.png"
                  alt=""
                />
                <div>
                  <h1 className="text-xs sm:text-sm font-semibold text-gray-800">
                    Sarah Thompson
                  </h1>
                  <p className="text-[8px] sm:text-xs text-gray-500 font-light">
                    CEO, Thompson & Co.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#F4F4F4] p-5 rounded-xl ">
              <p className="text-gray-500 text-sm">
                EnterpriseBuzz has been instrumental in helping us build a
                strong brand presence on social media. Their team consistently
                delivers engaging content that resonates with our audience,
                resulting in higher engagement rates and brand loyalty. They're
                reliable, creative, and truly understand our brand's voice.
              </p>
              <div className="flex items-center gap-x-2 mt-3">
                <img
                  className="object-cover object-center w-5 h-5 md:w-9 md:h-9 rounded-full "
                  src="../Rectangle.png"
                  alt=""
                />
                <div>
                  <h1 className="text-xs sm:text-sm font-semibold text-gray-800">
                    Jessica Nguyen
                  </h1>
                  <p className="text-[8px] sm:text-xs text-gray-500 font-light">
                    Marketing Manager, FreshEats Meal Prep
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Swiper
        slidesPerView={1.2}
        centeredSlides={true}
        spaceBetween={12}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1.3,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 3.3,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 3.2,
            spaceBetween: 12,
          },
        }}
        className="mySwiper my-4 "
      >
        <SwiperSlide>
          <div className="bg-[#F4F4F4] p-5 rounded-xl ">
            <p className="text-gray-500 text-sm">
              Choosing EnterpriseBuzz was one of the best decisions we've made
              for our business. Their tailored digital marketing strategies have
              not only driven more traffic to our website but also increased our
              conversion rates. Their expertise and attention to detail have
              made a significant impact on our bottom line.
            </p>
            <div className="flex items-center gap-x-2 mt-3">
              <img
                className="object-cover object-center w-5 h-5 md:w-9 md:h-9 rounded-full "
                src="../avatars/testi3.png"
                alt=""
              />
              <div>
                <h1 className="text-xs sm:text-sm font-semibold text-gray-800">
                  Michael Johnson
                </h1>
                <p className="text-[8px] sm:text-xs text-gray-500 font-light">
                  CEO, Peak Performance Gym
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F4F4F4] p-5 rounded-xl ">
            <p className="text-gray-500 text-sm">
              I can't say enough good things about EnterpriseBuzz. From their
              strategic approach to their creative content, they've exceeded all
              of our expectations. Thanks to their SEO expertise, our website
              now ranks higher in search results, leading to a significant
              increase in organic traffic. We're incredibly impressed
            </p>
            <div className="flex items-center gap-x-2 mt-3">
              <img
                className="object-cover object-center w-5 h-5 md:w-9 md:h-9 rounded-full "
                src="../avatars/testi1.png"
                alt=""
              />
              <div>
                <h1 className="text-xs sm:text-sm font-semibold text-gray-800">
                  Mark Smith
                </h1>
                <p className="text-[8px] sm:text-xs text-gray-500 font-light">
                  Founder, Smith & Sons Construction
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F4F4F4] p-5 rounded-xl ">
            <p className="text-gray-500 text-sm">
              Enterprise Buzz AI created our brand logo and several different
              pieces of media graphics that represented our brand. <br /> Their
              work on everything was phenomenal!! <br /> They created an
              incredible logo that was even better than I could have imagined!
            </p>
            <div className="flex items-center gap-x-2 mt-3">
              <img
                className="object-cover object-center w-5 h-5 md:w-9 md:h-9 rounded-full "
                src="../avatars/testi12.png"
                alt=""
              />
              <div>
                <h1 className="text-xs sm:text-sm font-semibold text-gray-800">
                  Lisa Senis
                </h1>
                <p className="text-[8px] sm:text-xs text-gray-500 font-light">
                  Independent Enagic Distributor
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F4F4F4] p-5 rounded-xl ">
            <p className="text-gray-500 text-sm">
              Working with EnterpriseBuzz has been an absolute pleasure. Their
              team is highly professional, responsive, and dedicated to
              delivering results. Thanks to their expertise in social media
              management, our brand's presence has soared across multiple
              platforms. <br /> We couldn't be happier with the results!
            </p>
            <div className="flex items-center gap-x-2 mt-3">
              <img
                className="object-cover object-center w-5 h-5 md:w-9 md:h-9 rounded-full "
                src="../avatars/testi5.png"
                alt=""
              />
              <div>
                <h1 className="text-xs sm:text-sm font-semibold text-gray-800">
                  David Rodriguez
                </h1>
                <p className="text-[8px] sm:text-xs text-gray-500 font-light">
                  Marketing Director, Brightside Technologies
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F4F4F4] p-5 rounded-xl ">
            <p className="text-gray-500 text-sm">
              EnterpriseBuzz took our outdated website and transformed it into a
              modern, user-friendly masterpiece. Not only does it look
              fantastic, but it's also driving more leads and sales than ever
              before. Their attention to detail and commitment to excellence are
              unmatched. <br /> We're thrilled with the outcome!
            </p>

            <div className="flex items-center gap-x-2 mt-3">
              <img
                className="object-cover object-center w-5 h-5 md:w-9 md:h-9 rounded-full "
                src="../avatars/testi4.png"
                alt=""
              />
              <div>
                <h1 className="text-xs sm:text-sm font-semibold text-gray-800">
                  Emily Johnson
                </h1>
                <p className="text-[8px] sm:text-xs text-gray-500 font-light">
                  Owner, Johnson's Jewelry Boutique
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F4F4F4] p-5 rounded-xl ">
            <p className="text-gray-500 text-sm">
              EnterpriseBuzz has been instrumental in helping us navigate the
              ever-changing landscape of digital marketing. Their team is always
              ahead of the curve, implementing the latest trends and techniques
              to keep our brand relevant and competitive. Their passion for what
              they do is evident in the exceptional results they deliver.
            </p>
            <div className="flex items-center gap-x-2 mt-3">
              <img
                className="object-cover object-center w-5 h-5 md:w-9 md:h-9 rounded-full "
                src="../a3.gif"
                alt=""
              />
              <div>
                <h1 className="text-xs sm:text-sm font-semibold text-gray-800">
                  Rachel Thompson
                </h1>
                <p className="text-[8px] sm:text-xs text-gray-500 font-light">
                  Marketing Director, Trendsetter Fashion Co.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F4F4F4] p-5 rounded-xl ">
            <p className="text-gray-500 text-sm">
              EnterpriseBuzz has truly been a game-changer for our business.
              Their innovative digital marketing strategies have helped us reach
              new audiences and increase our online visibility. We've seen a
              significant boost in traffic and conversions since partnering with
              them. Highly recommended.
            </p>
            <div className="flex items-center gap-x-2 mt-3">
              <img
                className="object-cover object-center w-5 h-5 md:w-9 md:h-9 rounded-full "
                src="../avatars/testi2.png"
                alt=""
              />
              <div>
                <h1 className="text-xs sm:text-sm font-semibold text-gray-800">
                  Sarah Thompson
                </h1>
                <p className="text-[8px] sm:text-xs text-gray-500 font-light">
                  CEO, Thompson & Co.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F4F4F4] p-5 rounded-xl ">
            <p className="text-gray-500 text-sm">
              EnterpriseBuzz has been instrumental in helping us build a strong
              brand presence on social media. Their team consistently delivers
              engaging content that resonates with our audience, resulting in
              higher engagement rates and brand loyalty. They're reliable,
              creative, and truly understand our brand's voice.
            </p>
            <div className="flex items-center gap-x-2 mt-3">
              <img
                className="object-cover object-center w-5 h-5 md:w-9 md:h-9 rounded-full "
                src="../Rectangle.png"
                alt=""
              />
              <div>
                <h1 className="text-xs sm:text-sm font-semibold text-gray-800">
                  Jessica Nguyen
                </h1>
                <p className="text-[8px] sm:text-xs text-gray-500 font-light">
                  Marketing Manager, FreshEats Meal Prep
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <Swiper
        slidesPerView={1.1}
        centeredSlides={true}
        spaceBetween={12}
        loop={true}
        autoplay={{
          delay: 2900,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 2.9,
            spaceBetween: 12,
          },
        }}
        className="mySwiper  "
      >
        <SwiperSlide>
          <div className="bg-[#F4F4F4] p-5 rounded-xl ">
            <p className="text-gray-500 text-sm">
              Choosing EnterpriseBuzz was one of the best decisions we've made
              for our business. Their tailored digital marketing strategies have
              not only driven more traffic to our website but also increased our
              conversion rates. Their expertise and attention to detail have
              made a significant impact on our bottom line.
            </p>
            <div className="flex items-center gap-x-2 mt-3">
              <img
                className="object-cover object-center w-5 h-5 md:w-9 md:h-9 rounded-full "
                src="../avatars/testi3.png"
                alt=""
              />
              <div>
                <h1 className="text-xs sm:text-sm font-semibold text-gray-800">
                  Michael Johnson
                </h1>
                <p className="text-[8px] sm:text-xs text-gray-500 font-light">
                  CEO, Peak Performance Gym
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F4F4F4] p-5 rounded-xl ">
            <p className="text-gray-500 text-sm">
              EnterpriseBuzz has been instrumental in helping us navigate the
              ever-changing landscape of digital marketing. Their team is always
              ahead of the curve, implementing the latest trends and techniques
              to keep our brand relevant and competitive. Their passion for what
              they do is evident in the exceptional results they deliver.
            </p>
            <div className="flex items-center gap-x-2 mt-3">
              <img
                className="object-cover object-center w-5 h-5 md:w-9 md:h-9 rounded-full "
                src="../Rectangle.png"
                alt=""
              />
              <div>
                <h1 className="text-xs sm:text-sm font-semibold text-gray-800">
                  Rachel Thompson
                </h1>
                <p className="text-[8px] sm:text-xs text-gray-500 font-light">
                  Marketing Director, Trendsetter Fashion Co.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F4F4F4] p-5 rounded-xl ">
            <p className="text-gray-500 text-sm">
              Every element of our website is meticulously crafted to ensure
              that our message is clear, captivating, and immediately
              actionable. We are immensely proud of this collaborative
              accomplishment and are confident that our newly engineered funnel
              will continue to drive exceptional results and sustainable growth.
            </p>
            <div className="flex items-center gap-x-2 mt-3">
              <img
                className="object-cover object-center w-5 h-5 md:w-9 md:h-9 rounded-full "
                src="../avatars/testi10.png"
                alt=""
              />
              <div>
                <h1 className="text-xs sm:text-sm font-semibold text-gray-800">
                  Water Divas
                </h1>
                <p className="text-[8px] sm:text-xs text-gray-500 font-light">
                  Enagic Distributor, Canada
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F4F4F4] p-5 rounded-xl ">
            <p className="text-gray-500 text-sm">
              EnterpriseBuzz has been instrumental in helping us build a strong
              brand presence on social media. Their team consistently delivers
              engaging content that resonates with our audience, resulting in
              higher engagement rates and brand loyalty. They're reliable,
              creative, and truly understand our brand's voice.
            </p>
            <div className="flex items-center gap-x-2 mt-3">
              <img
                className="object-cover object-center w-5 h-5 md:w-9 md:h-9 rounded-full "
                src="../Rectangle.png"
                alt=""
              />
              <div>
                <h1 className="text-xs sm:text-sm font-semibold text-gray-800">
                  Jessica Nguyen
                </h1>
                <p className="text-[8px] sm:text-xs text-gray-500 font-light">
                  Marketing Manager, FreshEats Meal Prep
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F4F4F4] p-5 rounded-xl ">
            <p className="text-gray-500 text-sm">
              Choosing EnterpriseBuzz was one of the best decisions we've made
              for our business. Their tailored digital marketing strategies have
              not only driven more traffic to our website but also increased our
              conversion rates. Their expertise and attention to detail have
              made a significant impact on our bottom line.
            </p>
            <div className="flex items-center gap-x-2 mt-3">
              <img
                className="object-cover object-center w-5 h-5 md:w-9 md:h-9 rounded-full "
                src="../avatars/testi3.png"
                alt=""
              />
              <div>
                <h1 className="text-xs sm:text-sm font-semibold text-gray-800">
                  Michael Johnson
                </h1>
                <p className="text-[8px] sm:text-xs text-gray-500 font-light">
                  CEO, Peak Performance Gym
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F4F4F4] p-5 rounded-xl ">
            <p className="text-gray-500 text-sm">
              EnterpriseBuzz has been instrumental in helping us navigate the
              ever-changing landscape of digital marketing. Their team is always
              ahead of the curve, implementing the latest trends and techniques
              to keep our brand relevant and competitive. Their passion for what
              they do is evident in the exceptional results they deliver.
            </p>
            <div className="flex items-center gap-x-2 mt-3">
              <img
                className="object-cover object-center w-5 h-5 md:w-9 md:h-9 rounded-full "
                src="../Rectangle.png"
                alt=""
              />
              <div>
                <h1 className="text-xs sm:text-sm font-semibold text-gray-800">
                  Rachel Thompson
                </h1>
                <p className="text-[8px] sm:text-xs text-gray-500 font-light">
                  Marketing Director, Trendsetter Fashion Co.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F4F4F4] p-5 rounded-xl ">
            <p className="text-gray-500 text-sm">
              EnterpriseBuzz has truly been a game-changer for our business.
              Their innovative digital marketing strategies have helped us reach
              new audiences and increase our online visibility. We've seen a
              significant boost in traffic and conversions since partnering with
              them. Highly recommended.
            </p>
            <div className="flex items-center gap-x-2 mt-3">
              <img
                className="object-cover object-center w-5 h-5 md:w-9 md:h-9 rounded-full "
                src="../avatars/testi2.png"
                alt=""
              />
              <div>
                <h1 className="text-xs sm:text-sm font-semibold text-gray-800">
                  Sarah Thompson
                </h1>
                <p className="text-[8px] sm:text-xs text-gray-500 font-light">
                  CEO, Thompson & Co.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F4F4F4] p-5 rounded-xl ">
            <p className="text-gray-500 text-sm">
              EnterpriseBuzz has been instrumental in helping us build a strong
              brand presence on social media. Their team consistently delivers
              engaging content that resonates with our audience, resulting in
              higher engagement rates and brand loyalty. They're reliable,
              creative, and truly understand our brand's voice.
            </p>
            <div className="flex items-center gap-x-2 mt-3">
              <img
                className="object-cover object-center w-5 h-5 md:w-9 md:h-9 rounded-full "
                src="../Rectangle.png"
                alt=""
              />
              <div>
                <h1 className="text-xs sm:text-sm font-semibold text-gray-800">
                  Jessica Nguyen
                </h1>
                <p className="text-[8px] sm:text-xs text-gray-500 font-light">
                  Marketing Manager, FreshEats Meal Prep
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default TestimonySlide;
