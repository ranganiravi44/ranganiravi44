"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { createClient } from "@supabase/supabase-js"
import { Search, User, ShoppingBag, Menu, X, Check, Plus, Minus, ArrowLeft } from "lucide-react"

const supabaseUrl = "YOUR_SUPABASE_URL"
const supabaseAnonKey = "YOUR_SUPABASE_ANON_KEY"
const supabase = createClient(supabaseUrl, supabaseAnonKey)

type Product = {
  id: number
  title: string
  price: string
  image_url: string
  description: string
}

const navLinks = ["Sarees", "Lehengas", "Kurtis", "Girls"]

function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-100 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
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

function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative h-[72vh] min-h-[520px] w-full md:h-[86vh]">
        <Image
          src="/images/hero.png"
          alt="Woman wearing a premium ivory silk saree with gold embroidery"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/20 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto flex w-full max-w-7xl px-6 lg:px-10">
            <div className="max-w-xl">
              <p className="mb-6 text-xs font-light uppercase tracking-[0.4em] text-neutral-500">
                New Collection — 2026
              </p>
              <h1 className="font-serif text-5xl font-light leading-[1.05] tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl">
                Timeless Ethnic Elegance
              </h1>
              <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-neutral-600">
                Handcrafted heirlooms for the modern connoisseur. Discover pieces that carry heritage in every thread.
              </p>
              <a
                href="#bestsellers"
                className="mt-10 inline-block bg-neutral-900 px-10 py-4 text-xs font-light uppercase tracking-[0.25em] text-white transition-colors hover:bg-neutral-700"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const categories = [
  { name: "Sarees", image: "/images/cat-sarees.png" },
  { name: "Lehengas", image: "/images/cat-lehengas.png" },
  { name: "Kurtis", image: "/images/cat-kurtis.png" },
  { name: "Girls", image: "/images/cat-girls.png" },
]

