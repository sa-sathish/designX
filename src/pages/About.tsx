import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Phone, Linkedin, CheckCircle, Award, Clock, Globe } from 'lucide-react'
import ScrollReveal from '../components/ui/ScrollReveal'
import AnimatedCounter from '../components/ui/AnimatedCounter'

const expertise = [
  'CAD Modeling (SolidWorks, CATIA, NX, AutoCAD)',
  'Mechanical Product Design & DFM',
  'Assembly Design & Motion Studies',
  'Finite Element Analysis (FEA)',
  'Geometric Dimensioning & Tolerancing (GD&T)',
  'Tolerance Stack-Up Analysis',
  'Reverse Engineering',
  'Manufacturing Support & Documentation',
  'Design for Assembly (DFA)',
  'Product Development & Prototyping',
]

const reasons = [
  { icon: Award, title: 'Direct Expert Access', desc: 'You work directly with Sanjeevi — an experienced engineer, not a project coordinator who relays messages to an offshore team.' },
  { icon: CheckCircle, title: 'Manufacturing-First Thinking', desc: 'Every design decision is made with manufacturing reality in mind. DFM is not an afterthought — it is integrated from the first concept sketch.' },
  { icon: Clock, title: 'Committed Timelines', desc: 'Realistic timelines are agreed upfront and honoured. If something changes, you are informed immediately — not after the deadline passes.' },
  { icon: Globe, title: 'Global Standards', desc: 'Proficient in ASME, ISO, DIN, and BS drawing standards. International clients receive documentation their engineering teams can work with directly.' },
]

const stats = [
  { value: 8, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 15, suffix: '+', label: 'Industries Served' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
]

export default function About() {
  useEffect(() => {
    document.title = 'About Sanjeevi | DesignX Engineering Services'
  }, [])

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden blueprint-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-primary-500/20">
            <span className="text-xs font-medium text-primary-300 tracking-wider uppercase">About DesignX</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl lg:text-6xl text-white mb-5 leading-tight">
            About <span className="gradient-text">DesignX</span>
            <br />Engineering Services
          </h1>
          <p className="text-white/55 text-xl max-w-2xl">
            Founded and led by Sanjeevi — a Mechanical Design Engineer with over 8 years of professional experience delivering precision engineering solutions to clients worldwide.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 80}>
                <div className="bg-navy-500 px-8 py-8 text-center hover:bg-primary-500/5 transition-colors duration-300 group">
                  <div className="font-display font-extrabold text-4xl text-white mb-1 group-hover:text-primary-300 transition-colors">
                    <AnimatedCounter end={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-white/40 text-xs tracking-wide">{s.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 relative">
        <div className="absolute inset-0 engineering-grid-bg opacity-15 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal direction="left">
              <h2 className="font-display font-bold text-3xl text-white mb-6">Professional Background</h2>
              <div className="space-y-4 text-white/60 text-base leading-relaxed">
                <p>
                  <span className="text-white font-semibold">Sanjeevi</span> is the founder and principal engineer of DesignX Engineering Services, based in Chennai, Tamil Nadu. With over 8 years of hands-on mechanical engineering experience, he has worked across a broad range of industries — from automotive and aerospace to medical devices, industrial machinery, and consumer products.
                </p>
                <p>
                  His engineering practice covers the full mechanical design workflow: from initial concept development and 3D CAD modeling through engineering simulation (FEA), tolerance analysis, GD&T annotation, and production-ready documentation. Every project is executed with a manufacturing-first mindset — designs are not just geometrically correct, they are optimised for the realities of the production process.
                </p>
                <p>
                  Sanjeevi has worked with clients ranging from early-stage startups bringing their first product to market, to established OEMs and Tier 1 suppliers requiring specialist engineering capacity for specific programs. The common thread is a commitment to technical accuracy, clear communication, and on-time delivery.
                </p>
                <p>
                  DesignX was established to offer companies access to senior engineering capability without the overhead of building an in-house team — providing the expertise of an experienced engineer at the scale and flexibility that modern product development demands.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <a href="mailto:sanjeevimech076@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors group">
                  <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                  sanjeevimech076@gmail.com
                </a>
                <a href="tel:+919843427966" className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors group">
                  <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                  +91 98434 27966
                </a>
                <a href="https://www.linkedin.com/in/sanjeevi-s-742a2a238/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors group">
                  <Linkedin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  linkedin.com/in/sanjeevi-s-742a2a238
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <h2 className="font-display font-bold text-2xl text-white mb-6">Engineering Expertise</h2>
              <div className="grid gap-2">
                {expertise.map((skill, i) => (
                  <div key={i} className="glass rounded-xl border border-white/5 px-4 py-3 flex items-center gap-3 hover:border-primary-500/20 transition-colors duration-300 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                    <span className="text-white/65 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 relative">
        <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: 'Mission', text: 'To be the most trusted engineering partner for companies worldwide by delivering precision-engineered solutions — accurate, manufacturable, and delivered on time. Every project is treated as if it were our own product.', color: 'border-primary-500/30' },
              { label: 'Vision', text: 'A world where access to senior engineering expertise is not limited by company size or location — where any product team, anywhere, can engage world-class mechanical engineering capability with transparency and confidence.', color: 'border-emerald-500/20' },
            ].map(({ label, text, color }) => (
              <ScrollReveal key={label}>
                <div className={`glass-strong rounded-2xl border ${color} p-8`}>
                  <span className="text-xs font-bold text-primary-400 tracking-widest uppercase block mb-4">{label}</span>
                  <p className="text-white/65 text-base leading-relaxed">{text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose DesignX */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-10">
            <h2 className="font-display font-bold text-3xl text-white">Why Clients Choose DesignX</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reasons.map((r, i) => {
              const Icon = r.icon
              return (
                <ScrollReveal key={r.title} delay={i * 70}>
                  <div className="glass rounded-xl border border-white/5 p-6 hover:border-primary-500/20 transition-all duration-300 group text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary-400" />
                    </div>
                    <h3 className="font-display font-bold text-white text-sm mb-2">{r.title}</h3>
                    <p className="text-white/45 text-xs leading-relaxed">{r.desc}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
        <ScrollReveal className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-4">
            Ready to Work with Sanjeevi?
          </h2>
          <p className="text-white/50 text-lg mb-8">
            Get a free consultation on your engineering project — typically responded to within 2 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/#contact" className="btn-primary">
              Request Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://www.linkedin.com/in/sanjeevi-s-742a2a238/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Linkedin className="w-4 h-4" />
              View LinkedIn Profile
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
