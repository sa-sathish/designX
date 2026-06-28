import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Check, Star, Zap, ArrowRight, Phone, Mail } from 'lucide-react'
import ScrollReveal from '../components/ui/ScrollReveal'

const plans = [
  {
    name: 'Basic',
    tagline: 'Ideal for startups and single-component projects',
    price: '₹5,000',
    unit: 'starting from · per project',
    badge: null,
    features: [
      '2D CAD Drafting',
      'Basic 3D Solid Modeling',
      'Standard Production Drawings',
      'Up to 3 Revision Rounds',
      'DXF / STEP / IGES Export',
      'Standard Support (48hr response)',
      '1 Engineer Assigned',
      'PDF Drawing Delivery',
    ],
    notIncluded: ['Assembly Design', 'GD&T Annotation', 'FEA Analysis', 'Tolerance Analysis'],
    cta: 'Get Started',
    featured: false,
    color: 'border-white/8',
    priceColor: 'text-white',
  },
  {
    name: 'Professional',
    tagline: 'Most popular — for growing companies with multi-part projects',
    price: '₹15,000',
    unit: 'starting from · per project',
    badge: 'Most Popular',
    features: [
      'Everything in Basic',
      'Complex Assembly Design',
      'GD&T Annotation (ASME Y14.5)',
      'Tolerance Stack-Up Analysis',
      'BOM Preparation',
      'Priority Support (24hr response)',
      'Faster Delivery Timeline',
      '5 Revision Rounds',
      'Dedicated Project Manager',
      'Motion Study (if applicable)',
    ],
    notIncluded: ['Advanced FEA / CFD', 'Unlimited Revisions'],
    cta: 'Start Project',
    featured: true,
    color: 'border-primary-500/40',
    priceColor: 'text-primary-300',
  },
  {
    name: 'Enterprise',
    tagline: 'For complex multi-phase engineering programs',
    price: '₹35,000',
    unit: 'starting from · per engagement',
    badge: null,
    features: [
      'Everything in Professional',
      'Advanced FEA / CFD Simulation',
      'Dedicated Senior Engineer',
      'Unlimited Revision Rounds',
      'Weekly Progress Meetings',
      'Technical Consulting',
      'NDA Agreement Included',
      'Post-Delivery Support (30 days)',
      'Manufacturing Liaison',
      'Design History Documentation',
    ],
    notIncluded: [],
    cta: 'Contact Sanjeevi',
    featured: false,
    color: 'border-white/8',
    priceColor: 'text-white',
  },
]

const comparisonFeatures = [
  { feature: 'CAD Drafting (2D & 3D)', basic: true, pro: true, enterprise: true },
  { feature: 'Standard Production Drawings', basic: true, pro: true, enterprise: true },
  { feature: 'File Formats (STEP, IGES, DXF, PDF)', basic: true, pro: true, enterprise: true },
  { feature: 'Assembly Design', basic: false, pro: true, enterprise: true },
  { feature: 'GD&T Annotation', basic: false, pro: true, enterprise: true },
  { feature: 'Tolerance Stack-Up Analysis', basic: false, pro: true, enterprise: true },
  { feature: 'BOM Preparation', basic: false, pro: true, enterprise: true },
  { feature: 'Priority Support', basic: false, pro: true, enterprise: true },
  { feature: 'Advanced FEA / CFD Analysis', basic: false, pro: false, enterprise: true },
  { feature: 'Unlimited Revisions', basic: false, pro: false, enterprise: true },
  { feature: 'Weekly Meetings', basic: false, pro: false, enterprise: true },
  { feature: 'Manufacturing Liaison', basic: false, pro: false, enterprise: true },
  { feature: 'NDA Agreement', basic: false, pro: false, enterprise: true },
  { feature: 'Post-Delivery Support', basic: false, pro: false, enterprise: true },
]

