import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import QRCodeLib from 'qrcode'

const QRCode = ({ url, className = "" }) => {
  const canvasRef = useRef(null)
  const [isGenerated, setIsGenerated] = useState(false)

  useEffect(() => {
    const generateQR = async () => {
      if (canvasRef.current) {
        try {
          await QRCodeLib.toCanvas(canvasRef.current, url, {
            width: 200,
            margin: 2,
            color: {
              dark: '#d97706', // amber-600
              light: '#fefefe'
            },
            errorCorrectionLevel: 'M'
          })
          setIsGenerated(true)
        } catch (error) {
          console.error('Erreur génération QR:', error)
        }
      }
    }
    generateQR()
  }, [url])

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Decorative frames */}
      <div className="absolute -inset-4 bg-gradient-to-br from-amber-100 to-rose-100 rounded-2xl opacity-30 blur-sm"></div>
      <div className="absolute -inset-2 bg-gradient-to-br from-amber-200 to-rose-200 rounded-2xl opacity-50 blur-sm"></div>
      
      {/* Main QR container */}
      <motion.div
        className="relative p-4 bg-white rounded-2xl shadow-lg"
        whileHover={{ 
          scale: 1.05,
          rotate: [0, -1, 1, 0],
          transition: { duration: 0.3 }
        }}
      >
        {/* QR Code */}
        <canvas
          ref={canvasRef}
          className={`transition-opacity duration-500 ${isGenerated ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Loading indicator */}
        {!isGenerated && (
          <div className="w-[200px] h-[200px] flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full"
            />
          </div>
        )}
        
        {/* Decorative elements */}
        <motion.div
          className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-rose-400 to-amber-400 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>
      
      {/* Text below QR */}
      <motion.div
        className="mt-4 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <p className="text-sm font-medium text-gray-600 mb-1">Scanne-moi</p>
        <p className="text-xs text-gray-500">Accéder au portfolio</p>
      </motion.div>
    </motion.div>
  )
}

export default QRCode
