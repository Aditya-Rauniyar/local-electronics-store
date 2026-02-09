import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { productCategories } from '../data/products'

const carouselItems = [
 
 
   
   {
    id: 'slide-2',
     title: 'Smart TVs & Home Audio',
    subtitle: 'Big screen, clear sound, budget friendly.',
    cta: 'View TVs',
    // title: 'Mobiles & Accessories',
    // subtitle: 'New models, chargers, earphones, covers.',
    // cta: 'View Mobiles',
    image: '/products/tv.png',
  },
  {
    id: 'slide-3',
    title: 'Home Theatre & Speakers',
    subtitle: 'Daily use ke liye strong, reliable models.',
    cta: 'View Appliances',
    image: '/products/speakers.png',
  },
  {
    id: 'slide-4',
    title: 'Gifts & Accessories',
    subtitle: 'Chargers, Powerbanks, speakers - sab milta hai.',
    cta: 'View Accessories',
    image: '/products/powerbanks.png',
  },
  {
    id: 'slide-1',
    title: 'Fans & Coolers',
    subtitle: 'Fast, power saver, budget friendly.',
    cta: 'View Coolers',
    image: '/products/cooler.png',
  },
  {
    id: 'slide-5',
    title: 'Festival Deals Ready',
    subtitle: 'TV, Mobile, Accessories - sab ek jagah.',
    cta: 'Shop Now',
    image: '/products/tv1.png',
  },
]

const sellItems = [
  {
    title: 'TV & Home Theatre',
    desc: 'LED, Smart TV, soundbar aur setup support.',
    action: 'View TVs',
  },
  {
    title: 'Mobiles & Accessories',
    desc: 'New models, chargers, earphones, covers.',
    action: 'View Mobiles',
  },
  {
    title: 'Home Appliances',
    desc: 'Fridge, washing machine, mixer-grinder.',
    action: 'View Appliances',
  },
  {
    title: 'Repair Support',
    desc: 'Local technicians ke saath fast service.',
    action: 'Call Support',
  },
]

const facilities = [
  {
    title: 'Delivery',
    desc: 'Town ke andar same-day ya next-day delivery.',
  },
  {
    title: 'Installation',
    desc: 'TV/Appliance installation trained team se.',
  },
  {
    title: 'Repair Support',
    desc: 'Warranty ke baad bhi local repair help.',
  },
]

