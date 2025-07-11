"use client";
import React, { useEffect, useState } from "react";
import ImageGallery from "../components/imageGallery";
import axios from "axios";

type ImageData = {
  img: string;
};

function Commendation() {
  const [data, setData] = useState<ImageData[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/certification")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  });
  return (
    <div className="py-40 px-40">
      <div className="flex flex-col justify-center items-center mb-16">
        <h2 className="text-4xl font-bold"> تقدیرنامه ها </h2>
        <hr className="w-24 border-t-[2px] border-[#F9A220] my-5" />
      </div>
      <ImageGallery img={data.map((item) => item.img)} />
    </div>
  );
}

export default Commendation;
