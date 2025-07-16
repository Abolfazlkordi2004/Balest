"use client";
import axios from "axios";
import Image from "next/image";
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
    const slug = params?.slug;
    if (slug && typeof slug === "string") {
      axios
        .get<INewsDetailsProps[]>("http://localhost:3001/galleryCategory")
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
  }, [params?.slug]);
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.date}</h2>
          <h1>{item.header}</h1>
          <p>اخبار درون سازمانی</p>
          <hr />
          <p>{item.text}</p>
          <div className="flex flex-row justify-center items-center">
            <div>
              {item.img.map((item, indexImg) => (
                <div
                  key={indexImg}
                  className="w-[150px] h-[150px] relative overflow-hidden"
                >
                  <Image
                    src={item}
                    alt="images"
                    fill
                    className="object-cover"
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
