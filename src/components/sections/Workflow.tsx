import ScrollReveal from '../ui/ScrollReveal'

const steps = [
  { n: '01', title: 'Requirement Discussion', desc: 'We begin with a detailed discussion to understand your project scope, goals, constraints, and success criteria.', icon: '💬' },
  { n: '02', title: 'Engineering Consultation', desc: 'Our senior engineers analyze your requirements and propose the optimal engineering approach and methodology.', icon: '🔍' },
  { n: '03', title: 'CAD Design', desc: 'Precision 3D modeling and 2D drawing creation using industry-standard CAD tools per your specifications.', icon: '📐' },
  { n: '04', title: 'Simulation & Validation', desc: 'FEA analysis, stress testing, and virtual validation to ensure your design performs under real-world conditions.', icon: '🧮' },
  { n: '05', title: 'Client Review', desc: 'Detailed presentation of design deliverables with revision cycles until you are completely satisfied.', icon: '✅' },
  { n: '06', title: 'Prototype Support', desc: 'We coordinate with your manufacturing partners and provide prototype guidance for physical validation.', icon: '🔩' },
  { n: '07', title: 'Final Production Files', desc: 'Complete production-ready documentation package: drawings, BOM, specifications, and all required formats.', icon: '📦' },
]

export default function Workflow() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 blueprint-grid opacity-40 pointer-events-none" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-primary-500/20">
            <span className="text-xs font-medium text-primary-300 tracking-wider uppercase">Our Process</span>
          </div>
          <h2 className="section-heading text-4xl lg:text-5xl xl:text-6xl text-white mb-5">
            How We
            <span className="gradient-text"> Engineer</span>
            <br />
            Your Success
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            A proven, structured engineering process that delivers consistent quality and on-time delivery — every project, every time.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Center line — desktop */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-primary-500/0 via-primary-500/30 to-primary-500/0 -translate-x-1/2" />

          <div className="space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0
              return (
                <ScrollReveal key={step.n} delay={i * 80} direction={isLeft ? 'left' : 'right'}>
                  <div className={`relative lg:flex items-center gap-8 mb-6 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Card */}
                    <div className="lg:w-5/12">
                      <div className="glass rounded-2xl p-6 border border-white/5 hover:border-primary-500/20 transition-all duration-400 group card-hover">
                        <div className="flex items-start gap-4">
                          <div className="text-2xl flex-shrink-0">{step.icon}</div>
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-[10px] font-bold text-primary-400 tracking-widest">{step.n}</span>
                              <div className="flex-1 h-px bg-primary-500/20" />
                            </div>
                            <h3 className="font-display font-bold text-white text-base mb-2">{step.title}</h3>
                            <p className="text-white/45 text-sm leading-relaxed">{step.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center node */}
                    <div className="hidden lg:flex w-2/12 justify-center">
                      <div className="w-10 h-10 rounded-full bg-primary-500 border-4 border-navy-500 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-primary-500/30 z-10">
                        {i + 1}
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden lg:block lg:w-5/12" />
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