export default function PricingPage() {
  useEffect(() => {
    document.title = 'Pricing | DesignX Engineering Services'
  }, [])

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden blueprint-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-primary-500/20">
            <span className="text-xs font-medium text-primary-300 tracking-wider uppercase">Transparent Pricing</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl lg:text-6xl text-white mb-5">
            Engineering Pricing
            <br /><span className="gradient-text">in Indian Rupees</span>
          </h1>
          <p className="text-white/55 text-xl max-w-2xl mx-auto">
            Clear starting prices with no hidden costs. Every project is scoped individually — contact Sanjeevi for a precise quotation.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 80}>
                <div
                  className={`relative glass rounded-2xl border ${plan.color} p-8 h-full flex flex-col ${plan.featured ? 'shadow-2xl shadow-primary-500/20' : ''}`}
                  style={{ transform: plan.featured ? 'scale(1.03)' : undefined, background: plan.featured ? 'linear-gradient(135deg, rgba(0,86,214,0.12) 0%, rgba(0,71,179,0.05) 100%)' : undefined }}
                >
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <div className="flex items-center gap-1.5 bg-primary-500 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg shadow-primary-500/40">
                        <Star className="w-3 h-3 fill-white" />{plan.badge}
                      </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <h2 className="font-display font-bold text-2xl text-white mb-1">{plan.name}</h2>
                    <p className="text-white/40 text-sm">{plan.tagline}</p>
                    <div className="mt-5 flex items-end gap-2">
                      <span className={`font-display font-extrabold text-4xl ${plan.priceColor}`}>{plan.price}</span>
                    </div>
                    <p className="text-white/30 text-xs mt-1">{plan.unit}</p>
                  </div>

                  <ul className="space-y-2.5 flex-1 mb-6">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-sm">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.featured ? 'bg-primary-500/20' : 'bg-white/5'}`}>
                          <Check className={`w-2.5 h-2.5 ${plan.featured ? 'text-primary-400' : 'text-white/40'}`} />
                        </div>
                        <span className="text-white/65">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/#contact"
                    className={`w-full text-center py-3.5 rounded-full font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}
                  >
                    {plan.featured && <Zap className="w-4 h-4" />}
                    {plan.cta}
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-10 text-center">
            <div className="glass rounded-2xl border border-amber-500/20 px-8 py-5 inline-block">
              <p className="text-amber-300 text-sm font-medium">
                💡 Final pricing depends on project complexity, scope, and timeline. Contact Sanjeevi for a customised quotation.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 relative">
        <div className="absolute inset-0 engineering-grid-bg opacity-15 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6">
          <ScrollReveal className="text-center mb-10">
            <h2 className="font-display font-bold text-3xl text-white">Feature Comparison</h2>
          </ScrollReveal>
          <div className="glass rounded-2xl border border-white/8 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-4 bg-white/5 border-b border-white/8">
              <div className="p-4 text-white/40 text-xs font-semibold uppercase tracking-wide">Feature</div>
              {['Basic', 'Professional', 'Enterprise'].map((p) => (
                <div key={p} className={`p-4 text-center text-xs font-bold uppercase tracking-wide ${p === 'Professional' ? 'text-primary-400 bg-primary-500/5' : 'text-white/60'}`}>{p}</div>
              ))}
            </div>
            {comparisonFeatures.map((row, i) => (
              <div key={i} className={`grid grid-cols-4 border-b border-white/5 hover:bg-white/2 transition-colors ${i % 2 === 0 ? '' : 'bg-white/1'}`}>
                <div className="p-4 text-white/60 text-sm">{row.feature}</div>
                {[row.basic, row.pro, row.enterprise].map((has, j) => (
                  <div key={j} className={`p-4 flex items-center justify-center ${j === 1 ? 'bg-primary-500/3' : ''}`}>
                    {has
                      ? <Check className="w-4 h-4 text-emerald-400" />
                      : <span className="w-4 h-px bg-white/15 block" />
                    }
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal className="text-center mb-8">
            <h2 className="font-display font-bold text-2xl text-white">Pricing FAQs</h2>
          </ScrollReveal>
          <div className="space-y-3">
            {[
              { q: 'Are the prices fixed or estimates?', a: 'The prices shown are starting prices for typical projects in each tier. Complex projects, very large assemblies, or tight timelines may be priced higher. Sanjeevi provides a fixed project price after reviewing your specific requirements.' },
              { q: 'Is GST included in the pricing?', a: 'Prices shown are exclusive of GST. GST at the applicable rate (18%) is added to invoices for Indian clients. International clients are typically exempt from GST on service exports.' },
              { q: 'What payment methods are accepted?', a: 'Bank transfer (NEFT/RTGS/IMPS), UPI, and international wire transfer are accepted. A 50% advance is required before project commencement, with the balance on delivery.' },
              { q: 'Can I upgrade from Basic to Professional mid-project?', a: 'Yes. If your requirements expand during the project, we can upgrade the plan and adjust the price accordingly. This is discussed transparently before any additional work is performed.' },
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="glass rounded-xl border border-white/5 p-5">
                  <h3 className="font-semibold text-white text-sm mb-2">{faq.q}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
        <ScrollReveal className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-4">Get a Precise Quote</h2>
          <p className="text-white/50 text-lg mb-8">Share your project requirements and Sanjeevi will provide a detailed, fixed-price quotation within 24 hours.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/#contact" className="btn-primary"><Mail className="w-4 h-4" />Request a Quote <ArrowRight className="w-4 h-4" /></Link>
            <a href="tel:+919843427966" className="btn-secondary"><Phone className="w-4 h-4" />Call Sanjeevi</a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
