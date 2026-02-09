import { useEffect, useState } from 'react'

const links = [
  // { to: '#home', label: 'Home' },
  { to: '#sell', label: 'Products' },
  { to: '#facilities', label: 'Facilities' },
  { to: '#contact', label: 'Contact' },
]

// Single-page market-style top bar with anchor links
export default function Navbar() {
  const [showHindi, setShowHindi] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setShowHindi((prev) => !prev)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/90 backdrop-blur">
      <div className="container-pad flex flex-wrap items-center gap-4 py-3">
        <div className="flex items-center gap-3 text-white">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/30">
            <img
              src="/logo.png"
              alt="Santosh Electronics logo"
              className="h-12 w-12"
              loading="lazy"
            />
          </div>
          <div className="min-w-[180px]">
            <div className="brand-reveal brand-glow grid h-8 items-center text-2xl font-bold leading-none md:h-9 md:text-3xl">
              <span
                className={`col-start-1 row-start-1 whitespace-nowrap transition-opacity duration-700 ${
                  showHindi ? 'opacity-100' : 'opacity-0'
                }`}
              >
                संतोष इलेक्ट्रॉनिक्स
              </span>
              <span
                className={`col-start-1 row-start-1 whitespace-nowrap transition-opacity duration-700 ${
                  showHindi ? 'opacity-0' : 'opacity-100'
                }`}
              >
                Santosh Electronics
              </span>
            </div>
            <p className="mt-1 text-[11px] text-white/60">
              हनुमान मंदिर रोड, खड्डा, 274802
            </p>
          </div>
        </div>
        <div className="flex-1" />
        <nav className="flex flex-wrap items-center gap-3 text-xs font-semibold text-white/80">
          {links.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className="rounded-full bg-white/10 px-4 py-2 transition hover:bg-white/20"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
