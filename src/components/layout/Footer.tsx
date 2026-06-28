import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Zap, Mail, Phone, MapPin, Linkedin, MessageCircle, ArrowRight } from 'lucide-react'

const WA_URL = `https://wa.me/919843427966?text=${encodeURIComponent(
  "Hello Sanjeevi, I'm interested in your engineering services and would like to discuss my project."
)}`

const serviceLinks = [
  { label: 'CAD Design & Drafting', slug: 'cad-design' },
  { label: 'Mechanical Product Design', slug: 'product-design' },
  { label: 'Assembly Design', slug: 'assembly-design' },
  { label: 'FEA / Simulation', slug: 'fea-analysis' },
  { label: 'Reverse Engineering', slug: 'reverse-engineering' },
  { label: 'GD&T', slug: 'gdt' },
  { label: 'Tolerance Analysis', slug: 'tolerance-analysis' },
  { label: 'Product Development', slug: 'product-development' },
]

const industryLinks = [
  { label: 'Automotive', slug: 'automotive' },
  { label: 'Aerospace', slug: 'aerospace' },
  { label: 'Medical Devices', slug: 'medical-devices' },
  { label: 'Industrial Machinery', slug: 'industrial-machinery' },
  { label: 'Robotics', slug: 'robotics' },
  { label: 'Consumer Products', slug: 'consumer-products' },
  { label: 'Oil & Gas', slug: 'oil-gas' },
]

const companyLinks = [
  { label: 'About Sanjeevi', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Service', to: '/terms' },
]

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (isHome) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300)
    }
  }

  return (
    <footer className="relative bg-[#020B18] border-t border-white/5">
      <div className="absolute inset-0 engineering-grid-bg opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Top CTA Bar */}
        <div className="py-14 border-b border-white/5 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-display font-bold text-2xl lg:text-3xl text-white mb-2">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/50 text-sm">
              Talk directly with Sanjeevi — get a free consultation today.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <a href="/#contact" onClick={handleContactClick} className="btn-primary">
              Request Free Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5 w-fit">
              <div className="w-9 h-9 rounded-lg bg-primary-500 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <span className="font-display font-bold text-white text-lg leading-none">DesignX</span>
                <span className="block text-[10px] text-white/40 tracking-widest uppercase leading-none mt-0.5">
                  Engineering Services
                </span>
              </div>
            </Link>

            <p className="text-white/50 text-sm leading-relaxed mb-2 max-w-xs">
              Led by <span className="text-white/70 font-medium">Sanjeevi</span>, a Mechanical Design Engineer
              with 8+ years of experience in CAD, Product Development, FEA, GD&T, and manufacturing-oriented design.
            </p>
            <p className="text-white/30 text-xs mb-6 max-w-xs">
              Delivering engineering excellence from Chennai to clients worldwide.
            </p>

            <div className="space-y-3 mb-8">
              <a
                href="mailto:sanjeevimech076@gmail.com"
                className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                sanjeevimech076@gmail.com
              </a>
              <a
                href="tel:+919843427966"
                className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                +91 98434 27966
              </a>
              <div className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                Chennai, Tamil Nadu, India
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/sanjeevi-s-742a2a238/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 glass rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-primary-500/20 hover:border-primary-500/30 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 glass rounded-lg flex items-center justify-center text-white/50 hover:text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366]/30 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="mailto:sanjeevimech076@gmail.com"
                aria-label="Email"
                className="w-9 h-9 glass rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-primary-500/20 hover:border-primary-500/30 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-5 tracking-wide">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-white/45 hover:text-white text-sm transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-5 tracking-wide">Industries</h4>
            <ul className="space-y-3">
              {industryLinks.map((ind) => (
                <li key={ind.slug}>
                  <Link to={`/industries/${ind.slug}`} className="text-white/45 hover:text-white text-sm transition-colors">
                    {ind.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-5 tracking-wide">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((c) => (
                <li key={c.to}>
                  <Link to={c.to} className="text-white/45 hover:text-white text-sm transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h4 className="font-semibold text-white text-sm mb-3 tracking-wide">Business Hours</h4>
              <p className="text-white/40 text-xs leading-relaxed">
                Mon – Sat: 9:00 AM – 7:00 PM IST<br />
                Sunday: By appointment
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2024 DesignX Engineering Services. All rights reserved. Led by Sanjeevi.
          </p>
          <p className="text-white/20 text-xs">Engineered in Chennai · Delivered Globally</p>
        </div>
      </div>
    </footer>
  )
}
