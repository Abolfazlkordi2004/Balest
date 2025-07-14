import Image from "next/image";
import React from "react";
import toPersianDigits from "../helper/persian";
import Link from "next/link";

function NewsComp() {
  return (
    <div className="w-[500px] h-full flex flex-col justify-center items-end">
      <div className="w-full h-[500px] relative overflow-hidden">
        <Link href="#">
          <Image
            src="/img/photo_1.jpg"
            alt="Image"
            fill
            className="object-cover"
          />
        </Link>
      </div>
      <h2 className="w-full text-black text-right my-1 text-xl">
        {toPersianDigits("1400/1/1")}
      </h2>
      <Link href="#">
        <h1 className="w-full text-black text-right my-1 font-bold text-2xl">
          افتتاح پروژه قم
        </h1>
      </Link>
      <p className="w-full text-gray-600 text-right my-1">
        مراسم افتتاح پروژه قم
      </p>
      <div className="w-[200px] h-[100px] text-right my-5">
        <button
          type="submit"
          className="text-lg text-white font-bold bg-[#F9A220] w-[120px] h-[50px] rounded-2xl cursor-pointer"
        >
          ثبت
        </button>
      </div>
    </div>
  );
}

export default NewsComp;
