import { Shield, Clock, Award, HeartHandshake, Globe, Microscope, DollarSign, Lock, CheckCircle2, Wrench } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'

const reasons = [
  { icon: Award, title: '8+ Years Experience', desc: 'Sanjeevi brings over 8 years of hands-on mechanical design and product engineering expertise to every project.' },
  { icon: Microscope, title: 'Industry-Standard CAD', desc: 'SolidWorks, CATIA, NX, AutoCAD, Creo — delivering in your preferred software and all standard file formats.' },
  { icon: CheckCircle2, title: 'High Accuracy', desc: 'Zero-compromise precision in every drawing, 3D model, and analysis report we deliver.' },
  { icon: Clock, title: 'Fast Delivery', desc: 'Aggressive timelines without sacrificing quality. On-time, every time — committed to your schedule.' },
  { icon: DollarSign, title: 'Affordable Pricing', desc: 'Premium engineering quality at competitive rates — exceptional value tailored to your budget.' },
  { icon: Lock, title: 'NDA Protected', desc: 'Your designs and IP remain strictly confidential. NDA is signed before any project files are shared.' },
  { icon: Globe, title: 'Global Standards', desc: 'Fully compliant with ASME, ISO, DIN, BS, and all international engineering standards.' },
  { icon: HeartHandshake, title: 'Direct Communication', desc: 'Work directly with Sanjeevi — no account managers, no handoffs. Clear, fast, expert communication.' },
  { icon: Shield, title: 'Quality Assurance', desc: 'Rigorous multi-stage review before every deliverable is released — first-time-right is the standard.' },
  { icon: Wrench, title: 'Mfg-Oriented Design', desc: 'Every design is optimized for real-world manufacturing. DFM and DFA analysis are core to the process.' },
]

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — About Sanjeevi */}
          <ScrollReveal direction="left">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-primary-500/20">
              <span className="text-xs font-medium text-primary-300 tracking-wider uppercase">About DesignX</span>
            </div>

            <h2 className="section-heading text-4xl lg:text-5xl text-white mb-6 leading-tight">
              Led by an Engineer
              <br />
              <span className="gradient-text">Who Builds Things</span>
            </h2>

            <p className="text-white/65 text-lg leading-relaxed mb-5">
              DesignX Engineering Services is founded and led by{' '}
              <span className="text-white font-semibold">Sanjeevi</span>, a Mechanical Design Engineer
              with over <span className="text-primary-300 font-semibold">8 years of professional experience</span> in
              CAD Design, Product Development, Assembly Design, FEA, GD&T, Tolerance Analysis, and
              Manufacturing Support.
            </p>

            <p className="text-white/50 text-base leading-relaxed mb-8">
              Working with companies across automotive, aerospace, medical devices, industrial machinery,
              and consumer products sectors, Sanjeevi brings deep domain knowledge and a manufacturing-first
              mindset to every project — from initial concept to production-ready deliverables.
            </p>

            {/* Expertise tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                'CAD Modeling',
                'Product Development',
                'Assembly Design',
                'FEA Analysis',
                'GD&T',
                'Tolerance Stack-Up',
                'Reverse Engineering',
                'DFM / DFA',
                'Manufacturing Support',
              ].map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1.5 rounded-full glass border border-primary-500/20 text-primary-300 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Mission & Vision */}
            <div className="space-y-4 mb-8">
              {[
                {
                  label: 'Mission',
                  text: 'To be the most trusted engineering partner for companies worldwide by delivering precision-engineered solutions that accelerate innovation.',
                },
                {
                  label: 'Vision',
                  text: 'A world where every product is engineered with precision, manufacturing-awareness, and quality at its core — regardless of company size.',
                },
              ].map(({ label, text }) => (
                <div key={label} className="glass rounded-xl p-5 border border-white/5">
                  <span className="text-xs font-bold text-primary-400 tracking-widest uppercase">{label}</span>
                  <p className="text-white/60 text-sm mt-2 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <a href="#contact" className="btn-primary">
                Start a Project with Sanjeevi
              </a>
              <a
                href="https://www.linkedin.com/in/sanjeevi-s-742a2a238/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View LinkedIn
              </a>
            </div>
          </ScrollReveal>

          {/* Right — Reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => {
              const Icon = reason.icon
              return (
                <ScrollReveal key={reason.title} delay={i * 50}>
                  <div className="glass rounded-xl p-4 border border-white/5 hover:border-primary-500/20 transition-all duration-300 group hover:bg-white/3">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/20 transition-colors">
                        <Icon className="w-4 h-4 text-primary-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm mb-1">{reason.title}</h4>
                        <p className="text-white/40 text-xs leading-relaxed">{reason.desc}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
