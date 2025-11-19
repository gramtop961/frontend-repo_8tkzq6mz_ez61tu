import { Code2, Palette, ShieldCheck, Rocket, Smartphone, Server } from 'lucide-react'

const services = [
  {
    icon: <Rocket className="w-6 h-6" />, 
    title: 'Product Strategy',
    desc: 'Research-driven roadmaps, clear scopes, and measurable outcomes to de-risk your build.'
  },
  {
    icon: <Palette className="w-6 h-6" />, 
    title: 'Brand & UI/UX',
    desc: 'Modern, minimalist interfaces with glassmorphic touches that feel premium and intuitive.'
  },
  {
    icon: <Code2 className="w-6 h-6" />, 
    title: 'Web Applications',
    desc: 'High-performance React frontends with accessible, responsive design and animations.'
  },
  {
    icon: <Server className="w-6 h-6" />, 
    title: 'APIs & Platforms',
    desc: 'Robust FastAPI backends, real-time services, and reliable cloud infrastructure.'
  },
  {
    icon: <Smartphone className="w-6 h-6" />, 
    title: 'Mobile Experiences',
    desc: 'Consistent cross-platform experiences tailored to your audience and business goals.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />, 
    title: 'Security & QA',
    desc: 'Best-practice security, testing, and monitoring baked in from day one.'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Services</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Everything you need to design, build, and launch remarkable software — end to end.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div key={idx} className="group relative rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 transition shadow-sm hover:shadow-xl hover:-translate-y-0.5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30">
                {s.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
