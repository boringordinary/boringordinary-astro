import { Text, Testimonial } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface Props {}

const Testimonials = () => {
  return (
    <div className="relative">
      <div className="mb-8">
        <Text align="center" display>
          Meet the businesses who chose B+O
        </Text>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export { Testimonials };
