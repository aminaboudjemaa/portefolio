import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const WelcomeBalloon = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [isExploding, setIsExploding] = useState(false)

  useEffect(() => {
    // Démarrer l'explosion après 4 secondes
    const explosionTimer = setTimeout(() => {
      setIsExploding(true)
    }, 4000)

    // Masquer le ballon après 5 secondes (plus de temps pour l'explosion)
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 5000)

    // Afficher le contenu après 1 seconde
    const contentTimer = setTimeout(() => {
      setShowContent(true)
    }, 1000)

    return () => {
      clearTimeout(timer)
      clearTimeout(contentTimer)
      clearTimeout(explosionTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background overlay */}
          <motion.div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />

          {/* Balloon */}
          <motion.div
            className="relative"
            initial={{ 
              y: -200, 
              scale: 0.5,
              rotate: -10
            }}
            animate={{ 
              y: [0, -30, 0, -25, 0, -20, 0, -15, 0, -10, 0],
              scale: [1, 1.1, 1, 1.08, 1, 1.05, 1, 1.03, 1, 1.01, 1],
              rotate: [0, 8, -8, 6, -6, 4, -4, 2, -2, 0]
            }}
            transition={{ 
              duration: 4,
              ease: "easeOut",
              times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
            }}
          >
            {/* Balloon body */}
            <motion.div
              className="w-80 h-96 bg-gradient-to-br from-amber-200 via-rose-200 to-amber-300 rounded-full relative shadow-2xl"
              animate={isExploding ? {
                scale: [1, 1.5, 2, 0],
                rotate: [0, 180, 360, 720],
                opacity: [1, 0.8, 0.4, 0]
              } : {
                scale: [1, 1.05, 1, 1.03, 1],
                rotate: [0, 3, -3, 2, -2, 0],
                x: [0, 5, -5, 3, -3, 0]
              }}
              transition={isExploding ? {
                duration: 1,
                ease: "easeOut"
              } : {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Balloon shine effect */}
              <div className="absolute top-8 left-8 w-16 h-20 bg-white/30 rounded-full blur-sm"></div>
              
              {/* Balloon string */}
              <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-amber-400 to-amber-600"
                animate={{
                  rotate: [0, 8, -8, 5, -5, 0],
                  x: [0, 3, -3, 2, -2, 0]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Welcome message */}
            <AnimatePresence>
              {showContent && (
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <motion.h2
                    className="text-4xl font-bold text-gray-800 mb-3 drop-shadow-lg"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                    animate={{
                      y: [0, -8, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Bonjour !
                  </motion.h2>
                  
                  <motion.p
                    className="text-xl text-gray-700 font-semibold drop-shadow-md"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                  >
                    Bienvenue sur mon portfolio
                  </motion.p>
                  
                  <motion.p
                    className="text-sm text-gray-600 mt-2 font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                  >
                    Découvrez mon univers créatif
                  </motion.p>
                  
                  <motion.div
                    className="mt-6 flex space-x-3"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.8, duration: 0.5 }}
                  >
                    <motion.div
                      className="w-3 h-3 bg-amber-500 rounded-full shadow-lg"
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.7, 1, 0.7],
                        y: [0, -5, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div
                      className="w-3 h-3 bg-rose-500 rounded-full shadow-lg"
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.7, 1, 0.7],
                        y: [0, -5, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.4
                      }}
                    />
                    <motion.div
                      className="w-3 h-3 bg-amber-500 rounded-full shadow-lg"
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.7, 1, 0.7],
                        y: [0, -5, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.8
                      }}
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Floating sparkles around balloon */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                animate={isExploding ? {
                  x: [(Math.random() - 0.5) * 400],
                  y: [(Math.random() - 0.5) * 400],
                  scale: [1, 0.5, 0],
                  opacity: [1, 0.5, 0]
                } : {
                  y: [-10, 10, -10],
                  x: [-5, 5, -5],
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={isExploding ? {
                  duration: 1,
                  ease: "easeOut"
                } : {
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2
                }}
              />
            ))}

            {/* Explosion particles */}
            {isExploding && [...Array(12)].map((_, i) => (
              <motion.div
                key={`explosion-${i}`}
                className="absolute w-2 h-2 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{
                  x: [(Math.random() - 0.5) * 300],
                  y: [(Math.random() - 0.5) * 300],
                  scale: [0, 1, 0.5, 0],
                  opacity: [1, 0.8, 0.3, 0]
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut"
                }}
              />
            ))}
          </motion.div>

          {/* Click to continue hint */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <motion.p
              className="text-white text-sm font-medium bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm"
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Cliquez n'importe où pour continuer
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WelcomeBalloon
