import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap } from 'lucide-react'
import SERVICES from '../../data/services'

const SERVICE_LINKS = SERVICES.map((s) => ({ label: s.title, slug: s.slug }))

interface NavItem {
  label: string
  href: string
  path?: string
  isHash?: boolean
  hasDropdown?: boolean
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/', path: '/' },
  { label: 'About', href: '/about', path: '/about' },
  { label: 'Services', href: '/services', path: '/services', hasDropdown: true },
  { label: 'Industries', href: '/#industries', isHash: true },
  { label: 'Portfolio', href: '/#portfolio', isHash: true },
  { label: 'Pricing', href: '/pricing', path: '/pricing' },
  { label: 'FAQ', href: '/#faq', isHash: true },
  { label: 'Contact', href: '/#contact', isHash: true },
]

const HOME_SECTIONS = ['about', 'services', 'industries', 'portfolio', 'pricing', 'faq', 'contact']

function useScrollSpy(isHome: boolean) {
  const [active, setActive] = useState('')

  useEffect(() => {
    if (!isHome) return

    const observers: IntersectionObserver[] = []
    const sectionVisible: Record<string, number> = {}

    HOME_SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          sectionVisible[id] = entry.isIntersecting ? entry.intersectionRatio : 0
          const best = Object.entries(sectionVisible).sort((a, b) => b[1] - a[1])[0]
          if (best && best[1] > 0) setActive(best[0])
          else if (window.scrollY < 200) setActive('')
        },
        { threshold: [0, 0.1, 0.25, 0.5], rootMargin: '-10% 0px -40% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [isHome])

  return active
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'
  const activeSection = useScrollSpy(isHome)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [location])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Keyboard: escape closes dropdown
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setDropdownOpen(false); setMobileOpen(false) }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  const handleNavClick = useCallback((item: NavItem, e: React.MouseEvent) => {
    if (item.isHash) {
      e.preventDefault()
      const hash = item.href.replace('/#', '')
      if (isHome) {
        const el = document.getElementById(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      } else {
        navigate('/')
        setTimeout(() => {
          const el = document.getElementById(hash)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 300)
      }
      setMobileOpen(false)
    }
  }, [isHome, navigate])

  const isActive = (item: NavItem): boolean => {
    if (item.isHash) {
      const hash = item.href.replace('/#', '')
      return isHome && activeSection === hash
    }
    if (item.path === '/') return location.pathname === '/'
    return location.pathname.startsWith(item.path ?? '')
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-strong border-b border-white/10 py-3' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-9 h-9 rounded-lg bg-primary-500 flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:shadow-primary-500/50 transition-all duration-300">
              <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <span className="font-display font-bold text-white text-lg leading-none">DesignX</span>
              <span className="block text-[10px] text-white/40 tracking-widest uppercase leading-none mt-0.5">Engineering</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item)
              if (item.hasDropdown) {
                return (
                  <div key={item.label} className="relative" ref={dropdownRef}>
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${active ? 'text-white bg-white/8' : 'text-white/65 hover:text-white hover:bg-white/5'}`}
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                      onClick={() => navigate('/services')}
                      aria-haspopup="true"
                      aria-expanded={dropdownOpen}
                    >
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <div
                      className={`absolute top-full left-0 mt-1 w-64 glass-strong rounded-xl border border-white/10 py-2 shadow-2xl shadow-black/40 transition-all duration-200 ${dropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                      role="menu"
                    >
                      <div className="px-3 py-2 mb-1 border-b border-white/5">
                        <Link to="/services" className="text-xs font-bold text-primary-400 uppercase tracking-widest hover:text-primary-300 transition-colors" onClick={() => setDropdownOpen(false)}>
                          All Services →
                        </Link>
                      </div>
                      {SERVICE_LINKS.map((svc) => (
                        <Link
                          key={svc.slug}
                          to={`/services/${svc.slug}`}
                          className="block px-4 py-2 text-sm text-white/65 hover:text-white hover:bg-white/5 transition-colors rounded-lg mx-1"
                          role="menuitem"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {svc.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              }

              if (item.isHash) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(item, e)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${active ? 'text-white' : 'text-white/65 hover:text-white hover:bg-white/5'}`}
                  >
                    {item.label}
                    {active && <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary-400 rounded-full" />}
                  </a>
                )
              }

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${active ? 'text-white bg-white/5' : 'text-white/65 hover:text-white hover:bg-white/5'}`}
                >
                  {item.label}
                  {active && <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary-400 rounded-full" />}
                </Link>
              )
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a href="tel:+919843427966" className="text-sm text-white/55 hover:text-white transition-colors font-medium">
              +91 98434 27966
            </a>
            <a
              href="/#contact"
              onClick={(e) => { e.preventDefault(); if (isHome) { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) } else { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300) } }}
              className="btn-primary text-xs px-5 py-2.5"
            >
              Get Free Quote
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg glass"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 pt-20 lg:hidden">
          <div className="absolute inset-0 bg-navy-500/97 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
          <div className="relative h-full overflow-y-auto px-6 py-6 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div key={item.label}>
                    <button
                      className="w-full flex items-center justify-between py-3.5 px-4 text-base font-semibold text-white/80 hover:text-white border-b border-white/5 transition-colors"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileServicesOpen && (
                      <div className="pl-4 py-2 space-y-1 border-b border-white/5">
                        <Link to="/services" className="block py-2 text-sm text-primary-400 font-semibold" onClick={() => setMobileOpen(false)}>All Services</Link>
                        {SERVICE_LINKS.map((svc) => (
                          <Link
                            key={svc.slug}
                            to={`/services/${svc.slug}`}
                            className="block py-2 text-sm text-white/55 hover:text-white transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {svc.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              if (item.isHash) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(item, e)}
                    className="py-3.5 px-4 text-base font-semibold text-white/80 hover:text-white border-b border-white/5 transition-colors block"
                  >
                    {item.label}
                  </a>
                )
              }

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className="py-3.5 px-4 text-base font-semibold text-white/80 hover:text-white border-b border-white/5 transition-colors block"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}

            <div className="mt-6 space-y-3">
              <a href="tel:+919843427966" className="block text-center py-3 text-white/55 font-medium text-sm">+91 98434 27966</a>
              <a
                href="/#contact"
                className="btn-primary w-full justify-center"
                onClick={(e) => { e.preventDefault(); setMobileOpen(false); if (isHome) { setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100) } else { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 400) } }}
              >
                Request Free Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
