import Link from 'next/link'
import React from 'react'

function ProjectSideBar() {
  return (
       <div className="flex justify-center items-center my-15 w-full h-full">
          <ul className="flex flex-row justify-center items-center gap-40">
            <Link href="#">
              <li className="text-xl hover:text-[#F9A220]">ساختمان </li>
            </Link>
            <Link href="#">
              <li className="text-xl hover:text-[#F9A220]">راه و ازاد راه</li>
            </Link>
            <Link href="#">
              <li className="text-xl hover:text-[#F9A220]">پل</li>
            </Link>
          </ul>
        </div>
  )
}

export default ProjectSideBar