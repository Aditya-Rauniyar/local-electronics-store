import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'

// Single-page layout for small-town audience
export default function App() {
  return (
    <div className="text-ink">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
