// components/projectDetails.tsx
import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  image: string;
};

function ProjectDetails({ title, image }: Props) {
  return (
    <div className="shadow-lg p-4 rounded-lg bg-white">
      <Image src={image} alt={title} width={400} height={300} className="rounded-lg object-cover" />
      <h2 className="text-xl mt-4 font-semibold text-center">{title}</h2>
    </div>
  );
}

export default ProjectDetails;
