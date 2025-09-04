import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Briefcase, Palette, Globe } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const highlights = [
    { icon: GraduationCap, value: "Mathématiques", label: "Formation initiale" },
    { icon: Briefcase, value: "Reconversion", label: "Vers la tech" },
    { icon: Palette, value: "Créativité", label: "Art & Data" },
    { icon: Globe, value: "3 langues", label: "Français, Anglais, Arabe" }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-emerald-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            <span className="bg-gradient-to-r from-teal-500 to-emerald-600 bg-clip-text text-transparent">
              Mon parcours
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            De l'enseignement des mathématiques à l'analyse de données, 
            <span className="text-teal-600 font-semibold"> une reconversion passionnée</span> 
            vers les technologies de l'information
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="p-8 glass rounded-3xl"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mon parcours</h3>
              <p className="text-gray-600 leading-relaxed">
                Mon parcours a commencé par les mathématiques, puis s'est ouvert aux Technologies de l'Information à l'Université Sorbonne Paris Nord. Aujourd'hui, je mets ma rigueur analytique au service de l'exploration et de la visualisation des données.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-8 glass rounded-3xl"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ma vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Transformer et analyser les données me passionne. Mon approche allie 
                <span className="text-amber-600 font-semibold"> rigueur mathématique</span> et 
                <span className="text-rose-600 font-semibold"> créativité artistique</span> 
                pour transformer les chiffres en insights visuels et actionnables.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-2xl border border-teal-200 text-center shadow-lg"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <highlight.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div className="text-2xl font-bold text-gray-800 mb-2">{highlight.value}</div>
                <div className="text-gray-600 text-sm">{highlight.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

