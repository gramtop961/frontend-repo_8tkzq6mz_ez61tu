import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-blue-500/10 via-transparent to-indigo-600/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10 py-8">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 bg-blue-50 dark:bg-blue-500/10 dark:text-blue-300 px-3 py-1 rounded-full ring-1 ring-blue-200/50">Modern • Minimal • Fintech</span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
            Software that elevates your brand
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            We design and build delightful digital products for ambitious companies. From landing pages to complex SaaS platforms, we bring ideas to life.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#services" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:opacity-90 transition">Explore Services</a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-slate-300/50 dark:border-white/20 text-slate-800 dark:text-white hover:bg-white/70 dark:hover:bg-white/10 transition">Get a Quote</a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-slate-600 dark:text-slate-300">
            <div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">50+ </p>
              <p className="text-sm">Projects Delivered</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">4.9/5</p>
              <p className="text-sm">Client Rating</p>
            </div>
          </div>
        </div>

        <div className="relative h-[60vh] lg:h-[75vh]">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}
