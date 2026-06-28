import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'

const testimonials = [
  {
    name: 'James Richardson',
    role: 'Chief Engineer',
    company: 'PrecisionTech Industries, UK',
    text: 'DesignX delivered a complete gearbox assembly design that exceeded our FEA requirements on the first review. Their attention to manufacturing tolerances saved us significant rework costs. Exceptional team.',
    rating: 5,
    avatar: 'JR',
    color: '#3B82F6',
  },
  {
    name: 'Sarah Chen',
    role: 'Product Development Director',
    company: 'MedTech Solutions, USA',
    text: 'We engaged DesignX for a complex medical device housing requiring FDA-compliant design. Their GD&T documentation was impeccable, and they understood our regulatory needs without us having to explain basics.',
    rating: 5,
    avatar: 'SC',
    color: '#10B981',
  },
  {
    name: 'Klaus Müller',
    role: 'Head of R&D',
    company: 'AutomationWerks GmbH, Germany',
    text: 'The reverse engineering project was completed with remarkable accuracy. DesignX converted our legacy tooling into parametric CAD models that our team could immediately work with. World-class service.',
    rating: 5,
    avatar: 'KM',
    color: '#8B5CF6',
  },
  {
    name: 'Arjun Sharma',
    role: 'CTO',
    company: 'Robotics Dynamics, India',
    text: 'From the initial consultation to the final delivery, DesignX was professional, communicative, and technically superb. The FEA simulation accurately predicted the failure modes we later tested in the lab.',
    rating: 5,
    avatar: 'AS',
    color: '#F97316',
  },
  {
    name: 'Maria Santos',
    role: 'VP Engineering',
    company: 'AeroTech Components, Brazil',
    text: 'Our aerospace bracket program required DO-160 compliance documentation and tight schedule adherence. DesignX delivered all 24 bracket designs two weeks early. The quality was remarkable.',
    rating: 5,
    avatar: 'MS',
    color: '#EF4444',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))

  const current = testimonials[index]

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/10 via-transparent to-primary-900/10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-primary-500/20">
            <span className="text-xs font-medium text-primary-300 tracking-wider uppercase">Client Stories</span>
          </div>
          <h2 className="section-heading text-4xl lg:text-5xl xl:text-6xl text-white mb-5">
            Trusted by Engineers
            <br />
            <span className="gradient-text">Around the World</span>
          </h2>
        </ScrollReveal>

        {/* Main testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-strong rounded-3xl border border-white/10 p-10 md:p-14 relative overflow-hidden">
            {/* Decorative quote */}
            <Quote className="absolute top-6 right-8 w-20 h-20 text-primary-500/10" />

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 relative z-10">
              "{current.text}"
            </p>

            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0"
                style={{ background: current.color }}
              >
                {current.avatar}
              </div>
              <div>
                <div className="font-display font-bold text-white">{current.name}</div>
                <div className="text-white/40 text-sm">{current.role} · {current.company}</div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? 'w-8 bg-primary-400' : 'w-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={prev} className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                <ChevronLeft className="w-4 h-4 text-white/60" />
              </button>
              <button onClick={next} className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                <ChevronRight className="w-4 h-4 text-white/60" />
              </button>
            </div>
          </div>
        </div>

        {/* Mini cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-10">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setIndex(i)}
              className={`glass rounded-xl p-4 text-left transition-all duration-300 border ${
                i === index ? 'border-primary-500/40 bg-primary-500/5' : 'border-white/5 hover:border-white/10'
              }`}
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0" style={{ background: t.color }}>
                  {t.avatar}
                </div>
                <div className="overflow-hidden">
                  <div className="text-white text-xs font-semibold truncate">{t.name.split(' ')[0]}</div>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
