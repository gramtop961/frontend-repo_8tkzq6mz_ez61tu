import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: null, error: null })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: null, error: null })
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || !data.success) throw new Error(data.detail || 'Submission failed')
      setStatus({ loading: false, success: 'Thanks! We will get back to you shortly.', error: null })
      setForm({ name: '', email: '', company: '', message: '' })
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message })
    }
  }

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.18),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Tell us about your project</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Share a few details and we’ll reach out to plan the next steps.</p>

          <div className="mt-8 space-y-4 text-slate-700 dark:text-slate-200">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <p>Average response time: under 24 hours</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <p>Located globally • Available for remote work</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/70 dark:bg-white/5 backdrop-blur rounded-2xl p-6 border border-slate-200/60 dark:border-white/10 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Name</label>
              <input required name="name" value={form.name} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-300/60 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
              <input required type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-300/60 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Company (optional)</label>
              <input name="company" value={form.company} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-300/60 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Message</label>
              <textarea required rows="5" name="message" value={form.message} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-300/60 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <button disabled={status.loading} className="mt-6 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-500/30 disabled:opacity-60">
            {status.loading ? 'Sending…' : 'Send message'}
          </button>

          {status.success && <p className="mt-4 text-emerald-600 text-sm">{status.success}</p>}
          {status.error && <p className="mt-4 text-red-600 text-sm">{status.error}</p>}
        </form>
      </div>
    </section>
  )
}
