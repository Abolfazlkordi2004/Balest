"use client"
import React, { useEffect, useState } from "react";
import NewsComp from "../components/newsComp";
import axios from "axios";

export type NewsProps = {
  slug: string;
  date: string;
  header: string;
  text: string;
  img: string;
};

function News() {
  const [data, setData] = useState<NewsProps[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/News")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="grid grid-cols-2 w-full h-full justify-items-center py-40 px-[300px]">
      {data.map((item) => {
        return (
          <NewsComp
            key={item.slug}
            date={item.date}
            header={item.header}
            img={item.img}
            slug={item.slug}
            text={item.text}
          />
        );
      })}
    </div>
  );
}

export default News;
