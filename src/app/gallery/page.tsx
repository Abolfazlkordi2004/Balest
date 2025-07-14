import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import axios from "axios";

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
  });
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
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center w-[250px] h-[300px]"
          >
            <Image
              src={item.img}
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
}

export default Gallery;
