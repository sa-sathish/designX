const WA_NUMBER = '919843427966'
const WA_MESSAGE = encodeURIComponent(
  "Hello Sanjeevi, I'm interested in your engineering services and would like to discuss my project."
)
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`

export default function WhatsAppButton() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sanjeevi on WhatsApp"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2.5 group"
    >
      <div className="relative">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <div className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl shadow-[#25D366]/30 group-hover:scale-110 transition-transform duration-300">
          {/* WhatsApp SVG icon */}
          <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.65 4.824 1.787 6.848L2 30l7.363-1.768A13.933 13.933 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.832-1.594l-.418-.248-4.369 1.05 1.073-4.255-.273-.437A11.468 11.468 0 0 1 4.5 16C4.5 9.649 9.649 4.5 16 4.5S27.5 9.649 27.5 16 22.351 27.5 16 27.5zm6.29-8.618c-.344-.172-2.037-1.004-2.352-1.119-.316-.115-.546-.172-.776.172-.23.344-.888 1.119-1.089 1.35-.2.23-.4.258-.744.086-.344-.172-1.452-.535-2.766-1.707-1.022-.912-1.712-2.037-1.913-2.381-.2-.344-.021-.53.15-.701.155-.154.344-.402.516-.603.172-.2.229-.344.344-.574.115-.23.057-.43-.029-.603-.086-.172-.776-1.87-1.063-2.562-.28-.673-.564-.581-.776-.592l-.661-.011c-.23 0-.603.086-.919.43-.316.344-1.206 1.178-1.206 2.873s1.235 3.332 1.407 3.562c.172.23 2.43 3.71 5.888 5.203.823.355 1.465.567 1.966.726.826.263 1.578.226 2.172.137.663-.099 2.037-.832 2.323-1.636.287-.804.287-1.492.2-1.636-.085-.143-.315-.229-.659-.401z"/>
          </svg>
        </div>
      </div>
      {/* Tooltip label */}
      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none">
        <div className="glass-strong rounded-xl px-3.5 py-2 border border-white/10 shadow-xl whitespace-nowrap">
          <div className="text-white text-xs font-semibold">Chat on WhatsApp</div>
          <div className="text-white/40 text-[10px]">Usually replies in minutes</div>
        </div>
      </div>
    </a>
  )
}
