import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import BoatCard from './components/BoatCard'
import QuoteDrawer from './components/QuoteDrawer'
import HowItWorks from './components/HowItWorks'

function App() {
  const [boats, setBoats] = useState([])
  const [selected, setSelected] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || ''

  async function loadBoats(){
    try{
      const res = await fetch(`${baseUrl}/api/boats`)
      const data = await res.json()
      setBoats(data)
    }catch(e){
      console.error(e)
    }
  }

  useEffect(()=>{ loadBoats() }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-sky-100">
      <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(14,165,233,0.08),transparent),radial-gradient(60%_40%_at_100%_100%,rgba(253,186,116,0.06),transparent)]" />
      <div className="relative">
        <Hero onExplore={()=>{
          const el = document.getElementById('fleet')
          el?.scrollIntoView({behavior:'smooth'})
        }} />

        <section id="fleet" className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex items-end justify-between">
              <h2 className="text-2xl sm:text-3xl font-semibold text-sky-50 tracking-tight">Our fleet</h2>
              <div className="text-sm text-amber-200/80">Transparent prices • Taxes included • No hidden fees</div>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {boats.map(b => (
                <BoatCard key={b.id} boat={b} onSelect={setSelected} />
              ))}
            </div>
          </div>
        </section>

        <HowItWorks />

        <footer className="py-10 border-t border-white/10 text-center text-sm text-sky-100/70">
          Sail in sea-spray blues, sunset oranges and sand greys — designed for clarity and calm.
        </footer>
      </div>

      {selected && <QuoteDrawer boat={selected} onClose={()=>setSelected(null)} />}
    </div>
  )
}

export default App
