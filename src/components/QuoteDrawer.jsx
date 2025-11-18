import { useEffect, useState } from 'react'

export default function QuoteDrawer({ boat, onClose }) {
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [guests, setGuests] = useState(2)
  const [extras, setExtras] = useState({ skipper: true, fuel: false, snorkel: false })
  const [quote, setQuote] = useState(null)
  const [loading, setLoading] = useState(false)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || ''

  function toggleExtra(key){
    setExtras(prev=> ({...prev, [key]: !prev[key]}))
  }

  async function fetchQuote(){
    if(!start || !end) return
    setLoading(true)
    try{
      const res = await fetch(`${baseUrl}/api/quote`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
          boat_id: boat.id,
          start_date: start,
          end_date: end,
          guests,
          extras
        })
      })
      const data = await res.json()
      setQuote(data)
    } finally{
      setLoading(false)
    }
  }

  async function createBooking(){
    if(!quote) return
    setLoading(true)
    try{
      const res = await fetch(`${baseUrl}/api/bookings`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
          boat_id: boat.id,
          start_date: start,
          end_date: end,
          guests,
          customer_name: 'Guest',
          customer_email: 'guest@example.com',
          extras
        })
      })
      const data = await res.json()
      alert(`Booking requested! Reference: ${data.id}`)
      onClose?.()
    } finally{
      setLoading(false)
    }
  }

  useEffect(()=>{ setQuote(null) }, [start, end, guests, extras])

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="flex-1" onClick={onClose} />
      <div className="w-full sm:w-[420px] h-full bg-white backdrop-blur-xl ring-1 ring-slate-200 p-6 overflow-y-auto shadow-2xl">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-slate-900 font-semibold">{boat.name}</h3>
            <p className="text-slate-600 text-sm">Transparent brokerage pricing</p>
          </div>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-700">Close</button>
        </div>

        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-slate-600">Start date</label>
              <input type="date" value={start} onChange={e=>setStart(e.target.value)} className="mt-1 w-full rounded-lg bg-white ring-1 ring-slate-200 px-3 py-2 text-slate-900" />
            </div>
            <div>
              <label className="text-xs text-slate-600">End date</label>
              <input type="date" value={end} onChange={e=>setEnd(e.target.value)} className="mt-1 w-full rounded-lg bg-white ring-1 ring-slate-200 px-3 py-2 text-slate-900" />
            </div>
          </div>

          <div>
            <label className="text-xs text-slate-600">Guests</label>
            <input type="number" min={1} max={boat.capacity} value={guests} onChange={e=>setGuests(parseInt(e.target.value||'1'))} className="mt-1 w-full rounded-lg bg-white ring-1 ring-slate-200 px-3 py-2 text-slate-900" />
          </div>

          <div>
            <div className="text-xs text-slate-600">Extras</div>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {[
                {key:'skipper', label:'Skipper'},
                {key:'fuel', label:'Fuel package'},
                {key:'snorkel', label:'Snorkel gear'},
              ].map(x=> (
                <label key={x.key} className="flex items-center gap-2 text-slate-800 bg-slate-50 ring-1 ring-slate-200 rounded-lg px-3 py-2">
                  <input type="checkbox" checked={!!extras[x.key]} onChange={()=>toggleExtra(x.key)} />
                  {x.label}
                </label>
              ))}
            </div>
          </div>

          <button onClick={fetchQuote} disabled={loading || !start || !end} className="w-full rounded-xl bg-sky-500 text-white font-semibold py-2 disabled:opacity-60 ring-1 ring-sky-300">
            {loading ? 'Calculating...' : 'Calculate price'}
          </button>

          {quote && (
            <div className="mt-4 bg-slate-50 ring-1 ring-slate-200 rounded-xl p-4">
              <h4 className="text-slate-900 font-semibold">Transparent breakdown</h4>
              <div className="mt-2 space-y-1 text-sm">
                <div className="flex justify-between text-slate-700"><span>Base ({quote.nights} nights)</span><span>${quote.base.toFixed(2)}</span></div>
                {Object.entries(quote.extras||{}).map(([k,v])=> (
                  <div key={k} className="flex justify-between text-slate-700"><span>{k}</span><span>${v.toFixed(2)}</span></div>
                ))}
                <div className="flex justify-between text-slate-700"><span>Cleaning</span><span>${quote.cleaning_fee.toFixed(2)}</span></div>
                <div className="flex justify-between text-slate-700"><span>Tax</span><span>${quote.tax.toFixed(2)}</span></div>
                <div className="h-px bg-slate-200 my-2" />
                <div className="flex justify-between text-slate-900 font-semibold text-base"><span>Total</span><span>${quote.total.toFixed(2)}</span></div>
                <div className="text-[11px] text-amber-700 mt-2">No hidden fees. Everything displayed upfront.</div>
              </div>
              <button onClick={createBooking} className="mt-4 w-full rounded-lg bg-amber-500 text-white font-semibold py-2 hover:bg-amber-400 transition">
                Request booking
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
