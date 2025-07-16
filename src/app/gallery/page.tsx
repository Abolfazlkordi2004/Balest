"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import axios from "axios";

import "swiper/css";
import "swiper/css/effect-coverflow";

export type IGalleryProps = {
  img: string[];
};

function Gallery() {
  const [data, setData] = useState<IGalleryProps[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/gallery")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full flex justify-center items-center py-40">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="w-full max-w-[1100px] px-4"
      >
        {data.map((item, index) =>
          item.img.map((image, imgIndex) => (
            <SwiperSlide
              key={`${index}-${imgIndex}`}
              className="flex justify-center items-center"
            >
              <div className="w-[400px] h-[400px] sm:w-[550px] sm:h-[480px] relative overflow-hidden">
                <Image
                  src={image}
                  alt={`cert-${index}-${imgIndex}`}
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
}

export default Gallery;
