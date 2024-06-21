import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

function PortfolioSlide() {
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
          <img src="../port1.png" alt="i" className="rounded-2xl w-full " />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../port2.png" alt="i" className="rounded-2xl w-full " />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../port3.png" alt="i" className="rounded-2xl w-full " />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../port4.png" alt="i" className="rounded-2xl w-full " />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../port2.png" alt="i" className="rounded-2xl w-full " />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../port3.png" alt="i" className="rounded-2xl w-full " />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default PortfolioSlide;
