function GradientBadge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide bg-gradient-to-r from-sky-200/70 via-amber-200/70 to-orange-200/70 text-slate-800 ring-1 ring-slate-200">
      {children}
    </span>
  )
}

export default function Hero({ onExplore }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-16 sm:pt-24 pb-8">
        <div className="flex flex-col items-center text-center">
          <GradientBadge>Brokered charters • Clear pricing • Tailored bookings</GradientBadge>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900">
            Charter with clarity. Book with confidence.
          </h1>

          <p className="mt-5 max-w-2xl text-base sm:text-lg text-slate-600">
            A brokerage experience built for transparency: explore curated boats, customize your charter, and review an upfront breakdown before you request.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button onClick={onExplore} className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white bg-sky-500 hover:bg-sky-400 transition shadow-sm ring-1 ring-sky-300">
              Explore fleet
            </button>
            <a href="#how-it-works" className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 transition ring-1 ring-slate-200">
              How it works
            </a>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-3 gap-3 sm:gap-4 rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-white">
          <img className="col-span-2 h-44 sm:h-56 w-full object-cover" src="https://images.unsplash.com/photo-1622082671151-2cbd184f9e60?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxzcGVlZGJvYXR8ZW58MHwwfHx8MTc2MzQ5NjQzOHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="speedboat" />
          <img className="h-44 sm:h-56 w-full object-cover" src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop" alt="yacht" />
          <img className="h-44 sm:h-56 w-full object-cover" src="https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=1600&auto=format&fit=crop" alt="sailboat" />
          <img className="col-span-2 h-44 sm:h-56 w-full object-cover" src="https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1600&auto=format&fit=crop" alt="coast" />
        </div>
      </div>
    </section>
  )
}
