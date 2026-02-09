import { motion, useReducedMotion } from 'framer-motion'

// Contact page with map and quick actions
export default function Contact() {
  const reduceMotion = useReducedMotion()

  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: 'easeOut' },
        viewport: { once: true, amount: 0.2 },
      }

  return (
    <div className="container-pad space-y-10 pb-16 pt-10">
      <motion.div {...reveal}>
        <span className="badge">Contact & Visit</span>
        <h1 className="mt-4 text-3xl font-bold md:text-4xl">
          Aaiye, milte hain
        </h1>
        <p className="mt-2 text-black/70">
          Hanuman Mandir Road, Phalmandi Chauraha, Khadda. Phone ya WhatsApp par
          connect karein.
        </p>
      </motion.div>

      <motion.div {...reveal} className="grid gap-6 lg:grid-cols-[2fr_1fr]">
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
              href="tel:+919876543210"
              className="mt-2 inline-flex items-center gap-2 text-lg font-bold text-brand"
            >
              +91 98765 43210
            </a>
            <p className="mt-2 text-sm text-black/60">10 AM - 8 PM daily</p>
          </div>
          <div className="surface p-5">
            <p className="text-lg font-semibold">WhatsApp</p>
            <a
              href="https://wa.me/919876543210?text=Namaste!%20Shop%20timing%20confirm%20karna%20hai."
              className="mt-2 inline-flex items-center gap-2 text-base font-semibold text-white bg-brand px-4 py-2 rounded-full"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>
          <div className="surface p-5">
            <p className="text-lg font-semibold">Business Hours</p>
            <ul className="mt-2 space-y-1 text-sm text-black/70">
              <li>Mon - Sat: 10:00 AM - 8:30 PM</li>
              <li>Sunday: 11:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
