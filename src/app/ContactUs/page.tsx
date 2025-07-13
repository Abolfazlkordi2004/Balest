"use client";
import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import toPersianDigits from "../helper/persian";

type FormValues = {
  Name: string;
  email: string;
  text: string;
};

function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  return (
    <div className="w-full h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d809.5685651099293!2d51.54452308927262!3d35.74406318677965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e1d29cf54f80b%3A0xe8f8c01a45d35198!2z2YXZh9mG2K_Ys9uM2YYg2YXYtNin2YjYsSDYqNin2YTYs9iqINin2KjZhtuM2Yc!5e0!3m2!1sfa!2s!4v1752393352190!5m2!1sfa!2s"
        className="w-full h-[600px]"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="w-full h-full overflow-hidden relative px-60 py-20">
        <Image
          src="/img/pattern-7.png"
          alt="pattern"
          fill
          className="object-contain object-right right-0 z-0 absolute"
        />
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
                <button
                  type="submit"
                  className="text-lg text-white font-bold bg-[#F9A220] w-[120px] h-[50px] rounded-3xl cursor-pointer"
                >
                  ثبت
                </button>
              </div>
            </div>
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
                  <h2 className="font-bold text-xl my-4">ادرس</h2>
                  <p className="text-lg font-bold">
                    تهران، تهرانپارس <br /> بلوار پروین نبش
                    {toPersianDigits("204")} شرقی پلاک {toPersianDigits("36")}
                    <br />
                    کد پستی {toPersianDigits("165579316")}
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
                  <h2 className="font-bold text-xl my-4">ایمیل</h2>
                  <p className="text-lg font-bold">balest.abnieh@gmail.com</p>
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
                  <h2 className="font-bold text-xl my-4">تماس</h2>
                  <p className="text-lg font-bold">{toPersianDigits("02177321804")}</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
