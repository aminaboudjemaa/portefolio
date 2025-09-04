import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

const ProfileImage = ({ src, alt, className = "" }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const ref = useRef(null)

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Decorative frames */}
      <div className="absolute -inset-4 bg-gradient-to-br from-amber-100 to-rose-100 rounded-full opacity-30 blur-sm"></div>
      <div className="absolute -inset-2 bg-gradient-to-br from-amber-200 to-rose-200 rounded-full opacity-50 blur-sm"></div>
      
      {/* Main image container */}
      <motion.div
        className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-amber-100 to-rose-100"
        whileHover={{ 
          scale: 1.05,
          rotate: [0, -2, 2, 0],
          transition: { duration: 0.6 }
        }}
      >
        {/* Loading indicator */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full"
            />
          </div>
        )}
        {/* Image with artistic filters */}
        <motion.img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-all duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            filter: 'sepia(15%) contrast(1.05) brightness(1.02)',
            mixBlendMode: 'normal'
          }}
          onLoad={() => setIsLoaded(true)}
          onError={() => console.log('Erreur de chargement de l\'image:', src)}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        
        {/* Overlay gradient for warmth */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 to-rose-100/30 mix-blend-mode: overlay"></div>
        
        {/* Decorative elements */}
        <motion.div
          className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-br from-amber-300 to-rose-300 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-6 left-6 w-4 h-4 bg-gradient-to-br from-rose-300 to-amber-300 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>
      
      {/* Floating decorative elements */}
      <motion.div
        className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full"
        animate={{ 
          y: [-5, 5, -5],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute -bottom-3 -left-3 w-2 h-2 bg-gradient-to-br from-rose-400 to-amber-400 rounded-full"
        animate={{ 
          y: [5, -5, 5],
          rotate: [360, 180, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </motion.div>
  )
}

export default ProfileImage
