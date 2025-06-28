import React from "react";

function SideLeftContent() {
  return (
    <div className="fixed flex flex-col items-center justify-centerleft-0 top-[75px] z-40 h-full w-[70px] bg-white shadow-md">
      <div className=" w-full rotate-[-90deg] mt-70">
        <p className="text-gray-500 text-lg text-nowrap">
          با ما تماس بگیرید: ۸۸۳۵۲۲۱۸ - ۸۸۳۵۲۲۳۴
        </p>
      </div>
      <div className="flex flex-col mt-80">
        <p>1</p>
        <p>2</p>
      </div>
    </div>
  );
}

export default SideLeftContent;
