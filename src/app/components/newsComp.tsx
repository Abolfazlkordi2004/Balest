import Image from "next/image";
import React from "react";
import toPersianDigits from "../helper/persian";

function NewsComp() {
  return (
    <div className="w-[650px] h-full flex justify-center items-start">
      <div className="w-full h-[500px] relative overflow-hidden">
        <Image src="/img/photo_1.jpg" alt="Image" fill className="object-cover" />
      </div>
      <h2 className="w-full text-black">{toPersianDigits("1400/1/1")}</h2>
      <h1 className="w-full">افتتاح پروژه قم</h1>
      <p className="w-full">مراسم افتتاح پروژه قم</p>
      <div className="w-[200px] h-[100px]">
        <button
          type="submit"
          className="text-lg text-white font-bold bg-[#F9A220] w-[120px] h-[50px] rounded-3xl cursor-pointer"
        >
          ثبت
        </button>
      </div>
    </div>
  );
}

export default NewsComp;
