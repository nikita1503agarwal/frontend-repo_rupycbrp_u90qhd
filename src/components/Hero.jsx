import { useState } from 'react'

function GradientBadge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide bg-gradient-to-r from-sky-300/20 via-orange-300/20 to-amber-300/20 text-sky-200 ring-1 ring-white/10">
      {children}
    </span>
  )
}

export default function Hero({ onExplore }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-20 pb-8 sm:pt-28">
        <div className="flex flex-col items-center text-center">
          <GradientBadge>No hidden fees • Clear pricing • Tailored bookings</GradientBadge>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-sky-50">
            Sail with clarity. Book with confidence.
          </h1>

          <p className="mt-5 max-w-2xl text-base sm:text-lg text-sky-100/80">
            A modern boat renting experience designed for transparency. See every cost upfront, customize your trip, and set sail — minus the surprises.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button onClick={onExplore} className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-slate-900 bg-gradient-to-r from-sky-300 via-amber-200 to-orange-200 hover:from-sky-200 hover:to-orange-100 transition shadow-lg shadow-sky-900/20 ring-1 ring-white/10">
              Explore boats
            </button>
            <a href="#how-it-works" className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-sky-100 bg-slate-800/60 hover:bg-slate-800/80 transition ring-1 ring-white/10">
              How it works
            </a>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-3 gap-3 sm:gap-4 rounded-2xl overflow-hidden ring-1 ring-white/10">
          <img className="col-span-2 h-44 sm:h-56 w-full object-cover" src="https://images.unsplash.com/photo-1622082671151-2cbd184f9e60?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxzcGVlZGJvYXR8ZW58MHwwfHx8MTc2MzQ5NjQzOHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="speedboat" />
          <img className="h-44 sm:h-56 w-full object-cover" src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop" alt="yacht" />
          <img className="h-44 sm:h-56 w-full object-cover" src="https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=1600&auto=format&fit=crop" alt="sailboat" />
          <img className="col-span-2 h-44 sm:h-56 w-full object-cover" src="https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1600&auto=format&fit=crop" alt="coast" />
        </div>
      </div>
    </section>
  )
}
