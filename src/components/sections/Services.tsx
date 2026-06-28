import { useState } from 'react'
import { ArrowRight, Box, Layers, Cpu, RotateCcw, Target, Ruler, TrendingUp, Cog } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'

const services = [
  {
    icon: Box,
    title: 'Mechanical Product Design',
    tagline: 'From concept to market',
    description: 'End-to-end product engineering including concept development, industrial design, DFM analysis, and manufacturable solutions.',
    features: ['Concept Development', 'Industrial Design', 'DFM Analysis', 'Prototyping Support'],
    color: 'from-blue-500/20 to-blue-600/5',
    accent: '#3B82F6',
  },
  {
    icon: Layers,
    title: 'CAD Design & Drafting',
    tagline: 'Precision documentation',
    description: '2D drawings, 3D modeling, production-ready drawings, BOM preparation, and complete technical documentation.',
    features: ['3D Solid Modeling', '2D Production Drawings', 'BOM Preparation', 'Multi-CAD Formats'],
    color: 'from-primary-500/20 to-primary-600/5',
    accent: '#0056D6',
  },
  {
    icon: Cog,
    title: 'Assembly Design',
    tagline: 'Complex multi-part solutions',
    description: 'Complex multi-part assemblies, motion studies, interference detection, exploded view drawings, and assembly optimization.',
    features: ['Motion Studies', 'Interference Detection', 'Exploded Views', 'Assembly Optimization'],
    color: 'from-violet-500/20 to-violet-600/5',
    accent: '#8B5CF6',
  },
  {
    icon: Cpu,
    title: 'Finite Element Analysis',
    tagline: 'Validate before you build',
    description: 'Structural, thermal, vibration, fatigue, and stress analysis to validate product performance before manufacturing.',
    features: ['Structural Analysis', 'Thermal Analysis', 'Vibration & Fatigue', 'CFD Simulation'],
    color: 'from-emerald-500/20 to-emerald-600/5',
    accent: '#10B981',
  },
  {
    icon: RotateCcw,
    title: 'Reverse Engineering',
    tagline: 'Physical to digital',
    description: 'Convert physical components into precise digital CAD models using advanced scanning and engineering techniques.',
    features: ['Point Cloud Processing', 'Surface Reconstruction', 'Legacy Part Recreation', 'As-Built Models'],
    color: 'from-orange-500/20 to-orange-600/5',
    accent: '#F97316',
  },
  {
    icon: Target,
    title: 'GD&T',
    tagline: 'Manufacturing precision',
    description: 'Professional Geometric Dimensioning & Tolerancing for manufacturing precision and quality control per ASME Y14.5.',
    features: ['ASME Y14.5 Standard', 'Datum Reference', 'Feature Control', 'Drawing Annotation'],
    color: 'from-red-500/20 to-red-600/5',
    accent: '#EF4444',
  },
  {
    icon: Ruler,
    title: 'Tolerance Stack-Up Analysis',
    tagline: 'Optimize manufacturability',
    description: 'Optimize component tolerances for improved manufacturability, assembly efficiency, and reduced production costs.',
    features: ['1D / 2D Analysis', 'Statistical Analysis', 'Worst-Case Analysis', 'Cost Optimization'],
    color: 'from-amber-500/20 to-amber-600/5',
    accent: '#F59E0B',
  },
  {
    icon: TrendingUp,
    title: 'Product Development',
    tagline: 'Concept to production',
    description: 'Complete engineering support from concept through design, validation, prototyping, testing, and production readiness.',
    features: ['Full Lifecycle Support', 'Design Validation', 'Prototype Coordination', 'Production Readiness'],
    color: 'from-cyan-500/20 to-cyan-600/5',
    accent: '#06B6D4',
  },
]

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="services" className="py-28 relative">
      <div className="absolute inset-0 engineering-grid-bg opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-primary-500/20">
            <span className="text-xs font-medium text-primary-300 tracking-wider uppercase">What We Do</span>
          </div>
          <h2 className="section-heading text-4xl lg:text-5xl xl:text-6xl text-white mb-5">
            Engineering Services
            <br />
            <span className="gradient-text">Built for Excellence</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            From initial concept to final production files — comprehensive engineering services delivered with precision and expertise.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon
            const isHovered = hovered === i
            return (
              <ScrollReveal key={service.title} delay={i * 60}>
                <div
                  className={`relative glass rounded-2xl p-6 h-full cursor-pointer transition-all duration-500 group ${
                    isHovered ? 'border-white/15 shadow-2xl' : 'border-white/5'
                  }`}
                  style={{
                    transform: isHovered ? 'translateY(-8px)' : 'none',
                    boxShadow: isHovered ? `0 32px 64px rgba(0,0,0,0.4), 0 0 0 1px ${service.accent}30` : 'none',
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Gradient bg on hover */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative">
                    {/* Icon */}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                      style={{
                        background: isHovered ? `${service.accent}20` : 'rgba(255,255,255,0.06)',
                        border: `1px solid ${isHovered ? service.accent + '40' : 'rgba(255,255,255,0.08)'}`,
                      }}
                    >
                      <Icon
                        className="w-5 h-5 transition-colors duration-300"
                        style={{ color: isHovered ? service.accent : 'rgba(255,255,255,0.6)' }}
                      />
                    </div>

                    <p className="text-[11px] text-white/35 uppercase tracking-wider font-medium mb-1.5">
                      {service.tagline}
                    </p>

                    <h3 className="font-display font-bold text-base text-white mb-3 leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-white/45 text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>

                    <ul className="space-y-1.5">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-xs text-white/40">
                          <div
                            className="w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: service.accent }}
                          />
                          {feat}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 pt-4 border-t border-white/5">
                      <a
                        href="#contact"
                        className="flex items-center gap-1.5 text-xs font-semibold transition-colors duration-300"
                        style={{ color: isHovered ? service.accent : 'rgba(255,255,255,0.3)' }}
                      >
                        Learn more
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal className="text-center mt-14">
          <p className="text-white/40 text-sm mb-5">Don't see what you need? We offer custom engineering solutions.</p>
          <a href="#contact" className="btn-primary">
            Discuss Custom Requirements
            <ArrowRight className="w-4 h-4" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
