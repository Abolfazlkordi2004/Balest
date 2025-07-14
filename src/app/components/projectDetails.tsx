import React from "react";

function ProjectDetails() {
  return (
    <div className="w-full max-w-[450px] h-[550px] bg-[url('/img/polBeilaghan.jpg')] bg-cover bg-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-20">
        <h1 className="text-white text-2xl font-bold">پروژه‌ها</h1>
      </div>
    </div>
  );
}

export default ProjectDetails;
