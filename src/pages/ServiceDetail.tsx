import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react'
import SERVICES from '../data/services'
import ScrollReveal from '../components/ui/ScrollReveal'

const WA_URL = `https://wa.me/919843427966?text=${encodeURIComponent(
  "Hello Sanjeevi, I'm interested in your engineering services and would like to discuss my project."
)}`

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = SERVICES.find((s) => s.slug === slug)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | DesignX Engineering Services`
    } else {
      document.title = 'Service Not Found | DesignX Engineering Services'
    }
  }, [service])

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="text-6xl mb-4">⚙</div>
        <h1 className="font-display font-bold text-3xl text-white mb-3">Service Not Found</h1>
        <p className="text-white/50 mb-8">We couldn't find that service. Browse all our engineering services below.</p>
        <Link to="/services" className="btn-primary">
          View All Services
        </Link>
      </div>
    )
  }

  const related = SERVICES.filter((s) => service.relatedSlugs.includes(s.slug))

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden blueprint-grid">
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at 30% 50%, ${service.accentColor}10 0%, transparent 60%)` }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <Link to="/services" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Services
          </Link>
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-5 border border-white/10">
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: service.accentColor }}>
              Engineering Service
            </span>
          </div>
          <h1 className="font-display font-extrabold text-4xl lg:text-6xl text-white mb-4 leading-tight">
            {service.title}
          </h1>
          <p className="text-white/55 text-xl mb-8 max-w-2xl">{service.tagline}</p>
          <div className="flex flex-wrap gap-3">
            <a href="/#contact" className="btn-primary">
              Get Free Consultation <ArrowRight className="w-4 h-4" />
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              WhatsApp Sanjeevi
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 relative">
        <div className="absolute inset-0 engineering-grid-bg opacity-15 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            <ScrollReveal className="lg:col-span-2">
              <h2 className="font-display font-bold text-2xl text-white mb-5">Overview</h2>
              <p className="text-white/65 text-lg leading-relaxed">{service.overview}</p>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="glass rounded-2xl border border-white/8 p-6 space-y-4">
                <h3 className="font-semibold text-white text-sm uppercase tracking-widest mb-4">Software Used</h3>
                <div className="flex flex-wrap gap-2">
                  {service.software.map((sw) => (
                    <span key={sw} className="text-xs px-3 py-1.5 rounded-lg glass border border-white/8 text-white/60">{sw}</span>
                  ))}
                </div>
                <h3 className="font-semibold text-white text-sm uppercase tracking-widest pt-2">Industries</h3>
                <div className="flex flex-wrap gap-2">
                  {service.industries.map((ind) => (
                    <span key={ind} className="text-xs px-3 py-1.5 rounded-lg border text-xs font-medium" style={{ borderColor: `${service.accentColor}40`, color: service.accentColor, background: `${service.accentColor}10` }}>{ind}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal><h2 className="font-display font-bold text-3xl text-white mb-10 text-center">Key Benefits</h2></ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.benefits.map((benefit, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="glass rounded-xl p-5 border border-white/5 hover:border-white/12 transition-all duration-300 group">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${service.accentColor}20` }}>
                      <CheckCircle className="w-3.5 h-3.5" style={{ color: service.accentColor }} />
                    </div>
                    <p className="text-white/65 text-sm leading-relaxed">{benefit}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 relative">
        <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6">
          <ScrollReveal><h2 className="font-display font-bold text-3xl text-white mb-10 text-center">How We Work</h2></ScrollReveal>
          <div className="space-y-4">
            {service.process.map((step, i) => (
              <ScrollReveal key={i} delay={i * 70}>
                <div className="glass rounded-xl border border-white/5 p-6 flex gap-5 hover:border-white/12 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 border-2" style={{ borderColor: service.accentColor, color: service.accentColor }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white mb-2">{step.step}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal><h2 className="font-display font-bold text-3xl text-white mb-10 text-center">What You Receive</h2></ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {service.deliverables.map((d, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="glass rounded-xl p-4 border border-white/5 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: service.accentColor }} />
                  <span className="text-white/65 text-sm">{d}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 relative">
        <div className="absolute inset-0 engineering-grid-bg opacity-15 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6">
          <ScrollReveal><h2 className="font-display font-bold text-3xl text-white mb-10 text-center">Frequently Asked Questions</h2></ScrollReveal>
          <div className="space-y-3">
            {service.faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className={`glass rounded-xl border transition-all duration-300 overflow-hidden ${openFaq === i ? 'border-white/15' : 'border-white/5 hover:border-white/10'}`}>
                  <button className="w-full flex items-center justify-between gap-4 p-5 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span className="font-semibold text-white text-sm leading-snug">{faq.q}</span>
                    <div className="flex-shrink-0 text-white/40">
                      {openFaq === i ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5">
                      <p className="text-white/55 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {related.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal><h2 className="font-display font-bold text-3xl text-white mb-10 text-center">Related Services</h2></ScrollReveal>
            <div className="grid md:grid-cols-3 gap-5">
              {related.map((rel, i) => (
                <ScrollReveal key={rel.slug} delay={i * 70}>
                  <Link to={`/services/${rel.slug}`} className={`glass rounded-2xl border border-white/5 p-6 block hover:border-white/12 transition-all duration-400 group card-hover bg-gradient-to-br ${rel.color}`}>
                    <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: rel.accentColor }}>Related Service</p>
                    <h3 className="font-display font-bold text-white text-base mb-2 group-hover:text-primary-300 transition-colors">{rel.title}</h3>
                    <p className="text-white/40 text-xs mb-4">{rel.tagline}</p>
                    <span className="text-xs font-semibold" style={{ color: rel.accentColor }}>Learn more →</span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at 50% 50%, ${service.accentColor}08 0%, transparent 70%)` }} />
        <ScrollReveal className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-4">
            Ready to Start Your {service.title} Project?
          </h2>
          <p className="text-white/50 text-lg mb-8">
            Contact Sanjeevi directly for a free consultation and project estimate within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/#contact" className="btn-primary">
              Request Free Consultation <ArrowRight className="w-4 h-4" />
            </a>
            <a href="mailto:sanjeevimech076@gmail.com" className="btn-secondary">
              Email Sanjeevi
            </a>
          </div>
          <p className="text-white/25 text-xs mt-6">sanjeevimech076@gmail.com · +91 98434 27966</p>
        </ScrollReveal>
      </section>
    </div>
  )
}
