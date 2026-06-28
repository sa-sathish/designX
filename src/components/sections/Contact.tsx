import { useState, useRef } from 'react'
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, Linkedin, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import { useContactForm, FormData } from '../../hooks/useContactForm'

const SERVICES = [
  'CAD Design & Drafting',
  'Mechanical Product Design',
  'Assembly Design',
  'FEA / Simulation',
  'Reverse Engineering',
  'GD&T',
  'Tolerance Stack-Up Analysis',
  'Product Development',
  'Other / Not Sure',
]

const BUDGETS = ['Under $500', '$500 – $2,000', '$2,000 – $5,000', '$5,000 – $15,000', '$15,000+', 'Discuss on call']

const TIMELINES = ['ASAP (Rush)', '1 – 2 weeks', '2 – 4 weeks', '1 – 2 months', '2+ months', 'Flexible']

const WA_URL = `https://wa.me/919843427966?text=${encodeURIComponent(
  "Hello Sanjeevi, I'm interested in your engineering services and would like to discuss my project."
)}`

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sanjeevimech076@gmail.com',
    href: 'mailto:sanjeevimech076@gmail.com',
    color: 'text-primary-400',
    bgColor: 'bg-primary-500/10 border-primary-500/20',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98434 27966',
    href: 'tel:+919843427966',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 98434 27966',
    href: WA_URL,
    color: 'text-[#25D366]',
    bgColor: 'bg-[#25D366]/10 border-[#25D366]/20',
    external: true,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect with Sanjeevi',
    href: 'https://www.linkedin.com/in/sanjeevi-s-742a2a238/',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10 border-blue-500/20',
    external: true,
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon – Sat: 9 AM – 7 PM IST',
    href: null,
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10 border-amber-500/20',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Chennai, Tamil Nadu, India',
    href: null,
    color: 'text-rose-400',
    bgColor: 'bg-rose-500/10 border-rose-500/20',
  },
]

function SuccessMessage({ onReset }: { onReset: () => void }) {
  return (
    <div className="glass-strong rounded-2xl border border-emerald-500/30 p-10 text-center">
      <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-5">
        <CheckCircle className="w-8 h-8 text-emerald-400" />
      </div>
      <h3 className="font-display font-bold text-xl text-white mb-3">Enquiry Received!</h3>
      <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
        Thank you for contacting DesignX Engineering Services. We've received your enquiry and Sanjeevi
        will get back to you within 24 hours.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm py-2.5 px-5">
          <MessageCircle className="w-4 h-4 text-[#25D366]" />
          WhatsApp for Faster Response
        </a>
        <button onClick={onReset} className="btn-primary text-sm py-2.5 px-5">
          Submit Another Enquiry
        </button>
      </div>
    </div>
  )
}

