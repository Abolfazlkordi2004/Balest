"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef, useState } from "react";

function Header() {
  const pathname = usePathname() || "";
  const [hoverMenu, setHoverMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setHoverMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoverMenu(null);
    }, 200);
  };

  return (
    <header className="fixed h-[75px] w-full z-50 shadow-2xl bg-white">
      <div className="mx-[70px] h-full flex items-center justify-between">
        <div className="h-full w-[100px] relative">
          <Link href="/">
            <Image
              src="/icons/balest40.jpg"
              alt="balest-logo"
              fill
              className="object-cover"
            />
          </Link>
        </div>
        <div className="ml-150">
          <ul className="flex flex-row-reverse gap-5">
            <Link href="/Home">
              <li className="hover:text-[#F9A220] text-lg cursor-pointer">
                صفحه اصلی
              </li>
            </Link>
            <li
              className="relative cursor-pointer"
              onMouseEnter={() => handleMouseEnter("aboutus")}
              onMouseLeave={() => handleMouseLeave()}
            >
              <Link
                href="#"
                className={`text-[16px] ${
                  pathname.startsWith("/AboutCompany") ||
                  pathname.startsWith("/Team") ||
                  pathname.startsWith("/Members") ||
                  pathname.startsWith("/Certification") ||
                  pathname.startsWith("/Memberships") ||
                  pathname.startsWith("/Commendation")
                    ? "text-[#F9A220]"
                    : ""
                } hover:text-[#F9A220] text-lg`}
              >
                درباره ی ما
              </Link>

              {hoverMenu === "aboutus" && (
                <ul className="absolute top-full right-0 mt-7 w-60 rounded-sm bg-white shadow-lg z-50">
                  {[
                    { href: "/AboutCompany", text: "درباره ی شرکت" },
                    // { href: "/Team", text: "سهامداران" },
                    // { href: "/Members", text: "هیئت مدیره و مدیر عامل" },
                    { href: "/Certification", text: "گواهی صلاحیت ها" },
                    { href: "/Memberships", text: "عضویت ها " },
                    { href: "/Commendation", text: "تقدیرنامه" },
                  ].map(({ href, text }) => (
                    <li
                      key={text}
                      className="px-4 py-2 text-gray-700 hover:text-[#F9A220] text-right whitespace-nowrap text-[16px]"
                    >
                      <Link
                        href={href}
                        className={pathname === href ? "text-[#F9A220]" : ""}
                      >
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <Link href="/Projects">
              <li className="hover:text-[#F9A220] text-lg cursor-pointer">
                پروژه ها
              </li>
            </Link>
            <Link href="/Sectors">
              <li className="hover:text-[#F9A220] text-lg cursor-pointer">
                گروه های تخصصی
              </li>
            </Link>
            <Link href="/Services">
              <li className="hover:text-[#F9A220] text-lg cursor-pointer">
                خدمات
              </li>
            </Link>
            <Link href="/News">
              <li className="hover:text-[#F9A220] text-lg cursor-pointer">
                اخبار
              </li>
            </Link>

            <li
              className="relative cursor-pointer"
              onMouseEnter={() => handleMouseEnter("photos")}
              onMouseLeave={() => handleMouseLeave()}
            >
              <Link
                href="#"
                className={`text-[16px] ${
                  pathname.startsWith("/photos") ? "text-[#F9A220]" : ""
                } hover:text-[#F9A220] text-lg`}
              >
                نگارخانه
              </Link>

              {hoverMenu === "photos" && (
                <ul className="absolute top-full right-0 mt-7 w-60 rounded-sm bg-white shadow-lg z-50">
                  {[
                    { href: "/Photos", text: "نمایش همه" },
                    { href: "/Photos/Road", text: "راهسازی" },
                    { href: "/Photos/Structure", text: "سازه" },
                    { href: "/Photos/Strengthening", text: "مقاوم سازی" },
                    { href: "/Photos/Water", text: "تأسیسات آب و فاضلاب" },
                    { href: "/Photos/Railway", text: "راه آهن" },
                    { href: "/Photos/Transport", text: "حمل و نقل و ترافیک" },
                    { href: "/Photos/Architecture", text: "معماری" },
                  ].map(({ href, text }) => (
                    <li
                      key={text}
                      className="px-4 py-2 text-gray-700 hover:text-[#F9A220] text-right whitespace-nowrap text-[16px]"
                    >
                      <Link
                        href={href}
                        className={pathname === href ? "text-[#F9A220]" : ""}
                      >
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <Link href="/ContactUs">
              <li className="hover:text-[#F9A220] text-lg cursor-pointer">
                تماس با ما
              </li>
            </Link>
          </ul>
        </div>
        <div className="text-gray-400">|</div>
        <div>
          <p>ENGLISH</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
