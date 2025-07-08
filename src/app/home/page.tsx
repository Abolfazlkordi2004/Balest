import React from "react";
import ImageSlider from "../components/imageSlider";
import Image from "next/image";

function HomePage() {
  return (
    <>
      <ImageSlider />
      <div>
        <div className="flex justify-evenly items-center mx-20 my-20">
          <div className="w-[650px]" dir="rtl">
            <h3 className="text-2xl my-2 italic">مهندسین مشاور بالست ابنیه</h3>
            <h1 className="text-5xl">
              با بیش از سه دهه تجربه برای دستیابی
              <br />
              <span className="text-[#F9A220]">
                به توسعه پایدار در کشور می کوشد
              </span>
            </h1>
            <p className="text-xl text-gray-800 my-10 text-justify">
              مهندسین مشاور سازیان در سال ۱۳۶۹ خورشیدی پایه گذاری شد. این شرکت
              طی سالیان گذشته در زمینه های گوناگون مهندسی عمران فعالیت داشته و
              پروژه های بسیاری را از مراحل مطالعاتی تا تحویل قطعی پس از ساخت، به
              انجام رسانده است .
            </p>
            <p className="text-xl text-gray-800 text-justify">
              اکنون این مهندسین مشاور با تخصص های گوناگون، خدمات مشاوره و مدیریت
              طرح را به بخشهای دولتی و خصوصی ارائه می دهد. هدف اصلی شرکت، مشارکت
              در برنامه های عمرانی و توسعه پایدار کشور و ارتقا کیفیت خدمات حرفه
              مهندسین مشاور است و دراین راستا منابع انسانی خود را درگرایشهای
              تخصصی گوناگون توسعه داده است .
            </p>
          </div>
          <div className="bg-[#F9A220] w-[400px] h-[500px]">
            <div className="-translate-x-10 translate-y-10">
              <Image
                src="/img/photo_5.jpg"
                alt="photo-5"
                width={400}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[400px] bg-[#4D4F5B] my-40 overflow-hidden relative flex justify-center items-center">
        <Image
          src="/img/pattern-1.png"
          alt="pattern"
          fill
          className="object-contain object-left absolute top-0 left-0 z-0"
        />
        <div className="flex flex-col z-10 h-2/3  justify-center items-center">
          <div className="flex justify-end w-250 my-10">
            <h1 className="text-white text-4xl font-bold">شعار ما</h1>
            <hr className="w-10 text-[#F9A220] font-bold mx-3 mt-8" />
          </div>
          <div className="flex flex-row-reverse">
            <div className="flex flex-col items-center justify-center mx-15">
              <Image
                src="/icons/icons8-architect-50.png"
                alt="icon"
                width={75}
                height={75}
              />
              <p className="text-white font-bold text-lg my-3">تجربه</p>
            </div>
            <hr className="w-20 rotate-90 mt-10 text-white" />
            <div className="flex flex-col items-center justify-center mx-15">
              <Image
                src="/icons/icons8-architect-50 (1).png"
                alt="icon"
                width={75}
                height={75}
                className="filter sepia hue-rotate-[20deg] saturate-200"
              />
              <p className="text-white font-bold text-lg my-3">تخصص</p>
            </div>
            <hr className="w-20 rotate-90 mt-10 text-white" />
            <div className="flex flex-col items-center justify-center mx-15">
              <Image
                src="/icons/icons8-workshop-50.png"
                alt="icon"
                width={75}
                height={75}
              />
              <p className="text-white font-bold text-lg my-3">تشخص</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
