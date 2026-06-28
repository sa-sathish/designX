import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'

const faqs = [
  { q: 'How long does a typical CAD design project take?', a: 'Project timelines depend on complexity. Simple part designs take 2–5 business days, while complex assemblies or FEA projects may take 2–4 weeks. We always provide a detailed timeline estimate after the initial scope review.' },
  { q: 'Which CAD software does DesignX use?', a: 'We work with all major CAD platforms: SolidWorks, CATIA V5/V6, Siemens NX, PTC Creo, Autodesk Inventor, and AutoCAD. We can deliver files in your preferred format including STEP, IGES, DXF, DWG, and native formats.' },
  { q: 'Do you sign NDAs to protect our design IP?', a: 'Absolutely. We sign a comprehensive NDA before any project information is shared. Your intellectual property, design files, and project details are treated with strict confidentiality throughout and after the engagement.' },
  { q: 'What file formats do you deliver?', a: 'We deliver all standard engineering formats: STEP, IGES, STL, DXF, DWG, PDF, and native CAD files. We also provide documentation in Word, Excel, and PDF formats for BOMs, reports, and specifications.' },
  { q: 'How many revision rounds are included?', a: 'Basic plans include 3 revision rounds, Professional includes 5, and Enterprise includes unlimited revisions. We define clear revision criteria upfront to ensure efficient collaboration and project progress.' },
  { q: 'What is your payment process?', a: 'We work with a milestone-based payment model. Typically 50% upfront and 50% on delivery for standard projects. Enterprise projects may use customized payment schedules. We accept bank transfer, PayPal, and major card payments.' },
  { q: 'Can you work with clients outside India?', a: 'Yes — we serve clients worldwide including USA, UK, Germany, Australia, UAE, and Singapore. We operate across time zones and use tools like Microsoft Teams, Zoom, and cloud sharing for seamless remote collaboration.' },
  { q: 'Do you provide manufacturing support after design?', a: 'Yes. Our Enterprise plan includes manufacturing liaison services. We can coordinate with your manufacturing partners, review DFM feedback, and provide engineering change orders to ensure smooth production transitions.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-28 relative">
      <div className="relative max-w-4xl mx-auto px-6">
        <ScrollReveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-primary-500/20">
            <span className="text-xs font-medium text-primary-300 tracking-wider uppercase">FAQ</span>
          </div>
          <h2 className="section-heading text-4xl lg:text-5xl text-white mb-4">
            Common Questions
            <br />
            <span className="gradient-text">Answered</span>
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            Everything you need to know about working with DesignX Engineering Services.
          </p>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 40}>
              <div
                className={`glass rounded-xl border transition-all duration-300 overflow-hidden ${
                  open === i ? 'border-primary-500/30 bg-primary-500/5' : 'border-white/5 hover:border-white/10'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-semibold text-white text-sm leading-snug pr-4">{faq.q}</span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${open === i ? 'bg-primary-500' : 'bg-white/5'}`}>
                    {open === i ? <Minus className="w-3 h-3 text-white" /> : <Plus className="w-3 h-3 text-white/60" />}
                  </div>
                </button>

                {open === i && (
                  <div className="px-6 pb-6">
                    <p className="text-white/55 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-10">
          <p className="text-white/35 text-sm mb-4">Still have questions?</p>
          <a href="#contact" className="btn-primary">
            Ask Us Directly
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
