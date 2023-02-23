import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Navigation } from "swiper";

export default function Swipper(props) {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={50}
        centeredSlides={true}
        rewind={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        breakpoints={{
            100: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            350: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            550: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            780:{
              slidesPerView: 4,
              spaceBetween: 50, 
            },
            900:{
              slidesPerView: 2,
              spaceBetween: 50, 
            },
            1200:{
              slidesPerView: 4,
              spaceBetween: 50, 
            }
          }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {props.children}
      </Swiper>
    </>
  );
}