import React from "react";
import NewsComp from "../components/newsComp";

function News() {
  return (
    <div className="grid grid-cols-2 w-full h-full justify-items-center pt-40 px-[300px]">
      <NewsComp />
      <NewsComp />
    </div>
  );
}

export default News;