// Home page with hero, products, and facilities
export default function Home() {
  const reduceMotion = useReducedMotion()
  const [activeSlide, setActiveSlide] = useState(0)

  const heroAnimation = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: 'easeOut' },
      }

  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: 'easeOut' },
        viewport: { once: true, amount: 0.2 },
      }

  useEffect(() => {
    if (reduceMotion) return
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselItems.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [reduceMotion])

  return (
    <div className="space-y-16 pb-16 text-white">
      <section className="pt-0">
        <div className="container-pad space-y-4 md:hidden">
          <h2 className="text-2xl font-bold">Featured Offers</h2>
          <div className="grid gap-4">
            {carouselItems.map((item) => (
              <div key={item.id} className="surface overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm text-white/70">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <div
            className="relative min-h-[calc(100vh-88px)] overflow-hidden border-b border-white/10"
            style={{
              backgroundImage: `url(${carouselItems[activeSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="relative container-pad min-h-[calc(100vh-88px)] py-12" />
            <div className="absolute inset-y-0 left-4 flex items-center">
              <button
                type="button"
                onClick={() =>
                  setActiveSlide((prev) =>
                    prev === 0 ? carouselItems.length - 1 : prev - 1
                  )
                }
                className="rounded-full bg-white/10 px-3 py-2 text-white/80 transition hover:bg-white/20"
                aria-label="Previous slide"
              >
                <span className="text-lg">&lt;</span>
              </button>
            </div>
            <div className="absolute inset-y-0 right-4 flex items-center">
              <button
                type="button"
                onClick={() =>
                  setActiveSlide((prev) => (prev + 1) % carouselItems.length)
                }
                className="rounded-full bg-white/10 px-3 py-2 text-white/80 transition hover:bg-white/20"
                aria-label="Next slide"
              >
                <span className="text-lg">&gt;</span>
              </button>
            </div>
            <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-2">
              {carouselItems.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 w-10 rounded-full transition ${
                    index === activeSlide ? 'bg-brand' : 'bg-white/30'
                  }`}
                  aria-label={`Go to ${item.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="home"
        className="container-pad grid items-center gap-10 pt-10 md:grid-cols-2"
      >
        <motion.div {...heroAnimation}>
          <span className="badge">Local Trusted Store</span>
          <h1 className="mt-4 text-5xl font-extrabold leading-tight md:text-7xl">
            संतोष इलेक्ट्रॉनिक्स
          </h1>
          <p className="mt-2 text-lg text-white/70">Hanuman Mandir Road, Khadda, 274802</p>
          <p className="mt-4 text-base text-white/70 md:text-lg">
            Genuine products, seedha market price aur friendly service. TV, Mobile,
            Appliances sab ek hi jagah.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <div className="surface px-4 py-3">
              <p className="font-semibold">Same-day delivery</p>
              <p className="text-xs text-white/60">Town limit ke andar</p>
            </div>
            <div className="surface px-4 py-3">
              <p className="font-semibold">Installation support</p>
              <p className="text-xs text-white/60">Trained team se</p>
            </div>
          </div>
        </motion.div>
        <motion.div {...heroAnimation} className="surface p-6">
          <img
            src="/shop-hero.svg"
            alt="Shop front illustration"
            className="rounded-xl"
            loading="lazy"
          />
        </motion.div>
      </section>

      <section id="sell" className="container-pad">
        <motion.div {...reveal}>
          <h2 className="text-3xl font-bold">What We Sell</h2>
          <p className="mt-2 text-white/70">
            Daily needs ke hisaab se best-selling items. Price aur quality dono
            balanced.
          </p>
        </motion.div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {sellItems.map((item) => (
            <motion.button
              key={item.title}
              {...reveal}
              whileHover={reduceMotion ? undefined : { scale: 1.02, y: -4 }}
              whileTap={reduceMotion ? undefined : { scale: 0.99 }}
              className="surface group flex w-full flex-col items-start gap-2 p-5 text-left transition hover:shadow-lg"
              type="button"
              aria-label={item.title}
            >
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="text-sm text-white/70">{item.desc}</p>
              <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                {item.action}
                <span className="transition group-hover:translate-x-1">→</span>
              </span>
            </motion.button>
          ))}
        </div>
      </section>

      <section className="container-pad">
        <motion.div {...reveal}>
          <h2 className="text-3xl font-bold">Products & Categories</h2>
          <p className="mt-2 text-white/70">
            WhatsApp par enquiry karke latest offers aur availability confirm
            kar sakte hain.
          </p>
        </motion.div>

        <div className="mt-6 space-y-8">
          {productCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              <h3 className="text-2xl font-semibold">{category.title}</h3>
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
                      <p className="mt-2 text-sm text-white/70">
                        {item.description}
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="rounded-full bg-brand px-3 py-1 text-xs font-semibold text-black">
                          Deal Price
                        </span>
                        <span className="text-lg font-bold">{item.price}</span>
                        {item.mrp && (
                          <span className="text-sm text-white/50 line-through">
                            {item.mrp}
                          </span>
                        )}
                      </div>
                    </div>
                    <a
                      href={
                        'https://wa.me/919793264108?text=' +
                        encodeURIComponent(
                          `Namaste! ${item.name} ke details chahiye.`
                        )
                      }
                      className="mt-auto inline-flex items-center justify-center rounded-full bg-brand px-4 py-2 text-sm font-semibold text-black transition hover:bg-brandDark"
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp Enquiry
                    </a>
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="facilities" className="container-pad">
        <motion.div {...reveal}>
          <h2 className="text-3xl font-bold">Facilities</h2>
          <p className="mt-2 text-white/70">
            Aapka time bachane ke liye local support ready.
          </p>
        </motion.div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {facilities.map((item) => (
            <motion.div key={item.title} {...reveal} className="surface p-5">
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="container-pad">
        <motion.div {...reveal}>
          <h2 className="text-3xl font-bold">Contact & Visit</h2>
          <p className="mt-2 text-white/70">
            Khadda market ke center me, main road ke paas. Phone ya WhatsApp par
            connect karein.
          </p>
        </motion.div>
        <motion.div {...reveal} className="mt-6 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="surface overflow-hidden">
            <iframe
              title="Shop location"
              src="https://www.google.com/maps?q=Hanuman%20Mandir%20Phalmandi%20Chauraha%20Khadda%20Kushinagar%20274802&output=embed"
              className="h-80 w-full"
              loading="lazy"
            ></iframe>
          </div>
          <div className="space-y-4">
            <div className="surface p-5">
              <p className="text-lg font-semibold">Call Now</p>
              <a
                href="tel:+919793264108"
                className="mt-2 inline-flex items-center gap-2 text-lg font-bold text-brand"
              >
                +91 97932 64108
              </a>
              <p className="mt-2 text-sm text-white/60">10 AM - 8 PM daily</p>
            </div>
            <div className="surface p-5">
              <p className="text-lg font-semibold">WhatsApp</p>
              <a
                href="https://wa.me/919793264108?text=Namaste!%20Shop%20timing%20confirm%20karna%20hai."
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-base font-semibold text-black"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
            <div className="surface p-5">
              <p className="text-lg font-semibold">Business Hours</p>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                <li>Mon - Sat: 10:00 AM - 8:30 PM</li>
                <li>Sunday: 11:00 AM - 6:00 PM</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
