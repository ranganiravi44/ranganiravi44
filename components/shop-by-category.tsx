import Image from "next/image"

const categories = [
  { name: "Sarees", image: "/images/cat-sarees.png" },
  { name: "Lehengas", image: "/images/cat-lehengas.png" },
  { name: "Kurtis", image: "/images/cat-kurtis.png" },
  { name: "Girls", image: "/images/cat-girls.png" },
]

export function ShopByCategory() {
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
