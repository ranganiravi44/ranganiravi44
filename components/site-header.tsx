"use client"

import { useState } from "react"
import { Search, User, ShoppingBag, Menu, X } from "lucide-react"

const navLinks = ["Sarees", "Lehengas", "Kurtis", "Girls"]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-100 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Left: mobile menu toggle + logo */}
        <div className="flex flex-1 items-center gap-4">
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="text-neutral-900 md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" strokeWidth={1.25} /> : <Menu className="h-5 w-5" strokeWidth={1.25} />}
          </button>

          <a href="#" className="flex flex-col leading-none">
            <span className="font-serif text-2xl font-medium tracking-tight text-neutral-900">Swampy Creation</span>
            <span className="mt-0.5 text-[10px] font-light uppercase tracking-[0.35em] text-neutral-400">
              Ethnic Couture
            </span>
          </a>
        </div>

        {/* Center: navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-light tracking-wide text-neutral-700 transition-colors hover:text-neutral-950"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right: icons */}
        <div className="flex flex-1 items-center justify-end gap-6">
          <button type="button" aria-label="Search" className="text-neutral-800 transition-colors hover:text-neutral-950">
            <Search className="h-[18px] w-[18px]" strokeWidth={1.25} />
          </button>
          <button
            type="button"
            aria-label="Account"
            className="hidden text-neutral-800 transition-colors hover:text-neutral-950 sm:block"
          >
            <User className="h-[18px] w-[18px]" strokeWidth={1.25} />
          </button>
          <button
            type="button"
            aria-label="Cart"
            className="relative text-neutral-800 transition-colors hover:text-neutral-950"
          >
            <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.25} />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center bg-neutral-900 text-[10px] font-light text-white">
              2
            </span>
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <nav className="flex flex-col border-t border-neutral-100 bg-white px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => setMobileOpen(false)}
              className="py-3 text-sm font-light tracking-wide text-neutral-700"
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
