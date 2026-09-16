"use client"

import { useState } from "react"

const images = [
  { src: "/images/pdp-saree-1.png", alt: "Midnight blue handwoven silk saree, full drape front view" },
  { src: "/images/pdp-saree-2.png", alt: "Close-up of gold zari border weave detail" },
  { src: "/images/pdp-saree-3.png", alt: "Back view showing pallu draped over the shoulder" },
  { src: "/images/pdp-saree-4.png", alt: "Detail of the silk saree pleats and drape" },
]

export function ProductGallery() {
  const [active, setActive] = useState(0)

  return (
    <div className="flex flex-col-reverse gap-4 lg:flex-row lg:gap-6">
      {/* Thumbnails */}
      <div className="flex gap-4 lg:flex-col">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`View image ${index + 1}`}
            aria-current={active === index}
            className={`relative aspect-[3/4] w-20 shrink-0 overflow-hidden bg-neutral-50 transition-opacity lg:w-24 ${
              active === index ? "opacity-100 ring-1 ring-neutral-900" : "opacity-60 hover:opacity-100"
            }`}
          >
            <img src={image.src || "/placeholder.svg"} alt={image.alt} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-50">
        <img
          src={images[active].src || "/placeholder.svg"}
          alt={images[active].alt}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
