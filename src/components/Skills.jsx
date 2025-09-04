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

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : { width: 0 }}
                    transition={{ 
                      duration: 1, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                      ease: "easeOut"
                    }}
                    className="relative"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.7,
                          ease: "easeOut"
                        }}
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color} shadow-sm`}
                      />
                    </div>
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