export default function Contact() {
  const { status, errorMessage, submit, reset } = useContactForm()

  const [form, setForm] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    service: '',
    budget: '',
    timeline: '',
    description: '',
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const formRef = useRef<HTMLFormElement>(null)

  const validate = (): boolean => {
    const e: Partial<FormData> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) {
      e.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Enter a valid email address'
    }
    if (!form.service) e.service = 'Please select a service'
    if (!form.description.trim()) e.description = 'Please describe your project'
    else if (form.description.trim().length < 20) e.description = 'Please provide at least 20 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((f) => ({ ...f, [field]: value }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    await submit(form)
  }

  const inputClass = (field: keyof FormData) =>
    `w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 border transition-all duration-200 focus:outline-none focus:bg-white/5 ${
      errors[field]
        ? 'border-rose-500/60 focus:border-rose-500'
        : 'border-white/8 focus:border-primary-500/50'
    }`

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-primary-500/20">
            <span className="text-xs font-medium text-primary-300 tracking-wider uppercase">Get In Touch</span>
          </div>
          <h2 className="section-heading text-4xl lg:text-5xl xl:text-6xl text-white mb-5">
            Start Your Engineering
            <br />
            <span className="gradient-text">Project Today</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Reach out directly to Sanjeevi. Free consultation and project estimate within 24 hours — every enquiry is personally responded to.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Contact Info */}
          <ScrollReveal className="lg:col-span-2" direction="left">
            <div className="space-y-3">
              {contactItems.map(({ icon: Icon, label, value, href, color, bgColor, external }) => (
                <div
                  key={label}
                  className="glass rounded-xl p-4 border border-white/5 hover:border-primary-500/15 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0 transition-colors ${bgColor}`}>
                      <Icon className={`w-4.5 h-4.5 ${color}`} size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] text-white/30 uppercase tracking-widest font-medium mb-0.5">{label}</div>
                      {href ? (
                        <a
                          href={href}
                          target={external ? '_blank' : undefined}
                          rel={external ? 'noopener noreferrer' : undefined}
                          className="text-white/70 text-sm hover:text-white transition-colors font-medium truncate block"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="text-white/70 text-sm font-medium">{value}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Live status indicator */}
              <div className="glass-strong rounded-xl p-4 border border-emerald-500/20 mt-1">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold text-sm">Typical Response: &lt; 2 Hours</div>
                    <div className="text-white/40 text-xs mt-0.5">Sanjeevi personally responds to every enquiry</div>
                  </div>
                </div>
              </div>

              {/* Quick action buttons */}
              <div className="grid grid-cols-2 gap-3 mt-2">
                <a href="mailto:sanjeevimech076@gmail.com" className="btn-primary py-3 justify-center text-xs">
                  <Mail className="w-3.5 h-3.5" />
                  Email Now
                </a>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-semibold text-white border border-[#25D366]/30 hover:bg-[#25D366]/10 transition-all duration-300">
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Google Maps placeholder */}
            <div className="mt-5 glass rounded-2xl border border-white/5 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-navy-700/60 to-navy-900/80 flex flex-col items-center justify-center gap-3 relative">
                <div className="absolute inset-0 engineering-grid-bg opacity-30" />
                <MapPin className="w-8 h-8 text-primary-400 relative z-10" />
                <div className="text-center relative z-10">
                  <div className="text-white font-semibold text-sm">Chennai, Tamil Nadu</div>
                  <div className="text-white/40 text-xs mt-1">India — Serving Clients Worldwide</div>
                </div>
                <a
                  href="https://maps.google.com/?q=Chennai,Tamil+Nadu,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 text-xs text-primary-400 hover:text-primary-300 transition-colors underline underline-offset-2"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal className="lg:col-span-3" direction="right">
            {status === 'success' ? (
              <SuccessMessage onReset={() => { reset(); setForm({ name: '', company: '', email: '', phone: '', country: '', service: '', budget: '', timeline: '', description: '' }) }} />
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                className="glass-strong rounded-2xl border border-white/10 p-8 space-y-5"
              >
                <div className="mb-2">
                  <h3 className="font-display font-bold text-xl text-white">Request Free Consultation</h3>
                  <p className="text-white/35 text-xs mt-1">All fields marked * are required. Your information is kept confidential.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-wide font-medium block mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={inputClass('name')}
                    />
                    {errors.name && <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-wide font-medium block mb-1.5">Company</label>
                    <input
                      type="text"
                      placeholder="Your Company"
                      value={form.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      className={inputClass('company')}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-wide font-medium block mb-1.5">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={inputClass('email')}
                    />
                    {errors.email && <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
                  </div>
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-wide font-medium block mb-1.5">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="+1 555 000 0000"
                      value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className={inputClass('phone')}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-wide font-medium block mb-1.5">Country</label>
                    <input
                      type="text"
                      placeholder="United States"
                      value={form.country}
                      onChange={(e) => handleChange('country', e.target.value)}
                      className={inputClass('country')}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-wide font-medium block mb-1.5">Service Required *</label>
                    <select
                      required
                      value={form.service}
                      onChange={(e) => handleChange('service', e.target.value)}
                      className={inputClass('service') + ' bg-transparent'}
                    >
                      <option value="" className="bg-[#0A1628]">Select service...</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s} className="bg-[#0A1628]">{s}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.service}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-wide font-medium block mb-1.5">Budget Range</label>
                    <select
                      value={form.budget}
                      onChange={(e) => handleChange('budget', e.target.value)}
                      className={inputClass('budget') + ' bg-transparent'}
                    >
                      <option value="" className="bg-[#0A1628]">Select budget...</option>
                      {BUDGETS.map((b) => (
                        <option key={b} value={b} className="bg-[#0A1628]">{b}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-wide font-medium block mb-1.5">Timeline</label>
                    <select
                      value={form.timeline}
                      onChange={(e) => handleChange('timeline', e.target.value)}
                      className={inputClass('timeline') + ' bg-transparent'}
                    >
                      <option value="" className="bg-[#0A1628]">Select timeline...</option>
                      {TIMELINES.map((t) => (
                        <option key={t} value={t} className="bg-[#0A1628]">{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-white/40 uppercase tracking-wide font-medium block mb-1.5">Project Description *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your project — what you need designed, material requirements, dimensions, software preferences, and any specific challenges or goals..."
                    value={form.description}
                    onChange={(e) => handleChange('description', e.target.value)}
                    className={inputClass('description') + ' resize-none'}
                  />
                  {errors.description && <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.description}</p>}
                </div>

                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-2">
                    <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      Form service unavailable — your email client has been opened
                    </div>
                    <p className="text-amber-200/60 text-xs leading-relaxed">
                      Your details were pre-filled into an email draft. Please send it from your mail app.
                      Or reach Sanjeevi directly via{' '}
                      <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-200">WhatsApp</a>
                      {' '}or{' '}
                      <a href="mailto:sanjeevimech076@gmail.com" className="underline hover:text-amber-200">email</a>.
                    </p>
                    {errorMessage && (
                      <a href={errorMessage} className="text-xs text-amber-400 underline hover:text-amber-300 block">
                        Click here if your email client didn't open →
                      </a>
                    )}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full justify-center py-4 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" />
                      Sending Enquiry...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Project Brief — It's Free
                    </>
                  )}
                </button>

                <p className="text-center text-white/25 text-xs">
                  Your enquiry is sent to{' '}
                  <span className="text-white/40">sanjeevimech076@gmail.com</span>
                  {' '}· Confidential · No spam
                </p>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
