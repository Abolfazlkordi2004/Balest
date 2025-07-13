import Image from "next/image";
import Link from "next/link";
import React from "react";
import toPersianDigits from "../helper/persian";

function Footer() {
  return (
    <footer>
      <div className="w-full h-[400px] bg-black opacity-80 flex flex-row justify-center items-start gap-x-25 px-10 flex-nowrap py-15">
        <div className="flex flex-col justify-center items-center">
          <div>
            <Link href="#">
              <Image
                src="/icons/balest40.jpg"
                alt="logo"
                width={120}
                height={120}
              />
            </Link>
          </div>
          <div className="flex flex-row pt-10 gap-1">
            <Link href="#">
              <Image
                src="/icons/icons8-instagram-logo-32.png"
                alt="instagram"
                width={30}
                height={30}
                className="invert"
              />
            </Link>
            <Link href="#">
              <Image
                src="/icons/icons8-linkedin-48.png"
                alt="linkedin"
                width={30}
                height={30}
                className="invert"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col" dir="rtl">
          <h2 className="text-white text-xl my-5 font-bold">آدرس ما</h2>
          <p className="text-white py-2">
            تهران تهرانپارس بلوار پروین نبش {toPersianDigits("204")} پلاک{" "}
            {toPersianDigits("36")} واحد {toPersianDigits("2")}
          </p>
          <p className="text-white py-2">{toPersianDigits("02177321804")}</p>
          <p className="text-white py-2">balest.abnieh@gmail.com</p>
        </div>
        <div dir="rtl">
          <h2 className="text-white text-xl my-5 font-bold">دسترسی سریع</h2>
          <ul>
            {[
              "صفحه اصلی",
              "درباره ما",
              "پروژه ها",
              "خدمات",
              "اخبار",
              "تماس با ما",
            ].map((title, i) => (
              <Link key={i} href="#">
                <li className="text-white py-2 hover:text-[#F9A220]">
                  {title}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div dir="rtl">
          <h2 className="text-white text-xl my-5 font-bold">کپی‌رایت</h2>
          <p className="text-white">
            © بالست ابنیه. تمامی حقوق محفوظ می‌باشد. <br />
          </p>
        </div>
      </div>
      {/* <div className="fixed bottom-0 bg-white shadow-md w-full mx-[70px] h-[50px]"></div> */}
    </footer>
  );
}

export default Footer;
