'use client'

import { motion } from 'framer-motion'
import { Heart, ShoppingCart, Plus } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { PRODUCTS, CATEGORIES } from '@/lib/products'
import { useCart } from '@/lib/CartContext'

export function Catalog() {
  const { addItem, items } = useCart()
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [favorites, setFavorites] = useState<Set<number>>(new Set())
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set())

  const filteredProducts =
    selectedCategory === 'Todos'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory)

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const handleAddToCart = (e: React.MouseEvent, product: (typeof PRODUCTS)[0]) => {
    e.preventDefault()
    e.stopPropagation()
    const key = `${product.id}-${product.sizes[0]}-retail`
    addItem({
      id: product.id,
      name: product.name,
      price: product.priceRetail,
      priceRetail: product.priceRetail,
      priceWholesale: product.priceWholesale,
      image: product.image,
      size: product.sizes[0],
      buyType: 'retail',
    })
    setAddedIds((prev) => new Set(prev).add(key))
    setTimeout(() => {
      setAddedIds((prev) => {
        const next = new Set(prev)
        next.delete(key)
        return next
      })
    }, 1800)
  }

  return (
    <section id="catalogo" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            CATÁLOGO <span className="text-red-600">DRIP</span>
          </h2>
          <p className="text-gray-500 text-base">Prendas premium seleccionadas para ti</p>
        </motion.div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition ${
                selectedCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-black hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => {
            const cartKey = `${product.id}-${product.sizes[0]}-retail`
            const justAdded = addedIds.has(cartKey)
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                  {/* Imagen — entera clickeable */}
                  <Link href={`/producto/${product.id}`} className="relative overflow-hidden bg-gray-50 aspect-square block">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-400"
                    />
                    <div className="absolute top-3 right-3 bg-red-600 text-white px-2.5 py-1 rounded-full text-xs font-bold">
                      {Math.round(((product.priceRetail - product.priceWholesale) / product.priceRetail) * 100)}% MAYOR
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        toggleFavorite(product.id)
                      }}
                      className="absolute top-3 left-3 bg-white rounded-full p-2 hover:bg-gray-100 transition shadow-sm"
                    >
                      <Heart
                        size={16}
                        fill={favorites.has(product.id) ? 'currentColor' : 'none'}
                        className={favorites.has(product.id) ? 'text-red-600' : 'text-gray-300'}
                      />
                    </button>
                  </Link>

                  {/* Contenido */}
                  <div className="p-4 flex-1 flex flex-col">
                    <p className="text-xs text-red-600 font-bold tracking-widest mb-1 uppercase">{product.category}</p>
                    <Link href={`/producto/${product.id}`}>
                      <h3 className="font-bold text-base mb-1 hover:text-red-600 transition leading-tight">{product.name}</h3>
                    </Link>
                    {product.material && (
                      <p className="text-xs text-gray-400 mb-3">{product.material}</p>
                    )}

                    {/* Precios */}
                    <div className="bg-gray-50 rounded-xl p-3 mb-4 flex-1">
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-xs text-gray-400">Minorista</p>
                          <p className="font-black text-lg">${product.priceRetail.toLocaleString()}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-400">Mayorista (3+)</p>
                          <p className="font-black text-lg text-red-600">${product.priceWholesale.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-gray-400 mb-3">Talles: {product.sizes.join(' · ')}</p>

                    {/* Botones */}
                    <div className="flex gap-2">
                      <Link
                        href={`/producto/${product.id}`}
                        className="flex-1 bg-black text-white py-2.5 rounded-xl text-sm font-bold text-center hover:bg-gray-800 transition"
                      >
                        Ver producto
                      </Link>
                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className={`px-3 rounded-xl transition flex items-center justify-center ${
                          justAdded
                            ? 'bg-green-600 text-white'
                            : 'bg-gray-100 text-black hover:bg-gray-200'
                        }`}
                        title="Agregar al carrito"
                      >
                        {justAdded ? <ShoppingCart size={18} /> : <Plus size={18} />}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
