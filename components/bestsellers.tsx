import Image from "next/image"

const products = [
  { name: "Ivory Zari Silk Saree", price: "₹ 12,900", image: "/images/product-1.png" },
  { name: "Blush Embroidered Lehenga", price: "₹ 24,500", image: "/images/product-2.png" },
  { name: "Grey Anarkali Kurti", price: "₹ 6,400", image: "/images/product-3.png" },
  { name: "Champagne Georgette Saree", price: "₹ 14,200", image: "/images/product-4.png" },
  { name: "Chikankari Cotton Kurti", price: "₹ 5,800", image: "/images/product-5.png" },
  { name: "Dusty Rose Silk Lehenga", price: "₹ 27,900", image: "/images/product-6.png" },
  { name: "Sage Organza Saree", price: "₹ 13,600", image: "/images/product-7.png" },
  { name: "Lavender Kurti Set", price: "₹ 7,200", image: "/images/product-8.png" },
]

export function Bestsellers() {
  return (
    <section id="bestsellers" className="mx-auto max-w-7xl px-6 pb-28 lg:px-10 lg:pb-36">
      <div className="mb-14 text-center">
        <p className="mb-3 text-xs font-light uppercase tracking-[0.4em] text-neutral-400">Most Loved</p>
        <h2 className="font-serif text-4xl font-light tracking-tight text-neutral-900 lg:text-5xl">Bestsellers</h2>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-12 lg:grid-cols-4 lg:gap-x-6">
        {products.map((product) => (
          <div key={product.name} className="group flex flex-col">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-50">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Add to cart reveal */}
              <div className="absolute inset-x-0 bottom-0 translate-y-full opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                <button
                  type="button"
                  className="w-full bg-neutral-900 py-3.5 text-[11px] font-light uppercase tracking-[0.25em] text-white transition-colors hover:bg-neutral-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="mt-4 flex flex-col items-start">
              <h3 className="text-sm font-light text-neutral-800">{product.name}</h3>
              <p className="mt-1 text-sm font-light tracking-wide text-neutral-500">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
