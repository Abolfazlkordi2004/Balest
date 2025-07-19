"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import toPersianDigits from "../helper/persian";

type FormValues = {
  Name: string;
  email: string;
  text: string;
};

function PhoneUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  return (
    <div className="w-full h-full md:h-[600px] bg-[#F9A220] overflow-hidden relative md:px-60">
      <Image
        src="/img/pattern-2.png"
        alt="pattern"
        fill
        className="object-contain object-right right-0 z-0 absolute"
      />
      <div className="flex justify-end w-full relative z-20 md:mt-15 my-10">
        <h1 className="text-4xl font-bold text-right z-10 text-nowrap">
          در تماس باشید
        </h1>
        <hr className="w-10 border-t-2 border-black mx-3 mt-8" />
      </div>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        {" "}
        <div className="flex flex-col md:flex-row justify-center items-center w-full h-full pb-35">
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
                {...register("text", { required: "پیغام خود وارد کنید " })}
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
                className="text-lg text-[#F9A220] bg-black opacity-80 w-[70px] h-[40px] cursor-pointer"
              >
                ثبت
              </button>
            </div>
          </div>
          <hr className="hidden md:block md:w-[500px] rotate-90 my-10" />
          <div className="flex flex-col md:w-1/2 w-full h-full justify-center items-center z-10 gap-6 pt-20 md:pt-0">
            <div className="flex flex-row-reverse items-start w-full gap-4">
              <div className="w-[15%] min-w-[40px] flex justify-center">
                <Image
                  src="/icons/icons8-map-50.png"
                  alt="map"
                  width={35}
                  height={35}
                />
              </div>
              <div className="w-[85%]" dir="rtl">
                <h2 className="font-bold text-xl">دفترکار</h2>
                <p className="text-xl text-nowrap">
                  تهران، تهرانپارس <br />
                  بلوار پروین نبش {toPersianDigits("204")} شرقی، پلاک{" "}
                  {toPersianDigits("36")}
                  <br />
                  کد پستی: {toPersianDigits("165579316")}
                </p>
              </div>
            </div>

            <div className="flex flex-row-reverse items-start w-full gap-4">
              <div className="w-[15%] min-w-[40px] flex justify-center">
                <Image
                  src="/icons/icons8-envelope-50.png"
                  alt="email"
                  width={35}
                  height={35}
                />
              </div>
              <div className="w-[85%]" dir="rtl">
                <h2 className="font-bold text-xl">ایمیل</h2>
                <p className="text-xl">balest.abnieh@gmail.com</p>
              </div>
            </div>

            <div className="flex flex-row-reverse items-start w-full gap-4">
              <div className="w-[15%] min-w-[40px] flex justify-center">
                <Image
                  src="/icons/icons8-phone-50.png"
                  alt="phone"
                  width={35}
                  height={35}
                />
              </div>
              <div className="w-[85%]" dir="rtl">
                <h2 className="font-bold text-xl">تماس</h2>
                <p className="text-xl font-bold">
                  {toPersianDigits("02177321804")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PhoneUs;
