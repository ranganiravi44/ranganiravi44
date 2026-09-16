import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ShopByCategory } from "@/components/shop-by-category"
import { Bestsellers } from "@/components/bestsellers"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <SiteHeader />
      <main>
        <Hero />
        <ShopByCategory />
        <Bestsellers />
      </main>
      <SiteFooter />
    </div>
  )
}
