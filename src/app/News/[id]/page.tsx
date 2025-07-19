"use client";
import ImagePreview from "@/app/components/imagePreview";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type INewsDetailsProps = {
  slug: string;
  date: string;
  header: string;
  text: string;
  img: string[];
};

function NewsDetails() {
  const params = useParams();

  const [data, setData] = useState<INewsDetailsProps[]>([]);
  useEffect(() => {
    const slug = params.id;
    if (slug && typeof slug === "string") {
      axios
        .get<INewsDetailsProps[]>("http://localhost:3001/NewsDetails")
        .then((res) => {
          const result = res.data.find((item) => item.slug === slug);
          if (result) {
            setData([result]);
          } else {
            setData([]);
          }
        })
        .catch((error) => {
          console.error("Error fetching branch data:", error);
        });
    }
  }, [params.id]);
  return (
    <div className="flex flex-col justify-center items-center py-30 text-right">
      {data.map((item, index) => (
        <div key={index}>
          <h2 className="text-[#F9A220] text-xl">{item.date}</h2>
          <h1 className="text-3xl font-bold py-4">{item.header}</h1>
          <p className="text-gray-500 text-xl font-bold py-4">
            اخبار درون سازمانی
          </p>
          <hr />
          <p className="text-gray-500 text-xl py-4">{item.text}</p>
          <div>
            <div className="flex flex-row gap-4">
              {item.img.map((item, indexImg) => (
                <div key={indexImg}>
                  <ImagePreview
                    src={item}
                    alt="images"
                    width={250}
                    height={250}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsDetails;
