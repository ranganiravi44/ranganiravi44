import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProductGallery } from "@/components/pdp/product-gallery"
import { ProductInfo } from "@/components/pdp/product-info"

export const metadata: Metadata = {
  title: "Midnight Blue Handwoven Saree | Swampy Creation",
  description:
    "A timeless pure silk saree with an intricate handwoven gold zari border, made to drape effortlessly for occasions that call for quiet luxury.",
}

export default function ProductPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <ProductGallery />
            <ProductInfo />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
