import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "amina.boudjemaa.etu@gmail.com",
      link: "mailto:amina.boudjemaa.etu@gmail.com"
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+33 6 59 95 92 08",
      link: "tel:+33659959208"
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Paris, France",
      link: "#"
    }
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/aminaboudjemaa", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/amina-boudjem%C3%A2a-b4a688138/", label: "LinkedIn" },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-amber-50 to-rose-50">
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
              Contact
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Prêt à transformer vos données en insights visuels ? Discutons de votre prochain projet
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Informations de contact</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    variants={itemVariants}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-amber-200 hover:bg-white/90 transition-all duration-300 shadow-lg"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full flex items-center justify-center mr-4"
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <div className="text-gray-800 font-medium">{info.title}</div>
                      <div className="text-gray-600">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Réseaux sociaux</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
                  >
                    <social.icon className="w-6 h-6 text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              variants={itemVariants}
              className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-200 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Envoyez-moi un message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label className="block text-gray-800 font-medium mb-2">Nom</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/60 border border-amber-200 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:bg-white/80 transition-all duration-300"
                    placeholder="Votre nom"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-gray-800 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/60 border border-amber-200 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:bg-white/80 transition-all duration-300"
                    placeholder="votre@email.com"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-gray-800 font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/60 border border-amber-200 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:bg-white/80 transition-all duration-300 resize-none"
                    placeholder="Décrivez votre projet..."
                    required
                  />
                </motion.div>

                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Envoyer le message</span>
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

