'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: 'Minorista',
      role: '1-2 prendas',
      content: 'Precio unitario premium. Ideal para compradores individuales que buscan calidad superior en ropa urbana.',
      rating: 5,
    },
    {
      name: 'Mayorista',
      role: '3+ prendas',
      content: 'Descuento especial a partir de 3 unidades. Perfecto para resellers y emprendedores con margin extra.',
      rating: 5,
    },
    {
      name: 'Personalizado',
      role: 'Para tu marca',
      content: 'Remeras, buzos y conjuntos personalizados. Mínimo de 5 unidades. Estampado y diseño a tu gusto.',
      rating: 5,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  /*return (
    <section className="w-full py-20 bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header }
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Venta Mayorista y Minorista</h2>
          <p className="text-gray-300 text-lg">Los mejores precios para tu negocio</p>
        </motion.div>

        {/* Testimonials Grid }
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:border-primary/50 transition-colors duration-300"
            >
              {/* Stars }
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content }
              <p className="text-white/90 mb-6 text-sm leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author }
              <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-primary text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )*/
}
