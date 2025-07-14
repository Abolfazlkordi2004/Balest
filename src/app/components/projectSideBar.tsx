"use client"
import Link from "next/link";
import React, { useState } from "react";

function ProjectSideBar() {
  const [active, setActive] = useState("");
  return (
    <div className="flex justify-center items-center my-15 w-full h-full">
      <ul className="flex flex-row justify-center items-center gap-40">
        <li>
          <Link
            href="#building"
            onClick={() => setActive("building")}
            className={`text-xl hover:text-[#F9A220] ${
              active === "building" ? "text-[#F9A220]" : ""
            }`}
          >
            ساختمان
          </Link>
        </li>
        <li>
          <Link
            href="#highway"
            onClick={() => setActive("highway")}
            className={`text-xl hover:text-[#F9A220] ${
              active === "highway" ? "text-[#F9A220]" : ""
            }`}
          >
            راه و ازادراه
          </Link>
        </li>
        <li>
          <Link
            href="#bridge"
            onClick={() => setActive("bridge")}
            className={`text-xl hover:text-[#F9A220] ${
              active === "bridge" ? "text-[#F9A220]" : ""
            }`}
          >
            پل
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ProjectSideBar;
