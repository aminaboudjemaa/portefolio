import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, BarChart3, Database, TrendingUp } from 'lucide-react'
import { Brain, Cloud } from 'lucide-react'

const Projects = () => {
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

  const projects = [
    {
      title: "Application LLM & Traitement de Données",
      description: "Développement d'une application complète d'acquisition et traitement automatique de données utilisant des modèles de langage (LLM) pour l'analyse intelligente.",
      image: "🧠",
      technologies: ["Python", "LLM", "Machine Learning", "Cloud"],
      features: ["Interface utilisateur interactive", "Traitement automatique", "Déploiement cloud"],
      gradient: "from-blue-500 to-cyan-600",
      icon: Brain,
      company: "Thales"
    },
    {
      title: "Dashboards Grafana & Monitoring",
      description: "Création de dashboards Grafana avancés pour le monitoring en temps réel, avec analyse des logs système et visualisation des métriques de performance.",
      image: "📊",
      technologies: ["Grafana", "Prometheus", "PromQL", "Node Exporter"],
      features: ["Monitoring temps réel", "Alertes automatiques", "Visualisations interactives"],
      gradient: "from-emerald-500 to-teal-600",
      icon: BarChart3,
      company: "Outscale"
    },
    {
      title: "Infrastructure Cloud & Machines Virtuelles",
      description: "Mise en place d'une infrastructure cloud complète avec création et gestion de machines virtuelles, optimisation des ressources et monitoring des performances.",
      image: "☁️",
      technologies: ["Cloud Computing", "Machines Virtuelles", "RabbitMQ", "Monitoring"],
      features: ["Infrastructure scalable", "Gestion des ressources", "Optimisation des coûts"],
      gradient: "from-teal-500 to-emerald-600",
      icon: Cloud,
      company: "Outscale"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-teal-50 to-blue-50">
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
            <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
              Projets
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Des réalisations concrètes qui démontrent mon expertise en data science et cloud computing
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl glass shadow-lg"
            >
              {/* Project Image/Icon */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                  className="text-6xl"
                >
                  {project.image}
                </motion.div>
                
                {/* Company badge */}
                <div className="absolute top-4 right-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  {project.company}
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/20 rounded-full backdrop-blur-sm"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/20 rounded-full backdrop-blur-sm"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-10 h-10 bg-gradient-to-r ${project.gradient} rounded-full flex items-center justify-center mr-3`}
                  >
                    <project.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  {project.features.map((feature, featureIndex) => (
                    <motion.span
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        delay: index * 0.2 + featureIndex * 0.1 + 0.5,
                        duration: 0.3
                      }}
                      className="inline-block bg-teal-100 text-teal-700 text-xs px-3 py-1 rounded-full mr-2 mb-2 font-medium"
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ 
                        delay: index * 0.2 + techIndex * 0.1 + 0.7,
                        duration: 0.3
                      }}
                      className="text-xs bg-gradient-to-r from-blue-100 to-teal-100 text-blue-700 px-3 py-1 rounded-full border border-blue-200 font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

