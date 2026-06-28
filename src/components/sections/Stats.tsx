import AnimatedCounter from '../ui/AnimatedCounter'
import ScrollReveal from '../ui/ScrollReveal'

const stats = [
  { value: 8, suffix: '+', label: 'Years Experience', desc: 'Professional mechanical design' },
  { value: 500, suffix: '+', label: 'Projects Delivered', desc: 'Across 15+ industries worldwide' },
  { value: 100, suffix: '+', label: 'Happy Clients', desc: 'From startups to large OEMs' },
  { value: 15, suffix: '+', label: 'Industries Served', desc: 'Automotive to Medical Devices' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', desc: 'Based on post-project reviews' },
]

export default function Stats() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(0,86,214,0.08) 0%, rgba(10,22,40,0) 50%, rgba(0,86,214,0.05) 100%)',
        }}
      />
      <div className="absolute inset-0 border-y border-white/5" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 80}>
              <div className="bg-navy-500 px-8 py-10 text-center group hover:bg-primary-500/5 transition-colors duration-300">
                <div className="font-display font-extrabold text-4xl md:text-5xl text-white mb-2 group-hover:text-primary-300 transition-colors">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-semibold text-white/80 text-sm mb-1">{stat.label}</div>
                <div className="text-white/30 text-xs">{stat.desc}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
