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
  const [data, SetData] = useState<IProjectCompProps>();
  useEffect(() => {
    axios
      .get("http://localhost:3001/projectContent")
      .then((response) => SetData(response.data))
      .then((error) => console.error(error));
  });
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-row-reverse items-center justify-center w-2/3 h-[500px] gap-10">
        <div>
          <Link href="#">
            <Image
              src={data!.img}
              alt="project-image"
              width={900}
              height={800}
            />
          </Link>
        </div>
        <div dir="rtl" className="flex flex-col justify-center">
          <Link href="#">
            <h1 className="text-4xl">{data?.header}</h1>
          </Link>
          <p className="text-xl text-gray-700 my-5">{data?.text}</p>
          <Link href="#">
            <p className="text-l text-[#F9A220] mt-10">بیشتر بخوانید </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectComp;
