import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

// لیست همه پروژه‌ها
const allProjects = [
  {
    id: "bridge-1",
    title: "پل بیلقان",
    image: "/img/photo_1.jpg",
    category: "bridge",
    description: "این پل در منطقه بیلقان واقع شده و در سال 1400 ساخته شده است.",
  },
  {
    id: "highway-1",
    title: "آزادراه تهران شمال",
    image: "/img/photo_1.jpg",
    category: "highway",
    description: "این پروژه یکی از بزرگترین پروژه‌های راه‌سازی کشور است.",
  },
  {
    id: "building-1",
    title: "برج الف",
    image: "/img/photo_1.jpg",
    category: "building",
    description: "ساختمان 15 طبقه‌ای در قلب تهران.",
  },
];

type ProjectDetailsProps = {
  params: {
    id: string;
  };
};

// ✅ تابع برای ساخت مسیرهای استاتیک در زمان build
// export async function generateStaticParams() {
//   return allProjects.map((project) => ({
//     id: project.id,
//   }));
// }

const ProjectDetailsPage = ({ params }: ProjectDetailsProps) => {
  const project = allProjects.find((item) => item.id === params.id);

  if (!project) return notFound();

  return (
    <div className="flex flex-col items-center py-30 max-w-[1200px] mx-auto">
      <h1 className="text-4xl text-gray-400 font-bold mb-10">
        {project.title}
      </h1>
      <div className="flex flex-row gap-5 w-full">
        <div className="bg-[#242424] flex flex-col justify-center items-center w-[700px] h-[450px]">
          <p className="text-white text-3xl font-bold">نام کارفرما:1</p>
          <p className="text-white text-3xl font-bold">
            زمان اغاز خدمات مهندس مشاور:2
          </p>
          <p className="text-white text-3xl font-bold">
            زمان پایان خدمات مهندس مشاور:3
          </p>
        </div>
        <div className="w-[1000px] h-[450px] relative mb-6 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="text-right w-full">
        <h2 className="text-3xl font-bold"> شرحی از پروژه </h2>
        <p className="text-xl text-gray-500">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
