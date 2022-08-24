import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Cards = ({ children }) => {
  return (
    <Swiper
      breakpoints={{
        375: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: "auto",
        },
      }}
      effect={"slide"}
      grabCursor={true}
    >
      {children.map((child, index) => {
        if (index > 3) {
          return null;
        }
        return <SwiperSlide key={index}>{child}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export { Cards };
