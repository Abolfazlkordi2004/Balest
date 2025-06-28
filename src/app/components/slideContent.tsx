"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SlideContent({
  src,
  keyId,
}: {
  src: string;
  keyId: number;
}) {
  return (
    <div className="relative w-full h-[900px] overflow-hidden bg-black">
      <Image src={src} alt="slide" fill className="object-cover" />
      <div key={keyId} className="absolute top-0 right-0 z-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-[500px] h-[500px] bg-[#F9A220] shadow-lg flex items-center justify-center"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mr-140"
          >
            <h1 className="text-white text-5xl font-bold text-nowrap">
              شرکت مهندسین مشاور بالست ابنیه
            </h1>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
