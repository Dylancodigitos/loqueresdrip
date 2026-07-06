'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: '¿Cuál es el mínimo de productos para compra mayorista?',
      answer: 'Ofrecemos precios especiales desde 3 unidades. Con cantidades mayores, los precios mejoran progresivamente.',
    },
    
    {
      question: '¿Cuánto tiempo tarda el despacho?',
      answer: 'Despachamos en 24-48hs. Los envíos a coordinar'
    },
    {
      question: '¿Hacen personalizaciones?',
      answer: 'Sí, hacemos remeras, buzos y conjuntos personalizados a partir de 2 unidades con diseños únicos para tu marca.',
    },
    {
      question: '¿Tienen todos los talles?',
      answer: 'Sí, contamos con talles desde S hasta XXL en todos nuestros productos.',
    },
  
    {
      question: '¿Cuáles son las formas de pago?',
      answer: 'Trabajamos con transferencia, efectivo.',
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
    <section className="w-full py-20 bg-muted">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Preguntas Frecuentes</h2>
          <p className="text-muted-foreground text-lg">Resolvemos tus dudas sobre compras y productos</p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted transition-colors duration-300"
              >
                <h3 className="text-lg font-bold text-left">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                </motion.div>
              </button>

              {/* Answer */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 bg-white border-t border-border text-muted-foreground">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-primary text-white rounded-lg text-center"
        >
          <h3 className="text-2xl font-bold mb-4">¿Aún tienes preguntas?</h3>
          <a
            href="https://wa.me/5491234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-primary font-bold rounded-sm hover:bg-gray-100 transition-colors duration-300"
          >
            Contactar por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
