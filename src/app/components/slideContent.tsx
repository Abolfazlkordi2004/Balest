"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";

interface Slide {
  src: string;
  text: string;
}

export default function SlideContent() {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // دریافت داده‌ها از API
  useEffect(() => {
    axios
      .get("http://localhost:3001/imageSlide")
      .then((res) => {
        setSlides(res.data);
      })
      .catch((err) => {
        console.error("خطا در دریافت اسلایدها:", err);
      });
  }, []);

  // تایمر اتومات برای تغییر اسلاید
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // هر 5 ثانیه

    return () => clearInterval(interval); // پاک‌سازی
  }, [slides.length]);

  // اگر اسلایدی وجود نداشت، چیزی نمایش نده
  if (slides.length === 0) return null;

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative w-full h-[900px] overflow-hidden bg-black">
      <Image
        src={`/${currentSlide.src.replace(/^balest\/public\//, "")}`}
        alt="slide"
        fill
        className="object-cover"
      />

      <div className="absolute top-0 right-0 z-10">
        <motion.div
          key={currentSlide.text}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-[500px] h-[500px] bg-[#F9A220] shadow-lg flex items-center justify-center"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mr-[550px] px-4"
          >
            <h1 className="text-white text-5xl font-bold w-[600px] break-words whitespace-normal text-justify " dir="rtl">
              {currentSlide.text}
            </h1>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
