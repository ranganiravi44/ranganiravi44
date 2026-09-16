const footerColumns = [
  { title: "Shop", links: ["Sarees", "Lehengas", "Kurtis", "Girls"] },
  { title: "About", links: ["Our Story", "Craftsmanship", "Sustainability", "Journal"] },
  { title: "Support", links: ["Contact", "Shipping", "Returns", "Size Guide"] },
]

export function SiteFooter() {
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
