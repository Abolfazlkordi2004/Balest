import React from "react";
import Image from "next/image";

function Studio() {
  return (
    <div className="px-4 sm:px-8 md:px-20 my-20">
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-10">
        <div className="w-full md:w-[650px]" dir="rtl">
          <h3 className="text-2xl my-2 italic">مهندسین مشاور بالست ابنیه</h3>
          <h1 className="text-4xl sm:text-5xl leading-relaxed">
            با بیش از یک دهه تجربه برای دستیابی
            <br />
            <span className="text-[#F9A220]">
              به توسعه پایدار در کشور می‌کوشد
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-800 my-8 text-justify leading-loose">
            شرکت مهندسین مشاور بالست ابنیه در سال 1388 در شهر تهران تاسیس شده
            است، این شرکت سهامی خاص است و دارای رتبه 3 در زمینه سازه و
            راهسازی است و در زمینه طراحی، مطالعات و نظارت فنی در کلیه گرایش‌ها
            از قبیل ساخت و تجهیزات راه و راه‌آهن، کلیه ساختمان‌های مسکونی، اداری، تجاری، صنعتی و اماکن ورزشی، انجام طراحی و نظارت فنی در تجهیزات فرودگاه‌ها و ترافیک شهری، واردات و صادرات در کلیه امور اجرایی پروژه‌ای طراحی و تجهیزات راه و راه آهن، آب و ساخت ساختمان‌های مسکونی، اداری و اماکن ورزشی، همراه با طراحی آن‌ها، انجام امور تحقیقاتی و پژوهشی در زمینه راه و راه‌آهن، آب و سازه، امور مربوط به تولید بتن و آسفالت و تجهیزات مرتبط با آن، انجام مطالعات و طراحی علائم ایمنی راه و راه‌آهن، انجام خدمات مشاور در مطالعات طراحی و نظارت کلیه پروژه‌های نفتی و گازی، انجام مطالعات طراحی شهری و برنامه‌ریزی شهری فعالیت دارد.
          </p>
        </div>
        <div className="w-[400px] sm:w-[400px] sm:h-[500px] bg-[#F9A220] flex justify-center items-center">
          <div className="md:-translate-x-10 md:translate-y-10 -translate-x-5 translate-y-5">
            <Image
              src="/img/photo_5.jpg"
              alt="photo-5"
              width={400}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Studio;
