import { useState } from 'react'
import ScrollReveal from '../ui/ScrollReveal'

const industries = [
  { name: 'Automotive', icon: '🚗', desc: 'Powertrain components, body panels, chassis design, tooling, and assembly fixtures.' },
  { name: 'Aerospace', icon: '✈️', desc: 'Structural components, brackets, actuator systems, and aerospace-grade documentation.' },
  { name: 'Industrial Machinery', icon: '🏭', desc: 'Custom machine design, fixture engineering, conveyor systems, and production tooling.' },
  { name: 'Heavy Engineering', icon: '⚙️', desc: 'Structural steel, pressure vessels, heavy lifting equipment, and crane components.' },
  { name: 'Robotics', icon: '🤖', desc: 'Robotic arm linkages, end effectors, grippers, and automation system design.' },
  { name: 'Medical Devices', icon: '🏥', desc: 'FDA-compliant medical device design, surgical instruments, and implant components.' },
  { name: 'Consumer Products', icon: '📱', desc: 'Ergonomic product design, injection-molded parts, and retail-ready packaging solutions.' },
  { name: 'Energy & Power', icon: '⚡', desc: 'Wind turbine components, solar mounting, generator parts, and energy storage systems.' },
  { name: 'Oil & Gas', icon: '🔧', desc: 'Pressure equipment, valve bodies, pipeline components, and subsea engineering.' },
  { name: 'Automation', icon: '🔩', desc: 'Pneumatic systems, servo-driven mechanisms, and smart manufacturing integration.' },
  { name: 'Manufacturing', icon: '🏗️', desc: 'Jigs, fixtures, dies, molds, and production-optimized part design for high volume.' },
  { name: 'Aerospace Defense', icon: '🛡️', desc: 'Mil-spec components, defense system housing, and ruggedized electronics enclosures.' },
]

export default function Industries() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="industries" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-primary-500/20">
            <span className="text-xs font-medium text-primary-300 tracking-wider uppercase">Industries Served</span>
          </div>
          <h2 className="section-heading text-4xl lg:text-5xl xl:text-6xl text-white mb-5">
            Engineering Across
            <br />
            <span className="gradient-text">Every Industry</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Deep domain expertise across 15+ industries — we understand the unique engineering demands of your sector.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry, i) => (
            <ScrollReveal key={industry.name} delay={i * 40}>
              <div
                className={`relative glass rounded-2xl p-5 cursor-default transition-all duration-400 border group ${
                  active === i ? 'border-primary-500/40 bg-primary-500/5' : 'border-white/5 hover:border-white/10'
                }`}
                style={{
                  transform: active === i ? 'scale(1.03)' : 'scale(1)',
                }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                <div className="text-3xl mb-3">{industry.icon}</div>
                <h3 className="font-display font-bold text-white text-sm mb-2">{industry.name}</h3>
                <p
                  className="text-white/40 text-xs leading-relaxed overflow-hidden transition-all duration-400"
                  style={{
                    maxHeight: active === i ? '80px' : '0',
                    opacity: active === i ? 1 : 0,
                  }}
                >
                  {industry.desc}
                </p>

                {/* Corner accent */}
                <div className={`absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-primary-400 transition-opacity duration-300 ${active === i ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
