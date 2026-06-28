import { useEffect, ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingCTA from '../ui/FloatingCTA'
import WhatsAppButton from '../ui/WhatsAppButton'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <FloatingCTA />
      <WhatsAppButton />
    </>
  )
}
