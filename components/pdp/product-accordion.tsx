"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const sections = [
  {
    title: "Fabric Details",
    body: "Handwoven pure Katan silk with real gold zari border. Each saree is crafted on a traditional pit loom over 18 days. Blouse piece of 0.8m included. Slight irregularities in the weave are a natural mark of handloom craftsmanship.",
  },
  {
    title: "Care Instructions",
    body: "Dry clean only. Store wrapped in a soft muslin cloth away from direct sunlight. Avoid contact with perfume and water. Refold along different lines periodically to preserve the zari.",
  },
  {
    title: "Delivery & Returns",
    body: "Complimentary insured shipping across India within 3–5 business days. International delivery in 7–10 business days. Easy 7-day returns on unworn pieces with original tags intact.",
  },
]

export function ProductAccordion() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="border-t border-neutral-200">
      {sections.map((section, index) => {
        const isOpen = open === index
        return (
          <div key={section.title} className="border-b border-neutral-200">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between py-5 text-left"
            >
              <span className="text-sm font-normal tracking-wide text-neutral-900">{section.title}</span>
              {isOpen ? (
                <Minus className="h-4 w-4 shrink-0 text-neutral-500" strokeWidth={1.25} />
              ) : (
                <Plus className="h-4 w-4 shrink-0 text-neutral-500" strokeWidth={1.25} />
              )}
            </button>
            {isOpen && (
              <p className="max-w-prose pb-6 text-sm font-light leading-relaxed text-neutral-500">{section.body}</p>
            )}
          </div>
        )
      })}
    </div>
  )
}
