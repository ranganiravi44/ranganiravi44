"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { ProductAccordion } from "./product-accordion"

const colors = [
  { name: "Midnight Blue", hex: "#1e2a44" },
  { name: "Deep Emerald", hex: "#1f4d3f" },
  { name: "Wine", hex: "#5c1f2e" },
  { name: "Charcoal", hex: "#2b2b2b" },
]

const sizes = ["S", "M", "L", "XL", "XXL"]

export function ProductInfo() {
  const [activeColor, setActiveColor] = useState(0)
  const [activeSize, setActiveSize] = useState("M")

  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <p className="mb-6 text-[11px] font-light uppercase tracking-[0.3em] text-neutral-400">Sarees / Silk</p>

      {/* Title + price */}
      <h1 className="font-serif text-3xl font-medium leading-tight tracking-tight text-neutral-900 lg:text-4xl">
        Midnight Blue Handwoven Saree
      </h1>
      <div className="mt-4 flex items-baseline gap-3">
        <span className="text-xl font-light text-neutral-900">₹24,500</span>
        <span className="text-sm font-light text-neutral-400 line-through">₹32,000</span>
      </div>

      <p className="mt-6 max-w-prose text-sm font-light leading-relaxed text-neutral-500">
        A timeless pure silk saree with an intricate handwoven gold zari border, made to drape effortlessly for
        occasions that call for quiet luxury.
      </p>

      {/* Color selector */}
      <div className="mt-10">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs font-normal uppercase tracking-[0.2em] text-neutral-800">Color</span>
          <span className="text-xs font-light text-neutral-400">{colors[activeColor].name}</span>
        </div>
        <div className="flex items-center gap-3">
          {colors.map((color, index) => (
            <button
              key={color.name}
              type="button"
              onClick={() => setActiveColor(index)}
              aria-label={color.name}
              aria-current={activeColor === index}
              className={`flex h-9 w-9 items-center justify-center rounded-full transition-all ${
                activeColor === index ? "ring-1 ring-neutral-900 ring-offset-2" : "hover:ring-1 hover:ring-neutral-300"
              }`}
            >
              <span className="h-7 w-7 rounded-full" style={{ backgroundColor: color.hex }} />
            </button>
          ))}
        </div>
      </div>

      {/* Size selector */}
      <div className="mt-10">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs font-normal uppercase tracking-[0.2em] text-neutral-800">Size</span>
          <button type="button" className="text-xs font-light text-neutral-400 underline underline-offset-4">
            Size Guide
          </button>
        </div>
        <div className="flex flex-wrap gap-3">
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setActiveSize(size)}
              aria-current={activeSize === size}
              className={`flex h-12 w-12 items-center justify-center text-sm font-light transition-colors ${
                activeSize === size
                  ? "bg-neutral-900 text-white"
                  : "border border-neutral-300 text-neutral-800 hover:border-neutral-900"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* CTAs */}
      <div className="mt-10 flex flex-col gap-3">
        <button
          type="button"
          className="w-full bg-neutral-900 py-4 text-xs font-normal uppercase tracking-[0.25em] text-white transition-colors hover:bg-neutral-700"
        >
          Buy Now
        </button>
        <button
          type="button"
          className="w-full border border-neutral-900 bg-transparent py-4 text-xs font-normal uppercase tracking-[0.25em] text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
        >
          Add to Cart
        </button>
      </div>

      {/* Reassurance */}
      <ul className="mt-8 flex flex-col gap-2">
        {["Free insured shipping", "7-day easy returns", "Certified pure silk"].map((item) => (
          <li key={item} className="flex items-center gap-2 text-xs font-light text-neutral-500">
            <Check className="h-3.5 w-3.5 text-neutral-400" strokeWidth={1.5} />
            {item}
          </li>
        ))}
      </ul>

      {/* Details accordion */}
      <div className="mt-12">
        <ProductAccordion />
      </div>
    </div>
  )
}
