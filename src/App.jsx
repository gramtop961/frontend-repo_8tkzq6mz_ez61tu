import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <div className="absolute inset-0 -z-10 opacity-70 dark:opacity-100 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute top-40 -right-20 w-96 h-96 bg-indigo-500/20 blur-3xl rounded-full" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
