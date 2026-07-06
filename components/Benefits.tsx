'use client'

import { motion } from 'framer-motion'
import { Award, Truck, Users, Zap } from 'lucide-react'

export function Benefits() {
  const benefits = [
    {
      icon: Award,
      title: 'Calidad Premium',
      description: 'Materiales de Friza y Algodón de alta calidad, garantizando comodidad y durabilidad en cada prenda.',
    },
    {
      icon: Users,
      title: 'Atención Personalizada',
      description: 'Te Asesoramos para que elijas la mejor opción para tu estilo y necesidades',
    },
    {
      icon: Truck,
      title: 'Envíos Rápidos',
      description: 'Despachamos en 24/48hs',
    },
    {
      icon: Zap,
      title: 'Talles Completos',
      description: 'Disponibles en todas las medidas: S, M, L, XL, XXL para toda la familia.',
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
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Por qué Elegirnos</h2>
          <p className="text-muted-foreground text-lg">La Mejor Indumentaria Para Vos</p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative bg-muted rounded-lg p-8 h-full group-hover:bg-white transition-colors duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: '+20', label: 'productos vendidos' },
            { number: '100%', label: 'satisfacción' },
            { number: '24hs', label: 'despacho garantizado' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-black text-primary mb-2">
                {stat.number}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
