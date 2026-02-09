// Trust cues and quick info in the footer
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/70">
      <div className="container-pad grid gap-4 py-8 text-sm text-white/70 md:grid-cols-3">
        <div>
          <p className="text-base font-semibold text-white">Santosh Electronics</p>
          <p>Khadda Market, Hanuman Mandir Road</p>
          <p>UP - 274802</p>
        </div>
        <div>
          <p className="text-base font-semibold text-white">Quick Help</p>
          <p>Delivery � Installation � Repair Support</p>
        </div>
        <div>
          <p className="text-base font-semibold text-white">Contact</p>
          <p>Phone 1: +91 9935136131</p>
          <p>Phone 2: +91 97932 64108</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        * 2026 Santosh Electronics. Local trusted store *
        <br />  @Santosh Rauniyar
      </div>
    </footer>
  )
}
