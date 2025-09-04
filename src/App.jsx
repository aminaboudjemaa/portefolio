import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import QRCode from './components/QRCode'
import WelcomeBalloon from './components/WelcomeBalloon'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-blue-50 to-emerald-50 text-gray-800 overflow-x-hidden">
      <WelcomeBalloon />
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
        className="py-12 bg-gradient-to-r from-amber-50 to-rose-50 border-t border-amber-200"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
            {/* Left side - Copyright and GitHub */}
            <div className="flex flex-col items-center lg:items-start space-y-4">
              <p className="text-gray-600 text-lg text-center lg:text-left">
                © 2024 Amina Boudjemaa. Créé avec ✨ et beaucoup de créativité.
              </p>
              <motion.a
                href="https://github.com/amina-boudjemaa"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="text-amber-600 hover:text-amber-700 font-medium transition-colors duration-300"
              >
                GitHub: amina-boudjemaa
              </motion.a>
            </div>
            
            {/* Right side - QR Code */}
            <div className="flex flex-col items-center">
              <QRCode 
                url={window.location.href}
                className="mb-4"
              />
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}

export default App
