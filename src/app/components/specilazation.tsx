import React from "react";
import Image from "next/image";

function Specilzation() {
  return (
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
  );
}

export default Specilzation;
