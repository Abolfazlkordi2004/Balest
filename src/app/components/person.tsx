import Image from "next/image";
import React from "react";

type IPerson = {
  src: string;
  name: string;
  text: string;
};

function Person({ src, name, text }: IPerson) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[370px] h-[450px] relative overflow-hidden">
        <Image src={src} alt="person" fill className="object-cover" />
      </div>
      <div>
        <h2>{name}</h2>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Person;
