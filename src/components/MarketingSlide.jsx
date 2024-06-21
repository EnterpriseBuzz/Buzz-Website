import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

function MarketingSlide() {
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
          <img src="../Image 2.png" alt="i" className="rounded-2xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../Hero image 6.png"
            alt="i"
            className="rounded-2xl w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../Hero image 5.png"
            alt="i"
            className="rounded-2xl w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../Hero image 4.png"
            alt="i"
            className="rounded-2xl w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../Hero image 2.png"
            alt="i"
            className="rounded-2xl w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../Hero image 3.png"
            alt="i"
            className="rounded-2xl w-full"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default MarketingSlide;
