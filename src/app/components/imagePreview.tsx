"use client"

import Image from "next/image"
import React, { useState } from "react"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

type Props = {
  src: string
  alt?: string
  thumbnailWidth?: number
}

export default function ImageLightbox({ src, alt = "", thumbnailWidth = 1200 }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={thumbnailWidth}
        height={thumbnailWidth}
        className="cursor-zoom-in"
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <Lightbox
          mainSrc={src}
          onCloseRequest={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
