import Image from "next/image";
import React from "react";
import ProjectSideBar from "../components/projectSideBar";
import ProjectDetails from "../components/projectDetails";

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
      <div className="w-full h-full flex flex-col justify-center items-center">
        <ProjectSideBar />
        <hr className="text-gray-400 w-[700px] text-center my-10"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1500px] px-6 py-10 mx-auto w-full">
          <ProjectDetails />
          <ProjectDetails />
          <ProjectDetails />
          <ProjectDetails />
          <ProjectDetails />
          <ProjectDetails />
        </div>
      </div>
    </div>
  );
}

export default Projects;
