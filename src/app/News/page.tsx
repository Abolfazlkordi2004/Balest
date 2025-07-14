import React from "react";
import NewsComp from "../components/newsComp";

function News() {
  return (
    <div className="grid grid-cols-2 w-full h-full justify-items-center">
      <NewsComp />
      <NewsComp />
    </div>
  );
}

export default News;
