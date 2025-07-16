// components/ProjectSideBar.tsx
"use client";
import React from "react";
type Props = {
  active: "building" | "highway" | "bridge";
  setActive: (category: "building" | "highway" | "bridge") => void;
};


function ProjectSideBar({ active, setActive }: Props) {
  return (
    <div className="flex justify-center items-center mt-10 w-full h-full">
      <ul className="flex flex-row justify-center items-center gap-40">
        <li>
          <button
            onClick={() => setActive("building")}
            className={`text-xl hover:text-[#F9A220] ${
              active === "building" ? "text-[#F9A220]" : ""
            }`}
          >
            ساختمان
          </button>
        </li>
        <li>
          <button
            onClick={() => setActive("highway")}
            className={`text-xl hover:text-[#F9A220] ${
              active === "highway" ? "text-[#F9A220]" : ""
            }`}
          >
            راه و آزادراه
          </button>
        </li>
        <li>
          <button
            onClick={() => setActive("bridge")}
            className={`text-xl hover:text-[#F9A220] ${
              active === "bridge" ? "text-[#F9A220]" : ""
            }`}
          >
            پل
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ProjectSideBar;
