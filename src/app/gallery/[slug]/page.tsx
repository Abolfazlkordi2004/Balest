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
          setData(result);
        })
        .catch((error) => {
          console.error("Error fetching branch data:", error);
        });
    }
  }, [params?.slug]);
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

export default GalleryCategory;
