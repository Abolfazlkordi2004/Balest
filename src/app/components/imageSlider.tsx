"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import SlideContent from "./slideContent";
import { AnimatePresence } from "framer-motion";

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
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides]);

  if (slides.length === 0) return null;

  const current = slides[index];

  return (
    <div className="w-full h-[900px] relative overflow-hidden">
      <AnimatePresence mode="wait">
        <SlideContent key={current.text} src={current.src} text={current.text} />
      </AnimatePresence>
    </div>
  );
}
