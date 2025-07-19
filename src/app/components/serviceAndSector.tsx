"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type IServiceProps = {
  img: string;
  header: string;
  text: string;
};

type Props = {
  src: string;
};

function ServiceAndSectorComp({ src }: Props) {
  const [data, setData] = useState<IServiceProps[]>([]);
  useEffect(() => {
    axios
      .get(src)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  });
  return (
    <>
      {data.map((item, index) =>
        index % 2 == 0 ? (
          <div
            className="w-[1170px] h-[300px] shadow-2xl flex flex-row items-center justify-center bg-white"
            key={index}
          >
            <div className="h-full w-[45%] relative overflow-hidden">
              <Image src={item.img} alt="image" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center items-end w-[65%] h-full px-10">
              <h2 className="text-3xl font-bold">{item.header}</h2>
              <hr className="w-10 border-t-[2px] border-[#F9A220] my-2" />
              <p className="py-5 text-right text-lg">{item.text}</p>
            </div>
          </div>
        ) : (
          <div
            className="w-[1170px] h-[300px] shadow-xl flex flex-row-reverse items-center justify-center bg-black opacity-80"
            key={index}
          >
            <div className="h-full w-[45%] relative overflow-hidden">
              <Image src={item.img} alt="image" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center items-end w-[65%] h-full px-10">
              <h2 className="text-3xl font-bold text-white">{item.header}</h2>
              <hr className="w-10 border-t-[2px] border-[#F9A220] my-2" />
              <p className="py-5 text-right text-white text-lg">{item.text}</p>
            </div>
          </div>
        )
      )}
    </>
  );
}

export default ServiceAndSectorComp;
