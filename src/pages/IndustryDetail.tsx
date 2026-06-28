import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react'
import INDUSTRIES from '../data/industries'
import ScrollReveal from '../components/ui/ScrollReveal'

const WA_URL = `https://wa.me/919843427966?text=${encodeURIComponent(
  "Hello Sanjeevi, I'm interested in your engineering services and would like to discuss my project."
)}`

export default function IndustryDetail() {
  const { slug } = useParams<{ slug: string }>()
  const industry = INDUSTRIES.find((ind) => ind.slug === slug)

  useEffect(() => {
    if (industry) {
      document.title = `${industry.name} Engineering Services | DesignX`
    } else {
      document.title = 'Industry Not Found | DesignX Engineering Services'
    }
  }, [industry])

  if (!industry) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="text-6xl mb-4">🏭</div>
        <h1 className="font-display font-bold text-3xl text-white mb-3">Industry Not Found</h1>
        <p className="text-white/50 mb-8">Browse all the industries we serve below.</p>
        <Link to="/#industries" className="btn-primary">View All Industries</Link>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden blueprint-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Link to="/#industries" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Industries
          </Link>
          <div className="flex items-center gap-4 mb-5">
            <span className="text-5xl">{industry.icon}</span>
            <div className="inline-flex items-center glass px-4 py-2 rounded-full border border-primary-500/20">
              <span className="text-xs font-medium text-primary-300 tracking-widest uppercase">Industry Focus</span>
            </div>
          </div>
          <h1 className="font-display font-extrabold text-4xl lg:text-6xl text-white mb-4 leading-tight">
            {industry.name} Engineering Services
          </h1>
          <p className="text-white/55 text-lg mb-8 max-w-2xl">{industry.overview}</p>
          <div className="flex flex-wrap gap-3">
            <a href="/#contact" className="btn-primary">
              Discuss Your Project <ArrowRight className="w-4 h-4" />
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              WhatsApp Sanjeevi
            </a>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20 relative">
        <div className="absolute inset-0 engineering-grid-bg opacity-15 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Challenges */}
            <ScrollReveal direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-amber-500/15 border border-amber-500/25 flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                </div>
                <h2 className="font-display font-bold text-2xl text-white">Engineering Challenges</h2>
              </div>
              <div className="space-y-3">
                {industry.challenges.map((c, i) => (
                  <div key={i} className="glass rounded-xl border border-amber-500/10 p-5 hover:border-amber-500/20 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-amber-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-amber-400 text-xs font-bold">{i + 1}</span>
                      </div>
                      <p className="text-white/65 text-sm leading-relaxed">{c}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Solutions */}
            <ScrollReveal direction="right">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-primary-500/15 border border-primary-500/25 flex items-center justify-center">
                  <Lightbulb className="w-4 h-4 text-primary-400" />
                </div>
                <h2 className="font-display font-bold text-2xl text-white">Our Solutions</h2>
              </div>
              <div className="space-y-3">
                {industry.solutions.map((s, i) => (
                  <div key={i} className="glass rounded-xl border border-primary-500/10 p-5 hover:border-primary-500/20 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                      <p className="text-white/65 text-sm leading-relaxed">{s}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Relevant Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-10">
            <h2 className="font-display font-bold text-3xl text-white">Services for {industry.name}</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industry.services.map((svc, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <Link to={`/services/${industry.serviceslugs[i]}`} className="glass rounded-xl border border-white/5 p-5 block hover:border-primary-500/25 transition-all duration-300 group card-hover text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-500/20 transition-colors">
                    <ArrowRight className="w-4 h-4 text-primary-400" />
                  </div>
                  <h3 className="font-semibold text-white text-sm group-hover:text-primary-300 transition-colors">{svc}</h3>
                  <p className="text-primary-400 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Learn more →</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 relative">
        <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-10">
            <h2 className="font-display font-bold text-3xl text-white">Why {industry.name} Companies Choose DesignX</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {industry.benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="glass rounded-xl border border-white/5 p-5 flex items-start gap-3 hover:border-emerald-500/20 transition-all duration-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white/65 text-sm leading-relaxed">{b}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="glass-strong rounded-2xl border border-primary-500/20 p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-blue-400" />
              <div className="inline-flex items-center glass px-3 py-1.5 rounded-full border border-primary-500/20 mb-5">
                <span className="text-xs font-bold text-primary-400 tracking-widest uppercase">Case Study</span>
              </div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">{industry.caseStudy.title}</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: 'Challenge', content: industry.caseStudy.challenge, color: 'text-amber-400', border: 'border-amber-500/15' },
                  { label: 'Solution', content: industry.caseStudy.solution, color: 'text-primary-400', border: 'border-primary-500/15' },
                  { label: 'Result', content: industry.caseStudy.result, color: 'text-emerald-400', border: 'border-emerald-500/15' },
                ].map(({ label, content, color, border }) => (
                  <div key={label} className={`glass rounded-xl border ${border} p-5`}>
                    <span className={`text-xs font-bold uppercase tracking-widest ${color} block mb-3`}>{label}</span>
                    <p className="text-white/60 text-sm leading-relaxed">{content}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
        <ScrollReveal className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-4">
            Discuss Your {industry.name} Engineering Project
          </h2>
          <p className="text-white/50 text-lg mb-8">
            Sanjeevi will review your requirements and provide a free consultation within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/#contact" className="btn-primary">
              Request Free Consultation <ArrowRight className="w-4 h-4" />
            </a>
            <a href="mailto:sanjeevimech076@gmail.com" className="btn-secondary">
              Email Sanjeevi
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
