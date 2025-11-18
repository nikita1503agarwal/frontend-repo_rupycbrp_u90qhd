export default function HowItWorks(){
  const steps = [
    {
      title: 'Browse brokered fleet',
      text: 'Curated inventory with verified specs and clear daily rates.',
    },
    {
      title: 'Tailor your charter',
      text: 'Choose dates, guests and extras. See a full, itemized preview.',
    },
    {
      title: 'Request & confirm',
      text: 'We coordinate availability and finalize details — no surprises.',
    }
  ]

  return (
    <section id="how-it-works" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">How it works</h2>
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {steps.map((s,i)=> (
            <div key={i} className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 shadow-sm">
              <div className="text-amber-600 font-semibold">0{i+1}</div>
              <h3 className="mt-2 text-slate-900 font-semibold">{s.title}</h3>
              <p className="mt-1 text-slate-600 text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
