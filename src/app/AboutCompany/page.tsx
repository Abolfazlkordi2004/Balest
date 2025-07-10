import Image from "next/image";
import React from "react";

function AboutCompany() {
  return (
    <div>
      <div className="flex flex-col mx-auto w-[1170px] h-full">
        <div className="w-full h-[440px] relative overflow-hidden mt-40">
          <Image
            src="/img/about-1.jpg"
            alt="image"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-row-reverse justify-center items-start w-full gap-24 my-20">
          <div className="flex flex-col justify-center items-end">
            <h2 className="text-4xl font-bold">تاریخچه </h2>
            <hr className="w-14 border-t-[3px] border-[#F9A220] my-5" />
          </div>
          <div dir="rtl">
            <p className="text-gray-700 mb-10 text-lg text-justify">
              مهندسین مشاور سازیان در سال ۱۳۶۹ خورشیدی پایه گذاری شد. این شرکت
              طی سالیان گذشته در زمینه های گوناگون مهندسی عمران فعالیت داشته و
              پروژه های بسیاری را از مراحل مطالعاتی تا تحویل قطعی پس از ساخت، به
              انجام رسانده است .
            </p>
            <p className="text-gray-700 text-justify text-lg">
              اکنون این مهندسین مشاور با تخصص های گوناگون، خدمات مشاوره و مدیریت
              طرح را به بخشهای دولتی و خصوصی ارائه می دهد. هدف اصلی شرکت، مشارکت
              در برنامه های عمرانی و توسعه پایدار کشور و ارتقا کیفیت خدمات حرفه
              مهندسین مشاور است و دراین راستا منابع انسانی خود را درگرایشهای
              تخصصی گوناگون توسعه داده است .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCompany;
