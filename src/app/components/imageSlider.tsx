"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
import { useRef } from "react";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";

type ISliderProps = { images: string[] };

function ImageSlider({ images }: ISliderProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="w-full relative">
      <Swiper
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Autoplay,EffectFade]}
        className="overflow-hidden"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[900px] relative">
              <Image
                src={src}
                alt={`Slide ${index}`}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 right-0 -translate-x-18 flex items-center gap-[1px] z-10">
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="bg-gray-900 hover:bg-[#F9A220] text-gray-800 p-3  transition"
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  className="bg-gray-900 hover:bg-[#F9A220] text-gray-800 p-3 transition"
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageSlider;