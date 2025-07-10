import React from 'react'
import Image from "next/image";

function Studio() {
  return (
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
  )
}

export default Studio