"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SlideContent({
  src,
  text,
}: {
  src: string;
  text: string;
}) {
  return (
    <motion.div
      key={text}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-[900px] overflow-hidden bg-black"
    >
      <Image
        src={`/${src.replace(/^balest\/public\//, "")}`}
        alt="slide"
        fill
        className="object-cover"
      />

      <div className="absolute top-0 right-0 z-10">
        <motion.div
          initial={{ scale: 0.5, opacity: 0, x: 200 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-[500px] h-[500px] bg-[#F9A220] shadow-lg flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mr-[550px] px-4"
          >
            <h1
              className="text-white text-5xl font-bold w-[600px] break-words whitespace-normal text-justify"
              dir="rtl"
            >
              {text}
            </h1>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
