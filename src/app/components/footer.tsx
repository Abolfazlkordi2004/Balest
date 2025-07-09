import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="w-full h-[400px] bg-black opacity-80 flex flex-row justify-evenly items-center mx-auto">
        <div>
          <Image
            src="/icons/balest40.jpg"
            alt="logo"
            width={120}
            height={120}
          />
        </div>
        <div className="flex flex-col" dir="rtl">
          <h2 className="text-white text-xl my-5">ادرس ما</h2>

          <p className="text-white py-2">
            تهران - خيابان کارگر شمالي - پایین تر از بزرگراه جلال آل احمد
            <br /> خیابان دوم - پلاک 12
          </p>
          <p className="text-white py-2">۸۸۳۵۲۲۱۸</p>
          <p className="text-white py-2">۸۸۳۵۱۱۳۴</p>
          <p className="text-white py-2">info@sazian.net</p>
        </div>
        <div dir="rtl">
          <h2 className="text-white text-xl my-5">دسترسی سریع</h2>
          <ul>
            <Link href="#">
              <li className="text-white py-2">صفحه اصلی</li>
            </Link>
            <Link href="#">
              <li className="text-white py-2">درباره ما</li>
            </Link>
            <Link href="#">
              <li className="text-white py-2">پروژه ها</li>
            </Link>
            <Link href="#">
              <li className="text-white py-2">خدمات</li>
            </Link>
            <Link href="#">
              <li className="text-white py-2">اخبار</li>
            </Link>
            <Link href="#">
              <li className="text-white py-2">تماس با ما</li>
            </Link>
          </ul>
        </div>
        <div dir="rtl" className="mb-20">
          <h2 className="text-white text-xl my-5">کپی رایت</h2>
          <p className="text-white">
            © ۲۰۲۰ سازیان. تمامی حقوق محفوظ می باشد. <br /> طراحی توسط شرکت پک
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
