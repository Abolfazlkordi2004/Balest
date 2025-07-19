import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  title: string;
  image: string;
};

function ProjectDetails({ id,title, image }: Props) {
  return (
    <div className="w-full max-w-[450px] h-[550px] relative rounded-lg overflow-hidden shadow-lg group">
     <Link href={`/Projects/${id}`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-20">
          <h1 className="text-white text-2xl font-bold text-center px-4">
            {title}
          </h1>
        </div>
      </Link>
    </div>
  );
}

export default ProjectDetails;
