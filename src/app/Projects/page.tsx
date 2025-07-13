import Image from "next/image";
import React from "react";

function Projects() {
  return (
    <div>
      <div className="w-full h-[600px] relative overflow-hidden">
        <Image
          src="/img/پل-بیلقان-4.jpg"
          alt="image"
          fill
          className="object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-20">
          <h1 className="text-white text-4xl font-bold">پروژه ها</h1>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Projects;