function ShopByCategory() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="mb-14 text-center">
        <p className="mb-3 text-xs font-light uppercase tracking-[0.4em] text-neutral-400">Curated Edits</p>
        <h2 className="font-serif text-4xl font-light tracking-tight text-neutral-900 lg:text-5xl">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-x-6">
        {categories.map((category) => (
          <a key={category.name} href="#" className="group flex flex-col">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-50">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={`${category.name} collection`}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <span className="mt-5 text-center text-sm font-light uppercase tracking-[0.2em] text-neutral-800">
              {category.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

function Bestsellers({
  products,
  isLoading,
  onSelect,
}: {
  products: Product[]
  isLoading: boolean
  onSelect: (product: Product) => void
}) {
  return (
    <section id="bestsellers" className="mx-auto max-w-7xl px-6 pb-28 lg:px-10 lg:pb-36">
      <div className="mb-14 text-center">
        <p className="mb-3 text-xs font-light uppercase tracking-[0.4em] text-neutral-400">Most Loved</p>
        <h2 className="font-serif text-4xl font-light tracking-tight text-neutral-900 lg:text-5xl">Bestsellers</h2>
      </div>

      {isLoading ? (
        <p className="py-24 text-center text-sm font-light uppercase tracking-[0.3em] text-neutral-400">
          Loading Swampy Creation collection...
        </p>
      ) : products.length === 0 ? (
        <p className="py-24 text-center text-sm font-light uppercase tracking-[0.3em] text-neutral-400">
          No products found.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 lg:grid-cols-4 lg:gap-x-6">
          {products.map((product) => (
            <button
              key={product.id}
              type="button"
              onClick={() => onSelect(product)}
              className="group flex flex-col text-left"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-50">
                <Image
                  src={product.image_url || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 translate-y-full opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="block w-full bg-neutral-900 py-3.5 text-center text-[11px] font-light uppercase tracking-[0.25em] text-white">
                    View Product
                  </span>
                </div>
              </div>
              <div className="mt-4 flex flex-col items-start">
                <h3 className="text-sm font-light text-neutral-800">{product.title}</h3>
                <p className="mt-1 text-sm font-light tracking-wide text-neutral-500">{product.price}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </section>
  )
}

const footerColumns = [
  { title: "Shop", links: ["Sarees", "Lehengas", "Kurtis", "Girls"] },
  { title: "About", links: ["Our Story", "Craftsmanship", "Sustainability", "Journal"] },
  { title: "Support", links: ["Contact", "Shipping", "Returns", "Size Guide"] },
]

function SiteFooter() {
  return (
    <footer className="border-t border-neutral-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-serif text-2xl font-medium tracking-tight text-neutral-900">Swampy Creation</span>
            <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-neutral-500">
              Timeless ethnic wear, thoughtfully crafted for the modern wardrobe.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-5 text-xs font-light uppercase tracking-[0.3em] text-neutral-400">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm font-light text-neutral-700 transition-colors hover:text-neutral-950">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-neutral-100 pt-8 sm:flex-row">
          <p className="text-xs font-light tracking-wide text-neutral-400">
            © {new Date().getFullYear()} Swampy Creation. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs font-light tracking-wide text-neutral-400 hover:text-neutral-700">
              Privacy
            </a>
            <a href="#" className="text-xs font-light tracking-wide text-neutral-400 hover:text-neutral-700">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

const colors = [
  { name: "Midnight Blue", hex: "#1e2a44" },
  { name: "Deep Emerald", hex: "#1f4d3f" },
  { name: "Wine", hex: "#5c1f2e" },
  { name: "Charcoal", hex: "#2b2b2b" },
]

const sizes = ["S", "M", "L", "XL", "XXL"]

const accordionSections = [
  {
    title: "Fabric Details",
    body: "Handwoven pure Katan silk with real gold zari border. Each piece is crafted on a traditional pit loom over 18 days. Blouse piece of 0.8m included. Slight irregularities in the weave are a natural mark of handloom craftsmanship.",
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

function ProductAccordion() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="border-t border-neutral-200">
      {accordionSections.map((section, index) => {
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

function ProductDetails({ product, onBack }: { product: Product; onBack: () => void }) {
  const [activeColor, setActiveColor] = useState(0)
  const [activeSize, setActiveSize] = useState("M")

  return (
    <main className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
      <button
        type="button"
        onClick={onBack}
        className="mb-10 inline-flex items-center gap-2 text-xs font-light uppercase tracking-[0.25em] text-neutral-500 transition-colors hover:text-neutral-900"
      >
        <ArrowLeft className="h-4 w-4" strokeWidth={1.25} />
        Back to Home
      </button>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-50">
          <Image
            src={product.image_url || "/placeholder.svg"}
            alt={product.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <p className="mb-6 text-[11px] font-light uppercase tracking-[0.3em] text-neutral-400">Sarees / Silk</p>

          <h1 className="font-serif text-3xl font-medium leading-tight tracking-tight text-neutral-900 lg:text-4xl">
            {product.title}
          </h1>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-xl font-light text-neutral-900">{product.price}</span>
          </div>

          <p className="mt-6 max-w-prose text-sm font-light leading-relaxed text-neutral-500">{product.description}</p>

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
                    activeColor === index
                      ? "ring-1 ring-neutral-900 ring-offset-2"
                      : "hover:ring-1 hover:ring-neutral-300"
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

          <div className="mt-12">
            <ProductAccordion />
          </div>
        </div>
      </div>
    </main>
  )
}

export default function Page() {
  const [view, setView] = useState<"home" | "product">("home")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data, error } = await supabase.from("products").select("*")
        if (error) throw error
        setProducts(data ?? [])
      } catch (err) {
        console.error("[v0] Failed to fetch products:", err)
        setProducts([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const handleSelect = (product: Product) => {
    setSelectedProduct(product)
    setView("product")
    window.scrollTo({ top: 0 })
  }

  const handleBack = () => {
    setView("home")
    window.scrollTo({ top: 0 })
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <SiteHeader />
      {view === "home" || !selectedProduct ? (
        <main>
          <Hero />
          <ShopByCategory />
          <Bestsellers products={products} isLoading={isLoading} onSelect={handleSelect} />
        </main>
      ) : (
        <ProductDetails product={selectedProduct} onBack={handleBack} />
      )}
      <SiteFooter />
    </div>
  )
}
