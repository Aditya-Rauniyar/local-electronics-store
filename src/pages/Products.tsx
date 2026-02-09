import { motion, useReducedMotion } from 'framer-motion'
import { productCategories } from '../data/products'

// Products listing with category sections
export default function Products() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="container-pad space-y-12 pb-16 pt-10">
      <div>
        <span className="badge">Price Friendly</span>
        <h1 className="mt-4 text-3xl font-bold md:text-4xl">
          Products & Categories
        </h1>
        <p className="mt-2 text-black/70">
          WhatsApp par enquiry karke latest offers aur availability confirm
          kar sakte hain.
        </p>
      </div>

      {productCategories.map((category) => (
        <section key={category.id} className="space-y-4">
          <h2 className="text-2xl font-semibold">{category.title}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {category.items.map((item) => (
              <motion.article
                key={item.id}
                whileHover={reduceMotion ? undefined : { scale: 1.02, y: -4 }}
                whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                transition={{ duration: 0.2 }}
                className="surface flex h-full flex-col gap-4 p-5 transition hover:shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className={
                    category.id === 'tv'
                      ? 'h-44 w-full rounded-xl bg-white/5 object-cover'
                      : 'h-44 w-full rounded-xl bg-white/5 object-contain p-0'
                  }
                  loading="lazy"
                />
                <div className="flex-1">
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p className="mt-2 text-sm text-black/70">
                    {item.description}
                  </p>
                </div>
                <a
                  href={
                    'https://wa.me/919876543210?text=' +
                    encodeURIComponent(`Namaste! ${item.name} ke details chahiye.`)
                  }
                  className="mt-auto inline-flex items-center justify-center rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brandDark"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp Enquiry
                </a>
              </motion.article>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
