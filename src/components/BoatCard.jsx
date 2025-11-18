export default function BoatCard({ boat, onSelect }) {
  const price = boat.base_price_per_day?.toFixed(0)
  return (
    <div className="group bg-slate-900/40 ring-1 ring-white/10 rounded-2xl overflow-hidden hover:ring-sky-400/40 transition">
      <div className="relative">
        <img src={boat.images?.[0]} alt={boat.name} className="h-48 w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent" />
        <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-slate-950/50 px-3 py-1 text-xs text-sky-100 ring-1 ring-white/10">
          <span className="inline-block h-2 w-2 rounded-full bg-sky-300" /> {boat.type}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-sky-50 font-semibold">{boat.name}</h3>
            <p className="text-sky-100/70 text-sm">{boat.location} • up to {boat.capacity} guests</p>
          </div>
          <div className="text-right">
            <div className="text-sky-50 font-semibold">${price}<span className="text-xs text-sky-100/70">/day</span></div>
            <div className="text-[11px] text-amber-200/80">No hidden fees</div>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {boat.features?.slice(0,3).map((f,i)=> (
            <span key={i} className="text-xs text-sky-100/80 bg-slate-800/60 rounded-full px-2 py-1 ring-1 ring-white/10">{f}</span>
          ))}
        </div>
        <button onClick={()=>onSelect?.(boat)} className="mt-4 w-full rounded-xl bg-gradient-to-r from-sky-300 via-amber-200 to-orange-200 text-slate-900 font-semibold py-2 hover:from-sky-200 hover:to-orange-100 transition ring-1 ring-white/10">
          View pricing
        </button>
      </div>
    </div>
  )
}
