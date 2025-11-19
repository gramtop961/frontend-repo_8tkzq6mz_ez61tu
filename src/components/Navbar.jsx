import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 dark:bg-slate-900/60 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30" />
            <span className="font-semibold text-slate-900 dark:text-white text-lg">NovaSoft</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-slate-700 dark:text-slate-200">
            <button onClick={() => scrollTo('home')} className="hover:text-blue-600">Home</button>
            <button onClick={() => scrollTo('services')} className="hover:text-blue-600">Services</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-blue-600">Contact</button>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-white/60 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-2 text-slate-800 dark:text-slate-100">
            <button onClick={() => scrollTo('home')} className="text-left px-2 py-2 rounded hover:bg-white/60 dark:hover:bg-white/10">Home</button>
            <button onClick={() => scrollTo('services')} className="text-left px-2 py-2 rounded hover:bg-white/60 dark:hover:bg-white/10">Services</button>
            <button onClick={() => scrollTo('contact')} className="text-left px-2 py-2 rounded hover:bg-white/60 dark:hover:bg-white/10">Contact</button>
          </div>
        )}
      </div>
    </header>
  )
}
