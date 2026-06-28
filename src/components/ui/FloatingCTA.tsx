import { useState, useEffect } from 'react'
import { MessageCircle, X, ArrowRight } from 'lucide-react'

const WA_URL = `https://wa.me/919843427966?text=${encodeURIComponent(
  "Hello Sanjeevi, I'm interested in your engineering services and would like to discuss my project."
)}`

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3500)
    return () => clearTimeout(timer)
  }, [])

  if (!visible || dismissed) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {expanded && (
        <div className="glass-strong rounded-2xl border border-white/10 p-5 w-72 shadow-2xl shadow-black/40 animate-in">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-white font-semibold text-sm">Talk to Sanjeevi</div>
              <div className="text-white/40 text-xs mt-0.5">Response within 2 hours · IST</div>
            </div>
            <button onClick={() => setExpanded(false)} className="text-white/30 hover:text-white/60 transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="#contact"
              className="btn-primary py-2.5 text-xs justify-center"
              onClick={() => setExpanded(false)}
            >
              Request Free Consultation
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs font-semibold text-white transition-all duration-300 border border-white/10 hover:border-[#25D366]/40 hover:bg-[#25D366]/10"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              WhatsApp Sanjeevi
            </a>
          </div>
          <div className="mt-3 flex items-center gap-2 pt-3 border-t border-white/5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/30 text-[10px]">sanjeevimech076@gmail.com</span>
          </div>
        </div>
      )}

      <div className="flex items-center gap-2">
        <button
          onClick={() => setDismissed(true)}
          className="w-8 h-8 glass rounded-full flex items-center justify-center text-white/30 hover:text-white/60 transition-colors border border-white/5"
          title="Dismiss"
        >
          <X className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2.5 btn-primary py-3 px-5 shadow-2xl shadow-primary-500/40 text-sm"
        >
          <MessageCircle className="w-4 h-4" />
          Get Free Quote
        </button>
      </div>
    </div>
  )
}
