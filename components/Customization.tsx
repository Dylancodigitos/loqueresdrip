'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { WHATSAPP_NUMBER } from '@/lib/products'

export function Customization() {
  const services = [
    {
      id: 1,
      title: 'Remeras Personalizadas',
      description: 'Remeras con tu diseño único',
      image: '/customization/remera-custom.png',
      details: [
        'A partir de 2 unidades',
        'Diseños personalizados 100%',
        'Estampados de alta calidad',
        'Talles S al XXL',
      ],
    },
    {
      id: 2,  
      title: 'Conjuntos Personalizados',
      description: 'Pack completo para tu marca',
      image: '/customization/conjunto-custom.png',
      details: [
        'Buzos + Remeras + Pantalones',
        'Colores y diseños a medida',
        'Cantidad mínima flexible',
        'Atención dedicada',
      ],
    },
    {
      id: 3,
      title: 'Buzos/Remeras Personalizados con tu Pareja',
      description: 'Sets coordinados para parejas',
      image: '/products/fotos/parejas.png',
      details: [
        'Diseño con QR personalizado con Fotos',
        'Diseños conjuntados para dos',
        'Logo pequeño + diseño grande',
        'A partir de 2 unidades (mínimo 2 buzos)',
      ],
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="customization" className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6 px-4 py-2 border-2 border-red-600 bg-white rounded"
          >
            <span className="text-red-600 font-bold text-sm tracking-widest">SERVICIOS PERSONALIZADOS</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">Personalizaciones</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">Tu diseño, tu estilo, tu marca</p>
        </motion.div>

        {/* Servicios Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300"
            >
              {/* Imagen */}
              <div className="relative overflow-hidden bg-gray-100 h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-red-600 transition">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                {/* Detalles */}
                <ul className="space-y-3 mb-6">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-red-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola! Me interesa personalizar ${service.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition group/btn"
                >
                  Solicitar Info
                  <ArrowRight className="group-hover/btn:translate-x-1 transition" size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proceso */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black text-white rounded-lg p-12"
        >
          <h3 className="text-3xl font-bold mb-10 text-center">Proceso Simple</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Contactate', desc: 'Por WhatsApp o Instagram' },
              { step: '2', title: 'Diseño', desc: 'Tu idea, nuestro arte' },
              { step: '3', title: 'Cotización', desc: 'Precios competitivos' },
              { step: '4', title: 'Entrega', desc: 'Rápido y seguro' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-4">¿Tienes un proyecto especial?</p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola! Tengo un proyecto personalizado`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition"
          >
            Hablemos por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
