"use client"

import Image from "next/image"
import React, { useState } from "react"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

export type Props = {
  img: string[] 
}

export default function ImageGallery({ img }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
      {img.map((src, index) => (
        <Image
          key={index}
          src={src}
          width={200}
          height={200}
          alt={`تصویر ${index + 1}`}
          className="cursor-pointer shadow"
          onClick={() => {
            setPhotoIndex(index)
            setIsOpen(true)
          }}
        />
      ))}

      {isOpen && (
        <Lightbox
          mainSrc={img[photoIndex]}
          nextSrc={img[(photoIndex + 1) % img.length]}
          prevSrc={img[(photoIndex + img.length - 1) % img.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + img.length - 1) % img.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % img.length)
          }
          imageTitle={`عکس ${photoIndex + 1}`}
        />
      )}
    </div>
  )
}
