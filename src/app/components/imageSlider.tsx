"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { AnimatePresence } from "framer-motion";
import SlideContent from "./slideContent";

interface Slide {
  src: string;
  text: string;
}

export default function ImageSlider() {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3001/imageSlide")
      .then((res) => setSlides(res.data))
      .catch((err) => console.error("خطا:", err));
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [slides]);

  if (slides.length === 0) return null;

  const current = slides[index];

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="w-full h-[500px] md:h-[700px] lg:h-[900px] relative overflow-hidden">
      <AnimatePresence mode="wait">
        <SlideContent
          key={current.text}
          src={current.src}
          text={current.text}
        />
      </AnimatePresence>
      <div className="absolute bottom-4 right-4 md:right-20 z-20 flex items-center gap-1">
        <button
          onClick={handlePrev}
          className="bg-gray-900 hover:bg-[#F9A220] text-white p-3 transition-all duration-300 ease-in-out"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="bg-gray-900 hover:bg-[#F9A220] text-white p-3 transition-all duration-300 ease-in-out"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
