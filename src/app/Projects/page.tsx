"use client";
import Image from "next/image";
import React, { useState } from "react";
import ProjectSideBar from "../components/projectSideBar";
import ProjectDetails from "../components/projectDetails";

export type ProjectType = {
  id: string;
  title: string;
  image: string;
  category: "building" | "highway" | "bridge";
};
const allProjects = [
  {
    id: "bridge-1",
    title: "پل بیلقان",
    image: "/img/bridge1.jpg",
    category: "bridge",
    description: "این پل در منطقه بیلقان واقع شده و در سال 1400 ساخته شده است.",
  },
  {
    id: "highway-1",
    title: "آزادراه تهران شمال",
    image: "/img/highway1.jpg",
    category: "highway",
    description: "این پروژه یکی از بزرگترین پروژه‌های راه‌سازی کشور است.",
  },
  {
    id: "building-1",
    title: "برج الف",
    image: "/img/building1.jpg",
    category: "building",
    description: "ساختمان 15 طبقه‌ای در قلب تهران.",
  },
];


function Projects() {
  const [activeCategory, setActiveCategory] = useState<
    "building" | "highway" | "bridge"
  >("building");

  const filteredProjects = allProjects.filter(
    (p) => p.category === activeCategory
  );

  return (
    <div>
      <div className="w-full h-[600px] relative overflow-hidden">
        <Image
          src="/img/polBeilaghan.jpg"
          alt="image"
          fill
          className="object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-20">
          <h1 className="text-white text-4xl font-bold">پروژه ها</h1>
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <ProjectSideBar active={activeCategory} setActive={setActiveCategory} />
        <hr className="text-gray-400 w-[700px] text-center my-10" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1500px] px-6 py-10 mx-auto w-full">
          {filteredProjects.map((project) => (
            <ProjectDetails
              key={project.id}
              id={project.id}
              title={project.title}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
