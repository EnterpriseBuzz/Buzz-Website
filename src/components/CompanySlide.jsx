import React, { useMemo, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

// Memoized image component for better performance
const BrandImage = memo(({ src, alt, className, loading = "lazy" }) => (
  <img 
    className={className} 
    src={src} 
    alt={alt}
    loading={loading}
    decoding="async"
  />
));

BrandImage.displayName = 'BrandImage';

// Memoized Swiper component to prevent unnecessary re-renders
const BrandSwiper = memo(({ 
  slides, 
  delay, 
  spaceBetween = 20, 
  className = "mySwiper" 
}) => {
  // Memoized swiper configuration
  const swiperConfig = useMemo(() => ({
    slidesPerView: 2.5,
    centeredSlides: true,
    spaceBetween,
    loop: true,
    autoplay: {
      delay,
      disableOnInteraction: false,
      pauseOnMouseEnter: true, // Better UX
    },
    modules: [Autoplay, Navigation],
    breakpoints: {
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
    },
  }), [delay, spaceBetween]);

  return (
    <Swiper {...swiperConfig} className={className}>
      {slides.map((slide, index) => (
        <SwiperSlide key={`${slide.alt}-${index}`}>
          <BrandImage
            className={slide.className}
            src={slide.src}
            alt={slide.alt}
            loading={index < 6 ? "eager" : "lazy"} // Load first 6 images eagerly for better LCP
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
});

BrandSwiper.displayName = 'BrandSwiper';

function CompanySlide() {
  // Memoized slide data to prevent recreation on every render
  const slideData = useMemo(() => {
    const firstRowSlides = [
      { src: "../brands/Company logo-1.png", alt: "Company logo 1", className: "h-11 w-auto" },
      { src: "../brands/Company logo-2.png", alt: "Company logo 2", className: "h-11 w-auto" },
      { src: "../brands/Company logo-3.png", alt: "Company logo 3", className: "h-11 w-auto" },
      { src: "../brands/Company logo-4.png", alt: "Company logo 4", className: "h-11 w-auto" },
      { src: "../brands/Company logo-5.png", alt: "Company logo 5", className: "h-11 w-auto" },
      { src: "../brands/Company logo-6.png", alt: "Company logo 6", className: "h-11 w-auto" },
      { src: "../brands/Company logo-7.png", alt: "Company logo 7", className: "h-11 w-auto" },
      { src: "../brands/SCompany logo.png", alt: "Special Company logo", className: "h-11 w-auto" },
    ];

    const secondRowSlides = [
      { src: "../brands/cobai.png", alt: "Cobai logo", className: "h-11 w-auto" },
      { src: "../brands/tefzon.png", alt: "Tefzon logo", className: "h-11 w-auto" },
      { src: "../brands/billTop.png", alt: "BillTop logo", className: "h-11 w-auto" },
      { src: "../brands/aku.png", alt: "AKU logo", className: "h-9 w-auto" },
      { src: "../brands/Atoovislogo.png", alt: "Atoovis logo", className: "h-9 w-auto" },
      { src: "../brands/sunswitch.png", alt: "Sunswitch logo", className: "h-6 w-auto" },
      { src: "../brands/CloudClinic.png", alt: "CloudClinic logo", className: "h-7 w-auto" },
      { src: "../brands/airtimeflip.png", alt: "Airtimeflip logo", className: "h-6 w-auto" },
    ];

    const thirdRowSlides = [
      { src: "../brands/Company logo1.png", alt: "Partner company 1", className: "h-14 w-auto" },
      { src: "../brands/Company logo2.png", alt: "Partner company 2", className: "h-14 w-auto" },
      { src: "../brands/Company logo3.png", alt: "Partner company 3", className: "h-14 w-auto" },
      { src: "../brands/Company logo4.png", alt: "Partner company 4", className: "h-14 w-auto" },
      { src: "../brands/Company logo5.png", alt: "Partner company 5", className: "h-14 w-auto" },
      { src: "../brands/Company logo6.png", alt: "Partner company 6", className: "h-14 w-auto" },
      { src: "../brands/Company logo7.png", alt: "Partner company 7", className: "h-14 w-auto" },
      { src: "../brands/Company logo8.png", alt: "Partner company 8", className: "h-14 w-auto" },
      { src: "../brands/Company logo9.png", alt: "Partner company 9", className: "h-14 w-auto" },
      { src: "../brands/Company logo10.png", alt: "Partner company 10", className: "h-14 w-auto" },
      { src: "../brands/Company logo.png", alt: "Featured company", className: "h-14 w-auto" },
    ];

    return { firstRowSlides, secondRowSlides, thirdRowSlides };
  }, []);

  // Preload critical brand images
  React.useEffect(() => {
    const preloadImages = (slides, count = 4) => {
      slides.slice(0, count).forEach(slide => {
        const img = new Image();
        img.src = slide.src;
      });
    };

    // Preload first few images from each row for better perceived performance
    preloadImages(slideData.firstRowSlides);
    preloadImages(slideData.secondRowSlides);
    preloadImages(slideData.thirdRowSlides);
  }, [slideData]);

  return (
    <div className="space-y-4 lg:space-y-10" role="region" aria-label="Client companies showcase">
      <BrandSwiper 
        slides={slideData.firstRowSlides}
        delay={2300}
        spaceBetween={20}
      />
      
      <BrandSwiper 
        slides={slideData.secondRowSlides}
        delay={2400}
        spaceBetween={32}
        className="mySwiper mt-6 flex items-center"
      />
      
      <BrandSwiper 
        slides={slideData.thirdRowSlides}
        delay={2500}
        spaceBetween={20}
      />
    </div>
  );
}

export default memo(CompanySlide);