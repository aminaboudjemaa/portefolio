import { motion } from 'framer-motion'
import { ArrowDown, BarChart3, Database, TrendingUp, Sparkles } from 'lucide-react'
import ProfileImage from './ProfileImage'
import profileImage from '../assets/images/6ae08f7e-497a-4624-aa90-24a8e5bc0109.jpg'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 80, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const artisticVariants = {
    animate: {
      rotate: [0, 360],
      scale: [1, 1.1, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Artistic background elements */}
      <div className="absolute inset-0">
        {/* Floating organic shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 artistic-blob opacity-30"></div>
        <div className="absolute top-40 right-20 w-24 h-24 artistic-circle opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 artistic-blob opacity-25"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 artistic-circle opacity-35"></div>
        
        {/* Animated sparkles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-teal-300 to-emerald-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 max-w-5xl mx-auto px-6"
      >
        {/* Artistic icon arrangement */}
        <motion.div
          variants={artisticVariants}
          animate="animate"
          className="mb-12 relative"
        >
          <div className="flex justify-center items-center space-x-8 mb-8">
            <motion.div
              whileHover={{ 
                scale: 1.3, 
                rotate: [0, -10, 10, 0],
                transition: { duration: 0.6 }
              }}
              className="p-4 bg-gradient-to-br from-amber-200 to-rose-200 rounded-3xl shadow-lg floating"
            >
              <BarChart3 className="w-10 h-10 text-amber-700" />
            </motion.div>
            
            <motion.div
              whileHover={{ 
                scale: 1.3, 
                rotate: [0, 10, -10, 0],
                transition: { duration: 0.6 }
              }}
              className="p-4 bg-gradient-to-br from-rose-200 to-amber-200 rounded-3xl shadow-lg floating-reverse"
            >
              <Database className="w-10 h-10 text-rose-700" />
            </motion.div>
            
            <motion.div
              whileHover={{ 
                scale: 1.3, 
                rotate: [0, -15, 15, 0],
                transition: { duration: 0.6 }
              }}
              className="p-4 bg-gradient-to-br from-amber-200 to-rose-200 rounded-3xl shadow-lg wave"
            >
              <TrendingUp className="w-10 h-10 text-amber-700" />
            </motion.div>
          </div>
          
          {/* Decorative sparkles around icons */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Sparkles className="w-6 h-6 text-amber-400 opacity-60" />
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex justify-center"
        >
          <ProfileImage 
            src={profileImage} 
            alt="Amina Boudjemaa" 
            className="w-48 h-48 md:w-64 md:h-64"
          />
        </motion.div>

        {/* Name with artistic styling */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold mb-6"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          <span className="bg-gradient-to-r from-amber-600 via-rose-500 to-amber-700 bg-clip-text text-transparent">
            Amina
          </span>
          <br />
          <span className="bg-gradient-to-r from-rose-600 via-amber-600 to-rose-700 bg-clip-text text-transparent">
            Boudjemaa
          </span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <span className="text-3xl md:text-4xl font-light text-gray-600 italic">
            Data Analyst & Visual Storyteller
          </span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Créatrice d'histoires visuelles à partir de données complexes, 
          <span className="text-amber-600 font-semibold"> transformant les chiffres en récits captivants</span> 
           <br />pour l'avenir numérique
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.08,
              boxShadow: "0 20px 40px rgba(212, 165, 116, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-gradient-to-r from-amber-500 to-rose-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 pulse-glow"
          >
            Découvrir mes créations
          </motion.button>
          
          <motion.button
            whileHover={{ 
              scale: 1.08,
              backgroundColor: "rgba(212, 165, 116, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 border-2 border-amber-400 text-amber-600 font-semibold rounded-full hover:bg-amber-50 transition-all duration-300"
          >
            Télécharger Portfolio
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-gray-400"
          >
            <span className="text-sm mb-3 font-medium">Explorer mon univers</span>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

