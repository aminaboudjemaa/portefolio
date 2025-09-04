import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, Cloud, Brain, Code, Database, BarChart3 } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const experiences = [
    {
      company: "Outscale",
      role: "Analyste de données & Monitoring",
      period: "Stage précédent",
      icon: BarChart3,
      color: "from-amber-400 to-rose-500",
      bgColor: "from-amber-50 to-rose-50",
      borderColor: "border-amber-200",
      achievements: [
        "Analyse approfondie des logs système et création de dashboards Grafana",
        "Mise en place du monitoring avec Prometheus et Node Exporter",
        "Apprentissage des concepts cloud et création de machines virtuelles",
        "Optimisation des requêtes PromQL pour un monitoring efficace"
      ],
      technologies: ["Grafana", "Prometheus", "PromQL", "Cloud", "Monitoring"]
    },
    {
      company: "Thales",
      role: "Développeuse Data & IA",
      period: "Stage récent",
      icon: Brain,
      color: "from-rose-400 to-amber-500",
      bgColor: "from-rose-50 to-amber-50",
      borderColor: "border-rose-200",
      achievements: [
        "Développement d'une application d'acquisition et traitement automatique de données avec LLM",
        "Conception et développement d'une interface utilisateur interactive",
        "Déploiement sur infrastructure cloud avec optimisation des performances",
        "Intégration de modèles de machine learning pour l'analyse prédictive"
      ],
      technologies: ["Python", "LLM", "Cloud", "Machine Learning", "UI/UX"]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-amber-50 to-rose-50">
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
            <span className="bg-gradient-to-r from-amber-500 to-rose-600 bg-clip-text text-transparent">
              Expériences
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Des stages enrichissants qui m'ont permis de développer mes compétences 
            <span className="text-amber-600 font-semibold"> en data science et cloud computing</span>
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Company Info */}
              <motion.div
                variants={itemVariants}
                className="flex-1"
              >
                <div className={`p-8 bg-gradient-to-br ${exp.bgColor} rounded-3xl border ${exp.borderColor} shadow-lg`}>
                  <div className="flex items-center mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center mr-4`}
                    >
                      <exp.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{exp.company}</h3>
                      <p className="text-lg text-gray-600 font-medium">{exp.role}</p>
                      <p className="text-sm text-gray-500">{exp.period}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-800">Réalisations clés :</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: index * 0.3 + achIndex * 0.1 + 0.5 }}
                          className="flex items-start"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full mt-2 mr-3 flex-shrink-0`} />
                          <span className="text-gray-600 leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Technologies utilisées :</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ delay: index * 0.3 + techIndex * 0.1 + 0.7 }}
                          className={`px-3 py-1 bg-gradient-to-r ${exp.color} text-white text-sm rounded-full font-medium`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Visual Element */}
              <motion.div
                variants={itemVariants}
                className="flex-1 flex justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className={`w-64 h-64 bg-gradient-to-br ${exp.bgColor} rounded-3xl border ${exp.borderColor} flex items-center justify-center shadow-lg`}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className={`w-32 h-32 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center`}
                  >
                    <exp.icon className="w-16 h-16 text-white" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
