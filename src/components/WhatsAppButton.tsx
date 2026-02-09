const WHATSAPP_NUMBER = '919793264108'
const WHATSAPP_MESSAGE =
  'Namaste! Mujhe product details aur price chahiye. Please guide kijiye.'

// Floating WhatsApp CTA with subtle pulse
export default function WhatsAppButton() {
  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`

  return (
    <a
      href={link}
      className="pulse-soft fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white"
      aria-label="WhatsApp enquiry"
      rel="noreferrer"
      target="_blank"
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
        WA
      </span>
      WhatsApp
    </a>
  )
}
