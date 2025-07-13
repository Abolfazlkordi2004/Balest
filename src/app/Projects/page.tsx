import Image from "next/image";
import Link from "next/link";
import React from "react";

function Projects() {
  return (
    <div>
      <div className="w-full h-[600px] relative overflow-hidden">
        <Image
          src="/img/پل-بیلقان-4.jpg"
          alt="image"
          fill
          className="object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-20">
          <h1 className="text-white text-4xl font-bold">پروژه ها</h1>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex justify-center items-center my-10">
          <ul className="flex flex-row justify-center items-center gap-40">
            <Link href="#">
              <li className="text-xl hover:text-[#F9A220]">ساختمان </li>
            </Link>
            <Link href="#">
              <li className="text-xl hover:text-[#F9A220]">راه و ازاد راه</li>
            </Link>
            <Link href="#">
              <li className="text-xl hover:text-[#F9A220]">پل</li>
            </Link>
          </ul>
        </div>
        <div className="grid grid-cols-3">

        </div>
      </div>
    </div>
  );
}

export default Projects;
