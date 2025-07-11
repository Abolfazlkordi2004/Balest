import Image from "next/image";
import React from "react";

export type IPerson = {
  img: string;
  name: string;
  text: string;
};

function Person({ img, name, text }: IPerson) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[370px] h-[400px] relative overflow-hidden">
        <Image src={img} alt="person" fill className="object-cover" />
      </div>
      <div className="flex flex-col justify-center items-center my-10">
        <h2 className="text-xl">{name}</h2>
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
}

export default Person;
