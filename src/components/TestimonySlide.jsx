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
            slidesPerView: 2,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 3.2,
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
              for our business. Their tailored digital marketing strategies have
              not only driven more traffic to our website but also increased our
              conversion rates. Their expertise and attention to detail have
              made a significant impact on our bottom line.
            </p>
            <div className="flex items-center gap-x-2 mt-3">
              <img
                className="object-cover object-center w-5 h-5 md:w-9 md:h-9 rounded-full "
                src="../Rectangle.png"
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
                src="../Rectangle.png"
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
                src="../Rectangle.png"
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
                src="../Rectangle.png"
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
            slidesPerView: 2,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 3.2,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 3.2,
            spaceBetween: 12,
          },
        }}
        className="mySwiper mt-5 "
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
                src="../Rectangle.png"
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
                src="../Rectangle.png"
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
                src="../Rectangle.png"
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
                src="../Rectangle.png"
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
