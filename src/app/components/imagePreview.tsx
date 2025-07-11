// components/ImagePreview.tsx
"use client"

import Image from "next/image"
import React, { useState } from "react"

type Props = {
  src: string
  alt?: string
  width?: number
  height?: number
}

export default function ImagePreview({ src, alt = "", width = 200, height = 200 }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
       
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="cursor-zoom-in"
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src={src}
            alt={alt}
            width={1400}
            height={1400}
            className="max-w-[90vw] max-h-[90vh]  shadow-lg cursor-zoom-out"
          />
        </div>
      )}
    </>
  )
}
