export default function HowItWorks(){
  const steps = [
    {
      title: 'Browse curated boats',
      text: 'Hand-picked selection with honest specs and clear daily rates.',
    },
    {
      title: 'Tailor your trip',
      text: 'Pick dates, guests and extras. See the full price before you book.',
    },
    {
      title: 'Request and relax',
      text: 'We confirm availability and finalize details — no surprises later.',
    }
  ]

  return (
    <section id="how-it-works" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-sky-50 tracking-tight">How it works</h2>
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {steps.map((s,i)=> (
            <div key={i} className="rounded-2xl bg-slate-900/40 ring-1 ring-white/10 p-6">
              <div className="text-amber-200 font-semibold">0{i+1}</div>
              <h3 className="mt-2 text-sky-50 font-semibold">{s.title}</h3>
              <p className="mt-1 text-sky-100/80 text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
