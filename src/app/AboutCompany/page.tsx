import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import ImagePreview from "../components/imagePreview";

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
        <div className="my-24">
          <div className="flex flex-col justify-center items-end my-2">
            <h2 className="text-4xl font-bold">بیانیه ماموریت</h2>
            <hr className="w-40 border-t-[3px] border-[#F9A220] my-5" />
          </div>
          <div className="flex flex-row-reverse justify-center items-center w-full gap-10">
            <div className="w-1/2">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>فلسفه</AccordionTrigger>
                  <AccordionContent>
                    باورها ، ارزشهای اخلاقی اصلی ما با معیارهای فدراسیون بین
                    المللی مشاور FIDIC و فرهنگ غنی ایران اسلامی سازگاری دارد
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>ویژگی های ممتاز</AccordionTrigger>
                  <AccordionContent>
                    ما در صدد هستیم با مدیریت زمان و ارتقا و همگرایی توانایی های
                    کارکنان و مدیران خلاق خود در حرفه مهندس مشاور از بهترین ها
                    باشیم . محور فعالیت های ما توجه به نیاز های کارفرما ( مشتری
                    گرائی ) است
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>توجه به انتظارهای مردم</AccordionTrigger>
                  <AccordionContent>
                    ما خود را از دیدگاه فرهنگی ، اجتماعی ، اقتصادی و زیست محیطی
                    در قبال مردم مسئول میدانیم و همواره می کوشیم آثار سوء
                    احتمالی طرح های عمرانی در ارتباط با زمینه های یاد شده کمینه
                    گردد
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>توجه به کارکنان</AccordionTrigger>
                  <AccordionContent>
                    ما می دانیم که مجموعه ای از عوامل معنوی و مادی برای کارکنان
                    ایجاد انگیزه می کند ، لذا همواره در پی آنیم تا با مهیا کردن
                    محیط کاری آرام و سالم ، آموزش حین خدمت و توسعه منابع انسانی
                    متخصص، توجه به نیاز های معنوی کارکنان ، بهبود مستمر فرآیند
                    های و فعالیت ها ، پرداخت حقوق مناسب و ارائه مزایای جنبی ،
                    ضمن ایجاد انگیزه در روحیه برای آنان ، میزان وفاداری ایشان را
                    نیز بیشینه کنیم
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="w-1/2">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>کارفرمایان</AccordionTrigger>
                  <AccordionContent>
                    کارفرمایان ما همه وزارت خانه ها ، استانداریها ، شهرداری ها ،
                    سازمان ها ، اداره ها و شرکت های دولتی و خصوصی هستند.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>بازارها</AccordionTrigger>
                  <AccordionContent>
                    ما می کوشیم در سراسر ایران و کشوره ای عضو سازمان کنفرانس
                    اسلامی OIC خدمات خود را ارائه کنیم.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>فن آوری</AccordionTrigger>
                  <AccordionContent>
                    ما همواره سعی می کنیم با استفاده از فن آوری های روز در حرفه
                    خود با بکارگیری جدید ترین استاندارد های درون کشوری و برون
                    کشوری وظایف خویش را به انجام برسانیم .
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    توجه به بقای رشد و سودآوری
                  </AccordionTrigger>
                  <AccordionContent>
                    سعی ما بر این است که یک سازمان یادگیرنده باشیم تا بتوانیم از
                    طریق مشارکت به توسعه پایدار دست یابیم . ما خدمات خود را بر
                    اساس تعرفه های سازمان مدیریت و برنامه ریزی کشور و سایر مراجع
                    قانونی به کارفرمایان ارائه می کنیم . از اینرو چشمداشت ما به
                    سود تعیین شده توسط تعرفه های مزبور است .
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse items-start gap-10">
          <div className="flex flex-col justify-center items-end my-2">
            <h2 className="text-5xl font-bold"> نمودار سازمانی </h2>
            <p className="text-[18px] my-2 text-gray-600">
              برای بهتر دیدن بر روی نمودار سازمانی کلیک کنید
            </p>
            <hr className="w-40 border-t-[3px] border-[#F9A220] my-5" />
          </div>
          <div className="w-[790px] h-[470px] relative overflow-hidden">
            <ImagePreview src="/img/chart-fa.jpg" alt="photo"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCompany;
