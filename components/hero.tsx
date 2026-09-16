import Image from "next/image"

export function Hero() {
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
        {/* soft overlay for text legibility */}
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
