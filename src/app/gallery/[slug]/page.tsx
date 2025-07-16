"use client";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type IGalleryCategoryProps = {
  slug: string;
  img: string[];
};

function GalleryCategory() {
  const params = useParams();
  const [data, setData] = useState<IGalleryCategoryProps[]>([]);
  useEffect(() => {
    const slug = params?.slug;

    if (slug && typeof slug === "string") {
      axios
        .get<IGalleryCategoryProps[]>("http://localhost:3001/galleryCategory")
        .then((res) => {
          const result = res.data.find((item) => item.slug === slug);
          if (result) {
            setData([result]);
          } else {
            setData([]);
          }
        })
        .catch((error) => {
          console.error("Error fetching branch data:", error);
        });
    }
  }, [params?.slug]);

  return (
    <div className="w-full flex justify-center items-center py-40">
      <div>
        <p>{params?.slug}</p>
      </div>
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

export default GalleryCategory;
