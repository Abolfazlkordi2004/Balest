"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

type Props = {
  img: string[];
};

const ImageGallery: React.FC<Props> = ({ img }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
          slideShadows: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="w-full max-w-5xl px-4 sm:px-6 md:px-10"
      >
        {img.map((src, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center w-[250px] h-[300px]"
          >
            <Image
              src={src}
              alt={`cert-${index}`}
              width={300}
              height={300}
              className="rounded-xl object-cover shadow-lg transition-all duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageGallery;
