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
    <div className="flex flex-col justify-center items-center gap-10 py-10">
      {data?.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row-reverse items-center w-2/3 gap-10 border-b pb-10"
        >
          <div>
            <Link href="#">
              <Image
                src={item.img}
                alt="project-image"
                width={500}
                height={400}
                className="rounded-xl"
              />
            </Link>
          </div>
          <div dir="rtl" className="flex flex-col justify-center text-right">
            <Link href="#">
              <h1 className="text-3xl font-bold">{item.header}</h1>
            </Link>
            <p className="text-lg text-gray-700 my-5 leading-relaxed">
              {item.text}
            </p>
            <Link href="#">
              <p className="text-base text-[#F9A220] mt-4">بیشتر بخوانید</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectComp;
