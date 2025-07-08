import Image from "next/image";
import Link from "next/link";
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
        <Link href="#">
          <Image
            src="/icons/icons8-instagram-logo-32.png"
            alt="instagram"
            width={25}
            height={25}
          />
        </Link>
        <Link href="#">
          <Image
            src="/icons/icons8-linkedin-48.png"
            alt="linkedin"
            width={25}
            height={25}
          />
        </Link>
      </div>
    </div>
  );
}

export default SideLeftContent;
