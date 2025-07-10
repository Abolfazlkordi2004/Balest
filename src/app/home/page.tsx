"use client"
import ImageSlider from "../components/imageSlider";
import Image from "next/image";
import ProjectComp from "../components/projectComp";
import { useForm } from "react-hook-form";

type FormValues = {
  Name: string;
  email: string;
  text: string;
};

function HomePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
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
            <hr className="w-10 border-t-3 border-[#F9A220] mx-3 mt-8" />
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
      <div className="flex flex-col items-center justify-center">
        <div className="w-2/3 flex justify-end">
          <h1 className="text-black text-4xl font-bold"> اخرین پروژه ها</h1>
          <hr className="w-10 border-t-3 border-[#F9A220] mx-3 mt-8" />
        </div>
        <ProjectComp />
      </div>
      <div className="w-full h-[600px] bg-[#F9A220] overflow-hidden relative px-60">
        <Image
          src="/img/pattern-2.png"
          alt="pattern"
          fill
          className="object-contain object-right right-0 z-0 absolute"
        />
        <div className="flex justify-end w-full relative z-20 mt-15">
          <h1 className="text-4xl font-bold text-right z-10">در تماس باشید</h1>
          <hr className="w-10 border-t-3 border-black mx-3 mt-8" />
        </div>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          {" "}
          <div className="flex justify-center items-center w-full h-full pb-35">
            <div className="flex flex-col w-1/2 h-full justify-center items-center z-10">
              <div className="w-[450px] my-5 relative ">
                <input
                  {...register("Name", { required: "پرکردن نام الزامی است" })}
                  type="text"
                  placeholder="نام خود را وارد کنید "
                  className="w-full text-black text-right text-xl placeholder-black focus:outline-none"
                />
                {errors.Name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.Name.message}
                  </p>
                )}
                <hr className="w-full text-black mt-5" />
              </div>
              <div className="w-[450px] my-5 relative ">
                <input
                  {...register("email", {
                    required: "پرکردن ایمیل الزامی است ",
                  })}
                  type="email"
                  placeholder=" ایمیل خود را وارد کنید "
                  className="w-full text-black text-right text-xl placeholder-black focus:outline-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
                <hr className="w-full text-black mt-5" />
              </div>
              <div className="w-[450px] h-[100px] my-5 relative ">
                <textarea
                  {...register("text", { required: "پیغام خوذ وارد کنید " })}
                  className="w-full h-full text-black text-right text-xl placeholder-black focus:outline-none"
                  placeholder="پیغام شما"
                ></textarea>
                {errors.text && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.text.message}
                  </p>
                )}
                <hr className="w-full text-black mt-5" />
              </div>
              <div className="w-[450px] mt-10 text-right">
                <button className="text-lg text-[#F9A220] bg-black opacity-80 w-[70px] h-[40px] cursor-pointer">
                  ثبت
                </button>
              </div>
            </div>
            <hr className="w-[500px] rotate-90 my-10" />
            <div className="flex flex-col w-1/2 h-full justify-center items-center z-10">
              <div className="flex flex-row-reverse w-full gap-10 ">
                <div className="w-1/4">
                  <Image
                    src="/icons/icons8-map-50.png"
                    alt="map"
                    width={35}
                    height={35}
                  />
                </div>
                <div dir="rtl" className="w-3/4">
                  <h2 className="font-bold text-lg">دفترکار</h2>
                  <p className="text-lg">
                    تهران، کارگر شمالی <br /> پایین‌تر از تقاطع جلال آل‌احمد،
                    پلاک <br />
                    ۱۲ کد پستی ۸۳۸۴۳ - ۱۴۱۳۶
                  </p>
                </div>
              </div>
              <div className="flex flex-row-reverse w-full gap-10 my-10">
                <div className="w-1/4">
                  <Image
                    src="/icons/icons8-envelope-50.png"
                    alt="map"
                    width={35}
                    height={35}
                  />
                </div>
                <div className="w-3/4" dir="rtl">
                  <h2 className="font-bold text-lg">ایمیل</h2>
                  <p className="text-lg">info@sazian.net</p>
                  <p className="text-lg">support@sazian.net</p>
                </div>
              </div>
              <div className="flex flex-row-reverse w-full gap-10">
                <div className="w-1/4">
                  <Image
                    src="/icons/icons8-phone-50.png"
                    alt="map"
                    width={35}
                    height={35}
                  />
                </div>
                <div className="w-3/4" dir="rtl">
                  <h2 className="font-bold text-lg">تماس</h2>
                  <p className="text-lg">۸۸۳۵۲۲۱۸</p>
                  <p className="text-lg">۸۸۳۵۲۲۳۴</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default HomePage;
