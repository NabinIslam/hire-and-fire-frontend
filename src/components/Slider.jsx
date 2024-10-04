"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const ReactSlider = () => {
  return (
    <div className="container">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="border">Slide 1</SwiperSlide>
        <SwiperSlide className="border">Slide 2</SwiperSlide>
        <SwiperSlide className="border">Slide 3</SwiperSlide>
        <SwiperSlide className="border">Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default ReactSlider;
