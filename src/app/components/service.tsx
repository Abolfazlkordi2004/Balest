"use client";
import axios from "axios";
// import Image from "next/image";
import React, { useEffect, useState } from "react";

type IServiceProps = {
  img: string;
  header: string;
  text: string;
};

function ServiceComp() {
  const [data, setData] = useState<IServiceProps[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/services")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  });
  return (
    <>
      {data.map((item, index) =>
        index % 2 == 0 ? (
          <div
            className="w-[1170px] h-[400px] shadow-xl flex flex-row items-center justify-center bg-white"
            key={index}
          >
            {/* <div className="w-[35%]">
              <Image src={item.img} alt="image" fill className="object-cover" />
            </div> */}
            <div className="flex flex-col justify-center items-center w-[65%] h-full">
              <h2>{item.header}</h2>
              <p>{item.text}</p>
            </div>
          </div>
        ) : (
          <div
            className="w-[1170px] h-[400px] shadow-xl flex flex-row-reverse items-center justify-center bg-black opacity-80"
            key={index}
          >
            {/* <div className="w-[35%]">
              <Image src={item.img} alt="image" fill className="object-cover" />
            </div> */}
            <div className="flex flex-col justify-center items-center w-[65%] h-full">
              <h2>{item.header}</h2>
              <p>{item.text}</p>
            </div>
          </div>
        )
      )}
    </>
  );
}

export default ServiceComp;
