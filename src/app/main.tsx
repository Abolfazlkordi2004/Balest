import React from "react";
import ImageSlider from "./components/imageSlider";

const slideImage=["/img/photo_1.jpg","/img/photo_2.jpg","/img/photo_3.jpg","/img/photo_4.jpg"]

function Main() {
  return <div>
    <ImageSlider images={slideImage}/>
  </div>;
}

export default Main;
