import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="w-full h-[400px] bg-black opacity-80 flex flex-row justify-center items-start gap-x-25 px-10 flex-nowrap py-15">
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
        <div className="flex flex-col" dir="rtl">
          <h2 className="text-white text-xl my-5 font-bold">آدرس ما</h2>
          <p className="text-white py-2">
            تهران - خیابان کارگر شمالی - پایین‌تر از بزرگراه جلال آل احمد
            <br /> خیابان دوم - پلاک 12
          </p>
          <p className="text-white py-2">۸۸۳۵۲۲۱۸</p>
          <p className="text-white py-2">۸۸۳۵۱۱۳۴</p>
          <p className="text-white py-2">info@sazian.net</p>
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
                <li className="text-white py-2">{title}</li>
              </Link>
            ))}
          </ul>
        </div>

        <div dir="rtl">
          <h2 className="text-white text-xl my-5 font-bold">کپی‌رایت</h2>
          <p className="text-white">
            © ۲۰۲۰ سازیان. تمامی حقوق محفوظ می‌باشد. <br />
            طراحی توسط شرکت پک
          </p>
        </div>
      </div>
      {/* <div className="fixed bottom-0 bg-white shadow-md w-full mx-[70px] h-[50px]"></div> */}
    </footer>
  );
}

export default Footer;
