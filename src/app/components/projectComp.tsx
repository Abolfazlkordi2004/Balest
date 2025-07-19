"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type IProjectCompProps = {
  img: string;
  header: string;
  text: string;
};

function ProjectComp() {
  const [data, SetData] = useState<IProjectCompProps[]>();

  useEffect(() => {
    axios
      .get("http://localhost:3001/projectContent")
      .then((response) => SetData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center my-5 w-full">
      {data?.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col w-full md:w-2/3 items-center gap-10 my-10 ${
            index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <div className="w-full md:w-[65%] px-10">
            <Link href="#">
              <Image
                src={item.img}
                alt="project-image"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </Link>
          </div>
          <div
            dir="rtl"
            className="flex flex-col justify-center md:w-[35%] w-full px-10 text-right"
          >
            <Link href="#">
              <h1 className="text-4xl font-bold">{item.header}</h1>
            </Link>
            <p className="text-xl text-justify leading-loose text-gray-700 my-5 w-full">{item.text}</p>
            <Link href="#">
              <p className="text-[#F9A220] text-lg mt-4">بیشتر بخوانید</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectComp;
