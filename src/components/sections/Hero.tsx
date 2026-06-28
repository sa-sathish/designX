import { useEffect, useRef } from 'react'
import { ArrowRight, Play, CheckCircle } from 'lucide-react'
import AnimatedCounter from '../ui/AnimatedCounter'

const trustBadges = [
  { value: 8, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 15, suffix: '+', label: 'Industries Served' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
]

const floatingIcons = [
  { symbol: '⚙', size: 'text-3xl', top: '18%', left: '8%', delay: '0s' },
  { symbol: '🔩', size: 'text-2xl', top: '60%', left: '5%', delay: '1.5s' },
  { symbol: '📐', size: 'text-2xl', top: '25%', right: '6%', delay: '0.8s' },
  { symbol: '🔧', size: 'text-xl', top: '70%', right: '8%', delay: '2s' },
  { symbol: '⚡', size: 'text-lg', top: '45%', left: '3%', delay: '1.2s' },
]

function scrollToContact() {
  const el = document.getElementById('contact')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 163, 255, ${p.opacity})`
        ctx.fill()
      })
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((q) => {
          const dist = Math.hypot(p.x - q.x, p.y - q.y)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(0, 86, 214, ${0.15 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden blueprint-grid">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />

      {/* Floating icons */}
      {floatingIcons.map((icon, i) => (
        <div
          key={i}
          className="absolute hidden lg:block select-none pointer-events-none"
          style={{ top: icon.top, left: icon.left, right: icon.right, animation: `float 7s ease-in-out infinite ${icon.delay}`, opacity: 0.15 }}
        >
          <span className={icon.size}>{icon.symbol}</span>
        </div>
      ))}

      {/* Blueprint circles */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] opacity-5 pointer-events-none">
        {[1, 2, 3, 4].map((n) => (
          <div
            key={n}
            className="absolute border border-primary-400 rounded-full"
            style={{ top: '50%', right: 0, width: `${n * 150}px`, height: `${n * 150}px`, transform: 'translate(50%, -50%)' }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 border border-primary-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
            <span className="text-xs font-medium text-primary-300 tracking-wider uppercase">
              Chennai's Premier Mechanical Design Engineer
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-[82px] leading-[1.05] tracking-tight mb-8">
            <span className="text-white">Engineering</span>{' '}
            <span className="gradient-text">Precision.</span>
            <br />
            <span className="text-white">Innovative</span>{' '}
            <span className="blue-gradient-text">Solutions.</span>
            <br />
            <span className="text-white/80 text-4xl sm:text-5xl lg:text-6xl">Exceptional Results.</span>
          </h1>

          <p className="text-lg text-white/55 leading-relaxed mb-3 max-w-2xl font-body">
            Delivering world-class CAD design, product development, simulation, and engineering consulting
            services that transform concepts into manufacturable, market-ready products.
          </p>
          <p className="text-sm text-white/35 mb-10 max-w-xl">
            Led by <span className="text-primary-300 font-medium">Sanjeevi</span> — 8+ years of professional
            mechanical engineering experience.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-14">
            <button onClick={scrollToContact} className="btn-primary text-base px-8 py-4 group">
              Request Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#portfolio" className="btn-secondary text-base px-8 py-4 group">
              <Play className="w-4 h-4 fill-white/70" />
              Explore Our Work
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-2 mb-16 text-xs text-white/40">
            {['ISO-Aligned Processes', 'NDA Protected', 'Direct with Sanjeevi', 'Global Standards'].map((badge) => (
              <span key={badge} className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-primary-400" />
                {badge}
                <span className="mx-2 opacity-30">·</span>
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {trustBadges.map((stat) => (
              <div key={stat.label} className="bg-navy-500/80 backdrop-blur-sm px-6 py-5 text-center">
                <div className="font-display font-extrabold text-3xl md:text-4xl text-white mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/40 text-xs tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-500 to-transparent pointer-events-none" />
    </section>
  )
}
