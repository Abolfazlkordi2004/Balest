import React from "react";
import toPersianDigits from "../helper/persian";

function SideLeftContent() {
  return (
    <div className="hidden md:fixed md:flex flex-col items-center justify-start left-0 top-[75px] z-40 h-full w-[70px] bg-white shadow-md">
      <div className=" w-full rotate-[-90deg] mt-70">
        <p className="text-gray-500 text-xl text-nowrap font-bold" lang="fa">
          با ما تماس بگیرید:{toPersianDigits("02177321804")}
        </p>
      </div>
     
    </div>
  );
}

export default SideLeftContent;
