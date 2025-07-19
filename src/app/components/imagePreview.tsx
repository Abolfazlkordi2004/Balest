"use client";

import Image from "next/image";
import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

type Props = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

export default function ImageLightbox({
  src,
  alt = "",
  width = 300,
  height = 300,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="relative w-[300px] h-[300px]"
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover cursor-zoom-in"
          onClick={() => setIsOpen(true)}
        />
      </div>

      {isOpen && (
        <Lightbox mainSrc={src} onCloseRequest={() => setIsOpen(false)} />
      )}
    </>
  );
}
