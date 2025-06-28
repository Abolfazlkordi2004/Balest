// components/SlideContent.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SlideContent({ src, keyId }: { src: string; keyId: number }) {
  return (
    <div className="w-full h-[900px] relative overflow-hidden flex flex-col items-center justify-center gap-6 bg-black">
      {/* عکس - ورود از بالا */}
      <motion.div
        key={`img-${keyId}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[600px]"
      >
        <Image src={src} alt="slide" fill className="object-cover" />
      </motion.div>

      {/* مربع نارنجی */}
      <motion.div
        key={`box-${keyId}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="w-32 h-32 bg-[#F9A220] rounded shadow-lg"
      />

      {/* متن */}
      <motion.p
        key={`text-${keyId}`}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="text-white text-xl font-bold"
      >
        این یک متن تبلیغاتی است!
      </motion.p>
    </div>
  );
}
