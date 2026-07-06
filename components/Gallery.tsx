'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { WHATSAPP_NUMBER } from '@/lib/products'

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      id: 1,
      src: '/products/fotos/tallebuzo.png',
      category: 'Buzos',
      title: '1/S  2/M   3/L   4/XL   5/XXL',
    },
    {
      id: 2,
      src: '/products/fotos/tallaremeras.png',
      category: 'Remeras',
      title: '1/S  2/M   3/L   4/XL   5/XXL',
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="gallery" className="w-full py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Tabla de Talles</h2>
          <p className="text-muted-foreground text-lg">1/S   2/M   3/L   4/XL   5/XXL</p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              onClick={() => setSelectedImage(image.id)}
              className="group cursor-pointer relative aspect-square rounded-lg overflow-hidden bg-white"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full text-white">
                  <p className="text-xs uppercase tracking-widest text-primary mb-1">{image.category}</p>
                  <h3 className="text-xl font-bold">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl aspect-square rounded-lg overflow-hidden"
            >
              <Image
                src={galleryImages.find(img => img.id === selectedImage)?.src || ''}
                alt="Gallery"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        )}

        {/* CTA 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          /*<p className="text-muted-foreground mb-4">
            
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola! Quiero personalizar productos`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-sm hover:bg-primary-dark transition-colors duration-300"
          >
            Consultar Ahora
          </a>
        </motion.div>*/}
      </div>
    </section>
  )
}
