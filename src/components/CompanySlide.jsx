import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

function CompanySlide() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
      <div className="space-y-4 lg:space-y-10">
      <Swiper
        slidesPerView={2.5}
        centeredSlides={true}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2300,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 3.2,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 4.2,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 6.2,
            spaceBetween: 12,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="h-11 w-auto" src="../Company logo-1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-11 w-auto" src="../Company logo-2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-11 w-auto" src="../Company logo-3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-11 w-auto" src="../Company logo-4.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-11 w-auto" src="../Company logo-5.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-11 w-auto" src="../Company logo-6.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-11 w-auto" src="../Company logo-7.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-11 w-auto" src="../Company logo.png" alt="" />
        </SwiperSlide>
      </Swiper>

      <Swiper
        slidesPerView={2.5}
        centeredSlides={true}
        spaceBetween={32}
        loop={true}
        autoplay={{
          delay: 2400,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 3.2,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 4.2,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 6.2,
            spaceBetween: 12,
          },
        }}
        className="mySwiper mt-6 flex items-center"
      >
        <SwiperSlide>
          <img className="h-11 w-auto" src="../cobai.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-11 w-auto" src="../tefzon.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-11 w-auto" src="../billTop.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-9 w-auto" src="../aku.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-9 w-auto" src="../Atoovislogo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-6 w-auto" src="../sunswitch.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-7 w-auto" src="../CloudClinic.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-6 w-auto" src="../airtimeflip.png" alt="" />
        </SwiperSlide>
      </Swiper>

      <Swiper
        slidesPerView={2.5}
        centeredSlides={true}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 3.2,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 4.2,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 6.2,
            spaceBetween: 12,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="h-14 w-auto" src="../brands/Company logo1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-14 w-auto" src="../brands/Company logo2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-14 w-auto" src="../brands/Company logo3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-14 w-auto" src="../brands/Company logo4.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-14 w-auto" src="../brands/Company logo5.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-14 w-auto" src="../brands/Company logo6.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-14 w-auto" src="../brands/Company logo7.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-14 w-auto" src="../brands/Company logo8.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-14 w-auto" src="../brands/Company logo9.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-14 w-auto" src="../brands/Company logo10.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-14 w-auto" src="../brands/Company logo.png" alt="" />
        </SwiperSlide>
      </Swiper>
      </div>
  );
}

export default CompanySlide;
