export default function BoatCard({ boat, onSelect }) {
  const price = boat.base_price_per_day?.toFixed(0)
  return (
    <div className="group bg-white ring-1 ring-slate-200 rounded-2xl overflow-hidden hover:ring-sky-300 transition shadow-sm">
      <div className="relative">
        <img src={boat.images?.[0]} alt={boat.name} className="h-48 w-full object-cover" />
        <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs text-slate-800 ring-1 ring-slate-200">
          <span className="inline-block h-2 w-2 rounded-full bg-sky-400" /> {boat.type}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-slate-900 font-semibold">{boat.name}</h3>
            <p className="text-slate-600 text-sm">{boat.location} • up to {boat.capacity} guests</p>
          </div>
          <div className="text-right">
            <div className="text-slate-900 font-semibold">${price}<span className="text-xs text-slate-500">/day</span></div>
            <div className="text-[11px] text-amber-600">No hidden fees</div>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {boat.features?.slice(0,3).map((f,i)=> (
            <span key={i} className="text-xs text-slate-700 bg-slate-50 rounded-full px-2 py-1 ring-1 ring-slate-200">{f}</span>
          ))}
        </div>
        <button onClick={()=>onSelect?.(boat)} className="mt-4 w-full rounded-xl bg-sky-500 text-white font-semibold py-2 hover:bg-sky-400 transition ring-1 ring-sky-300">
          View pricing
        </button>
      </div>
    </div>
  )
}
