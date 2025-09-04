import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-blue-50 to-emerald-50 text-gray-800 overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Hobbies />
      <Contact />
      
      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-12 bg-gradient-to-r from-teal-50 to-emerald-50 border-t border-teal-200"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600 text-lg">
            © 2024 Amina Boudjemaa. Créé avec ✨ et beaucoup de créativité.
          </p>
        </div>
      </motion.footer>
    </div>
  )
}

export default App
