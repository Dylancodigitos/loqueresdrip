'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import { WHATSAPP_NUMBER } from '@/lib/products'

export function Hero() {
  return (
    <section id="home" className="w-full min-h-screen pt-16 bg-white flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hidden md:block absolute top-20 right-10 w-96 h-96 bg-red-600 opacity-5 rounded-full blur-3xl" />
        <div className="hidden md:block absolute bottom-20 left-10 w-96 h-96 bg-black opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-6 px-4 py-2 border-2 border-red-600 bg-white w-fit rounded"
            >
              <span className="text-red-600 font-bold text-sm tracking-widest">INDUMENTARIA DRIP JORDAN</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
            >
              <span className="text-black">LO QUERES</span>
              <br />
              <span className="text-red-600">DRIP</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed font-semibold"
            >
              Ropa urbana premium con estilo Jordan. Buzos de tela frizada, remeras personalizadas y conjuntos exclusivos.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="#catalogo"
                className="px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition hover:shadow-lg"
              >
                Ver Catálogo
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola! Quiero conocer más sobre LO QUERES DRIP`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition hover:shadow-lg flex items-center gap-2"
              >
                💬 Escribir
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200"
            >
              <div>
                <p className="text-2xl font-bold text-red-600">+20</p>
                <p className="text-sm text-gray-600">Clientes Satisfechos</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-600">+30</p>
                <p className="text-sm text-gray-600">Diseños</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-600">S-XXL</p>
                <p className="text-sm text-gray-600">Todos los Talles</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Banner Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square lg:aspect-auto lg:h-screen lg:max-h-[600px] flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="LO QUERES DRIP"
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-red-600 text-white p-4 rounded-lg font-bold shadow-lg hidden lg:block"
            >
              <p className="text-2xl">LO QUERES</p>
              <p className="text-2xl">LO TENÉS</p>
              <p className="text-3xl font-black">YA!</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="text-red-600" size={32} />
      </motion.div>
    </section>
  )
}
