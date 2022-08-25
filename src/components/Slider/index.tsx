import Image from "next/image";
import { Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface Props {
  value: any;
}

const Slider = ({ value }: Props) => {
  return (
    <Swiper
      modules={[Autoplay, FreeMode]}
      style={{
        height: "100%",
        width: "100%",
        maxWidth: "100vw",
      }}
      spaceBetween={20}
      slidesPerView={5}
      height={200}
      breakpoints={{
        375: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 3.5,
        },
        1024: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
        },
      }}
      loop
      grabCursor
      freeMode={{
        enabled: true,
        momentum: true,
      }}
      autoplay={{
        delay: 0,
        stopOnLastSlide: false,
        waitForTransition: true,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      speed={4000}
    >
      {value.items.map(({ asset }, index: number) => {
        return (
          <SwiperSlide key={index}>
            <div>
              <Image
                src={asset.url}
                // blurDataURL={asset.metadata.lqip}
                // placeholder="blur"
                layout="responsive"
                height={asset.metadata.dimensions.height}
                width={asset.metadata.dimensions.width}
                alt={value.title}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export { Slider };
