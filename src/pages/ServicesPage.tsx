import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SERVICES from '../data/services'
import ScrollReveal from '../components/ui/ScrollReveal'

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Engineering Services | DesignX Engineering Services'
  }, [])

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden blueprint-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-primary-500/20">
            <span className="text-xs font-medium text-primary-300 tracking-wider uppercase">What We Offer</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl lg:text-6xl text-white mb-5">
            Engineering Services
            <br /><span className="gradient-text">Built for Excellence</span>
          </h1>
          <p className="text-white/55 text-xl max-w-2xl mx-auto">
            From initial concept to production-ready documentation — comprehensive mechanical engineering services delivered by Sanjeevi with precision and expertise.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 engineering-grid-bg opacity-15 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {SERVICES.map((service, i) => (
              <ScrollReveal key={service.slug} delay={i * 60}>
                <Link
                  to={`/services/${service.slug}`}
                  className={`glass rounded-2xl border border-white/5 p-8 block group hover:border-white/12 transition-all duration-400 card-hover bg-gradient-to-br ${service.color} relative overflow-hidden`}
                >
                  {i === 1 && (
                    <div className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full bg-primary-500 text-white">Popular</div>
                  )}
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border" style={{ background: `${service.accentColor}15`, borderColor: `${service.accentColor}30` }}>
                      <span className="text-xl">⚙</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: service.accentColor }}>{service.tagline}</p>
                      <h2 className="font-display font-bold text-white text-xl mb-3 group-hover:text-primary-200 transition-colors">{service.title}</h2>
                      <p className="text-white/50 text-sm leading-relaxed mb-5 line-clamp-3">{service.overview}</p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {service.software.slice(0, 3).map((sw) => (
                          <span key={sw} className="text-[11px] px-2.5 py-1 rounded-lg glass border border-white/8 text-white/50">{sw}</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 font-semibold text-sm transition-colors duration-300" style={{ color: service.accentColor }}>
                        Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
        <ScrollReveal className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-white/50 text-lg mb-8">Describe your project to Sanjeevi and he will recommend the right approach — free, no obligation.</p>
          <Link to="/#contact" className="btn-primary">
            Request Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </section>
    </div>
  )
}
