import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Expériences', href: '#experience' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg border-b border-teal-200 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ 
              scale: 1.05,
              rotate: [0, -2, 2, 0],
              transition: { duration: 0.3 }
            }}
            className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-emerald-600 bg-clip-text text-transparent"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Amina Boudjemaa
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ 
                  scale: 1.1,
                  y: -2,
                  color: "#0d9488"
                }}
                className="text-gray-600 hover:text-teal-600 transition-colors duration-300 font-medium relative group"
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-emerald-500 group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation

