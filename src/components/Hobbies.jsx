import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Palette, Heart, Globe, BookOpen } from 'lucide-react'

const Hobbies = () => {
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

  const hobbies = [
    {
      title: "Art & Créativité",
      description: "Peinture et sculpture pour exprimer ma créativité et développer ma sensibilité artistique",
      icon: Palette,
      color: "from-pink-400 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
      borderColor: "border-pink-200"
    },
    {
      title: "Bénévolat",
      description: "Engagement social et partage de mes compétences pour contribuer positivement à la communauté",
      icon: Heart,
      color: "from-red-400 to-pink-500",
      bgColor: "from-red-50 to-pink-50",
      borderColor: "border-red-200"
    },
    {
      title: "Multilinguisme",
      description: "Français, anglais et arabe - une ouverture culturelle qui enrichit ma perspective professionnelle",
      icon: Globe,
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Formation Continue",
      description: "Étudiante en Technologies de l'Information, toujours en quête de nouveaux apprentissages",
      icon: BookOpen,
      color: "from-emerald-400 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200"
    }
  ]

  return (
    <section id="hobbies" className="py-20 bg-gradient-to-b from-blue-50 to-emerald-50">
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
            <span className="bg-gradient-to-r from-blue-500 to-emerald-600 bg-clip-text text-transparent">
              Au-delà du code
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Une personnalité riche qui allie 
            <span className="text-blue-600 font-semibold"> créativité artistique</span> et 
            <span className="text-emerald-600 font-semibold"> engagement social</span>
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className={`p-6 bg-gradient-to-br ${hobby.bgColor} rounded-2xl border ${hobby.borderColor} shadow-lg text-center`}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
                className={`w-16 h-16 bg-gradient-to-r ${hobby.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
              >
                <hobby.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{hobby.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{hobby.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="p-8 glass rounded-3xl max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Une approche unique de la data science
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Mon parcours atypique, alliant formation mathématique, expérience d'enseignement, 
              et passion artistique, me permet d'aborder l'analyse de données avec une perspective 
              unique. Je vois les données comme une toile sur laquelle je peins des histoires 
              visuelles, transformant la complexité en clarté grâce à ma sensibilité pédagogique 
              et créative.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hobbies
