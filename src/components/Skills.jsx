import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Database, 
  BarChart3, 
  Code, 
  Brain, 
  TrendingUp, 
  PieChart,
  Cloud,
  Monitor
} from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const skillCategories = [
    {
      title: "Langages & Frameworks",
      icon: Code,
      skills: [
        { name: "Python", level: 90, color: "from-yellow-400 to-orange-500" },
        { name: "Pandas", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "NumPy", level: 80, color: "from-green-400 to-green-600" },
        { name: "R", level: 75, color: "from-red-400 to-red-600" },
        { name: "Django", level: 70, color: "from-emerald-400 to-emerald-600" },
        { name: "Node.js", level: 65, color: "from-teal-400 to-teal-600" }
      ]
    },
    {
      title: "Monitoring & Visualisation",
      icon: Monitor,
      skills: [
        { name: "Grafana", level: 90, color: "from-orange-400 to-orange-600" },
        { name: "Kibana", level: 80, color: "from-blue-400 to-blue-600" },
        { name: "Prometheus", level: 85, color: "from-red-400 to-red-600" },
        { name: "PromQL", level: 80, color: "from-purple-400 to-purple-600" },
        { name: "Matplotlib", level: 85, color: "from-green-400 to-green-600" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      skills: [
        { name: "Machines Virtuelles", level: 85, color: "from-cyan-400 to-cyan-600" },
        { name: "RabbitMQ", level: 75, color: "from-orange-400 to-orange-600" },
        { name: "Node Exporter", level: 80, color: "from-blue-400 to-blue-600" },
        { name: "Déploiement Cloud", level: 75, color: "from-emerald-400 to-emerald-600" }
      ]
    },
    {
      title: "Analyse & Traitement",
      icon: Brain,
      skills: [
        { name: "SQL & Optimisation", level: 90, color: "from-indigo-400 to-indigo-600" },
        { name: "Statistiques", level: 95, color: "from-pink-400 to-pink-600" },
        { name: "Traitement de données", level: 90, color: "from-teal-400 to-teal-600" },
        { name: "LLM & IA", level: 75, color: "from-purple-400 to-purple-600" }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-emerald-50 to-teal-50">
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
            <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Compétences
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Une expertise technique solide acquise lors de mes expériences professionnelles
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-8 glass rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full flex items-center justify-center mr-4"
                >
                  <category.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-gray-800">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} bg-opacity-10 border border-amber-200 text-center shadow-sm hover:shadow-md transition-all duration-300`}
                  >
                    <div className="text-gray-800 font-medium text-sm">{skill.name}</div>
                    <motion.div
                      className="mt-2 w-8 h-8 mx-auto rounded-full bg-gradient-to-r from-amber-400 to-rose-400 flex items-center justify-center"
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: skillIndex * 0.2
                      }}
                    >
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

