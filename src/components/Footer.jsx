export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200/60 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600 dark:text-slate-300">
        <p className="font-medium text-slate-800 dark:text-white">© {new Date().getFullYear()} NovaSoft</p>
        <p className="text-sm">We craft modern, minimalist, and secure digital products.</p>
      </div>
    </footer>
  )
}
