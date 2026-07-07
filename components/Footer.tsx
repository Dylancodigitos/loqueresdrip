'use client'

import { motion } from 'framer-motion'
import { Heart, Mail, MapPin, Phone } from 'lucide-react'
import { WHATSAPP_NUMBER } from '@/lib/products'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Heart,
      label: 'Instagram',
      href: 'https://instagram.com/loqueresdrip',
      color: 'hover:text-pink-600',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:loqueresdrip@gmail.com',
      color: 'hover:text-blue-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer id="contact" className="w-full bg-secondary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center mb-4">
              <span className="text-white font-bold">LQ</span>
            </div>
            <h3 className="text-xl font-bold mb-2">LO QUERES DRIP</h3>
            <p className="text-gray-300 text-sm">
              Ropa urbana premium con estilo Jordan. Buzos, remeras y conjuntos personalizados.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-4 text-primary">Navegación</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Inicio', href: '#home' },
                { label: 'Catálogo', href: '#catalog' },
                { label: 'Personalizaciones', href: '#customization' },
                { label: 'Talles', href: '#gallery' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-4 text-primary">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">+54 9 112282-6793</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">loqueresdrip@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Berazategui, Argentina</span>
              </div>
            </div>
          </motion.div>

          {/* Social & CTA */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-4 text-primary">Síguenos</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3 }}
                    className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 ${social.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola! Quiero consultar sobre los productos`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center px-4 py-2 bg-primary text-white font-medium rounded-sm hover:bg-primary-dark transition-colors duration-300"
            >
              WhatsApp
            </a>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
        >
          <p>
            © {currentYear} LO QUERES DRIP. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Términos de Servicio
            </a>
          </div>
        </motion.div>
      </div>

      {/* Brand Bar */}
      <div className="bg-foreground/10 py-4 text-center text-sm text-gray-400">
        Premium Streetwear para Emprendedores
      </div>
    </footer>
  )
}
