import { Check, Zap, Star } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'

const plans = [
  {
    name: 'Basic',
    tagline: 'Perfect for startups & small projects',
    price: '₹5,000',
    unit: 'starting from · per project',
    badge: null,
    features: [
      'CAD Drafting (2D & 3D)',
      'Basic 3D Solid Models',
      'Standard Drawings',
      'Up to 3 Revision Rounds',
      'DXF / STEP / IGES Export',
      'Standard Support (48hr)',
      '1 Engineer Assigned',
    ],
    cta: 'Get Started',
    color: 'from-white/3 to-white/1',
    border: 'border-white/8',
    featured: false,
  },
  {
    name: 'Professional',
    tagline: 'Most popular for growing companies',
    price: '₹15,000',
    unit: 'starting from · per project',
    badge: 'Most Popular',
    features: [
      'Everything in Basic',
      'Complex Assembly Design',
      'Tolerance Stack-Up Analysis',
      'GD&T Annotation',
      'BOM Preparation',
      'Priority Support (24hr)',
      'Faster Delivery Timeline',
      '5 Revision Rounds',
      'Motion Study',
      'Dedicated Project Manager',
    ],
    cta: 'Start Project',
    color: 'from-primary-500/15 to-primary-600/5',
    border: 'border-primary-500/40',
    featured: true,
  },
  {
    name: 'Enterprise',
    tagline: 'For complex, large-scale engineering',
    price: '₹35,000',
    unit: 'starting from · per engagement',
    badge: null,
    features: [
      'Everything in Professional',
      'Advanced FEA / CFD Analysis',
      'Dedicated Senior Engineer',
      'Unlimited Revision Rounds',
      'Weekly Progress Meetings',
      'Technical Consulting',
      'NDA Agreement Included',
      'Post-Delivery Support',
      'Manufacturing Liaison',
      'IP Transfer Documents',
    ],
    cta: 'Contact Sales',
    color: 'from-white/3 to-white/1',
    border: 'border-white/8',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-primary-500/20">
            <span className="text-xs font-medium text-primary-300 tracking-wider uppercase">Pricing</span>
          </div>
          <h2 className="section-heading text-4xl lg:text-5xl xl:text-6xl text-white mb-5">
            Transparent Pricing,
            <br />
            <span className="gradient-text">Exceptional Value</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Every project is unique. All plans are quoted based on your specific scope — reach out for a free estimate.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 80}>
              <div
                className={`relative glass rounded-2xl border ${plan.border} p-8 h-full flex flex-col ${
                  plan.featured ? 'shadow-2xl shadow-primary-500/20' : ''
                }`}
                style={{
                  background: plan.featured
                    ? 'linear-gradient(135deg, rgba(0,86,214,0.12) 0%, rgba(0,71,179,0.06) 100%)'
                    : undefined,
                  transform: plan.featured ? 'scale(1.03)' : undefined,
                }}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1.5 bg-primary-500 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg shadow-primary-500/40">
                      <Star className="w-3 h-3 fill-white" />
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="font-display font-bold text-2xl text-white mb-1">{plan.name}</h3>
                  <p className="text-white/40 text-sm">{plan.tagline}</p>
                  <div className="mt-6 flex items-end gap-2">
                    <span className="font-display font-bold text-4xl text-white">{plan.price}</span>
                    <span className="text-white/40 text-sm mb-1">{plan.unit}</span>
                  </div>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.featured ? 'bg-primary-500/20' : 'bg-white/5'}`}>
                        <Check className={`w-3 h-3 ${plan.featured ? 'text-primary-400' : 'text-white/40'}`} />
                      </div>
                      <span className="text-white/60">{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`w-full text-center py-3.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                    plan.featured
                      ? 'btn-primary justify-center'
                      : 'btn-secondary justify-center'
                  }`}
                >
                  {plan.featured && <Zap className="w-4 h-4" />}
                  {plan.cta}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-12">
          <p className="text-white/35 text-sm">
            Final pricing depends on project complexity. All projects include NDA agreement, revision rounds, and multi-format deliverables.
            <a href="#contact" className="text-primary-400 hover:text-primary-300 ml-1 transition-colors">Contact Sanjeevi for a customised quotation →</a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
